import React from 'react'
import styles from './services.module.css'
import pageStyles from '../styles/page.module.css'
import Link from 'next/link'

export default function Services() {
  return (
    <div className={pageStyles.pageContainer}>
      <div className={pageStyles.pageHero}>
        <div className={pageStyles.heroContent}>
          <h1>Våra tjänster</h1>
          <p>
            Vi erbjuder ett brett utbud av tjänster för att hjälpa ditt företag att växa 
            och lyckas i den digitala världen. Utforska våra specialområden nedan.
          </p>
        </div>
      </div>
      
      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <div className={styles.serviceIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>
          <h2>Webbutveckling</h2>
          <p>
            Vi skapar moderna, responsiva och användarvänliga webbplatser 
            anpassade efter dina behov. Från enkla landningssidor till 
            komplexa webbapplikationer.
          </p>
          <ul className={styles.serviceFeatures}>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Responsiv design
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              SEO-optimering
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Snabb laddningstid
            </li>
          </ul>
          <Link href="/contact" className={styles.learnMore}>Läs mer</Link>
        </div>
        
        <div className={styles.serviceCard}>
          <div className={styles.serviceIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <h2>Molntjänster</h2>
          <p>
            Vi hjälper dig att migrera till molnet, optimera dina 
            molnresurser och bygga skalbara lösningar med AWS, 
            Azure eller Google Cloud.
          </p>
          <ul className={styles.serviceFeatures}>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Molnmigrering
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Kostnadsoptimering
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Säkerhetslösningar
            </li>
          </ul>
          <Link href="/contact" className={styles.learnMore}>Läs mer</Link>
        </div>
        
        <div className={styles.serviceCard}>
          <div className={styles.serviceIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <h2>Konsulttjänster</h2>
          <p>
            Våra erfarna konsulter hjälper dig att identifiera 
            möjligheter, lösa problem och implementera bästa praxis 
            för din verksamhet.
          </p>
          <ul className={styles.serviceFeatures}>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Strategisk rådgivning
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Processoptimering
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Teknisk utvärdering
            </li>
          </ul>
          <Link href="/contact" className={styles.learnMore}>Läs mer</Link>
        </div>
        
        <div className={styles.serviceCard}>
          <div className={styles.serviceIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h2>Support & Underhåll</h2>
          <p>
            Vi erbjuder kontinuerlig support och underhåll för att 
            säkerställa att dina system fungerar optimalt och är 
            uppdaterade med de senaste säkerhetsuppdateringarna.
          </p>
          <ul className={styles.serviceFeatures}>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              24/7 support
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Säkerhetsuppdateringar
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Prestandaoptimering
            </li>
          </ul>
          <Link href="/contact" className={styles.learnMore}>Läs mer</Link>
        </div>
      </div>
      
      <section className={styles.callToAction}>
        <h2>Redo att komma igång?</h2>
        <p>Kontakta oss idag för en kostnadsfri konsultation om hur vi kan hjälpa dig.</p>
        <Link href="/contact" className={styles.ctaButton}>Kontakta oss</Link>
      </section>
      
      <div className={pageStyles.pageFaq}>
        <h2>Vanliga frågor om våra tjänster</h2>
        <div className={pageStyles.faqGrid}>
          <div className={pageStyles.faqItem}>
            <h3>Hur lång tid tar det att utveckla en webbplats?</h3>
            <p>
              Utvecklingstiden varierar beroende på projektets komplexitet. En enkel webbplats 
              kan ta 2-4 veckor, medan mer komplexa projekt kan ta flera månader. Vi ger alltid 
              en tidsuppskattning i början av projektet.
            </p>
          </div>
          <div className={pageStyles.faqItem}>
            <h3>Vilka molnleverantörer arbetar ni med?</h3>
            <p>
              Vi har omfattande erfarenhet av att arbeta med alla större molnleverantörer, 
              inklusive AWS, Microsoft Azure och Google Cloud Platform. Vi hjälper dig att 
              välja den bästa lösningen för dina behov.
            </p>
          </div>
          <div className={pageStyles.faqItem}>
            <h3>Erbjuder ni utbildning för våra anställda?</h3>
            <p>
              Ja, vi erbjuder skräddarsydda utbildningsprogram för att säkerställa att ditt 
              team kan använda och underhålla de lösningar vi utvecklar. Detta ingår ofta 
              som en del av våra implementeringsprojekt.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 