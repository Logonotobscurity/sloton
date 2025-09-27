
"use client";

import React, { useEffect, useRef } from "react";
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { SolutionRecommendationForm } from './solution-recommendation-form';
import Link from "next/link";
 
export function Hero() {
  const gradientRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const gradient = gradientRef.current;
    function onMouseMove(e: MouseEvent) {
      if (gradient) {
        gradient.style.left = e.clientX - 192 + "px";
        gradient.style.top = e.clientY - 192 + "px";
        gradient.style.opacity = "1";
      }
    }
    function onMouseLeave() {
      if (gradient) gradient.style.opacity = "0";
    }
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-hidden relative w-full flex flex-col justify-center items-center -mx-4 md:-mx-6">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(var(--border) / 0.1)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div
        id="mouse-gradient"
        ref={gradientRef}
        className="fixed pointer-events-none w-96 h-96 rounded-full blur-3xl transition-all duration-500 ease-out opacity-0"
        style={{
          background: `radial-gradient(circle, hsl(var(--primary)/0.1) 0%, transparent 100%)`,
        }}
      ></div>

      <div className="relative z-10 flex flex-col justify-center items-center px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
              <div className="animate-[fade-in_0.8s_ease-out_forwards]" style={{ animationDelay: '0.2s', opacity: 0 }}>
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
              <div className="animate-[fade-in_0.8s_ease-out_forwards]" style={{ animationDelay: '0.8s', opacity: 0 }}>
                <p className="text-md md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    We build and manage scalable, secure, and intelligent systems that help businesses cut costs, automate processes, and scale faster.
                </p>
              </div>
              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-[fade-in_0.8s_ease-out_forwards]"
                style={{ animationDelay: '1.2s', opacity: 0 }}
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
