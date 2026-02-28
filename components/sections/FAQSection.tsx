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
      'Blimpify hjälper företag att skapa och hantera sin webbplats utan att behöva oroa sig för detaljerna.',
  },
  {
    question: 'Behöver jag kunna design eller teknik?',
    answer:
      'Nej. Du behöver antingen välja en mall och anpassa den enkelt själv, eller beskriva för oss vad du vill ha – då löser vi det. Allt är uppsatt för enkelhet men med hög kvalitet. Du kan justera saker själv, inte bara små ändringar.',
  },
  {
    question: 'Kan jag göra ändringar själv?',
    answer:
      'Ja. Du kan både göra mindre justeringar själv och vid behov större ändringar – allt är uppsatt så att du har kontroll över det du vill ändra.',
  },
  {
    question: 'När betalar jag för tjänsten?',
    answer:
      'Det är gratis att starta, anpassa och använda tjänsten. För att lansera webbplatsen tillkommer månadskostnaden och medlemskapet.',
  },
  {
    question: 'Hur fungerar processen?',
    answer:
      'Processen fungerar så att du antingen väljer en mall och anpassar den själv, eller beskriver för oss vad du vill ha – då fixar vi det.',
  },
  {
    question: 'Passar Blimpify för alla företag?',
    answer:
      'Blimpify passar för alla företag som vill ha något som är uppsatt rätt från början, fungerar, ser bra ut och stödjer verksamheten.',
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
              defaultExpandedKeys={[]}
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
