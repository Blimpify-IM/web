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
} from '@blimpify-im/ui';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Vad gör Blimpify?',
    answer:
      'Blimpify hjälper företag att ta fram och hantera sin hemsida utan att behöva tänka på helheten. Du delar dina önskemål och mål – vi tar ansvar för design, struktur och genomförande.',
  },
  {
    question: 'Behöver jag kunna design eller teknik?',
    answer:
      'Nej. Du behöver bara beskriva hur du vill att hemsidan ska kännas och fungera. Vi tar hand om det tekniska och designmässiga åt dig.',
  },
  {
    question: 'Kan jag göra ändringar själv?',
    answer:
      'Ja, du kan justera mindre saker som text, färger och detaljer själv. När det gäller större ändringar i struktur eller funktionalitet hjälper vi dig.',
  },
  {
    question: 'När betalar jag för tjänsten?',
    answer:
      'Det är gratis att skapa och skicka in din hemsida. Du betalar först när du väljer att publicera hemsidan och aktivera medlemskapet.',
  },
  {
    question: 'Hur går processen till?',
    answer:
      'Du skickar in dina val och önskemål, vi tar fram hemsidan utifrån det och återkommer när den är redo att granskas. När du är nöjd kan du välja att publicera.',
  },
  {
    question: 'Passar Blimpify alla företag?',
    answer:
      'Blimpify passar företag som vet att design och utveckling inte är deras kärnkompetens och som hellre låter specialister ta ansvar för helheten. Du bidrar med riktning och mål – vi tar hand om design, struktur och genomförande.',
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
      <Container >
        <VStack spacing="3xl">
          {/* Header */}
          <VStack spacing="md">
            <Display size='md' align="center">
              Vanliga Frågor
            </Display>
          </VStack>

          {/* FAQ List using Accordion */}
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
        </VStack>
      </Container>
    </Section>
  );
}
