'use client';

import {
  Section,
  Container,
  VStack,
  H2,
  Body,
  FadeIn,
} from '@blimpify-im/ui';
import { EditorPreviewBlock } from '@/components/editor-preview/EditorPreviewBlock';

export function EditorPreview() {
  return (
    <Section
      style={{
        background: 'var(--surface-page)',
      }}
    >
      <Container>
        <VStack spacing="3xl">
          <FadeIn direction="up" duration={600}>
            <VStack spacing="md" align="center">
              <H2 weight="bold" align="center">
                Design utan att vara designer
              </H2>
              <Body size="sm" color="secondary" align="center">
                Redigera innehållet i panelen till höger – förhandsgranskningen uppdateras direkt.
              </Body>
            </VStack>
          </FadeIn>

          <FadeIn direction="up" duration={600} delay={100}>
            <div
              style={{
                width: '100vw',
                position: 'relative',
                left: '50%',
                marginLeft: '-50vw',
                paddingLeft: 'var(--foundation-space-4)',
                paddingRight: 'var(--foundation-space-4)',
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  maxWidth: 1280,
                  margin: '0 auto',
                  minWidth: 0,
                }}
              >
                <EditorPreviewBlock variant="structure" large fullHeight />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" duration={500} delay={200}>
            <Body size="md" align="center" color="secondary">
              You change content. The structure stays balanced.
            </Body>
          </FadeIn>
        </VStack>
      </Container>
    </Section>
  );
}
