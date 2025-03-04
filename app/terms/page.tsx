import React from 'react'
import styles from './terms.module.css'

export default function Terms() {
  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Användarvillkor</h1>
          <p>Dessa villkor reglerar din användning av Blimpify och våra tjänster.</p>
          <p className={styles.lastUpdated}>Senast uppdaterad: 4 mars 2024</p>
        </div>
      </section>
      
      <div className={styles.content}>
        <div className={styles.tableOfContents}>
          <h2>Innehåll</h2>
          <ul>
            <li><a href="#introduction">1. Inledning</a></li>
            <li><a href="#definitions">2. Definitioner</a></li>
            <li><a href="#account">3. Ditt konto</a></li>
            <li><a href="#services">4. Våra tjänster</a></li>
            <li><a href="#content">5. Innehåll och upphovsrätt</a></li>
            <li><a href="#payments">6. Betalningar och avgifter</a></li>
            <li><a href="#termination">7. Uppsägning</a></li>
            <li><a href="#liability">8. Ansvarsbegränsning</a></li>
            <li><a href="#changes">9. Ändringar av villkor</a></li>
            <li><a href="#contact">10. Kontakta oss</a></li>
          </ul>
        </div>
        
        <div className={styles.sectionsContainer}>
          <section id="introduction" className={styles.section}>
            <h2>1. Inledning</h2>
            <p>
              Välkommen till Blimpify. Genom att använda vår webbplats och våra tjänster godkänner 
              du dessa användarvillkor. Vänligen läs dem noggrant.
            </p>
            <p>
              Dessa användarvillkor utgör ett juridiskt bindande avtal mellan dig och Blimpify AB 
              och reglerar din tillgång till och användning av Blimpifys plattform, webbplats och tjänster.
            </p>
          </section>
          
          <section id="definitions" className={styles.section}>
            <h2>2. Definitioner</h2>
            <p>
              I dessa användarvillkor avser:
            </p>
            <ul>
              <li>"Blimpify", "vi", "oss" eller "vår" - Blimpify AB</li>
              <li>"Tjänster" - alla produkter, tjänster, innehåll, funktioner, tekniker eller funktioner som erbjuds av Blimpify</li>
              <li>"Användare", "du" eller "din" - varje person som använder våra Tjänster</li>
              <li>"Innehåll" - all text, data, information, bilder, fotografier, grafik, ljud, video eller annat material som laddas upp, delas eller publiceras på plattformen</li>
            </ul>
          </section>
          
          <section id="account" className={styles.section}>
            <h2>3. Ditt konto</h2>
            <p>
              För att använda vissa funktioner i våra Tjänster kan du behöva skapa ett konto. Du ansvarar för att:
            </p>
            <ul>
              <li>Tillhandahålla korrekt och fullständig information när du skapar ditt konto</li>
              <li>Upprätthålla säkerheten för ditt konto och lösenord</li>
              <li>Omedelbart meddela oss om eventuella säkerhetsöverträdelser eller obehörig användning av ditt konto</li>
              <li>Acceptera allt ansvar för aktiviteter som sker under ditt konto</li>
            </ul>
            <p>
              Vi förbehåller oss rätten att stänga av eller avsluta konton som bryter mot våra villkor.
            </p>
          </section>
          
          <section id="services" className={styles.section}>
            <h2>4. Våra tjänster</h2>
            <p>
              Blimpify erbjuder en plattform som kopplar samman kreatörer med företag och individer som behöver kreativa tjänster. 
              Vi tillhandahåller verktyg för att hitta uppdrag, kommunicera med klienter, hantera projekt och betalningar.
            </p>
            <p>
              Vi förbehåller oss rätten att när som helst ändra, pausa eller avbryta någon del av våra Tjänster utan föregående meddelande.
            </p>
          </section>
          
          <section id="content" className={styles.section}>
            <h2>5. Innehåll och upphovsrätt</h2>
            <p>
              Du behåller alla rättigheter till det innehåll du skapar och laddar upp på Blimpify. Genom att ladda upp innehåll ger du oss en icke-exklusiv, 
              global, royaltyfri licens att använda, lagra, visa och distribuera sådant innehåll i samband med våra Tjänster.
            </p>
            <p>
              Du får inte ladda upp innehåll som:
            </p>
            <ul>
              <li>Bryter mot någon lag eller tredje parts rättigheter</li>
              <li>Är bedrägligt, falskt, vilseledande eller bedrägligt</li>
              <li>Är obscent, kränkande, hotfullt eller hatiskt</li>
              <li>Innehåller virus eller annan skadlig kod</li>
            </ul>
          </section>
          
          <section id="payments" className={styles.section}>
            <h2>6. Betalningar och avgifter</h2>
            <p>
              Blimpify tar ut en serviceavgift för transaktioner som sker via vår plattform. Avgifterna anges tydligt innan du genomför en transaktion.
            </p>
            <p>
              Alla betalningar hanteras säkert genom våra betaltjänstleverantörer. Genom att använda våra betaltjänster godkänner du även 
              betaltjänstleverantörens villkor.
            </p>
          </section>
          
          <section id="termination" className={styles.section}>
            <h2>7. Uppsägning</h2>
            <p>
              Du kan när som helst avsluta ditt konto genom att följa instruktionerna på webbplatsen. Vi förbehåller oss rätten att 
              avsluta eller stänga av ditt konto om du bryter mot dessa användarvillkor.
            </p>
            <p>
              Vid uppsägning, oavsett orsak, upphör din rätt att använda Tjänsterna omedelbart.
            </p>
          </section>
          
          <section id="liability" className={styles.section}>
            <h2>8. Ansvarsbegränsning</h2>
            <p>
              I den utsträckning som tillåts enligt lag, ska Blimpify inte vara ansvarig för några indirekta, tillfälliga, särskilda, 
              följdskador eller straffskadestånd, inklusive förlorad vinst, intäkter eller data.
            </p>
            <p>
              Vår totala ansvarsskyldighet som uppstår från eller relaterar till dessa användarvillkor eller din användning av Tjänsterna 
              ska inte överstiga det belopp du har betalat till Blimpify under de senaste 12 månaderna.
            </p>
          </section>
          
          <section id="changes" className={styles.section}>
            <h2>9. Ändringar av villkor</h2>
            <p>
              Vi kan uppdatera dessa användarvillkor från tid till annan. När vi gör det kommer vi att revidera datumet för "senast uppdaterad" 
              överst på denna sida och, i vissa fall, meddela dig via e-post.
            </p>
            <p>
              Genom att fortsätta använda våra Tjänster efter att ändringarna trätt i kraft, godkänner du de reviderade användarvillkoren.
            </p>
          </section>
          
          <section id="contact" className={styles.section}>
            <h2>10. Kontakta oss</h2>
            <p>
              Om du har frågor om dessa användarvillkor, vänligen kontakta oss på:
            </p>
            <p>
              E-post: <a href="mailto:legal@blimpify.se">legal@blimpify.se</a><br />
              Adress: Blimpify AB, Storgatan 1, 123 45 Stockholm
            </p>
          </section>
        </div>
      </div>
      
      <section className={styles.contactSection}>
        <h2>Har du frågor om våra villkor?</h2>
        <p>Kontakta vårt juridiska team så hjälper vi dig att förstå dina rättigheter och skyldigheter.</p>
        <a href="/contact" className={styles.contactButton}>
          Kontakta oss
        </a>
      </section>
    </div>
  );
} 