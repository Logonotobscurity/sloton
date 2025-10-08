
"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export function MainNav() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <nav aria-label="Main navigation" className="flex-1">
        {isDesktop ? <DesktopNav /> : <MobileNav />}
    </nav>
  );
}
