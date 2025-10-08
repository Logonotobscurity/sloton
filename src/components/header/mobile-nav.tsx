
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
import { Logo } from "./logo";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { menuData, MenuSection } from "@/lib/menu-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "../ui/scroll-area";
import { ThemeToggle } from "./theme-toggle";

const MobileNavigation = ({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) => {
    const menuKeys = Object.keys(menuData) as (keyof typeof menuData)[];

    return (
        <ScrollArea className="flex-1">
            <div className="flex-grow p-4">
                <Accordion type="multiple" className="w-full">
                    {menuKeys.map(key => {
                        const menu = menuData[key] as MenuSection;

                        if ('href' in menu && !('items' in menu)) {
                            return (
                                <Link key={key} href={menu.href} className="flex border-b text-lg font-semibold p-4" onClick={() => setIsOpen(false)}>
                                    {menu.heading}
                                </Link>
                            );
                        }

                        if ('items' in menu) {
                             return (
                                <AccordionItem value={key} key={key}>
                                    <AccordionTrigger className="text-lg font-semibold">{menu.heading}</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="flex flex-col space-y-2 py-2">
                                            {menu.items.map(item => (
                                                <li key={item.title}>
                                                    <Link href={item.href} className="block p-2 rounded-md hover:bg-accent" onClick={() => setIsOpen(false)}>
                                                        <span className="font-semibold">{item.title}</span>
                                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                                    </Link>
                                                </li>
                                            ))}
                                            {menu.cta && (
                                                <li>
                                                    <Link href={menu.cta.href} className="block p-2 rounded-md font-semibold text-primary hover:bg-accent" onClick={() => setIsOpen(false)}>
                                                        {menu.cta.label}
                                                    </Link>
                                                </li>
                                            )}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            )
                        }
                       
                        return null;
                    })}
                </Accordion>
                <div className="flex flex-col space-y-2 mt-4 border-t pt-4">
                    <Link href="/contact" className="text-lg font-semibold p-2 rounded-md hover:bg-accent" onClick={() => setIsOpen(false)}>
                        Contact Us
                    </Link>
                </div>
            </div>
        </ScrollArea>
    );
};


export const MobileNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-expanded={isOpen}>
            <Menu className="h-6 w-6" aria-label="Open navigation menu" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-sm p-0 flex flex-col" aria-label="Mobile navigation menu">
        <SheetHeader className="p-4 border-b flex flex-row items-center justify-between">
          <SheetTitle asChild>
            <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <Logo />
            </Link>
          </SheetTitle>
           <SheetDescription className="hidden">
            Mobile Navigation Menu for LOG_ON website. Contains links to all major sections of the site.
          </SheetDescription>
        </SheetHeader>
        
        <MobileNavigation setIsOpen={setIsOpen} />

        <SheetFooter className="p-4 border-t mt-auto bg-secondary/50 flex flex-row items-center justify-end">
            <ThemeToggle />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
