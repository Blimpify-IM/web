'use client';

import {
  Section,
  Container,
  VStack,
  H2,
  Body,
  Badge,
  Accordion,
  AccordionItem,
  Tag,
  Display,
  FadeIn,
} from '@blimpify-im/ui';
import { StructuredData, generateFAQSchema } from '@/lib/seo';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Vad gör Blimpify?',
    answer:
      'Blimpify hjälper företag att skapa och hantera sin webbplats utan att behöva oroa sig för detaljerna. Du delar dina önskemål och mål, vi tar ansvar för design, struktur och genomförande.',
  },
  {
    question: 'Behöver jag kunna design eller teknik?',
    answer:
      'Nej. Du behöver bara beskriva hur du vill att webbplatsen ska se ut och fungera. Vi sköter alla tekniska och designmässiga delar åt dig.',
  },
  {
    question: 'Kan jag göra ändringar själv?',
    answer:
      'Ja, du kan justera mindre saker som text, färger och detaljer själv. Vid större ändringar i struktur eller funktionalitet hjälper vi dig.',
  },
  {
    question: 'När betalar jag för tjänsten?',
    answer:
      'Det är gratis att skapa och skicka in din webbplats. Du betalar först när du väljer att publicera webbplatsen och aktivera ditt medlemskap.',
  },
  {
    question: 'Hur fungerar processen?',
    answer:
      'Du skickar in dina val och önskemål, vi skapar webbplatsen utifrån det och återkommer när den är redo för granskning. När du är nöjd kan du välja att publicera.',
  },
  {
    question: 'Passar Blimpify för alla företag?',
    answer:
      'Blimpify passar perfekt för företag som vet att design och utveckling inte är kärnkompetens och hellre låter specialister ta ansvar för helheten. Du ger riktning och mål, vi sköter design, struktur och genomförande.',
  },
];

export function FAQSection() {
  return (
    <Section
      id="faq"
      style={{
        background: 'var(--surface-page)',
      }}
    >
      <StructuredData data={generateFAQSchema(faqs)} />
      <Container >
        <VStack spacing="3xl">
          {/* Header */}
          <FadeIn direction="up" duration={700}>
            <VStack spacing="md">
              <Display size='md' align="center">
                Vanliga frågor
              </Display>
            </VStack>
          </FadeIn>

          {/* FAQ List using Accordion */}
          <FadeIn direction="up" duration={600} delay={200}>
            <Accordion
              selectionMode="single"
              radius="md"
              radiusMode="edges"
              variant="borderless"
              gap="lg"
              showIndicator={true}
              defaultExpandedKeys={['0']}
            >
              {faqs.map((faq, index) => (
                <AccordionItem key={index} itemKey={String(index)} title={faq.question}>
                  <Body size="md" style={{ lineHeight: 1.6 }}>
                    {faq.answer}
                  </Body>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </VStack>
      </Container>
    </Section>
  );
}
