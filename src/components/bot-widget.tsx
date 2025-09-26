
"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';

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

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    } else {
      triggerRef.current?.focus();
    }
  }, [isOpen]);
  
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
          "w-[calc(100vw-32px)] h-[70vh] sm:w-80 md:w-[340px] md:h-[480px] bg-background border rounded-xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right mb-2",
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        )}
      >
        <CardHeader className="flex flex-row items-center justify-between p-3 border-b">
            <div className="flex items-center gap-2">
                <Bot className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">LOG_ON Assistant</h3>
            </div>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close Chatbot</span>
          </Button>
        </CardHeader>
        <CardContent className="flex-1 p-3 overflow-y-auto space-y-4" role="log">
           {messages.map((msg, index) => (
             <div key={index} className={cn("flex items-start gap-2", msg.from === 'user' ? 'justify-end' : '')}>
                {msg.from === 'bot' && <Bot className="h-5 w-5 text-primary flex-shrink-0 mt-1" />}
                <p className={cn(
                  "p-2 rounded-lg max-w-[80%]",
                  msg.from === 'bot' ? 'bg-muted' : 'bg-primary text-primary-foreground'
                )}>
                    {msg.text}
                </p>
                {msg.from === 'user' && <User className="h-5 w-5 text-primary flex-shrink-0 mt-1" />}
             </div>
           ))}
        </CardContent>
        <CardFooter className="p-3 border-t">
          <form onSubmit={handleSendMessage} className="w-full flex items-center gap-2">
            <Input 
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about our solutions..."
              className="flex-1 bg-muted"
            />
            <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90">
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
