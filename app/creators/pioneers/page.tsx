import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './pioneers.module.css';

export default function FeaturedCreators() {
  return (
    <div className={styles.creatorsContainer}>
      {/* Hero Section */}
      <section className={styles.creatorsHero}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Kreatörer</span>
          <h1>
            Din Plats i <span className={styles.gradientText}>Rampljuset</span>
          </h1>
          <p>
            Upptäck hur du kan bli en del av nästa generations digitala kreatörer och
            varumärkesambassadörer.
          </p>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroShape1}></div>
          <div className={styles.heroShape2}></div>
          <div className={styles.heroShape3}></div>
        </div>
      </section>

      {/* Creator Types Section */}
      <section className={styles.creatorTypesSection}>
        <div className={styles.sectionHeader}>
          <h2>Vilka Kreatörer Söker Vi?</h2>
          <p>
            Vi samarbetar med olika typer av kreatörer som delar vår passion för autentiskt innehåll
          </p>
        </div>

        <div className={styles.typesGrid}>
          <div className={styles.typeCard}>
            <div className={styles.typeIcon}>
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
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </div>
            <h3>Visuella Berättare</h3>
            <p>
              Fotografer och videoskapare som fångar ögonblick och berättar historier genom sitt
              objektiv.
            </p>
            <ul className={styles.typeFeatures}>
              <li>
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
                Produktfotografering
              </li>
              <li>
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
                Lifestyle content
              </li>
              <li>
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
                Behind-the-scenes
              </li>
              <li>
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
                Storytelling
              </li>
            </ul>
          </div>

          <div className={styles.typeCard}>
            <div className={styles.typeIcon}>
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
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.586 7.586"></path>
                <circle cx="11" cy="11" r="2"></circle>
              </svg>
            </div>
            <h3>Content Creators</h3>
            <p>
              Skribenter och innehållsskapare som engagerar genom text, bild och video på sociala
              medier.
            </p>
            <ul className={styles.typeFeatures}>
              <li>
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
                Bloggande
              </li>
              <li>
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
                Social media
              </li>
              <li>
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
                Recensioner
              </li>
              <li>
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
                Tutorials
              </li>
            </ul>
          </div>

          <div className={styles.typeCard}>
            <div className={styles.typeIcon}>
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
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="23"></line>
                <line x1="8" y1="23" x2="16" y2="23"></line>
              </svg>
            </div>
            <h3>Röster & Personligheter</h3>
            <p>Podcasters och influencers som bygger genuina relationer med sina följare.</p>
            <ul className={styles.typeFeatures}>
              <li>
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
                Podcastavsnitt
              </li>
              <li>
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
                Live-streams
              </li>
              <li>
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
                Q&As
              </li>
              <li>
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
                Intervjuer
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Potential Section */}
      <section className={styles.potentialSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Möjligheter</span>
          <h2>Din Potential med Blimpify</h2>
          <p>Upptäck vad du kan uppnå genom att ansluta dig till vår plattform</p>
        </div>

        <div className={styles.potentialGrid}>
          <div className={styles.potentialCard}>
            <span className={styles.potentialNumber}>01</span>
            <h3>Varumärkessamarbeten</h3>
            <p>Få tillgång till exklusiva samarbeten med ledande varumärken inom din nisch.</p>
          </div>

          <div className={styles.potentialCard}>
            <span className={styles.potentialNumber}>02</span>
            <h3>Professionell Utveckling</h3>
            <p>Få stöd och verktyg för att utveckla ditt personliga varumärke och nå nya höjder.</p>
          </div>

          <div className={styles.potentialCard}>
            <span className={styles.potentialNumber}>03</span>
            <h3>Community</h3>
            <p>
              Bli del av ett växande nätverk av kreatörer och dela erfarenheter och möjligheter.
            </p>
          </div>

          <div className={styles.potentialCard}>
            <span className={styles.potentialNumber}>04</span>
            <h3>Monetarisering</h3>
            <p>Skapa en hållbar inkomst genom strategiska samarbeten och sponsrade innehåll.</p>
          </div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section className={styles.opportunitySection}>
        <div className={styles.opportunityContent}>
          <div className={styles.opportunityVisual}>
            <div className={styles.opportunityShape1}></div>
            <div className={styles.opportunityShape2}></div>
          </div>

          <div className={styles.opportunityInfo}>
            <h2>Bli En Av Våra Första Kreatörer</h2>
            <p>Som en av våra första kreatörer får du:</p>
            <ul className={styles.opportunityList}>
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
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Tidig tillgång till exklusiva varumärkessamarbeten</span>
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
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Personlig vägledning från vårt team</span>
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
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Möjlighet att forma plattformens framtid</span>
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
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Specialerbjudanden på premium-funktioner</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Redo att bli en pionjär?</h2>
        <p>Var med från början och forma framtidens innehållsskapande.</p>
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
          <Link href="/contact" className={styles.ctaButtonSecondary}>
            Kontakta Oss
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
        </div>
      </section>
    </div>
  );
}
