'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

import styles from './pricing.module.css';

export default function Pricing() {
  // Funktion för att växla mellan månadsvis och årlig prissättning
  useEffect(() => {
    const pricingToggle = document.getElementById('pricingToggle') as HTMLInputElement;
    const pricingCards = document.querySelectorAll(`.${styles.pricingCard}`);

    if (pricingToggle) {
      pricingToggle.addEventListener('change', function () {
        pricingCards.forEach(card => {
          if (this.checked) {
            card.classList.add(styles.yearly);
          } else {
            card.classList.remove(styles.yearly);
          }
        });
      });
    }

    // Cleanup
    return () => {
      if (pricingToggle) {
        pricingToggle.removeEventListener('change', function () {});
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Prissättning</span>
          <h1>
            Transparenta <span className={styles.gradientText}>priser</span> för alla behov
          </h1>
          <p>Välj den plan som passar dig bäst och börja växa dina samarbeten idag</p>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroShape1}></div>
          <div className={styles.heroShape2}></div>
          <div className={styles.heroShape3}></div>
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
      <section className={styles.pricingSection}>
        <div className={styles.pricingGrid}>
          {/* Basic Plan (Free) */}
          <div className={styles.pricingCard}>
            <div className={styles.cardHeader}>
              <div className={styles.planIcon}>
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
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
              </div>
              <h2>Basic</h2>
              <div className={styles.price}>
                <span className={`${styles.amount} ${styles.monthly}`}>0</span>
                <span className={`${styles.amount} ${styles.yearly}`}>0</span>
                <span className={styles.period}>kr/månad</span>
              </div>
              <p>Perfekt för att komma igång</p>
            </div>
            <div className={styles.cardFeatures}>
              <ul>
                <li>
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
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  15% i transaktionsavgift
                </li>
                <li>
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
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  Upp till 3 aktiva samarbeten
                </li>
                <li>
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
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  Enkel portfolio-sida
                </li>
                <li>
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
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  E-post support
                </li>
                <li>
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
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  Standardkontrakt
                </li>
              </ul>
            </div>
            <div className={styles.cardFooter}>
              <Link href="/register" className={styles.ctaButton}>
                Kom igång gratis
              </Link>
            </div>
          </div>

          {/* Pro Plan */}
          <div className={`${styles.pricingCard} ${styles.featured}`}>
            <div className={styles.popularBadge}>Populärast</div>
            <div className={styles.cardHeader}>
              <div className={styles.planIcon}>
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
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h2>Pro</h2>
              <div className={styles.price}>
                <span className={`${styles.amount} ${styles.monthly}`}>399</span>
                <span className={`${styles.amount} ${styles.yearly}`}>319</span>
                <span className={styles.period}>kr/månad</span>
              </div>
              <p>För ambitiösa kreatörer</p>
            </div>
            <div className={styles.cardFeatures}>
              <ul>
                <li>
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
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  7% i transaktionsavgift
                </li>
                <li>
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
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  obegränsade samarbeten
                </li>
                <li>
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
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  Prioriterad support
                </li>
                <li>
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
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  Automatiserade utbetalningar
                </li>
                <li>
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
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  Förtur till nya funktioner
                </li>
              </ul>
            </div>
            <div className={styles.cardFooter}>
              <Link href="/register" className={styles.ctaButton}>
                Välj Pro
              </Link>
            </div>
          </div>

          {/* Premium Plan */}
          <div className={styles.pricingCard}>
            <div className={styles.cardHeader}>
              <div className={styles.planIcon}>
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
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <h2>Premium</h2>
              <div className={styles.price}>
                <span className={`${styles.amount} ${styles.monthly}`}>999</span>
                <span className={`${styles.amount} ${styles.yearly}`}>799</span>
                <span className={styles.period}>kr/månad</span>
              </div>
              <p>För professionella kreatörer</p>
            </div>
            <div className={styles.cardFeatures}>
              <ul>
                <li>
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
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  3% i transaktionsavgift
                </li>
                <li>
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
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  Allt i Pro-paketet
                </li>
                <li>
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
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  Teamhantering
                </li>
                <li>
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
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  Exklusiva samarbeten
                </li>
                <li>
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
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  Premium support 24/7
                </li>
              </ul>
            </div>
            <div className={styles.cardFooter}>
              <Link href="/register" className={styles.ctaButton}>
                Välj Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.sectionHeader}>
          <h2>Vanliga frågor om våra priser</h2>
          <p>Hitta svar på de vanligaste frågorna om våra priser och planer</p>
        </div>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Kan jag byta plan när som helst?</h3>
            <p>
              Ja, du kan uppgradera eller nedgradera din plan när som helst. Ändringar träder i
              kraft vid nästa faktureringscykel.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Finns det några dolda avgifter?</h3>
            <p>
              Nej, vi tror på full transparens. Det pris du ser är det du betalar, inga
              överraskningar.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Hur fungerar faktureringen?</h3>
            <p>
              Vi fakturerar månadsvis eller årsvis beroende på ditt val. Alla betalningar hanteras
              säkert via Stripe.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Kan jag testa Pro eller Premium gratis?</h3>
            <p>
              Ja, du kan prova Pro eller Premium gratis i 3 månader. Ingen bindningstid och du kan
              avbryta när som helst.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Redo att komma igång?</h2>
          <p>Välj den plan som passar dig bäst och börja växa med Blimpify idag.</p>
          <div className={styles.ctaButtons}>
            <Link href="/register" className={styles.ctaButtonPrimary}>
              Skapa konto
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
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <Link href="/contact" className={styles.ctaButtonSecondary}>
              Kontakta säljteam
            </Link>
          </div>
        </div>
        <div className={styles.ctaVisual}>
          <div className={styles.ctaShape1}></div>
          <div className={styles.ctaShape2}></div>
        </div>
      </section>
    </div>
  );
}
