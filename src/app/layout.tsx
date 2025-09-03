
import type { Metadata } from 'next';
import { Rubik, Anton } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { WebsiteLoader } from '@/components/website-loader';
import Script from 'next/script';
import { ThemeProvider } from '@/components/theme-provider';
import { BotpressWebchat } from '@/components/botpress-webchat';

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
  viewport: {
    width: 'device-width',
    initialScale: 1,
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
    "email": "logonthepage@gmail.com"
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
  "email": "logonthepage@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lagos",
    "addressCountry": "NG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 6.5093,
    "longitude": 3.3717
  },
  "description": "Logon Solutions provides AI-driven technology consulting and automation solutions to help businesses cut costs, automate processes, and scale faster.",
  "priceRange": "$$$",
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
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Technology Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Solutions",
          "url": "https://logonsolutions.netlify.app/ai-solutions",
          "description": "Custom AI and machine learning models to solve complex business challenges."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Process Automation",
          "url": "https://logonsolutions.netlify.app/automation",
          "description": "Intelligent automation and RPA to streamline workflows and increase efficiency."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web & Custom Development",
          "url": "https://logonsolutions.netlify.app/web-development",
          "description": "Scalable websites, e-commerce platforms, and custom applications."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
            "@type": "Service",
            "name": "Business Analytics",
            "url": "https://logonsolutions.netlify.app/business-analytics",
            "description": "Custom dashboards and BI reporting to turn data into actionable insights."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Technology Training Programs",
          "url": "https://logonsolutions.netlify.app/training",
          "description": "Expert-led training in AI, automation, and digital strategy."
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-0WP14XX9EB" 
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0WP14XX9EB');
          `}
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
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <WebsiteLoader />
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <Toaster />
            <BotpressWebchat />
          </ThemeProvider>
      </body>
    </html>
  );
}
