'use client'

import React, { useState } from 'react'
import styles from './faq.module.css'

// FAQ-data
const faqData = [
  {
    category: "Allmänna frågor",
    questions: [
      {
        question: "Vad är Blimpify?",
        answer: "Blimpify är en plattform som kopplar samman kreatörer med företag och individer som behöver kreativa tjänster. Vi erbjuder en säker miljö för att hitta uppdrag, kommunicera med klienter och hantera betalningar."
      },
      {
        question: "Hur kommer jag igång med Blimpify?",
        answer: "Det är enkelt att komma igång! Registrera ett konto, skapa din profil, ladda upp exempel på ditt arbete och börja utforska tillgängliga uppdrag. Du kan också ställa in dina preferenser för att få meddelanden om uppdrag som matchar dina färdigheter."
      },
      {
        question: "Är Blimpify gratis att använda?",
        answer: "Blimpify erbjuder både gratis och premiumalternativ. Med ett gratiskonto kan du skapa en profil och söka efter uppdrag. Premiummedlemskap ger tillgång till fler funktioner som prioriterad placering i sökresultat och avancerade analysverktyg."
      }
    ]
  },
  {
    category: "För kreatörer",
    questions: [
      {
        question: "Hur hittar jag uppdrag på Blimpify?",
        answer: "Du kan söka efter uppdrag genom vår sökfunktion, filtrera efter kategori, budget och tidsram. Du kan också ställa in meddelanden för att få notiser om nya uppdrag som matchar dina färdigheter och intressen."
      },
      {
        question: "Hur får jag betalt för mitt arbete?",
        answer: "Blimpify erbjuder säkra betalningslösningar. När ett uppdrag är slutfört och godkänt av klienten, överförs betalningen till ditt Blimpify-konto. Därifrån kan du överföra pengarna till ditt bankkonto."
      },
      {
        question: "Vilka avgifter tar Blimpify?",
        answer: "Blimpify tar en serviceavgift på 5-10% beroende på uppdragets storlek. Exakta avgifter visas tydligt innan du accepterar ett uppdrag, så det finns inga överraskningar."
      }
    ]
  },
  {
    category: "För klienter",
    questions: [
      {
        question: "Hur hittar jag rätt kreatör för mitt projekt?",
        answer: "Du kan söka efter kreatörer baserat på färdigheter, erfarenhet och betyg. Du kan också publicera ett uppdrag och låta intresserade kreatörer kontakta dig med förslag."
      },
      {
        question: "Hur fungerar betalningsprocessen?",
        answer: "När du anlitar en kreatör, sätts betalningen in på ett säkert konto. Pengarna överförs till kreatören först när du har godkänt det slutförda arbetet, vilket ger dig trygghet och kontroll."
      },
      {
        question: "Vad händer om jag inte är nöjd med resultatet?",
        answer: "Blimpify har en konfliktlösningsprocess. Om du inte är nöjd med arbetet, kan du begära revideringar enligt överenskommelsen. Om problemen kvarstår, kan vårt supportteam hjälpa till att lösa situationen."
      }
    ]
  }
];

export default function FAQ() {
  const [activeQuestions, setActiveQuestions] = useState<{[key: string]: boolean}>({});
  
  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setActiveQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Vanliga frågor</h1>
          <p>Hitta svar på de vanligaste frågorna om Blimpify och hur vår plattform fungerar.</p>
        </div>
      </section>
      
      <div className={styles.faqContainer}>
        {faqData.map((category, categoryIndex) => (
          <section key={categoryIndex} className={styles.faqSection}>
            <h2>{category.category}</h2>
            <div className={styles.faqList}>
              {category.questions.map((item, questionIndex) => {
                const key = `${categoryIndex}-${questionIndex}`;
                const isActive = activeQuestions[key];
                
                return (
                  <div 
                    key={questionIndex} 
                    className={`${styles.faqItem} ${isActive ? styles.active : ''}`}
                    onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                  >
                    <div className={styles.faqQuestion}>
                      <h3>{item.question}</h3>
                      <span className={styles.faqToggle}>
                        {isActive ? '−' : '+'}
                      </span>
                    </div>
                    <div className={`${styles.faqAnswer} ${isActive ? styles.show : ''}`}>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
      
      <section className={styles.contactSection}>
        <h2>Hittade du inte svaret?</h2>
        <p>Kontakta vårt supportteam så hjälper vi dig med dina frågor.</p>
        <a href="/contact" className={styles.contactButton}>
          Kontakta oss
        </a>
      </section>
    </div>
  );
} 