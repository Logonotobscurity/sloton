
"use client";

import React from 'react';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
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
  IconSupport
} from '@/lib/icons';
import { Button } from './ui/button';
import Link from 'next/link';

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

const placeholderImages = [
    "https://picsum.photos/seed/industry1/800/600",
    "https://picsum.photos/seed/industry2/800/600",
    "https://picsum.photos/seed/industry3/800/600",
    "https://picsum.photos/seed/industry4/800/600",
    "https://picsum.photos/seed/industry5/800/600",
    "https://picsum.photos/seed/industry6/800/600",
    "https://picsum.photos/seed/industry7/800/600",
    "https://picsum.photos/seed/industry8/800/600",
    "https://picsum.photos.seed/industry9/800/600",
    "https://picsum.photos/seed/industry10/800/600",
];

const features = industries.map((industry, i) => ({
  name: industry.title,
  description: industry.shortDescription || "Click to learn more.",
  href: industry.href || '/use-cases',
  cta: "Learn More",
  background: <img className="absolute -right-20 -top-20 opacity-60" src={placeholderImages[i % placeholderImages.length]} alt={industry.title} />,
  Icon: iconMap[industry.title] || IconGeneral,
  className: i === 0 || i === 5 ? "md:col-span-2" : "md:col-span-1",
}));

export function IndustriesBento() {
  return (
    <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium">
                    Solutions For Your Industry
                </h2>
                <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-muted-foreground text-center font-normal">
                    We combine deep industry knowledge with technological expertise to build solutions that address the unique challenges of your sector.
                </p>
            </div>

            <BentoGrid className="lg:grid-rows-3 mt-12">
                {features.map((feature) => (
                    <BentoCard key={feature.name} {...feature} />
                ))}
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
