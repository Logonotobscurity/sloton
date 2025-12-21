'use server';
/**
 * @fileOverview A support chatbot flow that uses a knowledge base to answer questions.
 *
 * - supportChat - A function that answers questions based on a knowledge base of insights.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit/zod';
import { insights } from '@/lib/insights';

const knowledgeBase = insights.map(i => ({
    content: `Title: ${i.title}\nDescription: ${i.description}\nTags: ${i.tags.join(', ')}\nContent available at slug: /insights/${i.slug}`,
    slug: i.slug,
    title: i.title,
}));

const searchKnowledgeBase = ai.defineTool(
    {
        name: 'searchKnowledgeBase',
        description: 'Searches the knowledge base for relevant information about AI, automation, business strategy, and technology.',
        inputSchema: z.object({ query: z.string() }),
        outputSchema: z.array(z.object({ title: z.string(), slug: z.string(), content: z.string() })),
    },
    async (input) => {
        const query = input.query.toLowerCase();
        // A simple keyword-based search. A real implementation would use vector search.
        return knowledgeBase
            .filter(doc => doc.content.toLowerCase().includes(query))
            .slice(0, 3); // Return top 3 matches
    }
);

const SupportChatRequestSchema = z.object({
    history: z.array(z.object({
        role: z.string(),
        content: z.string(),
    })).optional(),
    question: z.string(),
});

const SupportChatResponseSchema = z.object({
    answer: z.string().describe("The final, concise answer to the user's question."),
    sources: z.array(z.object({
        slug: z.string(),
        title: z.string(),
    })).describe("A list of knowledge base articles used to generate the answer."),
});

const supportChatPrompt = ai.definePrompt({
  name: 'supportChatPrompt',
  inputSchema: SupportChatRequestSchema,
  outputSchema: SupportChatResponseSchema,
  tools: [searchKnowledgeBase],
  prompt: `You are a helpful and friendly support assistant for LOG_ON, a technology consulting company specializing in AI and automation.

    Your goal is to answer user questions based *only* on the information provided from the knowledge base search tool.
    Do not make up answers. If the knowledge base does not contain the answer, politely state that you don't have that information and suggest they contact support directly.

    Here is the conversation history:
    {{#each history}}
      {{role}}: {{content}}
    {{/each}}

    Here is the user's question: {{{question}}}

    1. First, use the 'searchKnowledgeBase' tool to find relevant articles.
    2. Then, use the content of the articles to construct a helpful and concise answer to the user's question.
    3. Finally, you MUST cite the articles you used in the 'sources' field of your response.
  `,
});

export const supportChat = ai.defineFlow(
    {
        name: 'supportChatFlow',
        inputSchema: SupportChatRequestSchema,
        outputSchema: SupportChatResponseSchema,
    },
    async (input) => {
        const { output } = await supportChatPrompt(input);
        return output!;
    }
);
