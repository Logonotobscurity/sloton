
"use client";

import * as React from "react";
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useMediaQuery } from "@/hooks/use-media-query";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "../header/theme-toggle";
import { Logo } from "./logo";

// Context for sharing header state
interface HeaderContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const HeaderContext = React.createContext<HeaderContextType | undefined>(undefined);
export const useHeader = () => {
  const context = React.useContext(HeaderContext);
  if (!context) throw new Error("useHeader must be used within a HeaderProvider");
  return context;
};

export function Header() {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const [isOpen, setIsOpen] = React.useState(false);

  // Close mobile menu on desktop view
  React.useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return (
    <HeaderContext.Provider value={{ isOpen, setIsOpen }}>
      <header className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm",
      )}>
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
          
          <div className="flex flex-1 items-center justify-end space-x-2">
            {isMobile ? <MobileNav /> : <DesktopNav />}
            <ThemeToggle />
          </div>

        </div>
      </header>
    </HeaderContext.Provider>
  );
};
