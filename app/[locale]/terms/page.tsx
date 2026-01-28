'use client';

import Link from 'next/link';
import {
  Section,
  Container,
  VStack,
  H1,
  H3,
  Body,
  Box,
} from '@blimpify-im/ui';
import { useTranslation, type Locale } from '@/utils/i18n';
import svTranslations from '@/app/[locale]/locales/terms-sv.json';
import enTranslations from '@/app/[locale]/locales/terms-en.json';

const translations = { sv: svTranslations, en: enTranslations };

export default function TermsPage() {
  const { t, locale } = useTranslation(translations);
  
  return (
    <Section>
      <Container useFormWidth>
        <VStack spacing="3xl" align="stretch">
          {/* Header */}
          <VStack spacing="md" align="center">
            <H1 align="center">{t('header.title')}</H1>
            <Body size="md" color="secondary" align="center">
              {t('header.lastUpdated')}
            </Body>
          </VStack>

          {/* Content */}
          <VStack spacing="2xl" align="stretch" style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
            {/* Introduction */}
            <VStack spacing="md" align="stretch">
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                {t('introduction.text1')}
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                {t('introduction.text2')}
              </Body>
            </VStack>

            {/* Company Info */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">{t('sections.company.title')}</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                <strong>{t('sections.company.content').split('\n')[0]}</strong>
                <br />
                {t('sections.company.content').split('\n').slice(1).join('\n')}
              </Body>
            </VStack>

            {/* All other sections */}
            {['service', 'payment', 'operation', 'rights', 'support', 'refund', 'privacy', 'liability', 'changes', 'law'].map((section) => (
              <VStack key={section} spacing="md" align="stretch">
                <H3 weight="semibold">{t(`sections.${section}.title`)}</H3>
                
                {t(`sections.${section}.intro`) && t(`sections.${section}.intro`) !== `sections.${section}.intro` && (
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    {t(`sections.${section}.intro`)}
                  </Body>
                )}

                {section === 'refund' && t(`sections.${section}.conditions`) && (
                  <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                    <VStack spacing="xs" align="stretch">
                      {Array.isArray((translations[locale] as any).sections[section].conditions) &&
                        (translations[locale] as any).sections[section].conditions.map((item: string, i: number) => (
                          <Body key={i} size="md" color="primary" style={{ lineHeight: 1.7 }}>
                            • {item}
                          </Body>
                        ))}
                    </VStack>
                  </Box>
                )}

                {t(`sections.${section}.items`) && Array.isArray((translations[locale] as any).sections[section].items) && (
                  <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                    <VStack spacing="xs" align="stretch">
                      {(translations[locale] as any).sections[section].items.map((item: string, i: number) => (
                        <Body key={i} size="md" color="primary" style={{ lineHeight: 1.7 }}>
                          • {item}
                        </Body>
                      ))}
                    </VStack>
                  </Box>
                )}

                {t(`sections.${section}.outro`) && t(`sections.${section}.outro`) !== `sections.${section}.outro` && (
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    {t(`sections.${section}.outro`)}
                  </Body>
                )}
              </VStack>
            ))}
          </VStack>
        </VStack>
      </Container>
    </Section>
  );
}