import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-background"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,136,0.1)_0%,_transparent_40%)]"></div>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter !leading-tight">
            We power <span className="text-primary">business efficiency</span> with smart technology
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
            Leveraging cutting-edge automation and AI to solve your most complex challenges and drive growth.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
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
