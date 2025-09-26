
"use client";

import React from 'react';
import { BrainCircuit, ArrowRight, Cog, Bot, Zap, Code } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

const services = [
    { icon: <BrainCircuit />, title: "AI Strategy & Consulting" },
    { icon: <Zap />, title: "Process Automation (RPA/BPA)" },
    { icon: <Bot />, title: "AI Chatbot Development" },
    { icon: <Code />, title: "Custom Web & App Development" },
];

export function StrategicPartner() {
  return (
    <section id="strategic-partner" className="py-16 md:py-24 bg-secondary/20 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
         <div className="text-center max-w-3xl mx-auto space-y-6">
            <p className="text-sm font-normal uppercase tracking-widest text-primary">01/ What We Do</p>
            <h2 className="font-headline text-[clamp(1.8rem,5vw,3rem)] !leading-snug">
                We build intelligent systems that drive <span className="text-primary">efficiency</span>, spark <span className="text-primary">innovation</span>, and create lasting <span className="text-primary">competitive advantages</span>.
            </h2>
            <p className="text-muted-foreground md:text-lg">
                Our value isn't just in understanding technology; it's in applying it to solve your core business challenges. We provide a clear, structured pathway to integrating technology that drives real business results.
            </p>
         </div>

         <div className="mt-16">
            <Carousel 
                opts={{ align: "start", loop: true }}
                plugins={[ Autoplay({ delay: 3000, stopOnInteraction: false }) ]}
            >
                <CarouselContent>
                    {services.map((service, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card className="bg-background/50 h-full">
                                    <CardHeader className="items-center text-center p-8">
                                        <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                                            {React.cloneElement(service.icon, { className: "h-8 w-8" })}
                                        </div>
                                        <CardTitle>{service.title}</CardTitle>
                                    </CardHeader>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
         </div>
      </div>
    </section>
  );
}
