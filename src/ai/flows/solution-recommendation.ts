'use server';

/**
 * @fileOverview Recommends IT solutions and automation strategies based on user's business needs.
 *
 * - solutionRecommendation - A function that handles the solution recommendation process.
 * - SolutionRecommendationInput - The input type for the solutionRecommendation function.
 * - SolutionRecommendationOutput - The return type for the solutionRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SolutionRecommendationInputSchema = z.object({
  businessNeeds: z
    .string()
    .describe('Description of the business needs and challenges.'),
  companySize: z
    .string()
    .describe('The size of the company (e.g., small, medium, large).'),
  industry: z.string().describe('The industry of the company.'),
  budget: z
    .string()
    .describe('The budget allocated for IT solutions and automation.'),
});
export type SolutionRecommendationInput = z.infer<typeof SolutionRecommendationInputSchema>;

const SolutionRecommendationOutputSchema = z.object({
  recommendedSolutions: z
    .string()
    .describe('A list of recommended IT solutions and automation strategies.'),
  reasoning: z
    .string()
    .describe('Explanation of why the solutions are recommended based on the input.'),
});
export type SolutionRecommendationOutput = z.infer<typeof SolutionRecommendationOutputSchema>;

export async function solutionRecommendation(input: SolutionRecommendationInput): Promise<SolutionRecommendationOutput> {
  return solutionRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'solutionRecommendationPrompt',
  input: {schema: SolutionRecommendationInputSchema},
  output: {schema: SolutionRecommendationOutputSchema},
  prompt: `You are an AI-powered IT consultant. Based on the business needs, company size, industry, and budget provided, recommend appropriate IT solutions and automation strategies. Explain why each solution is recommended and how it addresses the specific needs. 

Business Needs: {{{businessNeeds}}}
Company Size: {{{companySize}}}
Industry: {{{industry}}}
Budget: {{{budget}}}

Provide a detailed recommendation:
`,
});

const solutionRecommendationFlow = ai.defineFlow(
  {
    name: 'solutionRecommendationFlow',
    inputSchema: SolutionRecommendationInputSchema,
    outputSchema: SolutionRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
