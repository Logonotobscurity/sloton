
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { useChatbotStore } from '@/hooks/use-chatbot-store';
import { ArrowRight, Bot } from 'lucide-react';
import imageData from '@/lib/placeholder-images.json';

export function IdeasLab() {
  const { setChatbotOpen } = useChatbotStore();

  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">The Ideas Lab</h2>
          <p className="mt-4 text-md md:text-lg text-muted-foreground">
            A space for experimental concepts, AI generation prompts, and new approaches we are testing at LOG_ON. Here, we document the prompts and architectural decisions used to build our features, providing transparency and a blueprint for future innovation.
          </p>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
            <Card className="group cursor-pointer transition-all duration-300 hover:border-primary hover:-translate-y-2 bg-background/80">
                <button onClick={() => setChatbotOpen(true)} className="w-full text-left p-6 md:p-8">
                    <CardHeader className="p-0">
                        <div className="flex items-center gap-4">
                            <div className="p-3 md:p-4 rounded-full bg-primary/10 w-fit">
                                <Bot className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="text-xl">GIGPILOT: AI Gig Economy Assistant</CardTitle>
                                <CardDescription className="mt-1">
                                    An AI-powered tool to convert job seekers into engaged users.
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardFooter className="p-0 pt-6">
                        <span className="p-0 text-primary group-hover:text-primary/90 flex items-center font-semibold">
                            Activate GIGPILOT Assistant <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                    </CardFooter>
                </button>
            </Card>
        </div>
      </div>
    </section>
  );
}
