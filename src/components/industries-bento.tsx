"use client";

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { menuData } from '@/lib/menu-data';
import {
  IconFinance,
  IconHealthcare,
  IconSales,
  IconItOperations,
  IconMarketing,
  IconRealEstate,
  IconProcurement,
  IconDevelopment,
  IconAdminOps,
  IconSupport,
  IconGeneral
} from '@/lib/icons';
import { GlowingCard } from './ui/glowing-card';
import { CardHeader, CardTitle, CardContent, CardFooter } from './ui/card';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const { items: industries } = menuData.menu.industries;

const iconMap: { [key: string]: React.ElementType } = {
  "Finance and Banking": IconFinance,
  "Healthcare": IconHealthcare,
  "E-Commerce": IconSales,
  "Insurance": IconSupport,
  "Accounting": IconFinance,
  "Manufacturing": IconProcurement,
  "Real Estate": IconRealEstate,
  "IT Consulting": IconDevelopment,
  "Logistics & Transport": IconAdminOps,
  "Telecom": IconItOperations,
};

const backgroundColors = [
  "bg-[--color-primary-light]",
  "bg-[--color-secondary-light]",
  "bg-[--color-accent-light]",
  "bg-[--color-hightlight-light]",
];

export function IndustriesBento() {
  return (
    <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium font-headline">
                    Solutions For Your Industry
                </h2>
                <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-muted-foreground text-center font-normal">
                    We combine deep industry knowledge with technological expertise to build solutions that address the unique challenges of your sector.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {industries.slice(0, 9).map((feature, i) => {
                    const Icon = iconMap[feature.title] || IconGeneral;
                    return (
                        <GlowingCard key={feature.title} className={cn(backgroundColors[i % backgroundColors.length], "text-neutral-content")}>
                            <div className="flex flex-col h-full p-6">
                                <CardHeader className="p-0">
                                    <Icon className="h-10 w-10 mb-4" />
                                    <CardTitle className="font-headline text-2xl">{feature.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0 pt-4 flex-grow">
                                    <p className="opacity-90">{feature.shortDescription}</p>
                                </CardContent>
                                <CardFooter className="p-0 pt-6 mt-auto">
                                    <Button asChild variant="outline" className="bg-transparent border-neutral-content/50 text-neutral-content hover:bg-neutral-content/10">
                                        <Link href={feature.href || '/use-cases'}>
                                            Learn More
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </div>
                        </GlowingCard>
                    )
                })}
            </div>

            <div className="mt-16 text-center">
                 <Button asChild size="lg">
                    <Link href="/use-cases">Explore All Use Cases</Link>
                 </Button>
            </div>
        </div>
    </section>
  );
}
