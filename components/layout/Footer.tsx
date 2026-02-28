'use client';

import Link from 'next/link';
import {
  Section,
  Container,
  Box,
  VStack,
  HStack,
  Body,
  Logo,
  TextLink,
  Display,
} from '@blimpify-im/ui';

export function Footer() {
  return (
    <Section as="footer" style={{ position: 'relative' }}>
      <Container>
        {/* ================= TOP FOOTER ================= */}
        <VStack spacing="md" align="center" style={{ marginBottom: 'var(--foundation-space-12)' }}>
          <VStack spacing="sm" align="center">
            <Logo
              src="https://cdn.blimpify-im.com/assets/logo/logo.png"
              alt="Blimpify"
              width={36}
              height={36}
              border='default'
              color="auto"
              radius="lg"
              href="/"
            />
            <Display size="lg" align="center">
              blimpify
            </Display>
          </VStack>
          <Body size="sm" align="center" style={{ maxWidth: 420 }}>
            Vi bygger inte bara webbplatser. Vi tar ansvar för dem.
          </Body>
            </VStack>

        {/* ================= BOTTOM FOOTER ================= */}
        <Box
          style={{
            paddingTop: 'var(--foundation-space-8)',
          }}
        >
          <HStack justify="between" align="center" wrap>
            <Body size="sm" color="tertiary"
            style={{
              color: 'var(--text-subtle)',          // or whatever your normal text color is
              textDecoration: 'none',
            }}>
              © 2026 Blimpify AB Org.nr:{'\u00A0'}559519{'\u2011'}2377. Alla rättigheter förbehållna.
            </Body>

            <HStack spacing="md">
              <FooterLink href="/partnerskap">Partnerskap</FooterLink>
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
  // Use Next.js Link directly for internal links to avoid locale prefix issues
  if (href.startsWith('/')) {
    return (
      <Link href={href} style={{ color: 'var(--text-link-color)', textDecoration: 'none' }}>
        <Body size="sm" style={{ color: 'inherit' }}>{children}</Body>
      </Link>
    );
  }
  
  // Use TextLink for hash links and other cases
  return (
    <TextLink
      href={href}
      size="sm"
    >
      {children}
    </TextLink>
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
    <TextLink
      href={href}
      variant="primary"
      size="sm"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </TextLink>
  );
}
