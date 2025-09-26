
"use client";

import { BrainCircuit, ArrowRight, Cog } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { SolutionRecommendationForm } from './solution-recommendation-form';
import { TaskAutomationForm } from './task-automation-form';

const numberedList = [
    { number: "01", text: "We start with a free, no-obligation AI Assessment to understand your unique business challenges and goals." },
    { number: "02", text: "Our AI generates a high-level technology roadmap, identifying key areas for automation and cost savings." },
    { number: "03", text: "We then partner with you to implement the solutions, ensuring they are perfectly aligned with your strategic objectives." },
];


export function StrategicPartner() {
  return (
    <section id="strategic-partner" className="py-16 md:py-24 bg-secondary/20 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
                <p className="text-sm font-normal uppercase tracking-widest text-primary">01/ The Process</p>
                <h2 className="font-headline text-3xl md:text-4xl font-bold">
                    Only 3% of tech consultants combine deep AI expertise with strategic business acumen. <span className="text-primary">We are in that 3%.</span>
                </h2>
                <p className="text-muted-foreground md:text-lg">
                Our value isn't just in understanding technology; it's in applying it to solve your core business challenges. We provide a clear, structured pathway to integrating technology that drives real business results.
                </p>
                <div className="space-y-6 pt-4">
                    {numberedList.map((item) => (
                    <div key={item.number} className="flex items-start gap-4">
                        <div className="flex-shrink-0 text-2xl font-bold text-primary">{item.number}</div>
                        <p className="text-muted-foreground">{item.text}</p>
                    </div>
                    ))}
                </div>
            </div>
            
            <div className="space-y-8">
                <Dialog>
                    <DialogTrigger asChild>
                        <Card className="group cursor-pointer transition-all duration-300 hover:border-primary hover:-translate-y-2">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <BrainCircuit className="h-8 w-8 text-primary" />
                                </div>
                                <div>
                                    <CardTitle>AI Business Assessment</CardTitle>
                                    <CardDescription className="flex items-center">
                                        Get Your Free Report
                                        <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                                    </CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-xl md:max-w-2xl bg-background">
                        <DialogHeader>
                            <DialogTitle className="text-2xl">Free AI Business Assessment</DialogTitle>
                            <DialogDescription>
                            Describe your business needs to receive tailored IT solution recommendations from our AI consultant. This tool helps you identify the best technology strategies for your goals.
                            </DialogDescription>
                        </DialogHeader>
                        <SolutionRecommendationForm />
                    </DialogContent>
                </Dialog>

                <Dialog>
                    <DialogTrigger asChild>
                       <Card className="group cursor-pointer transition-all duration-300 hover:border-primary hover:-translate-y-2">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Cog className="h-8 w-8 text-primary" />
                                </div>
                                <div>
                                    <CardTitle>Automation Task Designer</CardTitle>
                                    <CardDescription className="flex items-center">
                                        Design a Workflow
                                        <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                                    </CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                    </DialogTrigger>
                     <DialogContent className="sm:max-w-xl md:max-w-2xl bg-background">
                        <DialogHeader>
                            <DialogTitle className="text-2xl flex items-center gap-2"><Cog className="h-6 w-6 text-primary" /> Automation Task Designer</DialogTitle>
                            <DialogDescription>
                                Describe a workflow to generate a configured, optimized task design, complete with AI suggestions. Go from idea to a fully-structured automation plan in seconds.
                            </DialogDescription>
                        </DialogHeader>
                        <TaskAutomationForm />
                    </DialogContent>
                </Dialog>
            </div>
         </div>
      </div>
    </section>
  );
}
