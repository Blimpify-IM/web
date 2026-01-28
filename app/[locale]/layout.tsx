// ===============================================
// app/[locale]/layout.tsx
// Layout for locale-specific routes
// ===============================================

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Script from 'next/script';
import { designSnippet } from '@blimpify-im/ui/design';
import { ConsentProvider, CookieConsent, MarketingPixels } from '@blimpify-im/ui/consent';
import { Footer } from '@/components/layout/Footer';
import { NavbarBar } from '@/components/layout/NavbarBar';
import { HashScrollHandler } from '@/components/HashScrollHandler';
import { generateMetadata as createMetadata } from '@/lib/seo';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// Valid locales
const locales = ['sv', 'en'];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    ...createMetadata({
      title: 'Blimpify',
      description: locale === 'sv' 
        ? 'Blimpify hjälper företag att få en professionell hemsida utan att behöva bygga eller designa själva. Du delar dina önskemål – vi tar hand om design, struktur och publicering.'
        : 'Blimpify helps businesses get a professional website without having to build or design it themselves. You share your wishes – we take care of design, structure and publishing.',
      keywords: [
        'hemsida företag',
        'webbdesign företag',
        'professionell hemsida',
        'hemsida utan krångel',
        'webbdesign tjänst',
        'Blimpify',
        'alternativ till Shopify',
        'alternativ till Wix',
        'alternativ till Squarespace',
        'enklare än Shopify',
        'enklare än Wix',
        'hemsida för småföretag',
        'företagshemsida Sverige',
      ],
      path: `/${locale}`,
    }),
    icons: {
      icon: '/assets/favicon_io/favicon.ico',
      shortcut: '/assets/favicon_io/favicon-16x16.png',
      apple: '/assets/favicon_io/apple-touch-icon.png',
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  // Await params (Next.js 15 requirement)
  const { locale } = await params;
  
  // Validate locale
  if (!locales.includes(locale)) {
    notFound();
  }

  // Load design tokens from design.json and generate CSS
  const design = await designSnippet();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      data-theme-tone={design.themeTone}
      data-theme={design.themeMode === 'dark' ? 'dark' : 'light'}
      data-theme-mode={design.themeMode}
      {...(design.accentColor === 'inverse' ? { 'data-accent-mode': 'inverse' } : {})}
    >
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preconnect to Google Analytics */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Inject design tokens as CSS variables */}
        <style id="design-css">{design.css}</style>

        {/* Client-side theme resolution script (must run before body renders) */}
        {design.themeMode === 'system' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  // Resolve 'system' mode immediately to prevent flash
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = prefersDark ? 'dark' : 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                  document.documentElement.style.setProperty('--is-dark', prefersDark ? '1' : '0');

                  // Watch for OS preference changes
                  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
                    const newTheme = e.matches ? 'dark' : 'light';
                    document.documentElement.setAttribute('data-theme', newTheme);
                    document.documentElement.style.setProperty('--is-dark', e.matches ? '1' : '0');
                  });
                })();
              `,
            }}
          />
        )}
      </head>
      <body suppressHydrationWarning>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LY6YMV89SC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LY6YMV89SC');
          `}
        </Script>

        <ConsentProvider>
          <MarketingPixels pixels={[]} />
          <HashScrollHandler />
          <NavbarBar />
          <main>{children}</main>
          <Footer />
          <CookieConsent locale={locale} privacyPolicyUrl={`/${locale}/privacy`} />
        </ConsentProvider>
      </body>
    </html>
  );
}
