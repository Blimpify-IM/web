
import './globals.css';
import type { Metadata } from 'next';
import { designSnippet } from '@blimpify-im/ui/design';
import { StaticNavbar } from '@/components/layout/StaticNavbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Blimpify - Hemsida och affärsverktyg',
  description: 'Hemsida och affärsverktyg – på ett ställe. Vi skapar anpassade hemsidor som du enkelt kan uppdatera utan att förstöra designen.',
  keywords: ['hemsida', 'webbdesign', 'affärsverktyg', 'CRM', 'bokningssystem', 'Blimpify'],
  authors: [{ name: 'Blimpify' }],
  openGraph: {
    title: 'Blimpify - Hemsida och affärsverktyg',
    description: 'Hemsida och affärsverktyg – på ett ställe.',
    type: 'website',
    locale: 'sv_SE',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Load design tokens from design.json and generate CSS
  const design = await designSnippet();

  return (
    <html
      lang="sv"
      suppressHydrationWarning
      data-theme-tone={design.themeTone}
      data-theme={design.isDark ? 'dark' : 'light'}
      {...(design.accentColor === 'inverse' ? { 'data-accent-mode': 'inverse' } : {})}
    >
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Inject design tokens as CSS variables */}
        <style id="design-css">{design.css}</style>
      </head>
      <body suppressHydrationWarning>
        <StaticNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
