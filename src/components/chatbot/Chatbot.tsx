"use client";

import { X } from 'lucide-react';
import { Button } from '../ui/button';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '../ui/tooltip';
import { cn } from '@/lib/utils';
import FocusLock from 'react-focus-lock';

interface ChatbotProps {
    botpressUrl: string;
    title: string;
    isOpen: boolean;
    onClose: () => void;
}

export function Chatbot({ botpressUrl, title, isOpen, onClose }: ChatbotProps) {
    return (
        <FocusLock disabled={!isOpen} returnFocus>
            <div
                id="bot-panel"
                role="dialog"
                aria-modal="true"
                aria-label={`${title} Panel`}
                className={cn(
                    "w-[calc(100vw-2rem)] max-w-md h-[calc(100vh-8rem)] max-h-[700px] bg-background border rounded-xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right mb-2",
                    isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                )}
            >
                <div className="flex items-center justify-between p-2 border-b">
                    <p className="font-semibold text-sm pl-2">{title}</p>
                    <TooltipProvider delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onClose}>
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
                        title={title}
                        style={{ border: 'none' }}
                    />
                </div>
            </div>
        </FocusLock>
    );
}
