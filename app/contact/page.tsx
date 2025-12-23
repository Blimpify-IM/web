'use client'
import { Section, Container, VStack, H1, Body } from '@blimpify-im/ui';

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <VStack spacing="lg" align="center" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <H1 align="center">Kontakta oss</H1>
          <Body size="lg" color="secondary" align="center">
            Kontakta oss för att diskutera ditt projekt.
          </Body>
        </VStack>
      </Container>
    </Section>
  );
}
