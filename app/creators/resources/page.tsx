import React from 'react'
import styles from './resources.module.css'
import Link from 'next/link'

export default function Resources() {
  return (
    <div className={styles.creatorsContainer}>
      {/* Hero Section */}
      <section className={styles.creatorsHero}>
        <div className={styles.heroContent}>
          <h1>Resurser för kreatörer</h1>
          <p>Allt du behöver för att lyckas som innehållsskapare på Blimpify. Guider, verktyg och tips för att maximera dina intäkter och skapa fantastiskt innehåll.</p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className={styles.resourcesGrid}>
        <div className={styles.resourceCard}>
          <div className={styles.resourceIcon}>
            <i className="fas fa-book"></i>
          </div>
          <h3>Guider och handböcker</h3>
          <p>Omfattande guider om hur du skapar engagerande innehåll, bygger din publik och samarbetar med varumärken.</p>
          <Link href="#" className={styles.resourceLink}>Utforska guider <i className="fas fa-arrow-right"></i></Link>
        </div>

        <div className={styles.resourceCard}>
          <div className={styles.resourceIcon}>
            <i className="fas fa-video"></i>
          </div>
          <h3>Video tutorials</h3>
          <p>Steg-för-steg videoinstruktioner om hur du använder plattformen, skapar professionellt innehåll och förhandlar med varumärken.</p>
          <Link href="#" className={styles.resourceLink}>Se videor <i className="fas fa-arrow-right"></i></Link>
        </div>

        <div className={styles.resourceCard}>
          <div className={styles.resourceIcon}>
            <i className="fas fa-file-download"></i>
          </div>
          <h3>Nedladdningsbara mallar</h3>
          <p>Mallar för innehållsplanering, kontrakt, fakturering och andra viktiga dokument för din verksamhet.</p>
          <Link href="#" className={styles.resourceLink}>Ladda ner mallar <i className="fas fa-arrow-right"></i></Link>
        </div>

        <div className={styles.resourceCard}>
          <div className={styles.resourceIcon}>
            <i className="fas fa-chalkboard-teacher"></i>
          </div>
          <h3>Webinarier och kurser</h3>
          <p>Live och inspelade webinarier med experter inom innehållsskapande, marknadsföring och entreprenörskap.</p>
          <Link href="#" className={styles.resourceLink}>Registrera dig <i className="fas fa-arrow-right"></i></Link>
        </div>

        <div className={styles.resourceCard}>
          <div className={styles.resourceIcon}>
            <i className="fas fa-tools"></i>
          </div>
          <h3>Verktyg och appar</h3>
          <p>Rekommenderade verktyg för redigering, planering, analys och andra aspekter av innehållsskapande.</p>
          <Link href="#" className={styles.resourceLink}>Utforska verktyg <i className="fas fa-arrow-right"></i></Link>
        </div>

        <div className={styles.resourceCard}>
          <div className={styles.resourceIcon}>
            <i className="fas fa-users"></i>
          </div>
          <h3>Community forum</h3>
          <p>Anslut till andra kreatörer, dela erfarenheter, ställ frågor och hitta samarbetspartners.</p>
          <Link href="#" className={styles.resourceLink}>Gå med i forumet <i className="fas fa-arrow-right"></i></Link>
        </div>
      </section>

      {/* Featured Resources */}
      <section className={styles.featuredResources}>
        <h2>Utvalda resurser</h2>
        <div className={styles.featuredGrid}>
          <div className={styles.featuredCard}>
            <div className={styles.featuredImage}>
              <i className="fas fa-star"></i>
            </div>
            <div className={styles.featuredContent}>
              <h3>Ultimata guiden till varumärkessamarbeten</h3>
              <p>Lär dig hur du hittar, förhandlar och genomför framgångsrika samarbeten med varumärken.</p>
              <Link href="#" className={styles.featuredLink}>Läs guiden <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>

          <div className={styles.featuredCard}>
            <div className={styles.featuredImage}>
              <i className="fas fa-chart-line"></i>
            </div>
            <div className={styles.featuredContent}>
              <h3>Så ökar du ditt engagemang med 300%</h3>
              <p>Beprövade strategier för att öka engagemanget på dina sociala medier och bygga en lojal publik.</p>
              <Link href="#" className={styles.featuredLink}>Läs artikeln <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>

          <div className={styles.featuredCard}>
            <div className={styles.featuredImage}>
              <i className="fas fa-money-bill-wave"></i>
            </div>
            <div className={styles.featuredContent}>
              <h3>Prissättningsguide för kreatörer</h3>
              <p>Hur du värderar ditt arbete rätt och sätter priser som reflekterar ditt värde för varumärken.</p>
              <Link href="#" className={styles.featuredLink}>Ladda ner guiden <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className={styles.supportSection}>
        <h2>Behöver du hjälp?</h2>
        <p>Vårt dedikerade supportteam finns här för att hjälpa dig med alla frågor du kan ha.</p>
        <div className={styles.supportOptions}>
          <div className={styles.supportOption}>
            <i className="fas fa-envelope"></i>
            <h3>E-post support</h3>
            <p>Skicka oss ett meddelande så svarar vi inom 24 timmar.</p>
            <a href="mailto:support@blimpify.se" className={styles.supportLink}>support@blimpify.se</a>
          </div>

          <div className={styles.supportOption}>
            <i className="fas fa-comments"></i>
            <h3>Live chatt</h3>
            <p>Chatta med vårt supportteam i realtid under kontorstid.</p>
            <button className={styles.supportButton}>Starta chatt</button>
          </div>

          <div className={styles.supportOption}>
            <i className="fas fa-question-circle"></i>
            <h3>FAQ</h3>
            <p>Hitta svar på vanliga frågor i vår kunskapsbas.</p>
            <Link href="/creators/faq" className={styles.supportLink}>Besök FAQ <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </div>
  )
} 