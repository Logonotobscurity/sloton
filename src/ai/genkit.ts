'use server';
/**
 * @fileoverview This file initializes the Genkit AI framework and exports the configured `ai` object.
 */
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';
import { configureGenkit } from 'genkit';

// Initialize Genkit with necessary plugins.
// The Google AI plugin is used for generative model capabilities.
export const ai = genkit({
  plugins: [
    googleAI(),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});
