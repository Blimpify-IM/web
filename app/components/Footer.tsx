'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://devapi.blimpify.co/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })

      if (response.ok) {
        setEmail('')
        alert('Tack för din prenumeration!')
      } else {
        throw new Error('Något gick fel')
      }
    } catch (error) {
      alert('Kunde inte prenumerera just nu. Försök igen senare.')
    }
  }
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Om Blimpify */}
        <div className={styles.footerSection}>
          <Link href="/" className={styles.footerLogo}>
            <Image src="/images/simons.png" alt="Blimpify" width={120} height={40} />
          </Link>
          <p className={styles.footerDescription}>
            Blimpify är plattformen som kopplar samman kreatörer med varumärken för 
            att skapa autentiskt och engagerande innehåll.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className={styles.socialLink} aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className={styles.socialLink} aria-label="TikTok">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>

        {/* Snabblänkar */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Snabblänkar</h3>
          <div className={styles.footerLinks}>
            <Link href="/features" className={styles.footerLink}>
              <i className="fas fa-star"></i>
              Funktioner
            </Link>
            <Link href="/pricing" className={styles.footerLink}>
              <i className="fas fa-tag"></i>
              Priser
            </Link>
            <Link href="/about" className={styles.footerLink}>
              <i className="fas fa-info-circle"></i>
              Om oss
            </Link>
            <Link href="/contact" className={styles.footerLink}>
              <i className="fas fa-envelope"></i>
              Kontakt
            </Link>
          </div>
        </div>

        {/* För kreatörer */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>För kreatörer</h3>
          <div className={styles.footerLinks}>
            <Link href="/creators/how-it-works" className={styles.footerLink}>
              <i className="fas fa-play-circle"></i>
              Hur det fungerar
            </Link>
            <Link href="/creators/success-stories" className={styles.footerLink}>
              <i className="fas fa-trophy"></i>
              Featured Creators
            </Link>
            <Link href="/creators/resources" className={styles.footerLink}>
              <i className="fas fa-book"></i>
              Resurser
            </Link>
            <Link href="/creators/faq" className={styles.footerLink}>
              <i className="fas fa-question-circle"></i>
              Vanliga frågor
            </Link>
          </div>
        </div>

        {/* Nyhetsbrev */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Håll dig uppdaterad</h3>
          <p className={styles.footerDescription}>
            Prenumerera på vårt nyhetsbrev för att få de senaste nyheterna och uppdateringarna.
          </p>
          <div className={styles.footerNewsletter}>
            <form className={styles.newsletterForm} onSubmit={handleSubmit}>
              <input 
                type="email" 
                className={styles.newsletterInput} 
                placeholder="Din e-postadress" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <button type="submit" className={styles.newsletterButton}>
                <i className="fas fa-paper-plane"></i>
                Prenumerera
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContent}>
          <div className={styles.copyright}>
            © {currentYear} Blimpify. Alla rättigheter förbehållna.
          </div>
          <div className={styles.footerBottomLinks}>
            <Link href="/privacy" className={styles.footerBottomLink}>Integritetspolicy</Link>
            <Link href="/terms" className={styles.footerBottomLink}>Användarvillkor</Link>
            <Link href="/cookies" className={styles.footerBottomLink}>Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 