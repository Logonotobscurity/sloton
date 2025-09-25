
"use client";

import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { SolutionRecommendationForm } from './solution-recommendation-form';
import { CircuitBackground } from './ui/circuit-background';

export function Hero() {
  return (
     <section 
        className="relative w-full min-h-[90vh] flex items-center bg-background overflow-hidden"
    >
      <CircuitBackground />
      <div className="absolute inset-0 -z-10 h-full w-full bg-background [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,hsl(var(--primary))_100%)]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 md:px-6 z-10">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-sm font-normal uppercase tracking-widest text-primary">Your Partner in Growth</p>
                <h1 className="font-headline text-[clamp(2.5rem,8vw,5rem)] !leading-tight my-4">
                    The modern, AI-powered <span className="text-primary">tech solution</span>
                </h1>
                <p className="text-md md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    We build and manage scalable, secure, and intelligent systems that help businesses cut costs, automate processes, and scale faster. Get a free AI assessment to see how we can help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                     <Dialog>
                        <DialogTrigger asChild>
                            <Button size="lg">Get Your Free AI Assessment</Button>
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
                    <Button size="lg" variant="secondary" asChild>
                        <a href="/solutions">Explore Our Services</a>
                    </Button>
                </div>
            </div>
        </div>
    </section>
  );
}
