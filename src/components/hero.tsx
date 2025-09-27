"use client";

import React, { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { SolutionRecommendationForm } from './solution-recommendation-form';
import Link from "next/link";
 
export function Hero() {

  useEffect(() => {
    // Animate words
    const words = document.querySelectorAll<HTMLElement>(".word");
    words.forEach((word) => {
      const delay = parseInt(word.getAttribute("data-delay") || "0", 10);
      setTimeout(() => {
        word.style.animation = "word-appear 0.8s ease-out forwards";
      }, delay);
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-hidden relative w-full">
      <div
      className="absolute inset-0 -z-10 h-full w-full bg-background 
      bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] 
      bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
    />
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
              <p className="text-sm font-normal uppercase tracking-widest text-primary">
                  <span className="word" data-delay="0">Your</span>
                  <span className="word" data-delay="100"> Partner</span>
                  <span className="word" data-delay="200"> in</span>
                  <span className="word" data-delay="300"> Growth</span>
              </p>
              <h1 className="font-headline text-[clamp(2.5rem,8vw,5rem)] !leading-tight my-4">
                  <span className="word" data-delay="500">The</span>
                  <span className="word" data-delay="600"> modern,</span>
                  <span className="word" data-delay="700"> AI-powered</span>
                  <br />
                  <span className="text-primary">
                    <span className="word" data-delay="900">tech</span>
                    <span className="word" data-delay="1000"> solution</span>
                  </span>
              </h1>
              <p className="text-md md:text-xl text-muted-foreground max-w-2xl mx-auto">
                  <span className="word" data-delay="1200">We</span>
                  <span className="word" data-delay="1300"> build</span>
                  <span className="word" data-delay="1400"> and</span>
                  <span className="word" data-delay="1500"> manage</span>
                  <span className="word" data-delay="1600"> scalable,</span>
                  <span className="word" data-delay="1700"> secure,</span>
                  <span className="word" data-delay="1800"> and</span>
                  <span className="word" data-delay="1900"> intelligent</span>
                  <span className="word" data-delay="2000"> systems</span>
                  <span className="word" data-delay="2100"> that</span>
                  <span className="word" data-delay="2200"> help</span>
                  <span className="word" data-delay="2300"> businesses</span>
                  <span className="word" data-delay="2400"> cut</span>
                  <span className="word" data-delay="2500"> costs,</span>
                  <span className="word" data-delay="2600"> automate</span>
                  <span className="word" data-delay="2700"> processes,</span>
                  <span className="word" data-delay="2800"> and</span>
                  <span className="word" data-delay="2900"> scale</span>
                  <span className="word" data-delay="3000"> faster.</span>
              </p>
              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center mt-8 opacity-0"
                style={{animation: "word-appear 1s ease-out forwards", animationDelay: "3.2s"}}
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
