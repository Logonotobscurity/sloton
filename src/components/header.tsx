
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Menu, X } from "lucide-react";
import { Logo } from "./header/logo";

const primaryNavItems = [
  { title: "Solutions", href: "/solutions" },
  { title: "Automation", href: "/automation" },
  { title: "About", href: "/about" },
  { title: "Insights", href: "/insights" },
  { title: "Contact", href: "/contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <header className="w-full bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Home">
              <Logo />
            </Link>
          </div>

          {!isMobile && (
            <nav
              className="flex-1 flex justify-center"
              role="navigation"
              aria-label="Primary"
            >
              <ul className="flex items-center gap-2 whitespace-nowrap">
                {primaryNavItems.map((item) => (
                  <li key={item.title}>
                    <Button variant="ghost" asChild>
                      <Link href={item.href}>{item.title}</Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className="flex items-center justify-end flex-shrink-0">
            {isMobile ? (
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            ) : (
              <Button asChild>
                <Link href="/contact?subject=Demo+Request">Get a demo</Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {isMobileMenuOpen && isMobile && (
        <div id="mobile-menu" className="absolute top-16 left-0 w-full bg-background border-t">
          <nav role="navigation" aria-label="Mobile primary">
            <ul className="flex flex-col p-4">
              {primaryNavItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="block py-3 px-4 text-base font-medium text-foreground hover:bg-secondary rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li className="pt-4 mt-4 border-t">
                <Button className="w-full" asChild>
                  <Link href="/contact?subject=Demo+Request">Get a demo</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
