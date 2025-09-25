
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
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ArrowIcon } from './ui/arrow-icon';
import { Separator } from './ui/separator';
import { menuData } from '@/lib/menu-data';
import Image from 'next/image';

const { industries, learning, partners, company, support } = menuData.menu;

const topNavItems = [
    { label: 'Products', key: 'products' },
    { label: 'Industries', key: 'industries' },
    { label: 'Learning', key: 'learning' },
    { label: 'Support', key: 'support' },
    { label: 'Partners', key: 'partners' },
    { label: 'Company', key: 'company' },
];

const featuredProductsLeft = [
    { title: 'AI Agents', description: 'Take action with autonomous AI agents that work for you.' },
    { title: 'LOG_ON AI Control Tower', description: 'Connect strategy, governance, management, and performance for all your AI across the enterprise.' },
    { title: 'Customer Service Management', description: 'Empower self-service, boost agent productivity, and speed up resolution.' },
    { title: 'IT Asset Management', description: 'Improve technology use and spend over the IT asset lifecycle.' },
    { title: 'Security Operations', description: 'Defend against security threats and attacks.' },
    { title: 'HR Service Delivery', description: 'Give employees instant answers, guidance, and fast issue resolution.' },
];

const featuredProductsRight = [
    { title: 'IT Service Management', description: 'Transform service management for productivity and ROI.' },
    { title: 'IT Operations Management', description: 'Deliver proactive digital operations with AIOps.' },
    { title: 'Strategic Portfolio Management', description: 'Gain insights to move from strategy to business outcomes.' },
    { title: 'Governance, Risk, and Compliance', description: 'Enable an integrated approach that builds operational resilience and mitigates risk.' },
    { title: 'Field Service Management', description: 'Reduce field service costs and improve efficiency.' },
    { title: 'Employee Center', description: 'Provide employees with a unified portal to access services, communications, apps, and tasks.' },
];

const solutionsSubNav = [
    { label: 'IT', href: '/solutions' },
    { label: 'CRM', href: '/use-cases#sales' },
    { label: 'Risk and Security', href: '/solutions' },
    { label: 'Human Resources', href: '/use-cases#human-resources' },
    { label: 'App Development', href: '/web-development' },
    { label: 'Finance and Supply Chain', href: '/use-cases#finance' },
];

const ProductsMegaMenu = () => (
    <div className="grid grid-cols-[250px_1fr_300px] h-[600px]">
        {/* Left Column */}
        <div className="bg-logon-800/50 p-6 flex flex-col justify-between">
            <div>
                <h3 className="text-xl font-bold mb-4">Products</h3>
                <ul className="space-y-1">
                    {['Featured products', 'LOG_ON AI Platform', 'Demo Library'].map((item, i) => (
                        <li key={item}>
                            <Link href="#" className={cn("block p-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10 hover:text-logon-gold", i === 0 && "bg-white/10 text-logon-gold")}>
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Separator className="my-4 bg-logon-gold-600/10" />
                <h4 className="text-sm font-semibold uppercase text-muted-white mb-3">SOLUTIONS</h4>
                <ul className="space-y-1">
                    {solutionsSubNav.map(item => (
                        <li key={item.label}>
                            <Link href={item.href} className="block p-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10 hover:text-logon-gold">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Button variant="link" asChild className="p-0 justify-start text-logon-gold">
                <Link href="/solutions">View All Products <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
        </div>

        {/* Center Column */}
        <div className="p-8 overflow-y-auto">
            <h2 className="text-3xl font-bold font-headline">Products</h2>
            <p className="mt-2 text-muted-white">Unite people, processes, and systems with AI-powered products for all your workflows.</p>
            <Button asChild variant="outline" className="mt-4 border-logon-gold hover:bg-logon-gold/10">
                <Link href="/solutions">See All Products</Link>
            </Button>
            <Separator className="my-6 bg-logon-gold-600/10" />
            <h4 className="text-sm font-semibold uppercase text-muted-white mb-4">Featured Products</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                <div>
                    {featuredProductsLeft.map(item => (
                        <div key={item.title} className="mb-4">
                            <h5 className="font-semibold text-sm hover:text-logon-gold"><Link href="#">{item.title}</Link></h5>
                            <p className="text-xs text-muted-white">{item.description}</p>
                        </div>
                    ))}
                </div>
                <div>
                    {featuredProductsRight.map(item => (
                        <div key={item.title} className="mb-4">
                            <h5 className="font-semibold text-sm hover:text-logon-gold"><Link href="#">{item.title}</Link></h5>
                            <p className="text-xs text-muted-white">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Right Column */}
         <div className="bg-logon-800/50 p-8">
             <div className="border border-card-border rounded-lg p-6 h-full flex flex-col justify-center text-center bg-black/20">
                <h4 className="font-bold text-lg">Put AI to work with the LOG_ON AI Platform</h4>
                <p className="text-sm text-muted-white mt-2 mb-4">Connect and automate workflows across the enterprise with a single AI platform for business transformation.</p>
                <Button asChild variant="outline" className="border-logon-gold hover:bg-logon-gold/10">
                    <Link href="/ai-solutions">Explore LOG_ON AI Platform</Link>
                </Button>
            </div>
        </div>
    </div>
);


const IndustriesMegaMenu = () => (
    <div className="grid grid-cols-[300px_1fr] p-6 gap-6">
        <aside className="pr-4 border-r border-logon-gold-600/10">
            <h3 className="text-xl font-bold mb-4">{industries.heading}</h3>
            <p className="text-sm text-muted-white mb-4">{industries.intro}</p>
            <Button asChild variant="outline" className="border-logon-gold hover:bg-logon-gold/10">
                <Link href={industries.cta.href}>{industries.cta.label}</Link>
            </Button>
            <div className="mt-6 pt-6 border-t border-logon-gold-600/10">
                <Link href="/use-cases" className="text-sm text-logon-gold hover:underline">View All Industries</Link>
            </div>
        </aside>
        <main className="px-4">
            <h2 className="text-2xl font-bold mb-4">Industries</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 mt-4">
                {industries.items.map((item, i) => (
                    <article key={i}>
                        <h3 className="text-base font-semibold hover:text-logon-gold"><Link href={(item as any).href || '/use-cases'}>{item.title}</Link></h3>
                        <p className="text-sm text-muted-white mt-1">{item.shortDescription}</p>
                    </article>
                ))}
            </div>
        </main>
    </div>
);

const LearningMegaMenu = () => {
    const [activeItem, setActiveItem] = useState(learning.leftNav[0]);
    return(
    <div className="grid grid-cols-mega p-6 gap-6">
        <aside className="pr-4 border-r border-logon-gold-600/10">
             <h3 className="text-xl font-bold mb-4">{learning.heading}</h3>
             <ul role="menu" aria-label={`${learning.heading} categories`} className="space-y-1">
                {learning.leftNav.map((item, idx) => (
                    <li key={item}>
                        <button
                            role="menuitem"
                            onClick={() => setActiveItem(item)}
                            className={cn("w-full text-left px-3 py-2 rounded text-sm", activeItem === item ? "bg-white/10 text-logon-gold font-semibold" : "hover:bg-white/5")}
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
        <main className="px-4">
            <h2 className="text-2xl font-bold mb-2">{learning.center.title}</h2>
            <p className="text-sm text-muted-white mb-4">{learning.center.intro}</p>
            <Button asChild variant="outline" className="mb-6 border-logon-gold hover:bg-logon-gold/10">
              <Link href={learning.center.cta.href}>{learning.center.cta.label}</Link>
            </Button>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-4">
                {learning.center.links.map((link, i) => (
                    <article key={i}>
                        <h3 className="text-base font-semibold hover:text-logon-gold"><Link href={(link as any).href || '/training'}>{link.title}</Link></h3>
                        <p className="text-sm text-muted-white mt-1">{link.desc}</p>
                    </article>
                ))}
            </div>
        </main>
        <aside className="rounded-card border border-logon-gold-600/10 p-4 bg-black/20">
            <h4 className="font-semibold mb-2">RiseUp with LOG_ON</h4>
            <p className="text-sm text-muted-white mb-4">Empower individuals in emerging technology field communities with key skills to launch tech careers.</p>
            <Button asChild variant="outline" className="border-logon-gold hover:bg-logon-gold/10">
                <Link href="/training">Explore Expert Programs</Link>
            </Button>
        </aside>
    </div>
)};

const PartnersMegaMenu = () => (
     <div className="grid grid-cols-[300px_1fr] p-6 gap-6">
        <aside className="pr-4 border-r border-logon-gold-600/10">
            <h3 className="text-xl font-bold mb-4">{partners.heading}</h3>
            <p className="text-sm text-muted-white mb-4">{partners.intro}</p>
             <Button asChild variant="outline" className="border-logon-gold hover:bg-logon-gold/10">
                <Link href={partners.cta.href}>{partners.cta.label}</Link>
            </Button>
        </aside>
        <main className="px-4">
            <h2 className="text-2xl font-bold mb-4">Partners</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-4">
                {partners.items.map((item, i) => (
                    <article key={i}>
                        <h3 className="text-base font-semibold hover:text-logon-gold"><Link href={(item as any).href || '/contact'}>{item.title}</Link></h3>
                        <p className="text-sm text-muted-white mt-1">{item.desc}</p>
                    </article>
                ))}
            </div>
        </main>
    </div>
);

const CompanyMegaMenu = () => (
    <div className="grid grid-cols-mega p-6 gap-6">
        <aside className="pr-4 border-r border-logon-gold-600/10 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4">{company.heading}</h3>
            <p className="text-sm text-muted-white mb-4">{company.intro}</p>
            <Button asChild variant="outline" className="border-logon-gold hover:bg-logon-gold/10">
                <Link href={company.cta.href}>{company.cta.label}</Link>
            </Button>
        </aside>
        <main className="px-4">
            <h2 className="text-2xl font-bold mb-4">Company</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-4">
                {company.items.map((item, i) => (
                    <article key={i}>
                        <h3 className="text-base font-semibold hover:text-logon-gold"><Link href={(item as any).href || '/about'}>{item.title}</Link></h3>
                        <p className="text-sm text-muted-white mt-1">{item.desc}</p>
                    </article>
                ))}
            </div>
        </main>
        <aside className="rounded-card overflow-hidden">
            <Image 
                src="https://picsum.photos/seed/company-collage/600/800" 
                alt="Company Collage" 
                width={600}
                height={800}
                className="w-full h-full object-cover"
                data-ai-hint="company team"
            />
        </aside>
    </div>
);

const SupportMegaMenu = () => (
    <div className="grid grid-cols-[260px_1fr_320px] p-6 gap-6">
        <aside className="pr-4 border-r border-logon-gold-600/10">
             <h3 className="text-xl font-bold mb-4">{support.heading}</h3>
             <ul role="menu" aria-label={`${support.heading} categories`} className="space-y-1">
                {support.leftNav.map((item, idx) => (
                    <li key={item}>
                        <Link
                            href="/contact"
                            className={cn("block w-full text-left px-3 py-2 rounded text-sm font-medium hover:bg-white/5")}
                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
        <main className="px-4">
            <h2 className="text-2xl font-bold mb-2">{support.center.title}</h2>
            <p className="text-sm text-muted-white mb-6">{support.center.intro}</p>
            <div className="space-y-6">
                {support.center.links.map((link, i) => (
                    <article key={i}>
                        <h3 className="text-base font-semibold hover:text-logon-gold"><Link href={(link as any).href || '/contact'}>{link.title}</Link></h3>
                        <p className="text-sm text-muted-white mt-1">{link.desc}</p>
                    </article>
                ))}
            </div>
        </main>
        <aside className="rounded-card border border-logon-gold-600/10 p-6 bg-black/20 flex flex-col justify-center">
            <h4 className="font-semibold mb-2">{support.promo.title}</h4>
            <p className="text-sm text-muted-white mb-4">{support.promo.desc}</p>
            <Button asChild variant="outline" className="border-logon-gold hover:bg-logon-gold/10">
                <Link href={support.promo.cta.href}>{support.promo.cta.label}</Link>
            </Button>
        </aside>
    </div>
);

const MobileNavLink = ({ href, children, onLinkClick }: { href: string; children: React.ReactNode; onLinkClick: () => void }) => (
    <Link
        href={href}
        onClick={onLinkClick}
        className="block py-2 text-base font-medium transition-colors hover:text-accent-gold text-foreground"
        prefetch={false}
    >
        {children}
    </Link>
);


const Logo = ({ onLinkClick }: { onLinkClick?: () => void }) => (
    <Link href="/" className="flex items-center" onClick={onLinkClick} prefetch={false}>
        <div className="flex flex-col items-start">
        <span className="font-bold text-2xl tracking-tighter text-accent-gold leading-tight">LOG_ON</span>
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
            "sticky top-0 z-50 transition-all duration-300",
            isScrolled ? "py-2 bg-background/80 backdrop-blur-lg border-b" : "py-4"
        )}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between">
           <div className="flex items-center gap-8">
                <Logo />
                <nav className="hidden md:flex items-center gap-8">
                    {topNavItems.map((item) => (
                        <div key={item.key} className="group relative flex h-full items-center">
                            <button className="flex items-center text-sm font-medium transition-colors hover:text-accent-gold focus:outline-none relative">
                                {item.label} <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                                {pathname.startsWith(`/${item.key}`) && <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-accent-gold rounded-full"></span>}
                            </button>
                             <div className="absolute top-full left-0 pt-4 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto w-screen max-w-[1000px] -translate-x-1/2">
                                <div className="bg-logon-700/95 backdrop-blur-sm rounded-lg shadow-2xl border border-logon-800 overflow-hidden">
                                     {item.key === 'products' && <ProductsMegaMenu />}
                                     {item.key === 'industries' && <IndustriesMegaMenu />}
                                     {item.key === 'learning' && <LearningMegaMenu />}
                                     {item.key === 'support' && <SupportMegaMenu />}
                                     {item.key === 'partners' && <PartnersMegaMenu />}
                                     {item.key === 'company' && <CompanyMegaMenu />}
                                </div>
                            </div>
                        </div>
                    ))}
                </nav>
           </div>
            
            <div className="hidden md:flex items-center gap-4">
                <Button variant="ghost" size="icon" aria-label="Search">
                    <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Language/Location">
                    <Globe className="h-5 w-5" />
                </Button>
                <Button variant="ghost" asChild>
                    <Link href="#">Sign In</Link>
                </Button>
                <Button asChild style={{backgroundColor: 'var(--cta-gold)'}} className="text-white hover:opacity-90">
                    <Link href="/contact">
                        Get Started
                    </Link>
                </Button>
            </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between">
            <Logo onLinkClick={() => setMobileMenuOpen(false)} />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle navigation menu">
                        <Menu className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full bg-background p-0 flex flex-col">
                    <SheetHeader className="p-4 flex-row items-center justify-between border-b">
                         <SheetClose asChild>
                            <Logo />
                        </SheetClose>
                        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                        <SheetClose asChild>
                            <Button variant="ghost" size="icon" aria-label="Close navigation menu">
                                <LucideX className="h-6 w-6" />
                            </Button>
                        </SheetClose>
                    </SheetHeader>
                    <div className="flex flex-col h-full justify-between p-6 overflow-y-auto">
                        <nav className="flex-grow">
                        <Accordion type="multiple" className="w-full">
                             <AccordionItem value="products">
                                <AccordionTrigger className="text-xl font-bold">Products</AccordionTrigger>
                                <AccordionContent className="pl-4 space-y-2">
                                     <MobileNavLink href="/solutions" onLinkClick={handleMobileLinkClick}>All Products</MobileNavLink>
                                     <h4 className="font-semibold text-muted-foreground pt-2">SOLUTIONS</h4>
                                    {solutionsSubNav.map((item) => (
                                        <MobileNavLink key={item.label} href={item.href} onLinkClick={handleMobileLinkClick}>{item.label}</MobileNavLink>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                             <MobileNavLink href="/use-cases" onLinkClick={handleMobileLinkClick}>Industries</MobileNavLink>
                             <MobileNavLink href="/training" onLinkClick={handleMobileLinkClick}>Learning</MobileNavLink>
                             <MobileNavLink href="/contact" onLinkClick={handleMobileLinkClick}>Support</MobileNavLink>
                             <MobileNavLink href="/contact" onLinkClick={handleMobileLinkClick}>Partners</MobileNavLink>
                             <MobileNavLink href="/about" onLinkClick={handleMobileLinkClick}>Company</MobileNavLink>
                        </Accordion>
                        </nav>
                        <div className="border-t pt-6 space-y-4">
                            <Button variant="outline" asChild className="w-full">
                                <Link href="#" onClick={handleMobileLinkClick}>Sign In</Link>
                            </Button>
                            <Button asChild className="w-full text-white" style={{backgroundColor: 'var(--cta-gold)'}}>
                                <Link href="/contact" onClick={handleMobileLinkClick}>
                                    Get Started
                                </Link>
                            </Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}

    

  
