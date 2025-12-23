'use client';

import { useMemo } from 'react';
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
} from '@blimpify-im/ui';

interface ScrollItem {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const scrollItems: ScrollItem[] = [
  {
    title: 'Hemsida',
    description: 'En professionellt designad hemsida byggd av oss, baserad på dina val.',
    imageSrc: '/assets/scrollsection/BDwebsite.png',
    imageAlt: 'Hemsida',
  },
  {
    title: 'CMS',
    description: 'Ändra text, bilder och innehåll när du vill – utan teknisk kunskap.',
    imageSrc: '/assets/scrollsection/BDeditor.png',
    imageAlt: 'CMS',
  },
  {
    title: 'Bokningssystem',
    description: 'Ett komplett bokningssystem med kalender, delbar länk och möjlighet att bädda in på din hemsida.',
    imageSrc: '/assets/scrollsection/BDbokningar.png',
    imageAlt: 'Bokningssystem',
  },
  {
    title: 'Domänhantering',
    description: 'Koppla din domän och hantera DNS direkt i dashboarden.',
    imageSrc: '/assets/scrollsection/BDdomäner.png',
    imageAlt: 'Domänhantering',
  },
  {
    title: 'Statistik',
    description: 'Följ trafiken och se hur din hemsida presterar.',
    imageSrc: '/assets/scrollsection/BDstats.png',
    imageAlt: 'Statistik',
  },
  {
    title: 'Fler verktyg på väg',
    description: 'CRM, formulär, blogg, recensioner, medlemskap och fler moduler.',
    imageSrc: '/assets/scrollsection/BDhållutkik.png',
    imageAlt: 'Fler verktyg på väg',
  },
];

export function ScrollSection() {
  // Create individual refs for each scroll part
  const imageRefs = useMemo(
    () => scrollItems.map(() => ({ current: null as HTMLElement | null })),
    []
  );

  // Use our scroll animation hook
  const { activeIndex, animationValues, scrollToIndex } = useScrollAnimation(imageRefs);

  return (
    <Section
      id="scroll-section"
      overflow="visible"
      overflowX="clip"
      style={{
        background: 'var(--color-surface-secondary)',
        paddingTop: 'var(--space-2xl)',
        paddingBottom: 'var(--space-2xl)',
      }}
    >
      <Container>
        <div
          style={{
            display: 'flex',
            gap: 'var(--space-2xl)',
            overflow: 'visible',
            position: 'relative',
          }}
          className="scroll-section-grid"
        >
          {/* Sticky Sidebar - fixed width */}
          <aside
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-xl)',
              flex: '0 0 280px',
              position: 'sticky',
              top: '120px',
              alignSelf: 'flex-start',
              height: 'fit-content',
            }}
          >
            <VStack spacing="md">
              <H2 weight="bold">
                Vad du kan göra i Blimpify
              </H2>
              <Body size="md" color="secondary">
                Blimpify samlar allt ditt företag behöver – hemsida, verktyg och kontroll – på ett
                ställe.
              </Body>
            </VStack>

            {/* Accordion Sidebar Items */}
            <Accordion
              selectionMode="single"
              expandedKeys={[String(activeIndex)]}
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

          {/* Scrolling Content Column - flexible width */}
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
                <Box
                  key={index}
                  ref={(el) => {
                    imageRefs[index].current = el;
                  }}
                  style={{
                    minHeight: '500px',
                    overflow: 'visible',
                  }}
                >
                  {/* Animated Image with Overflow */}
                  <AnimatedBox
                    opacity={animValues.opacity}
                    translateX={animValues.translateX}
                    translateY={animValues.translateY}
                    scale={animValues.scale}
                  >
                    <OverflowContainer direction="right" spillAmount={220}>
                      <Box
                        style={{
                          borderRadius: 'var(--selected-radius-scale-lg)',
                          overflow: 'hidden',
                          boxShadow:
                            activeIndex === index
                              ? 'var(--shadow-strong)'
                              : 'var(--shadow-medium)',
                          transition: 'box-shadow 0.3s ease',
                        }}
                      >
                        <Image
                          src={item.imageSrc}
                          alt={item.imageAlt}
                          width={1200}
                          height={800}
                          loading="lazy"
                          style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                          }}
                        />
                      </Box>
                    </OverflowContainer>
                  </AnimatedBox>

                  {/* Mobile-only text (hidden on desktop with Accordion) */}
                  <div
                    className="mobile-scroll-text"
                    style={{
                      display: 'none',
                      marginTop: 'var(--space-lg)',
                    }}
                  >
                    <VStack spacing="sm">
                      <H3>{item.title}</H3>
                      <Body size="md" color="secondary">
                        {item.description}
                      </Body>
                    </VStack>
                  </div>
                </Box>
              );
            })}
          </VStack>
        </div>
      </Container>

      {/* Custom Styles */}
      <style jsx global>{`
        /* Accordion styling for scroll section */
        .accordion-active {
          opacity: 1 !important;
        }

        .accordion-item {
          border-bottom: 1px solid var(--color-border-secondary);
          opacity: 0.6;
          cursor: pointer;
          transition: opacity 0.28s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .accordion-item:hover {
          opacity: 0.8;
        }

        .accordion-item.accordion-active {
          opacity: 1;
        }

        @media (max-width: 767px) {
          .scroll-section-grid {
            flex-direction: column !important;
            gap: var(--space-xl) !important;
          }

          /* Hide sticky sidebar on mobile */
          .scroll-section-grid > div:first-child {
            display: none !important;
          }

          /* Show mobile text */
          .mobile-scroll-text {
            display: block !important;
          }

          /* Remove overflow and transforms on mobile */
          .overflow-container {
            width: 100% !important;
            margin-right: 0 !important;
          }

          .animated-box {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </Section>
  );
}
