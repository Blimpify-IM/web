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
    title: 'Hemsida',
    description: 'Du sätter riktningen. Vi tar hand om genomförandet.',
    imageLight: '/assets/hemsida.png',
    imageDark: '/assets/hemsida-dark.png',
    imageAlt: 'Hemsida',
  },
  {
    title: 'CMS',
    description: 'Justera text, färger och detaljer när det behövs. Vi tar hand om struktur, helhet och större ändringar.',
    imageLight: '/assets/cms.png',
    imageDark: '/assets/cms-dark.png',
    imageAlt: 'CMS',
  },
  {
    title: 'Domänhantering',
    description: 'Du pekar domänen hos din leverantör – vi kopplar den till vårt system och ser till att allt fungerar.',
    imageLight: '/assets/domain.png',
    imageDark: '/assets/domain-dark.png',
    imageAlt: 'Domänhantering',
  },
  {
    title: 'Statistik',
    description: 'Se hur din hemsida används – följ upp statistik och trafik.',
    imageLight: '/assets/stats.png',
    imageDark: '/assets/stats-dark.png',
    imageAlt: 'Statistik',
  },
  {
    title: 'Byggt för att växa',
    description: 'Vi utvecklar Blimpify i nära dialog med våra medlemmar för att utvecklas tillsammans.',
    imageLight: '/assets/news.png',
    imageDark: '/assets/news-dark.png',
    imageAlt: 'Fler verktyg på väg',
  },
];

export function ScrollSection() {
  const [isDark, setIsDark] = useState(false);

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

  // Create scroll items with correct image based on theme
  const scrollItems = useMemo(() => {
    return scrollItemsData.map(item => ({
      ...item,
      imageSrc: isDark ? item.imageDark : item.imageLight,
    }));
  }, [isDark]);

  // Create individual refs for each scroll part
  const imageRefs = useMemo(
    () => scrollItems.map(() => ({ current: null as HTMLElement | null })),
    [scrollItems]
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
              Det här tar Blimpify hand om åt dig
              </H2>
              <Body size="md" color="secondary">
                -
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
