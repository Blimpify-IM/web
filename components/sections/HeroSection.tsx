'use client';

import { useState, useEffect, useRef } from 'react';
import { Section, Container, Box, VStack, Display, Spacer, OverflowContainer, Body, Button } from '@blimpify-im/ui';
import Image from 'next/image';
import { useTranslation, useAppUrl, type Locale } from '@/utils/i18n';

export function HeroSection({ translations }: { translations?: Record<Locale, any> }) {
  const { t } = useTranslation(translations);
  const getAppUrl = useAppUrl();
  const [isDark, setIsDark] = useState<boolean | null>(null); // Start with null to detect mounting
  const [rotation, setRotation] = useState(-15); // Start with negative rotation (lutar framåt)
  const [isInitialized, setIsInitialized] = useState(false); // Track if scroll logic has initialized
  const [imageReady, setImageReady] = useState(false); // Track if image should be visible
  const [contentReady, setContentReady] = useState(false); // Track if text content should fade in
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Detect theme from document - IMMEDIATELY on mount
  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDark(theme === 'dark');
    };

    // Check initial theme IMMEDIATELY
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    // Trigger content fade-in immediately
    requestAnimationFrame(() => {
      setContentReady(true);
    });

    return () => observer.disconnect();
  }, []);

  // Initialize scroll logic and show image - ONLY after theme is detected
  useEffect(() => {
    // Wait for theme to be detected
    if (isDark === null) return;
    // Set up scroll handlers immediately
    let hasScrolled = false;
    let rafId: number | null = null;
    let lastRotation = -15;
    
    const handleScroll = () => {
      if (!imageRef.current || !imageReady) return;
      
      // Mark that user has scrolled
      if (!hasScrolled) {
        hasScrolled = true;
        setIsInitialized(true);
      }

      // Throttle with requestAnimationFrame for smooth performance
      if (rafId !== null) return;
      
      rafId = requestAnimationFrame(() => {
        rafId = null;
        
        const windowHeight = window.innerHeight;
        const imageRect = imageRef.current!.getBoundingClientRect();
        const imageTop = imageRect.top;
        
        // Start animation when image is visible in viewport
        // Progress: 0 when image top is at viewport bottom, 1 when image top is at viewport top
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - imageTop) / (windowHeight * 2)));

        // Rotate from -15deg (lutar framåt) to +10deg (lutar uppåt) based on scroll
        const minRotation = -15;
        const maxRotation = 10;
        const newRotation = minRotation + (maxRotation - minRotation) * scrollProgress;
        
        // Only update state if rotation changed significantly (reduce re-renders)
        if (Math.abs(newRotation - lastRotation) > 0.1) {
          lastRotation = newRotation;
          setRotation(newRotation);
        }
      });
    };

    // Set up scroll listeners immediately
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Wait for layout to stabilize
    const showImage = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // Set initial rotation
          setRotation(-15);
          // Show image immediately after theme is ready
          setImageReady(true);
        });
      });
    };

    // Initialize immediately after theme is detected
    const initTimeout = setTimeout(showImage, 50);

    return () => {
      clearTimeout(initTimeout);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [isDark, imageReady]);
  return (
    <Section
      overflow="visible"
      overflowX="clip"
      style={{
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      <div ref={sectionRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />
      
      {/* Warm undertone layer - subtle creamy base */}
      <div
        className="hero-warm-base"
        style={{
          position: 'absolute',
          inset: 0,
          background: isDark
            ? 'radial-gradient(ellipse 100% 100% at center, rgba(250, 245, 240, 0.03) 0%, transparent 50%)'
            : 'radial-gradient(ellipse 100% 100% at center, rgba(250, 245, 240, 0.12) 0%, transparent 50%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Cloud layer - transparent PNG */}
      {isDark !== null && (
        <div
          className="hero-clouds hero-clouds-fadein"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(/assets/${isDark ? 'trans-cloud-dark.png' : 'trans-cloud.png'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
      )}



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
          opacity: isDark ? 0.25 : 0.35,
          zIndex: 2,
          mixBlendMode: isDark ? 'soft-light' : 'multiply',
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
        <VStack 
          spacing="xl" 
          align="center"
          className={contentReady ? 'hero-content-fadein' : ''}
          style={{
            opacity: contentReady ? 1 : 0,
          }}
        >
          <VStack spacing="lg" align="center" style={{ maxWidth: '850px' }}>
            <Display
              size='xl'
              align="center"
              color="accent"
              className="hero-display-responsive"
            >
              {t('hero.title.line1')}<br />
              <span className="hero-text-chill">{t('hero.title.line2')}</span>
            </Display>
            <Body
              size="lg"
              align="center"
              className="hero-body-responsive"
            >
              {t('hero.subtitle')}
            </Body>
          </VStack>

          <Button
            variant="accent"
            size="xl"
            href={getAppUrl('/waitlist')}
            target="_blank"
            className="hero-cta-button"
          >
            {t('hero.cta')}
          </Button>
        </VStack>
      </Container>
      <Container useMediaWidth className="hero-image-container-wrapper" style={{ position: 'relative', zIndex: 1, overflow: 'visible', marginTop: 'var(--foundation-space-24)' }}>
        {/* Dashboard Mockup */}
        <OverflowContainer direction="right" spillAmount={200} className="hero-overflow">
          <Box
              ref={imageRef}
              className="hero-image-container"
              style={{
                position: 'relative',
                borderRadius: '1rem',
                overflow: 'hidden',
                padding: 'var(--foundation-space-4)',
                // Use translate3d for hardware acceleration and optimize for Safari
                transform: `translate3d(0, 0, 0) perspective(1000px) rotateX(${rotation}deg)`,
                WebkitTransform: `translate3d(0, 0, 0) perspective(1000px) rotateX(${rotation}deg)`,
                willChange: isInitialized ? 'transform' : 'auto',
                transformOrigin: 'center center',
                WebkitTransformOrigin: 'center center',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                maxWidth: '85%',
                margin: '0 auto',
                opacity: imageReady ? 1 : 0,
                // Only transition opacity, not transform (transform is updated via scroll)
                transition: imageReady 
                  ? (isInitialized ? 'opacity 0.6s ease-out' : 'opacity 0.6s ease-out')
                  : 'none',
              }}
            >
              <Box
                className="hero-image-inner"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  borderRadius: '1rem',
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
                    borderRadius: '1rem',
                    boxShadow: 'var(--shadow-strong)',
                    backgroundColor: 'var(--surface-page)',
                  }}
                />
              </Box>
            </Box>
          </OverflowContainer>
      </Container>

      {/* Responsive styles for hero text and clouds */}
      <style jsx global>{`
        /* Hero content fade-in animation */
        .hero-content-fadein {
          animation: fadeInHeroContent 0.8s ease-out forwards;
        }
        
        @keyframes fadeInHeroContent {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
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
        
        /* Force specific radius on hero image - not affected by design.json */
        .hero-image-container {
          border-radius: 1rem !important;
          /* Safari optimization for 3D transforms */
          -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
          /* Force GPU acceleration */
          -webkit-perspective: 1000px;
          perspective: 1000px;
        }
        
        .hero-image-inner {
          border-radius: 1rem !important;
        }
        
        .hero-image {
          border-radius: 1rem !important;
        }
        
        .hero-text-chill {
          color: var(--text-secondary);
          font-family: 'Playfair Display', 'Libre Baskerville', 'Lora', serif;
          font-style: italic;
          font-weight: 500;
        }
        
        
        /* Desktop: disable overflow spill on hero image */
        @media (min-width: 769px) {
          .hero-overflow {
            width: 100% !important;
            margin-right: 0 !important;
          }
        }
        
        /* Mobile: prevent overflow and center image */
        @media (max-width: 768px) {
          .hero-overflow {
            width: 100% !important;
            margin-right: 0 !important;
            overflow: hidden !important;
          }
          
          .hero-image-container-wrapper {
            padding-left: var(--foundation-space-4) !important;
            padding-right: var(--foundation-space-4) !important;
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
          
          .hero-image-container-wrapper {
            margin-top: var(--foundation-space-8) !important;
            padding-left: var(--foundation-space-2) !important;
            padding-right: var(--foundation-space-2) !important;
            overflow: hidden !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          
          .hero-overflow {
            width: 100% !important;
            margin-right: 0 !important;
            margin-left: 0 !important;
            overflow: hidden !important;
            padding: 0 !important;
          }
          
          .hero-image-container {
            max-width: 100% !important;
            margin: 0 auto !important;
            width: 100% !important;
            padding-left: var(--foundation-space-2) !important;
            padding-right: var(--foundation-space-2) !important;
          }
          
          .hero-image-container,
          .hero-image-inner,
          .hero-image {
            border-radius: 0.5rem !important;
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
