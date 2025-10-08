
"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

export function MainNav() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <nav aria-label="Main navigation" className="flex-1 flex justify-end lg:justify-center">
        {isDesktop ? <DesktopNav /> : <MobileNav />}
    </nav>
  );
}
