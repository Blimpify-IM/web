'use client';

import { useState, useEffect } from 'react';
import { Section, Container, Box, VStack, Button, H1, Body, Display, Spacer } from '@blimpify-im/ui';
import Image from 'next/image';

export function HeroSection() {
  const [isDark, setIsDark] = useState(true); // Default to dark theme first

  // Detect theme from document
  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDark(theme === 'dark');
    };

    // Check initial theme
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);
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
              className="hero-display-responsive"
            >
              En hemsida du inte<br />behöver tänka på
            </Display>
            <Body
              size="lg"
              color="secondary"
              align="center"
              className="hero-body-responsive"
            >
Blimpify finns för företag som vill fokusera på sin affär, sina kunder och inte på sin hemsida.            </Body>
          </VStack>

          <Button
            variant="accent"
            size="xl"
            href="https://app.blimpify-im.com/waitlist"
            target="_blank"
            style={{
              fontSize: '1.125rem',
            }}
          >
            Var med ifrån början
          </Button>
        </VStack>
      </Container>
      <Container useMediaWidth style={{ position: 'relative', zIndex: 1 }}>
        {/* Dashboard Mockup */}
          <Box style={{ width: '100%'}}>
            <Image
              src={isDark ? '/assets/order-dark.png' : '/assets/order.png'}
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

      {/* Responsive styles for hero text */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .hero-display-responsive {
            font-size: var(--font-display-md-size) !important;
            line-height: var(--font-display-md-leading) !important;
          }
          
          .hero-body-responsive {
            font-size: var(--font-body-md-size) !important;
            line-height: var(--font-body-md-leading) !important;
          }
        }
        
        @media (max-width: 480px) {
          .hero-display-responsive {
            font-size: var(--font-display-sm-size) !important;
            line-height: var(--font-display-sm-leading) !important;
          }
        }
      `}</style>
    </Section>
  );
}
