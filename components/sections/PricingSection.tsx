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
                How can we help your business?
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
                        Blimpify membership (standard)
                      </H3>
                      <Body size="sm">
                        For businesses that want to focus on their business
                      </Body>
                    </VStack>

                    {/* Price */}
                    <VStack spacing="xs" className="pricing-price-block">
                      <HStack spacing="xs" align="baseline">
                        <H2 weight="bold">
                          $49
                        </H2>
                        <Body size="md" color="tertiary">
                          /month
                        </Body>
                      </HStack>
                      <Body size="xs" color="tertiary" style={{ marginTop: '-0.25rem' }}>
                        excl. VAT
                      </Body>
                    </VStack>

                    {/* Features */}
                    <VStack spacing="sm" style={{ flex: 1 }} className="pricing-features">
                      <HStack spacing="sm" align="start" className="pricing-feature-row">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">A professional website, created based on your choices</Body>
                      </HStack>
                      <HStack spacing="sm" align="start" className="pricing-feature-row">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Structure and foundation that works over time</Body>
                      </HStack>
                      <HStack spacing="sm" align="start" className="pricing-feature-row pricing-feature-mobile-hide">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Ability to adjust text, colors, and details as needed</Body>
                      </HStack>
                      <HStack spacing="sm" align="start" className="pricing-feature-row">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Help with domain connection and publishing</Body>
                      </HStack>
                      <HStack spacing="sm" align="start" className="pricing-feature-row pricing-feature-mobile-hide">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Overview of how your website is being used</Body>
                      </HStack>
                      <HStack spacing="sm" align="start" className="pricing-feature-row">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Support when something doesn't feel right</Body>
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
                      Get Access
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
                        When needs go beyond standard
                      </H3>
                      <Body size="sm">
                        Tailored solution for larger businesses
                      </Body>
                    </VStack>

                    {/* Price - samma struktur som vänster kort så layouten matchar */}
                    <VStack spacing="xs" className="pricing-price-block">
                      <HStack spacing="xs" align="baseline">
                        <H2 weight="bold">
                          Contact us
                        </H2>
                      </HStack>
                      <Body size="xs" color="tertiary" style={{ marginTop: '-0.25rem' }}>
                        as needed
                      </Body>
                    </VStack>

                    {/* Features */}
                    <VStack spacing="sm" style={{ flex: 1 }} className="pricing-features">
                      <HStack spacing="sm" align="start" className="pricing-feature-row">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">A larger project with clear project management</Body>
                      </HStack>
                      <HStack spacing="sm" align="start" className="pricing-feature-row">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Solutions tailored to your business and workflows</Body>
                      </HStack>
                      <HStack spacing="sm" align="start" className="pricing-feature-row pricing-feature-mobile-hide">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Support for more advanced functionality when needed</Body>
                      </HStack>
                      <HStack spacing="sm" align="start" className="pricing-feature-row">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">A dedicated contact and long-term collaboration</Body>
                      </HStack>
                      <HStack spacing="sm" align="start" className="pricing-feature-row">
                        <span className="pricing-checkmark" style={{ flexShrink: 0 }}>✓</span>
                        <Body size="sm">Contracts and setup adapted to scope and requirements</Body>
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
                        Contact us
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
