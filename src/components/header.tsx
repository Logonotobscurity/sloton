"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/solutions', label: 'Services' },
  { href: '/automation', label: 'Automation' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

const AnimatedHamburgerIcon = ({ open }: { open: boolean }) => (
    <div className="w-6 h-5 flex flex-col justify-between items-center">
        <span className={cn(
            "block h-0.5 w-full bg-current transform transition duration-300 ease-in-out",
            open ? "rotate-45 translate-y-2.5" : ""
        )}></span>
        <span className={cn(
            "block h-0.5 w-full bg-current transition duration-300 ease-in-out",
            open ? "opacity-0" : ""
        )}></span>
        <span className={cn(
            "block h-0.5 w-full bg-current transform transition duration-300 ease-in-out",
            open ? "-rotate-45 -translate-y-2.5" : ""
        )}></span>
    </div>
);


export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="py-8 relative z-20">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <span className="font-bold text-2xl tracking-tighter text-primary">LOG_ON</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-foreground no-underline text-sm uppercase tracking-wider transition-colors hover:text-primary",
                 pathname === item.href ? "text-primary" : ""
              )}
              prefetch={false}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <AnimatedHamburgerIcon open={isSheetOpen} />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full bg-background p-0">
             <div className="flex flex-col h-full">
                <div className="p-6 flex items-center justify-between border-b">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setSheetOpen(false)}>
                        <span className="font-bold text-2xl tracking-tighter text-primary">LOG_ON</span>
                    </Link>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close navigation menu</span>
                        </Button>
                    </SheetTrigger>
                </div>
              <nav className="grid gap-4 p-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                        "text-xl font-medium transition-colors hover:text-primary",
                        pathname === item.href ? "text-primary" : "text-foreground"
                    )}
                    onClick={() => setSheetOpen(false)}
                    prefetch={false}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
