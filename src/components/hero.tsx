import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center py-16">
       <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute h-[500px] w-[500px] bg-primary rounded-full filter blur-3xl opacity-10 -top-40 -right-40"></div>
        <div className="absolute h-[400px] w-[400px] bg-accent rounded-full filter blur-3xl opacity-10 -bottom-40 -left-40"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
        <span className="text-sm font-normal uppercase tracking-widest text-primary mb-6 block">
          IT as a Service | Automation | AI
        </span>
        <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-bold !leading-snug mb-8">
          We power <span className="text-primary">business efficiency</span> with smart technology
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl mb-12">
           At LOG_ON, we help businesses cut costs, automate processes, and scale faster with AI-driven solutions, digital transformation, and IT services built for growth.
        </p>
        <Button asChild>
          <Link href="/solutions">
            Explore Solutions
          </Link>
        </Button>
      </div>
    </section>
  );
}
