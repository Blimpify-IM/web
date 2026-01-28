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
import { StructuredData, generateFAQSchema } from '@/lib/seo';
import { useTranslation, type Locale } from '@/utils/i18n';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection({ translations }: { translations?: Record<Locale, any> }) {
  const { t } = useTranslation(translations);

  const faqs: FAQItem[] = [
    {
      question: t('faq.items.0.question'),
      answer: t('faq.items.0.answer'),
    },
    {
      question: t('faq.items.1.question'),
      answer: t('faq.items.1.answer'),
    },
    {
      question: t('faq.items.2.question'),
      answer: t('faq.items.2.answer'),
    },
    {
      question: t('faq.items.3.question'),
      answer: t('faq.items.3.answer'),
    },
    {
      question: t('faq.items.4.question'),
      answer: t('faq.items.4.answer'),
    },
    {
      question: t('faq.items.5.question'),
      answer: t('faq.items.5.answer'),
    },
  ];
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
          <VStack spacing="md">
            <Display size='md' align="center">
              {t('faq.title')}
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
