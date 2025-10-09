
import React from 'react';
import { Faq } from '@/components/faq';
import { FeaturedInsights } from '@/components/page-sections/featured-insights';
import { Hero } from '@/components/page-sections/hero';
import { PartnershipApproach } from '@/components/page-sections/partnership-approach';
import { TechStackCarousel } from '@/components/page-sections/tech-stack-carousel';
import { TrainingCTA } from '@/components/page-sections/training-cta';
import { BottomCta } from '@/components/page-sections/bottom-cta';
import { IndustriesBento } from '@/components/page-sections/industries-bento';
import { IdeasLab } from '@/components/page-sections/ideas-lab';
import { SmarterAutomation } from '@/components/page-sections/smarter-automation';
import { ServicesOffered } from '@/components/page-sections/services-offered';
import { Statement } from '@/components/page-sections/statement';
import { StrategicPartner } from '@/components/page-sections/strategic-partner';


export default function Home() {
  return (
    <>
      <Hero />
      <StrategicPartner />
      <ServicesOffered />
      <SmarterAutomation />
      <PartnershipApproach />
      <TrainingCTA />
      <Statement />
      <IndustriesBento />
      <TechStackCarousel />
      <IdeasLab />
      <FeaturedInsights />
      <Faq />
      <BottomCta />
    </>
  );
}
