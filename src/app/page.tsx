
import React from 'react';
import { Faq } from '@/components/faq';
import { FeaturedInsights } from '@/components/featured-insights';
import { Hero } from '@/components/hero';
import { PartnershipApproach } from '@/components/partnership-approach';
import { Statement } from '@/components/statement';
import { StrategicPartner } from '@/components/strategic-partner';
import { TechStackCarousel } from '@/components/tech-stack-carousel';
import { TrainingCTA } from '@/components/training-cta';
import { BottomCta } from '@/components/bottom-cta';
import { IndustriesBento } from '@/components/industries-bento';
import { IdeasLab } from '@/components/ideas-lab';
import { SmarterAutomation } from '@/components/template-library';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="space-y-4 md:space-y-8">
          <StrategicPartner />
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
