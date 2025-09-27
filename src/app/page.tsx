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

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Hero />
      <div className="space-y-4 md:space-y-8">
          <StrategicPartner />
          <IdeasLab />
          <PartnershipApproach />
          <TrainingCTA />
          <Statement />
          <IndustriesBento />
          <TechStackCarousel />
          <FeaturedInsights />
          <Faq />
        <BottomCta />
      </div>
    </div>
  );
}
