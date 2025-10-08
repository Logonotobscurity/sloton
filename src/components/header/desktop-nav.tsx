
"use client";

import * as React from "react";
import { menuData, type MenuKey, type MenuSection } from "@/lib/menu-data";
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
              const menu = menuData.menu[key] as MenuSection;
              
              // If the menu section has a direct href, it's a simple link
              if (menu.href) {
                return (
                    <NavigationMenuItem key={key}>
                        <Link href={menu.href} legacyBehavior passHref>
                            <NavigationMenuLink className={cn(buttonVariants({ variant: "ghost" }))}>
                                {menu.heading}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                );
              }
              
              // Otherwise, it's a dropdown/megamenu
              if (menu.items && menu.items.length > 0) {
                return (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuTrigger>{menu.heading}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <MegaMenu menuKey={key} />
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }
              
              return null;
            })}
          </NavigationMenuList>
        </NavigationMenu>
    </nav>
  );
}
