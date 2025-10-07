
"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MobileNavigation } from "./mobile-navigation";
import { useHeader } from "./header-v2";
import { Menu, X } from 'lucide-react';
import { Logo } from "./logo";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

export const MobileNav = () => {
  const { isOpen, setIsOpen } = useHeader();
  
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className={cn("h-6 w-6", isOpen ? "hidden" : "block")} />
            <X className={cn("h-6 w-6", isOpen ? "block" : "hidden")} />
            <span className="sr-only">Toggle Menu</span>
          </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-sm p-0 flex flex-col">
        <SheetHeader className="p-4 border-b">
          <SheetTitle asChild>
            <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <Logo />
            </Link>
          </SheetTitle>
           <SheetDescription className="hidden">
            Mobile Navigation Menu
          </SheetDescription>
        </SheetHeader>
        
        <MobileNavigation />

        <SheetFooter className="p-4 border-t mt-auto bg-secondary/50">
           <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Contact Us
                </Link>
            </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
