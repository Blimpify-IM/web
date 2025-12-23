'use client';

import {
  Section,
  Container,
  Box,
  VStack,
  HStack,
  Body,
  H3,
  Logo,
  LogoText,
} from '@blimpify-im/ui';
import Link from 'next/link';

export function Footer() {
  return (
    <Section
      as="footer"
      style={{
        background: 'var(--surface-page)',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <Container>
        {/* ================= TOP FOOTER ================= */}
        <HStack
          justify="between"
          align="start"
          wrap
          style={{
            width: '100%',
            marginBottom: 'var(--foundation-space-12)',
            gap: 'var(--foundation-space-12)',
          }}
        >
          {/* LEFT: Logo */}
          <VStack spacing="md" align="start" style={{ maxWidth: 420 }}>
            <Logo
              src="/assets/Blimpify AB Logo.png"
              alt="Blimpify"
              width={36}
              height={36}
              color="light"
              radius="lg"
              textSize="lg"
              textWeight="extrabold"
              gap="sm"
              href="/"
            />

            <LogoText>Blimpify AB</LogoText>

            <Body size="sm" color="secondary">
              Vi skapar anpassade hemsidor som du enkelt kan uppdatera utan att
              förstöra designen.
            </Body>
          </VStack>

          {/* RIGHT: Navigation (NO GRID) */}
          <HStack spacing="xl" align="start">
            {/* Pages */}
            <VStack spacing="md" align="start">
              <H3>Sidor</H3>
              <VStack spacing="xs" align="start">
                <FooterLink href="#how-it-works">Så fungerar det</FooterLink>
                <FooterLink href="#portfolio">Våra projekt</FooterLink>
                <FooterLink href="#testimonials">Testimonials</FooterLink>
                <FooterLink href="#faq">FAQ</FooterLink>
                <FooterLink href="#priser">Priser</FooterLink>
              </VStack>
            </VStack>

            {/* Contact */}
            <VStack spacing="md" align="start">
              <H3>Kontakt</H3>
              <VStack spacing="xs" align="start">
                <FooterExternal href="https://calendly.com/admin-blimpify/30min">
                  Boka möte
                </FooterExternal>
                <FooterLink href="/contact">Kontakta oss</FooterLink>
                <FooterExternal href="https://builder.blimpify-im.com">
                  Starta projekt
                </FooterExternal>
                <FooterExternal href="mailto:admin@blimpify-im.com">
                  Skicka email
                </FooterExternal>
              </VStack>
            </VStack>
          </HStack>
        </HStack>

        {/* ================= BOTTOM FOOTER ================= */}
        <Box
          style={{
            paddingTop: 'var(--foundation-space-8)',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <HStack justify="between" align="center" wrap>
            <Body size="sm" color="tertiary">
              © 2024 Blimpify AB Org.nr: 559519-2377. Alla rättigheter
              förbehållna.
            </Body>

            <HStack spacing="md">
              <FooterLink href="/terms">Villkor</FooterLink>
              <FooterLink href="/privacy">Integritet</FooterLink>
              <FooterLink href="/cookies">Cookies</FooterLink>
            </HStack>
          </HStack>
        </Box>
      </Container>
    </Section>
  );
}

/* ================= Helpers ================= */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <Body size="sm" color="secondary" style={{ cursor: 'pointer' }}>
        {children}
      </Body>
    </Link>
  );
}

function FooterExternal({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <Body size="sm" color="secondary" style={{ cursor: 'pointer' }}>
        {children}
      </Body>
    </a>
  );
}
