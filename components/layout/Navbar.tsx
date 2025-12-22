'use client';

import { Box, HStack, Button } from '@blimpify-im/ui';
import { Logo } from '@blimpify-im/ui';

export function Navbar() {
  return (
    <Box
      as="nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: 'var(--foundation-space-6)',
      }}
    >
      <Box
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          background: 'var(--surface-base)',
          borderRadius: 'var(--selected-radius-scale-2xl)',
          border: '1px solid var(--border-subtle)',
          backdropFilter: 'blur(10px)',
          padding: 'var(--foundation-space-4) var(--foundation-space-6)',
        }}
      >
        <HStack justify="between" align="center">
          {/* Logo */}
          <Logo
            src="/assets/logo.png"
            alt="Blimpify"
            text="blimpify"
            width={48}
            height={20}
            textSize="lg"
            textWeight="extrabold"
            gap="sm"
            href="/"
          />

          {/* Desktop Navigation */}
          <HStack spacing="md" style={{ display: 'none' }} className="desktop-nav">
            <Button variant="ghost" href="https://app.blimpify-im.com/login">
              Logga in
            </Button>
            <Button variant="accent" href="https://builder.blimpify-im.com">
              Hemsidobyggaren
            </Button>
          </HStack>

          {/* Mobile hamburger - TODO: implement with IconButton */}
        </HStack>
      </Box>

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
        }
      `}</style>
    </Box>
  );
}
