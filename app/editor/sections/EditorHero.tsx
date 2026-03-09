'use client';

import {
  Section,
  Container,
  VStack,
  Typography,
  Body,
  Button,
  FadeIn,
} from '@blimpify-im/ui';
import { getSignupUrl } from '@/lib/dashboard-url';

export function EditorHero() {
  return (
    <Section
      style={{
        background: 'var(--surface-page)',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <VStack spacing="xl" align="center">
          <VStack spacing="lg" align="center" style={{ maxWidth: '720px' }}>
            <FadeIn direction="up" duration={700}>
              <Typography
                as="h1"
                variant="display-lg"
                align="center"
              >
                En editor byggd för företagssidor
              </Typography>
            </FadeIn>
            <FadeIn direction="up" duration={700} delay={150}>
              <Body size="lg" align="center" color="secondary">
                Blimpify börjar inte från ett tomt dokument. Du börjar från en
                genomtänkt struktur och ändrar bara innehållet.
              </Body>
            </FadeIn>
          </VStack>
          <FadeIn direction="up" duration={600} delay={300}>
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
