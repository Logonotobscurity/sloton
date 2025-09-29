
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
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Core Services</h2>
                    <p className="mt-4 text-md md:text-lg text-muted-foreground">
                        We provide a comprehensive suite of scalable services designed to grow with your business and drive measurable results.
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
