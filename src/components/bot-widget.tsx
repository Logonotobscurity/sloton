
"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface BotWidgetProps {
  initialMessage?: string;
}

export function BotWidget({ initialMessage }: BotWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: initialMessage || "Hello! How can I help you today?" },
  ]);
  const [inputValue, setInputValue] = useState('');
  const triggerRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      scrollToBottom();
    } else {
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setMessages([...messages, { from: 'user', text: inputValue }]);
    setInputValue('');
    
    // Fake bot response
    setTimeout(() => {
        setMessages(prev => [...prev, { from: 'bot', text: "That's a great question. Let me find the best solution for you..." }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col items-end">
       <div aria-live="polite" className="sr-only">
         {isOpen ? 'Chatbot panel is open.' : 'Chatbot panel is closed.'}
       </div>
      
      {/* Expanded State */}
       <div
        id="bot-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Chatbot Panel"
        className={cn(
          "w-[calc(100vw-32px)] h-[70vh] sm:w-80 md:w-96 md:h-[600px] bg-background border rounded-xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right mb-2",
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        )}
      >
        <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
            <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground"><Bot className="h-5 w-5" /></AvatarFallback>
                </Avatar>
                <div>
                    <h3 className="font-semibold text-base">LOG_ON Assistant</h3>
                    <p className="text-xs text-muted-foreground">Online</p>
                </div>
            </div>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close Chatbot</span>
          </Button>
        </CardHeader>
        <CardContent className="flex-1 p-4 overflow-y-auto space-y-4" role="log">
           {messages.map((msg, index) => (
             <div key={index} className={cn("flex items-end gap-2", msg.from === 'user' ? 'justify-end' : '')}>
                {msg.from === 'bot' && (
                    <Avatar className="h-6 w-6 flex-shrink-0">
                        <AvatarFallback className="bg-primary text-primary-foreground text-xs"><Bot className="h-4 w-4" /></AvatarFallback>
                    </Avatar>
                )}
                <p className={cn(
                  "px-3 py-2 rounded-xl max-w-[80%] text-sm leading-relaxed",
                  msg.from === 'bot' 
                    ? 'bg-muted rounded-bl-sm' 
                    : 'bg-primary text-primary-foreground rounded-br-sm'
                )}>
                    {msg.text}
                </p>
                {msg.from === 'user' && (
                    <Avatar className="h-6 w-6 flex-shrink-0">
                        <AvatarFallback className="bg-secondary text-secondary-foreground"><User className="h-4 w-4" /></AvatarFallback>
                    </Avatar>
                )}
             </div>
           ))}
           <div ref={messagesEndRef} />
        </CardContent>
        <CardFooter className="p-4 border-t bg-background">
          <form onSubmit={handleSendMessage} className="w-full flex items-center gap-2">
            <Input 
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 bg-muted border-border/50 h-10"
              aria-label="Your message"
            />
            <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90 flex-shrink-0">
              <Send className="h-4 w-4" />
              <span className="sr-only">Send Message</span>
            </Button>
          </form>
        </CardFooter>
      </div>

       {/* Collapsed State Trigger Button */}
       <Button
        ref={triggerRef}
        aria-expanded={isOpen}
        aria-controls="bot-panel"
        onClick={() => setIsOpen(prev => !prev)}
        className={cn(
          "rounded-full h-14 w-14 p-0 shadow-lg bg-primary hover:bg-primary/90 transition-transform duration-300 flex items-center justify-center"
        )}
      >
        {isOpen ? <X className="h-6 w-6 text-primary-foreground" /> : <MessageSquare className="h-6 w-6 text-primary-foreground" />}
        <span className="sr-only">{isOpen ? "Close Chatbot" : "Open Chatbot"}</span>
      </Button>

    </div>
  );
}
