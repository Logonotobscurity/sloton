"use client";

import React, { useEffect } from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

export function PageHero({ title, description, icon, children }: PageHeroProps) {
  useEffect(() => {
    const words = document.querySelectorAll<HTMLElement>(".page-hero-word");
    words.forEach((word, index) => {
      const delay = index * 80;
      setTimeout(() => {
        word.style.animation = "word-appear 0.8s ease-out forwards";
      }, delay);
    });
  }, [title]); 

  return (
    <div
      className="min-h-[50vh] bg-background text-foreground font-body overflow-hidden relative w-full flex flex-col justify-center items-center"
    >
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-background 
        bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] 
        bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />

      <div className="relative z-10 flex flex-col justify-center items-center px-4 md:px-6 text-center py-16 md:py-24">
        {icon && <div className="mb-4">{icon}</div>}
        <h1 className="font-headline text-[clamp(2.5rem,6vw,4rem)] !leading-tight max-w-3xl">
          {title.split(" ").map((word, index) => (
            <span key={index} className="page-hero-word inline-block opacity-0">{word} </span>
          ))}
        </h1>
        <p className="text-md md:text-lg text-muted-foreground mt-4 max-w-3xl">
           {description}
        </p>
        {children && <div className="mt-8 w-full">{children}</div>}
      </div>
    </div>
  );
}
