import type { Metadata } from 'next';
import svTranslations from '@/app/[locale]/locales/contact-sv.json';
import enTranslations from '@/app/[locale]/locales/contact-en.json';

type Props = {
  params: Promise<{ locale: 'sv' | 'en' }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const translations = locale === 'sv' ? svTranslations : enTranslations;

  return {
    title: translations.meta.title,
    description: translations.meta.description,
  };
}

export { default } from './page';
