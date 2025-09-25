
"use client";

import Link from 'next/link';
import { ChevronDown, Menu, X as LucideX, ArrowRight, BrainCircuit, Zap, ShoppingCart, HeartPulse, Briefcase, Lightbulb, GraduationCap, Info, BookOpen, Phone, Code, MessageSquare, BarChart3, Database, Cog, Users, Landmark, Search, Globe, Building } from 'lucide-react';
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
import { menuData } from '@/lib/menu-data';
import Image from 'next/image';

const { products, industries, learning, partners, company, support } = menuData.menu;

const MegaMenuLink = ({ item, onLinkClick }: { item: any, onLinkClick?: () => void }) => (
  <Link href={item.href || '#'} onClick={onLinkClick} className="group/item block p-4 rounded-md transition-colors hover:bg-secondary">
    <div className="flex items-center gap-3">
      {item.icon}
      <div className="flex flex-col">
        <span className="font-semibold text-foreground">{item.title}</span>
        {item.description && <span className="text-sm text-muted-foreground">{item.description}</span>}
        {item.shortDescription && <span className="text-sm text-muted-foreground">{item.shortDescription}</span>}
      </div>
    </div>
  </Link>
);


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

const ProductsMegaMenu = () => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-3 p-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground px-4">{products.heading}</h3>
            <p className="text-sm text-muted-foreground mt-2 px-4">{products.intro}</p>
            <div className="px-4 mt-4">
                <Button asChild size="sm">
                    <Link href={products.cta.href}>{products.cta.label}</Link>
                </Button>
            </div>
        </div>
        <div className="lg:col-span-9 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {solutions.map(solution => <MegaMenuLink key={solution.title} item={solution} />)}
            </div>
        </div>
    </div>
);

const IndustriesMegaMenu = () => {
    if (!industries) return null;
    const { heading, intro, cta, items } = industries;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-3 p-4">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground px-4">{heading}</h3>
                <p className="text-sm text-muted-foreground mt-2 px-4">{intro}</p>
                 <div className="px-4 mt-4">
                    <Button asChild size="sm">
                        <Link href={cta.href}>{cta.label}</Link>
                    </Button>
                </div>
            </div>
            <div className="lg:col-span-9 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {items.map(item => <MegaMenuLink key={item.title} item={{...item, href: item.href || '/use-cases'}} />)}
                </div>
            </div>
        </div>
    )
};

const LearningMegaMenu = () => {
    if (!learning) return null;
    const { heading, leftNav, center, cta } = learning;
    return (
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-3 p-6 border-r border-border/50">
                 <h3 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground px-4 mb-4">{heading}</h3>
                 <ul className="space-y-1">
                    {leftNav.map(item => <li key={item}><Link href="/training" className="block p-3 rounded-md hover:bg-secondary">{item}</Link></li>)}
                 </ul>
            </div>
            <div className="lg:col-span-9 p-6">
                <h3 className="text-lg font-bold text-primary mb-2">{center.title}</h3>
                <p className="text-muted-foreground mb-6">{center.intro}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {center.links.map(link => (
                         <Link href={link.href || '/training'} key={link.title} className="group">
                             <h4 className="font-semibold group-hover:text-primary">{link.title}</h4>
                             <p className="text-sm text-muted-foreground">{link.desc}</p>
                         </Link>
                    ))}
                </div>
                 <div className="mt-8">
                     <Button asChild>
                        <Link href={center.cta.href}>{center.cta.label}</Link>
                     </Button>
                 </div>
            </div>
        </div>
    );
};

const PartnersMegaMenu = () => {
    if (!partners) return null;
    const { heading, intro, cta, items } = partners;
    return (
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
             <div className="lg:col-span-4 p-6">
                 <h3 className="text-lg font-bold text-primary mb-2">{heading}</h3>
                 <p className="text-muted-foreground mb-4">{intro}</p>
                 <Button asChild>
                    <Link href={cta.href}>{cta.label}</Link>
                 </Button>
             </div>
             <div className="lg:col-span-8 p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                 {items.map(item => (
                    <Link href={item.href || '/contact'} key={item.title} className="group">
                        <h4 className="font-semibold group-hover:text-primary">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </Link>
                 ))}
             </div>
        </div>
    );
};

const CompanyMegaMenu = () => {
    if (!company) return null;
    const { heading, intro, cta, items } = company;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 p-6 bg-secondary/30">
                <h3 className="text-lg font-bold text-primary mb-2">{heading}</h3>
                <p className="text-muted-foreground mb-4">{intro}</p>
                <Button asChild>
                    <Link href={cta.href}>{cta.label}</Link>
                </Button>
            </div>
            <div className="lg:col-span-5 p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {items.map(item => (
                    <Link href={item.href || '/about'} key={item.title} className="group">
                        <h4 className="font-semibold group-hover:text-primary">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </Link>
                ))}
            </div>
            <div className="lg:col-span-3 p-6">
                 <Image src="https://picsum.photos/seed/company/600/800" alt="Company Collage" width={600} height={800} className="rounded-lg object-cover w-full h-full" data-ai-hint="office people" />
            </div>
        </div>
    );
};

const SupportMegaMenu = () => {
    if (!support) return null;
    const { heading, leftNav, center, promo } = support;
    return (
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-3 p-6 border-r border-border/50">
                 <h3 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground px-4 mb-4">{heading}</h3>
                 <ul className="space-y-1">
                    {leftNav.map(item => <li key={item}><Link href="/support" className="block p-3 rounded-md hover:bg-secondary">{item}</Link></li>)}
                 </ul>
            </div>
            <div className="lg:col-span-5 p-6">
                <h3 className="text-lg font-bold text-primary mb-2">{center.title}</h3>
                <p className="text-muted-foreground mb-6">{center.intro}</p>
                {center.links.map(link => (
                    <Link href={link.href || '/support'} key={link.title} className="group">
                        <h4 className="font-semibold group-hover:text-primary">{link.title}</h4>
                        <p className="text-sm text-muted-foreground">{link.desc}</p>
                    </Link>
                 ))}
            </div>
             <aside className="lg:col-span-4 p-6 bg-secondary/30 rounded-r-lg">
                <h4 className="font-semibold mb-2">{promo.title}</h4>
                <p className="text-sm text-muted-white mb-4">{promo.desc}</p>
                <Button asChild variant="outline" className="border-logon-gold hover:bg-logon-gold/10">
                    <Link href={promo.cta.href || '/support'}>{promo.cta.label}</Link>
                </Button>
            </aside>
        </div>
    );
};

const navLinks = [
  { label: 'Products', href: '/solutions', megaMenu: <ProductsMegaMenu /> },
  { label: 'Industries', href: '/use-cases', megaMenu: <IndustriesMegaMenu /> },
  { label: 'Learning', href: '/training', megaMenu: <LearningMegaMenu /> },
  { label: 'Partners', href: '/partners', megaMenu: <PartnersMegaMenu /> },
  { label: 'Company', href: '/about', megaMenu: <CompanyMegaMenu /> },
  { label: 'Support', href: '/support', megaMenu: <SupportMegaMenu /> },
];

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
          "container mx-auto flex items-center justify-between transition-all duration-300 px-4 md:px-6",
           isScrolled ? "max-w-7xl" : "max-w-6xl"
      )}>
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between w-full">
           <div className="flex items-center gap-8">
                <Logo />
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((item) => (
                         <div key={item.label} className="group relative flex h-full items-center">
                            <Link href={item.href} className={cn(
                            "flex items-center text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md",
                            pathname.startsWith(item.href) ? "bg-secondary text-primary" : ""
                            )}>
                                {item.label} <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                            </Link>
                            <div className={cn(
                                "absolute top-full pt-4 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto",
                                "w-screen max-w-5xl -translate-x-1/2 left-1/2"
                            )}>
                                <div className="bg-background rounded-lg shadow-2xl border max-h-[calc(100vh-100px)] overflow-y-auto">
                                    {item.megaMenu}
                                </div>
                            </div>
                        </div>
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
                             {navLinks.map(navItem => (
                                <AccordionItem value={navItem.label} key={navItem.label}>
                                    <AccordionTrigger className="text-lg font-bold">{navItem.label}</AccordionTrigger>
                                    <AccordionContent className="pl-4 space-y-2">
                                        <MobileNavLink href={navItem.href} onLinkClick={handleMobileLinkClick}>View All {navItem.label}</MobileNavLink>
                                    </AccordionContent>
                                </AccordionItem>
                             ))}
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

    

    