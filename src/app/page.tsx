

import React, { lazy, Suspense } from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/page-sections/hero';
import { Skeleton } from '@/components/ui/skeleton';

const StrategicPartner = lazy(() => import('@/components/page-sections/strategic-partner'));
const ServicesOffered = lazy(() => import('@/components/page-sections/services-offered'));
const SmarterAutomation = lazy(() => import('@/components/page-sections/smarter-automation'));
const PartnershipApproach = lazy(() => import('@/components/page-sections/partnership-approach'));
const TrainingCTA = lazy(() => import('@/components/page-sections/training-cta'));
const Statement = lazy(() => import('@/components/page-sections/statement'));
const IndustriesBento = lazy(() => import('@/components/page-sections/industries-bento'));
const TechStackCarousel = lazy(() => import('@/components/page-sections/tech-stack-carousel'));
const FeaturedInsights = lazy(() => import('@/components/page-sections/featured-insights'));
const BottomCta = lazy(() => import('@/components/page-sections/bottom-cta'));

export const metadata: Metadata = {
  title: 'AI Agent Development & Workplace Automation in Nigeria',
  description: 'Specialists in AI agent development and workplace automation in Nigeria. Learn how to put AI agents to work and transform your business with our intelligent automation solutions.',
};

const SectionSkeleton = () => (
  <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
    <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
      <Skeleton className="h-8 w-1/2" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-10 w-48 mt-4" />
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <StrategicPartner />
        <ServicesOffered />
        <SmarterAutomation />
        <PartnershipApproach />
        <TrainingCTA />
        <Statement />
        <IndustriesBento />
        <TechStackCarousel />
        <FeaturedInsights />
        <BottomCta />
      </Suspense>
    </>
  );
}
