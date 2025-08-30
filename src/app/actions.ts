'use server';

import { solutionRecommendation, SolutionRecommendationInput, SolutionRecommendationOutput } from '@/ai/flows/solution-recommendation';
import { automateTaskDesign, AutomateTaskDesignInput, AutomateTaskDesignOutput } from '@/ai/flows/automated-task-design';

type FormResult<T> = {
  data?: T;
  error?: string;
};

export async function getSolutionRecommendation(
  input: SolutionRecommendationInput
): Promise<FormResult<SolutionRecommendationOutput>> {
  try {
    const result = await solutionRecommendation(input);
    return { data: result };
  } catch (e: any) {
    console.error('Error in getSolutionRecommendation:', e);
    return { error: e.message || 'An unknown error occurred.' };
  }
}

export async function getAutomatedTaskDesign(
  input: AutomateTaskDesignInput
): Promise<FormResult<AutomateTaskDesignOutput>> {
  try {
    const result = await automateTaskDesign(input);
    return { data: result };
  } catch (e: any) {
    console.error('Error in getAutomatedTaskDesign:', e);
    return { error: e.message || 'An unknown error occurred.' };
  }
}
