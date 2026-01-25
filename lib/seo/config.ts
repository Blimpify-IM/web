/**
 * SEO Configuration
 * Central configuration for all SEO metadata across the site
 * 
 * @author William
 * @since 2026-01-21
 */

export const seoConfig = {
  // Base configuration
  baseUrl: 'https://blimpify-im.com',
  siteName: 'Blimpify',
  locale: 'sv_SE',
  language: 'sv',
  
  // Organization information (for structured data)
  organization: {
    name: 'Blimpify',
    description: 'Professionella hemsidor för företag som vill fokusera på sin affär',
    url: 'https://blimpify-im.com',
    logo: 'https://cdn.blimpify-im.com/assets/logo/logo.png',
    email: 'admin@blimpify-im.com',
    foundingDate: '2024',
  },
  
  // Social media links
  social: {
    twitter: '@blimpify', // For Twitter Card metadata
    linkedin: 'https://www.linkedin.com/company/blimpifyim/',
    instagram: 'https://www.instagram.com/blimpifyyy?igsh=MTh4OTRlN2Nkb2RvMA%3D%3D&utm_source=qr',
    tiktok: 'https://www.tiktok.com/@blimpify?_r=1&_t=ZN-93GNpMnPOvW',
    youtube: 'https://youtube.com/@blimpify?si=XuePkSXAUZmzkw3Z',
  },
  
  // Default Open Graph image
  defaultOgImage: {
    url: 'https://cdn.blimpify-im.com/assets/logo/logo.png',
    width: 1200,
    height: 630,
    alt: 'Blimpify - En hemsida du inte behöver tänka på',
  },
} as const;

export type SeoConfig = typeof seoConfig;
