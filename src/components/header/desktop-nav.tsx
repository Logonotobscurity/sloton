
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
import { ThemeToggle } from "./theme-toggle";
import { Button } from "../ui/button";

const menuKeys = Object.keys(menuData.menu) as MenuKey[];

export function DesktopNav() {

  return (
    <div className="flex w-full items-center justify-end">
        <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <NavigationMenu>
                <NavigationMenuList>
                    {menuKeys.map(key => {
                        const menu = menuData.menu[key] as MenuSection;
                        
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
        <div className="hidden items-center space-x-2 lg:flex">
             <Button asChild>
                <Link href="/contact">Contact Us</Link>
            </Button>
            <ThemeToggle />
        </div>
    </div>
  );
}
