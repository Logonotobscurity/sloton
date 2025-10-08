
"use client";

import Link from "next/link";
import { MainNav } from "./header/main-nav";
import { SkipToContentLink } from "./header/skip-to-content";
import { Logo } from "./header/logo";
import { cn } from "@/lib/utils";
import React from "react";
import { useWindowHeight } from "@/hooks/use-mobile";
import { MobileNav } from "./header/mobile-nav";
import { useMediaQuery } from "@/hooks/use-media-query";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const windowHeight = useWindowHeight();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  React.useEffect(() => {
    const handleScroll = () => {
      const heroHeight = windowHeight * 0.9; 
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [windowHeight]);

  return (
    <>
      <SkipToContentLink />
      <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : ""
      )}>
        <div className={cn(
          "container mx-auto flex items-center justify-between",
           isScrolled ? "max-w-6xl h-16" : "max-w-4xl h-24"
        )}>
          <div className="flex items-center">
             <Link href="/">
                <Logo />
            </Link>
          </div>

          <div className="flex-1 lg:flex justify-center hidden">
            <MainNav />
          </div>

          <div className="flex items-center justify-end lg:hidden">
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
}
