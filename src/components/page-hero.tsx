
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
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const words = document.querySelectorAll<HTMLElement>(".word");
    words.forEach((word) => {
      const delay = parseInt(word.getAttribute("data-delay") || "0", 10);
      setTimeout(() => {
        word.style.animation = "word-appear 0.8s ease-out forwards";
      }, delay);
    });

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

  const titleWords = title.split(" ");
  const descriptionWords = description.split(" ");

  return (
    <div className="min-h-[50vh] bg-background text-foreground font-body overflow-hidden relative w-full flex items-center justify-center">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="hsl(var(--border) / 0.1)"
              strokeWidth="0.5"
            />
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

      <div className="relative z-10 flex flex-col justify-center items-center px-4 md:px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl">
          {icon && <div className="mb-4 flex justify-center">{icon}</div>}
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight font-headline mb-6"
          >
            {titleWords.map((word, index) => (
              <span
                key={index}
                className="word"
                style={{ animationDelay: `${100 * index}ms`, opacity: 0 }}
              >
                {word}{" "}
              </span>
            ))}
          </h1>
          <p
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed"
          >
            {descriptionWords.map((word, index) => (
              <span
                key={index}
                className="word"
                style={{ animationDelay: `${1000 + 50 * index}ms`, opacity: 0 }}
              >
                {word}{" "}
              </span>
            ))}
          </p>
          {children && <div className="mt-8 w-full animate-[fade-in_0.8s_ease-out_forwards]" style={{ animationDelay: '1.5s', opacity: 0 }}>{children}</div>}
        </div>
      </div>
    </div>
  );
}
