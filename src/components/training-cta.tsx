import Link from 'next/link';
import { Button } from './ui/button';
import { GraduationCap, ArrowRight } from 'lucide-react';

export function TrainingCTA() {
  return (
    <section className="py-24 sm:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-background p-8 md:p-12 rounded-lg">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <GraduationCap className="h-8 w-8" />
              <h2 className="text-3xl md:text-4xl font-bold">Advance Your Career</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Ready to master the most in-demand tech skills? Our expert-led training programs are designed to provide you with hands-on experience and a cutting-edge curriculum.
            </p>
            <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">✓ Learn AI, Automation, and more</li>
                <li className="flex items-center gap-2">✓ Gain practical, real-world project experience</li>
                <li className="flex items-center gap-2">✓ Get career support to achieve your goals</li>
            </ul>
          </div>
          <div className="text-center lg:text-right">
             <p className="mb-6 text-muted-foreground">Unlock your potential and become a leader in the digital transformation.</p>
            <Button asChild size="lg">
              <Link href="/training">
                Explore Training Programs <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
