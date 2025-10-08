
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Check } from 'lucide-react';
import { DesignerCard } from '@/components/shared/designer-card';

const popularWorkflows = [
    "Automate Lead Conversion & Follow-up",
    "Streamline Financial Reporting & Compliance",
    "Accelerate Employee Onboarding",
    "Automate Marketing Campaign Execution",
    "Resolve Customer Support Tickets Faster"
]

export function SmarterAutomation() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-normal uppercase tracking-widest text-primary">03/ Our Platform</p>
            <h2 className="font-headline text-[clamp(2rem,5vw,3rem)] font-bold !leading-snug mt-4">
              The Fastest Path to Automation
            </h2>
            <p className="text-muted-foreground text-md md:text-lg mt-4">
              Describe any business process in plain English. Get a complete, optimized automation plan in seconds—showing exactly how to reduce costs and save time.
            </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-stretch mt-12">
            
            <DesignerCard isGlow={true} />

            <Card className="bg-secondary/20 p-8">
                <CardHeader className="p-0">
                    <CardTitle>Popular Business Solutions</CardTitle>
                    <CardDescription>Explore solutions for every part of your business.</CardDescription>
                </CardHeader>
                <CardContent className="p-0 pt-6">
                    <ul className="space-y-3">
                        {popularWorkflows.map(item => (
                            <li key={item} className="flex items-center gap-3">
                                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
                 <CardFooter className="p-0 pt-6">
                    <Button asChild variant="outline">
                        <Link href="/automation">
                            Explore All Templates <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>

        </div>
      </div>
    </section>
  );
}
