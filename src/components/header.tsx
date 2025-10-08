
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "./header/logo";
import Link from "next/link";
import { MainNav } from "./header/main-nav";
import { SkipToContentLink } from "./header/skip-to-content";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SkipToContentLink />
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

          <MainNav />

        </div>
      </header>
    </>
  );
}
