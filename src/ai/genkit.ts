'use server';
/**
 * @fileoverview This file initializes the Genkit AI framework and exports the configured `ai` object.
 */
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';
import { firebase } from '@genkit-ai/firebase';
import { dotprompt } from '@genkit-ai/dotprompt';

// Initialize Genkit with necessary plugins.
// The Google AI plugin is used for generative model capabilities.
export const ai = genkit({
  plugins: [
    googleAI(),
    firebase(),
    dotprompt({
      model: 'googleai/gemini-1.5-flash',
      context: [],
    }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});
