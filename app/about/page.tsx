import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import type { Metadata } from 'next';

import styles from './about.module.css';

// Definiera metadata för about-sidan
export const metadata: Metadata = {
  title: 'Om oss | Blimpify',
  description: 'Lär känna teamet bakom Blimpify och vår mission att revolutionera hur kreativa talanger och varumärken samarbetar.',
  openGraph: {
    title: 'Om oss | Blimpify',
    description: 'Lär känna teamet bakom Blimpify och vår mission att revolutionera hur kreativa talanger och varumärken samarbetar.',
    images: [
      {
        url: '/images/blimpify-about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Teamet bakom Blimpify',
      },
    ],
  },
};

export default function About() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Vårt företag</span>
          <h1>
            Om <span className={styles.gradientText}>Blimpify</span>
          </h1>
          <p>
            Lär känna vårt team och vår historia. Vi är passionerade om att skapa innovativa
            lösningar som gör skillnad för våra kunder och kreatörer.
          </p>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroShape1}></div>
          <div className={styles.heroShape2}></div>
          <div className={styles.heroShape3}></div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.sectionHeader}>
          <h2>Vår mission</h2>
          <p>Vi strävar efter att skapa en plattform där kreativitet möter möjligheter</p>
        </div>

        <div className={styles.missionContent}>
          <div className={styles.missionText}>
            <p>
              Blimpify grundades 2024 med visionen att revolutionera hur kreatörer och företag
              samarbetar. Vi tror på att skapa en värld där kreativa talanger kan blomstra och där
              företag enkelt kan hitta de bästa kreatörerna för sina projekt.
            </p>
            <p>
              Vår plattform är byggd för att eliminera friktionen i kreativa samarbeten och skapa en
              transparent, effektiv och inspirerande miljö för alla inblandade. Vi är dedikerade
              till att stödja kreativa entreprenörer och hjälpa företag att förverkliga sina
              visioner.
            </p>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Kreatörer</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>200+</span>
                <span className={styles.statLabel}>Företag</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>1000+</span>
                <span className={styles.statLabel}>Projekt</span>
              </div>
            </div>
          </div>

          <div className={styles.missionImage}>
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.sectionHeader}>
          <h2>Vårt team</h2>
          <p>Möt de passionerade individerna bakom Blimpify</p>
        </div>

        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <div className={styles.memberImage}>
              <div className={styles.imagePlaceholder}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <h3>William Hassinen</h3>
            <p className={styles.memberRole}>Grundare & Backend developer</p>
            <p className={styles.memberBio}>Kommer snart...</p>
            <div className={styles.memberSocial}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.47 2H3.53C2.64 2 2 2.64 2 3.53V20.47C2 21.36 2.64 22 3.53 22H20.47C21.36 22 22 21.36 22 20.47V3.53C22 2.64 21.36 2 20.47 2ZM8.09 18.74H5.07V9.42H8.09V18.74ZM6.59 8.01C5.61 8.01 4.82 7.22 4.82 6.24C4.82 5.27 5.61 4.47 6.59 4.47C7.56 4.47 8.36 5.27 8.36 6.24C8.36 7.22 7.56 8.01 6.59 8.01ZM18.91 18.74H15.9V14.18C15.9 13.01 15.88 11.53 14.31 11.53C12.7 11.53 12.48 12.76 12.48 14.01V18.74H9.47V9.42H12.37V10.79H12.4C12.81 10.01 13.81 9.19 15.28 9.19C18.32 9.19 18.91 11.28 18.91 13.95V18.74Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 4.01C21 4.5 20.02 4.69 19 4.82C20.03 4.1 20.76 3 21 1.7C20.02 2.57 18.91 3.13 17.7 3.43C16.7 2.2 15.22 1.6 14 1.6C11.24 1.6 9 3.84 9 6.6C9 7.04 9.03 7.47 9.1 7.88C4.97 7.68 1.33 5.79 0.53 2.8C0.4 3.6 0.26 4.4 0.26 5.23C0.26 6.83 1.15 8.24 2.4 9.05C1.8 9.05 1.22 8.87 0.72 8.58V8.62C0.72 11.06 2.5 13.08 4.8 13.58C4.3 13.72 3.77 13.79 3.22 13.79C2.83 13.79 2.45 13.77 2.1 13.71C2.84 15.68 4.7 17.11 6.87 17.14C5.1 18.47 3.17 19.27 1.1 19.27C0.73 19.27 0.36 19.25 0 19.22C2.2 20.65 4.8 21.45 7.6 21.45C16.72 21.45 21.73 13.86 21.73 7.35C21.73 7.13 21.73 6.91 21.72 6.7C22.72 5.9 23.5 4.9 24 3.8L22 4.01Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.teamMember}>
            <div className={styles.memberImage}>
              <div className={styles.imagePlaceholder}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <h3>Simon Modin</h3>
            <p className={styles.memberRole}>Grundare & web developer</p>
            <p className={styles.memberBio}>Kommer snart...</p>
            <div className={styles.memberSocial}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.47 2H3.53C2.64 2 2 2.64 2 3.53V20.47C2 21.36 2.64 22 3.53 22H20.47C21.36 22 22 21.36 22 20.47V3.53C22 2.64 21.36 2 20.47 2ZM8.09 18.74H5.07V9.42H8.09V18.74ZM6.59 8.01C5.61 8.01 4.82 7.22 4.82 6.24C4.82 5.27 5.61 4.47 6.59 4.47C7.56 4.47 8.36 5.27 8.36 6.24C8.36 7.22 7.56 8.01 6.59 8.01ZM18.91 18.74H15.9V14.18C15.9 13.01 15.88 11.53 14.31 11.53C12.7 11.53 12.48 12.76 12.48 14.01V18.74H9.47V9.42H12.37V10.79H12.4C12.81 10.01 13.81 9.19 15.28 9.19C18.32 9.19 18.91 11.28 18.91 13.95V18.74Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1.27C5.97 1.27 1.27 5.97 1.27 12C1.27 16.69 4.15 20.73 8.24 22.14C8.8 22.23 9.03 21.89 9.03 21.59C9.03 21.33 9.02 20.55 9.02 19.7C6.25 20.34 5.59 18.5 5.59 18.5C5.08 17.3 4.33 17 4.33 17C3.29 16.36 4.4 16.37 4.4 16.37C5.54 16.45 6.13 17.43 6.13 17.43C7.13 19.05 8.74 18.56 9.05 18.27C9.14 17.62 9.39 17.14 9.68 16.86C7.48 16.59 5.18 15.69 5.18 11.65C5.18 10.52 5.61 9.6 6.15 8.89C6.04 8.6 5.67 7.57 6.26 6.16C6.26 6.16 7.2 5.86 9.01 7.07C9.93 6.82 10.93 6.7 11.92 6.69C12.9 6.7 13.9 6.82 14.83 7.07C16.64 5.86 17.58 6.16 17.58 6.16C18.17 7.57 17.8 8.6 17.69 8.89C18.23 9.6 18.66 10.52 18.66 11.65C18.66 15.7 16.35 16.58 14.14 16.85C14.5 17.19 14.83 17.85 14.83 18.87C14.83 20.34 14.82 21.23 14.82 21.59C14.82 21.89 15.04 22.24 15.61 22.14C19.71 20.73 22.58 16.69 22.58 12C22.58 5.97 17.88 1.27 12 1.27Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.teamMember}>
            <div className={styles.memberImage}>
              <div className={styles.imagePlaceholder}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <h3>Alexander Salzer</h3>
            <p className={styles.memberRole}>Grundare & Ios developer</p>
            <p className={styles.memberBio}>Kommer snart...</p>
            <div className={styles.memberSocial}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.47 2H3.53C2.64 2 2 2.64 2 3.53V20.47C2 21.36 2.64 22 3.53 22H20.47C21.36 22 22 21.36 22 20.47V3.53C22 2.64 21.36 2 20.47 2ZM8.09 18.74H5.07V9.42H8.09V18.74ZM6.59 8.01C5.61 8.01 4.82 7.22 4.82 6.24C4.82 5.27 5.61 4.47 6.59 4.47C7.56 4.47 8.36 5.27 8.36 6.24C8.36 7.22 7.56 8.01 6.59 8.01ZM18.91 18.74H15.9V14.18C15.9 13.01 15.88 11.53 14.31 11.53C12.7 11.53 12.48 12.76 12.48 14.01V18.74H9.47V9.42H12.37V10.79H12.4C12.81 10.01 13.81 9.19 15.28 9.19C18.32 9.19 18.91 11.28 18.91 13.95V18.74Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dribbble"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C14.32 4 16.45 4.95 18.06 6.44C16.91 8.01 15.56 9.17 14.05 9.97C13.35 8.41 12.53 6.94 11.6 5.57C11.73 5.55 11.87 5.54 12 5.54V4ZM9.09 5.07C10.08 6.46 10.97 7.94 11.72 9.52C9.82 10.07 7.74 10.37 5.5 10.37C5 10.37 4.51 10.35 4.03 10.32C4.57 8 6.47 6.13 9.09 5.07ZM4 12C4 11.92 4 11.84 4.01 11.76C4.53 11.79 5.07 11.82 5.62 11.82C8.2 11.82 10.61 11.45 12.79 10.75C13.04 11.26 13.27 11.78 13.49 12.31C13.25 12.38 13 12.47 12.77 12.56C10.32 13.53 8.27 15.22 6.94 17.69C5.16 16.04 4 14.15 4 12ZM12 20C9.8 20 7.8 19.16 6.22 17.8C7.4 15.54 9.23 14.01 11.5 13.13C12.09 14.86 12.55 16.67 12.87 18.57C12.59 18.65 12.3 18.72 12 18.72V20ZM14.42 17.93C14.12 16.14 13.7 14.43 13.16 12.81C14.61 12.29 16.25 12.15 18.05 12.39C17.69 14.76 16.35 16.77 14.42 17.93ZM13.05 11.39C12.87 10.95 12.67 10.52 12.47 10.09C14.09 9.19 15.53 7.94 16.74 6.28C18.21 7.82 19.12 9.83 19.12 12C19.12 12.09 19.12 12.18 19.11 12.27C16.98 11.97 14.96 12.17 13.05 11.39Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.sectionHeader}>
          <h2>Våra värderingar</h2>
          <p>Principer som guidar oss i allt vi gör</p>
        </div>

        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3>Innovation</h3>
            <p>
              Vi strävar alltid efter att tänka utanför boxen och hitta nya lösningar på gamla
              problem.
            </p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3>Kvalitet</h3>
            <p>Vi kompromissar aldrig med kvaliteten i våra produkter och tjänster.</p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3>Gemenskap</h3>
            <p>
              Vi tror på kraften i samarbete och att bygga starka relationer med våra användare.
            </p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3>Säkerhet</h3>
            <p>Vi prioriterar säkerhet och integritet i alla aspekter av vår verksamhet.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Bli en del av vår resa</h2>
          <p>
            Oavsett om du är en kreatör som söker nya möjligheter eller ett företag som behöver
            kreativa lösningar, så finns Blimpify här för dig.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/register" className={styles.ctaButtonPrimary}>
              Kom igång
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
            <Link href="/contact" className={styles.ctaButtonSecondary}>
              Kontakta oss
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
