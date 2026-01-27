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
  FadeIn,
} from '@blimpify-im/ui';


export function PricingSection() {
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
          <FadeIn direction="up" duration={700}>
            <VStack spacing="md" align="center">
              <Display size='md'>
                Hur kan vi hjälpa ditt företag?
              </Display>
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
                        Blimpify medlemskap (standard)
                      </H3>
                      <Body size="sm">
                        För företag som vill fokusera på sin affär – inte på sin hemsida.
                      </Body>
                    </VStack>

                    {/* Price */}
                    <VStack spacing="xs">
                      <HStack spacing="xs" align="baseline">
                        <H2 weight="bold">
                          490 kr
                        </H2>
                        <Body size="md" color="tertiary">
                          /månad
                        </Body>
                      </HStack>
                      <Body size="xs" color="tertiary" style={{ marginTop: '-0.25rem' }}>
                        exkl. moms
                      </Body>
                    </VStack>

                    {/* Features */}
                    <VStack spacing="sm" style={{ flex: 1 }}>
                      <HStack spacing="sm">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">En professionell hemsida, framtagen utifrån dina val</Body>
                      </HStack>
                      <HStack spacing="sm">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Struktur och grund som fungerar över tid</Body>
                      </HStack>
                      <HStack spacing="sm" className="pricing-feature-mobile-hide">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Möjlighet att justera text, färger och detaljer vid behov</Body>
                      </HStack>
                      <HStack spacing="sm">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Hjälp med domänkoppling och publicering</Body>
                      </HStack>
                      <HStack spacing="sm" className="pricing-feature-mobile-hide">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Överblick över hur hemsidan används</Body>
                      </HStack>
                      <HStack spacing="sm">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Support när något känns fel</Body>
                      </HStack>
                    </VStack>
                    {/* CTA Button */}
                    <Button
                      variant="accent"
                      size="lg"
                      fullWidth
                      href="https://app.blimpify-im.com/waitlist"
                      target="_blank"
                      className="pricing-access-button"
                    >
                      Få tillgång
                    </Button>


                  </VStack>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Second Card - När behoven går bortom standard */}
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
                        När behoven går bortom standard
                      </H3>
                      <Body size="sm">
                        Skräddarsydd lösning för större företag
                      </Body>
                    </VStack>

                    {/* Price */}
                    <VStack spacing="xs">
                      <HStack spacing="xs" align="baseline">
                        <H2 weight="bold">
                          Kontakta oss
                        </H2>
                      </HStack>
                    </VStack>

                    {/* Features */}
                    <VStack spacing="sm" style={{ flex: 1 }}>
                      <HStack spacing="sm">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Ett större projekt med tydlig projektledning</Body>
                      </HStack>
                      <HStack spacing="sm">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Lösningar anpassade efter er verksamhet och era flöden</Body>
                      </HStack>
                      <HStack spacing="sm" className="pricing-feature-mobile-hide">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Stöd för mer avancerad funktionalitet vid behov</Body>
                      </HStack>
                      <HStack spacing="sm">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">En dedikerad kontakt och långsiktigt samarbete</Body>
                      </HStack>
                      <HStack spacing="sm">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Avtal och upplägg anpassade efter omfattning och krav</Body>
                      </HStack>
                    </VStack>

                    {/* CTA Button */}
                    <Link href="/contact" style={{ textDecoration: 'none', width: '100%', display: 'block' }}>
                      <Button
                        variant="secondary"
                        size="lg"
                        fullWidth
                        className="pricing-contact-button"
                      >
                        Kontakta oss
                      </Button>
                    </Link>
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
