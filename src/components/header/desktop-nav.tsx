
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
    <div>
        <div>
            <NavigationMenu>
                <NavigationMenuList>
                    {menuKeys.map(key => {
                        const menu = menuData.menu[key] as MenuSection;
                        
                        if (menu.href) {
                            return (
                                <NavigationMenuItem key={key}>
                                    <Link href={menu.href} legacyBehavior passHref>
                                        <NavigationMenuLink>
                                            {menu.heading}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            );
                        }
                        
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
        </div>
        <div>
             <Button asChild>
                <Link href="/contact">Contact Us</Link>
            </Button>
            <ThemeToggle />
        </div>
    </div>
  );
}
