
"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { ArrowRight, Bot } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Chatbot } from '../chatbot/Chatbot';

const gigpilotBotUrl = "https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/09/03/00/20250903000320-ROVZPK8F.json";

export function IdeasLab() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

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
          <Dialog open={isChatbotOpen} onOpenChange={setIsChatbotOpen}>
            <DialogTrigger asChild>
              <Card className="group transition-all duration-300 hover:border-primary hover:-translate-y-2 bg-background/80">
                <button className="w-full text-left p-6 md:p-8" aria-label="Activate GIGPILOT Assistant">
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
            </DialogTrigger>
            <DialogContent className="p-0 border-0 bg-transparent w-full max-w-md h-[70vh] max-h-[700px] shadow-none">
                <div className="w-full h-full bg-background border rounded-xl shadow-2xl flex flex-col">
                    <div className="flex items-center justify-between p-2 border-b">
                        <p className="font-semibold text-sm pl-2">GIGPILOT Assistant</p>
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsChatbotOpen(false)}>
                            <span className="sr-only">Close Chatbot</span>
                        </Button>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <iframe
                            src={gigpilotBotUrl}
                            width="100%"
                            height="100%"
                            className="w-full h-full"
                            title="GIGPILOT Assistant"
                            style={{ border: 'none' }}
                        />
                    </div>
                </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
