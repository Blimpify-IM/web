'use client';

import React, { useState, useEffect } from 'react';

import styles from './PaymentInfoModal.module.css';

interface PaymentInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PaymentInfoModal({ isOpen, onClose }: PaymentInfoModalProps) {
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
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <h2>Säkra Betalningar</h2>
          <p>Hantera alla ekonomiska aspekter av dina samarbeten tryggt och enkelt</p>
        </div>

        <div className={styles.tabsContainer}>
          <button
            className={`${styles.tabButton} ${activeTab === 'process' ? styles.active : ''}`}
            onClick={() => setActiveTab('process')}
          >
            Process
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'security' ? styles.active : ''}`}
            onClick={() => setActiveTab('security')}
          >
            Säkerhet
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'fees' ? styles.active : ''}`}
            onClick={() => setActiveTab('fees')}
          >
            Avgifter
          </button>
        </div>

        <div className={styles.tabContent}>
          {/* Process Tab */}
          <div className={`${styles.tabPanel} ${activeTab === 'process' ? styles.active : ''}`}>
            <h3>Hur betalningsprocessen fungerar</h3>

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
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <h4>Skapa kontrakt</h4>
                <p>Definiera tydliga milstolpar och betalningsvillkor för ditt samarbete.</p>
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
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <h4>Säker deposition</h4>
                <p>Betalaren sätter in pengar på ett säkert Stripe-konto som hålls i deposition.</p>
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
                <h4>Milstolpar uppnås</h4>
                <p>När en milstolpe är godkänd av båda parter, frigörs betalningen automatiskt.</p>
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
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h4>Utbetalning</h4>
                <p>Pengarna överförs direkt till mottagarens bankkonto vid nästa utbetalningsdag</p>
              </div>
            </div>
          </div>

          {/* Security Tab */}
          <div className={`${styles.tabPanel} ${activeTab === 'security' ? styles.active : ''}`}>
            <h3>Säkerhet i fokus</h3>

            <div className={styles.securityFeatures}>
              <div className={styles.securityFeature}>
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
                <h4>End-to-end kryptering</h4>
                <p>
                  All betalningsinformation krypteras med banknivåsäkerhet för att skydda dina data.
                </p>
              </div>

              <div className={styles.securityFeature}>
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
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <h4>Stripe-integration</h4>
                <p>
                  Vi använder Stripe, en av världens mest betrodda betalningsprocessorer, för alla
                  transaktioner.
                </p>
              </div>
            </div>
          </div>

          {/* Fees Tab */}
          <div className={`${styles.tabPanel} ${activeTab === 'fees' ? styles.active : ''}`}>
            <h3>Transparent avgiftsstruktur</h3>

            <div className={styles.feesTable}>
              <div className={styles.feesHeader}>
                <div>Plan</div>
                <div>Transaktionsavgift</div>
                <div>Uttagsavgift</div>
              </div>

              <div className={styles.feesRow}>
                <div>Basic</div>
                <div>15%</div>
                <div>0 kr</div>
              </div>

              <div className={styles.feesRow}>
                <div>Pro</div>
                <div>7%</div>
                <div>0 kr</div>
              </div>

              <div className={styles.feesRow}>
                <div>Premium</div>
                <div>3%</div>
                <div>0 kr</div>
              </div>
            </div>

            <div className={styles.feesFaq}>
              <h4>Vanliga frågor om avgifter</h4>

              <div className={styles.faqItem}>
                <h5>Finns det några månadsavgifter?</h5>
                <p>
                  Ja, beroende på vilken plan du väljer. Se vår prissida för mer information om våra
                  olika abonnemang.
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
