'use client'

import React, { useState } from 'react'
import styles from './faq.module.css'
import Link from 'next/link'

export default function CreatorsFAQ() {
  // State för att hålla reda på vilken FAQ-fråga som är aktiv
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  // Funktion för att växla mellan öppen/stängd FAQ-fråga
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className={styles.faqContainer}>
      {/* Hero Section */}
      <section className={styles.faqHero}>
        <div className={styles.heroContent}>
          <h1>Vanliga frågor för kreatörer</h1>
          <p>Hitta svar på de vanligaste frågorna om att vara kreatör på Blimpify. Har du inte hittat vad du söker? Kontakta vårt supportteam.</p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className={styles.faqCategories}>
        <div className={styles.categoryCard}>
          <div className={styles.categoryIcon}>
            <i className="fas fa-user-plus"></i>
          </div>
          <h3>Komma igång</h3>
        </div>
        <div className={styles.categoryCard}>
          <div className={styles.categoryIcon}>
            <i className="fas fa-handshake"></i>
          </div>
          <h3>Samarbeten</h3>
        </div>
        <div className={styles.categoryCard}>
          <div className={styles.categoryIcon}>
            <i className="fas fa-money-bill-wave"></i>
          </div>
          <h3>Betalningar</h3>
        </div>
        <div className={styles.categoryCard}>
          <div className={styles.categoryIcon}>
            <i className="fas fa-chart-line"></i>
          </div>
          <h3>Prestanda</h3>
        </div>
        <div className={styles.categoryCard}>
          <div className={styles.categoryIcon}>
            <i className="fas fa-shield-alt"></i>
          </div>
          <h3>Säkerhet</h3>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className={styles.faqAccordion}>
        <h2>Komma igång</h2>
        
        <div className={`${styles.faqItem} ${activeIndex === 0 ? styles.active : ''}`}>
          <div className={styles.faqQuestion} onClick={() => toggleFAQ(0)}>
            <h3>Hur registrerar jag mig som kreatör på Blimpify?</h3>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className={styles.faqAnswer}>
            <p>För att registrera dig som kreatör på Blimpify, klicka på "Registrera" i övre högra hörnet av hemsidan. Fyll i dina personuppgifter, välj "Kreatör" som kontotyp, och följ instruktionerna för att slutföra din profil. Du behöver ladda upp exempel på ditt tidigare arbete och ange dina nischer och expertisområden.</p>
          </div>
        </div>

        <div className={`${styles.faqItem} ${activeIndex === 1 ? styles.active : ''}`}>
          <div className={styles.faqQuestion} onClick={() => toggleFAQ(1)}>
            <h3>Vilka krav finns för att bli godkänd som kreatör?</h3>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className={styles.faqAnswer}>
            <p>För att bli godkänd som kreatör på Blimpify behöver du:</p>
            <ul>
              <li>Ha en etablerad närvaro på minst en social medieplattform</li>
              <li>Kunna visa upp tidigare arbeten och samarbeten</li>
              <li>Ha en tydlig nisch eller expertisområde</li>
              <li>Följa våra riktlinjer för innehåll och etik</li>
            </ul>
            <p>Vi granskar varje ansökan manuellt för att säkerställa kvalitet och relevans för våra varumärkespartners.</p>
          </div>
        </div>

        <div className={`${styles.faqItem} ${activeIndex === 2 ? styles.active : ''}`}>
          <div className={styles.faqQuestion} onClick={() => toggleFAQ(2)}>
            <h3>Hur lång tid tar det att få min profil godkänd?</h3>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className={styles.faqAnswer}>
            <p>Normalt tar granskningsprocessen 2-3 arbetsdagar. Under perioder med hög belastning kan det ta upp till 5 arbetsdagar. Du kommer att få ett e-postmeddelande så fort din profil har granskats, oavsett om den godkänns eller inte. Om din profil inte godkänns kommer vi att ge dig feedback på vad du kan förbättra för att öka dina chanser vid nästa ansökan.</p>
          </div>
        </div>

        <h2>Samarbeten</h2>
        
        <div className={`${styles.faqItem} ${activeIndex === 3 ? styles.active : ''}`}>
          <div className={styles.faqQuestion} onClick={() => toggleFAQ(3)}>
            <h3>Hur matchas jag med varumärken?</h3>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className={styles.faqAnswer}>
            <p>Vår matchningsalgoritm tar hänsyn till flera faktorer:</p>
            <ul>
              <li>Din nisch och expertisområden</li>
              <li>Din målgrupp och demografiska data</li>
              <li>Dina tidigare prestationer och engagemangsnivåer</li>
              <li>Varumärkets specifika krav och målgrupp</li>
              <li>Tidigare samarbeten och feedback</li>
            </ul>
            <p>Ju mer detaljerad information du ger i din profil, desto bättre matchningar kan vi göra. Du kan alltid uppdatera din profil för att förbättra matchningarna.</p>
          </div>
        </div>

        <div className={`${styles.faqItem} ${activeIndex === 4 ? styles.active : ''}`}>
          <div className={styles.faqQuestion} onClick={() => toggleFAQ(4)}>
            <h3>Kan jag tacka nej till ett samarbete?</h3>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className={styles.faqAnswer}>
            <p>Ja, du har alltid full kontroll över vilka samarbeten du vill delta i. När du får en förfrågan har du möjlighet att granska detaljerna och bestämma om du vill acceptera eller avböja. Det finns ingen påföljd för att tacka nej till samarbeten, men att regelbundet acceptera och slutföra uppdrag framgångsrikt kan förbättra din ranking och leda till fler möjligheter.</p>
          </div>
        </div>

        <div className={`${styles.faqItem} ${activeIndex === 5 ? styles.active : ''}`}>
          <div className={styles.faqQuestion} onClick={() => toggleFAQ(5)}>
            <h3>Hur förhandlar jag om ersättning för ett samarbete?</h3>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className={styles.faqAnswer}>
            <p>När du får en samarbetsförfrågan kommer den antingen innehålla en fast ersättning eller en möjlighet att föreslå din egen prissättning. Om du vill förhandla om ersättningen kan du använda meddelandefunktionen för att kommunicera direkt med varumärket. Vi rekommenderar att du är tydlig med din prissättningsmodell och motiverar den baserat på ditt värde, räckvidd och tidigare resultat. I din profil kan du också ange din standardprissättning för olika typer av innehåll, vilket hjälper varumärken att förstå dina förväntningar från början.</p>
          </div>
        </div>

        <h2>Betalningar</h2>
        
        <div className={`${styles.faqItem} ${activeIndex === 6 ? styles.active : ''}`}>
          <div className={styles.faqQuestion} onClick={() => toggleFAQ(6)}>
            <h3>Hur och när får jag betalt för mina samarbeten?</h3>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className={styles.faqAnswer}>
            <p>Betalningsprocessen fungerar så här:</p>
            <ol>
              <li>När ett samarbete godkänns håller Blimpify betalningen i deposition</li>
              <li>Du skapar och levererar innehållet enligt överenskommelsen</li>
              <li>Varumärket godkänner innehållet (har 72 timmar på sig att ge feedback)</li>
              <li>Betalningen frigörs till ditt Blimpify-konto</li>
              <li>Du kan begära utbetalning till ditt bankkonto när som helst (bearbetas inom 3-5 arbetsdagar)</li>
            </ol>
            <p>Vi erbjuder också automatiska månatliga utbetalningar om du föredrar det.</p>
          </div>
        </div>

        <div className={`${styles.faqItem} ${activeIndex === 7 ? styles.active : ''}`}>
          <div className={styles.faqQuestion} onClick={() => toggleFAQ(7)}>
            <h3>Vilka avgifter tar Blimpify?</h3>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className={styles.faqAnswer}>
            <p>Blimpify tar en serviceavgift på 15% från kreatörens ersättning för varje slutfört samarbete. Denna avgift täcker plattformens drift, matchningstjänster, betalningshantering, kundtjänst och kontinuerlig utveckling av nya funktioner. Vi strävar efter att hålla våra avgifter transparenta och konkurrenskraftiga jämfört med branschstandard.</p>
          </div>
        </div>

        <div className={`${styles.faqItem} ${activeIndex === 8 ? styles.active : ''}`}>
          <div className={styles.faqQuestion} onClick={() => toggleFAQ(8)}>
            <h3>Hur hanteras skatter för mina intäkter?</h3>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className={styles.faqAnswer}>
            <p>Som kreatör är du ansvarig för att deklarera dina intäkter och betala tillämpliga skatter enligt lokala lagar och regler. Blimpify tillhandahåller årsrapporter över dina intäkter som du kan använda för din skattedeklaration. Vi rekommenderar att du konsulterar en skatterådgivare för specifik vägledning baserat på din situation och lokala skattelagar.</p>
            <p>För svenska kreatörer: Intäkter från Blimpify räknas vanligtvis som inkomst av näringsverksamhet om du driver företag, eller som inkomst av tjänst om du är privatperson. Du behöver registrera dig för F-skatt om du regelbundet utför uppdrag via plattformen.</p>
          </div>
        </div>

        <h2>Prestanda</h2>
        
        <div className={`${styles.faqItem} ${activeIndex === 9 ? styles.active : ''}`}>
          <div className={styles.faqQuestion} onClick={() => toggleFAQ(9)}>
            <h3>Hur mäter jag framgången för mina samarbeten?</h3>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className={styles.faqAnswer}>
            <p>Blimpify erbjuder en omfattande analysplattform där du kan se detaljerad statistik för varje samarbete, inklusive:</p>
            <ul>
              <li>Räckvidd och visningar</li>
              <li>Engagemang (likes, kommentarer, delningar)</li>
              <li>Klickfrekvens på länkar</li>
              <li>Konverteringar (när tillämpligt)</li>
              <li>Jämförelser med branschgenomsnitt</li>
            </ul>
            <p>Du kan också se trender över tid och identifiera vilka typer av innehåll som presterar bäst. Dessa insikter kan hjälpa dig att förbättra ditt innehåll och öka ditt värde för framtida samarbeten.</p>
          </div>
        </div>

        <div className={`${styles.faqItem} ${activeIndex === 10 ? styles.active : ''}`}>
          <div className={styles.faqQuestion} onClick={() => toggleFAQ(10)}>
            <h3>Hur kan jag förbättra min ranking på plattformen?</h3>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className={styles.faqAnswer}>
            <p>För att förbättra din ranking och få fler samarbetsmöjligheter rekommenderar vi att du:</p>
            <ul>
              <li>Håller din profil uppdaterad med senaste arbeten och statistik</li>
              <li>Levererar innehåll i tid och enligt överenskommelse</li>
              <li>Strävar efter hög kvalitet i allt innehåll du skapar</li>
              <li>Kommunicerar professionellt och snabbt med varumärken</li>
              <li>Ber om recensioner efter slutförda samarbeten</li>
              <li>Deltar aktivt i plattformens community och utbildningsmöjligheter</li>
            </ul>
            <p>Vår algoritm tar hänsyn till alla dessa faktorer när vi matchar kreatörer med varumärken.</p>
          </div>
        </div>

        <h2>Säkerhet</h2>
        
        <div className={`${styles.faqItem} ${activeIndex === 11 ? styles.active : ''}`}>
          <div className={styles.faqQuestion} onClick={() => toggleFAQ(11)}>
            <h3>Hur skyddar Blimpify mina personuppgifter?</h3>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className={styles.faqAnswer}>
            <p>Blimpify tar dataskydd på största allvar. Vi följer GDPR och andra tillämpliga dataskyddslagar. Dina personuppgifter krypteras och lagras säkert, och vi delar endast nödvändig information med varumärken du samarbetar med. Du kan när som helst begära en kopia av dina data eller be oss radera din information enligt gällande lagstiftning. För mer information, se vår <Link href="/privacy" className={styles.inlineLink}>integritetspolicy</Link>.</p>
          </div>
        </div>

        <div className={`${styles.faqItem} ${activeIndex === 12 ? styles.active : ''}`}>
          <div className={styles.faqQuestion} onClick={() => toggleFAQ(12)}>
            <h3>Vad händer om ett varumärke inte godkänner mitt innehåll?</h3>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className={styles.faqAnswer}>
            <p>Om ett varumärke inte godkänner ditt innehåll har de skyldighet att ge specifik feedback om vad som behöver ändras. Du har då möjlighet att göra revideringar enligt feedbacken. Om ni inte kan komma överens trots flera revideringsförsök, kan vårt medlingsteam kopplas in för att hjälpa till att lösa situationen. I sällsynta fall där en överenskommelse inte kan nås, kan samarbetet avbrytas och betalningen återgå till varumärket. Vi strävar alltid efter att hitta en lösning som är rättvis för båda parter.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <h2>Hittade du inte svaret du sökte?</h2>
        <p>Vårt supportteam finns här för att hjälpa dig med alla frågor du kan ha.</p>
        <div className={styles.contactButtons}>
          <Link href="/contact" className={styles.primaryButton}>Kontakta support</Link>
          <a href="mailto:support@blimpify.se" className={styles.secondaryButton}>support@blimpify.se</a>
        </div>
      </section>
    </div>
  )
} 