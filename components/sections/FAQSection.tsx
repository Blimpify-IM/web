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
    question: 'What does Blimpify do?',
    answer:
      'Blimpify helps businesses create and manage their website without having to worry about the details. You share your wishes and goals – we take responsibility for design, structure, and execution.',
  },
  {
    question: 'Do I need to know design or technology?',
    answer:
      'No. You only need to describe how you want your website to look and function. We handle all the technical and design aspects for you.',
  },
  {
    question: 'Can I make changes myself?',
    answer:
      'Yes, you can adjust minor things like text, colors, and details yourself. For larger changes in structure or functionality, we help you.',
  },
  {
    question: 'When do I pay for the service?',
    answer:
      'It\'s free to create and submit your website. You only pay when you choose to publish the website and activate your membership.',
  },
  {
    question: 'How does the process work?',
    answer:
      'You submit your choices and preferences, we create the website based on that and get back to you when it\'s ready for review. When you\'re satisfied, you can choose to publish.',
  },
  {
    question: 'Is Blimpify suitable for all businesses?',
    answer:
      'Blimpify is perfect for businesses that know design and development isn\'t their core competency and prefer to let specialists take responsibility for the whole picture. You provide direction and goals – we handle design, structure, and execution.',
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
                Frequently Asked Questions
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
