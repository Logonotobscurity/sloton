

import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '@/lib/case-studies';
import { CaseStudiesCarousel } from './case-studies-carousel';

export function IntegrationsHighlight() {
  const relevantCaseStudies = caseStudies.filter(cs => cs.tags.includes('AI') || cs.tags.includes('Chatbot'));

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-[clamp(2rem,6vw,3rem)] !leading-tight">
              Make your customers happier and internal teams more efficient.
            </h2>
            <p className="text-muted-foreground text-md md:text-lg">
              With personalized support, fast self-service, and centralized resources and tools, LOG_ON helps you deliver exceptional customer experiences.
            </p>
            <Button asChild>
                <Link href="/solutions">
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
          </div>
          <div className="min-h-[350px]">
             <CaseStudiesCarousel studies={relevantCaseStudies} />
          </div>
        </div>
      </div>
    </section>
  );
}
