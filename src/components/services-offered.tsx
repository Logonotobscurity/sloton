"use client";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
    BrainCircuit,
    Zap,
    Code,
    MessageSquare,
    BarChart3,
    Database,
} from "lucide-react";
import React from 'react';
import { AdinkraBackground } from './ui/adinkra-background';

const services = [
  {
    Icon: BrainCircuit,
    name: "AI Solutions",
    description: "Custom AI models to solve complex business challenges.",
    href: "/ai-solutions",
    cta: "Learn More",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Zap,
    name: "Process Automation",
    description: "Streamline workflows and increase efficiency.",
    href: "/automation",
    cta: "Learn More",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Code,
    name: "Web & Custom Development",
    description: "Scalable websites and custom applications.",
    href: "/web-development",
    cta: "Learn More",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: MessageSquare,
    name: "Chatbots & Virtual Assistants",
    description: "AI-powered conversational agents for 24/7 engagement.",
    href: "/chatbots",
    cta: "Learn More",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BarChart3,
    name: "Business Analytics",
    description: "Turn data into actionable insights.",
    href: "/business-analytics",
    cta: "Learn More",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
  },
];


export function ServicesOffered() {
    return (
        <section className="py-16 md:py-24 bg-secondary/20 relative">
            <AdinkraBackground />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                     <p className="text-sm font-normal uppercase tracking-widest text-primary">02/ Our Approach</p>
                    <h2 className="font-headline text-[clamp(1.8rem,5vw,3rem)] font-bold !leading-snug mt-2">
                        We are strategic <span className="text-primary">generalists</span> in a world of hyper-specialization.
                    </h2>
                    <p className="mt-4 text-md md:text-lg text-muted-foreground">
                       Specialists see problems through the lens of their expertise. We see your entire business ecosystem. This allows us to connect dots and build integrated solutions that are more robust, efficient, and innovative than a collection of siloed tools.
                    </p>
                </div>
                <BentoGrid className="lg:grid-rows-3 mt-16">
                    {services.map((service) => (
                        <BentoCard key={service.name} {...service} />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}
