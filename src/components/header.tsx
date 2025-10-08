
"use client";

import Link from "next/link";
import { MainNav } from "./header/main-nav";
import { SkipToContentLink } from "./header/skip-to-content";
import { Logo } from "./header/logo";
import { cn } from "@/lib/utils";
import React from "react";
import { useWindowHeight } from "@/hooks/use-mobile";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const windowHeight = useWindowHeight();

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
          "container flex h-16 items-center transition-all duration-300 ease-in-out",
          isScrolled ? "h-16" : "h-20"
        )}>
          <div className="mr-4 flex">
             <Link href="/">
                <Logo />
            </Link>
          </div>

          <MainNav />

        </div>
      </header>
    </>
  );
}
