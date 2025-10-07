
"use client";

import Link from 'next/link';
import { Menu, Phone } from 'lucide-react';
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
import { menuData } from '@/lib/menu-data';
import { MegaMenu } from './mega-menu';
import { 
    NavigationMenu, 
    NavigationMenuList, 
    NavigationMenuItem, 
    NavigationMenuTrigger, 
    NavigationMenuContent,
    NavigationMenuLink
} from '@/components/ui/navigation-menu';

const navLinks = [
  { label: 'What We Solve', href: '/solutions', menuKey: 'products' },
  { label: 'See Results', href: '/use-cases', menuKey: 'industries' },
  { label: 'Build Skills', href: '/training', menuKey: 'learning' },
  { label: 'Partners', href: '/partners', menuKey: 'partners' },
];

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

  const getMobileMenuItems = (menuKey: string) => {
    switch (menuKey) {
        case 'products': return menuData.menu.products.items;
        case 'industries': return menuData.menu.industries.items;
        case 'learning': return menuData.menu.learning.center.links;
        case 'partners': return menuData.menu.partners.items;
        case 'company': return menuData.menu.company.items;
        case 'support': return menuData.menu.support.center.links;
        default: return [];
    }
  };

  return (
    <header 
        className={cn(
            "sticky top-0 z-50 w-full transition-all duration-300",
            isScrolled ? "py-2 bg-background/80 backdrop-blur-lg border-b shadow-lg" : "py-4"
        )}
    >
      <div className={cn(
          "container mx-auto flex items-center justify-between transition-all duration-300 px-4 md:px-6",
           isScrolled ? "max-w-7xl" : "max-w-6xl"
      )}>
        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between w-full">
            <div className="flex-shrink-0">
                <Logo />
            </div>
            
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map(link => (
                    <NavigationMenuItem key={link.label}>
                        <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <MegaMenu menuKey={link.menuKey} />
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-screen max-w-sm">
                        <MegaMenu menuKey="company" />
                      </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center gap-2 flex-shrink-0">
                <ThemeToggle />
                <Button asChild>
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </div>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between w-full">
            <Logo />
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
                             {[...navLinks, { label: 'Company', href: '/about', menuKey: 'company' }].map(navItem => (
                                <AccordionItem value={navItem.label} key={navItem.label}>
                                    <AccordionTrigger>
                                        <Link href={navItem.href} onClick={(e) => { e.stopPropagation(); handleMobileLinkClick(); }} className="text-lg font-bold">
                                            {navItem.label}
                                        </Link>
                                    </AccordionTrigger>
                                    <AccordionContent className="pl-4 space-y-2">
                                        {getMobileMenuItems(navItem.menuKey).map(subItem => (
                                             <MobileNavLink key={subItem.title} href={subItem.href || '#'} onLinkClick={handleMobileLinkClick}>{subItem.title}</MobileNavLink>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>
                             ))}
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
      </div>
    </header>
  );
}
