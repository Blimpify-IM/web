import React from 'react'
import styles from './typography.module.css'

export default function TypographyPage() {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Blimpify Typografi</h1>
          <p>En guide till typografin och textstilar i Blimpify</p>
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.introduction}>
          <h2>Introduktion</h2>
          <p>
            Typografi är en grundläggande del av Blimpifys designsystem. Konsekvent användning 
            av typografi hjälper till att skapa en sammanhängande användarupplevelse och förbättrar 
            läsbarheten över hela plattformen.
          </p>
          <p>
            Denna guide visar de olika textstilar som används i Blimpify-projektet, 
            inklusive rubriker, brödtext, länkar och specialtext.
          </p>
        </div>
        
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Typsnitt</h2>
          <div className={styles.fontFamily}>
            <h3>Primärt typsnitt: Inter</h3>
            <p className={styles.fontSample}>
              Inter är ett typsnitt speciellt utformat för hög läsbarhet på skärmar. 
              Det används för all text i Blimpify.
            </p>
            <div className={styles.fontWeights}>
              <div className={styles.fontWeight}>
                <span className={styles.weightLabel}>Regular (400)</span>
                <p className={styles.weightSample}>Blimpify är en plattform för kreativa innehållsskapare.</p>
              </div>
              <div className={styles.fontWeight}>
                <span className={styles.weightLabel}>Medium (500)</span>
                <p className={styles.weightSample + ' ' + styles.medium}>Blimpify är en plattform för kreativa innehållsskapare.</p>
              </div>
              <div className={styles.fontWeight}>
                <span className={styles.weightLabel}>Semi-Bold (600)</span>
                <p className={styles.weightSample + ' ' + styles.semiBold}>Blimpify är en plattform för kreativa innehållsskapare.</p>
              </div>
              <div className={styles.fontWeight}>
                <span className={styles.weightLabel}>Bold (700)</span>
                <p className={styles.weightSample + ' ' + styles.bold}>Blimpify är en plattform för kreativa innehållsskapare.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Rubriker</h2>
          <div className={styles.typeSample}>
            <h1 className={styles.h1Sample}>Rubrik 1 (h1)</h1>
            <p className={styles.typeInfo}>
              Används för huvudrubriker på sidor. <br />
              <code>font-size: 3rem; font-weight: 700; line-height: 1.2;</code>
            </p>
          </div>
          
          <div className={styles.typeSample}>
            <h2 className={styles.h2Sample}>Rubrik 2 (h2)</h2>
            <p className={styles.typeInfo}>
              Används för sektionsrubriker. <br />
              <code>font-size: 2rem; font-weight: 700; line-height: 1.3;</code>
            </p>
          </div>
          
          <div className={styles.typeSample}>
            <h3 className={styles.h3Sample}>Rubrik 3 (h3)</h3>
            <p className={styles.typeInfo}>
              Används för underrubriker inom sektioner. <br />
              <code>font-size: 1.5rem; font-weight: 600; line-height: 1.4;</code>
            </p>
          </div>
          
          <div className={styles.typeSample}>
            <h4 className={styles.h4Sample}>Rubrik 4 (h4)</h4>
            <p className={styles.typeInfo}>
              Används för mindre rubriker och kortrubriker. <br />
              <code>font-size: 1.25rem; font-weight: 600; line-height: 1.4;</code>
            </p>
          </div>
          
          <div className={styles.typeSample}>
            <h5 className={styles.h5Sample}>Rubrik 5 (h5)</h5>
            <p className={styles.typeInfo}>
              Används för små rubriker och etikettexter. <br />
              <code>font-size: 1.1rem; font-weight: 600; line-height: 1.5;</code>
            </p>
          </div>
          
          <div className={styles.typeSample}>
            <h6 className={styles.h6Sample}>Rubrik 6 (h6)</h6>
            <p className={styles.typeInfo}>
              Används för de minsta rubrikerna och etikettexter. <br />
              <code>font-size: 1rem; font-weight: 600; line-height: 1.5;</code>
            </p>
          </div>
        </div>
        
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Brödtext</h2>
          
          <div className={styles.typeSample}>
            <p className={styles.bodyLarge}>Stor brödtext</p>
            <p className={styles.typeInfo}>
              Används för inledande stycken och betonad text. <br />
              <code>font-size: 1.125rem; font-weight: 400; line-height: 1.6;</code>
            </p>
          </div>
          
          <div className={styles.typeSample}>
            <p className={styles.bodyRegular}>Normal brödtext</p>
            <p className={styles.typeInfo}>
              Standardtext för de flesta innehåll. <br />
              <code>font-size: 1rem; font-weight: 400; line-height: 1.6;</code>
            </p>
          </div>
          
          <div className={styles.typeSample}>
            <p className={styles.bodySmall}>Liten brödtext</p>
            <p className={styles.typeInfo}>
              Används för sekundär information, fotnoter och mindre viktig text. <br />
              <code>font-size: 0.875rem; font-weight: 400; line-height: 1.5;</code>
            </p>
          </div>
        </div>
        
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Interaktiva element</h2>
          
          <div className={styles.typeSample}>
            <a href="#" className={styles.link}>Standardlänk</a>
            <p className={styles.typeInfo}>
              Används för textlänkar i brödtext. <br />
              <code>color: var(--primary-color); text-decoration: none;</code>
            </p>
          </div>
          
          <div className={styles.typeSample}>
            <button className={styles.button}>Knapptext</button>
            <p className={styles.typeInfo}>
              Används för text på knappar. <br />
              <code>font-size: 1rem; font-weight: 500; text-transform: none;</code>
            </p>
          </div>
          
          <div className={styles.typeSample}>
            <span className={styles.navLink}>Navigationslänk</span>
            <p className={styles.typeInfo}>
              Används för länkar i navigationsmenyer. <br />
              <code>font-size: 1rem; font-weight: 500;</code>
            </p>
          </div>
        </div>
        
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Specialtext</h2>
          
          <div className={styles.typeSample}>
            <p className={styles.gradientText}>Gradienttext</p>
            <p className={styles.typeInfo}>
              Används för att betona viktiga rubriker. <br />
              <code>background: var(--primary-gradient); -webkit-background-clip: text; color: transparent;</code>
            </p>
          </div>
          
          <div className={styles.typeSample}>
            <p className={styles.caption}>Bildtext</p>
            <p className={styles.typeInfo}>
              Används för bildtexter och förklaringar. <br />
              <code>font-size: 0.875rem; font-style: italic; color: var(--secondary-lighter);</code>
            </p>
          </div>
          
          <div className={styles.typeSample}>
            <code className={styles.codeText}>const example = "Kodexempel";</code>
            <p className={styles.typeInfo}>
              Används för kodexempel och teknisk text. <br />
              <code>font-family: monospace; font-size: 0.9rem; background: rgba(0,0,0,0.2);</code>
            </p>
          </div>
        </div>
        
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Riktlinjer för användning</h2>
          
          <div className={styles.guidelines}>
            <h3>Hierarki</h3>
            <p>
              Använd typografisk hierarki för att guida användare genom innehållet. 
              Större och fetare text drar mer uppmärksamhet och bör användas för viktigare information.
            </p>
            
            <h3>Läsbarhet</h3>
            <p>
              Säkerställ god läsbarhet genom att använda lämpliga textstorlekar och radavstånd. 
              Undvik för små textstorlekar, särskilt för huvudinnehåll.
            </p>
            
            <h3>Kontrast</h3>
            <p>
              Se till att det finns tillräcklig kontrast mellan text och bakgrund för att 
              uppfylla tillgänglighetsstandarder (WCAG 2.1 AA).
            </p>
            
            <h3>Konsekvent användning</h3>
            <p>
              Använd textstilar konsekvent genom hela gränssnittet för att skapa en 
              sammanhängande användarupplevelse.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 