
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
import { CardHeader, CardTitle, CardContent } from './ui/card';

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
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
                <p className="text-sm font-normal uppercase tracking-widest text-primary">Your Strategic Partner</p>
                <h2 className="font-headline text-3xl md:text-4xl font-bold">A Clear Path to Digital Transformation</h2>
                <p className="text-muted-foreground md:text-lg">
                  We provide a clear, structured pathway to integrating technology that drives real business results. Our engagement model is designed to deliver immediate value while building a foundation for long-term growth. See how our free, interactive tools can kickstart your journey.
                </p>
                 <ol className="space-y-4 pt-4">
                    {steps.map((step, index) => (
                        <li key={step.name} className="flex items-start gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                                {index + 1}
                            </div>
                            <div>
                                <h3 className="font-semibold">{step.name}</h3>
                                <p className="text-sm text-muted-foreground">{step.description}</p>
                            </div>
                        </li>
                    ))}
                 </ol>
            </div>
            <div className="space-y-8">
                <Dialog>
                  <DialogTrigger asChild>
                     <GlowingCard className="cursor-pointer">
                      <div className="p-6">
                        <CardHeader className="p-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <BrainCircuit className="h-6 w-6" />
                            </div>
                            <CardTitle className="pt-4 text-xl md:text-2xl">{`Free AI Business Assessment`}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 pt-4 flex-grow">
                            <p className="text-muted-foreground">Get a high-level technology roadmap tailored to your business goals. Ideal for strategic planning.</p>
                        </CardContent>
                        <div className="p-6 pt-4 -mx-6">
                            <div className="text-primary font-semibold flex items-center">
                            Launch Assessment Tool <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </GlowingCard>
                  </DialogTrigger>
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
                  <DialogTrigger asChild>
                    <GlowingCard className="cursor-pointer">
                       <div className="p-6">
                        <CardHeader className="p-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Cog className="h-6 w-6" />
                            </div>
                            <CardTitle className="pt-4 text-xl md:text-2xl">Automation Task Designer</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 pt-4 flex-grow">
                            <p className="text-muted-foreground">Describe a repetitive task or workflow and get a configured, optimized automation plan in seconds.</p>
                        </CardContent>
                         <div className="p-6 pt-4 -mx-6">
                            <div className="text-primary font-semibold flex items-center">
                            Design an Automation <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                       </div>
                    </GlowingCard>
                  </DialogTrigger>
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
      </div>
    </section>
  );
}
