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

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  variant: 'outlined' | 'raised' | 'elevated' | 'solid';
}

const pricingPlans: PricingPlan[] = [
  
  {
    name: 'Blimpify medlemskap (standard)',
    price: '490 kr',
    period: '/månad',
    description: 'För företag som vill fokusera på sin affär – inte på sin hemsida.',
    features: [
      'En professionell hemsida, framtagen utifrån dina val',
      'Struktur och grund som fungerar över tid',
      'Möjlighet att justera text, färger och detaljer vid behov',
      'Hjälp med domänkoppling och publicering',
      'Överblick över hur hemsidan används',
      'Support när något känns fel',
    ],
    popular: false,
    cta: 'Få tillgång',
    variant: 'outlined',
  },
  {
    name: 'När behoven går bortom standard',
    price: 'Kontakta oss',
    period: '',
    description: 'Skräddarsydd lösning för större företag',
    features: [
      'Ett större projekt med tydlig projektledning',
      'Lösningar anpassade efter er verksamhet och era flöden',
      'Stöd för mer avancerad funktionalitet vid behov',
      'En dedikerad kontakt och långsiktigt samarbete',
      'Avtal och upplägg anpassade efter omfattning och krav',
    ],
    cta: 'Kontakta oss',
    variant: 'outlined',
  },
];

export function PricingSection() {
  const [isDark, setIsDark] = useState(true); // Default to dark theme first
  const [accentColor, setAccentColor] = useState<string>('blue');

  // Map accent colors to hue-rotate values
  const getHueRotate = (color: string): string => {
    const hueMap: Record<string, string> = {
      blue: '0deg',
      purple: '30deg',
      pink: '90deg',
      red: '120deg',
      orange: '150deg',
      tangerine: '150deg',
      green: '120deg',
      teal: '180deg',
      indigo: '60deg',
      inverse: '0deg',
    };
    return hueMap[color] || '0deg';
  };

  // Detect theme and accent color from document
  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDark(theme === 'dark');
      
      // Get accent color from CSS variable or design.json
      const accentMode = document.documentElement.getAttribute('data-accent-mode');
      if (accentMode === 'inverse') {
        setAccentColor('inverse');
      } else {
        // Try to detect from CSS variable
        const computedStyle = getComputedStyle(document.documentElement);
        const accent500 = computedStyle.getPropertyValue('--foundation-accent-500').trim();
        
        // Map color values to color names (simplified approach)
        // For now, read from design.json via fetch or use a default
        fetch('/design/design.json')
          .then(res => res.json())
          .then(data => {
            setAccentColor(data.globalStyles?.accentColor || 'blue');
          })
          .catch(() => {
            // Fallback: try to detect from CSS
            if (accent500.includes('blue') || accent500.includes('#3B82F6')) {
              setAccentColor('blue');
            } else if (accent500.includes('purple') || accent500.includes('#9333EA')) {
              setAccentColor('purple');
            } else if (accent500.includes('pink') || accent500.includes('#EC4899')) {
              setAccentColor('pink');
            } else {
              setAccentColor('blue');
            }
          });
      }
    };

    // Check initial theme
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'data-accent-mode'],
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
            Hur kan Blimpify hjälpa ditt företag?
            </Display>
          </VStack>

          {/* Pricing Cards */}
          <Grid columns={2} gap="xl" className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                variant={plan.variant}
                padding="lg"
                radius="lg"
                style={{
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  ...(index === 0 ? {
                    backgroundImage: `url(${isDark ? '/assets/cloudy-dark.png' : '/assets/cloudy4.png'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: 'transparent',
                    filter: `hue-rotate(${getHueRotate(accentColor)})`,
                  } : {
                    backgroundColor: 'var(--surface-raised)',
                  }),
                }}
                className={index === 0 ? 'pricing-card-with-bg' : ''}
              >
                {plan.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <Tag variant="accent" surface="vibrant" size="small">
                      Populärast
                    </Tag>
                  </div>
                )}

                <CardContent>
                  <VStack spacing="2xl" style={{ height: '100%', position: 'relative', zIndex: 1 }}>
                    {/* Plan Header */}
                    <VStack spacing="sm">
                      <H3 weight="bold">
                        {plan.name}
                      </H3>
                      <Body size="sm" color="secondary">
                        {plan.description}
                      </Body>
                    </VStack>

                    {/* Price */}
                    <VStack spacing="xs">
                      <HStack spacing="xs" align="baseline">
                        <H2 weight="bold">
                          {plan.price}
                        </H2>
                        {plan.period && (
                          <Body size="md" color="tertiary">
                            {plan.period}
                          </Body>
                        )}
                      </HStack>
                    </VStack>

                    {/* Features */}
                    <VStack spacing="sm" style={{ flex: 1 }}>
                      {plan.features.map((feature, idx) => (
                        <HStack key={idx} spacing="sm">
                          <span 
                            className={index === 0 ? 'pricing-checkmark' : ''}
                            style={{ 
                              color: index === 0 ? undefined : 'var(--success-text)', 
                              flexShrink: 0 
                            }}
                          >
                            ✓
                          </span>
                          <Body size="sm">
                            {feature}
                          </Body>
                        </HStack>
                      ))}
                    </VStack>

                    {/* CTA Button */}
                    {index === 0 ? (
                      <Button
                        variant={plan.popular ? 'primary' : 'secondary'}
                        size="lg"
                        fullWidth
                        href="https://app.blimpify-im.com/waitlist"
                        target="_blank"
                      >
                        {plan.cta}
                      </Button>
                    ) : (
                      <Link href="/contact" style={{ textDecoration: 'none', width: '100%', display: 'block' }}>
                    <Button
                      variant={plan.popular ? 'primary' : 'secondary'}
                      size="lg"
                      fullWidth
                    >
                      {plan.cta}
                    </Button>
                      </Link>
                    )}
                  </VStack>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </VStack>
      </Container>

      {/* Responsive Styles */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /* Text color for standard plan - dark in light mode, white in dark mode - exclude button */
        [data-theme="light"] .pricing-card-with-bg h3:not(button h3),
        [data-theme="light"] .pricing-card-with-bg h2:not(button h2) {
          color: #000000 !important;
        }

        [data-theme="dark"] .pricing-card-with-bg h3:not(button h3),
        [data-theme="dark"] .pricing-card-with-bg h2:not(button h2) {
          color: #ffffff !important;
        }

        [data-theme="light"] .pricing-card-with-bg p:not(button p):not(button *) {
          color: rgba(0, 0, 0, 0.8) !important;
        }

        [data-theme="dark"] .pricing-card-with-bg p:not(button p):not(button *) {
          color: rgba(255, 255, 255, 0.9) !important;
        }

        /* Checkmark color for pricing card with background */
        [data-theme="light"] .pricing-card-with-bg .pricing-checkmark {
          color: #000000 !important;
        }

        [data-theme="dark"] .pricing-card-with-bg .pricing-checkmark {
          color: #ffffff !important;
        }
      `}</style>
    </Section>
  );
}
