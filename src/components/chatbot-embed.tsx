
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Bot, MessageCircle, Share2, Beaker, X, Check } from 'lucide-react';
import { ShareModal } from './share-modal';
import { Button } from './ui/button';
import Link from 'next/link';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import Image from 'next/image';

export function ChatbotEmbed() {
  return (
    <section id="gigpilot-chat" className="py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold font-headline">Chat with GIGPILOT</h2>
          <p className="mt-4 text-md md:text-lg text-muted-foreground">
            It's one of our AI Agents we are currently testing. Its capabilities are still being tested, so feel free to enjoy it!
          </p>
        </div>
        <div className="mt-12 max-w-xl mx-auto">
           <Dialog>
            <DialogTrigger asChild>
                <div className="relative bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-[0_1px_6px_0_rgba(0,0,0,0.02)] rounded-xl p-4 w-full cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors">
                    <div className="flex items-center gap-4">
                        <div className="relative h-10 w-10 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                            <Bot className="h-6 w-6 text-primary" />
                            <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white dark:ring-zinc-900" />
                        </div>

                        <div className="flex-1 min-w-0">
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
    </section>
  );
}
