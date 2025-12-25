/**
 * @fileoverview This file initializes the Genkit AI framework and exports the configured `ai` object.
 */
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

export const ai = genkit({
  plugins: [
    googleAI(),
  ],
});
