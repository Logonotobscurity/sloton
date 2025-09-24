
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
import { ArrowIcon } from './ui/arrow-icon';

export function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden bg-transparent py-24 text-center">
      <div className="container mx-auto flex flex-col items-center px-4 md:px-6">
        <span className="mb-4 block text-sm font-normal uppercase tracking-widest text-primary md:mb-6">
          Your Partner in Growth
        </span>
        <h1 className="mb-6 max-w-4xl font-headline text-[clamp(2.5rem,8vw,5rem)] font-bold !leading-tight text-white md:mb-8">
          Find the right <span className="font-extrabold text-primary">tech solution</span> for your business in minutes.
        </h1>
        <p className="mx-auto mt-6 mb-8 max-w-2xl text-md text-slate-300 md:mb-12 md:text-xl">
          Stop guessing. Our AI-driven tools and expert services help you cut costs, automate processes, and scale faster. Start with a free, instant business assessment.
        </p>
        <div className="flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="group flex items-center justify-center gap-2">
                Get Your Free AI Assessment
                <ArrowIcon />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] bg-background">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-2xl"><BrainCircuit className="h-6 w-6 text-accent" /> AI Business Assessment</DialogTitle>
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
        <div className="mt-12 text-center text-white">
            <Button asChild variant="ghost" className="text-slate-300 hover:text-primary">
                <Link href="/#strategic-partner">
                    Explore How We Work
                    <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
