
import { CaseStudiesCarousel } from '@/components/case-studies-carousel';
import { Faq } from '@/components/faq';
import { GeneralistApproach } from '@/components/generalist-approach';
import { Hero } from '@/components/hero';
import { PartnershipApproach } from '@/components/partnership-approach';
import { Statement } from '@/components/statement';
import { StrategicPartner } from '@/components/strategic-partner';
import { TechStackCarousel } from '@/components/tech-stack-carousel';
import { TrainingCTA } from '@/components/training-cta';
import { ScrollAnimationWrapper } from '@/components/scroll-animation-wrapper';


export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Hero />
      <ScrollAnimationWrapper>
        <StrategicPartner />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <GeneralistApproach />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <PartnershipApproach />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <TrainingCTA />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Statement />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Faq />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <TechStackCarousel />
      </ScrollAnimationWrapper>
    </div>
  );
}
