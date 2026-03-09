'use client';

import {
  Section,
  Container,
  VStack,
  Display,
  Body,
  Button,
  FadeIn,
} from '@blimpify-im/ui';
import { getSignupUrl } from '@/lib/dashboard-url';

export function EditorCta() {
  return (
    <Section
      style={{
        background: 'var(--surface-ground)',
      }}
    >
      <Container>
        <VStack spacing="xl" align="center">
          <FadeIn direction="up" duration={600}>
            <VStack spacing="md" align="center" style={{ maxWidth: '560px' }}>
              <Display size="md" align="center">
                Skapa din hemsida gratis
              </Display>
              <Body size="lg" align="center" color="secondary">
                Kom igång med Blimpify och bygg en hemsida som redan är rätt
                från start.
              </Body>
            </VStack>
          </FadeIn>
          <FadeIn direction="up" duration={600} delay={150}>
            <Button
              variant="accent"
              size="xl"
              href={getSignupUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Kom igång
            </Button>
          </FadeIn>
        </VStack>
      </Container>
    </Section>
  );
}
