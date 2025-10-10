
"use client";

import Link from "next/link";
import { SkipToContentLink } from "./header/skip-to-content";
import { Logo } from "./header/logo";
import { cn } from "@/lib/utils";
import React from "react";
import { DesktopNav } from "./header/desktop-nav";
import { MobileNav } from "./header/mobile-nav";
import { Button } from "./ui/button";
import { ThemeToggle } from "./header/theme-toggle";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SkipToContentLink />
      <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : ""
      )}>
        <div className={cn(
          "container mx-auto flex items-center justify-between",
           isScrolled ? "h-16" : "h-24"
        )}>
          <div className="flex items-center gap-6">
             <Link href="/">
                <Logo />
            </Link>
            <div className="hidden lg:flex">
              <DesktopNav />
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-2">
             <Button asChild>
                <Link href="/contact">Contact Us</Link>
            </Button>
            <ThemeToggle />
          </div>

          <div className="flex items-center justify-end lg:hidden">
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
}
