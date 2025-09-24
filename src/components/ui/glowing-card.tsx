"use client"
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
}

export const GlowingCard = ({ children, className }: GlowingCardProps) => {
  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden rounded-xl bg-background text-foreground shadow-md transition-shadow duration-300 hover:shadow-2xl",
        className
      )}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_50%,hsl(var(--primary)/0.1),transparent)]"></div>
        <div className="border-follow absolute left-0 top-0 h-4 w-4 rounded-full border-2 animate-border-follow animate-border-color-change z-10"></div>
      </div>

      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};
