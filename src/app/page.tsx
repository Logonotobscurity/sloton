
import React from 'react';
import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'AI Agent Development & Workplace Automation in Nigeria | LOG_ON',
  description: 'Specialists in AI agent development and workplace automation in Nigeria. Learn how to put AI agents to work and transform your business with our intelligent automation solutions.',
};


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
      <BottomCta />
    </>
  );
}
