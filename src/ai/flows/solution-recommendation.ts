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
  executiveSummary: z.string().describe("A concise, high-level summary of the proposed solution and its expected impact on the user's business."),
  recommendedSolutions: z.array(z.object({
    title: z.string().describe("The title of the recommended solution."),
    description: z.string().describe("A brief description of the solution."),
    impact: z.string().describe("The measurable impact this solution will have (e.g., 'Reduce support tickets by 30%')."),
    timeline: z.string().describe("An estimated timeline for implementation (e.g., '4-6 Weeks').")
  })).describe("A list of specific, actionable IT solutions and automation strategies."),
  implementationPlan: z.object({
    introduction: z.string().describe("A brief introduction to the implementation plan."),
    phases: z.array(z.object({
      phase: z.string().describe("The phase number or title (e.g., 'Phase 1: Discovery & Planning')."),
      description: z.string().describe("A description of the activities in this phase."),
      timeline: z.string().describe("The timeline for this phase.")
    })).describe("The different phases of the implementation plan.")
  }).describe("A high-level overview of how LOG_ON would implement the proposed solutions, presented in a clear, phased approach."),
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

Your task is to generate a detailed and professional technology proposal that follows a strict structure.

**Output Structure Requirements:**

1.  **Executive Summary:**
    *   Start with a section titled "Executive Summary".
    *   Provide a brief, powerful overview of the proposed solution and its direct impact on the user's business.

2.  **Recommended Solutions:**
    *   Create a section titled "Recommended Solutions".
    *   Provide a list of 2-4 distinct solutions.
    *   For each solution, you MUST provide:
        *   **title:** A clear, descriptive title.
        *   **description:** A short paragraph explaining what the solution is.
        *   **impact:** A specific, measurable business outcome (e.g., "Reduce manual data entry by 80%", "Increase lead conversion by 15%").
        *   **timeline:** An estimated implementation timeline (e.g., "4-6 Weeks", "Q3 Project").

3.  **Implementation Plan:**
    *   Create a section titled "Our Implementation Plan".
    *   Provide a brief introduction to the plan.
    *   Outline a clear, multi-phase implementation plan (e.g., Phase 1, Phase 2).
    *   For each phase, you MUST provide:
        *   **phase:** The name of the phase (e.g., "Phase 1: Discovery & Technical Scoping").
        *   **description:** Key activities and deliverables for that phase.
        *   **timeline:** The duration of the phase (e.g., "1-2 Weeks").

**Formatting Rules:**
*   Use Markdown for formatting.
*   Use bolding for all titles and headers.
*   Present lists using bullet points for readability.

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
