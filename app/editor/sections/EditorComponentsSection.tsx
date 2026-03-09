'use client';

import {
  Section,
  Container,
  VStack,
  H2,
  Body,
  Card,
  CardContent,
  Grid,
  FadeIn,
} from '@blimpify-im/ui';
import { SectionPreviewMini, SECTION_TYPES } from '@/components/editor-preview/SectionPreviewMini';

export function EditorComponentsSection() {
  return (
    <Section
      style={{
        background: 'var(--surface-ground)',
      }}
    >
      <Container>
        <VStack spacing="3xl">
          <FadeIn direction="up" duration={600}>
            <VStack spacing="md" align="center">
              <H2 weight="bold" align="center">
                Byggt på genomtänkta sektioner
              </H2>
              <Body size="md" color="secondary" align="center" style={{ maxWidth: '52ch' }}>
                Blimpify-sidor byggs av strukturerade komponenter. Varje
                sektionstyp har en tydlig roll och följer samma designregler.
              </Body>
            </VStack>
          </FadeIn>

          <Grid columns={{ base: 1, sm: 2, lg: 4 }} gap="lg" className="editor-components-grid">
            {SECTION_TYPES.map((name, i) => (
              <FadeIn key={name} direction="up" duration={500} delay={i * 50}>
                <Card
                  variant="outlined"
                  padding="md"
                  radius="md"
                  style={{
                    height: '100%',
                    backgroundColor: 'var(--surface-raised)',
                  }}
                >
                  <CardContent>
                    <VStack spacing="sm">
                      <Body size="sm" weight="semibold">
                        {name}
                      </Body>
                      <SectionPreviewMini type={name} compact />
                    </VStack>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Section>
  );
}
