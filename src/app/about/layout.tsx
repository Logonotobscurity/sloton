
import { menuData } from '@/lib/menu-data';

interface AboutLayoutProps {
  children: React.ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return <div className="bg-background">{children}</div>;
}
