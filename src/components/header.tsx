
"use client";

import Link from 'next/link';
import { ChevronDown, Menu, X as LucideX, ArrowRight, BrainCircuit, Zap, ShoppingCart, HeartPulse, Briefcase, Lightbulb, GraduationCap, Info, BookOpen, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
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

const mainNavItems = [
  { href: '/training', label: 'Training', icon: <GraduationCap className="h-5 w-5" /> },
  { href: '/about', label: 'About', icon: <Info className="h-5 w-5" /> },
  { href: '/insights', label: 'Insights', icon: <BookOpen className="h-5 w-5" /> },
];

const solutionsNavItems = [
  { 
    href: '/solutions', 
    label: 'All Solutions',
    description: 'Explore our full suite of technology services.',
    icon: <BrainCircuit className="h-5 w-5 text-primary" />
  },
  { 
    href: '/ai-solutions', 
    label: 'AI Solutions',
    description: 'Custom AI to solve complex business challenges.',
    icon: <BrainCircuit className="h-5 w-5 text-primary" />
  },
  { 
    href: '/automation', 
    label: 'Automation',
    description: 'Streamline your operations and boost efficiency.',
    icon: <Zap className="h-5 w-5 text-primary" />
  },
];

const useCasesNavItems = [
    { 
    href: '/use-cases#e-commerce', 
    label: 'E-Commerce',
    description: 'AI-driven personalization and inventory management.',
    icon: <ShoppingCart className="h-5 w-5 text-accent" />
  },
  { 
    href: '/use-cases#healthcare', 
    label: 'Healthcare',
    description: 'Automate scheduling and records management.',
    icon: <HeartPulse className="h-5 w-5 text-accent" />
  },
  { 
    href: '/use-cases#finance', 
    label: 'Finance & Banking',
    description: 'Enhance security with automated fraud detection.',
    icon: <Briefcase className="h-5 w-5 text-accent" />
  },
]

const AnimatedHamburgerIcon = ({ open }: { open: boolean }) => (
    <div className="w-6 h-5 flex flex-col justify-between items-center" aria-hidden="true">
        <span className={cn(
            "block h-0.5 w-full bg-current transform transition duration-300 ease-in-out",
            open ? "rotate-45 translate-y-2.5" : ""
        )}></span>
        <span className={cn(
            "block h-0.5 w-full bg-current transition duration-300 ease-in-out",
            open ? "opacity-0" : ""
        )}></span>
        <span className={cn(
            "block h-0.5 w-full bg-current transform transition duration-300 ease-in-out",
            open ? "-rotate-45 -translate-y-2.5" : ""
        )}></span>
    </div>
);


export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close sheet on pathname change
  useEffect(() => {
    if (isSheetOpen) {
      setSheetOpen(false);
    }
  }, [pathname]);


  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          "relative text-sm font-medium transition-colors hover:text-primary",
          isActive ? "text-primary" : "text-foreground"
        )}
        prefetch={false}
      >
        {children}
        {isActive && <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary rounded-full"></span>}
      </Link>
    );
  };
  
  const MobileNavLink = ({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) => (
     <Link
        href={href}
        className={cn(
            "flex items-center gap-4 py-3 text-base font-medium transition-colors hover:text-primary",
            pathname === href ? "text-primary" : "text-foreground"
        )}
        onClick={() => setSheetOpen(false)}
        prefetch={false}
    >
        {icon}
        <span>{children}</span>
    </Link>
  )

  return (
    <header 
        className={cn(
            "sticky top-0 z-50 transition-all duration-300",
            isScrolled ? "py-2" : "py-4"
        )}
    >
      <div 
        className={cn(
            "container mx-auto flex items-center justify-between transition-all duration-300 px-4 py-2 rounded-full",
            isScrolled ? "max-w-6xl bg-background/80 backdrop-blur-lg shadow-lg border" : "max-w-4xl"
        )}
      >
        <Link href="/" className="flex items-center" prefetch={false} onClick={() => setSheetOpen(false)}>
            <div className="flex flex-col items-start">
              <span className="font-bold text-2xl tracking-tighter text-primary leading-tight">LOG_ON</span>
              <span className="text-xs text-muted-foreground -mt-1">Connecting Advantages...</span>
            </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
            <div className="group relative">
                <button className="flex items-center text-sm font-medium transition-colors hover:text-primary focus:outline-none relative">
                    Solutions <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                    {(pathname.startsWith('/solutions') || pathname.startsWith('/automation') || pathname.startsWith('/use-cases')) && <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary rounded-full"></span>}
                </button>
                <div className="absolute top-full -left-1/2 -translate-x-1/4 pt-4 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
                    <div className="bg-background rounded-lg shadow-2xl border w-[600px] p-6 grid grid-cols-2 gap-x-8 gap-y-6">
                        <div className="space-y-4">
                            <h4 className="font-semibold text-foreground">Our Services</h4>
                            {solutionsNavItems.map(item => (
                                <Link key={item.label} href={item.href} className="flex items-start gap-4 group/item">
                                    <div className="bg-secondary/50 p-2 rounded-md group-hover/item:bg-primary/10 transition-colors">{item.icon}</div>
                                    <div>
                                        <p className="font-semibold text-foreground group-hover/item:text-primary transition-colors">{item.label}</p>
                                        <p className="text-xs text-muted-foreground">{item.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-semibold text-foreground">Popular Use Cases</h4>
                            {useCasesNavItems.map(item => (
                                <Link key={item.label} href={item.href} className="flex items-center gap-3 group/item">
                                     {item.icon}
                                    <p className="text-sm font-medium text-muted-foreground group-hover/item:text-primary transition-colors">{item.label}</p>
                                </Link>
                            ))}
                             <Link href="/use-cases" className="text-sm font-semibold text-primary flex items-center group mt-4">
                                View All Industries <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                         <div className="col-span-2 border-t pt-4">
                            <Link href="/insights" className="flex items-center justify-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                                <Lightbulb className="h-6 w-6 text-yellow-400" />
                                <div>
                                    <p className="font-semibold text-foreground">Featured Insight</p>
                                    <p className="text-sm text-muted-foreground">The Future of Work: How AI is Redefining Productivity</p>
                                </div>
                            </Link>
                         </div>
                    </div>
                </div>
            </div>

            {mainNavItems.map((item) => (
                <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
            ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
            <Button asChild>
                <Link href="/contact">
                Contact Us
                </Link>
            </Button>
            <ThemeToggle />
        </div>


        {/* Mobile Navigation Trigger */}
        <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle navigation menu">
              <AnimatedHamburgerIcon open={isSheetOpen} />
            </Button>
          </SheetTrigger>

          {/* Mobile Navigation Content */}
          <SheetContent side="right" className="w-full bg-background p-0 flex flex-col">
                <SheetHeader className="p-4 flex-row items-center justify-between border-b">
                     <Link href="/" className="flex items-center" onClick={() => setSheetOpen(false)}>
                        <div className="flex flex-col items-start">
                          <span className="font-bold text-2xl tracking-tighter text-primary leading-tight">LOG_ON</span>
                          <span className="text-xs text-muted-foreground -mt-1">Connecting Advantages...</span>
                        </div>
                    </Link>
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    <Button variant="ghost" size="icon" onClick={() => setSheetOpen(false)} aria-label="Close navigation menu">
                        <LucideX className="h-6 w-6" />
                    </Button>
                </SheetHeader>
              <div className="flex flex-col h-full justify-between p-4">
                <nav className="flex-grow">
                  <Accordion type="multiple" className="w-full">
                    <AccordionItem value="solutions">
                      <AccordionTrigger className="text-xl font-bold">Our Solutions</AccordionTrigger>
                      <AccordionContent className="pl-4">
                        {[...solutionsNavItems, ...useCasesNavItems].map((item) => (
                            <MobileNavLink key={item.label} href={item.href} icon={item.icon}>
                                {item.label}
                            </MobileNavLink>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="company">
                      <AccordionTrigger className="text-xl font-bold">Company</AccordionTrigger>
                      <AccordionContent className="pl-4">
                         {mainNavItems.map((item) => <MobileNavLink key={item.href} href={item.href} icon={item.icon}>{item.label}</MobileNavLink>)}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                   <MobileNavLink href="/contact" icon={<Phone className="h-5 w-5" />}>Contact</MobileNavLink>
                </nav>
                <div className="border-t pt-6 space-y-4">
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground">Switch Theme</p>
                        <ThemeToggle />
                    </div>
                    <Button asChild className="w-full" size="lg">
                        <Link href="/contact" onClick={() => setSheetOpen(false)}>Contact Us</Link>
                    </Button>
                </div>
              </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
