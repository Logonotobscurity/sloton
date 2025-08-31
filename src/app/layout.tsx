
import type { Metadata } from 'next';
import { Rubik, Anton } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { WebsiteLoader } from '@/components/website-loader';

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
  description: 'We power business efficiency with smart technology. Get a free AI assessment to discover automation and IT solutions tailored to your business needs.',
  openGraph: {
    title: 'LOG_ON connecting Advantages',
    description: 'We power business efficiency with smart technology.',
    url: 'https://logon.com.ng',
    siteName: 'LOG_ON connecting Advantages',
    images: [
      {
        url: 'https://picsum.photos/1200/630', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: 'LOG_ON connecting Advantages',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LOG_ON connecting Advantages',
    description: 'We power business efficiency with smart technology.',
    // images: ['https://logon.com.ng/og.png'], // Replace with your actual OG image URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        <WebsiteLoader />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
