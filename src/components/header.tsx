
"use client";

import Link from 'next/link';
import { ChevronDown, Menu, X as LucideX, ArrowRight, BrainCircuit, Zap, ShoppingCart, HeartPulse, Briefcase, Lightbulb, GraduationCap, Info, BookOpen, Phone, Code, MessageSquare, BarChart3, Database, Cog, Users, Landmark, Search, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
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
    icon: <BrainCircuit className="h-5 w-5" />,
    title: 'AI Solutions',
    href: '/ai-solutions',
    description: 'Custom AI models to solve complex business challenges.'
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Process Automation',
    href: '/automation',
    description: 'Streamline workflows and boost operational efficiency.'
  },
  {
    icon: <Code className="h-5 w-5" />,
    title: 'Web & Custom Development',
    href: '/web-development',
    description: 'Scalable websites and applications tailored to your needs.'
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: 'AI Chatbots',
    href: '/chatbots',
    description: 'Engage customers 24/7 with intelligent virtual assistants.'
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: 'Business Analytics',
    href: '/business-analytics',
    description: 'Turn data into actionable insights with custom dashboards.'
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: 'Database Solutions',
    href: '/database-solutions',
    description: 'Secure, scalable, and high-performance data management.'
  }
];

const useCases = [
    {
        icon: <HeartPulse className="h-5 w-5" />,
        title: 'Healthcare',
        href: '/use-cases#healthcare'
    },
    {
        icon: <Landmark className="h-5 w-5" />,
        title: 'Finance & Banking',
        href: '/use-cases#finance'
    },
    {
        icon: <ShoppingCart className="h-5 w-5" />,
        title: 'E-Commerce',
        href: '/use-cases#e-commerce'
    },
    {
        icon: <Users className="h-5 w-5" />,
        title: 'Human Resources',
        href: '/use-cases#human-resources'
    }
]

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Training', href: '/training' }
];

const MobileNavLink = ({ href, children, onLinkClick }: { href: string; children: React.ReactNode; onLinkClick: () => void }) => (
    <Link
        href={href}
        onClick={onLinkClick}
        className="block py-2 text-base font-medium transition-colors hover:text-primary"
        prefetch={false}
    >
        {children}
    </Link>
);


const Logo = ({ inSheet, onLinkClick }: { inSheet?: boolean, onLinkClick?: () => void }) => (
    <Link href="/" className={cn("flex items-center", inSheet ? "p-4 border-b" : "")} onClick={onLinkClick} prefetch={false}>
        <div className="flex flex-col items-start">
          <span className="font-bold text-2xl tracking-tighter text-primary leading-tight">LOG_ON</span>
          <span className="text-xs text-muted-foreground -mt-1">Connecting Advantages...</span>
        </div>
    </Link>
);

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
          "container mx-auto flex items-center justify-between transition-all duration-300",
          isScrolled ? "max-w-6xl px-4 md:px-6" : "max-w-4xl px-4 md:px-6"
      )}>
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between w-full">
           <div className="flex items-center gap-8">
                <Logo />
                <nav className="hidden md:flex items-center gap-6">
                    <div className="group relative flex h-full items-center">
                        <Link href="/solutions" className={cn(
                          "flex items-center text-sm font-medium transition-colors hover:text-primary relative",
                          pathname.startsWith('/solutions') || pathname.startsWith('/use-cases') ? "text-primary" : ""
                        )}>
                            Solutions <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                            {(pathname.startsWith('/solutions') || pathname.startsWith('/use-cases')) && <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary rounded-full"></span>}
                        </Link>
                         <div className="absolute top-full pt-4 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto right-0">
                            <div className="bg-background rounded-lg shadow-2xl border overflow-hidden w-screen max-w-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                  <div className="p-4 space-y-1">
                                    <h3 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground px-4">Core Services</h3>
                                     {solutions.map(solution => (
                                       <Link key={solution.title} href={solution.href} className="group/item block p-4 rounded-md transition-colors hover:bg-secondary">
                                          <div className="flex items-center gap-3">
                                            {solution.icon}
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-foreground">{solution.title}</span>
                                                <span className="text-sm text-muted-foreground">{solution.description}</span>
                                            </div>
                                          </div>
                                       </Link>
                                     ))}
                                  </div>
                                  <div className="p-4 space-y-4 bg-secondary/30">
                                      <h3 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground px-4">Use Cases by Industry</h3>
                                      <div className="space-y-1">
                                         {useCases.map(item => (
                                           <Link key={item.title} href={item.href} className="group/item block p-4 rounded-md transition-colors hover:bg-background/50">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        {item.icon}
                                                        <span className="font-semibold text-foreground">{item.title}</span>
                                                    </div>
                                                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover/item:translate-x-1" />
                                                </div>
                                           </Link>
                                         ))}
                                      </div>
                                       <div className="px-4 pt-2">
                                         <Link href="/use-cases" className="text-sm font-semibold text-primary group/all flex items-center">
                                            View all use cases <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/all:translate-x-1"/>
                                        </Link>
                                      </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {navLinks.map((item) => (
                        <Link key={item.label} href={item.href} className={cn(
                          "text-sm font-medium transition-colors hover:text-primary relative",
                          pathname === item.href ? "text-primary" : ""
                        )}>
                            {item.label}
                            {pathname === item.href && <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary rounded-full"></span>}
                        </Link>
                    ))}
                </nav>
           </div>
            
            <div className="flex items-center gap-2">
                <ThemeToggle />
                <Button asChild>
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between w-full">
            <Logo />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle navigation menu">
                        <Menu className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full max-w-sm bg-background p-0 flex flex-col">
                    <SheetHeader>
                        <SheetClose asChild>
                           <Logo inSheet onLinkClick={handleMobileLinkClick} />
                        </SheetClose>
                         <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                    </SheetHeader>
                    <div className="flex-grow overflow-y-auto">
                        <Accordion type="multiple" className="w-full px-4">
                             <AccordionItem value="solutions">
                                <AccordionTrigger className="text-lg font-bold">Solutions</AccordionTrigger>
                                <AccordionContent className="pl-4 space-y-2">
                                    <h4 className="font-semibold text-muted-foreground pt-2">Core Services</h4>
                                    {solutions.map((item) => (
                                        <MobileNavLink key={item.title} href={item.href} onLinkClick={handleMobileLinkClick}>{item.title}</MobileNavLink>
                                    ))}
                                    <h4 className="font-semibold text-muted-foreground pt-4">By Industry</h4>
                                    {useCases.map((item) => (
                                        <MobileNavLink key={item.title} href={item.href} onLinkClick={handleMobileLinkClick}>{item.title}</MobileNavLink>
                                    ))}
                                     <MobileNavLink href="/use-cases" onLinkClick={handleMobileLinkClick}>View all use cases</MobileNavLink>
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="company">
                                <AccordionTrigger className="text-lg font-bold">Company</AccordionTrigger>
                                <AccordionContent className="pl-4 space-y-2">
                                     {navLinks.map((item) => (
                                        <MobileNavLink key={item.label} href={item.href} onLinkClick={handleMobileLinkClick}>{item.label}</MobileNavLink>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                     <div className="p-4 border-t space-y-4">
                        <Button asChild className="w-full">
                            <Link href="/contact" onClick={handleMobileLinkClick}>
                                <Phone className="mr-2 h-4 w-4"/> Contact Us
                            </Link>
                        </Button>
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
