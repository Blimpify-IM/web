'use client';

import Link from 'next/link';
import React, { useState } from 'react';

import styles from './faq.module.css';
import FaqJsonLd from './metadata';

// FAQ-data
const faqData = [
  {
    category: 'Allmänna frågor',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19H11V17H13V19ZM15.07 11.25L14.17 12.17C13.45 12.9 13 13.5 13 15H11V14.5C11 13.4 11.45 12.4 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9H8C8 6.79 9.79 5 12 5C14.21 5 16 6.79 16 9C16 9.88 15.64 10.68 15.07 11.25Z"
          fill="currentColor"
        />
      </svg>
    ),
    description: 'Grundläggande information om Blimpify och vår plattform',
    questions: [
      {
        question: 'Vad är Blimpify?',
        answer:
          'Blimpify är en plattform som kopplar samman kreatörer med företag och individer som behöver kreativa tjänster. Vi erbjuder en säker miljö för att hitta uppdrag, kommunicera med klienter och hantera betalningar.',
      },
      {
        question: 'Hur kommer jag igång med Blimpify?',
        answer:
          'Det är enkelt att komma igång! Registrera ett konto, skapa din profil, ladda upp exempel på ditt arbete och börja utforska tillgängliga uppdrag. Vår onboarding-guide hjälper dig genom hela processen, från verifiering till din första matchning.',
      },
      {
        question: 'Är Blimpify gratis att använda?',
        answer:
          'Blimpify erbjuder en freemium-modell. Med ett gratiskonto kan du skapa en profil och söka efter uppdrag.',
      },
      {
        question: 'Hur skiljer sig Blimpify från andra plattformar?',
        answer:
          'Till skillnad från andra plattformar använder Blimpify en egenutvecklad matchningsalgoritm som analyserar konkreta faktorer som kompetensområden, tidigare samarbeten och projektresultat. Vi fokuserar på kvalitet framför kvantitet och erbjuder personlig support för både kreatörer och klienter. I våran tjänst hanteras allting från letande till slutbetalning',
      },
      {
        question: 'Vilka typer av kreativa tjänster stöds på Blimpify?',
        answer:
          'Blimpify stödjer ett brett spektrum av kreativa tjänster, inklusive grafisk design, webbdesign, videoproduktion, fotografi, copywriting, social media management, illustration, animation, UX/UI-design, och mycket mer. Vår plattform är designad för att passa alla typer av kreativa samarbeten.',
      },
    ],
  },
  {
    category: 'För kreatörer',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3C13.1935 3 14.3381 3.47411 15.182 4.31802C16.0259 5.16193 16.5 6.30653 16.5 7.5C16.5 8.69347 16.0259 9.83807 15.182 10.682C14.3381 11.5259 13.1935 12 12 12C10.8065 12 9.66193 11.5259 8.81802 10.682C7.97411 9.83807 7.5 8.69347 7.5 7.5C7.5 6.30653 7.97411 5.16193 8.81802 4.31802C9.66193 3.47411 10.8065 3 12 3ZM12 14.25C16.9725 14.25 21 16.2638 21 18.75V21H3V18.75C3 16.2638 7.0275 14.25 12 14.25Z"
          fill="currentColor"
        />
      </svg>
    ),
    description: 'Information för kreatörer som använder vår plattform',
    questions: [
      {
        question: 'Hur hittar jag uppdrag på Blimpify?',
        answer:
          'Du kan söka efter uppdrag genom vår sökfunktion, filtrera efter kategori, budget och tidsram. Vår matchningsalgoritm kommer också att rekommendera uppdrag baserat på din profil, tidigare arbeten och framgångsrika samarbeten.',
      },
      {
        question: 'Hur får jag betalt för mitt arbete?',
        answer:
          'Blimpify erbjuder säkra betalningslösningar via Stripe. När ett uppdrag är slutfört och godkänt av klienten, därifrån kan du överföra pengarna till ditt bankkonto. Vi stödjer utbetalningar till de flesta banker i Sverige och internationellt.',
      },
      {
        question: 'Hur kan jag förbättra min synlighet på plattformen?',
        answer:
          'För att förbättra din synlighet bör du: 1) Komplettera din profil med detaljerad information om dina färdigheter och erfarenheter, 2) Ladda upp högkvalitativa exempel på tidigare arbeten, 3) Be tidigare klienter om recensioner, 4) Vara aktiv på plattformen och svara snabbt på förfrågningar, 5) Överväga ett premium-medlemskap för prioriterad placering i sökresultat.',
      },
      {
        question: 'Kan jag använda Blimpify för långsiktiga samarbeten?',
        answer:
          'Absolut! Blimpify är designad för både korta projekt och långsiktiga samarbeten. För återkommande samarbeten erbjuder vi funktioner som förenklade avtal och automatiska betalningar.',
      },
    ],
  },
  {
    category: 'För klienter',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z"
          fill="currentColor"
        />
      </svg>
    ),
    description: 'Information för klienter som söker kreativa tjänster',
    questions: [
      {
        question: 'Hur hittar jag rätt kreatör för mitt projekt?',
        answer:
          'Du kan söka efter kreatörer baserat på färdigheter, erfarenhet och betyg. Vår matchningsalgoritm kommer också att rekommendera kreatörer som passar ditt projekt baserat på tidigare framgångsrika samarbeten inom liknande områden. Du kan också publicera ett uppdrag och låta intresserade kreatörer kontakta dig med förslag.',
      },
      {
        question: 'Hur fungerar betalningsprocessen?',
        answer:
          'När du anlitar en kreatör, sätter du in betalningen på Blimpify via Stripe. Pengarna hålls säkert tills uppdraget är slutfört och du har godkänt resultatet. Detta skyddar både dig och kreatören.',
      },
      {
        question: 'Vad händer om jag inte är nöjd med resultatet?',
        answer:
          'Vi uppmuntrar öppen kommunikation mellan klienter och kreatörer för att lösa eventuella problem. Om ni inte kan komma överens, erbjuder Blimpify medling via vårt supportteam. Om problemet inte kan lösas, har vi en rättvis återbetalningsprocess enligt våra användarvillkor som skyddar båda parter.',
      },
      {
        question: 'Hur säkerställer Blimpify kvaliteten på kreatörer?',
        answer:
          'Alla kreatörer genomgår en verifieringsprocess där vi kontrollerar identitet. Vårt betygssystem baseras på faktiska samarbeten och resultat, inte bara recensioner.',
      },
    ],
  },
  {
    category: 'Teknisk support',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 18H13V16H11V18ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10H10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 12 11 11.75 11 15H13C13 12.75 16 12.5 16 10C16 7.79 14.21 6 12 6Z"
          fill="currentColor"
        />
      </svg>
    ),
    description: 'Hjälp med tekniska problem och plattformsfunktioner',
    questions: [
      {
        question: 'Hur återställer jag mitt lösenord?',
        answer:
          "Du kan återställa ditt lösenord genom att klicka på 'Glömt lösenord' på inloggningssidan. Vi skickar då en återställningslänk till din registrerade e-postadress. Av säkerhetsskäl är länken giltig i 24 timmar. Om du inte får e-postmeddelandet, kontrollera din skräppost eller kontakta vår support.",
      },
      {
        question: 'Finns det en mobilapp för Blimpify?',
        answer:
          'Ja, Blimpify finns tillgängligt som app för både iOS och håller på med en tjänst för Android. Du kan ladda ner den från App Store. Appen erbjuder alla funktioner som finns på webbversionen, plus push-notifikationer för att hålla dig uppdaterad om nya meddelanden och projektuppdateringar.',
      },
      {
        question: 'Hur säkra är mina data på Blimpify?',
        answer:
          'Vi tar datasäkerhet på största allvar. All data krypteras med SSL/TLS både under överföring och i vila. Regelbundna säkerhetsgranskningar och följer GDPR-riktlinjer. Våra servrar är placerade inom EU och vi delar aldrig dina data med tredje part utan ditt uttryckliga samtycke.',
      },
    ],
  },
  {
    category: 'Betalningar & Fakturering',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z"
          fill="currentColor"
        />
        <path d="M12 13H19V17H12V13Z" fill="currentColor" />
      </svg>
    ),
    description: 'Information om betalningar, fakturering och ekonomi',
    questions: [
      {
        question: 'Vilka betalningsmetoder accepteras?',
        answer:
          'Vi accepterar alla större kreditkort (Visa, Mastercard, American Express), direktbetalning via bank, och företagsfakturering efter godkännande. Alla betalningar hanteras säkert via Stripe, vår betalningspartner som uppfyller PCI DSS Level 1-standard.',
      },
      {
        question: 'Hur hanterar ni skatter och moms?',
        answer:
          'Vår plattform genererar automatiskt korrekta fakturor med rätt momssats baserat på ditt och din samarbetspartners land. Vilket förenklar din deklaration. Internationella transaktioner hanteras enligt gällande skattelagstiftning i respektive land.',
      },
      {
        question: 'Hur snabbt får jag betalt efter avslutat uppdrag?',
        answer:
          'Du kan konfiguera utbetalningsfrekvensen i dina betalningsinställningar, vi har som standard 7 dagar mellan faktureringen och utbetalningen.',
      },
      {
        question: 'Vad händer om en klient inte betalar?',
        answer:
          'Med vårt escrow-system sätter klienten in betalningen innan arbetet påbörjas, vilket eliminerar risken för utebliven betalning. Om en klient inte sätter in betalningen inom avtalad tid, får du en notifiering och kan välja att inte påbörja arbetet. För återkommande klienter med god betalningshistorik kan du erbjuda mer flexibla betalningsvillkor.',
      },
    ],
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('Allmänna frågor');
  const [activeQuestions, setActiveQuestions] = useState<{ [key: string]: boolean }>({});

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setActiveQuestions(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      {/* Lägg till strukturerad data för FAQ-sidan */}
      <FaqJsonLd />
      
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={styles.heroTag}>Support</span>
            <h1>
              Vanliga <span className={styles.gradientText}>frågor</span>
            </h1>
            <p>Hitta svar på de vanligaste frågorna om Blimpify och hur vår plattform fungerar.</p>
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
            <p>Utforska våra vanligaste frågor grupperade efter kategori</p>
          </div>

          <div className={styles.faqCategories}>
            {faqData.map((category, index) => (
              <button
                key={index}
                className={`${styles.categoryButton} ${activeCategory === category.category ? styles.active : ''}`}
                onClick={() => setActiveCategory(category.category)}
              >
                <div className={styles.categoryIcon}>{category.icon}</div>
                <span>{category.category}</span>
              </button>
            ))}
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className={styles.faqAccordion}>
          {faqData
            .filter(category => category.category === activeCategory)
            .map((category, categoryIndex) => (
              <div key={categoryIndex} className={styles.faqCategory}>
                <div className={styles.categoryHeader}>
                  <h2>{category.category}</h2>
                  <p>{category.description}</p>
                </div>
                <div className={styles.faqList}>
                  {category.questions.map((item, questionIndex) => {
                    const key = `${categoryIndex}-${questionIndex}`;
                    const isActive = activeQuestions[key];

                    return (
                      <div
                        key={questionIndex}
                        className={`${styles.faqItem} ${isActive ? styles.active : ''}`}
                      >
                        <div
                          className={styles.faqQuestion}
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        >
                          <h3>{item.question}</h3>
                          <div className={styles.faqIcon}></div>
                        </div>
                        <div className={styles.faqAnswer}>
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
        </section>

        {/* Contact Section */}
        <section className={styles.contactSection}>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <h2>Hittade du inte svaret?</h2>
              <p>
                Vårt supportteam finns här för att hjälpa dig. Kontakta oss direkt så återkommer vi så
                snart som möjligt.
              </p>
              <div className={styles.contactButtons}>
                <Link href="/contact" className={styles.ctaButtonPrimary}>
                  Kontakta support
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
                <a href="mailto:Admin@blimpify.co" className={styles.ctaButtonSecondary}>
                  Support@blimpify.co
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
    </>
  );
}
