'use client';

import React, { useState, useEffect } from 'react';

import styles from './ContractInfoModal.module.css';

interface ContractInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContractInfoModal({ isOpen, onClose }: ContractInfoModalProps) {
  const [activeTab, setActiveTab] = useState('process');

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
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <h2>Smarta Kontrakt</h2>
          <p>Tydliga och säkra samarbetsavtal för dina kreativa projekt</p>
        </div>

        <div className={styles.tabsContainer}>
          <button
            className={`${styles.tabButton} ${activeTab === 'process' ? styles.active : ''}`}
            onClick={() => setActiveTab('process')}
          >
            Process
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'features' ? styles.active : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Funktioner
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'legal' ? styles.active : ''}`}
            onClick={() => setActiveTab('legal')}
          >
            Juridiskt
          </button>
        </div>

        <div className={styles.tabContent}>
          {/* Process Tab */}
          <div className={`${styles.tabPanel} ${activeTab === 'process' ? styles.active : ''}`}>
            <h3>Hur våra smarta kontrakt fungerar</h3>

            <div className={styles.processSteps}>
              <div className={styles.processStep}>
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
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                  </svg>
                </div>
                <h4>Skapa kontrakt</h4>
                <p>
                  Våra fördefinierade mallar med tydliga milstolpar, leverabler och
                  betalningsvillkor.
                </p>
              </div>

              <div className={styles.processStep}>
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
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <h4>Signera digitalt</h4>
                <p>
                  Båda parter signerar kontraktet digitalt med säker verifiering. Alla ändringar
                  loggas och spåras för fullständig transparens.
                </p>
              </div>

              <div className={styles.processStep}>
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
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h4>Automatiska milstolpar</h4>
                <p>
                  Kontraktet spårar automatiskt framsteg och milstolpar. Betalningar frigörs när
                  milstolpar godkänns.
                </p>
              </div>

              <div className={styles.processStep}>
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h4>Slutför samarbetet</h4>
                <p>
                  När alla milstolpar är uppnådda markeras kontraktet som slutfört. All historik och
                  dokumentation sparas för framtida referens.
                </p>
              </div>
            </div>
          </div>

          {/* Features Tab */}
          <div className={`${styles.tabPanel} ${activeTab === 'features' ? styles.active : ''}`}>
            <h3>Kraftfulla funktioner</h3>

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
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h4>Automatisk milestone-tracking</h4>
                <p>
                  Systemet spårar automatiskt framsteg och skickar påminnelser när deadlines närmar
                  sig. Betalningar kan kopplas till milstolpar för automatisk utbetalning.
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h4>Säker digital signering</h4>
                <p>
                  Alla kontrakt signeras digitalt med säker verifiering som uppfyller juridiska
                  krav. Signaturer tidsstämplas och verifieras.
                </p>
              </div>
            </div>
          </div>

          {/* Legal Tab */}
          <div className={`${styles.tabPanel} ${activeTab === 'legal' ? styles.active : ''}`}>
            <h3>Juridisk information</h3>

            <div className={styles.legalInfo}>
              <div className={styles.legalSection}>
                <h4>Juridisk giltighet</h4>
                <p>
                  Alla kontrakt som skapas och signeras på vår plattform är juridiskt bindande och
                  uppfyller kraven för elektroniska signaturer enligt gällande lagstiftning.
                </p>
              </div>

              <div className={styles.legalSection}>
                <h4>Dataskydd och sekretess</h4>
                <p>
                  All kontraktsinformation lagras säkert och krypterat. Endast behöriga parter har
                  tillgång till kontraktsinnehållet. Vi följer GDPR och andra relevanta
                  dataskyddslagar.
                </p>
              </div>

              <div className={styles.legalSection}>
                <h4>Ändringar och versionshantering</h4>
                <p>
                  Alla ändringar i kontraktet måste godkännas av båda parter. Ändringar loggas med
                  tidsstämpel och versionshistorik för fullständig transparens och spårbarhet.
                </p>
              </div>
            </div>

            <div className={styles.disclaimer}>
              <p>
                Observera att även om våra kontraktsmallar är juridiskt granskade, rekommenderar vi
                att du konsulterar en jurist för specifika juridiska frågor eller särskilt komplexa
                avtal.
              </p>
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
