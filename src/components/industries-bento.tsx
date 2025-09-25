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
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card';
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

        <BentoGrid className="mt-12">
          {industries.slice(0, 9).map((feature, i) => {
            const Icon = iconMap[feature.title] || IconGeneral;
            return (
              <BentoGridItem
                key={feature.title}
                className={cn(
                  i === 0 || i === 6 ? "md:col-span-2" : "",
                  i === 3 ? "md:col-span-2" : ""
                )}
              >
                <Card className="bg-secondary/50 w-full h-full flex flex-col">
                  <CardHeader>
                    <Icon className="h-8 w-8 mb-2 text-primary" />
                    <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">{feature.shortDescription}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="secondary" size="sm">
                      <Link href={feature.href || '/use-cases'}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </BentoGridItem>
            )
          })}
        </BentoGrid>

        <div className="mt-16 text-center">
          <Button asChild size="lg">
            <Link href="/use-cases">Explore All Use Cases</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
