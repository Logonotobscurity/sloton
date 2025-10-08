
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
import { ThemeToggle } from "./theme-toggle";
import { Button } from "../ui/button";

const menuKeys = Object.keys(menuData.menu) as MenuKey[];

export function DesktopNav() {

  return (
    <div className="hidden lg:flex items-center justify-between w-full">
        <NavigationMenu>
            <NavigationMenuList>
                {menuKeys.map(key => {
                    const menu = menuData.menu[key] as MenuSection;
                    
                    if (menu.href) {
                        return (
                            <NavigationMenuItem key={key}>
                                <Link href={menu.href} legacyBehavior passHref>
                                    <NavigationMenuLink className="px-4 py-2 text-sm font-medium">
                                        {menu.heading}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        );
                    }
                    
                    return (
                      <NavigationMenuItem key={key}>
                          <NavigationMenuTrigger>{menu.heading}</NavigationMenuTrigger>
                          <NavigationMenuContent>
                          <MegaMenu menuKey={key} />
                          </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
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
