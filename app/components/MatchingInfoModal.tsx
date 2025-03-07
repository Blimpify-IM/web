'use client';

import React, { useState, useEffect } from 'react';

import styles from './MatchingInfoModal.module.css';

interface MatchingInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MatchingInfoModal({ isOpen, onClose }: MatchingInfoModalProps) {
  const [activeTab, setActiveTab] = useState('algorithm');

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
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          </div>
          <h2>Smart Matchning</h2>
          <p>Hitta de perfekta samarbetspartners med vårt matchningssystem</p>
        </div>

        <div className={styles.tabsContainer}>
          <button
            className={`${styles.tabButton} ${activeTab === 'algorithm' ? styles.active : ''}`}
            onClick={() => setActiveTab('algorithm')}
          >
            Algoritm
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'benefits' ? styles.active : ''}`}
            onClick={() => setActiveTab('benefits')}
          >
            Fördelar
          </button>
        </div>

        <div className={styles.tabContent}>
          {/* Algorithm Tab */}
          <div className={`${styles.tabPanel} ${activeTab === 'algorithm' ? styles.active : ''}`}>
            <h3>Hur vår matchningsalgoritm fungerar</h3>

            <div className={styles.algorithmSteps}>
              <div className={styles.algorithmStep}>
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
                <h4>Profilanalys</h4>
                <p>
                  Algoritmen analyserar din profil, tidigare samarbeten och preferenser för att
                  förstå dina behov.
                </p>
              </div>

              <div className={styles.algorithmStep}>
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
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <h4>Målgruppsanalys</h4>
                <p>
                  Vi analyserar målgruppsöverlapp och komplementära målgrupper för att maximera
                  räckvidden.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Tab */}
          <div className={`${styles.tabPanel} ${activeTab === 'benefits' ? styles.active : ''}`}>
            <h3>Fördelar med smart matchning</h3>

            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
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
                <h4>Spara tid</h4>
                <p>
                  Slipp leta igenom hundratals profiler manuellt. Vår algoritm gör jobbet åt dig och
                  presenterar de bästa matchningarna.
                </p>
              </div>

              <div className={styles.benefitItem}>
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h4>Högre kvalitet</h4>
                <p>
                  Hitta samarbetspartners som verkligen passar dina behov och mål, vilket leder till
                  mer framgångsrika samarbeten.
                </p>
              </div>

              <div className={styles.benefitItem}>
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
                <h4>Bredare nätverk</h4>
                <p>
                  Upptäck nya potentiella samarbetspartners som du kanske inte hade hittat på egen
                  hand, vilket öppnar för nya möjligheter.
                </p>
              </div>

              <div className={styles.benefitItem}>
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
                <h4>Datadrivna beslut</h4>
                <p>
                  Basera dina samarbetsbeslut på konkreta data och analyser istället för magkänsla,
                  vilket leder till bättre resultat.
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
