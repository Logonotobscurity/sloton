import { GeneralistApproach } from '@/components/generalist-approach';
import { Hero } from '@/components/hero';
import { PartnershipApproach } from '@/components/partnership-approach';
import { Statement } from '@/components/statement';
import { StrategicPartner } from '@/components/strategic-partner';
import { TechStackCarousel } from '@/components/tech-stack-carousel';
import { TrainingCTA } from '@/components/training-cta';


export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <StrategicPartner />
      <GeneralistApproach />
      <PartnershipApproach />
      <TrainingCTA />
      <Statement />
      <TechStackCarousel />
    </div>
  );
}
