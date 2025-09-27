"use client";

import React, { useEffect, useRef } from "react";
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { SolutionRecommendationForm } from './solution-recommendation-form';
import Link from "next/link";
 
export function Hero() {
  const gradientRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    // Animate words
    const words = document.querySelectorAll<HTMLElement>(".word");
    words.forEach((word) => {
      const delay = parseInt(word.getAttribute("data-delay") || "0", 10);
      setTimeout(() => {
        word.style.animation = "word-appear 0.8s ease-out forwards";
      }, delay);
    });
 
    // Mouse gradient
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
 
    // Word hover effects
    words.forEach((word) => {
      word.addEventListener("mouseenter", () => {
        word.style.textShadow = "0 0 20px hsla(var(--primary) / 0.5)";
      });
      word.addEventListener("mouseleave", () => {
        word.style.textShadow = "none";
      });
    });
 
    // Click ripple effect
    function onClick(e: MouseEvent) {
      const ripple = document.createElement("div");
      ripple.style.position = "fixed";
      ripple.style.left = e.clientX + "px";
      ripple.style.top = e.clientY + "px";
      ripple.style.width = "4px";
      ripple.style.height = "4px";
      ripple.style.background = "hsla(var(--primary) / 0.6)";
      ripple.style.borderRadius = "50%";
      ripple.style.transform = "translate(-50%, -50%)";
      ripple.style.pointerEvents = "none";
      ripple.style.animation = "pulse-glow 1s ease-out forwards";
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    }
    document.addEventListener("click", onClick);
 
    let scrolled = false;
    function onScroll() {
      if (!scrolled) {
        scrolled = true;
        document.querySelectorAll<HTMLElement>(".floating-element").forEach((el, index) => {
          setTimeout(() => {
            if (el) {
              el.style.animationPlayState = "running";
            }
          }, index * 200);
        });
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
 
  return (
    <div
      className="min-h-screen bg-background text-foreground font-body overflow-hidden relative w-full"
    >
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="hsla(var(--primary) / 0.08)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: "0.5s" }} />
        <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: "1s" }} />
        <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: "1.5s" }} />
        <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: "2s" }} />
        <line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          className="grid-line"
          style={{ animationDelay: "2.5s", opacity: 0.05 }}
        />
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          className="grid-line"
          style={{ animationDelay: "3s", opacity: 0.05 }}
        />
        <circle cx="20%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: "3s" }} />
        <circle cx="80%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: "3.2s" }} />
        <circle cx="20%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: "3.4s" }} />
        <circle cx="80%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: "3.6s" }} />
        <circle cx="50%" cy="50%" r="1.5" className="detail-dot" style={{ animationDelay: "4s" }} />
      </svg>
 
      {/* Corner elements */}
      <div className="corner-element top-8 left-8" style={{ animationDelay: "4s" }}>
        <div className="absolute top-0 left-0 w-2 h-2 bg-primary/30"></div>
      </div>
      <div className="corner-element top-8 right-8" style={{ animationDelay: "4.2s" }}>
        <div className="absolute top-0 right-0 w-2 h-2 bg-primary/30"></div>
      </div>
      <div className="corner-element bottom-8 left-8" style={{ animationDelay: "4.4s" }}>
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-primary/30"></div>
      </div>
      <div className="corner-element bottom-8 right-8" style={{ animationDelay: "4.6s" }}>
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary/30"></div>
      </div>
 
      {/* Floating elements */}
      <div className="floating-element" style={{ top: "25%", left: "15%", animationDelay: "5s" }}></div>
      <div className="floating-element" style={{ top: "60%", left: "85%", animationDelay: "5.5s" }}></div>
      <div className="floating-element" style={{ top: "40%", left: "10%", animationDelay: "6s" }}></div>
      <div className="floating-element" style={{ top: "75%", left: "90%", animationDelay: "6.5s" }}></div>
 
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 md:px-6">
        {/* Main headline */}
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 opacity-0" style={{animation: "word-appear 1s ease-out forwards", animationDelay: "3.5s"}}>
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
 
      <div
        id="mouse-gradient"
        ref={gradientRef}
        className="fixed pointer-events-none w-96 h-96 rounded-full blur-3xl transition-all duration-500 ease-out opacity-0"
        style={{
          background: `radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 100%)`,
        }}
      ></div>
    </div>
  );
}
