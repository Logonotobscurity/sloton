
"use client";

import * as React from "react";
import { menuData, type SitemapSection } from "@/lib/menu-data";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { MegaMenu } from "./mega-menu";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  return (
    <div className="hidden lg:flex items-center justify-between w-full">
        <NavigationMenu>
            <NavigationMenuList>
                {menuData.map((menu) => {
                    if ('href' in menu && !('items' in menu)) {
                        return (
                            <NavigationMenuItem key={menu.key}>
                                <Link href={menu.href} legacyBehavior passHref>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-semibold")}>
                                        {menu.heading}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        );
                    }
                    
                    if ('items' in menu) {
                        return (
                          <NavigationMenuItem key={menu.key}>
                              <NavigationMenuTrigger className="font-semibold">{menu.heading}</NavigationMenuTrigger>
                              <NavigationMenuContent>
                              <MegaMenu menuKey={menu.key as 'solutions' | 'resources' | 'company'} />
                              </NavigationMenuContent>
                          </NavigationMenuItem>
                        );
                    }

                    return null;
                })}
            </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2">
             <Button asChild>
                <Link href="/contact">Contact Us</Link>
            </Button>
            <ThemeToggle />
        </div>
    </div>
  );
}
