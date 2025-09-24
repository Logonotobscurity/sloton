
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
import { GlitchOrbBackground } from './glitch-orb-background';
import { ArrowIcon } from './ui/arrow-icon';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-16">
      <GlitchOrbBackground />
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center md:text-left">
        <span className="text-sm font-normal uppercase tracking-widest text-primary mb-4 md:mb-6 block">
          Your Partner in Growth
        </span>
        <h1 className="font-headline text-[clamp(2.5rem,8vw,5rem)] font-bold !leading-tight mb-6 md:mb-8">
          Find the right <span className="text-primary font-extrabold">tech solution</span> for your business in minutes.
        </h1>
        <p className="mt-6 max-w-2xl text-md md:text-xl text-muted-foreground mb-8 md:mb-12 mx-auto md:mx-0">
           Stop guessing. Our AI-driven tools and expert services help you cut costs, automate processes, and scale faster. Start with a free, instant business assessment.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="group flex justify-center gap-2 items-center">
                Get Your Free AI Assessment
                <ArrowIcon />
              </Button>
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
