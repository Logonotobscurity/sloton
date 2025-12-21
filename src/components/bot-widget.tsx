
"use client";

import { useState, useRef, useEffect, useContext } from 'react';
import { Button } from '@/components/ui/button';
import { X, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from './ui/tooltip';
import FocusLock from 'react-focus-lock';
import { useChatbotStore } from '@/hooks/use-chatbot-store';

const botpressUrl = "https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/09/03/00/20250903000320-ROVZPK8F.json";

export function BotWidget({ initialMessage }: { initialMessage: string }) {
  const { isChatbotOpen, setChatbotOpen } = useChatbotStore();
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isChatbotOpen) {
      setTimeout(() => triggerRef.current?.focus(), 100);
    }
  }, [isChatbotOpen]);


  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col items-end">
       <div aria-live="polite" className="sr-only">
         {isChatbotOpen ? 'Chatbot panel is open.' : 'Chatbot panel is closed.'}
       </div>
      
       <FocusLock disabled={!isChatbotOpen} returnFocus>
        <div
            id="bot-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Chatbot Panel"
            className={cn(
            "w-[calc(100vw-2rem)] max-w-md h-[calc(100vh-8rem)] max-h-[700px] bg-background border rounded-xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right mb-2",
            isChatbotOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            )}
        >
          <div className="flex items-center justify-between p-2 border-b">
            <p className="font-semibold text-sm pl-2">GIGPILOT Assistant</p>
            <TooltipProvider delayDuration={100}>
                <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setChatbotOpen(false)}>
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close Chatbot</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Close Chat</p>
                </TooltipContent>
                </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex-1 overflow-hidden">
            <iframe
                src={botpressUrl}
                width="100%"
                height="100%"
                className="w-full h-full"
                title="GIGPILOT Chatbot"
                style={{ border: 'none' }}
                />
          </div>
        </div>

        <TooltipProvider>
            <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    ref={triggerRef}
                    aria-expanded={isChatbotOpen}
                    aria-controls="bot-panel"
                    onClick={() => setChatbotOpen(!isChatbotOpen)}
                    className={cn(
                        "rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-all duration-300 flex items-center justify-center h-12 px-4"
                    )}
                    >
                    <MessageCircle className="h-5 w-5 text-primary-foreground" />
                    <span className="ml-2 text-primary-foreground font-semibold">
                       {isChatbotOpen ? "Close" : "Chat with us"}
                    </span>
                    <span className="sr-only">{isChatbotOpen ? "Close Chatbot" : "Open Chatbot"}</span>
                </Button>
            </TooltipTrigger>
            <TooltipContent side="top" align="center" className="mb-2">
                <p>Chat with our AI Assistant</p>
            </TooltipContent>
            </Tooltip>
        </TooltipProvider>
      </FocusLock>

    </div>
  );
}
