
"use client";

import Link from 'next/link';
import { Menu, Phone, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu';
import { menuData } from '@/lib/menu-data';
import { MegaMenu } from './mega-menu';

const Logo = () => (
    <Link href="/" className="flex items-center" prefetch={false}>
        <div className="flex flex-col items-start">
          <span className="font-bold text-2xl tracking-tighter text-primary leading-tight">LOG_ON</span>
          <span className="text-xs text-muted-foreground -mt-1">Connecting Advantages...</span>
        </div>
    </Link>
);

const MobileNavLink = ({ href, children, onLinkClick }: { href: string; children: React.ReactNode; onLinkClick: () => void }) => (
    <SheetClose asChild>
        <Link
            href={href}
            onClick={onLinkClick}
            className="block py-2 text-base font-medium transition-colors hover:text-primary"
            prefetch={false}
        >
            {children}
        </Link>
    </SheetClose>
);

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileLinkClick = () => setMobileMenuOpen(false);

  return (
    <header 
        className={cn(
            "sticky top-0 z-50 w-full transition-all duration-300",
            isScrolled ? "py-2 bg-background/80 backdrop-blur-lg border-b shadow-lg" : "py-4"
        )}
    >
      <div className={cn(
          "container mx-auto flex items-center justify-between transition-all duration-300 px-4 md:px-6",
           isScrolled ? "max-w-6xl" : "max-w-4xl"
      )}>
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                        <NavigationMenuContent>
                             <div className="w-[600px]">
                               <MegaMenu menuKey="products" />
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Use Cases</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="w-[600px]">
                               <MegaMenu menuKey="industries" />
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                     <NavigationMenuItem>
                        <Link href="/training" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Training
                        </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/partners" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Partners
                        </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                         <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                        <NavigationMenuContent>
                             <div className="w-[600px]">
                                <MegaMenu menuKey="company" />
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                     <NavigationMenuItem>
                        <Link href="/support" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Support
                        </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          <Button asChild>
            <Link href="/contact">
                Contact Us
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Toggle navigation menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm bg-background p-0 flex flex-col">
            <SheetHeader>
                 <SheetClose asChild>
                   <div className="p-4 border-b">
                    <Logo />
                   </div>
                </SheetClose>
                 <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
            </SheetHeader>
            <div className="flex-grow overflow-y-auto p-4">
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="solutions">
                  <AccordionTrigger className="text-lg font-bold">Solutions</AccordionTrigger>
                  <AccordionContent className="pl-4">
                      {menuData.menu.products.items.map(subItem => (
                          <MobileNavLink key={subItem.title} href={subItem.href} onLinkClick={handleMobileLinkClick}>{subItem.title}</MobileNavLink>
                      ))}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="use-cases">
                  <AccordionTrigger className="text-lg font-bold">Use Cases</AccordionTrigger>
                  <AccordionContent className="pl-4">
                      {menuData.menu.industries.items.map(subItem => (
                          <MobileNavLink key={subItem.title} href={subItem.href} onLinkClick={handleMobileLinkClick}>{subItem.title}</MobileNavLink>
                      ))}
                  </AccordionContent>
                </AccordionItem>
                 <MobileNavLink href="/training" onLinkClick={handleMobileLinkClick}><span className="text-lg font-bold">Training</span></MobileNavLink>
                 <MobileNavLink href="/partners" onLinkClick={handleMobileLinkClick}><span className="text-lg font-bold">Partners</span></MobileNavLink>
                <AccordionItem value="company">
                  <AccordionTrigger className="text-lg font-bold">Company</AccordionTrigger>
                  <AccordionContent className="pl-4">
                      {menuData.menu.company.items.map(subItem => (
                          <MobileNavLink key={subItem.title} href={subItem.href} onLinkClick={handleMobileLinkClick}>{subItem.title}</MobileNavLink>
                      ))}
                  </AccordionContent>
                </AccordionItem>
                 <MobileNavLink href="/support" onLinkClick={handleMobileLinkClick}><span className="text-lg font-bold">Support</span></MobileNavLink>
              </Accordion>
            </div>
            <div className="p-4 border-t space-y-4">
              <SheetClose asChild>
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={handleMobileLinkClick}>
                    <Phone className="mr-2 h-4 w-4"/> Contact Us
                  </Link>
                </Button>
              </SheetClose>
              <div className="flex justify-center">
                  <ThemeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
