
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
    description: "Make Smarter Decisions with Your Data. Get predictive insights that help you outmaneuver competitors without enterprise-level costs.",
    href: "/ai-solutions",
    cta: "See AI in Action",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Zap,
    name: "Process Automation",
    description: "Reclaim 40+ Hours Each Month. Automate the repetitive tasks that drain your team's productivity.",
    href: "/automation",
    cta: "Find Time-Saving Solutions",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Code,
    name: "Web & Custom Development",
    description: "Digital Presence That Actually Converts. Built to scale as you grow, without constant expensive updates.",
    href: "/web-development",
    cta: "Build Your Growth Engine",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: MessageSquare,
    name: "AI Chatbots",
    description: "24/7 Customer Support Without Hiring. AI assistants handle common questions instantly, freeing your team for revenue-generating conversations.",
    href: "/chatbots",
    cta: "Improve Customer Response Time",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BarChart3,
    name: "Business Analytics",
    description: "See Exactly What's Driving Your Business. Get clear, actionable insights that show precisely where to focus for maximum ROI.",
    href: "/business-analytics",
    cta: "Get Clear Insights",
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
                        We see your entire business <span className="text-primary">ecosystem</span>—not just isolated pieces.
                    </h2>
                    <p className="mt-4 text-md md:text-lg text-muted-foreground">
                       While specialists focus on their specific area, we connect the dots across your entire operation. This means integrated solutions that work together seamlessly, eliminating bottlenecks and saving you money.
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
