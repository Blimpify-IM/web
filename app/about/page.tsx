import React from 'react'
import styles from './about.module.css'
import pageStyles from '../styles/page.module.css'

export default function About() {
  return (
    <div className={pageStyles.pageContainer}>
      <div className={pageStyles.pageHero}>
        <div className={pageStyles.heroContent}>
          <h1>Om Blimpify</h1>
          <p>
            Lär känna vårt team och vår historia. Vi är passionerade om att skapa 
            innovativa lösningar som gör skillnad för våra kunder.
          </p>
        </div>
      </div>
      
      <section className={styles.section}>
        <h2>Vår historia</h2>
        <p>
          Blimpify grundades 2023 med visionen att skapa innovativa lösningar för moderna utmaningar. 
          Sedan dess har vi vuxit till ett team av passionerade experter som strävar efter att leverera 
          högkvalitativa tjänster till våra kunder.
        </p>
      </section>
      
      <section className={styles.section}>
        <h2>Vårt team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <div className={styles.memberImage}></div>
            <h3>Anna Andersson</h3>
            <p>VD & Grundare</p>
            <p className={styles.memberBio}>
              Anna har över 15 års erfarenhet inom tech-branschen och har tidigare grundat två framgångsrika startups.
            </p>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.memberImage}></div>
            <h3>Erik Eriksson</h3>
            <p>Teknisk chef</p>
            <p className={styles.memberBio}>
              Erik är en erfaren utvecklare med expertis inom molnlösningar och har tidigare arbetat på Google och Microsoft.
            </p>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.memberImage}></div>
            <h3>Maria Svensson</h3>
            <p>Designchef</p>
            <p className={styles.memberBio}>
              Maria har en bakgrund inom UX/UI-design och har hjälpt dussintals företag att förbättra sina digitala produkter.
            </p>
          </div>
        </div>
      </section>
      
      <section className={styles.section}>
        <h2>Vår mission</h2>
        <p>
          Vår mission är att leverera innovativa och användarvänliga lösningar som hjälper 
          våra kunder att nå sina mål. Vi tror på att kombinera teknisk excellens med 
          kreativ design för att skapa produkter som gör skillnad.
        </p>
      </section>
      
      <div className={pageStyles.pageFaq}>
        <h2>Vanliga frågor</h2>
        <div className={pageStyles.faqGrid}>
          <div className={pageStyles.faqItem}>
            <h3>Vilka branscher arbetar ni med?</h3>
            <p>
              Vi arbetar med kunder från olika branscher, inklusive finans, hälsovård, 
              utbildning, e-handel och mer. Vår expertis kan anpassas till olika affärsområden.
            </p>
          </div>
          <div className={pageStyles.faqItem}>
            <h3>Hur ser er arbetsprocess ut?</h3>
            <p>
              Vår process börjar med en grundlig analys av dina behov, följt av design, 
              utveckling, testning och lansering. Vi arbetar agilt och involverar dig i varje steg.
            </p>
          </div>
          <div className={pageStyles.faqItem}>
            <h3>Erbjuder ni support efter lansering?</h3>
            <p>
              Ja, vi erbjuder kontinuerlig support och underhåll för alla våra projekt. 
              Vi ser våra kundrelationer som långsiktiga partnerskap.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 