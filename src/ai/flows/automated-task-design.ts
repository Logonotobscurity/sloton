'use server';

/**
 * @fileOverview This file defines a Genkit flow for visually designing and configuring automated IT tasks based on provided workflows.
 *
 * - automateTaskDesign - A function that handles the task automation design process.
 * - AutomateTaskDesignInput - The input type for the automateTaskDesign function.
 * - AutomateTaskDesignOutput - The return type for the automateTaskDesign function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutomateTaskDesignInputSchema = z.object({
  workflowDescription: z
    .string()
    .describe('A description of the IT task workflow to be automated.'),
  optimizationSuggestions: z.string().optional().describe('Optional user-provided optimization suggestions.'),
});
export type AutomateTaskDesignInput = z.infer<typeof AutomateTaskDesignInputSchema>;

const AutomateTaskDesignOutputSchema = z.object({
  taskDesign: z
    .string()
    .describe(
      'A visual representation and configuration details of the automated IT task, including steps, dependencies, and AI-suggested optimizations.'
    ),
});
export type AutomateTaskDesignOutput = z.infer<typeof AutomateTaskDesignOutputSchema>;

export async function automateTaskDesign(input: AutomateTaskDesignInput): Promise<AutomateTaskDesignOutput> {
  return automateTaskDesignFlow(input);
}

const prompt = ai.definePrompt({
  name: 'automateTaskDesignPrompt',
  input: {schema: AutomateTaskDesignInputSchema},
  output: {schema: AutomateTaskDesignOutputSchema},
  prompt: `You are an expert in designing and configuring automated IT tasks based on user-provided workflows. Based on the workflow description provided by the user, create a detailed task design, including steps, dependencies, and any AI-suggested optimizations.

Workflow Description: {{{workflowDescription}}}

User Optimization Suggestions: {{{optimizationSuggestions}}}

Task Design:`, // The prompt should instruct the model to provide a detailed task design
});

const automateTaskDesignFlow = ai.defineFlow(
  {
    name: 'automateTaskDesignFlow',
    inputSchema: AutomateTaskDesignInputSchema,
    outputSchema: AutomateTaskDesignOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
