
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { ArrowIcon } from './ui/arrow-icon';

export function BottomCta() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
          Ready to Start a Project?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Let's talk about how we can help you achieve your goals.
        </p>
        <Button asChild variant="secondary" className="group">
          <Link href="/contact">
            Contact Now <ArrowIcon />
          </Link>
        </Button>
      </div>
    </section>
  );
}
