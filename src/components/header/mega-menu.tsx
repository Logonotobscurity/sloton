
"use client";

import * as React from "react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { menuData } from '@/lib/menu-data';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
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
  );
});
ListItem.displayName = 'ListItem';


export const MegaMenu = React.memo(({ menuKey }: { menuKey: string }) => {
    const menu = menuData.menu[menuKey as keyof typeof menuData.menu];

    if (typeof menu !== 'object' || !menu || !('items' in menu) || !Array.isArray(menu.items)) {
        return <div className="p-4 text-center">Menu content not available.</div>;
    }

    const { heading, intro, cta, items } = menu;

    const introBlock = (heading && intro && cta) && (
        <li className="row-span-3">
            <NavigationMenuLink asChild>
              <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                <div className="mb-2 mt-4 text-lg font-medium">
                  {heading}
                </div>
                <p className="text-sm leading-tight text-muted-foreground">
                  {intro}
                </p>
                 {cta && (
                    <Button asChild size="sm" className="mt-4 w-fit">
                        <Link href={cta.href}>{cta.label}</Link>
                    </Button>
                )}
              </div>
            </NavigationMenuLink>
        </li>
    );

    const hasIntroBlock = !!introBlock;
    const gridColsClass = menuKey === 'industries' ? 'lg:grid-cols-3' : 'md:grid-cols-2';

    return (
         <ul className={cn(
            "grid gap-3 p-4 md:w-auto", 
            hasIntroBlock ? `grid-cols-1 ${gridColsClass}` : `grid-cols-mega`
        )}>
            {introBlock}
            {items.map(item => (
                <ListItem key={item.title} title={item.title} href={item.href || '#'}>
                    {item.description || item.desc || item.shortDescription}
                </ListItem>
            ))}
        </ul>
    );
});

MegaMenu.displayName = "MegaMenu";
