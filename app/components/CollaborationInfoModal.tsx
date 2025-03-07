'use client';

import React, { useState, useEffect } from 'react';

import styles from './CollaborationInfoModal.module.css';

interface CollaborationInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CollaborationInfoModal({ isOpen, onClose }: CollaborationInfoModalProps) {
  const [activeTab, setActiveTab] = useState('communication');

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
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </div>
          <h2>Samarbetscenter</h2>
          <p>En central plats för all kommunikation och projekthantering i dina samarbeten</p>
        </div>

        <div className={styles.tabsContainer}>
          <button
            className={`${styles.tabButton} ${activeTab === 'communication' ? styles.active : ''}`}
            onClick={() => setActiveTab('communication')}
          >
            Kommunikation
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'files' ? styles.active : ''}`}
            onClick={() => setActiveTab('files')}
          >
            Filhantering
          </button>
        </div>

        <div className={styles.tabContent}>
          {/* Communication Tab */}
          <div
            className={`${styles.tabPanel} ${activeTab === 'communication' ? styles.active : ''}`}
          >
            <h3>Effektiv kommunikation</h3>

            <div className={styles.communicationFeatures}>
              <div className={styles.communicationFeature}>
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
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h4>Chattfunktion</h4>
                <p>Direktmeddelanden i samarbetet, med stöd för bilder, filer och länkar.</p>
              </div>

              <div className={styles.communicationFeature}>
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
                    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h4>Progressions uppdateringar</h4>
                <p>Se status på samarbetet och vad som händer utan att behöva lämna plattformen.</p>
              </div>
            </div>
          </div>

          {/* Files Tab */}
          <div className={`${styles.tabPanel} ${activeTab === 'files' ? styles.active : ''}`}>
            <h3>Smidig filhantering</h3>

            <div className={styles.fileFeatures}>
              <div className={styles.fileFeature}>
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
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                    <polyline points="13 2 13 9 20 9"></polyline>
                  </svg>
                </div>
                <h4>Fildelning</h4>
                <p>
                  Dela filer och dokument med dina samarbetspartners direkt i plattformen, med stöd
                  för alla vanliga filformat.
                </p>
              </div>

              <div className={styles.fileFeature}>
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
                    <polyline points="17 1 21 5 17 9"></polyline>
                    <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                    <polyline points="7 23 3 19 7 15"></polyline>
                    <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                  </svg>
                </div>
                <h4>Versionshantering</h4>
                <p>
                  Håll reda på olika versioner av filer och dokument, med möjlighet att återgå till
                  tidigare versioner vid behov.
                </p>
              </div>

              <div className={styles.fileFeature}>
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
                    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                  </svg>
                </div>
                <h4>Kommentarer och feedback</h4>
                <p>
                  Lämna kommentarer och feedback direkt på filer och dokument för att förenkla
                  granskningsprocessen.
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
