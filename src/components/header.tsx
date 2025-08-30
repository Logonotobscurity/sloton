
"use client";

import Link from 'next/link';
import { ChevronDown, X, Instagram } from 'lucide-react';
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
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { IconMedium, IconSubstack } from '@/lib/icons';

const mainNavItems = [
  { href: '/solutions', label: 'Services' },
  { href: '/automation', label: 'Automation' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/training', label: 'Training' },
];

const companyNavItems = [
    { href: '/about', label: 'About Us' },
    { href: '/insights', label: 'Insights' },
];

const socialLinks = [
  { href: 'https://medium.com/@Logon_thepage', label: 'Medium', icon: <IconMedium className="w-6 h-6" /> },
  { href: 'https://x.com/log_onthepage', label: 'X', icon: <X className="w-6 h-6" /> },
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
  const pathname = usePathname();

  return (
    <header className="py-8 relative z-20">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <span className="font-bold text-2xl tracking-tighter text-primary">LOG_ON</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {mainNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-foreground no-underline text-sm uppercase tracking-wider transition-colors hover:text-primary",
                 pathname === item.href ? "text-primary" : ""
              )}
              prefetch={false}
            >
              {item.label}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center text-foreground no-underline text-sm uppercase tracking-wider transition-colors hover:text-primary focus:outline-none">
                Company
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border-border">
              {companyNavItems.map((item) => (
                 <DropdownMenuItem key={item.label} asChild>
                    <Link href={item.href} className={cn("cursor-pointer", pathname === item.href ? "text-primary" : "")}>
                      {item.label}
                    </Link>
                 </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

            <Link
              href="/contact"
              className={cn(
                "text-foreground no-underline text-sm uppercase tracking-wider transition-colors hover:text-primary",
                 pathname === "/contact" ? "text-primary" : ""
              )}
              prefetch={false}
            >
              Contact
            </Link>
        </nav>

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
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close navigation menu</span>
                        </Button>
                    </SheetTrigger>
                </SheetHeader>
              <div className="flex flex-col h-full justify-between">
                <nav className="grid gap-4 p-6">
                    {[...mainNavItems, ...companyNavItems].map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className={cn(
                            "text-xl font-medium transition-colors hover:text-primary",
                            pathname === item.href ? "text-primary" : "text-foreground"
                        )}
                        onClick={() => setSheetOpen(false)}
                        prefetch={false}
                    >
                        {item.label}
                    </Link>
                    ))}
                    <Link
                        href="/contact"
                        className={cn(
                            "text-xl font-medium transition-colors hover:text-primary",
                            pathname === "/contact" ? "text-primary" : "text-foreground"
                        )}
                        onClick={() => setSheetOpen(false)}
                        prefetch={false}
                    >
                        Contact
                    </Link>
                </nav>
                <div className="p-6 border-t">
                    <div className="flex justify-center space-x-6">
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
