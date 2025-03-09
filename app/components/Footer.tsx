'use client';

import Link from 'next/link';
import React, { useState } from 'react';

import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!email || !email.includes('@')) {
      setError('Vänligen ange en giltig e-postadress');
      return;
    }

    try {
      const response = await fetch('https://devapi.blimpify.co/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmail('');
        setSuccess(true);
      } else {
        setError('Något gick fel. Försök igen senare.');
      }
    } catch (error) {
      setError('Något gick fel. Försök igen senare.');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.footerLogo}>
              <img
                src="/images/simons.png"
                alt="Blimpify Logo"
                width={60}
                height={60}
                className={styles.footerLogoImage}
              />
            </Link>
            <p className={styles.footerTagline}>
              Hitta och hantera kreativa samarbeten med egenutvecklad matchningsalgoritm
            </p>
            <div className={styles.footerSocial}>
              <a
                href="https://twitter.com/blimpify"
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
              <a
                href="https://instagram.com/blimpify"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.16C15.2 2.16 15.58 2.16 16.9 2.26C19.75 2.38 21.63 4.3 21.74 7.1C21.84 8.42 21.84 8.8 21.84 12C21.84 15.2 21.84 15.58 21.74 16.9C21.62 19.7 19.7 21.62 16.9 21.74C15.58 21.84 15.2 21.84 12 21.84C8.8 21.84 8.42 21.84 7.1 21.74C4.3 21.62 2.38 19.7 2.26 16.9C2.16 15.58 2.16 15.2 2.16 12C2.16 8.8 2.16 8.42 2.26 7.1C2.38 4.3 4.3 2.38 7.1 2.26C8.42 2.16 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33 0.01 7.05 0.1C3.17 0.28 0.28 3.17 0.1 7.05C0.01 8.33 0 8.74 0 12C0 15.26 0.01 15.67 0.1 16.95C0.28 20.83 3.17 23.72 7.05 23.9C8.33 23.99 8.74 24 12 24C15.26 24 15.67 23.99 16.95 23.9C20.83 23.72 23.72 20.83 23.9 16.95C23.99 15.67 24 15.26 24 12C24 8.74 23.99 8.33 23.9 7.05C23.72 3.17 20.83 0.28 16.95 0.1C15.67 0.01 15.26 0 12 0ZM12 5.84C8.6 5.84 5.84 8.6 5.84 12C5.84 15.4 8.6 18.16 12 18.16C15.4 18.16 18.16 15.4 18.16 12C18.16 8.6 15.4 5.84 12 5.84ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16ZM18.41 4.15C17.67 4.15 17.07 4.75 17.07 5.49C17.07 6.23 17.67 6.83 18.41 6.83C19.15 6.83 19.75 6.23 19.75 5.49C19.75 4.75 19.15 4.15 18.41 4.15Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/blimpify"
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
            </div>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.footerLinkGroup}>
              <h3>Huvudnavigering</h3>
              <ul>
                <li>
                  <Link href="/">Hem</Link>
                </li>
                <li>
                  <Link href="/about">Om oss</Link>
                </li>
                <li>
                  <Link href="/features">Funktioner</Link>
                </li>
                <li>
                  <Link href="/pricing">Priser</Link>
                </li>
                <li>
                  <Link href="/contact">Kontakt</Link>
                </li>
              </ul>
            </div>

            <div className={styles.footerLinkGroup}>
              <h3>För kreatörer</h3>
              <ul>
                <li>
                  <Link href="/creators/how-it-works">Hur det fungerar</Link>
                </li>
                <li>
                  <Link href="/creators/pioneers">Pionjärer</Link>
                </li>
                <li>
                  <Link href="/creators/resources">Resurser</Link>
                </li>
                <li>
                  <Link href="/creators/faq">Vanliga frågor</Link>
                </li>
              </ul>
            </div>

            <div className={styles.footerLinkGroup}>
              <h3>Resurser</h3>
              <ul>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/login">Logga in</Link>
                </li>
                <li>
                  <Link href="/register">Registrera</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.footerNewsletter}>
            <h3>Prenumerera på vårt nyhetsbrev</h3>
            <p>Få de senaste uppdateringarna och erbjudandena direkt i din inkorg</p>

            <form onSubmit={handleSubmit} className={styles.newsletterForm}>
              <div className={styles.newsletterInput}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Din e-postadress"
                  aria-label="E-postadress för nyhetsbrev"
                />
                {error && <p className={styles.errorMessage}>{error}</p>}
                {success && <p className={styles.successMessage}>Tack för din prenumeration!</p>}
              </div>
              <button type="submit" className={styles.newsletterButton}>
                Prenumerera
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.footerCopyright}>
            &copy; {currentYear} Blimpify. Alla rättigheter förbehållna.
          </p>
          <div className={styles.footerLegal}>
            <Link href="/terms">Användarvillkor</Link>
            <Link href="/privacy">Integritetspolicy</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
