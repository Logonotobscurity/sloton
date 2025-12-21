'use server';
/**
 * @fileoverview This file initializes the Genkit AI framework and exports the configured `ai` object.
 */
import { genkit } from 'genkit';

// Initialize Genkit with necessary plugins.
// The Google AI plugin is used for generative model capabilities.
export const ai = genkit({
  plugins: [],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});
