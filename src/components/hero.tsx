
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { SolutionRecommendationForm } from './solution-recommendation-form';
import { BrainCircuit, ArrowDown } from 'lucide-react';
import { CircuitBackground } from './circuit-background';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center py-16">
       <div className="absolute inset-0 -z-10 overflow-hidden">
        <CircuitBackground />
        <div className="absolute h-[200px] w-[200px] sm:h-[500px] sm:w-[500px] bg-primary rounded-full filter blur-3xl opacity-10 -top-20 -right-20 sm:-top-40 sm:-right-40"></div>
        <div className="absolute h-[200px] w-[200px] sm:h-[400px] sm:w-[400px] bg-accent rounded-full filter blur-3xl opacity-10 -bottom-20 -left-20 sm:-bottom-40 sm:-left-40"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center md:text-left">
        <span className="text-sm font-normal uppercase tracking-widest text-primary mb-4 md:mb-6 block">
          Your Partner in Growth
        </span>
        <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-bold !leading-tight mb-6 md:mb-8">
          Find the right <span className="text-primary">tech solution</span> for your business in minutes.
        </h1>
        <p className="mt-6 max-w-2xl text-md md:text-xl text-muted-foreground mb-8 md:mb-12 mx-auto md:mx-0">
           Stop guessing. Our AI-driven tools and expert services help you cut costs, automate processes, and scale faster. Start with a free, instant business assessment.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg">Get Your Free AI Assessment</Button>
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
           <Button asChild variant="secondary" size="lg">
            <Link href="/solutions">
              Explore Our Services
            </Link>
          </Button>
        </div>
        <div className="mt-12 text-center md:text-left">
            <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary">
                <Link href="/#gigpilot-chat">
                    Or, chat with our AI assistant
                    <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
