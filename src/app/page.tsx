

import React, { lazy, Suspense } from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/page-sections/hero';
import { Skeleton } from '@/components/ui/skeleton';

const StrategicPartner = lazy(() => import('@/components/page-sections/strategic-partner').then(module => ({ default: module.StrategicPartner })));
const ServicesOffered = lazy(() => import('@/components/page-sections/services-offered').then(module => ({ default: module.ServicesOffered })));
const SmarterAutomation = lazy(() => import('@/components/page-sections/smarter-automation').then(module => ({ default: module.SmarterAutomation })));
const PartnershipApproach = lazy(() => import('@/components/page-sections/partnership-approach').then(module => ({ default: module.PartnershipApproach })));
const TrainingCTA = lazy(() => import('@/components/page-sections/training-cta').then(module => ({ default: module.TrainingCTA })));
const Statement = lazy(() => import('@/components/page-sections/statement').then(module => ({ default: module.Statement })));
const IndustriesBento = lazy(() => import('@/components/page-sections/industries-bento').then(module => ({ default: module.IndustriesBento })));
const TechStackCarousel = lazy(() => import('@/components/page-sections/tech-stack-carousel').then(module => ({ default: module.TechStackCarousel })));
const IdeasLab = lazy(() => import('@/components/page-sections/ideas-lab').then(module => ({ default: module.IdeasLab })));
const FeaturedInsights = lazy(() => import('@/components/page-sections/featured-insights').then(module => ({ default: module.FeaturedInsights })));
const BottomCta = lazy(() => import('@/components/page-sections/bottom-cta').then(module => ({ default: module.BottomCta })));

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
        <IdeasLab />
        <FeaturedInsights />
        <BottomCta />
      </Suspense>
    </>
  );
}
