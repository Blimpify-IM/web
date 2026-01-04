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
  Icon,
} from '@blimpify-im/ui';
import { Menu, X } from 'lucide-react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export interface NavbarBarProps {
  menuAlign?: 'left' | 'center' | 'right';
  transparent?: boolean;
}

export function NavbarBar({
  menuAlign = 'center',
  transparent = false
}: NavbarBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Detect and handle theme
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

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    document.documentElement.style.setProperty('--is-dark', newTheme === 'dark' ? '1' : '0');
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save to localStorage
    if (typeof window !== 'undefined') {
      const currentConfig = JSON.parse(localStorage.getItem('blimpify-theme-config') || '{}');
      localStorage.setItem('blimpify-theme-config', JSON.stringify({
        ...currentConfig,
        themeMode: newTheme,
      }));
      
      // Dispatch custom event for theme change
      window.dispatchEvent(new Event('theme-changed'));
    }
  };

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
    { href: '#scroll-section', label: 'Så fungerar det' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#pricing', label: 'Priser' },
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
            src="/assets/Blimpify AB logo.png"
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
            <Button variant="accent" href="https://app.blimpify-im.com/waitlist" target="_blank">
            Få tillgång
            </Button>
            <IconButton
              variant="secondary"
              size="md"
              aria-label={isDark ? 'Växla till ljust läge' : 'Växla till mörkt läge'}
              onClick={toggleTheme}
              icon={
                <Icon size="md" color="button-ghost">
                  {isDark ? <SunIcon /> : <MoonIcon />}
                </Icon>
              }
            />
          </HStack>
        </div>

        {/* MOBILE ACTIONS - Theme Toggle + Menu Toggle */}
        <HStack spacing="sm" className="navbar-bar__mobile-actions" style={{ display: 'none', gap: 'var(--foundation-space-2)' }}>
          <IconButton
            variant="ghost"
            size="md"
            aria-label={isDark ? 'Växla till ljust läge' : 'Växla till mörkt läge'}
            onClick={toggleTheme}
            icon={
              <Icon size="md" color="button-ghost">
                {isDark ? <SunIcon /> : <MoonIcon />}
              </Icon>
            }
          />
        <IconButton
          variant="ghost"
          size="md"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            color: 'var(--icon-strong)',
          }}
          icon={mobileOpen ? <X /> : <Menu />}
        />
        </HStack>
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
              variant="accent"
                     href="https://app.blimpify-im.com/waitlist"
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

          .navbar-bar__mobile-actions {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
