import { MetadataRoute } from 'next';

// Definiera alla statiska sidor på webbplatsen
const routes = [
  '',
  '/about',
  '/contact',
  '/login',
  '/register',
  '/pricing',
  '/privacy',
  '/terms',
  '/cookies',
  '/faq',
  '/features',
  '/creators/how-it-works',
  '/creators/faq',
  '/creators/resources',
  '/creators/pioneers',
  '/creators/success-stories',
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Skapa sitemap-poster för alla statiska sidor
  const staticPages = routes.map(route => ({
    url: `https://blimpify.com${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...staticPages];
} 