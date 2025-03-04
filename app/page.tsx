import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Välkommen till Blimpify</h1>
        <p className={styles.description}>
          Din plattform för smarta lösningar
        </p>
        <div className={styles.buttonContainer}>
          <Link href="/login" className={styles.button}>
            Logga in
          </Link>
          <Link href="/register" className={styles.buttonSecondary}>
            Registrera
          </Link>
        </div>
      </div>
      
      <section className={styles.features}>
        <h2>Våra tjänster</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>Snabb leverans</h3>
            <p>Vi levererar snabbt och effektivt</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Hög kvalitet</h3>
            <p>Kvalitet i varje detalj</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Kundservice</h3>
            <p>Support dygnet runt</p>
          </div>
        </div>
        <div className={styles.featureLink}>
          <Link href="/features" className={styles.learnMore}>
            Utforska alla våra funktioner
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </section>
      
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Blimpify. Alla rättigheter förbehållna.</p>
      </footer>
    </main>
  )
} 