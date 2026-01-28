'use client';

import { Section, Container, VStack, H1, Body } from '@blimpify-im/ui';
import { useTranslation, type Locale } from '@/utils/i18n';
import svTranslations from '@/app/[locale]/locales/about-sv.json';
import enTranslations from '@/app/[locale]/locales/about-en.json';

const translations = { sv: svTranslations, en: enTranslations };

export default function AboutPage() {
  const { t } = useTranslation(translations);
  
  return (
    <Section>
      <Container>
        <VStack spacing="lg" align="center" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <H1 align="center">{t('hero.title')}</H1>
          <Body size="lg" color="secondary" align="center">
            {t('hero.description')}
          </Body>
        </VStack>
      </Container>
    </Section>
  );
}
