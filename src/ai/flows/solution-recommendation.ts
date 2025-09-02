
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
  phone: z.string().optional().describe("The user's phone number."),
});
export type SolutionRecommendationInput = z.infer<typeof SolutionRecommendationInputSchema>;

const SolutionRecommendationOutputSchema = z.object({
  executiveSummary: z.object({
    overview: z.string().describe("Brief overview of key findings (2-3 sentences)."),
    primaryOpportunity: z.string().describe("The primary opportunity identified."),
    expectedRoiTimeframe: z.string().describe("e.g., '3-6 months'"),
  }).describe("A concise, high-level summary of the proposed solution and its expected impact."),
  businessContext: z.object({
    industry: z.string(),
    companySize: z.string(),
    keyChallenges: z.array(z.string()).describe("A list of 3 key challenges identified from the user's input."),
  }),
  recommendedSolutionPath: z.object({
    coreTechnology: z.object({
        solutionName: z.string().describe("e.g., 'AI-Powered Customer Support Chatbot'"),
        justification: z.string().describe("Why this solution fits the client's needs (2-3 sentences)."),
        implementationTimeline: z.string().describe("e.g., '6-8 Weeks'"),
    }).describe("The primary technology recommendation."),
    expectedOutcomes: z.array(z.object({
        metric: z.string().describe("The metric being improved, e.g., 'Support Ticket Volume'"),
        currentState: z.string().describe("The current state of the metric, e.g., '~200/week'"),
        projectedImprovement: z.string().describe("The projected improvement, e.g., '-40%' or '+15%'"),
        timeframe: z.string().describe("The timeframe to see this improvement, e.g., '3 Months'"),
    })).describe("A table of expected outcomes with measurable metrics."),
  }),
  nextSteps: z.array(z.object({
      actionItem: z.string().describe("A specific action item."),
      owner: z.string().describe("Who is responsible for this action (e.g., 'Client', 'LOG_ON')."),
      deadline: z.string().describe("The deadline for this action (e.g., '1 Week')."),
  })).describe("A list of 3 clear, actionable next steps."),
   appendix: z.object({
    caseStudies: z.array(z.object({
        reference: z.string().describe("The case study reference ID, e.g., '#GL-2023-087'"),
        link: z.string().url().describe("A placeholder link to the case study."),
    })).describe("A list of 1-2 relevant case studies."),
    technologySpecifications: z.string().describe("Brief, high-level technical details of the proposed stack."),
  }),
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
  prompt: `You are an expert IT consultant and sales architect for LOG_ON, a global technology consulting firm. Your goal is to convert a potential client by providing a high-value, actionable technology roadmap based on their business needs. The user's name is {{{name}}}.

The user has provided the following information:
- Business Needs: {{{businessNeeds}}}
- Company Size: {{{companySize}}}
- Industry: {{{industry}}}
- Budget: {{{budget}}}
- Phone: {{{phone}}}

Your task is to generate a detailed and professional Technology Assessment Report. You MUST follow this structure EXACTLY.

**Report Structure Requirements:**

1.  **Executive Summary:**
    *   Start with a powerful overview of the proposed solution and its direct impact.
    *   Clearly state the primary opportunity.
    *   Provide a realistic ROI timeframe.

2.  **Business Context:**
    *   Summarize the client's industry and company size.
    *   Identify and list exactly three key challenges based on their described needs.

3.  **Recommended Solution Path:**
    *   **Core Technology Recommendation:**
        *   Provide a clear, descriptive name for the solution.
        *   Write a compelling justification for why this technology is the right fit.
        *   Estimate a realistic implementation timeline.
    *   **Expected Outcomes:**
        *   Present this as a table of 2-3 measurable metrics.
        *   For each metric, define the current state (you may need to infer a reasonable baseline), the projected improvement (e.g., +25%, -50%), and the timeframe to achieve it.

4.  **Next Steps:**
    *   Provide a list of exactly 3 actionable next steps.
    *   Assign an owner ('Client' or 'LOG_ON') and a deadline for each step.

5.  **Appendix:**
    *   Reference 1-2 relevant case studies. Use a real-sounding reference ID (e.g., #GL-2024-091). Link to a relevant page on the site like /use-cases#finance.
    *   Briefly list the potential technology stack (e.g., "Next.js, Python, AWS Lambda, Stripe API").

**Tone and Style:**
*   **Global & Professional:** Use a confident, expert tone. Reference global business concepts. Avoid Nigeria-specific language.
*   **Data-Driven:** Frame recommendations around measurable outcomes and ROI.
*   **Action-Oriented:** The report should make the client feel understood and eager to take the next step.

Generate the report based on the provided user information.
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
