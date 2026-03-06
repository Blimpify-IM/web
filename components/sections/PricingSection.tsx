'use client';

import { useState } from 'react';
import {
  Section,
  Container,
  VStack,
  HStack,
  H1,
  H3,
  Body,
  Button,
  Card,
  CardContent,
  Grid,
  Display,
  FadeIn,
  SegmentedControl,
} from '@blimpify-im/ui';
import { getSignupUrl, getDashboardUrl } from '@/lib/dashboard-url';
import { startProCheckout } from '@/lib/checkout';
import { useLandingSession } from '@/hooks/useLandingSession';

const PRO_MONTHLY = 290;
const PRO_YEARLY_PER_MONTH = 218;

const FREE_FEATURES = [
  'Full redigerare',
  'Publicera webbplats',
  'Blimpify-subdomän',
];

const PRO_FEATURES = [
  'Allt i Free',
  'Egen domän (custom domain)',
];

function PricingCardFree({
  isLoggedIn,
  dashboardUrl,
}: {
  isLoggedIn: boolean;
  dashboardUrl: string;
}) {
  return (
    <Card
      variant="outlined"
      padding="lg"
      radius="lg"
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--surface-raised)',
      }}
    >
      <CardContent>
        <VStack spacing="2xl" style={{ height: '100%' }}>
          <VStack spacing="sm">
            <H3 weight="bold">Free</H3>
            <Body size="sm" color="secondary">
              Kom igång direkt med allt du behöver för en publik webbplats.
            </Body>
          </VStack>

          <VStack spacing="xs">
            <H1 weight="bold">0 kr</H1>
            <Body size="sm" color="tertiary">/månad</Body>
            <Body size="xs" color="secondary">Ingen betalning krävs</Body>
          </VStack>

          <VStack spacing="sm" style={{ flex: 1 }}>
            {FREE_FEATURES.map((text, i) => (
              <HStack key={i} spacing="sm" align="start">
                <span className="pricing-checkmark" aria-hidden>✓</span>
                <Body size="sm">{text}</Body>
              </HStack>
            ))}
          </VStack>

          <Button
            variant="secondary"
            size="lg"
            fullWidth
            href={isLoggedIn ? dashboardUrl : getSignupUrl('free')}
          >
            Kom igång
          </Button>
        </VStack>
      </CardContent>
    </Card>
  );
}

function PricingCardPro({
  billingPeriod,
  isLoggedIn,
  onCheckoutStart,
  checkoutLoading,
}: {
  billingPeriod: 'monthly' | 'yearly';
  isLoggedIn: boolean;
  onCheckoutStart: () => void;
  checkoutLoading: boolean;
}) {
  const price = billingPeriod === 'monthly' ? PRO_MONTHLY : PRO_YEARLY_PER_MONTH;
  const showYearlyDiscount = billingPeriod === 'yearly';

  return (
    <Card
      variant="outlined"
      padding="lg"
      radius="lg"
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--surface-raised)',
        borderColor: 'var(--border-default)',
      }}
    >
      <CardContent>
        <VStack spacing="2xl" style={{ height: '100%' }}>
          <VStack spacing="sm">
            <H3 weight="bold">Pro</H3>
            <Body size="sm" color="secondary">
              Egen domän för ett mer professionellt intryck.
            </Body>
          </VStack>

          <VStack spacing="xs">
            <HStack spacing="xs" align="baseline">
              <H1 weight="bold">{price} kr</H1>
              <Body size="md" color="tertiary">/mån</Body>
            </HStack>
            <Body
              size="sm"
              color="secondary"
              style={{ minHeight: '1.25rem', visibility: showYearlyDiscount ? 'visible' : 'hidden' }}
            >
              {showYearlyDiscount ? 'Rabatt vid årsbetalning' : '\u00A0'}
            </Body>
          </VStack>

          <VStack spacing="sm" style={{ flex: 1 }}>
            {PRO_FEATURES.map((text, i) => (
              <HStack key={i} spacing="sm" align="start">
                <span className="pricing-checkmark" aria-hidden>✓</span>
                <Body size="sm">{text}</Body>
              </HStack>
            ))}
          </VStack>

          {isLoggedIn ? (
            <Button
              variant="accent"
              size="lg"
              fullWidth
              loading={checkoutLoading}
              disabled={checkoutLoading}
              onClick={onCheckoutStart}
            >
              Kom igång
            </Button>
          ) : (
            <Button
              variant="accent"
              size="lg"
              fullWidth
              href={getSignupUrl('pro', billingPeriod)}
            >
              Kom igång
            </Button>
          )}
        </VStack>
      </CardContent>
    </Card>
  );
}

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('yearly');
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const { user: sessionUser } = useLandingSession();
  const isLoggedIn = Boolean(sessionUser);
  const dashboardUrl = sessionUser ? getDashboardUrl(sessionUser.role) : getSignupUrl('free');

  const handleProCheckout = async () => {
    setCheckoutLoading(true);
    try {
      const url = await startProCheckout(billingPeriod);
      window.location.href = url;
    } catch (err) {
      setCheckoutLoading(false);
      console.error('[PricingSection] Checkout failed:', err);
      alert(err instanceof Error ? err.message : 'Kunde inte starta betalning. Försök igen eller gå till Inställningar i dashboarden.');
    }
  };

  return (
    <Section
      id="pricing"
      style={{ background: 'var(--surface-page)' }}
    >
      <Container>
        <VStack spacing="3xl">
          <FadeIn direction="up" duration={700}>
            <VStack spacing="lg" align="center">
              <Display size="md" align="center">
                Priser
              </Display>
              <VStack spacing="sm" align="center">
                <Body size="sm" color="secondary">
                  Enkel modell: Free ger full redigerare och publicering. Pro ger egen domän.
                </Body>
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

          <Grid columns={2} gap="xl" className="pricing-grid">
            <FadeIn direction="up" duration={600} delay={100}>
              <PricingCardFree isLoggedIn={isLoggedIn} dashboardUrl={dashboardUrl} />
            </FadeIn>
            <FadeIn direction="up" duration={600} delay={200}>
              <PricingCardPro
                billingPeriod={billingPeriod}
                isLoggedIn={isLoggedIn}
                onCheckoutStart={handleProCheckout}
                checkoutLoading={checkoutLoading}
              />
            </FadeIn>
          </Grid>

          {/* Anpassat behov – samma som tidigare */}
          <FadeIn direction="up" duration={600} delay={300}>
            <Card
              variant="outlined"
              padding="lg"
              radius="lg"
              style={{
                backgroundColor: 'var(--surface-raised)',
              }}
            >
              <CardContent>
                <VStack spacing="md" align="center">
                  <VStack spacing="xs" align="center">
                    <H3 weight="bold" align="center">Anpassat behov</H3>
                    <Body size="sm" color="secondary" align="center">
                      Vill ni ha en mer komplicerad eller omfattande lösning? Boka ett möte.
                    </Body>
                  </VStack>
                  <Button
                    variant="secondary"
                    size="lg"
                    href="https://calendly.com/admin-blimpify/vv-digital-media"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Boka möte
                  </Button>
                </VStack>
              </CardContent>
            </Card>
          </FadeIn>
        </VStack>
      </Container>

      <style jsx global>{`
        [data-theme="light"] .pricing-checkmark { color: #000000 !important; }
        [data-theme="dark"] .pricing-checkmark { color: #ffffff !important; }
        .pricing-checkmark { flex-shrink: 0; }
        .pricing-grid { align-items: stretch; }
        @media (max-width: 768px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}
