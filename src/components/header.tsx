
"use client";

import Link from 'next/link';
import { ChevronDown, Menu, X as LucideX, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { IconMedium, IconSubstack } from '@/lib/icons';

const solutionsNavItems = [
  { href: '/solutions', label: 'Our Solutions' },
  { href: '/automation', label: 'Automation' },
  { href: '/use-cases', label: 'Use Cases' },
];

const mainNavItems = [
  { href: '/training', label: 'Training' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
];

const socialLinks = [
  { href: 'https://medium.com/@Logon_thepage', label: 'Medium', icon: <IconMedium className="w-6 h-6" /> },
  { href: 'https://x.com/log_onthepage', label: 'X', icon: <LucideX className="w-6 h-6" /> },
  { href: 'https://www.instagram.com/logon_thepage/', label: 'Instagram', icon: <Instagram className="w-6 h-6" /> },
  { href: 'https://substack.com/@logonthepage', label: 'Substack', icon: <IconSubstack className="w-6 h-6" /> },
];

const AnimatedHamburgerIcon = ({ open }: { open: boolean }) => (
    <div className="w-6 h-5 flex flex-col justify-between items-center">
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
  
  const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
     <Link
        href={href}
        className={cn(
            "text-xl font-medium transition-colors hover:text-primary",
            pathname === href ? "text-primary" : "text-foreground"
        )}
        onClick={() => setSheetOpen(false)}
        prefetch={false}
    >
        {children}
    </Link>
  )

  return (
    <header 
        className={cn(
            "sticky top-0 z-50 transition-all duration-300",
            isScrolled ? "py-4" : "py-6"
        )}
    >
      <div 
        className={cn(
            "container mx-auto flex items-center justify-between transition-all duration-300 px-6 rounded-full",
            isScrolled ? "max-w-6xl bg-background/80 backdrop-blur-lg shadow-lg border" : "max-w-4xl"
        )}
      >
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <span className="font-bold text-2xl tracking-tighter text-primary">LOG_ON</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-sm font-medium transition-colors hover:text-primary focus:outline-none relative">
                    Solutions <ChevronDown className="ml-1 h-4 w-4" />
                    {(pathname.startsWith('/solutions') || pathname.startsWith('/automation') || pathname.startsWith('/use-cases')) && <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary rounded-full"></span>}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
                {solutionsNavItems.map((item) => (
                   <DropdownMenuItem key={item.label} asChild>
                      <Link href={item.href} className={cn("cursor-pointer", pathname === item.href ? "text-primary" : "")}>
                        {item.label}
                      </Link>
                   </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {mainNavItems.map((item) => (
                <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
            ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
            <Button asChild>
                <Link href="/contact">
                Contact Us
                </Link>
            </Button>
        </div>


        {/* Mobile Navigation Trigger */}
        <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <AnimatedHamburgerIcon open={isSheetOpen} />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>

          {/* Mobile Navigation Content */}
          <SheetContent side="right" className="w-full bg-background p-0 flex flex-col">
             
                <SheetHeader className="p-6 flex-row items-center justify-between border-b">
                     <Link href="/" className="flex items-center gap-2" onClick={() => setSheetOpen(false)}>
                        <span className="font-bold text-2xl tracking-tighter text-primary">LOG_ON</span>
                    </Link>
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    <Button variant="ghost" size="icon" onClick={() => setSheetOpen(false)}>
                        <LucideX className="h-6 w-6" />
                        <span className="sr-only">Close navigation menu</span>
                    </Button>
                </SheetHeader>
              <div className="flex flex-col h-full justify-between p-6">
                <nav className="grid gap-6">
                    <div className="space-y-4">
                        <h4 className="font-semibold text-muted-foreground">Solutions</h4>
                        {solutionsNavItems.map((item) => <MobileNavLink key={item.href} href={item.href}>{item.label}</MobileNavLink>)}
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-semibold text-muted-foreground">Company</h4>
                        {mainNavItems.map((item) => <MobileNavLink key={item.href} href={item.href}>{item.label}</MobileNavLink>)}
                    </div>

                    <MobileNavLink href="/contact">Contact</MobileNavLink>
                </nav>
                <div className="border-t pt-6">
                    <div className="flex justify-center space-x-6 mt-6">
                        {socialLinks.map(link => (
                          <a key={link.label} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                            {link.icon}
                          </a>
                        ))}
                    </div>
                </div>
              </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
