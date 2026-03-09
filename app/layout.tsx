
import './globals.css';
import type { Metadata } from 'next';
import { designSnippet } from '@blimpify-im/ui/design';
import { ConsentProvider, CookieConsent } from '@blimpify-im/ui/consent';
import { Footer } from '@/components/layout/Footer';
import { NavbarBar } from '@/components/layout/NavbarBar';
import { HashScrollHandler } from '@/components/HashScrollHandler';
import { generateMetadata } from '@/lib/seo';
import { MarketingPixels } from '@/components/analytics/MarketingPixels';

export const metadata: Metadata = {
  ...generateMetadata({
    title: 'Blimpify',
    description: 'Blimpify hjälper företag att få en professionell hemsida. Välj en mall, redigera och publicera direkt – eller boka ett möte vid behov av skräddarsydd lösning.',
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
    path: '/',
  }),
  icons: {
    icon: '/assets/favicon_io/favicon.ico',
    shortcut: '/assets/favicon_io/favicon-16x16.png',
    apple: '/assets/favicon_io/apple-touch-icon.png',
  },
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Load design tokens from design.json and generate CSS
  const design = await designSnippet();

  // Extrahera font-URL från design.css för preload (så fonten laddas tidigt, inte blockeras av @import)
  const fontImportMatch = design.css.match(/@import\s+url\s*\(\s*['"]([^'"]+)['"]\s*\)\s*;?\s*\n?/);
  const fontUrl = fontImportMatch ? fontImportMatch[1] : null;
  const designCssWithoutFontImport = fontUrl
    ? design.css.slice(fontImportMatch![0].length).trim()
    : design.css;

  return (
    <html
      lang="sv"
      suppressHydrationWarning
      data-theme-tone={design.themeTone}
      data-theme={design.themeMode === 'dark' ? 'dark' : 'light'}  // Default to 'light' for SSR
      data-theme-mode={design.themeMode}  // Store original mode for client JS
      {...(design.accentColor === 'inverse' ? { 'data-accent-mode': 'inverse' } : {})}
    >
      <head>
        {/* Preconnect + preload för font – laddas tidigt så text inte flimrar vid refresh (mobil) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {fontUrl && (
          <>
            <link rel="preload" href={fontUrl} as="style" />
            <link rel="stylesheet" href={fontUrl} />
          </>
        )}
        {/* Lora för hero chill-text (Blimpify UI markup: {font:Lora:500}) */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
        />
        {/* Preload showcase-sektionens bilder så de inte studsar in (laddas i bakgrunden) */}
        <link rel="preconnect" href="https://cdn.blimpify-im.com" />
        {[
          'flower.png',
          'pink-hero.png',
          'glass-hero.png',
          'green-hero.png',
          'pink-bean.png',
          'purple-hero.png',
          'person-hero.png',
          'worm-hero1.png',
          'fire-hero.png',
          'thinkbigger-hero.png',
          'knife-hero.png',
          'boom-hero.png',
          'kakao-hero.png',
          'light-hero.png',
          'techy-hero.png',
        ].map((path) => (
          <link
            key={path}
            rel="preload"
            href={`https://cdn.blimpify-im.com/assets/images/${path}`}
            as="image"
          />
        ))}

        {/* Design-tokens (endast :root, font laddas ovan via link så den inte blockerar) */}
        <style id="design-css">{designCssWithoutFontImport}</style>
        {/* Kritisk typografi – font + storlekar med fallbacks så inget återfaller till browser-default vid refresh (mobil FOUC-fix) */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html { font-size: 16px; }
              body, main, p {
                font-family: var(--font-primary-name), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                font-size: var(--selected-font-size-base, 1rem);
                line-height: 1.5;
              }
              h1, .h1, .text-h1 { font-family: var(--font-primary-name), system-ui, sans-serif; font-size: var(--selected-font-size-3xl, 1.875rem); line-height: var(--selected-leading-tight, 1.2); font-weight: 700; margin: 0; }
              h2, .h2, .text-h2 { font-family: var(--font-primary-name), system-ui, sans-serif; font-size: var(--selected-font-size-2xl, 1.5rem); line-height: var(--selected-leading-tight, 1.2); font-weight: 700; margin: 0; }
              h3, .h3, .text-h3 { font-family: var(--font-primary-name), system-ui, sans-serif; font-size: var(--selected-font-size-xl, 1.25rem); line-height: var(--selected-leading-snug, 1.3); font-weight: 700; margin: 0; }
              h4, .h4, .text-h4 { font-family: var(--font-primary-name), system-ui, sans-serif; font-size: var(--selected-font-size-lg, 1.125rem); line-height: var(--selected-leading-snug, 1.3); font-weight: 700; margin: 0; }
              h5, .h5, .text-h5 { font-family: var(--font-primary-name), system-ui, sans-serif; font-size: var(--selected-font-size-base, 1rem); line-height: var(--selected-leading-normal, 1.5); font-weight: 600; margin: 0; }
              h6, .h6, .text-h6 { font-family: var(--font-primary-name), system-ui, sans-serif; font-size: var(--selected-font-size-sm, 0.875rem); line-height: var(--selected-leading-normal, 1.5); font-weight: 600; margin: 0; }
              .text-display-xl, .text-display-lg { font-family: var(--font-primary-name), system-ui, sans-serif; font-size: var(--selected-font-size-6xl, 3.75rem); line-height: var(--selected-leading-tight, 1.1); font-weight: 700; margin: 0; letter-spacing: -0.02em; }
              .text-display-md { font-family: var(--font-primary-name), system-ui, sans-serif; font-size: var(--selected-font-size-4xl, 2.25rem); line-height: var(--selected-leading-tight, 1.2); font-weight: 700; margin: 0; }
              .text-display-sm { font-family: var(--font-primary-name), system-ui, sans-serif; font-size: var(--selected-font-size-3xl, 1.875rem); line-height: var(--selected-leading-snug, 1.2); font-weight: 700; margin: 0; }
              .text-body-xl, .text-body-lg { font-family: var(--font-primary-name), system-ui, sans-serif; font-size: var(--selected-font-size-lg, 1.125rem); line-height: 1.5; }
              .text-body-md, .text-body { font-family: var(--font-primary-name), system-ui, sans-serif; font-size: var(--selected-font-size-base, 1rem); line-height: 1.5; }
              .text-body-sm { font-family: var(--font-primary-name), system-ui, sans-serif; font-size: var(--selected-font-size-sm, 0.875rem); line-height: 1.5; }
              .text-body-xs { font-family: var(--font-primary-name), system-ui, sans-serif; font-size: var(--selected-font-size-xs, 0.75rem); line-height: 1.5; }
              .text-label-lg, .text-label-md, .text-label-sm, .text-label-xs { font-family: var(--font-primary-name), system-ui, sans-serif; font-size: var(--selected-font-size-sm, 0.875rem); line-height: 1.4; font-weight: 600; }
              @media (max-width: 768px) {
                .text-display-xl, .text-display-lg { font-size: 3rem; }
                .text-display-md { font-size: 2rem; }
                .text-display-sm { font-size: 1.75rem; }
                h1, .h1, .text-h1 { font-size: 2.25rem; }
                h2, .h2, .text-h2 { font-size: 1.875rem; }
                h3, .h3, .text-h3 { font-size: 1.5rem; }
                h4, .h4, .text-h4 { font-size: 1.25rem; }
                .text-body-xl, .text-body-lg { font-size: 1.125rem; }
              }
              @media (max-width: 480px) {
                .text-display-xl, .text-display-lg { font-size: 2.5rem; }
                .text-display-md { font-size: 1.75rem; }
                .text-display-sm { font-size: 1.5rem; }
                h1, .h1, .text-h1 { font-size: 2rem; }
                h2, .h2, .text-h2 { font-size: 1.625rem; }
              }
            `,
          }}
        />

        {/* Google Analytics (GA4) – laddas alltid, kräver inte cookie consent */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LY6YMV89SC');
            `,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LY6YMV89SC"
        />

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
        <MarketingPixels />
        <ConsentProvider>
          {/* GA4 laddas redan i head (kräver inte consent). Övriga pixels (Meta, TikTok, Snap) kan läggas här om consent behövs. */}
          <HashScrollHandler />
        <NavbarBar />
        <main>{children}</main>
        <Footer />
          <CookieConsent locale="sv" privacyPolicyUrl="/privacy" />
        </ConsentProvider>
      </body>
    </html>
  );
}
