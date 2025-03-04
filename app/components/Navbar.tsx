'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  // Stäng menyn när man klickar utanför
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  // Stäng menyn när man navigerar
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(path + '/')
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/images/simons.png" 
            alt="Simons logo" 
            width={120} 
            height={40} 
            priority
            style={{ height: "auto" }}
            className={styles.logoImage}
          />
        </Link>

        <div className={styles.spacer}></div>

        {/* Knappar för inloggning/registrering - alltid synliga */}
        <div className={styles.authButtons}>
          <Link href="/login" className={styles.loginButton}>
            Logga in
          </Link>
          <Link href="/register" className={styles.registerButton}>
            Registrera
          </Link>
        </div>

        {/* Huvudmeny-knapp */}
        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Meny"
        >
          <span className={styles.hamburger}></span>
        </button>

        {/* Mega dropdown-meny */}
        <div 
          ref={menuRef}
          className={`${styles.megaMenu} ${isMenuOpen ? styles.active : ''}`}
        >
          <div className={styles.megaMenuContent}>
            <div className={styles.menuSection}>
              <h3 className={styles.menuSectionTitle}>Huvudnavigering</h3>
              <div className={styles.menuLinks}>
                <Link 
                  href="/" 
                  className={`${styles.menuLink} ${isActive('/') && pathname === '/' ? styles.active : ''}`}
                >
                  Hem
                </Link>
                <Link 
                  href="/about" 
                  className={`${styles.menuLink} ${isActive('/about') ? styles.active : ''}`}
                >
                  Om oss
                </Link>
                <Link 
                  href="/services" 
                  className={`${styles.menuLink} ${isActive('/services') ? styles.active : ''}`}
                >
                  Tjänster
                </Link>
                <Link 
                  href="/features" 
                  className={`${styles.menuLink} ${isActive('/features') ? styles.active : ''}`}
                >
                  Funktioner
                </Link>
                <Link 
                  href="/pricing" 
                  className={`${styles.menuLink} ${isActive('/pricing') ? styles.active : ''}`}
                >
                  Priser
                </Link>
                <Link 
                  href="/contact" 
                  className={`${styles.menuLink} ${isActive('/contact') ? styles.active : ''}`}
                >
                  Kontakt
                </Link>
              </div>
            </div>

            <div className={styles.menuSection}>
              <h3 className={styles.menuSectionTitle}>För skapare</h3>
              <div className={styles.menuLinks}>
                <Link 
                  href="/creators/how-it-works" 
                  className={`${styles.menuLink} ${isActive('/creators/how-it-works') ? styles.active : ''}`}
                >
                  Hur det fungerar
                </Link>
                <Link 
                  href="/creators/success-stories" 
                  className={`${styles.menuLink} ${isActive('/creators/success-stories') ? styles.active : ''}`}
                >
                  Framgångshistorier
                </Link>
                <Link 
                  href="/creators/resources" 
                  className={`${styles.menuLink} ${isActive('/creators/resources') ? styles.active : ''}`}
                >
                  Resurser
                </Link>
                <Link 
                  href="/creators/faq" 
                  className={`${styles.menuLink} ${isActive('/creators/faq') ? styles.active : ''}`}
                >
                  Vanliga frågor
                </Link>
              </div>
            </div>

            <div className={styles.menuSection}>
              <h3 className={styles.menuSectionTitle}>Resurser</h3>
              <div className={styles.menuLinks}>
                <Link 
                  href="/faq" 
                  className={`${styles.menuLink} ${isActive('/faq') ? styles.active : ''}`}
                >
                  FAQ
                </Link>
                <Link 
                  href="/terms" 
                  className={`${styles.menuLink} ${isActive('/terms') ? styles.active : ''}`}
                >
                  Användarvillkor
                </Link>
                <Link 
                  href="/privacy" 
                  className={`${styles.menuLink} ${isActive('/privacy') ? styles.active : ''}`}
                >
                  Integritetspolicy
                </Link>
                <Link 
                  href="/cookies" 
                  className={`${styles.menuLink} ${isActive('/cookies') ? styles.active : ''}`}
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 