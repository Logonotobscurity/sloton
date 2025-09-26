
"use client";

import { BrainCircuit, Calculator, CheckCircle } from 'lucide-react';
import { Card, CardTitle, CardDescription, CardHeader } from './ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { SolutionRecommendationForm } from './solution-recommendation-form';
import { TaskAutomationForm } from './task-automation-form';
import { Cog } from 'lucide-react';


const features = [
    { title: "AI-Powered Automation", items: ["RPA & BPA", "Intelligent Workflows", "Chatbot Development"] },
    { title: "Custom Development", items: ["Web & Mobile Apps", "API Integration", "Database Architecture"] },
    { title: "Cloud & DevOps", items: ["Infrastructure as Code", "CI/CD Pipelines", "Scalability & Security"] },
    { title: "Data & Analytics", items: ["BI Dashboards", "Predictive Modeling", "Data Warehousing"] }
]

export function GeneralistApproach() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
                <p className="text-sm font-normal uppercase tracking-widest text-primary">02/ The Generalist Advantage</p>
                <h2 className="font-headline text-[clamp(1.8rem,5vw,3rem)] font-bold !leading-snug">
                    We connect the dots that specialists miss, building <span className="text-primary">integrated solutions</span> that are robust, efficient, and innovative.
                </h2>
                <p className="text-muted-foreground md:text-lg">
                    Our holistic view ensures every component works in harmony to achieve your strategic goals. We don't just build features; we architect systems for growth.
                </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                    {features.map((feature) => (
                        <Card key={feature.title} className="bg-transparent border-none shadow-none p-0">
                            <CardTitle className="text-xl">{feature.title}</CardTitle>
                            <ul className="mt-4 space-y-2">
                                {feature.items.map(item => (
                                    <li key={item} className="flex items-center gap-3">
                                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                 </div>
            </div>

            <div className="space-y-8">
                <Dialog>
                    <DialogTrigger asChild>
                        <Card className="group cursor-pointer transition-all duration-300 hover:border-primary hover:-translate-y-2 bg-secondary/30">
                            <CardHeader className="flex flex-col items-center text-center p-8">
                                <div className="p-4 rounded-full bg-primary/10 mb-4">
                                    <BrainCircuit className="h-10 w-10 text-primary" />
                                </div>
                                <CardTitle>Free AI Business Assessment</CardTitle>
                                <CardDescription className="flex items-center mt-2">
                                    Get a data-driven report identifying automation opportunities and tailored IT solutions for your business.
                                </CardDescription>
                            </CardHeader>
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
                       <Card className="group cursor-pointer transition-all duration-300 hover:border-primary hover:-translate-y-2 bg-secondary/30">
                            <CardHeader className="flex flex-col items-center text-center p-8">
                                <div className="p-4 rounded-full bg-primary/10 mb-4">
                                    <Cog className="h-10 w-10 text-primary" />
                                </div>
                                <CardTitle>Intelligent Automation Designer</CardTitle>
                                <CardDescription className="flex items-center mt-2">
                                    Describe a workflow and our AI will generate a configured, optimized task design in seconds.
                                </CardDescription>
                            </CardHeader>
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
