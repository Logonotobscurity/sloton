
"use client";

import Link from 'next/link';
import { SolutionRecommendationOutput } from '@/ai/flows/solution-recommendation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Calendar, Sparkles } from 'lucide-react';

export function AssessmentResult({ result }: { result: SolutionRecommendationOutput }) {
    return (
        <Card className="bg-secondary/30 mt-2">
            <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary" /> Your Technology Roadmap</CardTitle>
            <CardDescription>{result.executiveSummary.overview}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
                <h4 className="font-semibold text-foreground">Recommended Initiative:</h4>
                <div className="p-3 rounded-md bg-background/50 border">
                <p className="font-semibold text-primary">{result.recommendedSolutionPath.coreTechnology.solutionName}</p>
                <p className="text-muted-foreground mt-1">{result.recommendedSolutionPath.coreTechnology.justification}</p>
                </div>
            </CardContent>
            <CardFooter>
            <Dialog>
                <DialogTrigger asChild>
                    <Button size="sm">View Full Report</Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl h-[80vh] flex flex-col">
                <DialogHeader>
                    <DialogTitle>Full Assessment Report</DialogTitle>
                    <DialogDescription>
                    A detailed analysis based on your business needs.
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="flex-1 -mx-6 px-6">
                    <div className="space-y-6 text-sm">
                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-primary">Executive Summary</h3>
                        <Card className="bg-secondary/30">
                        <CardContent className="pt-6 space-y-2 text-sm">
                            <p><strong>Overview:</strong> {result.executiveSummary.overview}</p>
                            <p><strong>Primary Opportunity:</strong> {result.executiveSummary.primaryOpportunity}</p>
                            <p><strong>Est. ROI Timeframe:</strong> {result.executiveSummary.expectedRoiTimeframe}</p>
                        </CardContent>
                    </Card>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-primary">Recommended Solution Path</h3>
                        <Card className="bg-secondary/30">
                            <CardHeader>
                                <CardTitle>{result.recommendedSolutionPath.coreTechnology.solutionName}</CardTitle>
                                <CardDescription>{result.recommendedSolutionPath.coreTechnology.justification}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <h4 className="font-semibold mb-4 text-foreground">Expected Outcomes</h4>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Metric</TableHead>
                                                <TableHead>Improvement</TableHead>
                                                <TableHead>Timeframe</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {result.recommendedSolutionPath.expectedOutcomes.map((outcome, index) => (
                                                <TableRow key={index}>
                                                    <TableCell className="font-medium">{outcome.metric}</TableCell>
                                                    <TableCell className="text-primary font-semibold">{outcome.projectedImprovement}</TableCell>
                                                    <TableCell>{outcome.timeframe}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-primary">Next Steps</h3>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                <TableHead>Action Item</TableHead>
                                <TableHead>Owner</TableHead>
                                <TableHead>Deadline</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {result.nextSteps.map((step, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{step.actionItem}</TableCell>
                                    <TableCell>{step.owner}</TableCell>
                                    <TableCell>{step.deadline}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    </div>
                </ScrollArea>
                <DialogFooter className="pt-4 border-t">
                    <Button asChild className="w-full" size="lg">
                        <Link href="/contact" target="_blank">
                            <Calendar className="mr-2 h-4 w-4" /> Book a Consultation
                        </Link>
                    </Button>
                </DialogFooter>
                </DialogContent>
            </Dialog>
            </CardFooter>
        </Card>
    )
}
