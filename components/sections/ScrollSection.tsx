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
      'Skapa ett konto och skicka in dina val, mål och önskemål. Inga tekniska beslut.',
    imageLight: '/assets/order.png',
    imageDark: '/assets/order-dark.png',
    imageAlt: 'Sätt riktningen',
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
      'Du går igenom hemsidan i lugn och ro. Vi justerar tills det känns rätt.',
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
    imageAlt: 'Publicera och gå vidare',
  },
];

export function ScrollSection() {
  const [isDark, setIsDark] = useState(true); // Default to dark theme first

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
      <Container >
        {/* Desktop & Mobile Layout */}
        <div
          className="scroll-section-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '280px 1fr',
            gap: 'var(--space-xl)',
            alignItems: 'start',
          }}
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
            {/* Header - inside aside for proper alignment on desktop */}
            <VStack 
              spacing="sm" 
              align="stretch" 
              className="scroll-section-header"
            >
              <H2 weight="bold" className="scroll-section-header-title" style={{ margin: 0, padding: 'var(--foundation-space-4)' }}>En enkel process</H2>
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
                <VStack
                  key={index}
                  spacing="md"
                  align="stretch"
                  className="scroll-section-item"
                >
                  {/* Mobile Text - shown before image on mobile */}
                  <VStack spacing="sm" align="start" className="scroll-section-mobile-text">
                    <H3>{item.title}</H3>
                    <Body size="md" color="secondary">
                      {item.description}
                    </Body>
                  </VStack>
                  
                  <Box
                    ref={(el) => {
                      imageRefs[index].current = el;
                    }}
                    style={{
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
                            position: 'relative',
                            borderRadius: 'var(--selected-radius-scale-lg)',
                            overflow: 'hidden',
                            boxShadow:
                              activeIndex === index
                                ? 'var(--shadow-strong)'
                                : 'var(--shadow-medium)',
                            transition: 'box-shadow 0.3s ease',
                            padding: 'var(--foundation-space-4)',
                          }}
                        >
                          {/* Content Image on top */}
                          <Box
                            style={{
                              position: 'relative',
                              zIndex: 1,
                              borderRadius: 'var(--selected-radius-scale-lg)',
                              overflow: 'hidden',
                              padding: 'var(--foundation-space-3)',
                              backgroundColor: 'var(--surface-page)',
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
                                borderRadius: 'var(--selected-radius-scale-lg)',
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

      {/* Responsive Styles */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          .scroll-section-grid {
            grid-template-columns: 1fr !important;
            gap: var(--foundation-space-8) !important;
          }
          
          /* Show header above content on mobile */
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
          
          /* Make header more prominent on mobile */
          .scroll-section-header-title {
            font-size: 2.1rem !important;
            line-height: 1.2 !important;
            font-weight: 700 !important;
            padding: 0 !important;
            margin-bottom: 0 !important;
            letter-spacing: -0.02em !important;
          }
          
          /* Ensure item titles (H3) are clearly smaller */
          .scroll-section-mobile-text h3 {
            font-size: 1.5rem !important;
            font-weight: 600 !important;
            line-height: 1.4 !important;
          }
        }
        
        @media (min-width: 1025px) {
          .scroll-section-mobile-text {
            display: none !important;
          }
        }
      `}</style>
    </Section>
  );
}
