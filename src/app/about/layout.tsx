
import Link from 'next/link';
import { menuData } from '@/lib/menu-data';

interface AboutLayoutProps {
  children: React.ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {

  return (
    <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            {children}
        </div>
    </div>
  );
}
