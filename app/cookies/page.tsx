'use client'

import React, { useState } from 'react'
import styles from './cookies.module.css'

// Cookie-kategorier och beskrivningar
const cookieCategories = [
  {
    id: 'essential',
    title: 'Nödvändiga cookies',
    description: 'Dessa cookies är nödvändiga för att webbplatsen ska fungera och kan inte stängas av i våra system. De sätts vanligtvis endast som svar på åtgärder du gör som motsvarar en begäran om tjänster, såsom att ställa in dina integritetsinställningar, logga in eller fylla i formulär.',
    required: true,
    examples: ['session_id', 'csrf_token', 'auth_cookie']
  },
  {
    id: 'functional',
    title: 'Funktionella cookies',
    description: 'Dessa cookies gör det möjligt för oss att förbättra funktionaliteten och anpassningen av vår webbplats. De kan ställas in av oss eller av tredjepartsleverantörer vars tjänster vi har lagt till på våra sidor.',
    required: false,
    examples: ['language_preference', 'theme_preference', 'recently_viewed']
  },
  {
    id: 'analytics',
    title: 'Analys-cookies',
    description: 'Dessa cookies hjälper oss att förstå hur besökare interagerar med webbplatsen genom att samla in och rapportera information anonymt. De hjälper oss att förbättra vår webbplats och tjänster.',
    required: false,
    examples: ['google_analytics', 'hotjar', 'page_views']
  },
  {
    id: 'marketing',
    title: 'Marknadsföringscookies',
    description: 'Dessa cookies används för att spåra besökare på webbplatser. Avsikten är att visa annonser som är relevanta och engagerande för den enskilda användaren och därmed mer värdefulla för utgivare och tredjepartsannonsörer.',
    required: false,
    examples: ['facebook_pixel', 'google_ads', 'retargeting_cookie']
  }
];

export default function Cookies() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  
  const toggleCategory = (categoryId: string) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
    }
  };
  
  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Cookie-policy</h1>
          <p>Information om hur Blimpify använder cookies och liknande tekniker, och hur du kan hantera dem.</p>
          <p className={styles.lastUpdated}>Senast uppdaterad: 4 mars 2024</p>
        </div>
      </section>
      
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Vad är cookies?</h2>
          <p>
            Cookies är små textfiler som lagras på din dator, surfplatta eller mobiltelefon när du besöker 
            vår webbplats. De hjälper oss att förbättra din upplevelse genom att komma ihåg dina preferenser 
            och ge oss information om hur du använder vår webbplats.
          </p>
          <p>
            Utöver cookies använder vi även liknande tekniker som webblagring (local storage), som fungerar 
            på liknande sätt men kan lagra mer data och finns kvar även efter att du stängt din webbläsare.
          </p>
        </section>
        
        <section className={styles.section}>
          <h2>Vilka cookies använder vi?</h2>
          <div className={styles.cookieCategories}>
            {cookieCategories.map((category) => (
              <div key={category.id} className={styles.cookieCategory}>
                <div 
                  className={`${styles.categoryHeader} ${expandedCategory === category.id ? styles.expanded : ''}`}
                  onClick={() => toggleCategory(category.id)}
                >
                  <h3>{category.title}</h3>
                  <span className={styles.toggleIcon}>
                    {expandedCategory === category.id ? '−' : '+'}
                  </span>
                </div>
                
                {expandedCategory === category.id && (
                  <div className={styles.categoryContent}>
                    <p>{category.description}</p>
                    <div className={styles.examplesBox}>
                      <h4>Exempel på cookies:</h4>
                      <ul>
                        {category.examples.map((example, index) => (
                          <li key={index}><code>{example}</code></li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.requiredBadge}>
                      {category.required ? 'Nödvändig' : 'Valfri'}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Hur hanterar jag cookies?</h2>
          <p>
            De flesta webbläsare låter dig se vilka cookies du har och radera dem individuellt eller 
            blockera cookies från specifika eller alla webbplatser. Var medveten om att om du raderar 
            eller blockerar cookies kan vissa delar av vår webbplats sluta fungera korrekt.
          </p>
          <div className={styles.browserLinks}>
            <h3>Hantera cookies i din webbläsare:</h3>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/sv/kb/cookies-information-webbplatser-lagrar-pa-din-dator" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/sv-se/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
              <li><a href="https://support.microsoft.com/sv-se/microsoft-edge/ta-bort-cookies-i-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            </ul>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Ändringar i vår cookie-policy</h2>
          <p>
            Vi kan uppdatera vår cookie-policy från tid till annan. När vi gör det kommer vi att revidera 
            datumet för "senast uppdaterad" överst på denna sida. Vi uppmuntrar användare att regelbundet 
            kontrollera denna sida för eventuella ändringar.
          </p>
        </section>
      </div>
      
      <section className={styles.cookiePreferences}>
        <h2>Hantera dina cookie-inställningar</h2>
        <p>Du kan när som helst ändra dina cookie-inställningar för vår webbplats.</p>
        <button className={styles.preferencesButton} onClick={() => alert('Cookie-inställningar skulle visas här')}>
          Ändra cookie-inställningar
        </button>
      </section>
      
      <section className={styles.contactSection}>
        <h2>Frågor om vår cookie-policy?</h2>
        <p>Om du har frågor om vår användning av cookies, kontakta oss gärna.</p>
        <a href="/contact" className={styles.contactButton}>
          Kontakta oss
        </a>
      </section>
    </div>
  );
} 