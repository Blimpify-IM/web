'use client';

import { Section, Container, Box, VStack, Button, H1, Body, Display, Spacer } from '@blimpify-im/ui';
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


      {/* Responsive top spacing - larger on mobile (2.5x), smaller on desktop (1.5x) */}
      <Spacer mobile={1.5} desktop={1} />
      
      {/* Hero Content */}
      <Container
        style={{
          position: 'relative',
          zIndex: 1,
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
              En hemsida du inte behöver tänka på.
            </Display>
            <Body
              size="lg"
              color="secondary"
              align="center"
            >
Blimpify finns för företag som vill fokusera på sin affär, sina kunder och inte på sin hemsida.            </Body>
          </VStack>

          <Button
            variant="accent"
            size="xl"
            href="https://builder.blimpify-im.com"
            style={{
              fontSize: '1.125rem',
            }}
          >
            Var med från början
          </Button>
        </VStack>
      </Container>
      <Container useMediaWidth style={{ position: 'relative', zIndex: 1 }}>
        {/* Dashboard Mockup */}
          <Box style={{ width: '100%'}}>
            <Image
              src="/assets/order.png"
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
