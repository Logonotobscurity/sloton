"use client";

import { BrainCircuit, ArrowRight, Cog } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { SolutionRecommendationForm } from './solution-recommendation-form';
import { TaskAutomationForm } from './task-automation-form';
import { GlowingCard } from './ui/glowing-card';
import { CardHeader, CardTitle, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';

const steps = [
    {
        name: "Free AI Assessment",
        description: "Get an instant, data-driven analysis of your AI readiness and a high-level technology roadmap. No commitment required."
    },
    {
        name: "Detailed Consultation",
        description: "Our experts dive deep into your assessment results, refining the strategy and aligning it with your specific business goals."
    },
     {
        name: "Custom Proposal & Implementation",
        description: "Receive a comprehensive proposal with a clear scope, timeline, and ROI projections, followed by expert implementation."
    }
]

export function StrategicPartner() {
  return (
    <section id="strategic-partner" className="py-16 md:py-24 bg-secondary/20 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
             <p className="text-sm font-normal uppercase tracking-widest text-primary">01/ The Process</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mt-4">A Clear Path to Digital Transformation</h2>
            <p className="text-muted-foreground md:text-lg mt-4">
              We provide a clear, structured pathway to integrating technology that drives real business results. Our engagement model is designed to deliver immediate value while building a foundation for long-term growth. See how our free, interactive tools can kickstart your journey.
            </p>
        </div>

        <div className="max-w-5xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
                {steps.map((step, index) => (
                    <div key={step.name} className="flex flex-col sm:flex-row md:flex-col text-center md:text-left items-center md:items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                            {index + 1}
                        </div>
                        <div className="flex-grow">
                            <h3 className="font-semibold text-lg">{step.name}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
            <Dialog>
                <GlowingCard>
                  <div className="p-6 text-center flex flex-col h-full">
                    <CardHeader className="p-0 items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <BrainCircuit className="h-6 w-6" />
                        </div>
                        <CardTitle className="pt-4 text-xl md:text-2xl">{`Free AI Business Assessment`}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 pt-4 flex-grow">
                        <p className="text-muted-foreground">Get a high-level technology roadmap tailored to your business goals. Ideal for strategic planning.</p>
                    </CardContent>
                    <CardFooter className="p-0 pt-6 mt-auto flex justify-center">
                        <DialogTrigger asChild>
                             <Button variant="secondary" className="group">
                                Launch Assessment Tool <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </DialogTrigger>
                    </CardFooter>
                  </div>
                </GlowingCard>
              <DialogContent className="sm:max-w-[600px] bg-background">
                <DialogHeader>
                  <DialogTitle className="text-2xl flex items-center gap-2"><BrainCircuit className="h-6 w-6 text-accent" /> AI Business Assessment</DialogTitle>
                  <DialogDescription>
                    Describe your business needs to receive tailored IT solution recommendations from our AI consultant. This tool helps you identify the best technology strategies for your goals.
                  </DialogDescription>
                </DialogHeader>
                <SolutionRecommendationForm />
              </DialogContent>
            </Dialog>

             <Dialog>
                <GlowingCard>
                   <div className="p-6 text-center flex flex-col h-full">
                    <CardHeader className="p-0 items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Cog className="h-6 w-6" />
                        </div>
                        <CardTitle className="pt-4 text-xl md:text-2xl">Automation Task Designer</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 pt-4 flex-grow">
                        <p className="text-muted-foreground">Describe a repetitive task or workflow and get a configured, optimized automation plan in seconds.</p>
                    </CardContent>
                     <CardFooter className="p-0 pt-6 mt-auto flex justify-center">
                        <DialogTrigger asChild>
                            <Button variant="secondary" className="group">
                                Design an Automation <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </DialogTrigger>
                    </CardFooter>
                   </div>
                </GlowingCard>
              <DialogContent className="sm:max-w-[600px] bg-background">
                <DialogHeader>
                  <DialogTitle className="text-2xl flex items-center gap-2"><Cog className="h-6 w-6 text-accent" /> Automation Task Designer</DialogTitle>
                  <DialogDescription>
                     Describe a workflow to generate a configured, optimized task design, complete with AI suggestions.
                  </DialogDescription>
                </DialogHeader>
                <TaskAutomationForm />
              </DialogContent>
            </Dialog>
        </div>
      </div>
    </section>
  );
}
