
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
        <div 
          role="presentation"
          className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_50%,hsl(var(--primary)/0.1),transparent)]"></div>
      </div>

      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};
