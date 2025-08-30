import type { Metadata } from 'next';
import { Rubik, Anton } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
});

const anton = Anton({
  subsets: ['latin'],
  variable: '--font-anton',
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LOG_ON connecting Advantages',
  description: 'We power business efficiency with smart technology.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          rubik.variable,
          anton.variable,
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
