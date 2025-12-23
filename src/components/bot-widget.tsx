
"use client";

import { useContext, useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, User, Bot, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from './ui/tooltip';
import FocusLock from 'react-focus-lock';
import { ChatbotContext } from '@/context/chatbot-provider';
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from './ui/chat-bubble';
import { askSupportBot } from '@/app/actions';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import imageData from '@/lib/placeholder-images.json';
import Link from 'next/link';

interface Message {
    role: 'user' | 'assistant';
    content: string;
    sources?: { title: string; slug: string }[];
}

export function BotWidget({ initialMessage }: { initialMessage: string }) {
    const context = useContext(ChatbotContext);
    const [messages, setMessages] = useState<Message[]>([{ role: 'assistant', content: initialMessage }]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messageContainerRef = useRef<HTMLDivElement>(null);

    if (!context) {
        throw new Error("BotWidget must be used within a ChatbotProvider");
    }

    const { isChatbotOpen, setChatbotOpen } = context;

    useEffect(() => {
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const history = messages.map(msg => ({ role: msg.role, content: msg.content }));
        const response = await askSupportBot(history, input);

        setIsLoading(false);
        if (response.data) {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: response.data.answer,
                sources: response.data.sources
            }]);
        } else {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "Sorry, I'm having trouble connecting. Please try again later."
            }]);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-[100] flex flex-col items-end">
            <FocusLock disabled={!isChatbotOpen} returnFocus>
                <div
                    id="bot-panel"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Support Assistant Panel"
                    className={cn(
                        "w-[calc(100vw-2rem)] max-w-md h-[calc(100vh-8rem)] max-h-[700px] bg-background border rounded-xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right mb-2",
                        isChatbotOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    )}
                >
                    <div className="flex items-center justify-between p-2 border-b">
                        <p className="font-semibold text-sm pl-2">Support Assistant</p>
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setChatbotOpen(false)} aria-label="Close Chatbot">
                                        <X className="h-4 w-4" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Close Chat</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    
                    <div ref={messageContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((message, index) => (
                             <ChatBubble key={index} variant={message.role === 'user' ? 'sent' : 'received'}>
                                {message.role === 'assistant' && (
                                    <ChatBubbleAvatar>
                                        <Avatar>
                                            <AvatarImage src={imageData.gigpilotAvatar.src} alt="GIGPILOT Avatar" />
                                            <AvatarFallback><Bot /></AvatarFallback>
                                        </Avatar>
                                    </ChatBubbleAvatar>
                                )}
                                <div className="flex flex-col gap-2 w-full">
                                    <ChatBubbleMessage>
                                        {message.content}
                                    </ChatBubbleMessage>
                                    {message.sources && message.sources.length > 0 && (
                                         <div className="flex flex-col gap-2 text-xs">
                                            <p className="font-semibold">Sources:</p>
                                            <div className="flex gap-2 flex-wrap">
                                            {message.sources.map(source => (
                                                <Link key={source.slug} href={`/insights/${source.slug}`} target="_blank">
                                                    <div className="p-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-2">
                                                        <FileText className="h-3 w-3" />
                                                        <span>{source.title}</span>
                                                    </div>
                                                </Link>
                                            ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {message.role === 'user' && (
                                    <ChatBubbleAvatar>
                                        <Avatar>
                                            <AvatarFallback><User /></AvatarFallback>
                                        </Avatar>
                                    </ChatBubbleAvatar>
                                )}
                            </ChatBubble>
                        ))}
                         {isLoading && (
                            <ChatBubble variant="received">
                                <ChatBubbleAvatar>
                                    <Avatar>
                                        <AvatarImage src={imageData.gigpilotAvatar.src} alt="GIGPILOT Avatar" />
                                        <AvatarFallback><Bot /></AvatarFallback>
                                    </Avatar>
                                </ChatBubbleAvatar>
                                <ChatBubbleMessage isLoading />
                            </ChatBubble>
                        )}
                    </div>
                    
                    <div className="p-4 border-t">
                        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                            <Input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask a question..."
                                className="flex-1"
                                disabled={isLoading}
                                aria-label="Ask the support assistant a question"
                            />
                            <Button type="submit" size="icon" disabled={isLoading || !input.trim()} aria-label="Send message">
                                <Send className="h-4 w-4" />
                            </Button>
                        </form>
                    </div>
                </div>
            </FocusLock>

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
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
