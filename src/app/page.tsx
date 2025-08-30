import { Features } from '@/components/features';
import { Hero } from '@/components/hero';
import { Statement } from '@/components/statement';
import { StrategicPartner } from '@/components/strategic-partner';
import { TechStackCarousel } from '@/components/tech-stack-carousel';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <StrategicPartner />
      <Statement />
      <TechStackCarousel />
    </div>
  );
}
