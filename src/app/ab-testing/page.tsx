
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Beaker, CheckCircle, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'A/B Testing Tool | Optimize Your Digital Assets',
  description: 'Use our A/B testing tool to compare different versions of your web pages, emails, and ads to see which one performs better. Make data-driven decisions to increase conversions.',
};

const benefits = [
    "Increase conversion rates on key pages",
    "Understand user behavior and preferences",
    "Reduce bounce rates and improve engagement",
    "Optimize ad spend and marketing campaigns",
    "Make confident, data-backed business decisions"
];

export default function ABTestingPage() {
  return (
    <div className="bg-background">
      <PageHero
        title="A/B Testing & Conversion Optimization"
        description="Stop guessing what works and start knowing. Our A/B testing tool allows you to test variations of your headlines, buttons, images, and layouts to discover what truly drives conversions. Make small changes that lead to big results."
      />
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold font-headline">Data-Driven Decisions</h2>
            <p className="text-md md:text-lg text-muted-foreground">
              Our tools provide clear insights into what your audience responds to, empowering you to create better user experiences.
            </p>
             <div className="space-y-3 pt-4">
                {benefits.map(benefit => (
                    <div key={benefit} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">{benefit}</span>
                    </div>
                ))}
            </div>
            <Button asChild size="lg" className="mt-4">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <div className="relative h-80 lg:h-96 mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl -rotate-3 transition-transform duration-300 ease-in-out hover:rotate-0"></div>
            <Card className="absolute inset-2 sm:inset-5 bg-background/80 backdrop-blur-lg rotate-2 transition-transform duration-300 ease-in-out hover:rotate-0 hover:scale-105">
                 <CardHeader>
                    <div className="flex justify-center mb-4">
                        <Beaker className="h-12 w-12 md:h-16 md:w-16 text-primary" />
                    </div>
                    <CardTitle className="text-center text-2xl md:text-3xl">A/B Testing</CardTitle>
                    <CardDescription className="text-center">
                        Test, measure, and optimize for success.
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground text-sm md:text-base">
                    <p>Unlock the power of data to create better user experiences.</p>
                </CardContent>
            </Card>
          </div>
        </section>

         <section className="text-center mt-16 md:mt-24 py-12 md:py-16 bg-secondary/30 rounded-lg px-6">
            <h2 className="text-2xl md:text-4xl font-bold font-headline">Ready to Improve Your Conversion Rates?</h2>
            <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's discuss how our A/B testing and optimization services can help you achieve your business goals. Schedule a free consultation today.
            </p>
            <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                    <Link href="/contact">
                        Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </section>

      </div>
    </div>
  );
}
