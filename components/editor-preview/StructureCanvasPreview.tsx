'use client';

/**
 * Visar riktiga sektioner byggda med blimpify-ui.
 * Tar emot innehåll + designval – uppdateras live från höger sidebar.
 */
import React from 'react';
import {
  Section,
  Container,
  VStack,
  H2,
  Body,
  Button,
  Card,
  CardContent,
  Label,
} from '@blimpify-im/ui';
import type { ButtonVariant, CardVariant, CardRadius, SectionSpacing } from './StructureEditorSidebar';

export interface StructureCanvasPreviewProps {
  heroHeadline?: string;
  heroSubtext?: string;
  contentHeading?: string;
  contentBody?: string;
  testimonialQuote?: string;
  testimonialAuthor?: string;
  ctaHeading?: string;
  buttonVariant?: ButtonVariant;
  cardVariant?: CardVariant;
  cardRadius?: CardRadius;
  sectionSpacing?: SectionSpacing;
}

const defaults = {
  heroHeadline: 'Din rubrik här',
  heroSubtext: 'Undertext som beskriver erat erbjudande. Redigera i panelen till höger.',
  contentHeading: 'Så funkar det',
  contentBody: 'Varje sektion har inbyggd struktur. Du byter bara text och bilder – layouten håller.',
  testimonialQuote: 'Blimpify gjorde att vi kunde lansera hemsidan på en dag.',
  testimonialAuthor: '— Kund, Företag AB',
  ctaHeading: 'Redo att komma igång?',
  buttonVariant: 'accent' as ButtonVariant,
  cardVariant: 'outlined' as CardVariant,
  cardRadius: 'md' as CardRadius,
  sectionSpacing: 'lg' as SectionSpacing,
};

export function StructureCanvasPreview({
  heroHeadline = defaults.heroHeadline,
  heroSubtext = defaults.heroSubtext,
  contentHeading = defaults.contentHeading,
  contentBody = defaults.contentBody,
  testimonialQuote = defaults.testimonialQuote,
  testimonialAuthor = defaults.testimonialAuthor,
  ctaHeading = defaults.ctaHeading,
  buttonVariant = defaults.buttonVariant,
  cardVariant = defaults.cardVariant,
  cardRadius = defaults.cardRadius,
  sectionSpacing = defaults.sectionSpacing,
}: StructureCanvasPreviewProps) {
  return (
    <div
      style={{
        padding: 'var(--foundation-space-5) var(--foundation-space-6)',
        background: 'var(--surface-base)',
        minHeight: '100%',
      }}
    >
      <Section spacing={sectionSpacing} style={{ background: 'transparent' }}>
        <Container spacing="md">
          <VStack spacing="md" align="center">
            <H2 weight="bold" align="center">
              {heroHeadline}
            </H2>
            <Body size="md" color="secondary" align="center">
              {heroSubtext}
            </Body>
            <Button variant={buttonVariant} size="md">
              Kom igång
            </Button>
          </VStack>
        </Container>
      </Section>

      <Section spacing={sectionSpacing} style={{ background: 'transparent' }}>
        <Container spacing="md">
          <VStack spacing="md">
            <H2 weight="bold">
              {contentHeading}
            </H2>
            <Body size="md" color="secondary">
              {contentBody}
            </Body>
          </VStack>
        </Container>
      </Section>

      <Section spacing={sectionSpacing} style={{ background: 'transparent' }}>
        <Container spacing="md">
          <Card variant={cardVariant} padding="lg" radius={cardRadius}>
            <CardContent>
              <VStack spacing="sm">
                <Body size="md" color="secondary">
                  &quot;{testimonialQuote}&quot;
                </Body>
                <Label size="sm" color="tertiary">
                  {testimonialAuthor}
                </Label>
              </VStack>
            </CardContent>
          </Card>
        </Container>
      </Section>

      <Section spacing={sectionSpacing} style={{ background: 'transparent' }}>
        <Container spacing="md">
          <VStack spacing="md" align="center">
            <Body size="md" weight="semibold" align="center">
              {ctaHeading}
            </Body>
            <Button variant={buttonVariant} size="md">
              Skapa sida
            </Button>
          </VStack>
        </Container>
      </Section>
    </div>
  );
}
