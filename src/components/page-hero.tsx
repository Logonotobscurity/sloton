
"use client";

import React, { useEffect } from 'react';
import { renderCanvas } from "@/components/ui/hero-designali";

interface PageHeroProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

export function PageHero({ title, description, icon, children }: PageHeroProps) {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
        <canvas
            className="pointer-events-none absolute inset-0 mx-auto"
            id="canvas"
        ></canvas>
        <div className="absolute inset-0 top-[100px] -z-10 h-[400px] w-full bg-transparent bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
            <div className="mx-auto max-w-3xl">
                <div className="relative mx-auto h-full p-6">
                    {icon && <div className="flex justify-center mb-4 text-primary">{icon}</div>}
                    <h1 className="font-headline text-[clamp(2.5rem,6vw,4rem)] !leading-tight">
                        {title}
                    </h1>
                    <p className="text-primary/60 mt-4 text-md md:text-lg text-muted-foreground">
                        {description}
                    </p>
                    {children}
                </div>
            </div>
        </div>
      </div>
     </section>
  );
}
