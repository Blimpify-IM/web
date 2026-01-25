/**
 * SEO Metadata Generator
 * Generates page-specific metadata with defaults from central config
 * 
 * Usage:
 * export const metadata = generateMetadata({
 *   title: 'About Us',
 *   description: 'Learn more about Blimpify',
 * });
 * 
 * @author William
 * @since 2026-01-21
 */

import { Metadata } from 'next';
import { seoConfig } from './config';

export interface PageMetadataOptions {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  ogImage?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
  noIndex?: boolean;
}

/**
 * Generate complete metadata for a page
 */
export function generateMetadata(options: PageMetadataOptions): Metadata {
  const {
    title,
    description,
    keywords = [],
    path = '',
    ogImage,
    noIndex = false,
  } = options;

  const fullTitle = title === seoConfig.siteName 
    ? title 
    : `${title} – ${seoConfig.siteName}`;
  
  const url = `${seoConfig.baseUrl}${path}`;
  
  const imageData = ogImage || seoConfig.defaultOgImage;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: [{ name: seoConfig.siteName }],
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    
    // Open Graph
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: seoConfig.siteName,
      locale: seoConfig.locale,
      type: 'website',
      images: [
        {
          url: imageData.url,
          width: imageData.width || 1200,
          height: imageData.height || 630,
          alt: imageData.alt || fullTitle,
        },
      ],
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageData.url],
      creator: seoConfig.social.twitter,
    },
    
    // Canonical URL
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Quick metadata for legal/policy pages
 */
export function generateLegalPageMetadata(title: string, path: string): Metadata {
  return generateMetadata({
    title,
    description: `${title} för ${seoConfig.siteName}. Läs om våra villkor och riktlinjer.`,
    path,
    noIndex: false, // Legal pages should be indexed
  });
}
