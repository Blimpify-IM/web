'use client';

import Link from 'next/link';
import React, { useState } from 'react';

import styles from './faq.module.css';

export default function CreatorsFAQ() {
  // State för att hålla reda på vilken FAQ-kategori som är aktiv
  const [activeCategory, setActiveCategory] = useState('general');

  // State för att hålla reda på vilken FAQ-fråga som är aktiv
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Funktion för att växla mellan öppen/stängd FAQ-fråga
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Funktion för att byta kategori
  const changeCategory = (category: string) => {
    setActiveCategory(category);
    setActiveIndex(null);
  };

  return (
    <div className={styles.faqContainer}>
      {/* Hero Section */}
      <section className={styles.faqHero}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Support</span>
          <h1>
            Vanliga <span className={styles.gradientText}>frågor</span> för kreatörer
          </h1>
          <p>
            Hitta svar på de vanligaste frågorna om att vara kreatör på Blimpify. Har du inte hittat
            vad du söker? Kontakta vårt supportteam.
          </p>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroShape1}></div>
          <div className={styles.heroShape2}></div>
          <div className={styles.heroShape3}></div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className={styles.faqCategoriesSection}>
        <div className={styles.sectionHeader}>
          <h2>Välj en kategori</h2>
          <p>Hitta svar på dina frågor genom att välja en kategori nedan</p>
        </div>

        <div className={styles.faqCategories}>
          <button
            className={`${styles.categoryButton} ${activeCategory === 'general' ? styles.active : ''}`}
            onClick={() => changeCategory('general')}
          >
            <div className={styles.categoryIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </div>
            <span>Allmänt</span>
          </button>

          <button
            className={`${styles.categoryButton} ${activeCategory === 'payments' ? styles.active : ''}`}
            onClick={() => changeCategory('payments')}
          >
            <div className={styles.categoryIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <span>Betalningar</span>
          </button>

          <button
            className={`${styles.categoryButton} ${activeCategory === 'collaborations' ? styles.active : ''}`}
            onClick={() => changeCategory('collaborations')}
          >
            <div className={styles.categoryIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <span>Samarbeten</span>
          </button>

          <button
            className={`${styles.categoryButton} ${activeCategory === 'platform' ? styles.active : ''}`}
            onClick={() => changeCategory('platform')}
          >
            <div className={styles.categoryIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <span>Plattformen</span>
          </button>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className={styles.faqAccordion}>
        {/* Allmänna frågor */}
        {activeCategory === 'general' && (
          <div className={styles.faqCategory}>
            <div className={styles.categoryHeader}>
              <h2>Allmänna frågor</h2>
              <p>Grundläggande information om Blimpify och hur det fungerar</p>
            </div>

            <div className={`${styles.faqItem} ${activeIndex === 0 ? styles.active : ''}`}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(0)}>
                <h3>Vad är Blimpify?</h3>
                <div className={styles.faqIcon}></div>
              </div>
              <div className={styles.faqAnswer}>
                <p>
                  Blimpify är en plattform som kopplar samman kreatörer med företag och individer
                  som behöver kreativa tjänster. Vi erbjuder en säker miljö för att hitta uppdrag,
                  kommunicera med klienter och hantera betalningar. Till skillnad från andra
                  plattformar använder vi en egenutvecklad matchningsalgoritm som analyserar
                  konkreta faktorer som kompetensområden, tidigare samarbeten och projektresultat.
                </p>
              </div>
            </div>

            <div className={`${styles.faqItem} ${activeIndex === 1 ? styles.active : ''}`}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(1)}>
                <h3>Vem kan bli kreatör på Blimpify?</h3>
                <div className={styles.faqIcon}></div>
              </div>
              <div className={styles.faqAnswer}>
                <p>
                  Alla kreatörer är välkomna på Blimpify. Vi stödjer ett brett spektrum av kreativa
                  tjänster, inklusive grafisk design, webbdesign, videoproduktion, fotografi,
                  copywriting, social media management, illustration, animation, UX/UI-design, och
                  mycket mer. Vår plattform är designad för att passa alla typer av kreativa
                  samarbeten, oavsett om du är nybörjare eller erfaren.
                </p>
              </div>
            </div>

            <div className={`${styles.faqItem} ${activeIndex === 2 ? styles.active : ''}`}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(2)}>
                <h3>Hur kommer jag igång med Blimpify?</h3>
                <div className={styles.faqIcon}></div>
              </div>
              <div className={styles.faqAnswer}>
                <p>
                  Det är enkelt att komma igång! Registrera ett konto, skapa din profil, ladda upp
                  exempel på ditt arbete och börja utforska tillgängliga uppdrag. Vår
                  onboarding-guide hjälper dig genom hela processen, från verifiering till din
                  första matchning. För att maximera dina chanser att hitta uppdrag, se till att din
                  profil är komplett med detaljerad information om dina färdigheter och
                  erfarenheter.
                </p>
              </div>
            </div>

            <div className={`${styles.faqItem} ${activeIndex === 3 ? styles.active : ''}`}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(3)}>
                <h3>Är Blimpify gratis att använda för kreatörer?</h3>
                <div className={styles.faqIcon}></div>
              </div>
              <div className={styles.faqAnswer}>
                <p>
                  Blimpify erbjuder en freemium-modell. Med ett gratiskonto kan du skapa en profil
                  och söka efter uppdrag.
                </p>
              </div>
            </div>

            <div className={`${styles.faqItem} ${activeIndex === 4 ? styles.active : ''}`}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(4)}>
                <h3>Hur kan jag förbättra min synlighet på plattformen?</h3>
                <div className={styles.faqIcon}></div>
              </div>
              <div className={styles.faqAnswer}>
                <p>
                  För att förbättra din synlighet bör du: 1) Komplettera din profil med detaljerad
                  information om dina färdigheter och erfarenheter, 2) Ladda upp högkvalitativa
                  exempel på tidigare arbeten, 3) Be tidigare klienter om recensioner, 4) Vara aktiv
                  på plattformen och svara snabbt på förfrågningar, 5) Överväga ett
                  premium-medlemskap för prioriterad placering i sökresultat. Ju mer du använder
                  plattformen, desto bättre blir matchningarna.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Betalningar */}
        {activeCategory === 'payments' && (
          <div className={styles.faqCategory}>
            <div className={styles.categoryHeader}>
              <h2>Betalningar</h2>
              <p>Information om betalningar, provisioner och utbetalningar</p>
            </div>

            <div className={`${styles.faqItem} ${activeIndex === 0 ? styles.active : ''}`}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(0)}>
                <h3>Hur och när får jag betalt?</h3>
                <div className={styles.faqIcon}></div>
              </div>
              <div className={styles.faqAnswer}>
                <p>
                  Blimpify erbjuder säkra betalningslösningar via Stripe. När ett uppdrag är
                  slutfört och godkänt av klienten, överförs betalningen till ditt Blimpify-konto
                  inom 24 timmar. Därifrån kan du begära utbetalning till ditt bankkonto, vilket
                  vanligtvis tar 1-3 bankdagar beroende på din bank. Vi stödjer utbetalningar till
                  de flesta banker i Sverige och internationellt.
                </p>
              </div>
            </div>

            <div className={`${styles.faqItem} ${activeIndex === 1 ? styles.active : ''}`}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(1)}>
                <h3>Vilka avgifter tar Blimpify?</h3>
                <div className={styles.faqIcon}></div>
              </div>
              <div className={styles.faqAnswer}>
                <p>
                  Blimpify tar en serviceavgift beroende på din användarstatus. Vi har inga dolda
                  avgifter eller månadskostnader för grundläggande medlemskap.
                </p>
              </div>
            </div>

            <div className={`${styles.faqItem} ${activeIndex === 2 ? styles.active : ''}`}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(2)}>
                <h3>Hur hanterar ni skatter och moms?</h3>
                <div className={styles.faqIcon}></div>
              </div>
              <div className={styles.faqAnswer}>
                <p>
                  Vår plattform genererar automatiskt korrekta fakturor med rätt momssats baserat på
                  ditt och din samarbetspartners land. Internationella transaktioner hanteras enligt
                  gällande skattelagstiftning i respektive land.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Samarbeten */}
        {activeCategory === 'collaborations' && (
          <div className={styles.faqCategory}>
            <div className={styles.categoryHeader}>
              <h2>Samarbeten</h2>
              <p>Information om hur samarbeten fungerar på plattformen</p>
            </div>

            <div className={`${styles.faqItem} ${activeIndex === 0 ? styles.active : ''}`}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(0)}>
                <h3>Hur hittar jag uppdrag på Blimpify?</h3>
                <div className={styles.faqIcon}></div>
              </div>
              <div className={styles.faqAnswer}>
                <p>
                  Du kan söka efter uppdrag genom vår sökfunktion, filtrera efter kategori, budget
                  och tidsram. Vår matchningsalgoritm kommer också att rekommendera uppdrag baserat
                  på din profil, tidigare arbeten och framgångsrika samarbeten.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Plattformen */}
        {activeCategory === 'platform' && (
          <div className={styles.faqCategory}>
            <div className={styles.categoryHeader}>
              <h2>Plattformen</h2>
              <p>Information om plattformens funktioner och verktyg</p>
            </div>

            <div className={`${styles.faqItem} ${activeIndex === 0 ? styles.active : ''}`}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(0)}>
                <h3>Hur kommer jag igång?</h3>
                <div className={styles.faqIcon}></div>
              </div>
              <div className={styles.faqAnswer}>
                <p>
                  Börja med att skapa ett konto och verifiera din identitet. Fyll sedan i din profil
                  med information om dina kompetenser, tidigare arbeten och erfarenheter. Ladda upp
                  exempel på ditt arbete för att visa din kompetens. När din profil är komplett
                  börjar du få matchningar med relevanta uppdrag.
                </p>
              </div>
            </div>

            <div className={`${styles.faqItem} ${activeIndex === 3 ? styles.active : ''}`}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(3)}>
                <h3>Hur säkra är mina data på Blimpify?</h3>
                <div className={styles.faqIcon}></div>
              </div>
              <div className={styles.faqAnswer}>
                <p>
                  Vi tar datasäkerhet på största allvar. All data krypteras med SSL/TLS både under
                  överföring och i vila. Regelbundna säkerhetsgranskningar och följer
                  GDPR-riktlinjer. Våra servrar är placerade inom EU och vi delar aldrig dina data
                  med tredje part utan ditt uttryckliga samtycke.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2>Hittade du inte svaret du sökte?</h2>
            <p>
              Vårt supportteam finns här för att hjälpa dig med alla frågor du kan ha. Vi svarar
              normalt inom 24 timmar på vardagar.
            </p>
            <div className={styles.contactButtons}>
              <Link href="/contact" className={styles.ctaButtonPrimary}>
                Kontakta support
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </Link>
              <a href="mailto:Admin@blimpify.se" className={styles.ctaButtonSecondary}>
                support@blimpify.se
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
          <div className={styles.contactVisual}>
            <div className={styles.contactShape1}></div>
            <div className={styles.contactShape2}></div>
          </div>
        </div>
      </section>
    </div>
  );
}
