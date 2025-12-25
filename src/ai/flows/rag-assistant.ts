
'use server';
/**
 * @fileOverview A RAG-powered assistant flow that has deep knowledge of the company's services
 * and can use tools to book meetings or provide contact options.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { insights } from '@/lib/insights';
import { caseStudies } from '@/lib/case-studies';
import { services, industryApplications } from '@/lib/data/solutions-data';
import { trainingPrograms } from '@/lib/data/training-data';

// 1. ENHANCED KNOWLEDGE BASE
// =================================================================
const knowledge = [
    ...insights.map(i => ({ type: 'Insight', title: i.title, content: i.description, slug: `/insights/${i.slug}`, tags: ['blog', 'article'] })),
    ...caseStudies.map(cs => ({ type: 'Case Study', title: cs.title, content: cs.description, slug: `/use-cases`, tags: ['proof', 'results'] })),
    ...services.map(s => ({ type: 'Service', title: s.title, content: s.description, slug: `/solutions#${s.id}`, tags: ['offering', 'pricing'] })),
    ...industryApplications.map(ia => ({ type: 'Industry Solution', title: ia.industry, content: `${ia.challenge} ${ia.solution}`, slug: `/use-cases#${ia.industry.toLowerCase().replace(/\s/g, '-')}`, tags: ['vertical', 'specialization'] })),
    ...trainingPrograms.map(tp => ({ type: 'Training', title: tp.title, content: tp.description, slug: `/training#programs`, tags: ['education', 'upskilling'] })),
];


// 2. REFINED TOOLS
// =================================================================

const searchKnowledgeBase = ai.defineTool(
    {
        name: 'searchKnowledgeBase',
        description: "Semantic search across LOG_ON's services, AI solutions, case studies, and training. Use this for ANY question about what the company does.",
        inputSchema: z.object({ query: z.string() }),
        outputSchema: z.array(z.object({
            type: z.string(),
            title: z.string(),
            content: z.string(),
            slug: z.string(),
            relevance: z.number()
        })),
    },
    async (input) => {
        const query = input.query.toLowerCase();
        const terms = query.split(' ').filter(t => t.length > 2);
        
        // Simple Weighted Scoring Algorithm
        return knowledge.map(doc => {
            let score = 0;
            const fullText = `${doc.title} ${doc.content}`.toLowerCase();
            
            // Exact phrase match (High weight)
            if (fullText.includes(query)) score += 10;
            
            // Title match (Medium weight)
            if (doc.title.toLowerCase().includes(query)) score += 5;
            
            // Individual term matches (Low weight)
            terms.forEach(term => {
                if (fullText.includes(term)) score += 1;
            });

            return { ...doc, relevance: score };
        })
        .filter(doc => doc.relevance > 0)
        .sort((a, b) => b.relevance - a.relevance)
        .slice(0, 4);
    }
);

const bookMeeting = ai.defineTool({
    name: "bookMeeting",
    description: "Use this tool when the user expresses interest in a demo, consultation, or wants to discuss a project. It allows the user to book a meeting with the sales team.",
    inputSchema: z.object({
        interest: z.string().describe("The specific topic the user is interested in, e.g., 'AI Solutions', 'Web Development'.")
    }),
    outputSchema: z.object({
        status: z.literal("meeting_booked"),
        interest: z.string(),
    }),
}, async ({ interest }) => {
    return { status: "meeting_booked", interest };
});

const provideContactOptions = ai.defineTool({
    name: "provideContactOptions",
    description: "Use this tool when the user explicitly asks to speak to a person, get contact details, or wants to use WhatsApp.",
    inputSchema: z.object({}),
    outputSchema: z.object({
        status: z.literal("contact_options_provided"),
        phone: z.string(),
        whatsapp: z.string(),
        email: z.string(),
    }),
}, async () => {
    return {
        status: "contact_options_provided",
        phone: "+234 814 306 6320",
        whatsapp: "https://wa.me/qr/QFSBRGKZGHP3F1",
        email: "logonthepage@gmail.com",
    };
});


// 3. DEFINE THE INPUT/OUTPUT SCHEMAS
// =================================================================

const AssistantRequestSchema = z.object({
    history: z.array(z.object({
        role: z.enum(['user', 'assistant', 'tool']),
        content: z.string(),
    })).optional(),
    question: z.string(),
});
export type AssistantRequest = z.infer<typeof AssistantRequestSchema>;

const AssistantResponseSchema = z.object({
    answer: z.string().describe("Friendly, professional response using Markdown for lists/bolding."),
    sources: z.array(z.object({
        slug: z.string(),
        title: z.string(),
    })).optional(),
    suggested_actions: z.array(z.string()).max(3).describe("Contextual next steps. If user is browsing, suggest a case study. If user is interested, suggest booking."),
    confidence_score: z.number().optional().describe("0-1 score of how well the search results answered the user.")
});
export type AssistantResponse = z.infer<typeof AssistantResponseSchema>;


// 4. DEFINE THE MAIN PROMPT & FLOW
// =================================================================

const assistantPrompt = ai.definePrompt({
  name: 'ragAssistantPrompt',
  input: { schema: AssistantRequestSchema },
  output: { schema: AssistantResponseSchema },
  tools: [searchKnowledgeBase, bookMeeting, provideContactOptions],
  prompt: `
    System Context:
    You are GIGPILOT, the Lead AI Strategist for LOG_ON (Nigeria's premier AI consultancy).
    
    Personality: 
    - Expert yet accessible. 
    - Use Nigerian English nuances where appropriate (warm, respectful) but maintain global professional standards.
    
    Operational Rules:
    1. ALWAYS check the knowledge base if the user asks "How do you...", "Do you...", or "Tell me about...".
    2. If multiple services are relevant, briefly summarize the top 2.
    3. CITE: Use [Source Title](slug) format in the text.
    4. LEAD GEN: If the user asks about ROI, cost, or implementation, immediately offer a free consultation using the suggested_actions.
    
    User Query: {{{question}}}
  `,
});

const ragAssistantFlow = ai.defineFlow(
    {
        name: 'ragAssistantFlow',
        inputSchema: AssistantRequestSchema,
        outputSchema: AssistantResponseSchema,
    },
    async (input) => {
        const { output } = await assistantPrompt(input);
        
        if (!output) {
            throw new Error("No response from AI engine");
        }
        
        return output;
    }
);

export async function askRagAssistant(input: AssistantRequest): Promise<AssistantResponse> {
  try {
    return await ragAssistantFlow(input);
  } catch (error) {
    console.error("GIGPILOT_ERROR:", error);
    return {
        answer: "I'm currently having a bit of trouble accessing my knowledge base. Would you like to speak directly with our team via WhatsApp?",
        suggested_actions: ["Chat on WhatsApp", "View Services Overview"],
        confidence_score: 0
    };
  }
}
