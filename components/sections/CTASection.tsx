'use client';

import { useState } from 'react';
import {
  Section,
  Container,
  VStack,
  HStack,
  H2,
  Body,
  Input,
  Button,
} from '@blimpify-im/ui';
import { Icon } from 'lucide-react';

export function CTASection() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Implement signup logic
    setTimeout(() => {
      console.log('Signup with email:', email);
      setLoading(false);
      setEmail('');
    }, 1500);
  };

  return (
    <Section
      id="cta"
      
      style={{
        background: 'var(--surface-raised)',
      }}
    >
      <Container useFormWidth>
        <VStack spacing="2xl" align="center">
          {/* Header */}
          <VStack spacing="md" align="center">
            <H2 weight="bold" align="center">
            Vill du vara med från början?
            </H2>
            <Body size="md" color="secondary" align="center">
            Blimpify öppnar snart för ett begränsat antal tidiga medlemmar
            som vill vara med och forma hur tjänsten utvecklas.
            </Body>
          </VStack>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '500px' }}>
            <VStack spacing="md">
              <HStack >
                <Input
                  type="email"
                  placeholder="din@email.se"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                 
                  size="lg"
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={loading}
                  disabled={!email}
                >
                  Häng med
                </Button>
              </HStack>
              <Body size="sm" color="tertiary" align="center">
              Early access • Begränsat antal platser • Ingen betalning nu
              </Body>
            </VStack>
          </form>
        </VStack>
      </Container>
    </Section>
  );
}
