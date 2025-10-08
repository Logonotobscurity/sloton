
export interface SolutionRecommendationOutput {
  executiveSummary: {
    overview: string;
    primaryOpportunity: string;
    expectedRoiTimeframe: string;
  };
  recommendedSolutionPath: {
    coreTechnology: {
      solutionName: string;
      justification: string;
    };
    expectedOutcomes: {
      metric: string;
      projectedImprovement: string;
      timeframe: string;
    }[];
  };
  nextSteps: {
    actionItem: string;
    owner: string;
    deadline: string;
  }[];
}
