/**
 * SEO Library - Central Export
 * Import everything you need from here
 * 
 * Usage:
 * import { generateMetadata, generateOrganizationSchema, StructuredData } from '@/lib/seo';
 * 
 * @author William
 * @since 2026-01-21
 */

// Configuration
export { seoConfig } from './config';
export type { SeoConfig } from './config';

// Metadata generation
export { generateMetadata, generateLegalPageMetadata } from './metadata';
export type { PageMetadataOptions } from './metadata';

// Structured data
export {
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateArticleSchema,
} from './structured-data';
export type { FAQItem } from './structured-data';

// Utilities
export {
  StructuredData,
  keywordsFromString,
  truncateDescription,
  generateSlug,
} from './utils';
