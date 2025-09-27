
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
  businessGoals: z.array(z.string()).describe("A list of the user's primary business goals (e.g., 'Increase Sales', 'Reduce Operational Costs')."),
  challenges: z.array(z.string()).describe("A list of the user's current challenges (e.g., 'Manual data entry is slow', 'Customer support is overwhelmed')."),
  businessNeeds: z
    .string()
    .describe('A more detailed, free-text description of the business needs and challenges.'),
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
  strategicSummary: z.object({
      title: z.string().describe("A compelling, high-level title for the proposed strategy, e.g., 'Strategy for AI-Driven Growth'."),
      overview: z.string().describe("A 2-3 sentence overview of the key findings and the strategic direction recommended."),
      primaryOpportunity: z.string().describe("The single most significant opportunity identified from the user's input."),
  }),
  suggestedInitiatives: z.array(z.object({
      initiativeName: z.string().describe("A clear, descriptive name for the technology project, e.g., 'Implement an AI-Powered Customer Support Chatbot'."),
      description: z.string().describe("A paragraph explaining what the initiative involves and how it addresses the user's specific goals and challenges."),
      estimatedImpact: z.string().describe("The expected business outcome, e.g., 'Reduce support ticket volume by 30-40%' or 'Increase lead conversion rate by 15%'."),
      relevantServices: z.array(z.string()).describe("A list of the specific LOG_ON services that would be used to deliver this initiative (e.g., 'AI Solutions', 'Chatbot Development').")
  })).describe("A list of 2-3 concrete, actionable technology initiatives."),
  nextSteps: z.array(z.object({
      actionItem: z.string().describe("A specific action item."),
      owner: z.string().describe("Who is responsible for this action (e.g., 'Client', 'LOG_ON')."),
  })).describe("A list of 2-3 clear, actionable next steps to move forward."),
  leadProfile: z.object({
      priorityScore: z.enum(['High', 'Medium', 'Low']).describe("The estimated priority of the lead based on their needs and budget."),
      keyInterests: z.array(z.string()).describe("A list of the primary LOG_ON services the user is interested in."),
  })
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
  prompt: `You are an expert Solutions Architect for LOG_ON, a technology consulting firm. Your goal is to provide a high-value, actionable technology roadmap based on a prospective client's inputs. This roadmap should be professional, data-driven, and clearly tied to their stated goals and challenges.

The user has provided the following information:
- Name: {{{name}}}
- Company Size: {{{companySize}}}
- Industry: {{{industry}}}
- Stated Business Goals: {{{json businessGoals}}}
- Stated Challenges: {{{json challenges}}}
- Detailed Needs: {{{businessNeeds}}}
- Budget: {{{budget}}}

Your task is to generate a personalized Technology Assessment Report. You MUST follow this structure EXACTLY and adhere to these instructions:

**Report Generation Instructions:**

1.  **Analyze the Inputs:** Carefully review all the user's inputs. Connect their goals to their challenges and business needs. Use the company size, industry, and budget to tailor the scope and scale of your recommendations.

2.  **Strategic Summary:**
    *   Create a compelling, high-level title for the overall strategy.
    *   Write a concise overview that summarizes the situation and your proposed path forward.
    *   Identify and articulate the single most impactful opportunity for the client.

3.  **Suggested Initiatives (Generate 2-3):**
    *   For each initiative, provide a clear, descriptive name.
    *   Write a detailed description explaining how this specific project will directly help them achieve their stated goals by solving their stated challenges.
    *   Provide a concrete, quantifiable estimated impact (e.g., "reduce costs by X%", "increase sales by Y%").
    *   List the specific LOG_ON services that would be required to implement this initiative (e.g., 'AI Solutions', 'Web Development', 'Business Analytics').

4.  **Next Steps (Generate 2-3):**
    *   Provide a list of clear, simple next steps to keep the conversation moving. Assign ownership to either 'LOG_ON' or 'Client'.

5.  **Lead Profile (For internal LOG_ON use):**
    *   **Priority Score:** Analyze the user's budget and the specificity of their needs to assign a priority score.
        *   'High': High budget, clear and urgent needs.
        *   'Medium': Moderate budget or well-defined needs but less urgency.
        *   'Low': Low budget or vague, exploratory needs.
    *   **Key Interests:** Based on your suggested initiatives, list the LOG_ON service categories the client is most likely interested in.

**Tone and Style:**
*   **Expert & Confident:** Use the language of a seasoned solutions architect. Be direct, clear, and professional.
*   **Value-Oriented:** Frame everything in terms of business value, ROI, and solving problems.
*   **Action-Oriented:** The entire report should feel like a clear, actionable plan that makes the client want to take the next step.

Generate the report now based on the user's information.
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
