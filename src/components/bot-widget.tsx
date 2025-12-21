"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from './ui/tooltip';
import { Chatbot } from './chatbot/Chatbot';

const supportBotUrl = "https://files.bpcontent.cloud/2025/09/03/00/20250903000320-ROVZPK8F.json";

export function BotWidget({ initialMessage }: { initialMessage: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => triggerRef.current?.focus(), 100);
        }
    }, [isOpen]);

    return (
        <div className="fixed bottom-4 right-4 z-[100] flex flex-col items-end">
            <div aria-live="polite" className="sr-only">
                {isOpen ? 'Chatbot panel is open.' : 'Chatbot panel is closed.'}
            </div>

            <Chatbot
                botpressUrl={supportBotUrl}
                title="Support Assistant"
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            ref={triggerRef}
                            aria-expanded={isOpen}
                            aria-controls="bot-panel"
                            onClick={() => setIsOpen(!isOpen)}
                            className={cn(
                                "rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-all duration-300 flex items-center justify-center h-12 px-4"
                            )}
                        >
                            <MessageCircle className="h-5 w-5 text-primary-foreground" />
                            <span className="ml-2 text-primary-foreground font-semibold">
                                {isOpen ? "Close" : "Chat with us"}
                            </span>
                            <span className="sr-only">{isOpen ? "Close Chatbot" : "Open Chatbot"}</span>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top" align="center" className="mb-2">
                        <p>Chat with our AI Assistant</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
}
