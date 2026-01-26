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
} from '@blimpify-im/ui';

interface Testimonial {
  name: string;
  role: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Kevin Jansson',
    role: 'Grundare - Kjmarketingsweden & UGC Creator',
    content:
      'Extremt grymma grabbar som vet vad dom håller på med, från skiss av hemsidan till slutligt produktion har allt varit 10/10. Jag är extremt imponerad',
  },
  {
    name: 'Rickson Mansiamina',
    role: 'Grundare - DifferenceConsulting & författare',
    content:
      'Tack för resan, grabbar! Det har varit ett riktigt bra samarbete. Ni har varit lyhörda och verkligen finjusterat tills hemsidan blev exakt som jag ville ha den. Ni har inte bara levererat, ni har brytt er. Stort tack för allt!',
  },
  {
    name: 'Filip Blank.',
    role: 'Grundare - CreatorzMGMT',
    content:
      'Från första kontakt till lansering har samarbetet fungerat smidigt och professionellt. Ni har varit lyhörda för mina önskemål. Det tekniska fungerar utan problem så jag är väldigt nöjd',
  },
  {
    name: 'Philip Flensburg.',
    role: 'Grundare & Vd - Marknadschefen',
    content:
      '  Att ha Simon och Blimpify med sig för att ha igång en så bra hemsida som möjligt är en no-brainer. Rekommenderar starkt att låta teamet göra din hemsida och underhålla den. De har alltid varit tillmötesgående och otroligt snabba och effektiva att jobba med. Låt deras kreativitet också flöda, du kommer inte ångra dig',
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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Section
      id="testimonials"
      style={{
        background: 'var(--surface-page)',
      }}
    >
      <Container>
        <VStack spacing="3xl">
          {/* Header */}
          <FadeIn direction="up" duration={700}>
            <VStack spacing="md" align="center">
              <Display size='md' align="center">
                Vad våra klienter säger om oss
              </Display>
            </VStack>
          </FadeIn>

          {/* Spinning Testimonials Carousel (Desktop) / Grid (Mobile) */}
          <FadeIn direction="up" duration={600} delay={200}>
          {isMobile ? (
            <Grid columns={{ base: 1 }} gap="lg">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index}
                  padding="lg" 
                  className="testimonial-card"
                  style={{ 
                    width: '100%', 
                    minHeight: 'auto',
                    height: 'auto',
                    display: 'flex', 
                    flexDirection: 'column' 
                  }}
                >
                  <CardContent style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <VStack spacing="lg" style={{ height: '100%' }}>
                      <VStack spacing="sm">
                        <H3 weight="bold">{testimonial.name}</H3>
                        <Body size="sm" color="tertiary">
                          {testimonial.role}
                        </Body>
                      </VStack>
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
                      height: '100%',
                      display: 'flex', 
                      flexDirection: 'column' 
                    }}
                  >
                    <CardContent style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <VStack spacing="lg" style={{ height: '100%' }}>
                    <VStack spacing="sm">
                      <H3 weight="bold">{testimonial.name}</H3>
                      <Body size="sm" color="tertiary">
                        {testimonial.role}
                      </Body>
                    </VStack>
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
    </Section>
  );
}
