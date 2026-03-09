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
    question: 'Vad är Blimpify?',
    answer:
      'Blimpify är ett verktyg där företag kan skapa och driva en professionell hemsida utan designkunskap.\n\nDu börjar från en färdig struktur och kan enkelt ändra innehåll, bilder, färger och layout tills sidan passar ditt företag.',
  },
  {
    question: 'Behöver jag kunna design eller teknik?',
    answer:
      'Nej.\n\nBlimpify är byggt för företagare, inte designers. Alla komponenter har tydliga regler så att designen alltid håller ihop. Det betyder att du kan ändra innehåll och layout utan att riskera att förstöra designen.',
  },
  {
    question: 'Hur snabbt kan jag skapa en hemsida?',
    answer:
      'Det går väldigt snabbt att komma igång.\n\nNär du skapar ett konto får du direkt en färdig startstruktur med flera sektioner som du kan redigera. Du behöver bara ändra text och bilder för att göra sidan till din egen.',
  },
  {
    question: 'Hostas hemsidan av Blimpify?',
    answer:
      'Ja.\n\nVi hostar din hemsida och hanterar allt tekniskt bakom kulisserna. Du behöver inte tänka på hosting, servrar eller teknisk setup.',
  },
  {
    question: 'Får jag en egen webbadress?',
    answer:
      'Ja.\n\nNär du skapar ett konto får du automatiskt en webbadress på formen dittföretag.onblimpify.com. Den fungerar direkt och din sida kan publiceras direkt.',
  },
  {
    question: 'Kan jag använda min egen domän?',
    answer:
      'Ja.\n\nOm du redan har en domän kan du koppla den till din hemsida. Du kan också köpa en domän direkt genom Blimpify.',
  },
  {
    question: 'Är Blimpify gratis?',
    answer:
      'Ja, du kan skapa och publicera en hemsida gratis på en .onblimpify.com-adress.\n\nBetalplaner används främst för funktioner som egen domän och framtida premiumfunktioner.',
  },
  {
    question: 'Vad kan jag göra med Blimpify?',
    answer:
      'Med Blimpify kan du till exempel: skapa en företagshemsida, presentera dina tjänster, samla leads via kontaktformulär, visa kundreferenser och följa statistik för din hemsida.',
  },
  {
    question: 'Kan jag ändra designen senare?',
    answer:
      'Ja.\n\nDu kan ändra layout, färger och innehåll när som helst. Alla sektioner är byggda för att fungera tillsammans så att sidan fortsätter se bra ut.',
  },
  {
    question: 'För vem är Blimpify byggt?',
    answer:
      'Blimpify är främst byggt för småföretagare, konsulter, startups, frilansare och lokala företag. Alltså personer som vill ha en bra hemsida utan att behöva lägga tid på design eller teknik.',
  },
  {
    question: 'Är Blimpify färdigt?',
    answer:
      'Blimpify är fortfarande under utveckling.\n\nVi jobbar kontinuerligt med att förbättra plattformen och uppskattar all feedback från användare.',
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
                  <VStack spacing="sm">
                    {faq.answer.split(/\n\n+/).map((paragraph, i) => (
                      <Body key={i} size="md">
                        {paragraph.trim()}
                      </Body>
                    ))}
                  </VStack>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </VStack>
      </Container>
    </Section>
  );
}
