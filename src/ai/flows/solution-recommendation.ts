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
  name: z.string().optional().describe("The user's name."),
  email: z.string().optional().describe("The user's email address."),
});
export type SolutionRecommendationInput = z.infer<typeof SolutionRecommendationInputSchema>;

const SolutionRecommendationOutputSchema = z.object({
  recommendedSolutions: z
    .string()
    .describe('A list of recommended IT solutions and automation strategies.'),
  reasoning: z
    .string()
    .describe('Explanation of why the solutions are recommended based on the input.'),
  implementationPlan: z.string().describe("A high-level overview of how LOG_ON would implement the proposed solutions."),
});
export type SolutionRecommendationOutput = z.infer<typeof SolutionRecommendationOutputSchema>;

export async function solutionRecommendation(input: SolutionRecommendationInput): Promise<SolutionRecommendationOutput> {
  // In a real application, you would save the lead (name, email, needs) to a CRM here.
  console.log("Lead captured:", input);
  return solutionRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'solutionRecommendationPrompt',
  input: {schema: SolutionRecommendationInputSchema},
  output: {schema: SolutionRecommendationOutputSchema},
  prompt: `You are an expert IT consultant and sales architect for a company called LOG_ON. Your goal is to convert a potential client by providing a high-value, actionable technology roadmap based on their business needs.

The user, {{{name}}}, has provided the following information:
- Business Needs: {{{businessNeeds}}}
- Company Size: {{{companySize}}}
- Industry: {{{industry}}}
- Budget: {{{budget}}}

Your task is to:
1.  **Recommend Solutions:** Based on their needs, outline a clear set of recommended IT solutions and automation strategies.
2.  **Provide Reasoning:** Briefly explain *why* these solutions are a good fit for their specific situation.
3.  **Create an Implementation Plan:** This is the most crucial part. Describe, at a high level, how LOG_ON would build and implement this solution for them. Emphasize LOG_ON's expertise and the value of working with your team. Frame this as the beginning of a partnership.

The tone should be expert, confident, and helpful. The output should be formatted to be easily readable in a web interface. The goal is to make the user feel understood and eager to take the next step.
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
