'use client';

import { useState, useEffect } from 'react';
import { useMemo } from 'react';
import Image from 'next/image';
import {
  Section,
  Container,
  VStack,
  Body,
  Card,
  CardContent,
  Box,
  Display,
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

/* Längre testimonials är utspridda så de inte hamnar bredvid varandra (ordning anpassad för 3-kolumnslayout) */
const testimonials: Testimonial[] = [
  {
    name: 'Rickson Mansiamina',
    role: 'DifferenceConsulting',
    content:
      'Tack för resan, grabbar! Det har varit ett riktigt bra samarbete. Ni har varit lyhörda och verkligen finjusterat tills hemsidan blev exakt som jag ville ha den. Ni har inte bara levererat, ni har brytt er. Stort tack för allt!',
    avatar: '/assets/dclogo.png',
  },
  {
    name: 'Viktor',
    role: 'Efter demo',
    content: 'Bilden är en bra representation av hur jag vill att sidan ska se ut.',
  },
  {
    name: 'Kevin Jansson',
    role: 'Kjmarketingsweden',
    content:
      'Extremt grymma grabbar som vet vad dom håller på med, från skiss av hemsidan till slutligt produktion har allt varit 10/10. Jag är extremt imponerad',
    avatar: '/assets/kjlogowhite.png',
  },
  {
    name: 'Filip',
    role: 'Efter demo',
    content: 'Tack Simon! Snyggt jobbat!!',
  },
  {
    name: 'Philip Flensburg',
    role: 'Marknadschefen',
    content:
      'Rekommenderar starkt att låta teamet göra din hemsida och underhålla den. De har alltid varit tillmötesgående och otroligt snabba och effektiva att jobba med.',
    avatar: '/assets/mclogo.png',
  },
  {
    name: 'Hai',
    role: 'Efter demo',
    content: 'Ouuff ouff oufff det ser vackert ut',
  },
  {
    name: 'Ryan',
    role: 'Efter demo',
    content: 'Oooooo väldigt najs ändå väldigt fin',
  },
  {
    name: 'Edvin',
    role: 'Efter demo',
    content: 'Väldigt snyggt!',
  },
  {
    name: 'Filip Blank',
    role: 'CreatorzMGMT',
    content:
      'Från första kontakt till lansering har samarbetet fungerat smidigt och professionellt. Ni har varit lyhörda för mina önskemål. Det tekniska fungerar utan problem så jag är väldigt nöjd',
  },
  {
    name: 'Leandro',
    role: 'Efter demo',
    content: 'Tack så otroligt Simon! Jätte snyggt! 🤩🤩',
  },
  {
    name: 'Simon',
    role: 'Efter demo',
    content: 'Tjena William, riktigt grymma designs och riktigt snyggt nytt format faktiskt!',
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card variant="outlined" padding="md" radius="md" className="testimonial-card" style={{ width: '100%' }}>
      <CardContent>
        <VStack spacing="md">
          <HStack spacing="md" align="center">
            {testimonial.avatar ? (
              <Box
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  flexShrink: 0,
                  position: 'relative',
                  backgroundColor: 'var(--surface-raised)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  style={{ objectFit: 'contain' }}
                />
              </Box>
            ) : (
              <Avatar
                name={testimonial.name}
                size="md"
                shape="rounded"
                variant="outline"
              />
            )}
            <VStack spacing="xs" align="start">
              <Body size="md" weight="semibold" color="primary">
                {testimonial.name}
              </Body>
              <Body size="sm" color="tertiary">
                {testimonial.role}
              </Body>
            </VStack>
          </HStack>
          <Body size="md" color="primary" style={{ lineHeight: 1.6, wordBreak: 'break-word' }}>
            {testimonial.content}
          </Body>
        </VStack>
      </CardContent>
    </Card>
  );
}

export function TestimonialsSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [numCols, setNumCols] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setIsMobile(w < 768);
      setNumCols(w >= 1024 ? 3 : w >= 768 ? 2 : 1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const columns = useMemo(() => {
    const cols: Testimonial[][] = Array.from({ length: numCols }, () => []);
    testimonials.forEach((t, i) => cols[i % numCols].push(t));
    return cols;
  }, [numCols]);

  return (
    <Section
      id="testimonials"
      style={{
        background: 'var(--surface-page)',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <VStack spacing="3xl">
          <FadeIn direction="up" duration={700}>
            <VStack spacing="md" align="center">
              <Display size="md" align={isMobile ? 'left' : 'center'} className="testimonials-header">
                Så upplevs Blimpify
              </Display>
            </VStack>
          </FadeIn>

          <FadeIn direction="up" duration={600} delay={200}>
            <Box
              className="testimonials-columns"
              style={{
                display: 'grid',
                gridTemplateColumns: numCols === 1 ? '1fr' : numCols === 2 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                gap: 'var(--foundation-space-8)',
                alignItems: 'start',
              }}
            >
              {columns.map((col, colIndex) => (
                <VStack key={colIndex} spacing="lg" align="stretch">
                  {col.map((testimonial, i) => (
                    <TestimonialCard key={`${colIndex}-${i}`} testimonial={testimonial} />
                  ))}
                </VStack>
              ))}
            </Box>
          </FadeIn>
        </VStack>
      </Container>
    </Section>
  );
}
