import Link from 'next/link';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';

export function Statement() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold !leading-tight max-w-4xl mx-auto uppercase">
          We&apos;re intentionally <span className="text-primary">small</span> and proudly <span className="text-primary">versatile</span>. While others get stuck in silos, we move <span className="text-accent">fast</span> and <span className="text-accent">adapt</span>—delivering what most big teams can&apos;t: <span className="text-primary">results</span>.
        </h2>
        <Button asChild size="lg" variant="outline" className="mt-8 text-lg border-accent text-accent hover:bg-accent hover:text-primary-foreground">
          <Link href="/contact">
            <MessageCircle className="mr-2 h-5 w-5" />
            Start a Conversation
          </Link>
        </Button>
      </div>
    </section>
  );
}
