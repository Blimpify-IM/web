import React from 'react'
import Link from 'next/link'
import styles from './docs.module.css'

export default function DocsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Blimpify Designsystem</h1>
          <p>En omfattande guide till Blimpifys designsystem och komponenter</p>
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.introduction}>
          <h2>Introduktion</h2>
          <p>
            Välkommen till Blimpifys designsystem. Denna dokumentation ger en detaljerad 
            översikt över designprinciper, komponenter, färger och typografi som används 
            i Blimpify-projektet.
          </p>
          <p>
            Designsystemet är utformat för att säkerställa konsekvens, tillgänglighet och 
            användarvänlighet över hela plattformen. Genom att följa dessa riktlinjer kan 
            vi skapa en enhetlig och tilltalande användarupplevelse.
          </p>
        </div>
        
        <div className={styles.sectionsGrid}>
          <Link href="/docs/colors" className={styles.sectionCard}>
            <div className={styles.sectionIcon} style={{ background: 'var(--primary-gradient)' }}>
              <span>🎨</span>
            </div>
            <div className={styles.sectionContent}>
              <h3>Färger</h3>
              <p>
                Utforska färgpaletten som används i Blimpify, inklusive primära, 
                sekundära, accent- och statusfärger.
              </p>
            </div>
          </Link>
          
          <Link href="/docs/typography" className={styles.sectionCard}>
            <div className={styles.sectionIcon} style={{ background: 'var(--secondary-color)' }}>
              <span>Aa</span>
            </div>
            <div className={styles.sectionContent}>
              <h3>Typografi</h3>
              <p>
                Lär dig om typsnitt, textstilar och typografisk hierarki som 
                används i Blimpify.
              </p>
            </div>
          </Link>
          
          <Link href="/docs/components" className={styles.sectionCard}>
            <div className={styles.sectionIcon} style={{ background: 'var(--accent-gradient)' }}>
              <span>🧩</span>
            </div>
            <div className={styles.sectionContent}>
              <h3>Komponenter</h3>
              <p>
                Utforska UI-komponenter som knappar, kort, formulärelement och 
                meddelanden som används i Blimpify.
              </p>
            </div>
          </Link>
          
          <Link href="/docs/layout" className={styles.sectionCard}>
            <div className={styles.sectionIcon} style={{ background: 'var(--accent-color)' }}>
              <span>📐</span>
            </div>
            <div className={styles.sectionContent}>
              <h3>Layout</h3>
              <p>
                Lär dig om layoutprinciper, rutnät och responsiv design som 
                används i Blimpify.
              </p>
            </div>
          </Link>
          
          <Link href="/docs/icons" className={styles.sectionCard}>
            <div className={styles.sectionIcon} style={{ background: 'var(--primary-color)' }}>
              <span>✨</span>
            </div>
            <div className={styles.sectionContent}>
              <h3>Ikoner</h3>
              <p>
                Utforska ikonbiblioteket som används i Blimpify och lär dig hur 
                du använder ikoner konsekvent.
              </p>
            </div>
          </Link>
          
          <Link href="/docs/animations" className={styles.sectionCard}>
            <div className={styles.sectionIcon} style={{ background: 'var(--secondary-color)' }}>
              <span>🔄</span>
            </div>
            <div className={styles.sectionContent}>
              <h3>Animationer</h3>
              <p>
                Utforska animationer och övergångar som används i Blimpify för 
                att förbättra användarupplevelsen.
              </p>
            </div>
          </Link>
        </div>
        
        <div className={styles.principles}>
          <h2>Designprinciper</h2>
          
          <div className={styles.principlesGrid}>
            <div className={styles.principleCard}>
              <h3>Konsekvent</h3>
              <p>
                Designsystemet säkerställer konsekvens i hela gränssnittet, vilket 
                gör det lättare för användare att lära sig och använda plattformen.
              </p>
            </div>
            
            <div className={styles.principleCard}>
              <h3>Tillgänglig</h3>
              <p>
                Designsystemet följer tillgänglighetsstandarder för att säkerställa 
                att plattformen kan användas av alla, inklusive personer med 
                funktionsnedsättningar.
              </p>
            </div>
            
            <div className={styles.principleCard}>
              <h3>Flexibel</h3>
              <p>
                Designsystemet är flexibelt och kan anpassas för att möta olika 
                behov och användningsfall, samtidigt som det upprätthåller 
                konsekvens.
              </p>
            </div>
            
            <div className={styles.principleCard}>
              <h3>Skalbar</h3>
              <p>
                Designsystemet är utformat för att vara skalbart och kan växa 
                med plattformen när nya funktioner och komponenter läggs till.
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.getStarted}>
          <h2>Kom igång</h2>
          <p>
            För att komma igång med Blimpifys designsystem, utforska de olika 
            sektionerna ovan. Varje sektion innehåller detaljerad information 
            och exempel på hur du använder designsystemet i dina projekt.
          </p>
          <p>
            Om du har frågor eller behöver hjälp, kontakta designteamet på 
            <a href="mailto:design@blimpify.com" className={styles.link}>design@blimpify.com</a>.
          </p>
          
          <div className={styles.cta}>
            <Link href="/docs/components" className={styles.primaryButton}>
              Utforska komponenter
            </Link>
            <Link href="/docs/colors" className={styles.secondaryButton}>
              Se färgpaletten
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 