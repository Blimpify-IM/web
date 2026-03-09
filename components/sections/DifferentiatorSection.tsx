'use client';

import {
  Section,
  Container,
  VStack,
  H2,
  H3,
  Body,
  Card,
  CardContent,
  Grid,
  FadeIn,
} from '@blimpify-im/ui';

export function DifferentiatorSection() {
  return (
    <Section id="differentiator" style={{ background: 'var(--surface-page)' }}>
      <Container>
        <VStack spacing="3xl">
          <FadeIn direction="up" duration={600}>
            <VStack spacing="md" align="center">
              <H2 weight="bold" align="center">
                Så skiljer Blimpify sig
              </H2>
              <Body size="md" color="secondary" align="center" style={{ maxWidth: '52ch' }}>
                AI, byggverktyg, mallbibliotek – många är riktigt bra. Men om du bara vill få upp en bra hemsida snabbt händer nästan alltid samma sak.
              </Body>
            </VStack>
          </FadeIn>

          <Grid columns={2} gap="xl" className="differentiator-grid">
            <FadeIn direction="up" duration={500} delay={100}>
              <Card variant="outlined" padding="lg" radius="lg" style={{ height: '100%', backgroundColor: 'var(--surface-raised)' }}>
                <CardContent>
                  <VStack spacing="lg">
                    <VStack spacing="sm">
                      <Body size="sm" weight="semibold" color="accent">
                        Blimpify
                      </Body>
                      <H3 weight="bold">
                        Struktur från start – designen går inte att förstöra
                      </H3>
                    </VStack>
                    <Body size="sm" color="secondary">
                      Du börjar från en struktur som redan är genomtänkt. Du ändrar färger, layout och innehåll tills det känns som ditt företag. Varje komponent följer tydliga regler – så designen är i princip omöjlig att förstöra.
                    </Body>
                  </VStack>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="up" duration={500} delay={200}>
              <Card variant="outlined" padding="lg" radius="lg" style={{ height: '100%', backgroundColor: 'var(--surface-raised)' }}>
                <CardContent>
                  <VStack spacing="lg">
                    <VStack spacing="sm">
                      <Body size="sm" weight="semibold" color="tertiary">
                        Många andra verktyg
                      </Body>
                      <H3 weight="bold">
                        Tomt papper och nästan-passande mall
                      </H3>
                    </VStack>
                    <Body size="sm" color="secondary">
                      Man börjar från tomt papper. Hittar en mall som nästan passar. Flyttar runt en logga. Ändrar en font. Justerar lite spacing. Du vet hur det brukar gå – det blir snabbt rörigt och sårbart för misstag.
                    </Body>
                  </VStack>
                </CardContent>
              </Card>
            </FadeIn>
          </Grid>
        </VStack>
      </Container>
      <style jsx global>{`
        .differentiator-grid { align-items: stretch; }
        @media (max-width: 768px) {
          .differentiator-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}
