'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Section,
  Container,
  Box,
  VStack,
  HStack,
  Body,
  H3,
  Logo,
  TextLink,
  Display,
} from '@blimpify-im/ui';

export function Footer() {
  const [isDark, setIsDark] = useState(true);

  // Detect theme from document
  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDark(theme === 'dark');
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Section
      as="footer"
      style={{
        position: 'relative',
        background: 'var(--surface-page)',
      }}
    >
      {/* Cloud background with fade-in from top */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(/assets/${isDark ? 'cloudy-dark.png' : 'cloudy.png'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%)',
          zIndex: 0,
        }}
      />
      <Container style={{ position: 'relative', zIndex: 1 }}>
        {/* ================= TOP FOOTER ================= */}
        <VStack spacing="md" align="center" style={{ marginBottom: 'var(--foundation-space-12)' }}>
          <VStack spacing="sm" align="center">
            <Logo
              src="/assets/Blimpify AB logo.png"
              alt="Blimpify"
              width={36}
              height={36}
              border='default'
              color="auto"
              radius="lg"
              href="/"
            />
            <Display size='lg'>
              blimpify
            </Display>
          </VStack>
          <Body size="sm" align="center" style={{ maxWidth: 420 }}>
          Vi bygger inte bara hemsidor. Vi tar ansvar för dem.
          </Body>
            </VStack>

        {/* ================= BOTTOM FOOTER ================= */}
        <Box
          style={{
            paddingTop: 'var(--foundation-space-8)',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <HStack justify="between" align="center" wrap>
            <Body size="sm" color="tertiary"   
            style={{
              color: 'var(--text-subtle)',          // or whatever your normal text color is
              textDecoration: 'none',
            }}>
              © 2025 Blimpify AB Org.nr:{'\u00A0'}559519{'\u2011'}2377. Alla rättigheter
              förbehållna.
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
