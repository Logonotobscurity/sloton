
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, ArrowRight, Home, TrendingUp, PlusSquare, Eye } from 'lucide-react';
import { useCarousel, Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { GatedFeatureModal } from './gated-feature-modal';
import Link from 'next/link';

const templates = [
  {
    icon: <PlusSquare className="h-6 w-6 text-amber-600" />,
    iconBg: "bg-amber-100 dark:bg-amber-900/50",
    title: 'Template Generator',
    description: 'Our Workflow Template Generator recognizes your specific needs and requirements and generates custom workflow templates in moments, just give it a few pointers about what kind of workflow you need.',
    isGenerator: true,
  },
  {
    icon: <Home className="h-6 w-6 text-purple-600" />,
    iconBg: "bg-purple-100 dark:bg-purple-900/50",
    title: '5S Auditing',
    slug: '5s-auditing',
    description: 'A regular process for conducting 5S audits to maintain organization and eliminate waste.',
    isGenerator: false,
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-indigo-600" />,
    iconBg: "bg-indigo-100 dark:bg-indigo-900/50",
    title: 'A/B Testing',
    slug: 'ab-testing',
    description: 'This process standardizes experimentation for business growth.',
    isGenerator: false,
  },
  {
    icon: <Home className="h-6 w-6 text-purple-600" />,
    iconBg: "bg-purple-100 dark:bg-purple-900/50",
    title: 'Accounts Payable',
    slug: 'accounts-payable',
    description: 'A regular process for conducting 5S audits to maintain organization and eliminate waste.',
    isGenerator: false,
  },
];

export function TemplateLibrary() {
  const [api, setApi] = React.useState<CarouselApi>()
 
  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])


  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 space-y-6">
            <h2 className="font-headline text-4xl md:text-5xl !leading-tight">
              Free Template Library
            </h2>
            <p className="text-muted-foreground text-lg">
              Take advantage of our <span className="text-primary font-semibold">free template library</span> to get started quickly: we've got templates for all key business processes that you can use as is or as a starting point for your own custom standard operating procedures.
            </p>
            <div className="flex items-center gap-2 pt-4">
              <Button variant="secondary" size="icon" className="rounded-full h-12 w-12 bg-foreground text-background hover:bg-foreground/80" onClick={scrollPrev}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Button variant="secondary" size="icon" className="rounded-full h-12 w-12 bg-foreground text-background hover:bg-foreground/80" onClick={scrollNext}>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="lg:col-span-8">
            <Carousel setApi={setApi} className="w-full" opts={{align: "start"}}>
              <CarouselContent className="-ml-4">
                {templates.map((template, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                    <Card className={`h-full flex flex-col group transition-all duration-300 border bg-background/50 ${template.isGenerator ? 'border-amber-500/50' : 'hover:border-primary/50'}`}>
                      <CardHeader>
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${template.iconBg}`}>
                          {template.icon}
                        </div>
                        <CardTitle className="pt-4 text-xl">{template.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <CardDescription>{template.description}</CardDescription>
                      </CardContent>
                      <CardFooter className="flex-col items-start gap-4">
                        {template.isGenerator ? (
                          <div className="relative w-full">
                            <Input placeholder="Enter a workflow name" className="bg-muted rounded-full h-12 pl-4 pr-14" />
                            <Button size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-amber-400 hover:bg-amber-500">
                              <ArrowRight className="h-5 w-5 text-black" />
                            </Button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                             <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                                <Link href={`/automation/${template.slug}`}>
                                    <Eye className="mr-2 h-4 w-4 text-amber-500" /> Preview
                                </Link>
                            </Button>
                             <GatedFeatureModal
                                trigger={
                                    <Button variant="outline" size="sm" className="rounded-full border-amber-500/50 text-amber-600 hover:bg-amber-500/10 hover:text-amber-500">
                                        Use template
                                    </Button>
                                }
                                featureName="Workflow Customization"
                            />
                          </div>
                        )}
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
