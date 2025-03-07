import Link from 'next/link';
import React from 'react';

import styles from './contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Kontakta oss</span>
          <h1>
            Hur kan vi <span className={styles.gradientText}>hjälpa dig</span>?
          </h1>
          <p>
            Vi finns här för att svara på dina frågor och hjälpa dig att komma igång med Blimpify.
            Kontakta oss via formuläret nedan eller använd våra kontaktuppgifter.
          </p>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroShape1}></div>
          <div className={styles.heroShape2}></div>
          <div className={styles.heroShape3}></div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className={styles.contactSection}>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h2>Kontaktuppgifter</h2>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h3>Telefon</h3>
                <p>Inget tillgängligt</p>
                <p className={styles.infoNote}>Mån-Fre: 09:00-17:00</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
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
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h3>E-post</h3>
                <p>admin@blimpify.co</p>
                <p className={styles.infoNote}>Vi svarar inom 24 timmar</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
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
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h3>Adress</h3>
                <p>
                  Tallåsvägen 84
                  <br />
                  186 51 Vallentuna
                </p>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <h3>Följ oss</h3>
              <div className={styles.socialIcons}>
                <a
                  href="https://instagram.com/blimpifyy"
                  className={styles.socialIcon}
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@blimpify"
                  className={styles.socialIcon}
                  aria-label="TikTok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/Blimpify"
                  className={styles.socialIcon}
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h2>Skicka ett meddelande</h2>
            <form>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Namn</label>
                  <input type="text" id="name" placeholder="Ditt namn" required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">E-post</label>
                  <input type="email" id="email" placeholder="Din e-postadress" required />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Ämne</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Vad gäller ditt meddelande?"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Meddelande</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Beskriv ditt ärende i detalj..."
                  required
                ></textarea>
              </div>

              <div className={styles.formActions}>
                <button type="submit" className={styles.submitButton}>
                  Skicka meddelande
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
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.sectionHeader}>
          <h2>Vanliga frågor</h2>
          <p>Hitta snabba svar på de vanligaste frågorna</p>
        </div>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Hur snabbt kan jag förvänta mig svar?</h3>
            <p>
              Vi strävar efter att svara på alla förfrågningar inom 24 timmar på vardagar.
              Brådskande ärenden hanteras med prioritet.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Hur kommer ni att använda mina kontaktuppgifter?</h3>
            <p>
              Vi använder dina uppgifter endast för att svara på din förfrågan. Läs vår
              integritetspolicy för mer information.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Jag har tekniska problem, vem kontaktar jag?</h3>
            <p>
              För teknisk support, vänligen skicka ett mail till support@blimpify.se eller använd
              formuläret och välj "Teknisk support" som ämne.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
