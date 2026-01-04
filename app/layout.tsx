
import './globals.css';
import type { Metadata } from 'next';
import { designSnippet } from '@blimpify-im/ui/design';
import { StaticNavbar } from '@/components/layout/StaticNavbar';
import { Footer } from '@/components/layout/Footer';
import { NavbarBar } from '@/components/layout/NavbarBar';

export const metadata: Metadata = {
  title: 'Blimpify – En hemsida du inte behöver tänka på',
  description:
    'Blimpify hjälper företag att få en professionell hemsida utan att behöva bygga eller designa själva. Du delar dina önskemål – vi tar hand om design, struktur och publicering.',
  keywords: [
    'hemsida företag',
    'webbdesign företag',
    'professionell hemsida',
    'hemsida utan krångel',
    'webbdesign tjänst',
    'Blimpify',
  ],
  authors: [{ name: 'Blimpify' }],
  icons: {
    icon: '/assets/favicon_io/favicon.ico',
    shortcut: '/assets/favicon_io/favicon-16x16.png',
    apple: '/assets/favicon_io/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Blimpify – En hemsida du inte behöver tänka på',
    description:
      'Professionella hemsidor för företag som vill fokusera på sin affär. Vi tar hand om design och struktur – du slipper tänka på tekniken.',
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
        <NavbarBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
