import React from 'react'
import styles from './terms.module.css'

export default function Terms() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Användarvillkor</h1>
      
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>1. Inledning</h2>
          <p>
            Välkommen till Blimpify. Genom att använda vår webbplats och våra tjänster godkänner 
            du dessa användarvillkor. Vänligen läs dem noggrant.
          </p>
        </section>
        
        <section className={styles.section}>
          <h2>2. Definitioner</h2>
          <p>
            I dessa användarvillkor avser:
          </p>
          <ul>
            <li>"Blimpify", "vi", "oss" eller "vår" - Blimpify AB</li>
            <li>"Tjänster" - alla produkter, tjänster, innehåll, funktioner, tekniker eller funktioner som erbjuds av Blimpify</li>
            <li>"Användare", "du" eller "din" - varje person som använder våra Tjänster</li>
          </ul>
        </section>
        
        <section className={styles.section}>
          <h2>3. Användning av tjänsterna</h2>
          <p>
            För att använda våra Tjänster måste du:
          </p>
          <ul>
            <li>Vara minst 18 år gammal eller ha föräldrarnas tillstånd</li>
            <li>Registrera ett konto med korrekt och fullständig information</li>
            <li>Upprätthålla säkerheten för ditt konto och lösenord</li>
            <li>Acceptera ansvaret för all aktivitet som sker under ditt konto</li>
          </ul>
        </section>
        
        <section className={styles.section}>
          <h2>4. Innehåll och uppförande</h2>
          <p>
            Du är ansvarig för allt innehåll du publicerar eller delar genom våra Tjänster. 
            Du får inte:
          </p>
          <ul>
            <li>Publicera olagligt, stötande, hotfullt eller skadligt innehåll</li>
            <li>Kränka andras immateriella rättigheter</li>
            <li>Sprida skadlig kod eller försöka få obehörig åtkomst till våra system</li>
            <li>Använda våra Tjänster för att skicka oönskad kommunikation</li>
          </ul>
        </section>
        
        <section className={styles.section}>
          <h2>5. Immateriella rättigheter</h2>
          <p>
            Alla immateriella rättigheter relaterade till våra Tjänster tillhör Blimpify eller 
            våra licensgivare. Du får inte kopiera, modifiera, distribuera eller skapa härledda 
            verk baserade på vårt innehåll utan vårt uttryckliga tillstånd.
          </p>
        </section>
        
        <section className={styles.section}>
          <h2>6. Ansvarsbegränsning</h2>
          <p>
            Våra Tjänster tillhandahålls "i befintligt skick" utan några garantier. Vi ansvarar 
            inte för indirekta skador, följdskador eller särskilda skador som uppstår från din 
            användning av våra Tjänster.
          </p>
        </section>
        
        <section className={styles.section}>
          <h2>7. Ändringar av villkoren</h2>
          <p>
            Vi kan uppdatera dessa användarvillkor från tid till annan. Vi kommer att meddela 
            dig om väsentliga ändringar innan de träder i kraft. Din fortsatta användning av 
            våra Tjänster efter sådana ändringar utgör ditt godkännande av de nya villkoren.
          </p>
        </section>
        
        <section className={styles.section}>
          <h2>8. Kontakt</h2>
          <p>
            Om du har frågor om dessa användarvillkor, vänligen kontakta oss på info@blimpify.se.
          </p>
          <p>
            Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}
          </p>
        </section>
      </div>
    </div>
  )
} 