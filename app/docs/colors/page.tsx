import React from 'react'
import ColorPalette from '../components/ColorPalette'
import styles from './colors.module.css'

export default function ColorsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Blimpify Färgdokumentation</h1>
          <p>En komplett guide till färgpaletten och dess användning i Blimpify</p>
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.introduction}>
          <h2>Introduktion</h2>
          <p>
            Denna dokumentation ger en detaljerad översikt över färgpaletten som används i Blimpify-projektet. 
            Färgerna är noggrant utvalda för att skapa en konsekvent och tilltalande användarupplevelse 
            över hela plattformen.
          </p>
          <p>
            Genom att använda dessa fördefinierade färgvariabler säkerställer vi att designen 
            förblir konsekvent och att eventuella framtida ändringar kan implementeras enkelt 
            genom att uppdatera färgvariablerna på ett ställe.
          </p>
        </div>
        
        <ColorPalette />
        
        <div className={styles.guidelines}>
          <h2>Riktlinjer för användning</h2>
          
          <div className={styles.guidelineSection}>
            <h3>Hierarki</h3>
            <p>
              Använd primära färger för huvudelement och viktiga interaktioner. 
              Sekundära färger bör användas för att skapa kontrast och betona viktiga element. 
              Accentfärger bör användas sparsamt för att dra uppmärksamhet till specifika element.
            </p>
          </div>
          
          <div className={styles.guidelineSection}>
            <h3>Tillgänglighet</h3>
            <p>
              Se till att text har tillräcklig kontrast mot bakgrunden för att säkerställa läsbarhet. 
              Använd verktyg som WCAG Color Contrast Checker för att verifiera att färgkombinationerna 
              uppfyller tillgänglighetsstandarder.
            </p>
          </div>
          
          <div className={styles.guidelineSection}>
            <h3>Konsekvent användning</h3>
            <p>
              Använd färger konsekvent genom hela gränssnittet. Till exempel bör primära knappar 
              alltid använda samma färg, och felmeddelanden bör alltid använda samma röda nyans.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 