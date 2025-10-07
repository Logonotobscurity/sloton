
"use client";

import * as React from "react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { menuData } from '@/lib/menu-data';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string; children: React.ReactNode; }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href || "#"}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-normal text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";


export const MegaMenu = React.memo(({ menuKey }: { menuKey: string }) => {
    const menu = menuData.menu[menuKey as keyof typeof menuData.menu];

    // Handle cases where menu or menu items are not found
    if (typeof menu !== 'object' || !menu || !('items' in menu) || !Array.isArray(menu.items)) {
        return <div className="p-4 text-center">Menu content not available.</div>;
    }

    const { heading, intro, cta, items } = menu;

    // Common introductory block for menus that have it
    const introBlock = (heading && intro && cta) && (
        <div className="p-4 bg-secondary/20 rounded-l-md lg:col-span-4 md:col-span-5 flex flex-col justify-center">
            <h3 className="font-semibold tracking-wider uppercase text-primary mb-2 text-sm md:text-base">{heading}</h3>
            <p className="text-sm text-muted-foreground mb-4">{intro}</p>
            <Button asChild size="sm">
                <Link href={cta.href}>{cta.label}</Link>
            </Button>
        </div>
    );

    const hasIntroBlock = !!introBlock;

    return (
        <div className={cn("grid gap-4 p-2", hasIntroBlock ? "md:grid-cols-12" : "")}>
            {introBlock}
            <div className={cn(hasIntroBlock ? "md:col-span-7 lg:col-span-8" : "col-span-full")}>
                <ul className={cn(
                    "grid gap-3 grid-cols-1 md:grid-cols-2",
                    {
                        "lg:grid-cols-3": menuKey === 'industries',
                    }
                )}>
                    {items.map(item => (
                        <ListItem key={item.title} title={item.title} href={item.href || '#'}>
                            {item.description || item.desc || item.shortDescription}
                        </ListItem>
                    ))}
                </ul>
            </div>
        </div>
    );
});

MegaMenu.displayName = "MegaMenu";
