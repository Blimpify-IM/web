'use client';

import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Section,
  Container,
  Box,
  VStack,
  H2,
  H3,
  Body,
  AnimatedBox,
  OverflowContainer,
  Accordion,
  AccordionItem,
  useScrollAnimation,
  Display,
  H1,
} from '@blimpify-im/ui';

interface ScrollItem {
  title: string;
  description: string;
  imageLight: string;
  imageDark: string;
  imageAlt: string;
}

const scrollItemsData: Omit<ScrollItem, 'imageSrc'>[] = [
  {
    title: 'Skapa konto',
    description: 'Du börjar med att skapa ett konto hos Blimpify.',
    imageLight: 'https://cdn.blimpify-im.com/assets/images/sign-up.png',
    imageDark: 'https://cdn.blimpify-im.com/assets/images/sign-up-dark.png',
    imageAlt: 'Skapa konto',
  },
  {
    title: 'Starta själv eller med oss',
    description: 'Anpassa en av våra mallar eller ge oss riktningen så bygger vi.',
    imageLight: 'https://cdn.blimpify-im.com/assets/images/get-strated.png',
    imageDark: 'https://cdn.blimpify-im.com/assets/images/get-strated-dark.png',
    imageAlt: 'Sätt riktningen',
  },
  {
    title: 'Redigera och följ utvecklingen',
    description:
      'Uppdatera innehåll, följ statistik och ha dialog med oss. Allt samlat hos Blimpify.',
    imageLight: 'https://cdn.blimpify-im.com/assets/images/maintain-1.png',
    imageDark: 'https://cdn.blimpify-im.com/assets/images/maintain-dark-1.png',
    imageAlt: 'Redigera och väx',
  },
];

export function ScrollSection() {
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

  const scrollItems = useMemo(() => {
    return scrollItemsData.map((item) => ({
      ...item,
      imageSrc: isDark ? item.imageDark : item.imageLight,
    }));
  }, [isDark]);

  const imageRefs = useMemo(
    () => scrollItems.map(() => ({ current: null as HTMLElement | null })),
    [scrollItems]
  );

  const { activeIndex, animationValues, scrollToIndex } = useScrollAnimation(
    imageRefs,
    {
      smoothFactor: 0.052,
      animationStart: 0.18,
      animationEnd: 0.68,
      translateRange: 100,
      translateYRange: 36,
      scaleMin: 0.91,
    }
  );

  return (
    <Section
      id="scroll-section"
      overflow="visible"
      overflowX="clip"
      style={{
        position: 'relative',
      }}
    >
      <Container className="scroll-section-container" style={{ position: 'relative', zIndex: 1 }}>
        <Box className="scroll-section-mobile-title" style={{ margin: 0, marginBottom: 'var(--foundation-space-6)' }}>
          <Display weight="bold">Hur fungerar det?</Display>
        </Box>
        <div
          className="scroll-section-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(380px, 520px) 1fr',
            gap: 'var(--foundation-space-10)',
            alignItems: 'start',
          }}
        >
          <Box
            className="scroll-section-card"
            style={{
              position: 'sticky',
              top: 'var(--foundation-space-40)',
              alignSelf: 'flex-start',
              borderRadius: 'var(--radius-lg, 1rem)',
              padding: 'var(--foundation-space-6)',
              background: 'var(--surface-page)',
              border: '1px solid var(--border-default)',
              boxShadow: 'none',
            }}
          >
          <aside
            className="scroll-section-sidebar"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--foundation-space-6)',
              overflow: 'visible',
            }}
          >
            <VStack
              spacing="sm"
              align="stretch"
              className="scroll-section-header"
            >
              <Box className="scroll-section-header-title" style={{ margin: 0, padding: 'var(--foundation-space-4)' }}>
                <Display weight="bold">Hur fungerar det?</Display>
              </Box>
            </VStack>

            <Accordion
              selectionMode="single"
              variant="borderless"
              gap="none"
              showIndicator={false}
              expandedKeys={[String(activeIndex ?? 0)]}
              onSelectionChange={(keys) => {
                const index = parseInt(keys[0]);
                if (!isNaN(index)) {
                  scrollToIndex(index);
                }
              }}
            >
              {scrollItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  itemKey={String(index)}
                  title={item.title}
                  className={activeIndex === index ? 'accordion-active' : ''}
                >
                  {item.description ? (
                    <Body size="sm" color="secondary">
                      {item.description}
                    </Body>
                  ) : null}
                </AccordionItem>
              ))}
            </Accordion>
          </aside>
          </Box>

          <VStack spacing="3xl" className="scroll-section-content" style={{ overflow: 'visible', flex: '1' }}>
            {scrollItems.map((item, index) => {
              const animValues = animationValues[index] || {
                opacity: 0.1,
                translateX: 80,
                translateY: 30,
                scale: 0.92,
                progress: 0,
              };

              return (
                <VStack
                  key={index}
                  spacing="md"
                  align="stretch"
                  className="scroll-section-item"
                >
                  <VStack
                    spacing="sm"
                    align="start"
                    className="scroll-section-mobile-text"
                  >
                    <H2 weight="bold">{item.title}</H2>
                    {item.description ? (
                      <Body size="sm" color="secondary">
                        {item.description}
                      </Body>
                    ) : null}
                  </VStack>

                  <Box
                    ref={(el) => {
                      imageRefs[index].current = el;
                    }}
                    style={{ overflow: 'visible' }}
                  >
                    <AnimatedBox
                      opacity={animValues.opacity}
                      translateX={animValues.translateX}
                      translateY={animValues.translateY}
                      scale={animValues.scale}
                      transitionDuration="160ms"
                    >
                      <OverflowContainer direction="right" spillAmount={220}>
                        <Box
                          className="scroll-section-image-container"
                          style={{
                            position: 'relative',
                            borderRadius: '1.5rem',
                            overflow: 'hidden',
                            transition: 'box-shadow 0.3s ease',
                            padding: 'var(--foundation-space-4)',
                          }}
                        >
                          <Box
                            className="scroll-section-image-inner"
                            style={{
                              position: 'relative',
                              zIndex: 1,
                              borderRadius: '1.5rem',
                              overflow: 'hidden',
                              padding: 'var(--foundation-space-3)',
                              backgroundColor: 'transparent',
                            }}
                          >
                            <Image
                              src={item.imageSrc}
                              alt={item.imageAlt}
                              width={1200}
                              height={800}
                              loading="lazy"
                              className="scroll-section-image"
                              style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                borderRadius: '1.5rem',
                                backgroundColor: 'var(--surface-page)',
                              }}
                            />
                          </Box>
                        </Box>
                      </OverflowContainer>
                    </AnimatedBox>
                  </Box>
                </VStack>
              );
            })}
          </VStack>
        </div>
      </Container>

      <style jsx global>{`
        /* Längre ut mot kanten – mindre sidpadding */
        .scroll-section-container {
          padding-left: var(--foundation-space-6) !important;
          padding-right: var(--foundation-space-2) !important;
          max-width: 100% !important;
        }
        @media (min-width: 1200px) {
          .scroll-section-container {
            padding-left: var(--foundation-space-8) !important;
            padding-right: var(--foundation-space-3) !important;
          }
        }

        /* Bildkolumnen – mindre än sidebaren visuellt så de hänger ihop */
        .scroll-section-content {
          max-width: 540px;
        }
        @media (min-width: 1400px) {
          .scroll-section-content {
            max-width: 600px;
          }
        }

        @media (max-width: 1024px) {
          .scroll-section-grid {
            grid-template-columns: 1fr !important;
            gap: var(--foundation-space-8) !important;
          }

          .scroll-section-header {
            display: block !important;
            margin-bottom: var(--foundation-space-6) !important;
          }

          .scroll-section-grid aside {
            display: none !important;
          }

          .scroll-section-card {
            display: none !important;
          }

          .scroll-section-mobile-text {
            display: flex !important;
          }

          .scroll-section-header-title,
          .scroll-section-header-title * {
            font-size: 1.5rem !important;
            line-height: 1.2 !important;
            font-weight: 700 !important;
            letter-spacing: -0.02em !important;
          }

          .scroll-section-header-title {
            padding: 0 !important;
            margin-bottom: 0 !important;
          }

          .scroll-section-mobile-text h2 {
            font-size: 1.25rem !important;
            font-weight: 700 !important;
            line-height: 1.35 !important;
          }
        }

        @media (max-width: 1024px) {
          .scroll-section-header-title {
            display: none !important;
          }
        }

        @media (min-width: 1025px) {
          .scroll-section-mobile-text {
            display: none !important;
          }

          .scroll-section-mobile-title {
            display: none !important;
          }
        }
        
        /* Kortet endast bakom sidebaren, inte bakom bilderna */
        .scroll-section-card {
          padding: var(--foundation-space-6);
        }
        @media (min-width: 768px) {
          .scroll-section-card {
            padding: var(--foundation-space-8);
          }
        }
        @media (min-width: 1200px) {
          .scroll-section-card {
            padding: var(--foundation-space-10);
          }
        }

        /* Sidofältet – inuti kortet, ingen egen bakgrund så kortet syns */
        .scroll-section-sidebar {
          background: transparent;
          border-radius: 0;
          padding: 0;
          border: none;
          box-shadow: none;
        }

        .scroll-section-sidebar .scroll-section-header-title,
        .scroll-section-sidebar .scroll-section-header-title * {
          font-size: clamp(1.35rem, 3.5vw, 1.75rem) !important;
          line-height: 1.2 !important;
          font-weight: 700 !important;
          letter-spacing: -0.02em !important;
        }

        .scroll-section-sidebar .accordion-item__title-wrapper,
        .scroll-section-sidebar .accordion-item__title-wrapper * {
          font-size: clamp(1.0625rem, 2.2vw, 1.25rem) !important;
          font-weight: 600 !important;
          line-height: 1.35 !important;
        }

        .scroll-section-sidebar .accordion-item__content,
        .scroll-section-sidebar .accordion-item__content * {
          font-size: clamp(0.9375rem, 1.8vw, 1.0625rem) !important;
          line-height: 1.5 !important;
        }

        /* Force specific radius on scroll section images - slightly more than hero image */
        .scroll-section-image-container,
        .scroll-section-image-inner,
        .scroll-section-image {
          border-radius: 1.6rem !important;
        }
        
        @media (max-width: 768px) {
          .scroll-section-image-container,
          .scroll-section-image-inner,
          .scroll-section-image {
            border-radius: 1rem !important;
          }
        }
      `}</style>
    </Section>
  );
}
