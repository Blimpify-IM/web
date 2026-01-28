'use client';

import {
  Section,
  Container,
  VStack,
  H2,
  Body,
  Button,
  Display,
} from '@blimpify-im/ui';
import { useAppUrl } from '@/utils/i18n';

export function CTASection() {
  const getAppUrl = useAppUrl();

  return (
    <Section
      id="cta"
      
      style={{
        background: 'var(--surface-page)',
      }}
    >
        <VStack spacing="lg" align="center">
          {/* Header */}
          <Display size='md' align="center">
            Vill du vara med från början?
          </Display>

          {/* CTA Button */}
          <Button
            variant="accent"
            size="lg"
            href={getAppUrl('/waitlist')}
            target="_blank"
          >
            Få tillgång
          </Button>
        </VStack>
    </Section>
  );
}
