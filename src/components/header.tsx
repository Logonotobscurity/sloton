
"use client";

import Link from 'next/link';
import { Menu, X, Phone, ChevronDown, Check, Briefcase } from 'lucide-react';
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

const solutions = [
    {
        title: "AI Solutions",
        description: "Custom AI models and machine learning services.",
        href: "/ai-solutions"
    },
    {
        title: "Process Automation",
        description: "Streamline workflows with RPA and AI.",
        href: "/automation"
    },
    {
        title: "Web & Custom Development",
        description: "Scalable websites and applications.",
        href: "/web-development"
    },
     {
        title: "AI Chatbots",
        description: "Intelligent virtual assistants for 24/7 engagement.",
        href: "/chatbots"
    },
    {
        title: "Business Analytics",
        description: "Turn data into actionable insights.",
        href: "/business-analytics"
    },
    {
        title: "Database Solutions",
        description: "Secure and high-performance data management.",
        href: "/database-solutions"
    }
];

const companyLinks = [
    { title: "About Us", href: "/about" },
    { title: "Our Leadership", href: "/about/our-leadership" },
    { title: "Careers", href: "/about/careers" },
    { title: "Investors", href: "/about/investors" },
    { title: "Locations", href: "/about/locations"},
    { title: "Insights", href: "/insights" },
];

const navLinks = [
    { label: "Solutions", href: "/solutions", dropdown: solutions },
    { label: "Company", href: "/about", dropdown: companyLinks },
    { label: "Partners", href: "/partners" },
    { label: "Training", href: "/training" },
    { label: "Support", href: "/support" }
];

const Logo = () => (
    <Link href="/" className="flex items-center" prefetch={false}>
        <div className="flex flex-col items-start">
          <span className="font-bold text-2xl tracking-tighter text-primary leading-tight">LOG_ON</span>
          <span className="text-xs text-muted-foreground -mt-1">Connecting Advantages...</span>
        </div>
    </Link>
);

const NavLink = ({ href, children, isActive, hasDropdown }: { href: string; children: React.ReactNode; isActive: boolean; hasDropdown?: boolean }) => (
    <Link href={href} className={cn("relative flex items-center px-3 py-2 text-sm font-medium transition-colors hover:text-primary", isActive ? "text-primary" : "text-foreground")}>
        {children}
        {hasDropdown && <ChevronDown className="h-4 w-4 ml-1" />}
        {isActive && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-primary rounded-full" />}
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
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map(link => (
            link.dropdown ? (
                <div key={link.label} className="group relative">
                    <NavLink href={link.href} isActive={pathname.startsWith(link.href)} hasDropdown>
                        {link.label}
                    </NavLink>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-screen max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                        <div className="bg-background border rounded-lg shadow-lg p-2">
                           <div className="grid grid-cols-1 gap-1">
                                {link.dropdown.map(item => (
                                    <Link key={item.title} href={item.href} className="group/item block p-2 rounded-md transition-colors hover:bg-secondary">
                                      <div className="flex flex-col">
                                        <span className="font-semibold text-sm text-foreground">{item.title}</span>
                                        {'description' in item && <span className="text-xs text-muted-foreground">{item.description}</span>}
                                      </div>
                                    </Link>
                                ))}
                           </div>
                        </div>
                    </div>
                </div>
            ) : (
                <NavLink key={link.label} href={link.href} isActive={pathname === link.href}>
                    {link.label}
                </NavLink>
            )
          ))}
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
                {navLinks.map((navItem) => (
                  <AccordionItem value={navItem.label} key={navItem.label}>
                    <AccordionTrigger>
                      <Link href={navItem.href} onClick={(e) => { e.stopPropagation(); handleMobileLinkClick(); }} className="text-lg font-bold">
                        {navItem.label}
                      </Link>
                    </AccordionTrigger>
                    <AccordionContent className="pl-4">
                      {navItem.dropdown?.map(subItem => (
                          <MobileNavLink key={subItem.title} href={subItem.href} onLinkClick={handleMobileLinkClick}>{subItem.title}</MobileNavLink>
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
    </header>
  );
}
