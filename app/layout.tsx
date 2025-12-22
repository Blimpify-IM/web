import './globals.css';
import type { Metadata } from 'next';
import { getDesignConfigSync, buildCssVars, getThemeSyncScript } from '@/lib/theme/themeEngine';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Load design config and generate theme CSS/scripts
  const designConfig = getDesignConfigSync();
  const cssVars = buildCssVars(designConfig);
  const themeSyncScript = getThemeSyncScript(designConfig);

  const themeTone = designConfig?.globalStyles?.themeTone || "neutral";
  const isDark = designConfig?.globalStyles?.isDark ?? false;

  return (
    <html
      lang="sv"
      suppressHydrationWarning
      data-theme-tone={themeTone === "neutral" ? "pure" : themeTone}
      data-theme={isDark ? 'dark' : 'light'}
    >
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Inject CSS variables from design.json */}
        <style dangerouslySetInnerHTML={{ __html: cssVars }} />

        {/* Theme sync script - runs before React hydration */}
        <script dangerouslySetInnerHTML={{ __html: themeSyncScript }} />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
