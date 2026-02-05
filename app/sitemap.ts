import { MetadataRoute } from 'next';

// Required for static export
export const dynamic = 'force-static';

/**
 * Sitemap generation for blimpify-im.com
 * Lists all public pages with their priorities
 * Note: app.blimpify-im.com endpoints (dashboard/webapp) are a separate project
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://blimpify-im.com';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split('T')[0],
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date().toISOString().split('T')[0],
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date().toISOString().split('T')[0],
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date().toISOString().split('T')[0],
      priority: 0.5,
    },
    {
      url: `${baseUrl}/partnerskap`,
      lastModified: new Date().toISOString().split('T')[0],
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString().split('T')[0],
      priority: 0.6,
    },
  ];
}
