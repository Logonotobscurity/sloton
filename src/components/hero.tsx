import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-background overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute h-[500px] w-[500px] bg-primary/10 rounded-full filter blur-3xl opacity-50 -top-40 -right-40"></div>
        <div className="absolute h-[400px] w-[400px] bg-accent/10 rounded-full filter blur-3xl opacity-50 -bottom-40 -left-40"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 text-left relative z-10">
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-widest text-primary mb-6 block">
            IT as a Service | Automation | AI
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter !leading-tight">
            We power <span className="text-primary">business efficiency</span> with smart technology
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
             At LOG_ON, we help businesses cut costs, automate processes, and scale faster with AI-driven solutions, digital transformation, and IT services built for growth.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg">
              <Link href="/solutions">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
