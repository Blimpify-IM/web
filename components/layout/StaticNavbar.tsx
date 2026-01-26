'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Section, Container, Box, HStack, VStack, Button, IconButton, SegmentedControl, Icon, Drawer, Logo, LogoText } from '@blimpify-im/ui';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import './StaticNavbar.css';

type Theme = 'light' | 'dark' | 'system';

export function StaticNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pillMetrics, setPillMetrics] = useState({ top: 0, left: 0, width: 0 });
  const [theme, setTheme] = useState<Theme>('system');
  const pillRef = useRef<HTMLDivElement>(null);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme('system');
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;

    if (newTheme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
    } else {
      root.setAttribute('data-theme', newTheme);
    }

    localStorage.setItem('theme', newTheme);
  };

  const handleThemeChange = (value: string) => {
    const newTheme = value as Theme;
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  // Calculate pill dimensions for drawer positioning
  useEffect(() => {
    const updateMetrics = () => {
      if (pillRef.current) {
        const rect = pillRef.current.getBoundingClientRect();
        setPillMetrics({
          top: rect.top + (rect.height / 2),
          left: rect.left,
          width: rect.width,
        });
      }
    };

    updateMetrics();
    window.addEventListener('resize', updateMetrics);
    window.addEventListener('scroll', updateMetrics);

    return () => {
      window.removeEventListener('resize', updateMetrics);
      window.removeEventListener('scroll', updateMetrics);
    };
  }, [mobileOpen]);

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

  const themeOptions = [
    { value: 'light', label: 'Light', icon: <Icon size="sm"><SunIcon /></Icon> },
    { value: 'dark', label: 'Dark', icon: <Icon size="sm"><MoonIcon /></Icon> },
    { value: 'system', label: 'System', icon: <Icon size="sm"><ComputerDesktopIcon /></Icon> },
  ];

  return (
    <>
      {/* Section with fixed positioning at top, no vertical padding */}
      <Section
        as="nav"
        style={{
          position: 'relative',     // 👈 key change
          height: 'var(--navbar-height)',
          paddingTop: 0,
          paddingBottom: 0,
          background: 'transparent',
          zIndex: 1000,
        }}
      >
        <Container useNavbarWidth noPadding align="center">
          <Box ref={pillRef} className="navbar-pill__container">
            {/* LEFT - Logo */}
            <div className="navbar-pill__left">
              <Logo
                src="/assets/Blimpify AB logo.png"
                alt="Blimpify"
                href="/"
                width={36}
                height={36}
                radius="lg"
                color="light"

                textWeight="extrabold"
                textTransform="lowercase"
                gap="sm"
                hideTextOnMobile={false}
                className="navbar-pill__logo"
              />
              <LogoText
              href='/'
              size='xl'
              >
                blimpify
              </LogoText>
            </div>

            {/* MIDDLE - Desktop only */}
            <div className="navbar-pill__middle navbar-pill__middle--center">
              {/* Menu items can go here */}
            </div>

            {/* RIGHT - Theme Switcher + Action Buttons */}
            <HStack spacing="sm" className="navbar-pill__right">
              <SegmentedControl
                value={theme}
                onChange={handleThemeChange}
                options={themeOptions}
                size="sm"
                variant="default"
                iconOnly
              />

              <Button variant="ghost" href="https://app.blimpify-im.com/login">
                Logga in
              </Button>
              <Button variant="accent" href="https://builder.blimpify-im.com">
                Hemsidobyggaren
              </Button>
            </HStack>

            {/* MOBILE TOGGLE */}
            <IconButton
              variant="ghost"
              size="md"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="navbar-pill__mobile-toggle"
              icon={<Icon size="md">{mobileOpen ? <XMarkIcon /> : <Bars3Icon />}</Icon>}
            />
          </Box>
        </Container>
      </Section>

      {/* MOBILE DRAWER - Using Blimpify Drawer component */}
      <Drawer
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        showCloseButton={false}
        preventScroll={true}
        type="pill"
        className="drawer-variant-pill-sheet"
        style={{
          top: `${pillMetrics.top}px`,
          left: `${pillMetrics.left}px`,
          width: `${pillMetrics.width}px`,
        }}
      >
        <VStack
          spacing="md"
          align="stretch"
          className="drawer-pill-content drawer-align-center"
        >
          {/* Theme Switcher Mobile */}
          <SegmentedControl
            value={theme}
            onChange={handleThemeChange}
            options={themeOptions}
            size="md"
            variant="default"
            fullWidth
          />

          {/* Actions section */}
          <VStack spacing="sm" className="drawer-pill-actions">
            <Button
              variant="ghost"
              href="https://app.blimpify-im.com/login"
              onClick={() => setMobileOpen(false)}
              className="drawer-pill-button"
            >
              Logga in
            </Button>
            <Button
              variant="accent"
              href="https://builder.blimpify-im.com"
              onClick={() => setMobileOpen(false)}
              className="drawer-pill-button"
            >
              Hemsidobyggaren
            </Button>
          </VStack>
        </VStack>
      </Drawer>
    </>
  );
}
