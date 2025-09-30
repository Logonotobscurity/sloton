
"use client";

import React from "react";
import { Button } from '@/components/ui/button';
import Link from "next/link";
 
export function Hero() {
  const scrollToDesigner = () => {
    const designerElement = document.getElementById('automation-designer');
    if (designerElement) {
      designerElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="relative min-h-[90vh] w-full flex flex-col justify-center items-center overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] opacity-30" />
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl mx-auto animate-[fade-in_1s_ease-in-out]">
            <p className="text-sm font-normal uppercase tracking-widest text-primary">
                Your Digital Architects
            </p>
            <h1 className="font-headline text-[clamp(2.5rem,8vw,5rem)] !leading-tight my-4">
                We don't just build solutions.
                <br />
                <span className="text-primary">
                    We design your digital ecosystem.
                </span>
            </h1>
            <p className="text-md md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We craft intelligent, integrated systems that help businesses cut costs, automate processes, and scale with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button size="lg" onClick={scrollToDesigner}>Discover Your Automation Potential</Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/solutions">Explore Our Design Palette</Link>
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
