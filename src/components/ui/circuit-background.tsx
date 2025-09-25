"use client";

import { cn } from "@/lib/utils";
import React from "react";

export function CircuitBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 overflow-hidden bg-background",
        className
      )}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <pattern
            id="circuit"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1)"
          >
            <path
              d="M 80 80 V 40 Q 40 40 40 0 H 0"
              fill="none"
              stroke="hsl(var(--primary) / 0.1)"
              strokeWidth="1"
            ></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)"></rect>
      </svg>
    </div>
  );
}
