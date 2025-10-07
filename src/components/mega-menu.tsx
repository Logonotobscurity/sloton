
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { menuData } from '@/lib/menu-data';

const MegaMenuLink = ({ item, onLinkClick }: { item: any, onLinkClick?: () => void }) => (
    <Link href={item.href || '#'} onClick={onLinkClick} className="group/item block p-2 rounded-md transition-colors hover:bg-secondary">
      <div className="flex flex-col">
        <span className="font-semibold text-sm text-foreground">{item.title}</span>
        {item.description && <span className="text-xs text-muted-foreground">{item.description}</span>}
        {item.shortDescription && <span className="text-xs text-muted-foreground">{item.shortDescription}</span>}
      </div>
    </Link>
);

export function MegaMenu({ menuKey, onLinkClick }: { menuKey: string, onLinkClick?: () => void }) {
    switch (menuKey) {
        case 'products':
            const { heading: pHeading, intro: pIntro, cta: pCta, items: pItems } = menuData.menu.products;
            return (
                <div className="grid grid-cols-12 gap-x-2">
                    <div className="col-span-3 p-4">
                        <h3 className="text-xs font-semibold tracking-wider uppercase text-muted-foreground px-2">{pHeading}</h3>
                        <p className="text-xs text-muted-foreground mt-1 px-2">{pIntro}</p>
                         <div className="px-2 mt-3">
                            <Button asChild size="sm">
                                <Link href={pCta.href}>See All Solutions</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="col-span-9 p-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
                            {pItems.map(item => <MegaMenuLink key={item.title} item={item} onLinkClick={onLinkClick} />)}
                        </div>
                    </div>
                </div>
            );
        case 'industries':
            const { heading: iHeading, intro: iIntro, cta: iCta, items: iItems } = menuData.menu.industries;
            return (
                <div className="grid grid-cols-12 gap-x-2">
                    <div className="col-span-3 p-4">
                        <h3 className="text-xs font-semibold tracking-wider uppercase text-muted-foreground px-2">{iHeading}</h3>
                        <p className="text-xs text-muted-foreground mt-1 px-2">{iIntro}</p>
                         <div className="px-2 mt-3">
                            <Button asChild size="sm">
                                <Link href={iCta.href}>{iCta.label}</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="col-span-9 p-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
                            {iItems.map(item => <MegaMenuLink key={item.title} item={{...item, href: item.href || '/use-cases'}} onLinkClick={onLinkClick} />)}
                        </div>
                    </div>
                </div>
            );
        case 'learning':
             const { heading: lHeading, leftNav: lLeftNav, center: lCenter } = menuData.menu.learning;
            return (
                 <div className="grid grid-cols-12">
                    <div className="col-span-4 p-3 border-r border-border/50">
                         <h3 className="text-xs font-semibold tracking-wider uppercase text-muted-foreground px-2 mb-2">{lHeading}</h3>
                         <ul className="space-y-1">
                            {lLeftNav.map(item => <li key={item}><Link href="/training" onClick={onLinkClick} className="block p-2 text-sm rounded-md hover:bg-secondary">{item}</Link></li>)}
                         </ul>
                    </div>
                    <div className="col-span-8 p-3">
                         <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                            {lCenter.links.map(link => (
                                 <Link href={link.href || '/training'} key={link.title} className="group" onClick={onLinkClick}>
                                     <h4 className="font-semibold text-sm group-hover:text-primary">{link.title}</h4>
                                     <p className="text-xs text-muted-foreground">{link.desc}</p>
                                 </Link>
                            ))}
                        </div>
                    </div>
                </div>
            );
        case 'partners':
             const { heading: paHeading, intro: paIntro, cta: paCta, items: paItems } = menuData.menu.partners;
            return (
                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-2">
                     <div className="lg:col-span-4 p-4">
                         <h3 className="text-base font-bold text-primary mb-1">{paHeading}</h3>
                         <p className="text-xs text-muted-foreground mb-3">{paIntro}</p>
                         <Button asChild size="sm">
                            <Link href={paCta.href}>{paCta.label}</Link>
                         </Button>
                     </div>
                     <div className="lg:col-span-8 p-3 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                         {paItems.map(item => (
                            <Link href={item.href || '/contact-us'} key={item.title} className="group" onClick={onLinkClick}>
                                <h4 className="font-semibold text-sm group-hover:text-primary">{item.title}</h4>
                                <p className="text-xs text-muted-foreground">{item.desc}</p>
                            </Link>
                         ))}
                     </div>
                </div>
            );
        case 'company':
            const { items: coItems } = menuData.menu.company;
            return (
                <div className="p-3 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4">
                    {coItems.map(item => (
                        <Link href={item.href || '/about-us'} key={item.title} className="group" onClick={onLinkClick}>
                            <h4 className="font-semibold text-sm group-hover:text-primary">{item.title}</h4>
                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </Link>
                    ))}
                </div>
            );
        default:
            return null;
    }
};
