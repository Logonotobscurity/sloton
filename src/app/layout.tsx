
import type { Metadata } from 'next';
import { Rubik, Anton } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { WebsiteLoader } from '@/components/website-loader';
import Script from 'next/script';

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
  metadataBase: new URL('https://logonsolutions.netlify.app'),
  title: {
    default: 'LOG_ON | AI & Automation for Business Efficiency',
    template: '%s | LOG_ON connecting Advantages',
  },
  description: 'We power business efficiency with smart technology. Get a free AI assessment to discover automation and IT solutions tailored to your business needs.',
  openGraph: {
    title: 'LOG_ON connecting Advantages',
    description: 'We power business efficiency with smart technology.',
    url: 'https://logonsolutions.netlify.app',
    siteName: 'LOG_ON connecting Advantages',
    images: [
      {
        url: '/og-image.png', 
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
    images: ['/og-image.png'], 
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
       <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K7VDS354');`}
        </Script>
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          rubik.variable,
          anton.variable,
        )}
      >
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K7VDS354"
        height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>

        <WebsiteLoader />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
