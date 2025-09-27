
"use client";

import { useState, useRef, useEffect, Fragment } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Bot, User, X, Send, Sparkles, Calendar, MessageCircle, HelpCircle, GraduationCap, Check, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from './ui/avatar';
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from "@/components/ui/chat-bubble";
import { ScrollArea } from './ui/scroll-area';
import { SolutionRecommendationForm } from './solution-recommendation-form';
import { CommunityLeadForm } from './community-lead-form';
import { getSolutionRecommendation, SolutionRecommendationOutput } from '@/app/actions';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from './ui/dialog';

const initialOptions = [
  { text: 'Get a Free AI Business Assessment', value: 'assessment', icon: <Sparkles className="h-4 w-4 mr-2" /> },
  { text: 'Schedule a Free Consultation', value: 'schedule', icon: <Calendar className="h-4 w-4 mr-2" /> },
  { text: 'Just Exploring / Have a Question', value: 'explore', icon: <HelpCircle className="h-4 w-4 mr-2" /> },
  { text: 'View Training Programs', value: 'training', icon: <GraduationCap className="h-4 w-4 mr-2" /> },
];

const goalsOptions = ['Increase Sales', 'Reduce Operational Costs', 'Improve Customer Satisfaction', 'Launch a New Product', 'Enhance Data Analytics', 'Scale Infrastructure'];
const challengesOptions = ['Manual Data Entry', 'Overwhelmed Support Team', 'Outdated Technology', 'Inefficient Workflows', 'Poor Customer Engagement', 'Lack of Data Insights'];

export function BotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([
    { from: 'bot', text: "Hello! I'm the LOG_ON AI Assistant. How can I help you unlock your business potential today?", options: initialOptions, type: 'buttons' },
  ]);
  const [step, setStep] = useState('start');
  const [formData, setFormData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  
  const triggerRef = useRef<HTMLButtonElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    } else {
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleOptionClick = (option: { text: string; value: string }) => {
    const userMessage = { from: 'user', text: option.text };
    let botResponse: any;

    setMessages(prev => [...prev, userMessage]);
    
    switch (option.value) {
      case 'assessment':
        setStep('assessment_goals');
        botResponse = { from: 'bot', text: 'Great! Let\'s start your AI assessment. First, what are your primary business goals? (Select all that apply)', options: goalsOptions, type: 'checkbox' };
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
         botResponse = { from: 'bot', text: 'Is there anything else I can help you with?', options: initialOptions, type: 'buttons' };
         break;
      case 'services_link':
          window.open('/solutions', '_blank');
          botResponse = { from: 'bot', text: 'Is there anything else I can help you with?', options: initialOptions, type: 'buttons' };
          break;
      case 'training':
        window.open('/training', '_blank');
        botResponse = { from: 'bot', text: 'I\'ve opened our Training Programs page for you. Is there anything else I can assist with?', options: initialOptions, type: 'buttons' };
        break;
      default:
        botResponse = { from: 'bot', text: 'I\'m sorry, I didn\'t understand that. Please choose an option.', options: initialOptions, type: 'buttons' };
    }
    
    setTimeout(() => setMessages(prev => [...prev, botResponse]), 500);
  };
  
  const handleCheckboxSubmit = (selected: string[]) => {
    let userMessage;
    let botResponse: any;

    switch (step) {
      case 'assessment_goals':
        userMessage = { from: 'user', text: `Goals: ${selected.join(', ')}` };
        setFormData({ ...formData, businessGoals: selected });
        setStep('assessment_challenges');
        botResponse = { from: 'bot', text: 'Got it. Now, what are your biggest challenges right now? (Select all that apply)', options: challengesOptions, type: 'checkbox' };
        break;
      case 'assessment_challenges':
        userMessage = { from: 'user', text: `Challenges: ${selected.join(', ')}` };
        setFormData({ ...formData, challenges: selected });
        setStep('assessment_form');
        botResponse = { from: 'bot', text: 'Perfect. Just a few more details to generate your personalized technology roadmap.', type: 'component', component: <SolutionRecommendationForm onFormSubmit={handleAssessmentSubmit} /> };
        break;
      default:
        userMessage = { from: 'user', text: 'Selection made.' };
        botResponse = { from: 'bot', text: 'How can I help you?', options: initialOptions, type: 'buttons' };
    }
    
    setMessages(prev => [...prev, userMessage]);
    setTimeout(() => setMessages(prev => [...prev, botResponse]), 500);
  };
  
  const handleAssessmentSubmit = async (assessmentData: any) => {
    const finalData = { ...formData, ...assessmentData };
    setMessages(prev => [...prev, {from: 'user', text: 'Assessment form submitted.'}]);
    setIsLoading(true);
    
    const result = await getSolutionRecommendation(finalData);
    
    setIsLoading(false);
    if (result.data) {
        setMessages(prev => [...prev, {from: 'bot', text: 'Thank you! I\'ve analyzed your needs and generated a personalized Technology Assessment Report for you.', type: 'component', component: <AssessmentResult result={result.data} />}]);
    } else {
        setMessages(prev => [...prev, {from: 'bot', text: `Sorry, there was an error generating your report. ${result.error}`, options: initialOptions, type: 'buttons' }]);
    }
    setStep('assessment_complete');
  }

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col items-end">
       <div aria-live="polite" className="sr-only">
         {isOpen ? 'Chatbot panel is open.' : 'Chatbot panel is closed.'}
       </div>
      
       <div
        id="bot-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Chatbot Panel"
        className={cn(
          "w-[calc(100vw-32px)] h-[80vh] sm:w-96 md:w-[440px] md:h-[700px] bg-background border rounded-xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right mb-2",
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        )}
      >
        <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
            <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border-2 border-primary">
                    <AvatarFallback className="bg-primary/20 text-primary"><Bot className="h-6 w-6" /></AvatarFallback>
                </Avatar>
                <div>
                    <h3 className="font-semibold text-base">LOG_ON AI Assistant</h3>
                    <p className="text-xs text-muted-foreground flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-green-500"></span> Online</p>
                </div>
            </div>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close Chatbot</span>
          </Button>
        </CardHeader>
        <ScrollArea className="flex-1" role="log">
          <CardContent className="p-4 space-y-6">
            {messages.map((msg, index) => (
                <Fragment key={index}>
                    <ChatBubble variant={msg.from === 'user' ? 'sent' : 'received'}>
                        <ChatBubbleAvatar>
                            <Avatar>
                                <AvatarFallback className={msg.from === 'user' ? 'bg-secondary' : 'bg-primary/20'}>
                                {msg.from === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4 text-primary" />}
                                </AvatarFallback>
                            </Avatar>
                        </ChatBubbleAvatar>
                        <ChatBubbleMessage>
                            {msg.text}
                        </ChatBubbleMessage>
                    </ChatBubble>
                     {msg.type === 'component' && <div className="py-2">{msg.component}</div>}
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
        <CardFooter className="p-4 border-t bg-background">
          <ActionPanel currentMessage={messages[messages.length - 1]} onOptionClick={handleOptionClick} onCheckboxSubmit={handleCheckboxSubmit} />
        </CardFooter>
      </div>

       <Button
        ref={triggerRef}
        aria-expanded={isOpen}
        aria-controls="bot-panel"
        onClick={() => setIsOpen(prev => !prev)}
        className={cn(
          "rounded-full h-16 w-16 p-0 shadow-lg bg-primary hover:bg-primary/90 transition-transform duration-300 flex items-center justify-center"
        )}
      >
        {isOpen ? <X className="h-7 w-7 text-primary-foreground" /> : <MessageCircle className="h-7 w-7 text-primary-foreground" />}
        <span className="sr-only">{isOpen ? "Close Chatbot" : "Open Chatbot"}</span>
      </Button>

    </div>
  );
}

const ActionPanel = ({ currentMessage, onOptionClick, onCheckboxSubmit }: { currentMessage: any; onOptionClick: any, onCheckboxSubmit: any }) => {
    const [selected, setSelected] = useState<string[]>([]);
    
    const handleToggle = (option: string) => {
        setSelected(prev => prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]);
    };
    
    if (!currentMessage || currentMessage.from === 'user') return null;
    
    switch (currentMessage.type) {
        case 'buttons':
            return (
                <div className="w-full space-y-2">
                    {currentMessage.options.map((opt: any) => (
                        <Button key={opt.value} variant="outline" className="w-full justify-start" onClick={() => onOptionClick(opt)}>
                            {opt.icon} {opt.text}
                        </Button>
                    ))}
                </div>
            );
        case 'checkbox':
             return (
                <div className="w-full space-y-3">
                    <div className="space-y-2">
                        {currentMessage.options.map((opt: string) => (
                             <Button
                                key={opt}
                                variant={selected.includes(opt) ? 'default' : 'outline'}
                                className="w-full justify-start text-left h-auto py-2"
                                onClick={() => handleToggle(opt)}
                            >
                                <div className="flex items-center">
                                    <div className={cn("w-4 h-4 mr-3 border rounded-sm flex-shrink-0", selected.includes(opt) ? "bg-primary-foreground" : "bg-background")}>
                                      {selected.includes(opt) && <Check className="h-4 w-4 text-primary" />}
                                    </div>
                                    <span className="flex-1">{opt}</span>
                                </div>
                            </Button>
                        ))}
                    </div>
                     <Button className="w-full" onClick={() => onCheckboxSubmit(selected)} disabled={selected.length === 0}>Continue</Button>
                </div>
            );
        default:
            return null;
    }
};

const AssessmentResult = ({ result }: { result: SolutionRecommendationOutput }) => (
  <Card className="bg-secondary/30 mt-2">
    <CardHeader>
      <CardTitle className="text-xl flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary" /> Your Technology Roadmap</CardTitle>
      <CardDescription>{result.strategicSummary.overview}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4 text-sm">
        <h4 className="font-semibold text-foreground">Suggested Initiatives:</h4>
        {result.suggestedInitiatives.map((item, index) => (
          <div key={index} className="p-3 rounded-md bg-background/50 border">
            <p className="font-semibold text-primary">{item.initiativeName}</p>
            <p className="text-muted-foreground mt-1">{item.description}</p>
          </div>
        ))}
    </CardContent>
    <CardFooter>
      <Dialog>
        <DialogTrigger asChild>
            <Button size="sm">View Full Report</Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Full Assessment Report</DialogTitle>
            <DialogDescription>
              A detailed analysis based on your business needs.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="flex-1 -mx-6 px-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Strategic Summary</h3>
                <p><strong>Title:</strong> {result.strategicSummary.title}</p>
                <p><strong>Overview:</strong> {result.strategicSummary.overview}</p>
                <p><strong>Primary Opportunity:</strong> {result.strategicSummary.primaryOpportunity}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Suggested Initiatives</h3>
                {result.suggestedInitiatives.map((item, index) => (
                    <div key={index} className="p-3 rounded-md bg-secondary/50 mb-2 border">
                        <p className="font-semibold text-primary">{item.initiativeName}</p>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                        <p className="text-sm mt-1"><strong>Estimated Impact:</strong> {item.estimatedImpact}</p>
                        <p className="text-sm mt-1"><strong>Relevant Services:</strong> {item.relevantServices.join(', ')}</p>
                    </div>
                ))}
              </div>
               <div>
                <h3 className="font-semibold mb-2">Next Steps</h3>
                <ul className="list-disc pl-5 space-y-1">
                   {result.nextSteps.map((step, index) => (
                       <li key={index}><strong>{step.actionItem}</strong> (Owner: {step.owner})</li>
                   ))}
                </ul>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </CardFooter>
  </Card>
);

    