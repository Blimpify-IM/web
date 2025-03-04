import React from 'react'
import styles from './privacy.module.css'

export default function Privacy() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Integritetspolicy</h1>
      
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Inledning</h2>
          <p>
            Välkommen till Blimpify's integritetspolicy. Din integritet är viktig för oss. 
            Denna policy beskriver vilken information vi samlar in, hur vi använder den och 
            vilka rättigheter du har gällande dina personuppgifter.
          </p>
        </section>
        
        <section className={styles.section}>
          <h2>Information vi samlar in</h2>
          <p>
            Vi kan samla in följande typer av information:
          </p>
          <ul>
            <li>Personuppgifter som namn, e-postadress och telefonnummer när du registrerar dig eller kontaktar oss</li>
            <li>Användningsinformation om hur du interagerar med vår webbplats</li>
            <li>Enhetsinformation som IP-adress, webbläsartyp och operativsystem</li>
          </ul>
        </section>
        
        <section className={styles.section}>
          <h2>Hur vi använder din information</h2>
          <p>
            Vi använder den insamlade informationen för att:
          </p>
          <ul>
            <li>Tillhandahålla och förbättra våra tjänster</li>
            <li>Kommunicera med dig om uppdateringar och erbjudanden</li>
            <li>Analysera användningsmönster för att förbättra användarupplevelsen</li>
            <li>Förhindra bedrägerier och säkerställa säkerheten på vår plattform</li>
          </ul>
        </section>
        
        <section className={styles.section}>
          <h2>Delning av information</h2>
          <p>
            Vi delar inte dina personuppgifter med tredje part utan ditt samtycke, förutom:
          </p>
          <ul>
            <li>Med tjänsteleverantörer som hjälper oss att driva vår verksamhet</li>
            <li>När det krävs enligt lag eller för att skydda våra rättigheter</li>
          </ul>
        </section>
        
        <section className={styles.section}>
          <h2>Dina rättigheter</h2>
          <p>
            Du har rätt att:
          </p>
          <ul>
            <li>Få tillgång till dina personuppgifter</li>
            <li>Korrigera felaktiga uppgifter</li>
            <li>Begära radering av dina uppgifter</li>
            <li>Invända mot behandling av dina uppgifter</li>
            <li>Begära begränsning av behandling</li>
          </ul>
        </section>
        
        <section className={styles.section}>
          <h2>Kontakta oss</h2>
          <p>
            Om du har frågor om vår integritetspolicy eller hur vi hanterar dina uppgifter, 
            vänligen kontakta oss på info@blimpify.se.
          </p>
        </section>
        
        <section className={styles.section}>
          <h2>Uppdateringar av policyn</h2>
          <p>
            Vi kan uppdatera denna policy från tid till annan. Vi kommer att meddela dig om 
            väsentliga ändringar genom att publicera den nya policyn på vår webbplats.
          </p>
          <p>
            Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}
          </p>
        </section>
      </div>
    </div>
  )
} 