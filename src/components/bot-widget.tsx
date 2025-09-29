
"use client";

import { useState, useRef, useEffect, Fragment } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Bot, User, X, Sparkles, Calendar, HelpCircle, GraduationCap, Check, Loader2, RefreshCw, Type, MessageCircle, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from './ui/avatar';
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from "@/components/ui/chat-bubble";
import { ScrollArea } from './ui/scroll-area';
import { CommunityLeadForm } from './community-lead-form';
import { getSolutionRecommendation, SolutionRecommendationOutput } from '@/app/actions';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { useToast } from '@/hooks/use-toast';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const initialOptions = [
  { text: 'Get a Free AI Business Assessment', value: 'assessment', icon: <Sparkles className="h-4 w-4 mr-2" /> },
  { text: 'Schedule a Free Consultation', value: 'schedule', icon: <Calendar className="h-4 w-4 mr-2" /> },
  { text: 'Just Exploring / Have a Question', value: 'explore', icon: <HelpCircle className="h-4 w-4 mr-2" /> },
  { text: 'View Training Programs', value: 'training', icon: <GraduationCap className="h-4 w-4 mr-2" /> },
];

const goalsOptions = ['Increase Sales', 'Reduce Operational Costs', 'Improve Customer Satisfaction', 'Launch a New Product', 'Enhance Data Analytics', 'Scale Infrastructure'];
const challengesOptions = ['Manual Data Entry', 'Overwhelmed Support Team', 'Outdated Technology', 'Inefficient Workflows', 'Poor Customer Engagement', 'Lack of Data Insights'];

export function BotWidget({ initialMessage }: { initialMessage: string }) {
  const [isOpen, setIsOpen] = useState(false);
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
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    } else {
      setTimeout(() => triggerRef.current?.focus(), 100);
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
        botResponse = { from: 'bot', text: "Great! Let's start by understanding your primary business goals. You can select multiple options.", type: 'checkbox_group', options: goalsOptions, nextStep: 'assessment_challenges', partName: 'businessGoals' };
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

  const handleFormPartSubmit = (partData: any, nextStep: string) => {
    const updatedFormData = { ...formData, ...partData };
    setFormData(updatedFormData);
    setStep(nextStep);

    let userMessageText = 'Selections submitted.';
    if (partData.businessGoals) userMessageText = `${partData.businessGoals.length} goals selected.`;
    if (partData.challenges) userMessageText = `${partData.challenges.length} challenges selected.`;
    if (partData.name) userMessageText = `Provided contact information.`

    setMessages(prev => [...prev, {from: 'user', text: userMessageText}]);
    let botResponse: any;

    switch (nextStep) {
      case 'assessment_challenges':
        botResponse = { from: 'bot', text: "Understood. Now, what are the main challenges you're facing? Select all that apply.", type: 'checkbox_group', options: challengesOptions, nextStep: 'assessment_company_info', partName: 'challenges' };
        break;
      case 'assessment_company_info':
        botResponse = { from: 'bot', text: "Thanks. Just a few more details to create your personalized report.", type: 'form_part', nextStep: 'assessment_submit' };
        break;
      case 'assessment_submit':
        handleAssessmentSubmit(updatedFormData);
        return; // Avoid duplicate message
    }
    
    setIsLoading(true);
    setTimeout(() => {
        setMessages(prev => [...prev, botResponse]);
        setIsLoading(false);
    }, 800);
  }
  
  const handleAssessmentSubmit = async (assessmentData: any) => {
    setIsLoading(true);
    setMessages(prev => [...prev]); // Trigger loading state
    
    const result = await getSolutionRecommendation(assessmentData);
    
    setIsLoading(false);
    if (result.data) {
        setMessages(prev => [...prev, {from: 'bot', text: 'Thank you! I\'ve analyzed your needs and generated a personalized Technology Assessment Report for you.', type: 'component', component: <AssessmentResult result={result.data} />}]);
    } else {
        setMessages(prev => [...prev, {from: 'bot', text: `Sorry, there was an error generating your report. ${result.error}`, type: 'buttons', options: initialOptions }]);
    }
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
         {isOpen ? 'Chatbot panel is open.' : 'Chatbot panel is closed.'}
       </div>
      
       <div
        id="bot-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Chatbot Panel"
        className={cn(
          "w-full max-w-md h-full max-h-[80vh] bg-background border rounded-xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right mb-2",
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
                     <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
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
                           {msg.type === 'component' && !isLoading && <div className="py-2">{msg.component}</div>}
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
        <CardFooter className="p-4 border-t bg-background flex flex-col gap-4">
          <ActionPanel 
            currentMessage={messages[messages.length - 1]} 
            onOptionClick={handleOptionClick} 
            isLoading={isLoading} 
            onFormPartSubmit={handleFormPartSubmit}
          />
          <TextInputPanel onSend={handleTextInput} inputRef={inputRef} />
        </CardFooter>
      </div>

       <Button
        ref={triggerRef}
        aria-expanded={isOpen}
        aria-controls="bot-panel"
        onClick={() => setIsOpen(prev => !prev)}
        className={cn(
          "rounded-full h-16 w-16 p-0 shadow-lg bg-primary hover:bg-primary/90 transition-transform duration-300 flex items-center justify-center",
          "animate-in fade-in zoom-in-95"
        )}
      >
        {isOpen ? <X className="h-7 w-7 text-primary-foreground" /> : <Bot className="h-7 w-7 text-primary-foreground" />}
        <span className="sr-only">{isOpen ? "Close Chatbot" : "Open Chatbot"}</span>
      </Button>

    </div>
  );
}

const ActionPanel = ({ currentMessage, onOptionClick, isLoading, onFormPartSubmit }: { currentMessage: any; onOptionClick: any; isLoading: boolean; onFormPartSubmit: any; }) => {
    if (isLoading || !currentMessage || currentMessage.from === 'user') {
      return null;
    }

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
        case 'checkbox_group':
            return <CheckboxGroup options={currentMessage.options} onFormPartSubmit={onFormPartSubmit} nextStep={currentMessage.nextStep} partName={currentMessage.partName} />;
        case 'form_part':
            return <CompanyInfoForm onFormPartSubmit={onFormPartSubmit} nextStep={currentMessage.nextStep} />;
        default:
            return null; // Don't show anything if there are no actions
    }
};

const TextInputPanel = ({ onSend, inputRef }: { onSend: (text: string) => void; inputRef: React.RefObject<HTMLInputElement> }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex items-center gap-2">
      <Input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
        className="flex-1"
        autoComplete="off"
      />
      <Button type="submit" size="icon">
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
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
            <div className="space-y-6 text-sm">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Strategic Summary</h3>
                <p><strong>Title:</strong> {result.strategicSummary.title}</p>
                <p className="text-muted-foreground"><strong>Overview:</strong> {result.strategicSummary.overview}</p>
                <p className="text-muted-foreground"><strong>Primary Opportunity:</strong> {result.strategicSummary.primaryOpportunity}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Suggested Initiatives</h3>
                {result.suggestedInitiatives.map((item, index) => (
                    <div key={index} className="p-4 rounded-lg bg-secondary/50 mb-3 border">
                        <p className="font-semibold text-foreground">{item.initiativeName}</p>
                        <p className="text-muted-foreground mt-1">{item.description}</p>
                        <p className="text-muted-foreground mt-2"><strong>Estimated Impact:</strong> {item.estimatedImpact}</p>
                        <p className="text-muted-foreground mt-1"><strong>Relevant Services:</strong> {item.relevantServices.join(', ')}</p>
                    </div>
                ))}
              </div>
               <div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Next Steps</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                   {result.nextSteps.map((step, index) => (
                       <li key={index}><strong>{step.actionItem}</strong> (Owner: {step.owner})</li>
                   ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Internal Lead Profile</h3>
                <p className="text-muted-foreground"><strong>Priority Score:</strong> {result.leadProfile.priorityScore}</p>
                 <p className="text-muted-foreground"><strong>Key Interests:</strong> {result.leadProfile.keyInterests.join(', ')}</p>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </CardFooter>
  </Card>
);

const CheckboxGroup = ({ options, onFormPartSubmit, nextStep, partName }: { options: string[], onFormPartSubmit: any, nextStep: string, partName: string }) => {
  const [selected, setSelected] = useState<string[]>([]);
  
  const handleToggle = (option: string) => {
    setSelected(prev => prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]);
  };

  const handleSubmit = () => {
    onFormPartSubmit({ [partName]: selected }, nextStep);
  }

  return (
    <div className="space-y-3 pt-2">
        <div className="max-h-48 overflow-y-auto pr-2">
            {options.map(option => (
                <div key={option} className="flex items-center space-x-2 p-1">
                <Checkbox
                    id={option}
                    checked={selected.includes(option)}
                    onCheckedChange={() => handleToggle(option)}
                />
                <label htmlFor={option} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {option}
                </label>
                </div>
            ))}
        </div>
      <Button onClick={handleSubmit} size="sm" className="mt-2" disabled={selected.length === 0}>Continue</Button>
    </div>
  );
};

const CompanyInfoForm = ({ onFormPartSubmit, nextStep }: { onFormPartSubmit: any, nextStep: string }) => {
  const [companySize, setCompanySize] = useState('');
  const [industry, setIndustry] = useState('');
  const [budget, setBudget] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [businessNeeds, setBusinessNeeds] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (companySize && industry && budget && name && email && businessNeeds) {
      onFormPartSubmit({ companySize, industry, budget, name, email, businessNeeds }, nextStep);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 pt-2 text-sm">
      <div className="space-y-1">
        <label htmlFor="name">Full Name</label>
        <Input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" required />
      </div>
      <div className="space-y-1">
        <label htmlFor="email">Email</label>
        <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john.doe@example.com" required />
      </div>
      <div className="space-y-1">
        <label htmlFor="companySize">Company Size</label>
         <Select onValueChange={setCompanySize} value={companySize} required>
            <SelectTrigger><SelectValue placeholder="Select size" /></SelectTrigger>
            <SelectContent>
                <SelectItem value="1-10 employees">1-10 employees</SelectItem>
                <SelectItem value="11-50 employees">11-50 employees</SelectItem>
                <SelectItem value="51-200 employees">51-200 employees</SelectItem>
            </SelectContent>
        </Select>
      </div>
       <div className="space-y-1">
        <label htmlFor="industry">Industry</label>
        <Input id="industry" value={industry} onChange={e => setIndustry(e.target.value)} placeholder="e.g., E-commerce" required />
      </div>
       <div className="space-y-1">
        <label htmlFor="budget">Budget</label>
         <Select onValueChange={setBudget} value={budget} required>
            <SelectTrigger><SelectValue placeholder="Select budget" /></SelectTrigger>
            <SelectContent>
                <SelectItem value="Under $5,000">Under $5,000</SelectItem>
                <SelectItem value="$5,000 - $20,000">$5,000 - $20,000</SelectItem>
            </SelectContent>
        </Select>
      </div>
       <div className="space-y-1">
        <label htmlFor="businessNeeds">Anything else to add?</label>
        <Input id="businessNeeds" value={businessNeeds} onChange={e => setBusinessNeeds(e.target.value)} placeholder="Describe your needs..." required />
      </div>
      <Button type="submit" size="sm">Generate My Report</Button>
    </form>
  )
}

    
