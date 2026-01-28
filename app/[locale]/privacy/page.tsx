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
import svTranslations from '../locales/privacy-sv.json';
import enTranslations from '../locales/privacy-en.json';

const translations = {
  sv: svTranslations,
  en: enTranslations,
};

export default function PrivacyPage() {
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
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: t('introduction.text') }} />
            </VStack>

            {/* 1. Collection */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">{t('sections.collection.title')}</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                {t('sections.collection.intro')}
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                {t('sections.collection.text')}
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  {(translations[locale] as any).sections.collection.items.map((item: any, i: number) => (
                    <Body key={i} size="md" color="primary" style={{ lineHeight: 1.7 }}>
                      • <strong>{item.label}</strong> {item.value}
                    </Body>
                  ))}
                </VStack>
              </Box>
            </VStack>

            {/* 2. Purpose */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">{t('sections.purpose.title')}</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                {t('sections.purpose.intro')}
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  {(translations[locale] as any).sections.purpose.items.map((item: string, i: number) => (
                    <Body key={i} size="md" color="primary" style={{ lineHeight: 1.7 }}>
                      • {item}
                    </Body>
                  ))}
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: t('sections.purpose.outro') }} />
            </VStack>

            {/* 3. Third Party */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">{t('sections.thirdParty.title')}</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                {t('sections.thirdParty.intro')}
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
                      <th style={{ padding: 'var(--foundation-space-2) var(--foundation-space-3)', textAlign: 'left', fontWeight: 600 }}>
                        {locale === 'sv' ? 'Tjänst' : 'Service'}
                      </th>
                      <th style={{ padding: 'var(--foundation-space-2) var(--foundation-space-3)', textAlign: 'left', fontWeight: 600 }}>
                        {locale === 'sv' ? 'Syfte' : 'Purpose'}
                      </th>
                      <th style={{ padding: 'var(--foundation-space-2) var(--foundation-space-3)', textAlign: 'left', fontWeight: 600 }}>
                        {locale === 'sv' ? 'Leverantör' : 'Provider'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(translations[locale] as any).sections.thirdParty.providers?.map((row: any, i: number) => (
                      <tr key={i} style={{ borderBottom: i < 2 ? '1px solid var(--border-secondary)' : 'none' }}>
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
                    )) || []}
                  </tbody>
                </table>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                {t('sections.thirdParty.outro')}
              </Body>
            </VStack>

            {/* 4. Storage */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">{t('sections.storage.title')}</H3>
              {(translations[locale] as any).sections.storage.items.map((item: string, i: number) => (
                <Body key={i} size="md" color="primary" style={{ lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </VStack>

            {/* 5. Rights */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">{t('sections.rights.title')}</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                {t('sections.rights.intro')}
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  {(translations[locale] as any).sections.rights.items.map((item: string, i: number) => (
                    <Body key={i} size="md" color="primary" style={{ lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: `• ${item}`}} />
                  ))}
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: t('sections.rights.contact') }} />
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: t('sections.rights.response') }} />
            </VStack>

            {/* 6. Cookies */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">{t('sections.cookies.title')}</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                {t('sections.cookies.intro')}
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  {(translations[locale] as any).sections.cookies.items.map((item: string, i: number) => (
                    <Body key={i} size="md" color="primary" style={{ lineHeight: 1.7 }}>
                      • {item}
                    </Body>
                  ))}
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                {t('sections.cookies.warning')}
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: t('sections.cookies.link') }} />
            </VStack>

            {/* 7. Policy Changes */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">{t('sections.policyChanges.title')}</H3>
              {(translations[locale] as any).sections.policyChanges.items.map((item: string, i: number) => (
                <Body key={i} size="md" color="primary" style={{ lineHeight: 1.7 }}>
                  {item}
                </Body>
              ))}
            </VStack>

            {/* 8. Contact */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">{t('sections.contact.title')}</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                <strong>{t('sections.contact.label')}</strong>
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7, whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: t('sections.contact.info') }} />
            </VStack>
          </VStack>
        </VStack>
      </Container>
    </Section>
  );
}
