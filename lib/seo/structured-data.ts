/**
 * Structured Data (JSON-LD) Generators
 * Creates schema.org structured data for better SEO
 * 
 * Usage in page.tsx:
 * <script
 *   type="application/ld+json"
 *   dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
 * />
 * 
 * @author William
 * @since 2026-01-21
 */

import { seoConfig } from './config';

/**
 * Organization Schema
 * Used on homepage to identify the company
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: seoConfig.organization.name,
    description: seoConfig.organization.description,
    url: seoConfig.organization.url,
    logo: seoConfig.organization.logo,
    email: seoConfig.organization.email,
    foundingDate: seoConfig.organization.foundingDate,
    sameAs: [
      seoConfig.social.linkedin,
      seoConfig.social.instagram,
      seoConfig.social.tiktok,
      seoConfig.social.youtube,
    ],
  };
}

/**
 * WebSite Schema
 * Defines the website for search engines
 */
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: seoConfig.siteName,
    url: seoConfig.baseUrl,
    description: seoConfig.organization.description,
    inLanguage: seoConfig.language,
  };
}

/**
 * BreadcrumbList Schema
 * Helps Google understand page hierarchy
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${seoConfig.baseUrl}${item.url}`,
    })),
  };
}

/**
 * FAQPage Schema
 * For FAQ sections
 */
export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Article Schema
 * For blog posts or articles
 */
export function generateArticleSchema(options: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: options.title,
    description: options.description,
    image: options.image || seoConfig.defaultOgImage.url,
    datePublished: options.datePublished,
    dateModified: options.dateModified || options.datePublished,
    author: {
      '@type': 'Organization',
      name: options.author || seoConfig.organization.name,
    },
    publisher: {
      '@type': 'Organization',
      name: seoConfig.organization.name,
      logo: {
        '@type': 'ImageObject',
        url: seoConfig.organization.logo,
      },
    },
  };
}
