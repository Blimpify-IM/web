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
} from '@blimpify-im/ui';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Hur skiljer ni er från Wix, Squarespace och Webflow?',
    answer:
      'Aldrig trasig design. Hos oss kan du inte publicera en tom eller ful sida. Du väljer bara sektioner och färger, och vi bygger automatiskt en hemsida som alltid ser professionell ut.',
  },
  {
    question: 'Kan jag själv ändra min hemsida efteråt?',
    answer:
      'Ja. Du får en dashboard där du enkelt kan uppdatera text, byta bilder och sektioner – utan att riskera designen.',
  },
  {
    question: 'Hur lång tid tar det att få en färdig hemsida?',
    answer:
      'Du får din första version inom 30 dagar. Därefter gör vi eventuella justeringar tills du är nöjd.',
  },
  {
    question: 'Vad händer om jag inte gillar resultatet?',
    answer:
      'Vi erbjuder fria revisioner och en nöjd-kund-garanti. Om du fortfarande inte är nöjd får du pengarna tillbaka.',
  },
  {
    question: 'Vilka funktioner ingår idag?',
    answer:
      'Alla hemsidor kommer med kontaktformulär, mobilanpassning och support. Snart släpper vi bokning, e-handel och fler smarta verktyg.',
  },
  {
    question: 'Äger jag min hemsida?',
    answer:
      'Ja. När din hemsida är byggd äger du den till 100 %. Du kan hosta hos oss eller ta med den till en annan leverantör. Vill du avsluta tjänsten hos oss så får du tillgång till koden',
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
          <VStack spacing="md" align="center">
            <Tag>FAQ</Tag>
            <H2 weight="bold" align="center">
              Vanliga Frågor
            </H2>
          </VStack>

          {/* FAQ List using Accordion */}
          <Accordion
            selectionMode="single"
            radius="md"
            radiusMode="edges"
            variant="borderless"
            gap="none"
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
