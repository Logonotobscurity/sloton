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

// 1. CONSTRUCT THE KNOWLEDGE BASE
// =================================================================
// Combine all content sources into a single, searchable knowledge base.
const knowledge = [
    ...insights.map(i => ({ type: 'Insight', title: i.title, content: i.description, slug: `/insights/${i.slug}` })),
    ...caseStudies.map(cs => ({ type: 'Case Study', title: cs.title, content: cs.description, slug: `/use-cases` })),
    ...services.map(s => ({ type: 'Service', title: s.title, content: s.description, slug: `/solutions#${s.id}` })),
    ...industryApplications.map(ia => ({ type: 'Industry Solution', title: ia.industry, content: `${ia.challenge} ${ia.solution}`, slug: `/use-cases#${ia.industry.toLowerCase().replace(/\s/g, '-')}` })),
    ...trainingPrograms.map(tp => ({ type: 'Training', title: tp.title, content: tp.description, slug: `/training#programs` })),
];

// 2. DEFINE THE TOOLS
// =================================================================

const searchKnowledgeBase = ai.defineTool(
    {
        name: 'searchKnowledgeBase',
        description: "Searches the company's knowledge base to answer questions about its services, solutions, case studies, insights, and training programs.",
        inputSchema: z.object({ query: z.string() }),
        outputSchema: z.array(z.object({
            type: z.string(),
            title: z.string(),
            content: z.string(),
            slug: z.string(),
        })),
    },
    async (input) => {
        const query = input.query.toLowerCase();
        // In a real-world scenario, you would use a vector database (e.g., Pinecone, Chroma) for semantic search.
        // For this demo, a simple keyword search will suffice.
        return knowledge.filter(doc =>
            doc.title.toLowerCase().includes(query) ||
            doc.content.toLowerCase().includes(query)
        ).slice(0, 4); // Return top 4 matches
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
    answer: z.string().describe("The final, helpful, and conversational answer to the user. It should be written in a friendly and professional tone. If suggesting an action, phrase it as a question."),
    sources: z.array(z.object({
        slug: z.string(),
        title: z.string(),
    })).optional().describe("A list of knowledge base articles used to generate the answer. Only include this if you used the searchKnowledgeBase tool."),
    suggested_actions: z.array(z.string()).optional().describe("A list of 2-3 relevant follow-up questions or actions the user might want to take next. Example: 'Tell me more about AI Solutions', 'Book a free consultation'"),
});
export type AssistantResponse = z.infer<typeof AssistantResponseSchema>;


// 4. DEFINE THE MAIN PROMPT & FLOW
// =================================================================

const assistantPrompt = ai.definePrompt({
  name: 'ragAssistantPrompt',
  input: { schema: AssistantRequestSchema },
  output: { schema: AssistantResponseSchema },
  tools: [searchKnowledgeBase, bookMeeting, provideContactOptions],
  prompt: `You are GIGPILOT, a friendly and expert AI assistant for LOG_ON, a technology consulting company in Nigeria specializing in AI and automation.

Your primary goal is to understand the user's needs and guide them towards the most relevant solution, insight, or action. You are a business development representative and a support agent.

**Your Guiding Principles:**
1.  **Be Helpful & Conversational:** Always be polite, clear, and professional.
2.  **Use Your Tools:** You have tools to search the knowledge base, book meetings, and provide contact info. Use them when appropriate.
3.  **Generate Leads:** If a user expresses a business need that LOG_ON can solve, your main goal is to guide them towards booking a meeting. Don't be pushy, but be proactive. For example, after explaining a service, ask "Would you like to book a free consultation to discuss how this could help your business?"
4.  **Cite Your Sources:** When you use the knowledge base, you MUST cite the sources in your response.
5.  **Suggest Next Steps:** Always provide 2-3 relevant "suggested_actions" to guide the conversation and make it easy for the user. These can be follow-up questions or calls to action like booking a meeting.

**Conversation History:**
{{#each history}}
  {{role}}: {{content}}
{{/each}}

**User's Current Question:**
{{{question}}}

**Your Task:**
1.  Analyze the user's question and conversation history.
2.  If you have enough information, answer directly and suggest next steps.
3.  If you need more information, use the 'searchKnowledgeBase' tool.
4.  If the user wants to talk to a person or book a meeting, use the 'bookMeeting' or 'provideContactOptions' tools.
5.  Formulate a concise, helpful response based on the tool output and your guiding principles.
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
        return output!;
    }
);

export async function askRagAssistant(input: AssistantRequest): Promise<AssistantResponse> {
  return ragAssistantFlow(input);
}
