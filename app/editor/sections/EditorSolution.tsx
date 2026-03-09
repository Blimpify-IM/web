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

const cards = [
  {
    title: 'Struktur först',
    text: 'Du börjar från en genomtänkt layout istället för en tom sida.',
  },
  {
    title: 'Design som håller',
    text: 'Spacing, typografi och layout är redan balanserad.',
  },
  {
    title: 'Publicera direkt',
    text: 'Redigera och publicera din sida på några minuter.',
  },
];

export function EditorSolution() {
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
                Blimpify börjar från struktur
              </H2>
              <Body size="md" color="secondary" align="center" style={{ maxWidth: '52ch' }}>
                Varje sektion i Blimpify har inbyggda designregler. Du fyller i
                innehållet – strukturen är redan på plats.
              </Body>
            </VStack>
          </FadeIn>

          <Grid columns={{ base: 1, sm: 2, lg: 3 }} gap="xl" className="editor-solution-grid">
            {cards.map((item, i) => (
              <FadeIn key={item.title} direction="up" duration={500} delay={i * 80}>
                <Card
                  variant="outlined"
                  padding="lg"
                  radius="lg"
                  style={{
                    height: '100%',
                    backgroundColor: 'var(--surface-raised)',
                  }}
                >
                  <CardContent>
                    <VStack spacing="md">
                      <Body size="md" weight="semibold">
                        {item.title}
                      </Body>
                      <Body size="sm" color="secondary">
                        {item.text}
                      </Body>
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
