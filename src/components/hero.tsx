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
import { BrainCircuit } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center py-16">
       <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute h-[500px] w-[500px] bg-primary rounded-full filter blur-3xl opacity-10 -top-40 -right-40"></div>
        <div className="absolute h-[400px] w-[400px] bg-accent rounded-full filter blur-3xl opacity-10 -bottom-40 -left-40"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
        <span className="text-sm font-normal uppercase tracking-widest text-primary mb-6 block">
          Your Partner in Growth
        </span>
        <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-bold !leading-snug mb-8">
          Find the right <span className="text-primary">tech solution</span> for your business in minutes.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl mb-12">
           Stop guessing. Our AI-driven tools and expert services help you cut costs, automate processes, and scale faster. Start with a free, instant business assessment.
        </p>
        <div className="flex flex-wrap gap-4">
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
      </div>
    </section>
  );
}
