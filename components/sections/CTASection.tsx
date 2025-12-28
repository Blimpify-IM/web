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
              Redo att komma igång?
            </H2>
            <Body size="lg" color="secondary" align="center">
              Skapa ditt konto idag och få din professionella hemsida inom 30 dagar.
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
                  Kom igång
                </Button>
              </HStack>
              <Body size="sm" color="tertiary" align="center">
                Ta chansen nu innan platserna tar slut!
              </Body>
            </VStack>
          </form>
        </VStack>
      </Container>
    </Section>
  );
}
