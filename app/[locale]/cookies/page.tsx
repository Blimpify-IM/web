'use client';

import {
  Section,
  Container,
  VStack,
  H1,
  H3,
  Body,
  Box,
} from '@blimpify-im/ui';
import { useTranslation } from '@/utils/i18n';
import svTranslations from '../locales/cookies-sv.json';
import enTranslations from '../locales/cookies-en.json';

const translations = {
  sv: svTranslations,
  en: enTranslations,
};

export default function CookiesPage() {
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
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  {(translations[locale] as any).introduction.sites.map((site: string, i: number) => (
                    <Body key={i} size="md" color="primary" style={{ lineHeight: 1.7 }}>
                      • {site}
                    </Body>
                  ))}
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                {t('introduction.text2')}
              </Body>
            </VStack>

            {/* 1. What Are Cookies */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">{t('sections.whatAreCookies.title')}</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                {t('sections.whatAreCookies.intro')}
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                {t('sections.whatAreCookies.text')}
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  {(translations[locale] as any).sections.whatAreCookies.items.map((item: string, i: number) => (
                    <Body key={i} size="md" color="primary" style={{ lineHeight: 1.7 }}>
                      • {item}
                    </Body>
                  ))}
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                {t('sections.whatAreCookies.outro')}
              </Body>
            </VStack>

            {/* 2. Our Cookies */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">{t('sections.ourCookies.title')}</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                {t('sections.ourCookies.intro')}
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                {t('sections.ourCookies.text')}
              </Body>
              <Box style={{ overflowX: 'auto', width: '100%' }}>
                <table style={{ 
                  width: '100%', 
                  borderCollapse: 'collapse',
                  fontSize: 'var(--foundation-font-size-md)',
                  lineHeight: 1.7
                }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--border-primary)' }}>
                      {(translations[locale] as any).sections.ourCookies.table.headers.map((header: string, i: number) => (
                        <th key={i} style={{ padding: 'var(--foundation-space-2) var(--foundation-space-3)', textAlign: 'left', fontWeight: 600 }}>
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(translations[locale] as any).sections.ourCookies.table.rows.map((row: any, i: number) => (
                      <tr key={i} style={{ borderBottom: i < 3 ? '1px solid var(--border-secondary)' : 'none' }}>
                        <td style={{ padding: 'var(--foundation-space-2) var(--foundation-space-3)' }}>
                          <strong>{row.cookie}</strong>
                        </td>
                        <td style={{ padding: 'var(--foundation-space-2) var(--foundation-space-3)' }}>
                          {row.type}
                        </td>
                        <td style={{ padding: 'var(--foundation-space-2) var(--foundation-space-3)' }}>
                          {row.purpose}
                        </td>
                        <td style={{ padding: 'var(--foundation-space-2) var(--foundation-space-3)' }}>
                          {row.duration}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                {t('sections.ourCookies.outro')}
              </Body>
            </VStack>

            {/* 3. Third Party Cookies */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">{t('sections.thirdPartyCookies.title')}</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                {t('sections.thirdPartyCookies.intro')}
              </Body>
              <Box style={{ overflowX: 'auto', width: '100%' }}>
                <table style={{ 
                  width: '100%', 
                  borderCollapse: 'collapse',
                  fontSize: 'var(--foundation-font-size-md)',
                  lineHeight: 1.7
                }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--border-primary)' }}>
                      {(translations[locale] as any).sections.thirdPartyCookies.table.headers.map((header: string, i: number) => (
                        <th key={i} style={{ padding: 'var(--foundation-space-2) var(--foundation-space-3)', textAlign: 'left', fontWeight: 600 }}>
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(translations[locale] as any).sections.thirdPartyCookies.table.rows.map((row: any, i: number) => (
                      <tr key={i} style={{ borderBottom: i < 1 ? '1px solid var(--border-secondary)' : 'none' }}>
                        <td style={{ padding: 'var(--foundation-space-2) var(--foundation-space-3)' }}>
                          <strong>{row.service}</strong>
                        </td>
                        <td style={{ padding: 'var(--foundation-space-2) var(--foundation-space-3)' }}>
                          {row.purpose}
                        </td>
                        <td style={{ padding: 'var(--foundation-space-2) var(--foundation-space-3)' }}>
                          {row.provider}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                {t('sections.thirdPartyCookies.outro')}
              </Body>
            </VStack>

            {/* 4. Consent */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">{t('sections.consent.title')}</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                {t('sections.consent.intro')}
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  {(translations[locale] as any).sections.consent.choices.map((choice: string, i: number) => (
                    <Body key={i} size="md" color="primary" style={{ lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: `• ${choice}` }} />
                  ))}
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                {t('sections.consent.text1')}
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                {t('sections.consent.text2')}
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  {(translations[locale] as any).sections.consent.options.map((option: string, i: number) => (
                    <Body key={i} size="md" color="primary" style={{ lineHeight: 1.7 }}>
                      • {option}
                    </Body>
                  ))}
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: t('sections.consent.warning') }} />
            </VStack>

            {/* 5. Changes */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">{t('sections.changes.title')}</H3>
              {(translations[locale] as any).sections.changes.items.map((item: string, i: number) => (
                <Body key={i} size="md" color="primary" style={{ lineHeight: 1.7 }}>
                  {item}
                </Body>
              ))}
            </VStack>

            {/* 6. Contact */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">{t('sections.contact.title')}</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                {t('sections.contact.intro')}
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                {t('sections.contact.text')}
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7, whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: t('sections.contact.info') }} />
            </VStack>
          </VStack>
        </VStack>
      </Container>
    </Section>
  );
}
