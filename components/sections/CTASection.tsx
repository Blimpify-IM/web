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
        background: 'var(--surface-page)',
      }}
    >
      <Container useFormWidth>
        <VStack spacing="xl" align="center">
          {/* Header */}
            <H2 weight="bold" align="center">
            Bli en av de första som använder Blimpify
            </H2>

          {/* CTA Button */}
                <Button
            variant="accent"
                  size="lg"
            href="https://app.blimpify-im.com/waitlist"
            target="_blank"
                >
                  Få tillgång
                </Button>
        </VStack>
      </Container>
    </Section>
  );
}
