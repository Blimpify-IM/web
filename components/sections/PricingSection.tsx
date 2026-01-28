'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Section,
  Container,
  VStack,
  HStack,
  H2,
  H3,
  Body,
  Button,
  Card,
  CardContent,
  Tag,
  Grid,
  Display,
} from '@blimpify-im/ui';
import { useTranslation, useAppUrl, type Locale } from '@/utils/i18n';


export function PricingSection({ translations }: { translations?: Record<Locale, any> }) {
  const { t, locale } = useTranslation(translations);
  const getAppUrl = useAppUrl();
  const [isDark, setIsDark] = useState(true); // Default to dark theme first

  // Detect theme from document
  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDark(theme === 'dark');
    };

    // Check initial theme
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Section
      id="pricing"
      style={{
        background: 'var(--surface-page)',
      }}
    >
      <Container>
        <VStack spacing="3xl">
          {/* Header */}
          <VStack spacing="md" align="center">
            <Display size='md'>
              {t('pricing.title')}
            </Display>
          </VStack>

          {/* Pricing Cards */}
          <Grid columns={2} gap="xl" className="pricing-grid">
            {/* First Card - Blimpify medlemskap */}
            <Card
                variant="outlined"
                padding="lg"
                radius="lg"
                style={{
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundImage: `url(${isDark ? '/assets/cloudy-dark.png' : '/assets/cloudy4.png'})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: 'transparent',
                }}
              >
                <CardContent>
                  <VStack spacing="2xl" style={{ height: '100%', position: 'relative', zIndex: 1 }}>
                    {/* Plan Header */}
                    <VStack spacing="sm">
                      <H3 weight="bold">
                        {t('pricing.standard.title')}
                      </H3>
                      <Body size="sm">
                        {t('pricing.standard.subtitle')}
                      </Body>
                    </VStack>

                    {/* Price */}
                    <VStack spacing="xs">
                      <HStack spacing="xs" align="baseline">
                        <H2 weight="bold">
                          {t('pricing.standard.price')}
                        </H2>
                        <Body size="md" color="tertiary">
                          {t('pricing.standard.period')}
                        </Body>
                      </HStack>
                      <Body size="xs" color="tertiary" style={{ marginTop: '-0.25rem' }}>
                        {t('pricing.standard.vat')}
                      </Body>
                    </VStack>

                    {/* Features */}
                    <VStack spacing="sm" style={{ flex: 1 }}>
                      <HStack spacing="sm">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">{t('pricing.standard.features.0')}</Body>
                      </HStack>
                      <HStack spacing="sm">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">{t('pricing.standard.features.1')}</Body>
                      </HStack>
                      <HStack spacing="sm" className="pricing-feature-mobile-hide">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">{t('pricing.standard.features.2')}</Body>
                      </HStack>
                      <HStack spacing="sm">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">{t('pricing.standard.features.3')}</Body>
                      </HStack>
                      <HStack spacing="sm" className="pricing-feature-mobile-hide">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">{t('pricing.standard.features.4')}</Body>
                      </HStack>
                      <HStack spacing="sm">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">{t('pricing.standard.features.5')}</Body>
                      </HStack>
                    </VStack>
                    {/* CTA Button */}
                    <Button
                      variant="accent"
                      size="lg"
                      fullWidth
                      href={getAppUrl('/waitlist')}
                      target="_blank"
                      className="pricing-access-button"
                    >
                      {t('pricing.standard.cta')}
                    </Button>


                  </VStack>
                </CardContent>
              </Card>

            {/* Second Card - När behoven går bortom standard */}
            <Card
                variant="outlined"
                padding="lg"
                radius="lg"
                style={{
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'var(--surface-raised)',
                }}
              >
                <CardContent>
                  <VStack spacing="2xl" style={{ height: '100%', position: 'relative', zIndex: 1 }}>
                    {/* Plan Header */}
                    <VStack spacing="sm">
                      <H3 weight="bold">
                        {t('pricing.custom.title')}
                      </H3>
                      <Body size="sm">
                        {t('pricing.custom.subtitle')}
                      </Body>
                    </VStack>

                    {/* Price */}
                    <VStack spacing="xs">
                      <HStack spacing="xs" align="baseline">
                        <H2 weight="bold">
                          {t('pricing.custom.price')}
                        </H2>
                      </HStack>
                    </VStack>

                    {/* Features */}
                    <VStack spacing="sm" style={{ flex: 1 }}>
                      <HStack spacing="sm">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">{t('pricing.custom.features.0')}</Body>
                      </HStack>
                      <HStack spacing="sm">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">{t('pricing.custom.features.1')}</Body>
                      </HStack>
                      <HStack spacing="sm" className="pricing-feature-mobile-hide">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">{t('pricing.custom.features.2')}</Body>
                      </HStack>
                      <HStack spacing="sm">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">{t('pricing.custom.features.3')}</Body>
                      </HStack>
                      <HStack spacing="sm">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">{t('pricing.custom.features.4')}</Body>
                      </HStack>
                    </VStack>

                    {/* CTA Button */}
                    <Link href={`/${locale}/contact`} style={{ textDecoration: 'none', width: '100%', display: 'block' }}>
                      <Button
                        variant="secondary"
                        size="lg"
                        fullWidth
                        className="pricing-contact-button"
                      >
                        {t('pricing.custom.cta')}
                      </Button>
                    </Link>
                  </VStack>
                </CardContent>
              </Card>
          </Grid>
        </VStack>
      </Container>

      {/* Responsive Styles */}
      <style jsx global>{`
        /* Checkmark colors based on theme */
        [data-theme="light"] .pricing-checkmark {
          color: #000000 !important;
        }
        
        [data-theme="dark"] .pricing-checkmark {
          color: #ffffff !important;
        }
        
        
        @media (max-width: 1024px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
          
          .pricing-feature-mobile-hide {
            display: none !important;
          }
        }

        /* White text for standard plan in both light and dark mode - exclude button */
        .pricing-card-with-bg h3:not(button h3),
        .pricing-card-with-bg h2:not(button h2) {
          color: #ffffff !important;
        }

        .pricing-card-with-bg p:not(button p):not(button *) {
          color: rgba(255, 255, 255, 0.9) !important;
        }
      `}</style>
    </Section>
  );
}
