
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GlowingCard } from "./ui/glowing-card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Check, MessageCircle } from "lucide-react";

export function IdeasLab() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <GlowingCard>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center p-8 md:p-12">
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
                  <Dialog>
                    <DialogTrigger asChild>
                        <div className="relative bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-[0_1px_6px_0_rgba(0,0,0,0.02)] rounded-xl p-4 w-full cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="relative h-10 w-10 flex-shrink-0">
                                    <Image
                                        src="https://www.servicenow.com/content/dam/servicenow-assets/public/scripts/homepage-redesign/images/Home_Employees_No-Container.png"
                                        alt="GIGPILOT Avatar"
                                        sizes="40px"
                                        fill
                                        className="rounded-full object-cover"
                                    />
                                    <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white dark:ring-zinc-900" />
                                </div>

                                <div className="flex-1 min-w-0 text-left">
                                    <div>
                                        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                            Chat with GIGPILOT
                                        </p>
                                        <p className="text-[13px] text-zinc-500 dark:text-zinc-400 mt-0.5">
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
                        </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-2xl h-[80vh] flex flex-col p-0 gap-0">
                        <DialogHeader className="p-4 border-b">
                        <DialogTitle className="flex items-center gap-2">
                            <MessageCircle className="h-5 w-5 text-primary" />
                            GIGPILOT Assistant
                        </DialogTitle>
                        <DialogDescription>
                            Your personal guide to LOG_ON solutions.
                        </DialogDescription>
                        </DialogHeader>
                        <div className="flex-1">
                        <iframe 
                            src="https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/09/03/00/20250903000320-ROVZPK8F.json"
                            width="100%"
                            height="100%"
                            style={{ border: 'none' }}
                            title="Botpress Chatbot"
                        ></iframe>
                        </div>
                    </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </GlowingCard>
      </div>
    </section>
  );
}
