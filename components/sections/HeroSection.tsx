'use client';

import { useState, useEffect } from 'react';
import { Section, Container, VStack, Typography, Spacer, FadeIn, Body, Button } from '@blimpify-im/ui';

export function HeroSection() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDark(theme === 'dark');
    };
    checkTheme();
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
        // Default för bakgrundens tyrka (överstyrs av --hero-tint-opacity / --hero-warm-opacity)
        ['--hero-tint-opacity-default' as string]: isDark ? 0.25 : 0.35,
      }}
    >
      
      {/* CSS-variabler för hero: --hero-warm-opacity, --hero-tint-opacity */}
      {/* Warm undertone layer - subtle creamy base */}
      <div
        className="hero-warm-base"
        style={{
          position: 'absolute',
          inset: 0,
          background: isDark
            ? 'radial-gradient(ellipse 100% 100% at center, rgba(250, 245, 240, 0.03) 0%, transparent 50%)'
            : 'radial-gradient(ellipse 100% 100% at center, rgba(250, 245, 240, 0.12) 0%, transparent 50%)',
          opacity: 'var(--hero-warm-opacity, 1)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Cloud layer - transparent PNG; lite tydligare med contrast */}
      <div
        className="hero-clouds hero-clouds-fadein"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(/assets/${isDark ? 'trans-cloud-dak.png' : 'trans-coud.png'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          filter: 'contrast(var(--hero-cloud-contrast, 1.05))',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />



      {/* Color tint layer - controlled by accent color tokens; styr tyrka med --hero-tint-opacity */}
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
          opacity: 'var(--hero-tint-opacity, var(--hero-tint-opacity-default, 0.3))',
          zIndex: 2,
          mixBlendMode: isDark ? 'soft-light' : 'multiply',
          pointerEvents: 'none',
        }}
      />

      <Spacer mobile={1} desktop={1} />
      
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
              <Typography
                as="h1"
                variant="display-lg"
                color="accent"
                align="center"
                className="hero-display-responsive"
              >
                Struktur. Design.
                <br />
                <span
                  className="hero-chill-text"
                  style={{
                    display: 'inline-block',
                    fontFamily: 'Lora, serif',
                    fontWeight: 500,
                    fontStyle: 'italic',
                    transform: 'skewX(-8deg)',
                  }}
                >
                  Rätt från start.
                </span>
              </Typography>
            </FadeIn>
            <FadeIn direction="up" duration={800} delay={200} enableScrollTrigger={false}>
              <Body
                size="lg"
                align="center"
                className="hero-body-responsive"
              >
               Genomtänkta hemsidor, klara att användas direkt.
              </Body>
            </FadeIn>
          </VStack>

          <FadeIn direction="up" duration={600} delay={400} enableScrollTrigger={false}>
            <Button
              variant="accent"
              size="xl"
              href="https://app.blimpify-im.com/sv/signup"
              target="_blank"
              className="hero-cta-button"
            >
              Kom igång
            </Button>
          </FadeIn>
        </VStack>
      </Container>

      {/* Responsive styles for hero text and clouds; chill-text: Lora via layout + Blimpify UI markup */}
      <style jsx global>{`
        /* Cloud fade-in animations */
        @keyframes fadeInCloudsDark {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.9;
          }
        }
        
        @keyframes fadeInCloudsLight {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.85;
          }
        }
        
        .hero-clouds-fadein {
          animation: fadeInCloudsLight 1.2s ease-out forwards;
        }
        
        [data-theme='dark'] .hero-clouds-fadein {
          animation: fadeInCloudsDark 1.2s ease-out forwards;
        }
        
        /* Hero chill-text: hårdkodad sned – italic + skew så det syns alltid */
        .hero-chill-text {
          font-style: italic !important;
          transform: skewX(-8deg) !important;
          display: inline-block !important;
        }
        @media (max-width: 768px) {
          .hero-clouds {
            background-size: 150% auto !important;
            background-position: top center !important;
          }
        }
        @media (max-width: 480px) {
          .hero-clouds {
            background-size: 200% auto !important;
            background-position: top center !important;
          }
        }

        

      `}</style>
    </Section>
  );
}
