
"use client";

import React from 'react';
import { BrainCircuit, ArrowRight, Cog } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { SolutionRecommendationForm } from './solution-recommendation-form';
import { TaskAutomationForm } from './task-automation-form';


export function StrategicPartner() {
  return (
    <section id="strategic-partner" className="py-16 md:py-24 bg-secondary/20 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
                <p className="text-sm font-normal uppercase tracking-widest text-primary">01/ What We Do</p>
                <h2 className="font-headline text-[clamp(1.8rem,5vw,3rem)] font-bold !leading-snug">
                    We build intelligent systems that drive <span className="text-primary">efficiency</span>, spark <span className="text-primary">innovation</span>, and create lasting <span className="text-primary">competitive advantages</span>.
                </h2>
                <p className="text-muted-foreground md:text-lg leading-relaxed">
                    Our value isn't just in understanding technology; it's in applying it to solve your core business challenges. We provide a clear, structured pathway to integrating technology that drives real business results.
                </p>
            </div>

            <div className="space-y-8">
                <Dialog>
                    <DialogTrigger asChild>
                        <Card className="group cursor-pointer transition-all duration-300 hover:border-primary hover:-translate-y-2 bg-background/80 flex flex-col h-full">
                            <CardHeader className="flex-grow p-6 md:p-8">
                                <div className="p-3 md:p-4 rounded-full bg-primary/10 mb-4 w-fit">
                                    <BrainCircuit className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                                </div>
                                <CardTitle>Free AI Business Assessment</CardTitle>
                                <CardDescription className="mt-2">
                                    Get a data-driven report identifying automation opportunities and tailored IT solutions for your business.
                                </CardDescription>
                            </CardHeader>
                            <CardFooter className="p-6 md:p-8 pt-0">
                                <Button variant="ghost" className="p-0 text-primary group-hover:text-primary/90">
                                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-xl md:max-w-2xl bg-background">
                        <DialogHeader>
                            <DialogTitle className="text-2xl">Free AI Business Assessment</DialogTitle>
                            <DialogDescription>
                            Describe your business needs to receive tailored IT solution recommendations from our AI consultant.
                            </DialogDescription>
                        </DialogHeader>
                        <SolutionRecommendationForm />
                    </DialogContent>
                </Dialog>

                <Dialog>
                    <DialogTrigger asChild>
                       <Card className="group cursor-pointer transition-all duration-300 hover:border-primary hover:-translate-y-2 bg-background/80 flex flex-col h-full">
                            <CardHeader className="flex-grow p-6 md:p-8">
                                <div className="p-3 md:p-4 rounded-full bg-primary/10 mb-4 w-fit">
                                    <Cog className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                                </div>
                                <CardTitle>Intelligent Automation Designer</CardTitle>
                                <CardDescription className="mt-2">
                                    Describe a workflow and our AI will generate a configured, optimized task design in seconds.
                                </CardDescription>
                            </CardHeader>
                            <CardFooter className="p-6 md:p-8 pt-0">
                                <Button variant="ghost" className="p-0 text-primary group-hover:text-primary/90">
                                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    </DialogTrigger>
                     <DialogContent className="sm:max-w-xl md:max-w-2xl bg-background">
                        <DialogHeader>
                            <DialogTitle className="text-2xl flex items-center gap-2"><Cog className="h-6 w-6 text-primary" /> Automation Task Designer</DialogTitle>
                            <DialogDescription>
                                Describe a workflow to generate a configured, optimized task design, complete with AI suggestions.
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
