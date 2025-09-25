
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
  const panelRef = useRef<HTMLDivElement>(null);
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
  
  useEffect(() => {
    if (!isOpen) return;

    const focusableElements = panelRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusableElements) return;
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
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
    <div className="fixed bottom-4 right-4 z-50">
       <div aria-live="polite" className="sr-only">
         {isOpen ? 'Chatbot panel is open.' : 'Chatbot panel is closed.'}
       </div>
       {/* Collapsed State */}
       <Button
        ref={triggerRef}
        aria-expanded={isOpen}
        aria-controls="bot-panel"
        onClick={() => setIsOpen(true)}
        className={cn(
          "rounded-full h-14 px-6 shadow-lg bg-accent-green hover:bg-accent-green-2 transition-all duration-300 flex items-center gap-2",
          isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        )}
      >
        <MessageSquare className="h-6 w-6 text-white" />
        <span className="font-semibold text-white">Contact Now</span>
      </Button>

      {/* Expanded State */}
       <div
        id="bot-panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Chatbot Panel"
        className={cn(
          "w-[calc(100vw-32px)] h-[70vh] sm:w-80 md:w-[340px] md:h-[480px] bg-background border-2 border-card-glass rounded-xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right",
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        )}
      >
        <CardHeader className="flex flex-row items-center justify-between p-3 border-b border-card-glass">
            <div className="flex items-center gap-2">
                <Bot className="h-6 w-6 text-accent-green" />
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
                {msg.from === 'bot' && <Bot className="h-5 w-5 text-accent-green flex-shrink-0 mt-1" />}
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
        <CardFooter className="p-3 border-t border-card-glass">
          <form onSubmit={handleSendMessage} className="w-full flex items-center gap-2">
            <Input 
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about our solutions..."
              className="flex-1 bg-muted"
            />
            <Button type="submit" size="icon" className="bg-accent-green hover:bg-accent-green-2">
              <Send className="h-4 w-4" />
              <span className="sr-only">Send Message</span>
            </Button>
          </form>
        </CardFooter>
      </div>
    </div>
  );
}
