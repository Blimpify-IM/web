// ===============================================
// utils/i18n.ts
// Internationalization utilities for web project
// ===============================================

'use client';

import { useParams } from 'next/navigation';

export type Locale = 'sv' | 'en';

/**
 * Get nested value from object using dot notation
 * Example: get(obj, 'hero.title')
 */
function getNestedValue(obj: any, path: string): string {
  const keys = path.split('.');
  let value = obj;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return path; // Return key as fallback if not found
    }
  }
  
  return typeof value === 'string' ? value : path;
}

/**
 * Hook for translations with page-specific translation object
 * 
 * @param pageTranslations - Object with locale keys containing translations
 * @example
 * const translations = { sv: svHome, en: enHome };
 * const { t, locale } = useTranslation(translations);
 * return <h1>{t('hero.title')}</h1>;
 */
export function useTranslation(pageTranslations?: Record<Locale, any>) {
  const params = useParams();
  const locale = (params?.locale as Locale) || 'sv';

  const t = (key: string): string => {
    if (!pageTranslations) {
      console.warn('useTranslation: No translations provided');
      return key;
    }
    
    return getNestedValue(pageTranslations[locale], key);
  };

  return {
    t,
    locale,
  };
}

/**
 * Get translation without hook (for use outside React components)
 */
export function getTranslation(
  key: string, 
  locale: Locale = 'sv',
  translations?: Record<Locale, any>
): string {
  if (!translations) return key;
  return getNestedValue(translations[locale], key);
}

/**
 * Hook for generating locale-aware app URLs
 * Automatically includes current locale in path
 * 
 * @example
 * const getAppUrl = useAppUrl();
 * <Button href={getAppUrl('/waitlist')}>Get Started</Button>
 * // Result: https://app.blimpify-im.com/sv/waitlist (if locale is 'sv')
 */
export function useAppUrl() {
  const params = useParams();
  const locale = (params?.locale as Locale) || 'sv';
  
  return (path: string) => {
    // Ensure path starts with /
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `https://app.blimpify-im.com/${locale}${cleanPath}`;
  };
}
