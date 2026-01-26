'use client';

import { useState, useEffect } from 'react';
import { Section, Container, Box, VStack, Button, H1, Body, Display, Spacer, FadeIn, Opacity } from '@blimpify-im/ui';
import Image from 'next/image';

export function HeroSection() {
  const [isDark, setIsDark] = useState(true); // Default to dark theme first
  const [accentColor, setAccentColor] = useState<string>('blue');

  // Map accent colors to hue-rotate values
  const getHueRotate = (color: string): string => {
    const hueMap: Record<string, string> = {
      blue: '0deg',
      purple: '30deg',
      pink: '90deg',
      red: '0deg',
      orange: '150deg',
      tangerine: '150deg',
      green: '120deg',
      teal: '180deg',
      indigo: '60deg',
      inverse: '0deg',
    };
    return hueMap[color] || '0deg';
  };

  // Detect theme and accent color from document
  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDark(theme === 'dark');
      
      // Get accent color from design.json
      fetch('/design/design.json')
        .then(res => res.json())
        .then(data => {
          const color = data.globalStyles?.accentColor || 'blue';
          setAccentColor(color);
        })
        .catch(() => {
          // Fallback: try to detect from CSS variable
          const accentMode = document.documentElement.getAttribute('data-accent-mode');
          if (accentMode === 'inverse') {
            setAccentColor('inverse');
          } else {
            setAccentColor('blue');
          }
        });
    };

    // Check initial theme
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'data-accent-mode'],
    });

    // Also check for accent color changes periodically
    const interval = setInterval(checkTheme, 1000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);
  return (
    <Section
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        backgroundColor: 'var(--surface-base)',
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
          pointerEvents: 'none',
          zIndex: 1,
          filter: `hue-rotate(${getHueRotate(accentColor)})`,
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
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <FadeIn direction='up' >
        <VStack spacing="xl" align="center">
          <VStack spacing="lg" align="center" style={{ maxWidth: '850px' }}>
            <Display 
              size='xl'
              align="center"
              className="hero-display-responsive"
            >
              En hemsida skapad åt dig<br />inte av dig
            </Display>
            <Body
              size="lg"
              align="center"
              className="hero-body-responsive"
            >
Du sätter riktningen. Vi tar ansvar för design, struktur och helhet.          
            </Body>
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
        </FadeIn>
      </Container>
      <Container useMediaWidth style={{ position: 'relative', zIndex: 3 }}>
        {/* Dashboard Mockup */}
          <Box style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Image
              src={isDark ? '/assets/hemsida-dark.png' : '/assets/hemsida.png'}
              alt="Website Builder Interface"
              width={4500}
              height={2675}
              priority
              style={{
                width: '85%',
                maxWidth: '1200px',
                height: 'auto',
                borderRadius: 'var(--selected-radius-scale-md)',
                boxShadow: 'var(--shadow-strong)',
                border: `2x solid ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.1)'}`,
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

        /* Subtle animation for hero tint */
        .hero-tint {
          animation: float 12s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(8px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </Section>
  );
}
