
"use client";

import Link from 'next/link';
import { menuData, type MenuKey } from '@/lib/menu-data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useHeader } from './header-v2';
import { ScrollArea } from '../ui/scroll-area';

export const MobileNavigation = () => {
    const topLevelKeys = Object.keys(menuData.menu).filter(k => k !== 'topLevelNav') as MenuKey[];
    const { setIsOpen } = useHeader();

    return (
        <ScrollArea className="flex-1">
            <div className="flex-grow p-4">
                <Accordion type="multiple" className="w-full">
                    {topLevelKeys.map(key => {
                        const menu = menuData.menu[key];
                        if (typeof menu === 'object' && 'items' in menu) {
                            return (
                                <AccordionItem value={key} key={key}>
                                    <AccordionTrigger className="text-lg font-semibold">{menu.heading}</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="flex flex-col space-y-2 py-2">
                                            {menu.items.map(item => (
                                                <li key={item.title}>
                                                    <Link href={item.href} className="block p-2 rounded-md hover:bg-accent" onClick={() => setIsOpen(false)}>
                                                        <span className="font-semibold">{item.title}</span>
                                                        <p className="text-sm text-muted-foreground">{item.description || item.desc || item.shortDescription}</p>
                                                    </Link>
                                                </li>
                                            ))}
                                            {menu.cta && (
                                                <li>
                                                    <Link href={menu.cta.href} className="block p-2 rounded-md font-semibold text-primary hover:bg-accent" onClick={() => setIsOpen(false)}>
                                                        {menu.cta.label}
                                                    </Link>
                                                </li>
                                            )}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            )
                        }
                        return null;
                    })}
                </Accordion>
                <div className="flex flex-col space-y-2 mt-4 border-t pt-4">
                    {menuData.menu.topLevelNav.map(item => (
                        <Link key={item.title} href={item.href} className="text-lg font-semibold p-2 rounded-md hover:bg-accent" onClick={() => setIsOpen(false)}>
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
        </ScrollArea>
    );
};
