
"use client";

import React from "react";
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { SolutionRecommendationForm } from './solution-recommendation-form';
import Link from "next/link";
 
export function Hero() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-hidden relative w-full flex flex-col justify-center items-center">
      <div
      className="absolute inset-0 -z-10 h-full w-full bg-background 
      bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] 
      bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
    />
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
              <div className="animate-[fade-in_0.5s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.2s' }}>
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
              </div>
              <div className="animate-[fade-in_0.5s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.8s' }}>
                <p className="text-md md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    We build and manage scalable, secure, and intelligent systems that help businesses cut costs, automate processes, and scale faster.
                </p>
              </div>
              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center mt-8 opacity-0 animate-[fade-in_0.5s_ease-out_forwards]"
                style={{animationDelay: "1.2s"}}
              >
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
