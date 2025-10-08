
"use client";

import { useState, useRef, useEffect, Fragment } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Bot, User, X, Sparkles, Calendar, HelpCircle, GraduationCap, RefreshCw, MessageCircle, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from './ui/avatar';
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from "@/components/ui/chat-bubble";
import { ScrollArea } from './ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from './ui/tooltip';
import { useChatbotStore } from '@/hooks/use-chatbot-store';
import { CommunityLeadForm } from './community-lead-form';
import { ActionPanel } from './chatbot/action-panel';
import { AssessmentResult } from './chatbot/assessment-result';
import { TextInputPanel } from './chatbot/text-input-panel';
import FocusLock from 'react-focus-lock';

const initialOptions = [
  { text: 'Get a Free AI Business Assessment', value: 'assessment', icon: <Sparkles className="h-4 w-4 mr-2" /> },
  { text: 'Schedule a Free Consultation', value: 'schedule', icon: <Calendar className="h-4 w-4 mr-2" /> },
  { text: 'Just Exploring / Have a Question', value: 'explore', icon: <HelpCircle className="h-4 w-4 mr-2" /> },
  { text: 'View Training Programs', value: 'training', icon: <GraduationCap className="h-4 w-4 mr-2" /> },
];

export function BotWidget({ initialMessage }: { initialMessage: string }) {
  const { isChatbotOpen, setChatbotOpen } = useChatbotStore();
  const [messages, setMessages] = useState<any[]>([]);
  const [step, setStep] = useState('start');
  const [formData, setFormData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const resetConversation = () => {
    setMessages([
      { from: 'bot', text: initialMessage, type: 'buttons', options: initialOptions },
    ]);
    setStep('start');
    setFormData({});
    setIsLoading(false);
  };
  
  useEffect(() => {
    resetConversation();
  }, [initialMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isChatbotOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setTimeout(() => triggerRef.current?.focus(), 100);
    }
  }, [isChatbotOpen]);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleOptionClick = (option: { text: string; value: string }) => {
    const userMessage = { from: 'user', text: option.text };
    let botResponse: any;

    setMessages(prev => [...prev, userMessage]);
    
    switch (option.value) {
      case 'assessment':
        setStep('assessment_needs');
        botResponse = { from: 'bot', text: "Great! To start, could you please describe your primary business goals or challenges in a few sentences? This will help me tailor the recommendations for you.", type: 'form_part', partName: 'businessNeeds' };
        break;
      case 'schedule':
        setStep('schedule_form');
        botResponse = { from: 'bot', text: 'I can help with that. Please fill out the form below to connect with our team and book a free demo.', type: 'component', component: <CommunityLeadForm interest="Consultation Request" /> };
        break;
      case 'explore':
         botResponse = { from: 'bot', text: "No problem! You can find answers to common questions on our FAQ page, or explore our services in detail.", type: 'buttons', options: [{text: "Visit FAQ", value: "faq_link"}, {text: "Explore Services", value: "services_link"}]};
         break;
      case 'faq_link':
         window.open('/#faq', '_blank');
         botResponse = { from: 'bot', text: 'Is there anything else I can help you with?', type: 'buttons', options: initialOptions };
         break;
      case 'services_link':
          window.open('/solutions', '_blank');
          botResponse = { from: 'bot', text: 'Is there anything else I can help you with?', type: 'buttons', options: initialOptions };
          break;
      case 'training':
        window.open('/training', '_blank');
        botResponse = { from: 'bot', text: 'I\'ve opened our Training Programs page for you. Is there anything else I can assist with?', type: 'buttons', options: initialOptions };
        break;
      default:
        botResponse = { from: 'bot', text: 'I\'m sorry, I didn\'t understand that. Please choose an option.', type: 'buttons', options: initialOptions };
    }
    
    setIsLoading(true);
    setTimeout(() => {
        setMessages(prev => [...prev, botResponse]);
        setIsLoading(false);
    }, 800);
  };
  
  const onFormPartSubmit = (partData: any, partName: string, userMessageText: string) => {
    const updatedFormData = { ...formData, ...partData };
    setFormData(updatedFormData);

    let nextStepKey: string = '';
    let nextBotResponse: any;

    if (partName === 'businessNeeds') {
      nextStepKey = 'assessment_company_info';
      nextBotResponse = { from: 'bot', text: "Perfect, that's very helpful. Just a few more details to create your personalized report.", type: 'form_part', partName: 'companyInfo' };
    } else if (partName === 'companyInfo') {
      nextStepKey = 'assessment_contact';
      nextBotResponse = { from: 'bot', text: "Almost there! Lastly, where should I send the final report?", type: 'form_part', partName: 'contactInfo' };
    } else if (partName === 'contactInfo') {
      nextStepKey = 'assessment_submit';
      handleAssessmentSubmit(updatedFormData);
      return; 
    }
    
    setStep(nextStepKey);
    setMessages(prev => [...prev, {from: 'user', text: userMessageText}]);
    
    setIsLoading(true);
    setTimeout(() => {
        setMessages(prev => [...prev, nextBotResponse]);
        setIsLoading(false);
    }, 800);
  }

  const handleAssessmentSubmit = async (assessmentData: any) => {
    setIsLoading(true);
    setMessages(prev => [...prev, {from: 'user', text: 'Contact information provided.'}]);
    
    setMessages(prev => [...prev, {from: 'bot', text: `Sorry, there was an error generating your report.`, type: 'buttons', options: initialOptions }]);
    setStep('assessment_complete');
  }

  const handleTextInput = (text: string) => {
    const userMessage = { from: 'user', text };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    setTimeout(() => {
        setIsLoading(false);
        const lowerCaseText = text.toLowerCase();
        let botResponse: any;

        if (lowerCaseText.includes('price') || lowerCaseText.includes('cost') || lowerCaseText.includes('budget')) {
            botResponse = { from: 'bot', text: "Our pricing is project-based. For a detailed quote, we recommend getting a free AI assessment or scheduling a consultation.", type: 'buttons', options: initialOptions };
        } else if (lowerCaseText.includes('timeline') || lowerCaseText.includes('long')) {
            botResponse = { from: 'bot', text: "Timelines vary. A simple chatbot might take 2-4 weeks, while a larger project can take several months. A free consultation would be the best way to get a specific timeline.", type: 'buttons', options: initialOptions };
        } else if (lowerCaseText.includes('ai') || lowerCaseText.includes('automation')) {
            botResponse = { from: 'bot', text: "We specialize in AI and automation! The best way to see how we can help is with our free AI assessment. Would you like to start that?", type: 'buttons', options: initialOptions };
        } else if (lowerCaseText.includes('hello') || lowerCaseText.includes('hi')) {
            botResponse = { from: 'bot', text: "Hello! How can I help you today?", type: 'buttons', options: initialOptions };
        } else {
            botResponse = { from: 'bot', text: "That's a great question. While I'm still learning, the best way to get an answer is to explore our services or schedule a free consultation with an expert.", type: 'buttons', options: initialOptions };
        }
        setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

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
            <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
                <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-primary">
                        <AvatarFallback className="bg-primary/20 text-primary"><MessageCircle className="h-6 w-6" /></AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className="font-semibold text-base">LOG_ON AI Assistant</h3>
                        <p className="text-xs text-muted-foreground flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary"></span> Online</p>
                    </div>
                </div>
            <div className="flex items-center gap-1">
                <TooltipProvider delayDuration={100}>
                    <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={resetConversation}>
                        <RefreshCw className="h-4 w-4" />
                        <span className="sr-only">Reset conversation</span>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Start a New Conversation</p>
                    </TooltipContent>
                    </Tooltip>
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
            </CardHeader>
            <ScrollArea className="flex-1" role="log">
            <CardContent className="p-4 space-y-6">
                {messages.map((msg, index) => (
                    <Fragment key={index}>
                        <ChatBubble variant={msg.from === 'user' ? 'sent' : 'received'}>
                            <ChatBubbleAvatar>
                                <Avatar>
                                    <AvatarFallback className={cn(msg.from === 'user' ? 'bg-secondary' : 'bg-primary/20')}>
                                    {msg.from === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4 text-primary" />}
                                    </AvatarFallback>
                                </Avatar>
                            </ChatBubbleAvatar>
                            <ChatBubbleMessage>
                            {msg.text}
                            {msg.type === 'component' && <div className="py-2">{msg.component}</div>}
                            </ChatBubbleMessage>
                        </ChatBubble>
                    </Fragment>
                ))}
                {isLoading && (
                    <ChatBubble variant="received">
                    <ChatBubbleAvatar>
                        <Avatar>
                            <AvatarFallback className="bg-primary/20"><Bot className="h-4 w-4 text-primary" /></AvatarFallback>
                        </Avatar>
                    </ChatBubbleAvatar>
                    <ChatBubbleMessage isLoading />
                    </ChatBubble>
                )}
                <div ref={messagesEndRef} />
            </CardContent>
            </ScrollArea>
            <CardFooter className="p-4 border-t bg-background flex flex-col items-start gap-4">
                <ActionPanel 
                    currentMessage={messages[messages.length - 1]} 
                    onOptionClick={handleOptionClick} 
                    isLoading={isLoading} 
                    onFormPartSubmit={onFormPartSubmit}
                />
                <TextInputPanel onSend={handleTextInput} inputRef={inputRef} />
            </CardFooter>
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
                    "rounded-full h-12 w-12 p-0 shadow-lg bg-primary hover:bg-primary/90 transition-all duration-300 flex items-center justify-center",
                    "md:h-12 md:w-auto md:px-4 md:py-2 md:gap-2"
                )}
                >
                {isChatbotOpen ? <X className="h-5 w-5 text-primary-foreground" /> : <MessageCircle className="h-5 w-5 text-primary-foreground" />}
                <span className="hidden md:inline text-primary-foreground font-semibold">Chat with us</span>
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
