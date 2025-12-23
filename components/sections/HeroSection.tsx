'use client';

import { Section, Container, Box, VStack, Button, H1, Body, Display } from '@blimpify-im/ui';
import Image from 'next/image';

export function HeroSection() {
  return (
    <Section
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
      }}
    >

      {/* Hero Content */}
      <Container
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <VStack spacing="xl" align="center">
          <VStack spacing="lg" align="center" style={{ maxWidth: '800px' }}>
            <Display 
              size='xl'
              align="center"
            >
              Plattformen för tjänsteföretag. 
            </Display>
            <Body
              size="xl"
              color="secondary"
              align="center"
            >
              Hemsida och affärsverktyg – på ett ställe.
            </Body>
          </VStack>

          <Button
            variant="accent"
            size="xl"
            href="https://builder.blimpify-im.com"
            style={{
              fontSize: '1.125rem',
            }}
          >
            Starta ditt projekt
          </Button>
        </VStack>
      </Container>
      <Container useMediaWidth>
        {/* Dashboard Mockup */}
          <Box style={{ width: '100%'}}>
            <Image
              src="/assets/splithero.png"
              alt="Website Builder Interface"
              width={4500}
              height={2675}
              priority
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 'var(--selected-radius-scale-md)',
                boxShadow: 'var(--shadow-strong)',
              }}
            />
          </Box>
      </Container>
    </Section>
  );
}
