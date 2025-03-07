import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './resources.module.css';

export default function Resources() {
  return (
    <div className={styles.creatorsContainer}>
      {/* Hero Section */}
      <section className={styles.creatorsHero}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>För kreatörer</span>
          <h1>
            Verktygslådan för <span className={styles.gradientText}>Kreatörer</span>
          </h1>
          <p>
            Allt du behöver för att lyckas med dina varumärkessamarbeten på ett professionellt sätt.
            Maximera dina intäkter och skapa fantastiskt innehåll med våra verktyg och resurser.
          </p>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroVisualInner}>
            <div className={styles.heroShape1}></div>
            <div className={styles.heroShape2}></div>
            <div className={styles.heroShape3}></div>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className={styles.quickStartSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Snabbstart</span>
          <h2>Kom Igång Snabbt</h2>
          <p>
            Följ dessa enkla steg för att börja använda plattformen och maximera dina möjligheter
          </p>
        </div>
        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepIcon}>
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
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
            <div className={styles.stepContent}>
              <h3>Skapa din profil</h3>
              <p>
                Optimera din profil med våra mallar och checklistor för att sticka ut bland andra
                kreatörer och attrahera rätt varumärken.
              </p>
              <div className={styles.stepFeatures}>
                <div className={styles.stepFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Professionell presentation</span>
                </div>
                <div className={styles.stepFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Optimerad synlighet</span>
                </div>
              </div>
              <Link href="/register" className={styles.stepLink}>
                Börja här
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
            </div>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepIcon}>
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
            </div>
            <div className={styles.stepContent}>
              <h3>Förstå plattformen</h3>
              <p>Lär dig hur du använder alla funktioner för maximalt resultat.</p>
              <div className={styles.stepFeatures}>
                <div className={styles.stepFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Tydliga instruktioner</span>
                </div>
                <div className={styles.stepFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Oändligt med möjligheter</span>
                </div>
              </div>
              <Link href="/creators/how-it-works" className={styles.stepLink}>
                Se guide
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
            </div>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepIcon}>
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
            </div>
            <div className={styles.stepContent}>
              <h3>Hitta samarbeten</h3>
              <p>
                Tips för att hitta och vinna de bästa samarbetena för dig. Lär dig hur du utmärker
                dig och skapar värdefulla relationer med varumärken.
              </p>
              <div className={styles.stepFeatures}>
                <div className={styles.stepFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Matchning med varumärken</span>
                </div>
                <div className={styles.stepFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Framgångsexempel</span>
                </div>
              </div>
              <Link href="/creators/success-stories" className={styles.stepLink}>
                Se exempel
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
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className={styles.toolsSection}>
        <div className={styles.sectionHeader}>
          <h2>Praktiska Verktyg</h2>
          <p>
            Använd våra specialutvecklade verktyg för att effektivisera ditt arbete och maximera
            dina resultat
          </p>
        </div>
        <div className={styles.toolsGrid}>
          <div className={styles.toolCard}>
            <div className={styles.toolIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="10" x2="16" y2="10"></line>
                <line x1="12" y1="14" x2="16" y2="14"></line>
                <line x1="12" y1="18" x2="16" y2="18"></line>
                <line x1="8" y1="10" x2="8" y2="10"></line>
                <line x1="8" y1="14" x2="8" y2="14"></line>
                <line x1="8" y1="18" x2="8" y2="18"></line>
              </svg>
            </div>
            <h3>Prisberäknare</h3>
            <p>
              Beräkna rekommenderat pris för dina samarbeten baserat på din räckvidd, engagemang och
              nisch.
            </p>
            <div className={styles.comingSoon}>Kommer snart</div>
          </div>

          <div className={styles.toolCard}>
            <div className={styles.toolIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
                <line x1="2" y1="20" x2="22" y2="20"></line>
              </svg>
            </div>
            <h3>Analysverktyg</h3>
            <p>
              Följ din tillväxt och optimera dina samarbeten med vår avancerade analysplattform.
            </p>
            <div className={styles.comingSoon}>Kommer snart</div>
          </div>

          <div className={styles.toolCard}>
            <div className={styles.toolIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h3>Avtalsmallar</h3>
            <p>
              Professionella avtalsmallar för olika typer av samarbeten som skyddar dina intressen.
            </p>
            <div className={styles.comingSoon}>Kommer snart</div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className={styles.downloadsSection}>
        <div className={styles.sectionHeader}>
          <h2>Nedladdningsbara Resurser</h2>
          <p>
            Få tillgång till våra exklusiva resurser för att förbättra ditt arbetsflöde och
            professionalism
          </p>
        </div>
        <div className={styles.downloadsGrid}>
          <div className={styles.downloadCard}>
            <div className={styles.downloadIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </div>
            <h3>Checklista för Profil</h3>
            <p>
              Optimera din kreatörsprofil med vår omfattande checklista för att attrahera fler
              varumärken.
            </p>
            <div className={styles.comingSoon}>Kommer snart</div>
          </div>

          <div className={styles.downloadCard}>
            <div className={styles.downloadIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <h3>Innehållskalender</h3>
            <p>Planera och organisera ditt innehåll effektivt med vår anpassningsbara kalender.</p>
            <div className={styles.comingSoon}>Kommer snart</div>
          </div>

          <div className={styles.downloadCard}>
            <div className={styles.downloadIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                <polyline points="13 2 13 9 20 9"></polyline>
              </svg>
            </div>
            <h3>Pitch-mall</h3>
            <p>
              Mall för att skapa övertygande presentationer till varumärken och maximera dina
              chanser.
            </p>
            <div className={styles.comingSoon}>Kommer snart</div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className={styles.supportSection}>
        <div className={styles.supportContent}>
          <div className={styles.sectionHeader}>
            <h2>Behöver du hjälp?</h2>
            <p>Vårt team finns här för att hjälpa dig lyckas på plattformen</p>
          </div>
          <div className={styles.supportOptions}>
            <Link href="/creators/faq" className={styles.supportOption}>
              <div className={styles.supportIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <h3>FAQ</h3>
              <p>Hitta svar på vanliga frågor</p>
            </Link>
            <Link href="/contact" className={styles.supportOption}>
              <div className={styles.supportIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
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
              <h3>Kontakta oss</h3>
              <p>Få personlig hjälp från vårt team</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Redo att börja skapa?</h2>
        <p>Registrera dig idag och få tillgång till alla verktyg och resurser</p>
        <div className={styles.ctaButtons}>
          <Link href="/register" className={styles.ctaButtonPrimary}>
            Kom igång
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
          <Link href="/creators/how-it-works" className={styles.ctaButtonSecondary}>
            Lär dig mer
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
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
