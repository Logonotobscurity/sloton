
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye, Cog } from 'lucide-react';
import { GatedFeatureModal } from './gated-feature-modal';
import Link from 'next/link';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { TaskAutomationForm } from './task-automation-form';
import { cn } from '@/lib/utils';
import { Home, TrendingUp } from 'lucide-react';

const generatorTemplate = {
    icon: <Cog className="h-6 w-6 text-amber-600" />,
    iconBg: "bg-amber-100 dark:bg-amber-900/50",
    title: 'Template Generator',
    description: 'Our Workflow Template Generator recognizes your specific needs and requirements and generates custom workflow templates in moments, just give it a few pointers about what kind of workflow you need.',
    isGenerator: true,
};

const templates = [
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
    description: 'Manages payments to suppliers for products or services procured, including invoice verification and approval acquisition.',
    isGenerator: false,
  },
];

export function TemplateLibrary() {
  const displayedTemplates = [generatorTemplate, ...templates.slice(0, 3)];

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-4xl !leading-tight">
              Start with Our Template Library
            </h2>
            <p className="text-muted-foreground text-md md:text-lg mt-4">
              Take advantage of our free template library to get started quickly. Use them as-is or as a starting point for your own custom standard operating procedures.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {displayedTemplates.map((template, index) => (
                <Card key={index} className={cn(`h-full flex flex-col group transition-all duration-300 border bg-background/50`, template.isGenerator ? 'border-amber-500/50' : 'hover:border-primary/50')}>
                    <CardHeader>
                    <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", template.iconBg)}>
                        {template.icon}
                    </div>
                    <CardTitle className="pt-4 text-xl">{template.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                    <CardDescription>{template.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                    {template.isGenerator ? (
                       <Dialog>
                        <DialogTrigger asChild>
                            <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black">
                                Create a Workflow <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px] bg-background">
                            <DialogHeader>
                                <DialogTitle className="text-2xl flex items-center gap-2"><Cog className="h-6 w-6 text-accent" /> Automation Task Designer</DialogTitle>
                                <DialogDescription>
                                    Describe a workflow to generate a configured, optimized task design, complete with AI suggestions.
                                </DialogDescription>
                            </DialogHeader>
                            <TaskAutomationForm />
                        </DialogContent>
                      </Dialog>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Button asChild variant="outline" size="sm" className="rounded-full hover:bg-secondary">
                                <Link href={`/automation/${template.slug}`}>
                                    <Eye className="mr-2 h-4 w-4" /> Preview
                                </Link>
                            </Button>
                            <GatedFeatureModal
                                trigger={
                                    <Button variant="outline" size="sm" className="rounded-full bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                                        Use template
                                    </Button>
                                }
                                featureName="Workflow Customization"
                            />
                        </div>
                    )}
                    </CardFooter>
                </Card>
            ))}
        </div>
        <div className="text-center mt-16">
            <Button asChild size="lg">
                <Link href="/automation">
                    Explore All Templates <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
