'use client';

import { useState } from 'react';
import {
  Section,
  Container,
  VStack,
  HStack,
  H1,
  H2,
  H3,
  Body,
  Button,
  Card,
  CardContent,
  Tag,
  Grid,
  Display,
  FadeIn,
  SegmentedControl,
} from '@blimpify-im/ui';

const MONTHLY_PRICE = 290;
const YEARLY_PRICE_PER_MONTH = 218; // 25% rabatt (290 * 0.75 ≈ 218)

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('yearly');

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
          <FadeIn direction="up" duration={700}>
            <VStack spacing="lg" align="center">
              <Display size="md" align="center">
                Hur kan vi hjälpa ditt företag?
              </Display>
              <VStack spacing="sm" align="center">
                <Body size="sm" color="secondary">Standardmedlemskap</Body>
                <SegmentedControl
                  options={[
                    { value: 'monthly', label: 'Månadspris' },
                    { value: 'yearly', label: 'Årspris' },
                  ]}
                  value={billingPeriod}
                  onChange={(value) => setBillingPeriod(value as 'monthly' | 'yearly')}
                />
              </VStack>
            </VStack>
          </FadeIn>

          {/* Pricing Cards */}
          <Grid columns={2} gap="xl" className="pricing-grid">
            {/* First Card - Blimpify medlemskap */}
            <FadeIn direction="up" duration={600} delay={200}>
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
                        Blimpify-medlemskap
                      </H3>
                      <Body size="sm">
                        För företag som vill fokusera på verksamheten
                      </Body>
                    </VStack>

                    {/* Price – rabattraden har alltid samma plats så korten inte studsar */}
                    <VStack spacing="xs" className="pricing-price-block">
                      <HStack spacing="xs" align="baseline">
                        <H1 weight="bold">
                          {billingPeriod === 'monthly' ? MONTHLY_PRICE : YEARLY_PRICE_PER_MONTH} kr
                        </H1>
                        <Body size="md" color="tertiary">
                          /mån
                        </Body>
                      </HStack>
                      <Body
                        size="sm"
                        color="secondary"
                        style={{ minHeight: '1.25rem', visibility: billingPeriod === 'yearly' ? 'visible' : 'hidden' }}
                      >
                        {billingPeriod === 'yearly' ? '25% rabatt vid årsbetalning' : '\u00A0'}
                      </Body>
                      <Body size="xs" color="tertiary" style={{ marginTop: '-0.25rem' }}>
                        excl. moms
                      </Body>
                    </VStack>

                    {/* Features */}
                    <VStack spacing="sm" style={{ flex: 1 }} className="pricing-features">
                      <HStack spacing="sm" align="start" className="pricing-feature-row pricing-feature-mobile-hide">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">En professionell webbplats, skapad utifrån dina val</Body>
                      </HStack>
                      <HStack spacing="sm" align="start" className="pricing-feature-row">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Struktur och grund som håller över tid</Body>
                      </HStack>
                      <HStack spacing="sm" align="start" className="pricing-feature-row">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Möjlighet att justera text, färger och detaljer vid behov</Body>
                      </HStack>
                      <HStack spacing="sm" align="start" className="pricing-feature-row">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">onblimpify-domän, custom domänanslutning och publicering</Body>
                      </HStack>
                      <HStack spacing="sm" align="start" className="pricing-feature-row pricing-feature-mobile-hide">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Översikt över hur din webbplats används</Body>
                      </HStack>
                      <HStack spacing="sm" align="start" className="pricing-feature-row pricing-feature-mobile-hide">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Support när något inte känns rätt</Body>
                      </HStack>
                    </VStack>
                    {/* CTA Button */}
                    <Button
                      variant="accent"
                      size="lg"
                      fullWidth
                      href="https://app.blimpify-im.com/sv/signup"
                      target="_blank"
                      className="pricing-access-button"
                    >
                      Kom igång
                    </Button>


                  </VStack>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Second Card - Anpassat behov / Boka möte */}
            <FadeIn direction="up" duration={600} delay={350}>
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
                        Anpassat behov
                      </H3>
                      <Body size="sm">
                        Gillar ni vad vi gör och vill ha en mer komplicerad eller omfattande lösning? Boka ett möte.
                      </Body>
                    </VStack>

                    {/* CTA-block – samma struktur som vänster kort så layouten matchar */}
                    <VStack spacing="xs" className="pricing-price-block">
                      <H1 weight="bold">
                        Prata med oss
                      </H1>
                    </VStack>

                    {/* Features */}
                    <VStack spacing="sm" style={{ flex: 1 }} className="pricing-features">
                      <HStack spacing="sm" align="start" className="pricing-feature-row">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Ett större projekt med tydlig projektledning</Body>
                      </HStack>
                      <HStack spacing="sm" align="start" className="pricing-feature-row">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Lösningar anpassade till din verksamhet och arbetsflöden</Body>
                      </HStack>
                      <HStack spacing="sm" align="start" className="pricing-feature-row">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Stöd för mer avancerad funktionalitet vid behov</Body>
                      </HStack>
                      <HStack spacing="sm" align="start" className="pricing-feature-row pricing-feature-mobile-hide">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">En dedikerad kontakt och långsiktigt samarbete</Body>
                      </HStack>
                      <HStack spacing="sm" align="start" className="pricing-feature-row pricing-feature-mobile-hide">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Avtal och upplägg anpassade till omfattning och behov</Body>
                      </HStack>
                    </VStack>

                    {/* CTA Button */}
                    <Button
                      variant="secondary"
                      size="lg"
                      fullWidth
                      href="https://calendly.com/admin-blimpify/vv-digital-media"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pricing-contact-button"
                    >
                      Boka möte
                    </Button>
                  </VStack>
                </CardContent>
              </Card>
            </FadeIn>
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

        /* Samma maxbredd för feature-text i båda korten – jämn layout */
        .pricing-feature-row {
          align-items: flex-start;
        }
        .pricing-feature-text {
          flex: 1;
          min-width: 0;
          max-width: 32ch;
        }
        
        @media (max-width: 1024px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
          
          .pricing-feature-mobile-hide {
            display: none !important;
          }

          .pricing-feature-text {
            max-width: none;
          }
        }
      `}</style>
    </Section>
  );
}
