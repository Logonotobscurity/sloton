import Link from 'next/link';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';

export function Statement() {
  return (
    <section className="py-24 bg-secondary relative">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-[900px]">
        <h2 className="text-[clamp(1.8rem,5vw,3rem)] font-bold leading-tight uppercase mb-12">
          We&apos;re intentionally <span className="text-primary font-bold">small</span> and proudly <span className="text-primary font-bold">versatile</span>. While others get stuck in silos, we move <span className="text-accent font-bold">fast</span> and <span className="text-accent font-bold">adapt</span>—delivering what most big teams can&apos;t: <span className="text-primary font-bold">results</span>.
        </h2>
        <Button asChild size="lg" variant="outline" className="text-lg border-accent text-accent hover:bg-accent hover:text-primary-foreground">
          <Link href="/contact">
            <MessageCircle className="mr-2 h-5 w-5" />
            Start a Conversation
          </Link>
        </Button>
      </div>
    </section>
  );
}
