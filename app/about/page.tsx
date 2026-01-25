'use client';

import { Section, Container, VStack, H1, Body } from '@blimpify-im/ui';

export default function AboutPage() {
  return (
    <Section>
      <Container>
        <VStack spacing="lg" align="center" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <H1 align="center">Om oss</H1>
          <Body size="lg" color="secondary" align="center">
            Vi på Blimpify hjälper företag att växa digitalt med moderna hemsidor och affärsverktyg.
          </Body>
        </VStack>
      </Container>
    </Section>
  );
}
