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
        background: 'var(--surface-secondary)',
      }}
    >
      <Container useMediaWidth>
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '280px 1fr',
            gap: 'var(--space-xl)',
            alignItems: 'start',
          }}
          className="scroll-section-grid"
        >
          {/* Sticky Sidebar - fixed width */}
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
              variant='borderless'
              gap='none'
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
    </Section>
  );
}
