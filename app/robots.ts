import { MetadataRoute } from 'next';

// Required for static export
export const dynamic = 'force-static';

/**
 * Robots.txt generation
 * Allows all crawlers to access all pages
 * Includes sitemap reference
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://blimpify-im.com';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
