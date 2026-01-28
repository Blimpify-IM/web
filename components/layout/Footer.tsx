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
import { useTranslation, type Locale } from '@/utils/i18n';
import { useParams } from 'next/navigation';
import svTranslations from '@/app/[locale]/locales/sv.json';
import enTranslations from '@/app/[locale]/locales/en.json';

const translations = { sv: svTranslations, en: enTranslations };

export function Footer() {
  const { t, locale } = useTranslation(translations);
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
            {t('layout.footer.tagline')}
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
              {t('layout.footer.copyright')}
            </Body>

            <HStack spacing="md">
              <FooterLink href={`/${locale}/terms`}>{t('layout.footer.terms')}</FooterLink>
              <FooterLink href={`/${locale}/privacy`}>{t('layout.footer.privacy')}</FooterLink>
              <FooterLink href={`/${locale}/cookies`}>{t('layout.footer.cookies')}</FooterLink>
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
