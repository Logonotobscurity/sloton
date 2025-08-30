import { BrainCircuit, ArrowRight, FileText, Lightbulb, BarChart, Calculator } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { SolutionRecommendationForm } from './solution-recommendation-form';
import { TaskAutomationForm } from './task-automation-form';
import { Button } from './ui/button';

export function StrategicPartner() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Your Strategic Technology Partner</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              We don't just build solutions; we build partnerships. Use our free, interactive tools to get instant, AI-powered insights for your specific business challenges.
            </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <Dialog>
            <DialogTrigger asChild>
               <Card className="bg-secondary/50 group flex flex-col text-left cursor-pointer transition-all duration-300 hover:border-primary hover:-translate-y-2">
                <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <BrainCircuit className="h-6 w-6" />
                    </div>
                    <CardTitle className="pt-4 text-2xl">AI Business Assessment</CardTitle>
                    <CardDescription>Get a high-level technology roadmap tailored to your business goals. Ideal for strategic planning.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-accent mt-0.5" /><span>Analyze your business needs</span></li>
                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-accent mt-0.5" /><span>Receive AI-driven recommendations</span></li>
                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-accent mt-0.5" /><span>Identify growth opportunities</span></li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <div className="text-primary font-semibold flex items-center">
                     Launch Assessment Tool <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                   </div>
                </CardFooter>
            </Card>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] bg-background">
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-2"><BrainCircuit className="h-6 w-6 text-accent" /> AI Business Assessment</DialogTitle>
                <DialogDescription>
                  Describe your business needs to receive tailored IT solution recommendations from our AI consultant. This tool helps you identify the best technology strategies for your goals.
                </DialogDescription>
              </DialogHeader>
              <SolutionRecommendationForm />
            </DialogContent>
          </Dialog>

           <Dialog>
            <DialogTrigger asChild>
                 <Card className="bg-secondary/50 group flex flex-col text-left cursor-pointer transition-all duration-300 hover:border-primary hover:-translate-y-2">
                    <CardHeader>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Calculator className="h-6 w-6" />
                        </div>
                        <CardTitle className="pt-4 text-2xl">Automation Task Designer</CardTitle>
                        <CardDescription>Visualize how a specific, repetitive task can be automated. Perfect for tactical workflow planning.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                         <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-accent mt-0.5" /><span>Describe a workflow</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-accent mt-0.5" /><span>Generate an automated design</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-accent mt-0.5" /><span>See AI-powered optimizations</span></li>
                        </ul>
                    </CardContent>
                     <CardFooter>
                       <div className="text-primary font-semibold flex items-center">
                         Launch Designer Tool <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                       </div>
                    </CardFooter>
                </Card>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] bg-background">
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-2"><Calculator className="h-6 w-6 text-accent" /> Automation Task Designer</DialogTitle>
                <DialogDescription>
                    Describe a workflow to generate a configured, optimized task design, complete with AI suggestions.
                </DialogDescription>
              </DialogHeader>
              <TaskAutomationForm />
            </DialogContent>
          </Dialog>

        </div>
      </div>
    </section>
  );
}

import { CheckCircle } from 'lucide-react';
import { CardFooter } from './ui/card';
