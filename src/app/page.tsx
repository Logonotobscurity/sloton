import { Features } from '@/components/features';
import { Hero } from '@/components/hero';
import { Statement } from '@/components/statement';
import { StrategicPartner } from '@/components/strategic-partner';
import { TechStackCarousel } from '@/components/tech-stack-carousel';
import { UseCases } from '@/components/use-cases';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <StrategicPartner />
      <Features />
      <UseCases />
      <Statement />
      <TechStackCarousel />
    </div>
  );
}
