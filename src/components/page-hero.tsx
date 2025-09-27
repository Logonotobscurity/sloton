
"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export function PageHero({ title, description, icon, children }: PageHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const words = heroRef.current?.querySelectorAll<HTMLElement>(".word");
    if (words) {
      words.forEach((word, index) => {
        const delay = word.dataset.delay || `${index * 50}`;
        word.style.animation = `word-appear 0.8s ease-out forwards`;
        word.style.animationDelay = `${delay}ms`;
        word.style.opacity = '0'; // Ensure it starts as invisible
      });
    }
  }, [title, description]);

  const titleWords = title.split(" ");
  const descriptionWords = description.split(" ");

  return (
    <div ref={heroRef} className="py-24 md:py-32 text-center">
        <div className="container px-4 md:px-6">
            {icon && <div className="mb-4 flex justify-center">{icon}</div>}
            <h1
                className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight font-headline mb-6"
            >
                {titleWords.map((word, index) => (
                <span
                    key={index}
                    className="word inline-block"
                    data-delay={`${100 * index}`}
                >
                    {word}{" "}
                </span>
                ))}
            </h1>
            <p
                className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8"
            >
                {descriptionWords.map((word, index) => (
                <span
                    key={index}
                    className="word inline-block"
                    data-delay={`${500 + 50 * index}`}
                >
                    {word}{" "}
                </span>
                ))}
            </p>
            {children && <div className="mt-8 w-full word" data-delay="1000">{children}</div>}
        </div>
    </div>
  );
}
