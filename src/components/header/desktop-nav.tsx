
"use client";

import * as React from "react";
import { menuData, type MenuKey } from "@/lib/menu-data";
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

const menuKeys = Object.keys(menuData.menu) as MenuKey[];

export function DesktopNav() {

  return (
    <nav aria-label="Main navigation">
        <NavigationMenu>
          <NavigationMenuList className="p-0">
            {menuKeys.map(key => {
              const menu = menuData.menu[key];
              if (typeof menu !== 'object' || !menu || !('items' in menu)) return null;
              
              if (menu.items.length > 1) { // It's a dropdown/megamenu
                return (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuTrigger>{menu.heading}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <MegaMenu menuKey={key} />
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              } else { // It's a single link
                 return (
                    <NavigationMenuItem key={key}>
                        <Link href={menu.items[0].href} legacyBehavior passHref>
                            <NavigationMenuLink className={cn(buttonVariants({ variant: "ghost" }))}>
                                {menu.heading}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                 );
              }
            })}
             <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(buttonVariants({ variant: "ghost" }))}>
                        Contact Us
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
    </nav>
  );
}
