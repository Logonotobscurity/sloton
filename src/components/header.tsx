
"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { DesktopNav } from "./header/desktop-nav";
import { MobileNav } from "./header/mobile-nav";
import { Logo } from "./header/logo";
import Link from "next/link";
import { ThemeToggle } from "./header/theme-toggle";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Header() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "container mx-auto flex h-20 items-center justify-between transition-all duration-300",
          isScrolled ? "max-w-6xl" : "max-w-4xl"
        )}
      >
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
        </Link>

        {isDesktop ? (
            <div className="flex flex-1 items-center justify-center">
                <DesktopNav />
            </div>
        ) : (
            <MobileNav />
        )}

        {isDesktop && (
            <div className="flex items-center gap-2">
                <Button asChild>
                  <Link href="/contact" className="group">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <ThemeToggle />
            </div>
        )}
      </div>
    </header>
  );
}
