import React from 'react';
import { Faq } from '@/components/faq';
import { FeaturedInsights } from '@/components/page-sections/featured-insights';
import { Hero } from '@/components/page-sections/hero';
import { PartnershipApproach } from '@/components/page-sections/partnership-approach';
import { Statement } from '@/components/page-sections/statement';
import { TechStackCarousel } from '@/components/page-sections/tech-stack-carousel';
import { TrainingCTA } from '@/components/page-sections/training-cta';
import { BottomCta } from '@/components/page-sections/bottom-cta';
import { IndustriesBento } from '@/components/page-sections/industries-bento';
import { IdeasLab } from '@/components/page-sections/ideas-lab';
import { SmarterAutomation } from '@/components/page-sections/smarter-automation';
import { ServicesOffered } from '@/components/page-sections/services-offered';
import type { Metadata } from 'next';
import { StrategicPartner } from '@/components/page-sections/strategic-partner';

export const metadata: Metadata = {
  title: 'LOG_ON | AI & Automation for Business Efficiency',
  description: 'We design your digital ecosystem. Get a free AI assessment to discover automation and IT solutions tailored to your business needs.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full space-y-4 md:space-y-8">
          <StrategicPartner />
          <ServicesOffered />
          <IdeasLab />
          <SmarterAutomation />
          <PartnershipApproach />
          <TrainingCTA />
          <Statement />
          <IndustriesBento />
          <TechStackCarousel />
          <FeaturedInsights />
          <Faq />
        <BottomCta />
      </div>
    </>
  );
}
