
import { menuData } from './menu-data';
import type { SitemapSection } from './menu-data';

// -- helpers / type guards --
function hasItems(section: SitemapSection): section is import('./menu-data').SectionWithItems {
    return (section as import('./menu-data').SectionWithItems).items !== undefined;
}
  
function isLinkOnly(section: SitemapSection): section is import('./menu-data').SectionLinkOnly {
    return !hasItems(section) && "href" in section;
}

export function getNavigationData() {
    const dropdownMenus: (import('./menu-data').SectionWithItems | import('./menu-data').SectionWithCta)[] = [];
    const topLevelNav: import('./menu-data').SectionLinkOnly[] = [];

    Object.keys(menuData).forEach(key => {
        const menu = menuData[key];
        if (isLinkOnly(menu)) {
            topLevelNav.push(menu);
        } else if (hasItems(menu)) {
            dropdownMenus.push({ ...menu, key });
        }
    });

    return { dropdownMenus, topLevelNav };
}
