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
    title: 'Sätt riktningen',
    description:
      'Skapa ett konto och skicka in dina val, mal och önskemal. Inga tekniska beslut.',
    imageLight: '/assets/order.png',
    imageDark: '/assets/order-dark.png',
    imageAlt: 'Satt riktningen',
  },
  {
    title: 'Vi tar fram hemsidan',
    description:
      'Vi bygger din hemsida utifrån dina val och ansvarar för design, struktur och helhet.',
    imageLight: '/assets/default.png',
    imageDark: '/assets/default-dark.png',
    imageAlt: 'Vi tar fram hemsidan',
  },
  {
    title: 'Granska och justera',
    description:
      'Du går igenom hemsidan i lugn och ro.',
    imageLight: '/assets/cms.png',
    imageDark: '/assets/cms-dark.png',
    imageAlt: 'Granska och justera',
  },
  {
    title: 'Publicera och gå vidare',
    description:
      'När du är nöjd publiceras hemsidan. Därefter tar Blimpify ansvar för att den fungerar över tid.',
    imageLight: '/assets/hemsida.png',
    imageDark: '/assets/hemsida-dark.png',
    imageAlt: 'Publicera och ga vidare',
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

  const { activeIndex, animationValues, scrollToIndex } =
    useScrollAnimation(imageRefs);

  return (
    <Section
      id="scroll-section"
      overflow="visible"
      overflowX="clip"
      style={{
        position: 'relative',
      }}
    >
      {/* Background with fade to white */}
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

            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
            opacity: isDark ? 0.5 : 0.75 ,
          }}
        />
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to bottom, ${isDark ? 'var(--surface-page)' : 'var(--surface-page)'} 0%, transparent 5%, transparent 95%, ${isDark ? 'var(--surface-page)' : 'var(--surface-page)'} 100%)`,
          }}
        />
      </Box>
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <H1
          weight="bold"
          className="scroll-section-mobile-title"
          style={{
            margin: 0,
            marginBottom: 'var(--space-lg)',
          }}
        >
          Vår process
        </H1>
        <div
          className="scroll-section-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '280px 1fr',
            gap: 'var(--space-xl)',
            alignItems: 'start',
          }}
        >
          <aside
            style={{
              position: 'sticky',
              top: 'calc(50vh - 200px)',
              alignSelf: 'flex-start',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-xl)',
              overflow: 'visible',
            }}
          >
            <VStack
              spacing="sm"
              align="stretch"
              className="scroll-section-header"
            >
              <H1
                weight="bold"
                className="scroll-section-header-title"
                style={{
                  margin: 0,
                  padding: 'var(--foundation-space-4)',
                }}
              >
               vår process 
              </H1>
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
                  <Body size="sm" color="secondary">
                    {item.description}
                  </Body>
                </AccordionItem>
              ))}
            </Accordion>
          </aside>

          <VStack spacing="3xl" style={{ overflow: 'visible', flex: '1' }}>
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
                    <H3>{item.title}</H3>
                    <Body size="md" color="secondary">
                      {item.description}
                    </Body>
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
        @media (max-width: 1024px) {
          .scroll-section-grid {
            grid-template-columns: 1fr !important;
            gap: var(--foundation-space-8) !important;
          }

          .scroll-section-header {
            display: block !important;
            margin-bottom: var(--space-lg) !important;
          }

          .scroll-section-grid aside {
            display: none !important;
          }

          .scroll-section-mobile-text {
            display: flex !important;
          }

          .scroll-section-header-title {
            font-size: 2.1rem !important;
            line-height: 1.2 !important;
            font-weight: 700 !important;
            padding: 0 !important;
            margin-bottom: 0 !important;
            letter-spacing: -0.02em !important;
          }

          .scroll-section-mobile-text h3 {
            font-size: 1.5rem !important;
            font-weight: 800 !important;
            line-height: 1.4 !important;
          }
        }

        @media (max-width: 1024px) {
          .scroll-section-mobile-title {
            display: none !important;
          }
          
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
