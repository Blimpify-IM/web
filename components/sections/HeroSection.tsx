'use client';

import { useState, useEffect } from 'react';
import { Section, Container, Box, VStack, Button, H1, Body, Display, Spacer, FadeIn, Opacity, OverflowContainer } from '@blimpify-im/ui';
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
      overflow="visible"
      overflowX="clip"
      style={{
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      {/* Cloud layer - transparent PNG */}
      <div
        className="hero-clouds"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(/assets/${isDark ? 'trans-cloud-dark.png' : 'trans-cloud.png'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* Color tint layer - controlled by accent color tokens */}
      <div
        className="hero-tint"
        style={{
          position: 'absolute',
          inset: 0,
          background: isDark
            ? `
              radial-gradient(
                ellipse 200% 150% at top left,
                var(--foundation-accent-700) 0%,
                transparent 25%
              ),
              radial-gradient(
                ellipse 200% 150% at top right,
                var(--foundation-accent-800) 0%,
                transparent 25%
              )
            `
            : `
              radial-gradient(
                ellipse 200% 150% at top left,
                var(--foundation-accent-200) 0%,
                transparent 30%
              ),
              radial-gradient(
                ellipse 200% 150% at top right,
                var(--foundation-accent-200) 0%,
                transparent 30%
              )
            `,
          opacity: isDark ? 0.3 : 0.45,
          zIndex: 2,
          mixBlendMode: isDark ? 'overlay' : 'multiply',
          pointerEvents: 'none',
        }}
      />

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
          <VStack spacing="lg" align="center" style={{ maxWidth: '850px' }}>
            <FadeIn direction="up" duration={800} delay={0} enableScrollTrigger={false}>
              <Display
                size='xl'
                align="center"
                className="hero-display-responsive"
              >
                <span className="hero-text-desktop">En hemsida skapad åt dig<br />inte av dig</span>
                <span className="hero-text-mobile">En hemsida åt dig<br />inte av dig</span>
              </Display>
            </FadeIn>
            <FadeIn direction="up" duration={800} delay={200} enableScrollTrigger={false}>
              <Body
                size="lg"
                align="center"
                className="hero-body-responsive"
              >
                Du sätter riktningen. Vi tar ansvar för design, struktur och helhet.
              </Body>
            </FadeIn>
          </VStack>

          <FadeIn direction="up" duration={600} delay={400} enableScrollTrigger={false}>
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
          </FadeIn>
        </VStack>
      </Container>
      <Container useMediaWidth style={{ position: 'relative', zIndex: 1, overflow: 'visible' }}>
        {/* Dashboard Mockup */}
        <Opacity duration={1000} delay={600} enableScrollTrigger={false}>
          <OverflowContainer direction="right" spillAmount={200} className="hero-overflow">
            <Box
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                padding: 'var(--foundation-space-4)',
              }}
            >
              <Box
                style={{
                  position: 'relative',
                  zIndex: 1,
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  padding: 'var(--foundation-space-3)',
                  backgroundColor: 'transparent',
                }}
              >
                <Image
                  src={isDark ? '/assets/hero-dark.png' : '/assets/hero.png'}
                  alt="Website Builder Interface"
                  width={4500}
                  height={2675}
                  priority
                  className="hero-image"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: 'var(--shadow-strong)',
                    backgroundColor: 'var(--surface-page)',
                  }}
                />
              </Box>
            </Box>
          </OverflowContainer>
        </Opacity>
      </Container>

      {/* Responsive styles for hero text and clouds */}
      <style jsx global>{`
        .hero-text-desktop {
          display: block;
        }
        
        .hero-text-mobile {
          display: none;
        }
        
        /* Desktop: disable overflow spill on hero image */
        @media (min-width: 769px) {
          .hero-overflow {
            width: 100% !important;
            margin-right: 0 !important;
          }
        }

        @media (max-width: 768px) {
          .hero-display-responsive {
            font-size: var(--font-display-md-size) !important;
            line-height: var(--font-display-md-leading) !important;
          }
          
          .hero-body-responsive {
            font-size: var(--font-body-md-size) !important;
            line-height: var(--font-body-md-leading) !important;
          }
          
          .hero-clouds {
            background-size: 150% auto !important;
            background-position: top center !important;
          }
          
          .hero-text-desktop {
            display: none;
          }
          
          .hero-text-mobile {
            display: block;
          }
          
          .hero-image {
            border-radius: var(--radius-sm) !important;
          }
        }
        
        @media (max-width: 480px) {
          .hero-display-responsive {
            font-size: var(--font-display-sm-size) !important;
            line-height: var(--font-display-sm-leading) !important;
          }
          
          .hero-clouds {
            background-size: 200% auto !important;
            background-position: top center !important;
          }
        }

        

      `}</style>
    </Section>
  );
}
