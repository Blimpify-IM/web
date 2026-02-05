'use client';

import { useState, useEffect, useRef } from 'react';
import { Section, Container, Box, VStack, Display, Spacer, FadeIn, OverflowContainer, Body, Button } from '@blimpify-im/ui';
import Image from 'next/image';

export function HeroSection() {
  const [isDark, setIsDark] = useState(true); // Default to dark theme first
  const [rotation, setRotation] = useState(-15); // Start with negative rotation (lutar framåt)
  const [isInitialized, setIsInitialized] = useState(false); // Track if scroll logic has initialized
  const [imageReady, setImageReady] = useState(false); // Track if image should be visible
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  // Initialize scroll logic first, then show image
  useEffect(() => {
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

    // Wait for everything to mount, then show image
    const showImage = () => {
      // Wait for layout to stabilize
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // Set initial rotation
          setRotation(-15);
          // Show image after a small delay to ensure scroll logic is ready
          setTimeout(() => {
            setImageReady(true);
          }, 100);
        });
      });
    };

    // Initialize after component has mounted
    setTimeout(showImage, 300);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [imageReady]);
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
        <VStack spacing="xl" align="center">
          <VStack spacing="lg" align="center" style={{ maxWidth: '850px' }}>
            <FadeIn direction="up" duration={800} delay={0} enableScrollTrigger={false}>
              <Display
                size='xl'
                align="center"
                color="accent"
                className="hero-display-responsive"
              >
                <span className="hero-text-desktop">
                  Sites that fly<br />

                  <span className="hero-text-chill"> viewers that land</span>
                </span>
                <span className="hero-text-mobile">
                  Sites that fly<br /> 

                  <span className="hero-text-chill">viewers that land</span>
                </span>
              </Display>
            </FadeIn>
            <FadeIn direction="up" duration={800} delay={200} enableScrollTrigger={false}>
              <Body
                size="lg"
                align="center"
                className="hero-body-responsive"
              >
                Turn traffic into real interest. Built for real users.
              </Body>
            </FadeIn>
          </VStack>

          <FadeIn direction="up" duration={600} delay={400} enableScrollTrigger={false}>
            <Button
              variant="accent"
              size="xl"
              href="https://app.blimpify-im.com/sv/waitlist"
              target="_blank"
              className="hero-cta-button"
            >
              Get started for free
            </Button>
          </FadeIn>
        </VStack>
      </Container>
      <Container useMediaWidth className="hero-image-container-wrapper" style={{ position: 'relative', zIndex: 1, overflow: 'visible', marginTop: 'var(--foundation-space-24)' }}>
        {/* Dashboard Mockup */}
        <FadeIn direction="up" duration={1000} delay={600} enableScrollTrigger={false}>
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
        </FadeIn>
      </Container>

      {/* Responsive styles for hero text and clouds */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');
        
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
        
        .hero-text-desktop {
          display: block;
        }
        
        .hero-text-mobile {
          display: none;
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
        
        /* Mobile: dölj hero-bilden (dashboard-mockup) på mindre enheter – spara data/laddning */
        @media (max-width: 768px) {
          .hero-image-container-wrapper {
            display: none !important;
          }
          .hero-overflow {
            width: 100% !important;
            margin-right: 0 !important;
            overflow: hidden !important;
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
