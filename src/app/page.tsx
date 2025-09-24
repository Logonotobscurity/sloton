
import { CaseStudiesCarousel } from '@/components/case-studies-carousel';
import { Faq } from '@/components/faq';
import { FeaturedInsights } from '@/components/featured-insights';
import { GeneralistApproach } from '@/components/generalist-approach';
import { Hero } from '@/components/hero';
import { PartnershipApproach } from '@/components/partnership-approach';
import { Statement } from '@/components/statement';
import { StrategicPartner } from '@/components/strategic-partner';
import { TechStackCarousel } from '@/components/tech-stack-carousel';
import { TrainingCTA } from '@/components/training-cta';
import { ScrollAnimationWrapper } from '@/components/scroll-animation-wrapper';
import { ChatbotEmbed } from '@/components/chatbot-embed';
import { IntegrationsHighlight } from '@/components/integrations-highlight';
import { TemplateLibrary } from '@/components/template-library';
import Prism from '@/components/prism-background';


export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          <Prism timeScale={0.2} noise={0.7} hueShift={1.2} />
        </div>
        <Hero />
      </div>
      <ScrollAnimationWrapper>
        <StrategicPartner />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <GeneralistApproach />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <ChatbotEmbed />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <TechStackCarousel />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <TemplateLibrary />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <IntegrationsHighlight />
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
        <FeaturedInsights />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Faq />
      </ScrollAnimationWrapper>
    </div>
  );
}
