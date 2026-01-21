/**
 * SEO Utilities
 * Helper functions for SEO implementation
 * 
 * @author William
 * @since 2026-01-21
 */

/**
 * Component to inject JSON-LD structured data
 * 
 * Usage:
 * <StructuredData data={generateOrganizationSchema()} />
 */
export function StructuredData({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Generate keywords array from string
 */
export function keywordsFromString(str: string): string[] {
  return str.split(',').map(k => k.trim()).filter(Boolean);
}

/**
 * Truncate description to SEO-friendly length
 */
export function truncateDescription(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + '...';
}

/**
 * Generate slug from title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/å/g, 'a')
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
