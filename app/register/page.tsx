'use client';

import Link from 'next/link';
import React, { useState } from 'react';

import styles from './register.module.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Här skulle registreringslogiken implementeras
    console.log('Registrerar:', name, email, password, confirmPassword);
  };

  return (
    <div className={styles.container}>
      <div className={styles.registerWrapper}>
        <div className={styles.registerCard}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTag}>Skapa konto</span>
            <h1>
              Registrera <span className={styles.gradientText}>dig</span>
            </h1>
            <p>Skapa ett konto för att börja din kreativa resa med Blimpify</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Namn</label>
              <div className={styles.inputWrapper}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                    fill="currentColor"
                  />
                </svg>
                <input
                  type="text"
                  id="name"
                  placeholder="Ditt namn"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">E-postadress</label>
              <div className={styles.inputWrapper}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                    fill="currentColor"
                  />
                </svg>
                <input
                  type="email"
                  id="email"
                  placeholder="Din e-postadress"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Lösenord</label>
              <div className={styles.inputWrapper}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z"
                    fill="currentColor"
                  />
                </svg>
                <input
                  type="password"
                  id="password"
                  placeholder="Välj ett lösenord"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword">Bekräfta lösenord</label>
              <div className={styles.inputWrapper}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z"
                    fill="currentColor"
                  />
                </svg>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Bekräfta ditt lösenord"
                  required
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.termsCheckbox}>
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                Jag godkänner <Link href="/terms">användarvillkoren</Link> och{' '}
                <Link href="/privacy">integritetspolicyn</Link>
              </label>
            </div>

            <button type="submit" className={styles.registerButton}>
              Skapa konto
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
            </button>
          </form>

          <div className={styles.divider}>
            <span>Eller</span>
          </div>

          <div className={styles.socialLogin}>
            <button className={styles.socialButton}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.57C14.73 18.23 13.48 18.63 12 18.63C9.13 18.63 6.72 16.69 5.82 14.09H2.12V16.95C3.94 20.53 7.69 23 12 23Z"
                  fill="#34A853"
                />
                <path
                  d="M5.82 14.09C5.6 13.43 5.48 12.73 5.48 12C5.48 11.27 5.6 10.57 5.82 9.91V7.05H2.12C1.41 8.57 1 10.24 1 12C1 13.76 1.41 15.43 2.12 16.95L5.82 14.09Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.37C13.54 5.37 14.93 5.91 16.03 6.97L19.22 3.78C17.46 2.13 14.97 1 12 1C7.69 1 3.94 3.47 2.12 7.05L5.82 9.91C6.72 7.31 9.13 5.37 12 5.37Z"
                  fill="#EA4335"
                />
              </svg>
              Fortsätt med Google
            </button>
          </div>

          <div className={styles.loginLink}>
            Har du redan ett konto? <Link href="/login">Logga in</Link>
          </div>
        </div>

        <div className={styles.registerVisual}>
          <div className={styles.visualContent}>
            <h2>Bli en del av Blimpify</h2>
            <p>
              Anslut till vår community av kreativa talanger och hitta nya möjligheter att växa.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Skapa en professionell profil</span>
              </div>
              <div className={styles.feature}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Få tillgång till exklusiva uppdrag</span>
              </div>
              <div className={styles.feature}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Nätverka med andra kreatörer</span>
              </div>
            </div>
          </div>
          <div className={styles.visualShape1}></div>
          <div className={styles.visualShape2}></div>
          <div className={styles.visualShape3}></div>
        </div>
      </div>
    </div>
  );
}
