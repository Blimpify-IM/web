'use client';

import {
  Section,
  Container,
  VStack,
  H2,
  Body,
  Button,
  Display,
  FadeIn,
} from '@blimpify-im/ui';

export function CTASection() {

  return (
    <Section
      id="cta"
      
      style={{
        background: 'var(--surface-page)',
      }}
    >
        <VStack spacing="lg" align="center">
          {/* Header */}
          <FadeIn direction="up" duration={700}>
            <Display size='md' align="center">
              Vill du vara med från början?
            </Display>
          </FadeIn>

          {/* CTA Button */}
          <FadeIn direction="up" duration={600} delay={200}>
            <Button
              variant="accent"
              size="lg"
              href="https://app.blimpify-im.com/waitlist"
              target="_blank"
            >
              Få tillgång
            </Button>
          </FadeIn>
        </VStack>
    </Section>
  );
}
