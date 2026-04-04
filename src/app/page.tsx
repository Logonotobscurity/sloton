import React from 'react';

import Faq from '@/components/faq';
import StrategicPartner from '@/components/page-sections/strategic-partner';
import { BottomCta } from '@/components/page-sections/bottom-cta';
import { FeaturedInsights } from '@/components/page-sections/featured-insights';
import { Hero } from '@/components/page-sections/hero';
import { IdeasLab } from '@/components/page-sections/ideas-lab';
import { IndustriesBento } from '@/components/page-sections/industries-bento';
import { PartnershipApproach } from '@/components/page-sections/partnership-approach';
import { ServicesOffered } from '@/components/page-sections/services-offered';
import { SmarterAutomation } from '@/components/page-sections/smarter-automation';
import { Statement } from '@/components/page-sections/statement';
import { TechStackCarousel } from '@/components/page-sections/tech-stack-carousel';
import { TrainingCTA } from '@/components/page-sections/training-cta';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Agent Development & Workplace Automation in Nigeria',
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
      <FeaturedInsights />
      <IdeasLab />
      <Faq />
      <BottomCta />
    </>
  );
}