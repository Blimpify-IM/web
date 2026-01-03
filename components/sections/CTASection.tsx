'use client';

import {
  Section,
  Container,
  VStack,
  H2,
  Body,
  Button,
} from '@blimpify-im/ui';

export function CTASection() {

  return (
    <Section
      id="cta"
      
      style={{
        background: 'var(--surface-raised)',
      }}
    >
      <Container useFormWidth>
        <VStack spacing="2xl" align="center">
          {/* Header */}
          <VStack spacing="md" align="center">
            <H2 weight="bold" align="center">
            Vill du vara med från början?
            </H2>
            <Body size="md" color="secondary" align="center">
            Blimpify öppnar snart för ett begränsat antal tidiga medlemmar
            som vill vara med och forma hur tjänsten utvecklas.
            </Body>
          </VStack>

          {/* CTA Button */}
          <VStack spacing="md" align="center" style={{ width: '100%', maxWidth: '500px' }}>
            <Button
              variant="accent"
              size="lg"
              href="https://app.blimpify-im.com/waitlist"
              target="_blank"
            >
              Häng med
            </Button>
            <Body size="sm" color="tertiary" align="center">
              Early access • Begränsat antal platser • Ingen betalning nu
            </Body>
          </VStack>
        </VStack>
      </Container>
    </Section>
  );
}
