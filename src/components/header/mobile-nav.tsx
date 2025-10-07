
"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MobileNavigation } from "./mobile-navigation";
import { useHeader } from "./header-v2";
import { Menu, X } from 'lucide-react';

export const MobileNav = () => {
  const { isOpen, setIsOpen } = useHeader();
  
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            {isOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle Menu</span>
          </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <MobileNavigation />
      </SheetContent>
    </Sheet>
  );
};
