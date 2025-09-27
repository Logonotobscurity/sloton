
import Link from 'next/link';
import { menuData } from '@/lib/menu-data';
import { SidebarNav } from './_components/sidebar-nav';

interface AboutLayoutProps {
  children: React.ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  const sidebarNavItems = menuData.menu.company.items.map(item => ({
      title: item.title,
      href: item.href
  }));

  return (
    <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="space-y-8 lg:grid lg:grid-cols-[1fr_3fr] lg:gap-12 lg:space-y-0">
                 <aside className="lg:col-span-1">
                    <SidebarNav items={sidebarNavItems} />
                </aside>
                <div className="lg:col-span-3">{children}</div>
            </div>
        </div>
    </div>
  );
}
