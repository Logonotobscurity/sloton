
import type { Metadata } from 'next';
import InsightsPage from './page';

export const metadata: Metadata = {
  title: 'LOG_ON Insights',
  description: 'Explore expert analysis, practical guides, and forward-thinking perspectives on AI, automation, and digital transformation.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
