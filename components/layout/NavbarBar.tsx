'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  HStack,
  VStack,
  Button,
  TextLink,
  IconButton,
  Logo,
  Drawer,
} from '@blimpify-im/ui';
import { Menu, X } from 'lucide-react';

export interface NavbarBarProps {
  menuAlign?: 'left' | 'center' | 'right';
  transparent?: boolean;
}

export function NavbarBar({
  menuAlign = 'center',
  transparent = false
}: NavbarBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Auto-close drawer when screen becomes desktop size
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (window.innerWidth > 1024) {
          setMobileOpen(false);
        }
      }, 50);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { href: '#how-it-works', label: 'Så fungerar det' },
    { href: '#portfolio', label: 'Våra projekt' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' },
    { href: '#priser', label: 'Priser' },
  ];

  return (
    <nav
      className={`navbar-bar ${transparent ? 'navbar-bar--transparent' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        zIndex: 50,
        background: transparent ? 'transparent' : 'var(--surface-nav, var(--surface-page))',
        borderBottom: transparent ? 'none' : '1px solid var(--border-default)',
        width: '100%',
        backdropFilter: transparent ? 'blur(8px)' : 'none',
        WebkitBackdropFilter: transparent ? 'blur(8px)' : 'none',
      }}
    >
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--foundation-space-8)',
          maxWidth: 'var(--width-navbar)',
          margin: '0 auto',
          padding: 'var(--space-navbar)',
          position: 'relative',
        }}
      >
        {/* LEFT - Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--foundation-space-2)', flexShrink: 0 }}>
          <Logo
            src="/assets/Blimpify AB Logo.png"
            alt="Blimpify"
            width={36}
            height={36}
            border='default'
            color="auto"
            radius="lg"
            textSize="lg"
            textWeight="extrabold"
            gap="sm"
            href="/"
            text="blimpify"
          />
        </div>

        {/* DESKTOP CONTENT */}
        <div
          className="navbar-bar__content"
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            gap: 'var(--foundation-space-8)',
          }}
        >
          {/* Menu Items */}
          <HStack
            className={`navbar-bar__middle navbar-bar__middle--${menuAlign}`}
            spacing="lg"
            style={{
              flexGrow: 1,
              flexShrink: 0,
              justifyContent: menuAlign === 'left' ? 'flex-start' : menuAlign === 'right' ? 'flex-end' : 'center',
              gap: 'var(--foundation-space-5)',
              minWidth: 0,
            }}
          >
            {menuItems.map((item, i) => (
              <TextLink key={i} href={item.href} size="md">
                {item.label}
              </TextLink>
            ))}
          </HStack>

          {/* Action Buttons */}
          <HStack spacing="sm" style={{ flexShrink: 0, gap: 'var(--foundation-space-2)' }}>
            <Button variant="ghost" href="/contact">
              Kontakta oss
            </Button>
            <Button variant="accent" href="https://builder.blimpify-im.com" target="_blank">
            Häng med
            </Button>
          </HStack>
        </div>

        {/* MOBILE TOGGLE */}
        <IconButton
          variant="ghost"
          size="md"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="navbar-bar__mobile-toggle"
          style={{
            display: 'none',
            color: 'var(--icon-strong)',
            marginLeft: 'auto',
          }}
          icon={mobileOpen ? <X /> : <Menu />}
        />
      </Box>

      {/* MOBILE DRAWER */}
      <Drawer
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        showCloseButton={false}
        preventScroll
        type="top"
      >
        <VStack spacing="lg" align="stretch" style={{ padding: 'var(--foundation-space-6)' }}>
          {/* Menu Items */}
          {menuItems.map((item, i) => (
            <TextLink
              key={i}
              href={item.href}
              size="lg"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </TextLink>
          ))}

          {/* Action Buttons */}
          <VStack spacing="sm" style={{ marginTop: 'var(--foundation-space-4)' }}>
            <Button
              variant="ghost"
              href="/contact"
              onClick={() => setMobileOpen(false)}
              style={{ width: '100%' }}
            >
              Kontakta oss
            </Button>
            <Button
              variant="accent"
              href="https://builder.blimpify-im.com"
              target="_blank"
              onClick={() => setMobileOpen(false)}
              style={{ width: '100%' }}
            >
              Kom igång
            </Button>
          </VStack>
        </VStack>
      </Drawer>

      {/* Responsive Styles */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          .navbar-bar__content {
            display: none !important;
          }

          .navbar-bar__mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
