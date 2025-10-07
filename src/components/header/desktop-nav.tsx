
"use client";

import * as React from "react";
import { menuData } from "@/lib/menu-data";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MegaMenu } from "./mega-menu";

export function DesktopNav() {
  return (
    <div className="hidden md:flex flex-1 items-center justify-center">
        <NavigationMenu>
        <NavigationMenuList>
            {Object.keys(menuData.menu).map(key => {
                const menu = menuData.menu[key as keyof typeof menuData.menu];
                if (typeof menu !== 'object' || !menu || !('items' in menu)) return null;
                
                return (
                    <NavigationMenuItem key={key}>
                        <NavigationMenuTrigger>{menu.heading}</NavigationMenuTrigger>
                        <NavigationMenuContent className="w-full">
                            <MegaMenu menuKey={key} />
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                );
            })}
        </NavigationMenuList>
        </NavigationMenu>
    </div>
  );
}
