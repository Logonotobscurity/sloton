
"use client";

import * as React from "react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { menuData } from '@/lib/menu-data';
import { NavigationMenuLink } from './ui/navigation-menu';
import { cn } from '@/lib/utils';

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


export function MegaMenu({ menuKey }: { menuKey: string }) {
    switch (menuKey) {
        case 'products':
            const { heading: pHeading, intro: pIntro, cta: pCta, items: pItems } = menuData.menu.products;
            return (
                 <div className="grid grid-cols-12">
                    <div className="col-span-4 p-4 bg-secondary/20 rounded-l-md">
                        <h3 className="font-semibold tracking-wider uppercase text-primary mb-2">{pHeading}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{pIntro}</p>
                        <Button asChild size="sm">
                            <Link href={pCta.href}>{pCta.label}</Link>
                        </Button>
                    </div>
                    <div className="col-span-8 p-2">
                        <ul className="grid grid-cols-2 gap-3">
                            {pItems.map(item => (
                                <ListItem key={item.title} title={item.title} href={item.href}>
                                    {item.description}
                                </ListItem>
                            ))}
                        </ul>
                    </div>
                </div>
            );
        case 'industries':
            const { heading: iHeading, intro: iIntro, cta: iCta, items: iItems } = menuData.menu.industries;
            return (
                 <div className="grid grid-cols-12">
                     <div className="col-span-4 p-4 bg-secondary/20 rounded-l-md">
                        <h3 className="font-semibold tracking-wider uppercase text-primary mb-2">{iHeading}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{iIntro}</p>
                         <Button asChild size="sm">
                            <Link href={iCta.href}>{iCta.label}</Link>
                        </Button>
                    </div>
                    <div className="col-span-8 p-2">
                        <ul className="grid grid-cols-2 gap-3">
                           {iItems.map(item => (
                                <ListItem key={item.title} title={item.title} href={item.href}>
                                    {item.shortDescription}
                                </ListItem>
                            ))}
                        </ul>
                    </div>
                </div>
            );
        case 'company':
            const { heading: coHeading, items: coItems } = menuData.menu.company;
            return (
                 <div className="p-4">
                    <h3 className="font-semibold text-center mb-4">{coHeading}</h3>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                         {coItems.map(item => (
                            <ListItem key={item.title} title={item.title} href={item.href}>
                                {item.desc}
                            </ListItem>
                        ))}
                    </ul>
                </div>
            );
        default:
            return null;
    }
};
