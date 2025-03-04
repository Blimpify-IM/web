import React from 'react'
import styles from './cookies.module.css'

export default function Cookies() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cookie-policy</h1>
      
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Vad är cookies?</h2>
          <p>
            Cookies är små textfiler som lagras på din dator, surfplatta eller mobiltelefon när du besöker 
            vår webbplats. De hjälper oss att förbättra din upplevelse genom att komma ihåg dina preferenser 
            och ge oss information om hur du använder vår webbplats.
          </p>
        </section>
        
        <section className={styles.section}>
          <h2>Vilka cookies använder vi?</h2>
          <p>Vi använder följande typer av cookies:</p>
          <ul>
            <li>
              <strong>Nödvändiga cookies:</strong> Dessa är viktiga för att du ska kunna använda 
              grundläggande funktioner på vår webbplats, som att logga in på säkra områden.
            </li>
            <li>
              <strong>Funktionella cookies:</strong> Dessa hjälper oss att komma ihåg dina preferenser 
              och val för att förbättra din upplevelse.
            </li>
            <li>
              <strong>Analyscookies:</strong> Dessa ger oss information om hur besökare använder vår 
              webbplats, vilket hjälper oss att förbättra den.
            </li>
            <li>
              <strong>Marknadsföringscookies:</strong> Dessa används för att visa annonser som är 
              relevanta för dig baserat på dina intressen.
            </li>
          </ul>
        </section>
        
        <section className={styles.section}>
          <h2>Hur länge sparas cookies?</h2>
          <p>
            Cookies kan vara tillfälliga (sessionscookies) eller permanenta. Sessionscookies raderas 
            när du stänger din webbläsare, medan permanenta cookies finns kvar på din enhet tills de 
            löper ut eller tills du tar bort dem manuellt.
          </p>
        </section>
        
        <section className={styles.section}>
          <h2>Hur kan du hantera cookies?</h2>
          <p>
            Du kan när som helst ändra dina cookie-inställningar genom att justera inställningarna i 
            din webbläsare. Du kan välja att blockera eller radera cookies. Observera dock att om du 
            väljer att blockera alla cookies kan vissa delar av vår webbplats inte fungera korrekt.
          </p>
          <p>
            För mer information om hur du hanterar cookies, besök din webbläsares hjälpsidor:
          </p>
          <ul>
            <li>Chrome: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">https://support.google.com/chrome/answer/95647</a></li>
            <li>Firefox: <a href="https://support.mozilla.org/sv/kb/cookies-information-webbplatser-sparar-pa-din-dator" target="_blank" rel="noopener noreferrer">https://support.mozilla.org/sv/kb/cookies-information-webbplatser-sparar-pa-din-dator</a></li>
            <li>Safari: <a href="https://support.apple.com/sv-se/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">https://support.apple.com/sv-se/guide/safari/sfri11471/mac</a></li>
            <li>Edge: <a href="https://support.microsoft.com/sv-se/microsoft-edge/ta-bort-cookies-i-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">https://support.microsoft.com/sv-se/microsoft-edge/ta-bort-cookies-i-microsoft-edge</a></li>
          </ul>
        </section>
        
        <section className={styles.section}>
          <h2>Ändringar i vår cookie-policy</h2>
          <p>
            Vi kan komma att uppdatera vår cookie-policy från tid till annan. Eventuella ändringar 
            kommer att publiceras på denna sida. Vi rekommenderar att du regelbundet kontrollerar 
            denna sida för att hålla dig informerad om eventuella ändringar.
          </p>
        </section>
        
        <section className={styles.section}>
          <h2>Kontakta oss</h2>
          <p>
            Om du har några frågor om vår användning av cookies, vänligen kontakta oss på:
          </p>
          <p>E-post: info@blimpify.se</p>
          <p>Telefon: 08-123 45 67</p>
        </section>
      </div>
    </div>
  )
} 