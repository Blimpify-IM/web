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
  imageSrc: string;
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
    title: 'Välj mall – struktur från start',
    description: 'Du börjar från en genomtänkt struktur. Ändra färger, layout och innehåll tills det känns som ditt företag. Varje komponent har tydliga regler – designen är i princip omöjlig att förstöra.',
    imageLight: 'https://cdn.blimpify-im.com/assets/images/get-strated.png',
    imageDark: 'https://cdn.blimpify-im.com/assets/images/get-strated-dark.png',
    imageAlt: 'Välj mall och anpassa',
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

const MOBILE_BREAKPOINT = 1200;

function ScrollSectionDesktop({ scrollItems }: { scrollItems: ScrollItem[] }) {
  const imageRefs = useMemo(
    () => scrollItems.map(() => ({ current: null as HTMLElement | null })),
    [scrollItems]
  );

  const { activeIndex, scrollToIndex } = useScrollAnimation(
    imageRefs,
    {
      smoothFactor: 0.085,
      animationStart: 0.12,
      animationEnd: 0.65,
      translateRange: 120,
      translateYRange: 42,
      scaleMin: 0.88,
    }
  );

  return (
    <Section
      id="scroll-section"
      overflow="visible"
      overflowX="clip"
      style={{ position: 'relative' }}
    >
      <Container className="scroll-section-container" style={{ position: 'relative', zIndex: 1 }}>
        <Box className="scroll-section-mobile-title" style={{ margin: 0, marginBottom: 'var(--foundation-space-6)' }}>
          <Display size="md" weight="bold" align="center">Hur fungerar det?</Display>
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
                <Display size="md" weight="bold" align="center">Hur fungerar det?</Display>
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
            {scrollItems.map((item, index) => (
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
                    className="scroll-section-animated-box"
                    style={{ overflow: 'visible', willChange: 'transform', transformOrigin: '85% 50%' }}
                  >
                    <OverflowContainer direction="right" spillAmount={280}>
                        <Box
                          className="scroll-section-image-container"
                          style={{
                            position: 'relative',
                            borderRadius: '0.75rem',
                            overflow: 'hidden',
                            transition: 'box-shadow 0.3s ease',
                            padding: 'var(--foundation-space-4)',
                            aspectRatio: '3/2',
                            border: '1px solid var(--border-default)',
                          }}
                        >
                          <Box
                            className="scroll-section-image-inner"
                            style={{
                              position: 'relative',
                              zIndex: 1,
                              borderRadius: '0.75rem',
                              overflow: 'hidden',
                              padding: 'var(--foundation-space-3)',
                              backgroundColor: 'transparent',
                              width: '100%',
                              height: '100%',
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
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                                borderRadius: '0.75rem',
                                backgroundColor: 'var(--surface-page)',
                              }}
                            />
                          </Box>
                        </Box>
                      </OverflowContainer>
                  </Box>
                </VStack>
            ))}
          </VStack>
        </div>
      </Container>
    </Section>
  );
}

function ScrollSectionMobile({ scrollItems }: { scrollItems: ScrollItem[] }) {
  const imageRefs = useMemo(
    () => scrollItems.map(() => ({ current: null as HTMLElement | null })),
    [scrollItems]
  );

  useScrollAnimation(imageRefs, {
    smoothFactor: 0.08,
    animationStart: 0.1,
    animationEnd: 0.6,
    translateRange: 72,
    translateYRange: 24,
    scaleMin: 0.9,
  });

  return (
    <Section
      id="scroll-section"
      overflow="visible"
      overflowX="clip"
      style={{ position: 'relative' }}
    >
      <Container className="scroll-section-container" style={{ position: 'relative', zIndex: 1 }}>
        <Box className="scroll-section-mobile-title" style={{ margin: 0, marginBottom: 'var(--foundation-space-6)' }}>
          <Display size="md" weight="bold" align="center">Hur fungerar det?</Display>
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
              <VStack spacing="sm" align="stretch" className="scroll-section-header">
                <Box className="scroll-section-header-title" style={{ margin: 0, padding: 'var(--foundation-space-4)' }}>
                  <Display size="md" weight="bold" align="center">Hur fungerar det?</Display>
                </Box>
              </VStack>
            </aside>
          </Box>

          <VStack spacing="3xl" className="scroll-section-content" style={{ overflow: 'visible', flex: '1' }}>
            {scrollItems.map((item, index) => (
              <VStack
                key={index}
                spacing="md"
                align="stretch"
                className="scroll-section-item"
              >
                <VStack spacing="sm" align="start" className="scroll-section-mobile-text">
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
                  className="scroll-section-animated-box scroll-section-mobile-animated"
                  style={{ overflow: 'visible', willChange: 'transform', transformOrigin: '85% 50%' }}
                >
                  <Box
                    className="scroll-section-image-container scroll-section-mobile-image"
                    style={{
                      position: 'relative',
                      borderRadius: '0.75rem',
                      overflow: 'hidden',
                      padding: 'var(--foundation-space-4)',
                      aspectRatio: '3/2',
                      border: '1px solid var(--border-default)',
                    }}
                  >
                    <Box
                      className="scroll-section-image-inner"
                      style={{
                        position: 'relative',
                        zIndex: 1,
                        borderRadius: '0.75rem',
                        overflow: 'hidden',
                        padding: 'var(--foundation-space-3)',
                        backgroundColor: 'transparent',
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        width={1200}
                        height={800}
                        loading="lazy"
                        className="scroll-section-image scroll-section-image-mobile"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center center',
                          display: 'block',
                          borderRadius: '0.75rem',
                          backgroundColor: 'var(--surface-page)',
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </VStack>
            ))}
          </VStack>
        </div>
      </Container>
    </Section>
  );
}

export function ScrollSection() {
  const [isDark, setIsDark] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

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

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    check();
    const onResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(check, 120);
    };
    window.addEventListener('resize', onResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const scrollItems = useMemo(
    () =>
      scrollItemsData.map((item) => ({
        ...item,
        imageSrc: isDark ? item.imageDark : item.imageLight,
      })),
    [isDark]
  );

  return (
    <>
      {isMobile ? (
        <ScrollSectionMobile scrollItems={scrollItems} />
      ) : (
        <ScrollSectionDesktop scrollItems={scrollItems} />
      )}
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

        /* Bildkolumnen – tillräcklig bredd så bilderna inte klipps på vänster sida */
        .scroll-section-content {
          max-width: 640px;
        }
        @media (min-width: 1400px) {
          .scroll-section-content {
            max-width: 720px;
          }
        }

        @media (max-width: 1199px) {
          .scroll-section-grid {
            grid-template-columns: 1fr !important;
            gap: var(--foundation-space-8) !important;
            justify-items: center !important;
          }

          .scroll-section-content {
            width: 100%;
            max-width: 100%;
          }

          .scroll-section-content .scroll-section-item {
            align-items: center !important;
          }

          .scroll-section-content .scroll-section-mobile-image {
            margin-left: auto;
            margin-right: auto;
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

        @media (max-width: 1199px) {
          .scroll-section-header-title {
            display: none !important;
          }
        }

        @media (min-width: 1200px) {
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

        /* Smidigare scroll på desktop: isolera layout (endast stora skärmar – undvik jitter på mobil) */
        @media (min-width: 1200px) {
          .scroll-section-content .scroll-section-item {
            contain: layout;
          }
          .scroll-section-content .scroll-section-animated-box {
            contain: layout style;
            backface-visibility: hidden;
          }
        }
        /* Mobil: inga contain/transform-lager – bara enkel layout så scroll inte hackar */
        .scroll-section-mobile-image {
          will-change: auto;
        }
        /* Reservera höjd så bilder inte hoppar när de laddas */
        .scroll-section-image-container {
          aspect-ratio: 3/2 !important;
          border: 1px solid var(--border-default) !important;
        }
        .scroll-section-image-inner {
          width: 100% !important;
          height: 100% !important;
        }
        .scroll-section-image {
          object-fit: cover !important;
        }
        @media (max-width: 1199px) {
          .scroll-section-image-mobile {
            object-position: center center !important;
          }
        }
        /* Radius på process-sektionens bilder/kort */
        .scroll-section-image-container,
        .scroll-section-image-inner,
        .scroll-section-image {
          border-radius: 0.75rem !important;
        }
        
        @media (max-width: 768px) {
          .scroll-section-image-container,
          .scroll-section-image-inner,
          .scroll-section-image {
            border-radius: 0.5rem !important;
          }
        }
      `}</style>
    </>
  );
}
