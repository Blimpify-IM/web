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
              Want to be part of it from the start?
            </Display>
          </FadeIn>

          {/* CTA Button */}
          <FadeIn direction="up" duration={600} delay={200}>
            <Button
              variant="accent"
              size="lg"
              href="https://app.blimpify-im.com/sv/signup"
              target="_blank"
            >
              Get Access
            </Button>
          </FadeIn>
        </VStack>
    </Section>
  );
}
