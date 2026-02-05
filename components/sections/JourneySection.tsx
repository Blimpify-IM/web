'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Section,
  Container,
  Box,
  VStack,
  Grid,
  GridItem,
  Sticky,
  H1,
  H3,
  Body,
  FadeIn,
} from '@blimpify-im/ui';

interface DestinationImage {
  id: string;
  src: string;
  alt: string;
  colSpan?: number; // Only support simple numbers for now
}

interface Destination {
  id: string;
  title: string;
  description: string;
  images: DestinationImage[];
  gridColumns: { base: number; md: number; lg: number };
}

// Sweden images data
const swedenImages: DestinationImage[] = [
  { id: 'sw1', src: '/assets/stockholm/IMG_0318.JPG', alt: 'Stockholm view 1' },
  { id: 'sw2', src: '/assets/stockholm/IMG_0346.JPG', alt: 'Stockholm view 2', colSpan: 2 },
  { id: 'sw3', src: '/assets/stockholm/IMG_0349.JPG', alt: 'Stockholm view 3' },
  { id: 'sw4', src: '/assets/stockholm/IMG_0397.JPG', alt: 'Stockholm view 4' },
  { id: 'sw5', src: '/assets/stockholm/IMG_0399.JPG', alt: 'Stockholm view 5' },
  { id: 'sw6', src: '/assets/stockholm/IMG_1129.JPG', alt: 'Stockholm view 6', colSpan: 2 },
  { id: 'sw7', src: '/assets/stockholm/IMG_6471.JPG', alt: 'Stockholm view 7' },
  { id: 'sw8', src: '/assets/stockholm/IMG_7880.JPG', alt: 'Stockholm view 8' },
  { id: 'sw9', src: '/assets/stockholm/IMG_8340.JPG', alt: 'Stockholm view 9' },
];

// Gerstheim images data
const gerstheimImages: DestinationImage[] = [
  { id: 'gr1', src: '/assets/gerstheim/IMG_7104.JPG', alt: 'Gerstheim view 1' },
  { id: 'gr2', src: '/assets/gerstheim/IMG_7107.JPG', alt: 'Gerstheim view 2' },
  { id: 'gr3', src: '/assets/gerstheim/IMG_7113.JPG', alt: 'Gerstheim view 3' },
  { id: 'gr4', src: '/assets/gerstheim/IMG_7126.JPG', alt: 'Gerstheim view 4', colSpan: 2 },
  { id: 'gr5', src: '/assets/gerstheim/IMG_7128.JPG', alt: 'Gerstheim view 5' },
  { id: 'gr6', src: '/assets/gerstheim/IMG_7130.JPG', alt: 'Gerstheim view 6' },
  { id: 'gr7', src: '/assets/gerstheim/IMG_7149.JPG', alt: 'Gerstheim view 7' },
  { id: 'gr8', src: '/assets/gerstheim/IMG_7159.JPG', alt: 'Gerstheim view 8' },
  { id: 'gr9', src: '/assets/gerstheim/IMG_7180.JPG', alt: 'Gerstheim view 9', colSpan: 2 },
  { id: 'gr10', src: '/assets/gerstheim/IMG_7181.JPG', alt: 'Gerstheim view 10' },
  { id: 'gr11', src: '/assets/gerstheim/IMG_7233.JPG', alt: 'Gerstheim view 11' },
  { id: 'gr12', src: '/assets/gerstheim/IMG_7255.JPG', alt: 'Gerstheim view 12' },
  { id: 'gr13', src: '/assets/gerstheim/IMG_7334.JPG', alt: 'Gerstheim view 13' },
  { id: 'gr14', src: '/assets/gerstheim/IMG_7335.JPG', alt: 'Gerstheim view 14' },
  { id: 'gr15', src: '/assets/gerstheim/IMG_7338.JPG', alt: 'Gerstheim view 15', colSpan: 2 },
  { id: 'gr16', src: '/assets/gerstheim/IMG_7364.JPG', alt: 'Gerstheim view 16' },
  { id: 'gr17', src: '/assets/gerstheim/IMG_7372.JPG', alt: 'Gerstheim view 17' },
  { id: 'gr18', src: '/assets/gerstheim/IMG_7380.JPG', alt: 'Gerstheim view 18' },
];

// Portugal placeholder images (empty placeholders for now)
const portugalImages: DestinationImage[] = Array.from({ length: 12 }, (_, i) => ({
  id: `pt${i + 1}`,
  src: '', // Empty src will render placeholder
  alt: `Portel, Portugal view ${i + 1}`,
  colSpan: i === 2 || i === 7 ? 2 : undefined, // Some images span 2 columns for variety
}));

const destinations: Destination[] = [
  {
    id: 'sweden',
    title: 'Sweden',
    description: 'Our journey began in Stockholm, Sweden, where innovation meets tradition in the heart of Scandinavia.',
    images: swedenImages,
    gridColumns: { base: 1, md: 2, lg: 3 },
  },
  {
    id: 'gerstheim',
    title: 'Gerstheim, France',
    description: 'Next stop was Gerstheim in the beautiful Alsace region of France, a place of culture and natural beauty.',
    images: gerstheimImages,
    gridColumns: { base: 1, md: 2, lg: 3 },
  },
  {
    id: 'portugal',
    title: 'Portel, Portugal',
    description: 'Our final destination brings us to Portel, Portugal, where history and charm converge in the Alentejo region.',
    images: portugalImages,
    gridColumns: { base: 1, md: 2, lg: 3 },
  },
];

export function JourneySection() {
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
      id="journey"
      style={{
        position: 'relative',
        overflow: 'visible',
      }}
    >
      {/* Background with cloud pattern */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${isDark ? '/assets/cloudy-dark.png' : '/assets/cloudy.png'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            opacity: isDark ? 0.3 : 0.5,
          }}
        />
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to bottom, var(--surface-page) 0%, transparent 5%, transparent 95%, var(--surface-page) 100%)`,
          }}
        />
      </Box>

      <Container style={{ position: 'relative', zIndex: 1 }}>
        <VStack spacing="3xl">
          {/* Page Header */}
          <FadeIn direction="up" duration={700}>
            <VStack spacing="md" align="center" style={{ marginBottom: 'var(--space-2xl)' }}>
              <H1 weight="bold" align="center">
                Our Journey
              </H1>
              <Body size="lg" color="secondary" align="center" style={{ maxWidth: '600px' }}>
                Follow our company's travels around the world.
              </Body>
            </VStack>
          </FadeIn>

          {/* Destination Sections */}
          <VStack spacing="3xl" style={{ width: '100%' }}>
            {destinations.map((destination) => (
              <Box key={destination.id} className="journey-section-wrapper">
                <Grid
                  columns={{ base: 1, md: 3 }}
                  gap="md"
                  style={{
                    alignItems: 'start',
                  }}
                >
                  {/* Left Column - Sticky Header (1 column span) */}
                  <GridItem colSpan={{ base: 1, md: 1 }} className="journey-sticky-header">
                    <Sticky top="250px">
                      <VStack spacing="sm" align="start">
                        <H3 weight="bold">{destination.title}</H3>
                        <Body color="secondary">{destination.description}</Body>
                      </VStack>
                    </Sticky>
                  </GridItem>

                  {/* Right Column - Image Grid (2 column span) */}
                  <GridItem colSpan={{ base: 1, md: 2 }} className="journey-image-grid-wrapper">
                    <Grid
                      columns={destination.gridColumns}
                      gap="sm"
                    >
                      {destination.images.map((img) => (
                        <GridItem
                          key={img.id}
                          colSpan={img.colSpan}
                        >
                          {img.src ? (
                            <Box
                              style={{
                                position: 'relative',
                                width: '100%',
                                overflow: 'hidden',
                                borderRadius: '1rem',
                                backgroundColor: 'var(--surface-raised)',
                              }}
                            >
                              <Image
                                src={img.src}
                                alt={img.alt}
                                width={1200}
                                height={800}
                                loading="lazy"
                                style={{
                                  width: '100%',
                                  height: 'auto',
                                  display: 'block',
                                  borderRadius: '1rem',
                                }}
                              />
                            </Box>
                          ) : (
                            <Box
                              className="journey-placeholder-image"
                              style={{
                                position: 'relative',
                                width: '100%',
                                aspectRatio: '4 / 3',
                                overflow: 'hidden',
                                borderRadius: '1rem',
                                backgroundColor: 'var(--surface-raised)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '2px dashed var(--border-subtle)',
                              }}
                            >
                              <Body color="tertiary" size="sm">
                                Image Placeholder
                              </Body>
                            </Box>
                          )}
                        </GridItem>
                      ))}
                    </Grid>
                  </GridItem>
                </Grid>
              </Box>
            ))}
          </VStack>
        </VStack>
      </Container>

      <style jsx global>{`
        /* Desktop: Make image grid span 2 columns and header span 1 */
        @media (min-width: 769px) {
          .journey-image-grid-wrapper {
            grid-column: span 2;
          }

          .journey-sticky-header {
            grid-column: span 1;
          }
        }

        /* Mobile: Single column layout, disable sticky */
        @media (max-width: 768px) {
          .journey-section-wrapper .journey-sticky-header {
            position: relative !important;
            margin-bottom: var(--space-lg);
          }

          .journey-section-wrapper .journey-sticky-header > div {
            position: relative !important;
          }

          .journey-section-wrapper {
            margin-bottom: var(--space-2xl) !important;
          }

          .journey-sticky-header,
          .journey-image-grid-wrapper {
            grid-column: span 1 !important;
          }
        }

        /* Ensure images have consistent styling */
        .journey-image-grid-wrapper img {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .journey-image-grid-wrapper img:hover {
          transform: scale(1.02);
          box-shadow: var(--shadow-strong);
        }

        /* Placeholder image styling */
        .journey-placeholder-image {
          min-height: 200px;
        }
      `}</style>
    </Section>
  );
}
