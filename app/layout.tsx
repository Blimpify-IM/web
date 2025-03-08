import type { Metadata, Viewport } from 'next';
import { Roboto } from 'next/font/google';
import React from 'react';

import './globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import JsonLd, { organizationJsonLd, websiteJsonLd } from './components/JsonLd';

// Vi använder Roboto som fallback font eftersom Funnel Display laddas via CDN
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

// Definiera viewport-konfiguration separat från metadata
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// Definiera basmetadata för hela webbplatsen
export const metadata: Metadata = {
  title: {
    default: 'Blimpify - Hitta perfekta samarbeten som driver tillväxt',
    template: '%s | Blimpify',
  },
  description: 'Blimpify hjälper kreativa talanger att hitta perfekta samarbeten med varumärken och företag. Anslut, samarbeta och väx tillsammans.',
  keywords: ['samarbeten', 'kreativa talanger', 'varumärken', 'influencer', 'content creator', 'marknadsföring'],
  authors: [{ name: 'Blimpify Team' }],
  creator: 'Blimpify AB',
  publisher: 'Blimpify AB',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL('https://blimpify.com'),
  alternates: {
    canonical: '/',
    languages: {
      'sv-SE': '/',
    },
  },
  openGraph: {
    title: 'Blimpify - Hitta perfekta samarbeten som driver tillväxt',
    description: 'Blimpify hjälper kreativa talanger att hitta perfekta samarbeten med varumärken och företag. Anslut, samarbeta och väx tillsammans.',
    url: 'https://blimpify.com',
    siteName: 'Blimpify',
    locale: 'sv_SE',
    type: 'website',
    images: [
      {
        url: '/images/blimpify-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Blimpify - Plattformen för kreativa samarbeten',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blimpify - Hitta perfekta samarbeten som driver tillväxt',
    description: 'Blimpify hjälper kreativa talanger att hitta perfekta samarbeten med varumärken och företag. Anslut, samarbeta och väx tillsammans.',
    images: ['/images/blimpify-twitter-image.jpg'],
    creator: '@blimpify',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className="dark-background">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
      </head>
      <body className={`${roboto.variable} dark-theme`}>
        <Navbar />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
