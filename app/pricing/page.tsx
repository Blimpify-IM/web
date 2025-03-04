import React from 'react'
import styles from './pricing.module.css'
import Link from 'next/link'

export default function Pricing() {
  return (
    <div className={styles.pricingContainer}>
      {/* Hero Section */}
      <section className={styles.pricingHero}>
        <div className={styles.heroContent}>
          <h1>Enkla och transparenta priser</h1>
          <p>Välj den plan som passar dina behov bäst. Inga dolda avgifter, avsluta när du vill.</p>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className={styles.pricingToggle}>
        <span className={styles.toggleLabel}>Månadsvis</span>
        <label className={styles.switch}>
          <input type="checkbox" id="pricingToggle" />
          <span className={styles.slider}></span>
        </label>
        <span className={styles.toggleLabel}>Årsvis</span>
        <span className={styles.saveBadge}>Spara 20%</span>
      </section>

      {/* Pricing Grid */}
      <section className={styles.pricingGrid}>
        {/* Basic Plan */}
        <div className={styles.pricingCard}>
          <div className={styles.cardHeader}>
            <h2>Basic</h2>
            <div className={styles.price}>
              <span className={`${styles.amount} ${styles.monthly}`}>99 kr</span>
              <span className={`${styles.amount} ${styles.yearly}`}>79 kr</span>
              <span className={styles.period}>/månad</span>
            </div>
            <p>Perfekt för nybörjare</p>
          </div>
          <div className={styles.cardFeatures}>
            <ul>
              <li><i className="fas fa-check"></i> 10 kampanjer per månad</li>
              <li><i className="fas fa-check"></i> Grundläggande analyser</li>
              <li><i className="fas fa-check"></i> E-poststöd</li>
              <li><i className="fas fa-check"></i> Grundläggande matchning</li>
              <li><i className="fas fa-check"></i> 1 användare</li>
            </ul>
          </div>
          <div className={styles.cardFooter}>
            <button className={styles.ctaButton}>Kom igång</button>
          </div>
        </div>

        {/* Pro Plan */}
        <div className={`${styles.pricingCard} ${styles.featured}`}>
          <div className={styles.popularBadge}>Populärast</div>
          <div className={styles.cardHeader}>
            <h2>Pro</h2>
            <div className={styles.price}>
              <span className={`${styles.amount} ${styles.monthly}`}>249 kr</span>
              <span className={`${styles.amount} ${styles.yearly}`}>199 kr</span>
              <span className={styles.period}>/månad</span>
            </div>
            <p>För växande företag</p>
          </div>
          <div className={styles.cardFeatures}>
            <ul>
              <li><i className="fas fa-check"></i> Obegränsade kampanjer</li>
              <li><i className="fas fa-check"></i> Avancerade analyser</li>
              <li><i className="fas fa-check"></i> Prioriterat support</li>
              <li><i className="fas fa-check"></i> AI-driven matchning</li>
              <li><i className="fas fa-check"></i> 5 användare</li>
              <li><i className="fas fa-check"></i> Anpassade rapporter</li>
            </ul>
          </div>
          <div className={styles.cardFooter}>
            <button className={styles.ctaButton}>Kom igång</button>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className={styles.pricingCard}>
          <div className={styles.cardHeader}>
            <h2>Enterprise</h2>
            <div className={styles.price}>
              <span className={styles.customPrice}>Kontakta oss</span>
            </div>
            <p>För stora organisationer</p>
          </div>
          <div className={styles.cardFeatures}>
            <ul>
              <li><i className="fas fa-check"></i> Allt i Pro-planen</li>
              <li><i className="fas fa-check"></i> Dedikerad kundansvarig</li>
              <li><i className="fas fa-check"></i> 24/7 support</li>
              <li><i className="fas fa-check"></i> Anpassade lösningar</li>
              <li><i className="fas fa-check"></i> Obegränsade användare</li>
              <li><i className="fas fa-check"></i> API-integration</li>
            </ul>
          </div>
          <div className={styles.cardFooter}>
            <button className={styles.ctaButton}>Kontakta oss</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.pricingFaq}>
        <h2>Vanliga frågor om våra priser</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Kan jag byta plan när som helst?</h3>
            <p>Ja, du kan uppgradera eller nedgradera din plan när som helst. Ändringar träder i kraft vid nästa faktureringscykel.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>Finns det några dolda avgifter?</h3>
            <p>Nej, vi tror på full transparens. Det pris du ser är det du betalar, inga överraskningar.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>Hur fungerar faktureringen?</h3>
            <p>Vi fakturerar i förskott för den valda perioden (månadsvis eller årsvis). Du kan betala med kreditkort eller faktura.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>Kan jag få en återbetalning om jag avbryter?</h3>
            <p>För årsprenumerationer erbjuder vi en proportionell återbetalning om du avbryter innan året är slut.</p>
          </div>
        </div>
      </section>
    </div>
  )
} 