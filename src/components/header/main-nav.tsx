
"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

export function MainNav() {
  return (
    <nav aria-label="Main navigation">
        <DesktopNav />
    </nav>
  );
}
