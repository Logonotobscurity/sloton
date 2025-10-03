
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GlowingCard } from "./ui/glowing-card";
import { Button } from './ui/button';
import { Check, ArrowRight } from "lucide-react";
import React from "react";
import { Card } from "./ui/card";
import imageData from '@/lib/placeholder-images.json';
import { useChatbotStore } from "@/hooks/use-chatbot-store";
import Link from "next/link";

export function IdeasLab() {
  const { setChatbotOpen } = useChatbotStore();

  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <GlowingCard>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center p-6 md:p-12">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">
                Our Ideas Lab
              </h2>
              <p className="text-muted-foreground text-md md:text-lg">
                We are relentlessly curious, constantly testing new concepts and creative approaches. This dedicated space is where we share experimental ideas—often born from collaborations with partners—to gather feedback and drive improvement.
              </p>
              <p className="text-muted-foreground text-md md:text-lg">
                Understanding technology is our core value. It allows us to connect dots that specialists might miss, creating integrated solutions that are more robust, efficient, and innovative.
              </p>
              <Button asChild variant="outline">
                  <Link href="/ab-testing">
                      See Our Testing Methodology <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative h-64 w-64 md:h-80 md:w-80"
              >
                <Image
                  src="https://www.servicenow.com/content/dam/servicenow-assets/public/scripts/homepage-redesign/images/Home_AI-Agent-Logo.svg"
                  alt="AI Agent Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>
              
               <div className="w-full max-w-md text-center">
                  <h3 className="font-semibold text-lg mb-4">Let's put this agent to the test.</h3>
                  <Card 
                    onClick={() => setChatbotOpen(true)}
                    className="relative w-full cursor-pointer bg-secondary/50 p-4 rounded-xl hover:border-primary transition-colors"
                  >
                    <div className="flex items-center gap-4">
                        <div className="relative h-10 w-10 flex-shrink-0" data-ai-hint={imageData.gigpilotAvatar.dataAiHint}>
                            <Image
                                src={imageData.gigpilotAvatar.src}
                                alt="GIGPILOT Avatar"
                                sizes="40px"
                                fill
                                className="rounded-full object-cover"
                            />
                            <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-background" />
                        </div>

                        <div className="flex-1 min-w-0 text-left">
                            <div>
                                <p className="text-sm font-medium">
                                    Chat with GIGPILOT
                                </p>
                                <p className="text-[13px] text-muted-foreground mt-0.5">
                                    Our AI assistant is here to help you.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                        <Button
                                size="sm"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs h-8"
                            >
                                <Check className="h-3.5 w-3.5 mr-1" />
                                Chat Now
                            </Button>
                        </div>
                    </div>
                  </Card>
              </div>
            </div>
          </div>
        </GlowingCard>
      </div>
    </section>
  );
}
