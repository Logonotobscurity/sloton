
import Link from 'next/link';
import { Button } from './ui/button';
import { CircuitBackground } from './circuit-background';

export function Statement() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
       <div className="absolute inset-0 -z-10">
         <CircuitBackground />
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
        <h2 className="text-[clamp(1.8rem,5vw,3rem)] font-bold !leading-tight mb-12 uppercase">
          We&apos;re intentionally <span className="text-primary">small</span> and proudly <span className="text-primary">versatile</span>. While others get stuck in silos, we move <span className="text-accent">fast</span> and <span className="text-accent">adapt</span>—delivering what most big teams can&apos;t: <span className="text-primary">results</span>.
        </h2>
        <Button asChild size="lg" className="w-full sm:w-auto">
          <Link href="/contact">
            Start a Conversation
          </Link>
        </Button>
      </div>
    </section>
  );
}
