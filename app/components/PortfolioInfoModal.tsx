'use client';

import React, { useState, useEffect } from 'react';

import styles from './PortfolioInfoModal.module.css';

interface PortfolioInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PortfolioInfoModal({ isOpen, onClose }: PortfolioInfoModalProps) {
  const [activeTab, setActiveTab] = useState('design');

  // Stäng modal med Escape-tangenten
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      // Förhindra scrollning på body när modalen är öppen
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      // Återställ scrollning när modalen stängs
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
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
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className={styles.modalHeader}>
          <div className={styles.modalIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
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
          <h2>Professionell Portfolio</h2>
          <p>
            Skapa en imponerande digital närvaro som visar upp dina bästa projekt och prestationer
          </p>
        </div>

        <div className={styles.tabsContainer}>
          <button
            className={`${styles.tabButton} ${activeTab === 'design' ? styles.active : ''}`}
            onClick={() => setActiveTab('design')}
          >
            Design
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'features' ? styles.active : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Funktioner
          </button>
        </div>

        <div className={styles.tabContent}>
          {/* Design Tab */}
          <div className={`${styles.tabPanel} ${activeTab === 'design' ? styles.active : ''}`}>
            <h3>Skapa din professionella image</h3>

            <div className={styles.designSteps}>
              <div className={styles.designStep}>
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
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <h4>Anpassad layout</h4>
                <p>
                  Använd våra verktyg för att skapa en portfolio som passar din stil och ditt
                  varumärke.
                </p>
              </div>

              <div className={styles.designStep}>
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
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h4>Personlig profil</h4>
                <p>
                  Skapa en professionell profil med din bio, expertisområden och kontaktinformation.
                </p>
              </div>

              <div className={styles.designStep}>
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
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h4>Delbar länk</h4>
                <p>
                  Få en unik URL som du kan dela med potentiella samarbetspartners och i dina
                  sociala medier.
                </p>
              </div>
            </div>
          </div>

          {/* Features Tab */}
          <div className={`${styles.tabPanel} ${activeTab === 'features' ? styles.active : ''}`}>
            <h3>Kraftfulla portfoliofunktioner</h3>

            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
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
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                  </svg>
                </div>
                <h4>Statistikintegration</h4>
                <p>Visa upp dina tidigare kampanjer direkt i din portfolio.</p>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
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
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h4>Sociala medier-integration</h4>
                <p>
                  Koppla dina sociala mediekonton för att automatiskt visa dina senaste inlägg och
                  engagemang.
                </p>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
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
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                  </svg>
                </div>
                <h4>Projektgalleri</h4>
                <p>Skapa ett visuellt imponerande galleri med dina bästa samarbeten och projekt.</p>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h4>Recensioner och omdömen</h4>
                <p>
                  Samla in och visa upp omdömen från tidigare samarbetspartners för att bygga
                  förtroende.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.modalFooter}>
          <button className={styles.secondaryButton} onClick={onClose}>
            Stäng
          </button>
        </div>
      </div>
    </div>
  );
}
