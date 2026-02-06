
import './globals.css';
import type { Metadata } from 'next';
import { designSnippet } from '@blimpify-im/ui/design';
import { ConsentProvider, CookieConsent, MarketingPixels } from '@blimpify-im/ui/consent';
import { Footer } from '@/components/layout/Footer';
import { NavbarBar } from '@/components/layout/NavbarBar';
import { HashScrollHandler } from '@/components/HashScrollHandler';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  ...generateMetadata({
    title: 'Blimpify',
    description: 'Blimpify hjälper företag att få en professionell hemsida utan att behöva bygga eller designa själva. Du delar dina önskemål – vi tar hand om design, struktur och publicering.',
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
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Inject design tokens as CSS variables */}
        <style id="design-css">{design.css}</style>

        {/* TikTok Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function (w, d, t) {
                w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
                var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
                ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
                ttq.load('D60HPOBC77U7EB9GUD6G');
                ttq.page();
              }(window, document, 'ttq');
            `,
          }}
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
        <ConsentProvider>
          {/* GA4 laddas endast efter att användaren accepterat analyscookies (via cookie-bannern) */}
          <MarketingPixels pixels={[{ platform: 'google', pixel_id: 'G-LY6YMV89SC' }]} />
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
