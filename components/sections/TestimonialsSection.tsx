'use client';

import { useState, useEffect } from 'react';
import {
  Section,
  Container,
  VStack,
  H2,
  H3,
  Body,
  Badge,
  Card,
  CardContent,
  Tag,
  Grid,
  Display,
  Box,
  CarouselAnimation,
  type CarouselAnimationItem,
  FadeIn,
  HStack,
  Avatar,
} from '@blimpify-im/ui';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Kevin Jansson',
    role: 'Kjmarketingsweden',
    content:
      'Extremt grymma grabbar som vet vad dom håller på med, från skiss av hemsidan till slutligt produktion har allt varit 10/10. Jag är extremt imponerad',
    avatar: '/assets/kjlogowhite.png',
  },
  {
    name: 'Rickson Mansiamina',
    role: 'DifferenceConsulting',
    content:
      'Tack för resan, grabbar! Det har varit ett riktigt bra samarbete. Ni har varit lyhörda och verkligen finjusterat tills hemsidan blev exakt som jag ville ha den. Ni har inte bara levererat, ni har brytt er. Stort tack för allt!',
    avatar: '/assets/dclogo.png',
  },
  {
    name: 'Filip Blank',
    role: 'CreatorzMGMT',
    content:
      'Från första kontakt till lansering har samarbetet fungerat smidigt och professionellt. Ni har varit lyhörda för mina önskemål. Det tekniska fungerar utan problem så jag är väldigt nöjd',
    avatar: '',
  },
  {
    name: 'Philip Flensburg.',
    role: 'Marknadschefen',
    content:
      'Rekommenderar starkt att låta teamet göra din hemsida och underhålla den. De har alltid varit tillmötesgående och otroligt snabba och effektiva att jobba med.',
    avatar: '/assets/mclogo.png',
  }
];

// Helper function to truncate text by word count
const truncateWords = (text: string, maxWords: number): string => {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) {
    return text;
  }
  return words.slice(0, maxWords).join(' ') + '...';
};

export function TestimonialsSection() {
  const MAX_WORDS = 30; // Maximum number of words to show
  const [isMobile, setIsMobile] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  return (
    <Section
      id="testimonials"
      style={{
        background: 'var(--surface-page)',
        position: 'relative',
        overflow: 'visible',
        overflowX: 'clip',
      }}
    >
      {/* Cloud layer - transparent PNG */}
      <div
        className="testimonials-clouds"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(/assets/${isDark ? 'trans-cloud-dark.png' : 'cloudy.png'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.6,
          maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 8%, black 20%, black 80%, transparent 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 8%, black 20%, black 80%, transparent 92%, transparent 100%)',
        }}
      />
      
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <VStack spacing="3xl">
          {/* Header */}
          <FadeIn direction="up" duration={700}>
            <VStack spacing="md" align="center">
              <VStack spacing="md" align={isMobile ? "start" : "center"}>
                <Display
                  size="md"
                  align={isMobile ? "left" : "center"}
                  className="testimonials-header"
                >
                  Vad säger <span className="testimonials-header-break"><br /></span>våra kunder?
                </Display>
              </VStack>
            </VStack>
          </FadeIn>

          {/* Spinning Testimonials Carousel (Desktop) / Grid (Mobile) */}
          <FadeIn direction="up" duration={600} delay={200}>
          {isMobile ? (
            <Grid columns={{ base: 1 }} gap="lg" style={{ alignItems: 'stretch' }}>
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index}
                  padding="lg" 
                  className="testimonial-card"
                  style={{ 
                    width: '100%', 
                    minHeight: '280px',
                    height: '100%',
                    display: 'flex', 
                    flexDirection: 'column' 
                  }}
                >
                  <CardContent style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <VStack spacing="lg" style={{ height: '100%' }}>
                      <HStack spacing="md" align="center">
                        {testimonial.avatar && (
                          <Avatar src={testimonial.avatar} size="sm" shape="rounded" />
                        )}
                        <VStack spacing="xs">
                          <H3 weight="bold">{testimonial.name}</H3>
                          <Body size="sm" color="tertiary">
                            {testimonial.role}
                          </Body>
                        </VStack>
                      </HStack>
                      <Body 
                        size="lg" 
                        color="primary" 
                        style={{ 
                          lineHeight: 1.6, 
                          flex: 1,
                          wordBreak: 'break-word',
                        }}
                      >
                        {truncateWords(testimonial.content, MAX_WORDS)}
                      </Body>
                    </VStack>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          ) : (
          <Box
            style={{
              width: '100%',
              overflow: 'hidden',
            }}
          >
            <CarouselAnimation
              
              items={testimonials.map((testimonial, index) => ({
                id: index,
                content: (
                  <Card 
                    padding="lg" 
                    className="testimonial-card"
                    style={{ 
                      width: '100%', 
                      minHeight: '320px',
                      height: '320px',
                      display: 'flex', 
                      flexDirection: 'column' 
                    }}
                  >
                    <CardContent style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <VStack spacing="lg" style={{ height: '100%' }}>
                        <HStack spacing="md" align="center">
                          {testimonial.avatar && (
                            <Avatar src={testimonial.avatar} size="lg" shape="rounded" />
                          )}
                          <VStack spacing="xs">
                            <H3 weight="bold">{testimonial.name}</H3>
                            <Body size="sm" color="tertiary">
                              {testimonial.role}
                            </Body>
                          </VStack>
                        </HStack>
                        <Body 
                          size="lg" 
                          color="primary" 
                          style={{ 
                            lineHeight: 1.6, 
                            flex: 1,
                            wordBreak: 'break-word',
                          }}
                        >
                          {truncateWords(testimonial.content, MAX_WORDS)}
                    </Body>
                  </VStack>
                </CardContent>
              </Card>
                ),
              }))}
                    speed={80}
              direction="left"
              containerHeight="auto"
              backgroundColor="transparent"
              padding="var(--foundation-space-4) 0"
              itemWidth="400px"
              itemHeight="auto"
              itemPadding="0"
              gap="var(--foundation-space-6)"
              enableFadeEdges={true}
              fadeWidth="100px"
              duplicateCount={6}
              enableHover={false}
              className="testimonials-carousel"
            />
          </Box>
          )}
          </FadeIn>
        </VStack>
      </Container>
      
      <style jsx global>{`
        .testimonials-header-break {
          display: none;
        }
        
        .testimonials-header-break::before {
          content: ' ';
        }
        
        @media (max-width: 768px) {
          .testimonials-header-break {
            display: inline;
          }
          
          .testimonials-header-break::before {
            content: '';
          }
        }
        
        .testimonials-clouds {
          animation: fadeInClouds 1.2s ease-out forwards;
        }
        
        @keyframes fadeInClouds {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.6;
          }
        }
        
        @media (max-width: 768px) {
          .testimonials-clouds {
            background-size: 150% auto !important;
            background-position: center center !important;
            mask-image: linear-gradient(to bottom, transparent 0%, transparent 5%, black 18%, black 82%, transparent 95%, transparent 100%) !important;
            -webkit-mask-image: linear-gradient(to bottom, transparent 0%, transparent 5%, black 18%, black 82%, transparent 95%, transparent 100%) !important;
          }
        }
      `}</style>
    </Section>
  );
}
