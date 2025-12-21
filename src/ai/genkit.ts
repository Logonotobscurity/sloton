'use server';
/**
 * @fileoverview This file initializes the Genkit AI framework and exports the configured `ai` object.
 */
import { genkit, ai } from '@genkit-ai/ai';
import { googleAI } from '@genkit-ai/google-genai';

genkit({
  plugins: [
    googleAI(),
  ],
});

export { ai };
