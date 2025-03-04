import React from 'react'
import styles from './components.module.css'

export default function ComponentsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Blimpify UI-komponenter</h1>
          <p>En guide till de vanligaste UI-komponenterna i Blimpify</p>
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.introduction}>
          <h2>Introduktion</h2>
          <p>
            Denna dokumentation visar de vanligaste UI-komponenterna som används i Blimpify-projektet.
            Komponenterna är utformade för att vara konsekventa, tillgängliga och enkla att använda.
          </p>
          <p>
            Genom att använda dessa fördefinierade komponenter säkerställer vi att designen 
            förblir konsekvent över hela plattformen och att användarupplevelsen är enhetlig.
          </p>
        </div>
        
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Knappar</h2>
          
          <div className={styles.componentGroup}>
            <div className={styles.componentItem}>
              <button className={styles.primaryButton}>Primär knapp</button>
              <p className={styles.componentDescription}>
                Primär knapp används för huvudåtgärder och viktiga interaktioner.
                <br />
                <code>className="primaryButton"</code>
              </p>
            </div>
            
            <div className={styles.componentItem}>
              <button className={styles.secondaryButton}>Sekundär knapp</button>
              <p className={styles.componentDescription}>
                Sekundär knapp används för mindre viktiga åtgärder.
                <br />
                <code>className="secondaryButton"</code>
              </p>
            </div>
            
            <div className={styles.componentItem}>
              <button className={styles.outlineButton}>Kontur-knapp</button>
              <p className={styles.componentDescription}>
                Kontur-knapp används för alternativa åtgärder.
                <br />
                <code>className="outlineButton"</code>
              </p>
            </div>
            
            <div className={styles.componentItem}>
              <button className={styles.textButton}>Textknapp</button>
              <p className={styles.componentDescription}>
                Textknapp används för subtila åtgärder.
                <br />
                <code>className="textButton"</code>
              </p>
            </div>
            
            <div className={styles.componentItem}>
              <button className={styles.iconButton}>
                <span className={styles.iconPlaceholder}>+</span>
              </button>
              <p className={styles.componentDescription}>
                Ikonknapp används för kompakta åtgärder.
                <br />
                <code>className="iconButton"</code>
              </p>
            </div>
          </div>
          
          <div className={styles.componentVariants}>
            <h3>Knappvarianter</h3>
            
            <div className={styles.variantGroup}>
              <h4>Storlekar</h4>
              <div className={styles.variantRow}>
                <button className={`${styles.primaryButton} ${styles.buttonSmall}`}>Liten</button>
                <button className={styles.primaryButton}>Normal</button>
                <button className={`${styles.primaryButton} ${styles.buttonLarge}`}>Stor</button>
              </div>
            </div>
            
            <div className={styles.variantGroup}>
              <h4>Tillstånd</h4>
              <div className={styles.variantRow}>
                <button className={styles.primaryButton}>Normal</button>
                <button className={`${styles.primaryButton} ${styles.buttonHover}`}>Hover</button>
                <button className={`${styles.primaryButton} ${styles.buttonActive}`}>Aktiv</button>
                <button className={`${styles.primaryButton} ${styles.buttonDisabled}`} disabled>Inaktiverad</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Kort</h2>
          
          <div className={styles.componentGroup}>
            <div className={styles.componentItem}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3>Standardkort</h3>
                </div>
                <div className={styles.cardBody}>
                  <p>Detta är ett standardkort som används för att visa information.</p>
                </div>
                <div className={styles.cardFooter}>
                  <button className={styles.textButton}>Läs mer</button>
                </div>
              </div>
              <p className={styles.componentDescription}>
                Standardkort används för att visa information i en strukturerad form.
                <br />
                <code>className="card"</code>
              </p>
            </div>
            
            <div className={styles.componentItem}>
              <div className={`${styles.card} ${styles.cardHoverable}`}>
                <div className={styles.cardHeader}>
                  <h3>Hovra-kort</h3>
                </div>
                <div className={styles.cardBody}>
                  <p>Detta kort har en hover-effekt för att indikera att det är klickbart.</p>
                </div>
                <div className={styles.cardFooter}>
                  <button className={styles.textButton}>Läs mer</button>
                </div>
              </div>
              <p className={styles.componentDescription}>
                Hovra-kort används för klickbara kort med hover-effekt.
                <br />
                <code>className="card cardHoverable"</code>
              </p>
            </div>
            
            <div className={styles.componentItem}>
              <div className={`${styles.card} ${styles.cardFeatured}`}>
                <div className={styles.cardHeader}>
                  <h3>Framhävt kort</h3>
                </div>
                <div className={styles.cardBody}>
                  <p>Detta kort är framhävt för att dra uppmärksamhet till viktigt innehåll.</p>
                </div>
                <div className={styles.cardFooter}>
                  <button className={styles.primaryButton}>Åtgärd</button>
                </div>
              </div>
              <p className={styles.componentDescription}>
                Framhävt kort används för att betona viktigt innehåll.
                <br />
                <code>className="card cardFeatured"</code>
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Formulärelement</h2>
          
          <div className={styles.componentGroup}>
            <div className={styles.componentItem}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="textInput">Textfält</label>
                <input 
                  type="text" 
                  id="textInput" 
                  className={styles.input} 
                  placeholder="Skriv något här..." 
                />
              </div>
              <p className={styles.componentDescription}>
                Textfält används för att samla in text från användaren.
                <br />
                <code>className="input"</code>
              </p>
            </div>
            
            <div className={styles.componentItem}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="textarea">Textområde</label>
                <textarea 
                  id="textarea" 
                  className={styles.textarea} 
                  placeholder="Skriv en längre text här..." 
                  rows={4}
                ></textarea>
              </div>
              <p className={styles.componentDescription}>
                Textområde används för längre textinmatning.
                <br />
                <code>className="textarea"</code>
              </p>
            </div>
            
            <div className={styles.componentItem}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="select">Rullgardinsmeny</label>
                <select id="select" className={styles.select}>
                  <option value="">Välj ett alternativ</option>
                  <option value="1">Alternativ 1</option>
                  <option value="2">Alternativ 2</option>
                  <option value="3">Alternativ 3</option>
                </select>
              </div>
              <p className={styles.componentDescription}>
                Rullgardinsmeny används för att välja ett alternativ från en lista.
                <br />
                <code>className="select"</code>
              </p>
            </div>
            
            <div className={styles.componentItem}>
              <div className={styles.formGroup}>
                <div className={styles.checkbox}>
                  <input type="checkbox" id="checkbox" className={styles.checkboxInput} />
                  <label htmlFor="checkbox" className={styles.checkboxLabel}>Kryssruta</label>
                </div>
              </div>
              <p className={styles.componentDescription}>
                Kryssrutor används för att välja flera alternativ.
                <br />
                <code>className="checkbox"</code>
              </p>
            </div>
            
            <div className={styles.componentItem}>
              <div className={styles.formGroup}>
                <div className={styles.radio}>
                  <input type="radio" id="radio1" name="radioGroup" className={styles.radioInput} />
                  <label htmlFor="radio1" className={styles.radioLabel}>Radioknapp 1</label>
                </div>
                <div className={styles.radio}>
                  <input type="radio" id="radio2" name="radioGroup" className={styles.radioInput} />
                  <label htmlFor="radio2" className={styles.radioLabel}>Radioknapp 2</label>
                </div>
              </div>
              <p className={styles.componentDescription}>
                Radioknappar används för att välja ett alternativ från en grupp.
                <br />
                <code>className="radio"</code>
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Meddelanden</h2>
          
          <div className={styles.componentGroup}>
            <div className={styles.componentItem}>
              <div className={styles.alert + ' ' + styles.alertSuccess}>
                <span className={styles.alertIcon}>✓</span>
                <div className={styles.alertContent}>
                  <h4 className={styles.alertTitle}>Framgång</h4>
                  <p className={styles.alertMessage}>Operationen slutfördes framgångsrikt.</p>
                </div>
              </div>
              <p className={styles.componentDescription}>
                Framgångsmeddelande används för att visa lyckade åtgärder.
                <br />
                <code>className="alert alertSuccess"</code>
              </p>
            </div>
            
            <div className={styles.componentItem}>
              <div className={styles.alert + ' ' + styles.alertError}>
                <span className={styles.alertIcon}>✕</span>
                <div className={styles.alertContent}>
                  <h4 className={styles.alertTitle}>Fel</h4>
                  <p className={styles.alertMessage}>Ett fel inträffade. Försök igen senare.</p>
                </div>
              </div>
              <p className={styles.componentDescription}>
                Felmeddelande används för att visa fel och misslyckade åtgärder.
                <br />
                <code>className="alert alertError"</code>
              </p>
            </div>
            
            <div className={styles.componentItem}>
              <div className={styles.alert + ' ' + styles.alertWarning}>
                <span className={styles.alertIcon}>!</span>
                <div className={styles.alertContent}>
                  <h4 className={styles.alertTitle}>Varning</h4>
                  <p className={styles.alertMessage}>Var försiktig med denna åtgärd.</p>
                </div>
              </div>
              <p className={styles.componentDescription}>
                Varningsmeddelande används för att visa varningar.
                <br />
                <code>className="alert alertWarning"</code>
              </p>
            </div>
            
            <div className={styles.componentItem}>
              <div className={styles.alert + ' ' + styles.alertInfo}>
                <span className={styles.alertIcon}>i</span>
                <div className={styles.alertContent}>
                  <h4 className={styles.alertTitle}>Information</h4>
                  <p className={styles.alertMessage}>Här är lite användbar information.</p>
                </div>
              </div>
              <p className={styles.componentDescription}>
                Informationsmeddelande används för att visa information.
                <br />
                <code>className="alert alertInfo"</code>
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Riktlinjer för användning</h2>
          
          <div className={styles.guidelines}>
            <h3>Konsekvent användning</h3>
            <p>
              Använd komponenter konsekvent genom hela gränssnittet. Till exempel bör primära 
              knappar alltid användas för huvudåtgärder och sekundära knappar för mindre viktiga åtgärder.
            </p>
            
            <h3>Tillgänglighet</h3>
            <p>
              Se till att alla komponenter är tillgängliga för alla användare, inklusive de med 
              funktionsnedsättningar. Använd semantisk HTML, tillräcklig kontrast och se till att 
              komponenter kan användas med tangentbord.
            </p>
            
            <h3>Responsiv design</h3>
            <p>
              Se till att komponenter fungerar bra på alla skärmstorlekar, från mobila enheter 
              till stora skärmar. Använd responsiva designprinciper och testa på olika enheter.
            </p>
            
            <h3>Återanvändning</h3>
            <p>
              Återanvänd befintliga komponenter istället för att skapa nya när det är möjligt. 
              Detta hjälper till att upprätthålla konsekvens och minskar utvecklingstiden.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 