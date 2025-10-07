
"use client";

import * as React from "react";
import { menuData } from "@/lib/menu-data";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { MegaMenu } from "./mega-menu";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  const topLevelKeys = Object.keys(menuData.menu).filter(k => k !== 'topLevelNav') as (keyof typeof menuData.menu)[];

  return (
      <NavigationMenu className="flex-1 justify-center">
        <NavigationMenuList className="p-0">
          {topLevelKeys.map(key => {
            const menu = menuData.menu[key];
            if (typeof menu !== 'object' || !menu || !('items' in menu)) return null;
            
            return (
              <NavigationMenuItem key={key}>
                <NavigationMenuTrigger>{menu.heading}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaMenu menuKey={key} />
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
           {menuData.menu.topLevelNav.map(item => (
              <NavigationMenuItem key={item.title}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={cn(buttonVariants({ variant: "ghost" }))}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
           ))}
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(buttonVariants({ variant: "default" }), "ml-2")}>
                      Contact Us
                  </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
  );
}
