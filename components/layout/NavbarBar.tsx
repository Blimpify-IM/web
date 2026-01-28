'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
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
import { useTranslation, useAppUrl, type Locale } from '@/utils/i18n';
import svTranslations from '@/app/[locale]/locales/sv.json';
import enTranslations from '@/app/[locale]/locales/en.json';

const translations = { sv: svTranslations, en: enTranslations };

export interface NavbarBarProps {
  menuAlign?: 'left' | 'center' | 'right';
}

export function NavbarBar({ menuAlign = 'center' }: NavbarBarProps) {
  const { t, locale } = useTranslation(translations);
  const getAppUrl = useAppUrl();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 🔹 animation config (ONLY used in mobile drawer)
  const STAGGER = 60;
  const DURATION = 420;
  const DISTANCE = 20;

  // Detect and handle theme
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

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    document.documentElement.style.setProperty('--is-dark', newTheme === 'dark' ? '1' : '0');

    document.documentElement.classList.toggle('dark', newTheme === 'dark');

    const currentConfig = JSON.parse(localStorage.getItem('blimpify-theme-config') || '{}');
    localStorage.setItem(
      'blimpify-theme-config',
      JSON.stringify({ ...currentConfig, themeMode: newTheme })
    );

    window.dispatchEvent(new Event('theme-changed'));
  };

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
    { href: `/${locale}/#scroll-section`, label: t('layout.navbar.menu.process'), hash: 'scroll-section' },
    { href: `/${locale}/#system-section`, label: t('layout.navbar.menu.services'), hash: 'system-section' },
    { href: `/${locale}/#testimonials`, label: t('layout.navbar.menu.testimonials'), hash: 'testimonials' },
    { href: `/${locale}/#pricing`, label: t('layout.navbar.menu.pricing'), hash: 'pricing' },
    { href: `/${locale}/#faq`, label: t('layout.navbar.menu.faq'), hash: 'faq' },
  ];

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    const currentPath = window.location.pathname;

    if (currentPath === `/${locale}` || currentPath === '/') {
      e.preventDefault();
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    e.preventDefault();
    window.location.href = `/${locale}/#${hash}`;
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
          justifyContent: 'space-between',
          gap: 'var(--foundation-space-8)',
          maxWidth: 'var(--width-navbar)',
          margin: '0 auto',
          padding: 'var(--space-navbar)',
        }}
      >
        <Logo
          src="/assets/Blimpify AB logo.png"
          alt="Blimpify"
          width={36}
          height={36}
          border="default"
          color="auto"
          radius="lg"
          text="blimpify"
          textSize="lg"
          textWeight="extrabold"
          href={`/${locale}`}
        />

        {/* DESKTOP CONTENT – ORÖRD */}
        <div className="navbar-bar__content">
          <HStack
            className={`navbar-bar__middle navbar-bar__middle--${menuAlign}`}
            spacing="lg"
          >
            {menuItems.map((item, i) => (
              <TextLink
                key={i}
                href={item.href}
                size="md"
                onClick={(e) => item.hash && handleHashClick(e, item.hash)}
              >
                {item.label}
              </TextLink>
            ))}
          </HStack>

          <HStack spacing="sm">
            <Button 
              variant="ghost" 
              href={getAppUrl('/login')}
              className="navbar-login-button"
            >
              {t('layout.navbar.login')}
            </Button>
            <Button 
              variant="accent" 
              href={getAppUrl('/waitlist')}
            >
              {t('layout.navbar.getStarted')}
            </Button>
            <IconButton
              variant="secondary"
              size="md"
              onClick={toggleTheme}
              aria-label={isDark ? 'Växla till ljust läge' : 'Växla till mörkt läge'}
              icon={
                <Icon size="md" color="button-ghost">
                  {isDark ? <SunIcon /> : <MoonIcon />}
                </Icon>
              }
            />
          </HStack>
        </div>

        {/* MOBILE ACTIONS – EXAKT SOM FÖRUT */}
        <HStack spacing="sm" className="navbar-bar__mobile-actions" style={{ display: 'none' }}>
          <IconButton
            variant="ghost"
            size="md"
            onClick={toggleTheme}
            aria-label={isDark ? 'Växla till ljust läge' : 'Växla till mörkt läge'}
            icon={
              <Icon size="md" color="button-ghost">
                {isDark ? <SunIcon /> : <MoonIcon />}
              </Icon>
            }
          />
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
            <TextLink
              key={item.label}
              href={item.href}
              size="lg"
              onClick={(e) => {
                setMobileOpen(false);
                if (item.hash) handleHashClick(e, item.hash);
              }}
            >
              {item.label}
            </TextLink>
          ))}

          <VStack spacing="sm" align="start" style={{ marginTop: 'var(--foundation-space-4)' }}>
            <Button 
              variant="secondary" 
              href={getAppUrl('/login')} 
              className="navbar-login-button"
              style={{ width: '100%' }}
            >
              {t('layout.navbar.login')}
            </Button>
            <Button 
              variant="primary" 
              href={getAppUrl('/waitlist')} 
              style={{ width: '100%' }}
            >
              {t('layout.navbar.getStarted')}
            </Button>
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
