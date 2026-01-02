'use client';

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
  Display
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

export function TestimonialsSection() {
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
          <VStack spacing="md" align="center">
            <Tag variant="accent"> Testimonials</Tag>
            <Display size='lg' align="center">
              Vad våra klienter säger om oss
            </Display>
          </VStack>

          {/* Testimonials Grid */}
          <Grid columns={{sm: 1,md: 2, lg: 3 }}>
            {testimonials.map((testimonial, index) => (
              <Card key={index} padding="lg" >
                <CardContent>
                  <VStack spacing="lg">
                    <VStack spacing="sm">
                      <H3 weight="bold">{testimonial.name}</H3>
                      <Body size="sm" color="tertiary">
                        {testimonial.role}
                      </Body>
                    </VStack>
                    <Body size="lg" color="primary" style={{ lineHeight: 1.6 }}>
                      {testimonial.content}
                    </Body>
                  </VStack>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </VStack>
      </Container>

      {/* Responsive Styles */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: var(--space-xl) !important;
          }
        }

        @media (max-width: 640px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-lg) !important;
          }
        }
      `}</style>
    </Section>
  );
}
