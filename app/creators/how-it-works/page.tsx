import React from 'react'
import styles from './how-it-works.module.css'
import Link from 'next/link'

export default function HowItWorks() {
  return (
    <div className={styles.creatorsContainer}>
      {/* Hero Section */}
      <section className={styles.creatorsHero}>
        <div className={styles.heroContent}>
          <h1>Hur Blimpify fungerar för kreatörer</h1>
          <p>Förstå processen från registrering till betalning och hur du kan maximera dina intäkter genom vår plattform.</p>
        </div>
      </section>

      {/* Steps Section */}
      <section className={styles.stepsSection}>
        <div className={styles.step}>
          <div className={styles.stepIcon}>
            <i className="fas fa-user-plus"></i>
          </div>
          <h2>1. Skapa ditt konto</h2>
          <p>Registrera dig som kreatör på Blimpify. Fyll i din profil med information om dina intressen, nischer och tidigare arbeten för att hjälpa oss matcha dig med rätt varumärken.</p>
        </div>

        <div className={styles.step}>
          <div className={styles.stepIcon}>
            <i className="fas fa-handshake"></i>
          </div>
          <h2>2. Få kampanjförfrågningar</h2>
          <p>Varumärken skickar förfrågningar baserade på din profil. Du kan granska kampanjdetaljer, budget och förväntningar innan du accepterar eller avböjer.</p>
        </div>

        <div className={styles.step}>
          <div className={styles.stepIcon}>
            <i className="fas fa-edit"></i>
          </div>
          <h2>3. Skapa innehåll</h2>
          <p>När du accepterar en kampanj, skapa autentiskt innehåll enligt överenskommelsen. Ladda upp utkast för godkännande och få feedback direkt från varumärket.</p>
        </div>

        <div className={styles.step}>
          <div className={styles.stepIcon}>
            <i className="fas fa-share-alt"></i>
          </div>
          <h2>4. Publicera och rapportera</h2>
          <p>Publicera det godkända innehållet på dina sociala kanaler. Vår plattform spårar automatiskt engagemang och prestanda för att visa ditt värde för varumärken.</p>
        </div>

        <div className={styles.step}>
          <div className={styles.stepIcon}>
            <i className="fas fa-money-bill-wave"></i>
          </div>
          <h2>5. Få betalt</h2>
          <p>Få betalt snabbt och säkert genom vår plattform. Vi hanterar alla betalningar och säkerställer att du får rätt ersättning för ditt arbete.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2>Fördelar för kreatörer</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <i className="fas fa-chart-line"></i>
            <h3>Öka dina intäkter</h3>
            <p>Få tillgång till betalda samarbeten med varumärken som matchar dina värderingar och nisch.</p>
          </div>

          <div className={styles.featureCard}>
            <i className="fas fa-shield-alt"></i>
            <h3>Säkra betalningar</h3>
            <p>Vårt system säkerställer att du alltid får betalt för ditt arbete, med tydliga villkor och avtal.</p>
          </div>

          <div className={styles.featureCard}>
            <i className="fas fa-bullseye"></i>
            <h3>Smarta matchningar</h3>
            <p>Vår AI-drivna matchningsalgoritm kopplar dig med varumärken som passar din profil och publik.</p>
          </div>

          <div className={styles.featureCard}>
            <i className="fas fa-tools"></i>
            <h3>Kraftfulla verktyg</h3>
            <p>Få tillgång till analyser, innehållskalendrar och kommunikationsverktyg för att hantera dina kampanjer.</p>
          </div>

          <div className={styles.featureCard}>
            <i className="fas fa-graduation-cap"></i>
            <h3>Utbildning och resurser</h3>
            <p>Förbättra dina färdigheter med våra guider, webinarier och resurser för innehållsskapare.</p>
          </div>

          <div className={styles.featureCard}>
            <i className="fas fa-comments"></i>
            <h3>Dedikerat stöd</h3>
            <p>Vårt team finns tillgängligt för att hjälpa dig med frågor och ge råd om hur du kan lyckas på plattformen.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Redo att börja tjäna pengar på ditt innehåll?</h2>
        <p>Anslut dig till tusentals kreatörer som redan använder Blimpify för att samarbeta med varumärken och öka sina intäkter.</p>
        <div className={styles.ctaButtons}>
          <Link href="/register" className={`${styles.ctaButton} ${styles.primary}`}>
            Registrera dig nu
          </Link>
          <Link href="/creators/success-stories" className={`${styles.ctaButton} ${styles.secondary}`}>
            Se framgångshistorier
          </Link>
        </div>
      </section>
    </div>
  )
} 