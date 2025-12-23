'use client';

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
} from '@blimpify-im/ui';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  variant: 'outlined' | 'elevated' | 'solid';
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Medlemskap',
    price: '490 kr',
    period: '/månad',
    description: 'För företag som vill växa och synas mer',
    features: [
      'Professionell hemsida',
      'Mobilanpassad design',
      'Enkelt CMS',
      'Kontaktformulär',
      'Domänhantering',
      'Avancerad statistik',
      'Priority support',
      'SEO-optimering',
    ],
    popular: true,
    cta: 'Välj Professional',
    variant: 'elevated',
  },
  {
    name: 'Enterprise',
    price: 'Kontakta oss',
    period: '',
    description: 'Skräddarsydd lösning för större företag',
    features: [
      'Allt i Professional',
      'Custom funktioner',
      'Dedikerad support',
      'SLA-garanti',
      'Obegränsade användare',
      'API-integration',
    ],
    cta: 'Kontakta oss',
    variant: 'outlined',
  },
];

export function PricingSection() {
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
            <Tag variant="accent">Priser</Tag>
            <H2 weight="bold" align="center">
              Välj rätt plan för ditt företag
            </H2>
            <Body size="lg" color="secondary" align="center">
              Transparent prissättning utan dolda kostnader. Byt plan när som helst.
            </Body>
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
                }}
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
                  <VStack spacing="2xl" style={{ height: '100%' }}>
                    {/* Plan Header */}
                    <VStack spacing="sm">
                      <H3 weight="bold">{plan.name}</H3>
                      <Body size="sm" color="secondary">
                        {plan.description}
                      </Body>
                    </VStack>

                    {/* Price */}
                    <VStack spacing="xs">
                      <HStack spacing="xs" align="baseline">
                        <H2 weight="bold">{plan.price}</H2>
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
                          <span style={{ color: 'var(--success-text)', flexShrink: 0 }}>
                            ✓
                          </span>
                          <Body size="sm">{feature}</Body>
                        </HStack>
                      ))}
                    </VStack>

                    {/* CTA Button */}
                    <Button
                      variant={plan.popular ? 'primary' : 'secondary'}
                      size="lg"
                      fullWidth
                    >
                      {plan.cta}
                    </Button>
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
      `}</style>
    </Section>
  );
}
