
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LOG_ON connecting Advantages",
  "url": "https://logonsolutions.netlify.app",
  "logo": "https://logonsolutions.netlify.app/og-image.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+234-814-306-6320",
    "contactType": "customer service",
    "email": "logo@logon.com.ng"
  },
  "sameAs": [
    "https://medium.com/@Logon_thepage",
    "https://x.com/log_onthepage",
    "https://www.instagram.com/logon_thepage/",
    "https://substack.com/@logonthepage"
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "LOG_ON connecting Advantages",
  "image": "https://logonsolutions.netlify.app/og-image.png",
  "@id": "https://logonsolutions.netlify.app",
  "url": "https://logonsolutions.netlify.app",
  "telephone": "+234 814 306 6320",
  "email": "logo@logon.com.ng",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Innovation Drive, Yaba",
    "addressLocality": "Lagos",
    "addressCountry": "NG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 6.5093,
    "longitude": 3.3717
  },
  "description": "Logon Solutions provides AI-driven technology consulting and automation solutions to help businesses cut costs, automate processes, and scale faster.",
  "servesCuisine": "N/A",
  "priceRange": "$$$",
  "hasMap": "https://www.google.com/maps/place/Yaba,+Lagos,+Nigeria",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "9.0820",
      "longitude": "8.6753"
    },
    "geoRadius": "1000000"
  },
  "department": [
    {
      "@type": "GovernmentOffice",
      "name": "Technology Consulting",
      "url": "https://logonsolutions.netlify.app/solutions",
      "telephone": "+234 814 306 6320",
      "email": "logo@logon.com.ng"
    }
  ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
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
