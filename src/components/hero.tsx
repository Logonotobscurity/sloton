
"use client";

import React from "react";
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { SolutionRecommendationForm } from './solution-recommendation-form';
import Link from "next/link";
 
export function Hero() {
  return (
    <div className="relative min-h-[90vh] w-full flex flex-col justify-center items-center overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] opacity-30" />
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl mx-auto animate-[fade-in_1s_ease-in-out]">
            <p className="text-sm font-normal uppercase tracking-widest text-primary">
                Your Partner in Growth
            </p>
            <h1 className="font-headline text-[clamp(2.5rem,8vw,5rem)] !leading-tight my-4">
                The modern, AI-powered
                <br />
                <span className="text-primary">
                    tech solution
                </span>
            </h1>
            <p className="text-md md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We build and manage scalable, secure, and intelligent systems that help businesses cut costs, automate processes, and scale faster.
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
                    <Link href="/solutions">Explore Our Services</Link>
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
