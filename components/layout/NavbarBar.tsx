'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Box,
  HStack,
  VStack,
  Button,
  TextLink,
  IconButton,
  Logo,
  Drawer,
  FadeIn,
  Body,
  SplitButton,
} from '@blimpify-im/ui';
import { Menu, X } from 'lucide-react';
import { useLandingSession } from '@/hooks/useLandingSession';

export interface NavbarBarProps {
  menuAlign?: 'left' | 'center' | 'right';
}

const APP_BASE = 'https://app.blimpify-im.com';
const API_BASE = typeof process !== 'undefined'
  ? (process.env.NEXT_PUBLIC_API_URL || 'https://api.blimpify-im.com').replace(/\/$/, '')
  : 'https://api.blimpify-im.com';

function getDashboardUrl(role: string | undefined): string {
  if (role === 'admin' || role === 'superadmin') {
    return `${APP_BASE}/admin`;
  }
  return `${APP_BASE}/sites`;
}

// Visar aldrig användarnamn/e-post i navbaren – session kan vara fel pga cookie/partitionering.
function getDisplayName(_user: { username?: string | null; email?: string }): string {
  return 'Dashboard';
}

export function NavbarBar({ menuAlign = 'center' }: NavbarBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user: sessionUser, loading: sessionLoading } = useLandingSession();
  const dashboardUrl = sessionUser ? getDashboardUrl(sessionUser.role) : `${APP_BASE}/sv`;

  // 🔹 animation config (ONLY used in mobile drawer)
  const STAGGER = 60;
  const DURATION = 420;
  const DISTANCE = 20;

  // Scroll glass effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close drawer when screen becomes desktop size
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (window.innerWidth > 1024) setMobileOpen(false);
      }, 50);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { href: '/#scroll-section', label: 'Process', hash: 'scroll-section' },
    { href: '/#system-section', label: 'Tjänster', hash: 'system-section' },
    { href: '/#testimonials', label: 'Omdömen', hash: 'testimonials' },
    { href: '/#pricing', label: 'Priser', hash: 'pricing' },
    { href: '/#faq', label: 'Vanliga frågor', hash: 'faq' },
  ];

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    const currentPath = window.location.pathname;

    if (currentPath === '/') {
      e.preventDefault();
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    e.preventDefault();
    window.location.href = `/#${hash}`;
  };

  return (
    <nav
      className={`navbar-bar ${isScrolled ? 'navbar-bar--scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        zIndex: 50,
        width: '100%',
        background: isScrolled
          ? 'color-mix(in srgb, var(--surface-page) 75%, transparent)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px) saturate(150%)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px) saturate(150%)' : 'none',
        borderBottom: isScrolled
          ? '1px solid var(--border-subtle)'
          : '1px solid transparent',
      }}
    >
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--foundation-space-8)',
          maxWidth: 'var(--width-navbar)',
          margin: '0 auto',
          padding: 'var(--space-navbar)',
        }}
      >
        {/* Vänster: logo – tar lika plats som höger så mitten blir centrerad */}
        <div className="navbar-bar__left">
          <Logo
            src="https://cdn.blimpify-im.com/assets/logo/blimpify-transparent-logo.png"
            alt="Blimpify"
            width={50}
            height={50}
            border="none"
            color="auto"
            radius="lg"
            href="/"
          />
        </div>

        {/* Mitten: länkarna – ligger i absolut centrum oavsett logo/knappar */}
        <div className={`navbar-bar__content navbar-bar__middle-wrap navbar-bar__middle-wrap--${menuAlign}`}>
          <HStack spacing="lg" justify="center">
            {menuItems.map((item, i) =>
              item.hash ? (
              <TextLink
                key={i}
                href={item.href}
                size="md"
                onClick={(e) => handleHashClick(e, item.hash)}
              >
                {item.label}
              </TextLink>
            ) : (
              <Link
                key={i}
                href={item.href}
                style={{ color: 'var(--text-link-color)', textDecoration: 'none' }}
              >
                <Body size="md" weight="medium" style={{ color: 'inherit' }}>
                  {item.label}
                </Body>
              </Link>
              )
            )}
          </HStack>
        </div>

        {/* Höger: knappar – tar lika plats som vänster */}
        <div className="navbar-bar__right">
          <HStack spacing="sm">
            {!sessionLoading && sessionUser ? (
              <SplitButton
                variant="accent"
                size="md"
                menuAlignment="bottom-end"
                menuButtonLabel="Meny"
                onClick={() => { window.location.href = dashboardUrl; }}
                options={[
                  {
                    value: 'dashboard',
                    label: 'Dashboard',
                    onClick: () => { window.location.href = dashboardUrl; },
                  },
                  {
                    value: 'logout',
                    label: 'Logga ut',
                    onClick: async () => {
                      try {
                        await fetch(`${API_BASE}/api/authentication/logout`, {
                          method: 'POST',
                          credentials: 'include',
                          headers: { 'Content-Type': 'application/json' },
                        });
                      } finally {
                        window.location.href = '/';
                      }
                    },
                  },
                ]}
              >
                {getDisplayName(sessionUser)}
              </SplitButton>
            ) : (
              <>
                <Button
                  variant="ghost"
                  href={`${APP_BASE}/sv/login`}
                  className="navbar-login-button"
                >
                  Logga in
                </Button>
                <Button
                  variant="accent"
                  href={`${APP_BASE}/sv/signup`}
                >
                  Kom igång
                </Button>
              </>
            )}
          </HStack>
        </div>

        {/* MOBILE ACTIONS */}
        <HStack spacing="sm" className="navbar-bar__mobile-actions" style={{ display: 'none' }}>
          <IconButton
            variant="ghost"
            size="md"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Stäng meny' : 'Öppna meny'}
            icon={mobileOpen ? <X /> : <Menu />}
          />
        </HStack>
      </Box>

      {/* MOBILE DRAWER – ENDA ÄNDRINGEN: STAGGER */}
      <Drawer
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        preventScroll
        type="top"
        className="drawer-variant-fullscreen"
        showCloseButton={false}
      >
        <VStack
          spacing="lg"
          align="start"
          style={{
            padding: 'var(--foundation-space-6)',
            paddingLeft: 'var(--foundation-space-4)',
          }}
        >
          {menuItems.map((item, i) => (
            <FadeIn
              key={item.label}
              direction="down"
              duration={DURATION}
              delay={i * STAGGER}
              distance={DISTANCE}
              enableScrollTrigger={false}
            >
              {item.hash ? (
                <TextLink
                  href={item.href}
                  size="lg"
                  onClick={(e) => {
                    setMobileOpen(false);
                    handleHashClick(e, item.hash);
                  }}
                >
                  {item.label}
                </TextLink>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ color: 'var(--text-link-color)', textDecoration: 'none' }}
                >
                  <Body size="lg" weight="medium" style={{ color: 'inherit' }}>
                    {item.label}
                  </Body>
                </Link>
              )}
            </FadeIn>
          ))}

          <VStack spacing="sm" align="start" style={{ marginTop: 'var(--foundation-space-4)' }}>
            {!sessionLoading && sessionUser ? (
              <>
                <FadeIn
                  direction="down"
                  duration={DURATION}
                  delay={menuItems.length * STAGGER}
                  distance={DISTANCE}
                  enableScrollTrigger={false}
                >
                  <Body size="sm" color="secondary">{getDisplayName(sessionUser)}</Body>
                </FadeIn>
                <FadeIn
                  direction="down"
                  duration={DURATION}
                  delay={menuItems.length * STAGGER}
                  distance={DISTANCE}
                  enableScrollTrigger={false}
                >
                  <Button
                    variant="accent"
                    href={dashboardUrl}
                    className="navbar-access-button"
                    style={{ width: '100%' }}
                  >
                    Dashboard
                  </Button>
                </FadeIn>
                <FadeIn
                  direction="down"
                  duration={DURATION}
                  delay={(menuItems.length + 1) * STAGGER}
                  distance={DISTANCE}
                  enableScrollTrigger={false}
                >
                  <Button
                    variant="ghost"
                    size="md"
                    style={{ width: '100%' }}
                    onClick={async () => {
                      try {
                        await fetch(`${API_BASE}/api/authentication/logout`, {
                          method: 'POST',
                          credentials: 'include',
                          headers: { 'Content-Type': 'application/json' },
                        });
                      } finally {
                        setMobileOpen(false);
                        window.location.href = '/';
                      }
                    }}
                  >
                    Logga ut
                  </Button>
                </FadeIn>
              </>
            ) : (
              <>
                <FadeIn
                  direction="down"
                  duration={DURATION}
                  delay={menuItems.length * STAGGER}
                  distance={DISTANCE}
                  enableScrollTrigger={false}
                >
                  <Button
                    variant="secondary"
                    href={`${APP_BASE}/sv/login`}
                    className="navbar-login-button"
                    style={{ width: '100%' }}
                  >
                    Logga in
                  </Button>
                </FadeIn>

                <FadeIn
                  direction="down"
                  duration={DURATION}
                  delay={(menuItems.length + 1) * STAGGER}
                  distance={DISTANCE}
                  enableScrollTrigger={false}
                >
                  <Button
                    variant="accent"
                    href={`${APP_BASE}/sv/signup`}
                    className="navbar-access-button"
                    style={{ width: '100%' }}
                  >
                    Kom igång
                  </Button>
                </FadeIn>
              </>
            )}
          </VStack>
        </VStack>
      </Drawer>

      <style jsx global>{`
        .navbar-login-button {
          background-color: var(--surface-raised) !important;
          border: 1px solid var(--border-subtle) !important;
        }
        
        .navbar-login-button:hover {
          background-color: var(--surface-hover) !important;
          border-color: var(--border-default) !important;
        }
        
        .navbar-access-button {
          transition: all 0.2s ease-out;
          background-color: rgba(250, 245, 240, 0.6) !important;
          border-color: rgba(220, 210, 200, 0.4) !important;
          color: rgba(60, 55, 50, 0.9) !important;
          backdrop-filter: blur(8px);
        }
        
        [data-theme='dark'] .navbar-access-button {
          background-color: rgba(40, 35, 30, 0.7) !important;
          border-color: rgba(80, 70, 60, 0.5) !important;
          color: rgba(240, 235, 230, 0.95) !important;
        }
        
        .navbar-access-button:hover {
          background-color: rgba(250, 245, 240, 0.8) !important;
          border-color: rgba(200, 190, 180, 0.5) !important;
          transform: translateY(-1px);
        }
        
        [data-theme='dark'] .navbar-access-button:hover {
          background-color: rgba(50, 45, 40, 0.85) !important;
          border-color: rgba(100, 90, 80, 0.6) !important;
        }
        
        /* Tre kolumner: vänster och höger lika breda → länkarna hamnar i absolut centrum */
        .navbar-bar__left {
          flex: 1;
          min-width: 0;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .navbar-bar__content.navbar-bar__middle-wrap {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          min-width: 0;
        }
        .navbar-bar__middle-wrap--left { justify-content: flex-start; }
        .navbar-bar__middle-wrap--center { justify-content: center; }
        .navbar-bar__middle-wrap--right { justify-content: flex-end; }
        .navbar-bar__right {
          flex: 1;
          min-width: 0;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        @media (max-width: 1124px) {
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
