'use client';

import React, { useState, useEffect } from 'react';
import {
  Shield,
  Settings,
  BarChart2,
  Bell,
  ChevronDown,
  ArrowRight,
  X,
  Check,
} from 'react-feather';

import styles from './cookies.module.css';

const cookieCategories = [
  {
    id: 'essential',
    title: 'Nödvändiga Cookies',
    description:
      'Dessa cookies är avgörande för webbplatsens grundläggande funktioner och kan inte inaktiveras. De används för att säkerställa säkerhet, prestanda och grundläggande funktionalitet.',
    required: true,
    features: [
      'Säker inloggning och autentisering',
      'Sessionshantering',
      'Minnesfunktioner för dina val',
      'Grundläggande webbplatsfunktioner',
    ],
    icon: <Shield className={styles.categoryIcon} size={24} />,
    color: '#8400ff',
  },
  {
    id: 'functional',
    title: 'Funktionella Cookies',
    description:
      'Dessa cookies möjliggör förbättrad funktionalitet och personanpassning av din upplevelse på vår webbplats.',
    required: false,
    features: [
      'Språkpreferenser',
      'Temaval och utseende',
      'Personliga inställningar',
      'Förbättrad användarvänlighet',
    ],
    icon: <Settings className={styles.categoryIcon} size={24} />,
    color: '#ff00d4',
  },
  {
    id: 'analytics',
    title: 'Analys Cookies',
    description:
      'Dessa cookies hjälper oss förstå hur besökare använder vår webbplats genom anonym datainsamling och analys.',
    required: false,
    features: ['Användarstatistik', 'Prestandamätning', 'Förbättringsanalys', 'Användarflöden'],
    icon: <BarChart2 className={styles.categoryIcon} size={24} />,
    color: '#00e5ff',
  },
  {
    id: 'marketing',
    title: 'Marknadsföring Cookies',
    description:
      'Dessa cookies används för att leverera mer relevant innehåll och annonser baserat på dina intressen.',
    required: false,
    features: [
      'Riktad marknadsföring',
      'Personliga erbjudanden',
      'Annonspreferenser',
      'Kampanjspårning',
    ],
    icon: <Bell className={styles.categoryIcon} size={24} />,
    color: '#00e676',
  },
];

export default function CookiePolicy() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [preferences, setPreferences] = useState<Record<string, boolean>>({
    essential: true,
    functional: false,
    analytics: false,
    marketing: false,
  });
  const [showPreferences, setShowPreferences] = useState(false);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const togglePreference = (categoryId: string) => {
    if (categoryId === 'essential') return; // Kan inte ändra nödvändiga cookies
    setPreferences(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const savePreferences = () => {
    // Här implementerar du logiken för att spara cookie-preferenser
    console.log('Sparar preferenser:', preferences);
    setShowPreferences(false);
  };

  const acceptAll = () => {
    setPreferences({
      essential: true,
      functional: true,
      analytics: true,
      marketing: true,
    });
    // Implementera logik för att spara alla preferenser
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Cookie-inställningar</h1>
          <p>
            Vi värnar om din integritet och ger dig kontroll över hur vi använder cookies för att
            förbättra din upplevelse på Blimpify.
          </p>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.visualElement}></div>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.content}>
        <section className={styles.infoSection}>
          <h2>Om Cookies på Blimpify</h2>
          <p>
            Cookies hjälper oss att leverera en bättre och mer personlig upplevelse. De används för
            att komma ihåg dina preferenser, analysera hur du använder vår tjänst och förbättra våra
            funktioner.
          </p>
          <div className={styles.actionButtons}>
            <button className={styles.primaryButton} onClick={() => setShowPreferences(true)}>
              Anpassa inställningar
              <Settings size={18} />
            </button>
            <button className={styles.secondaryButton} onClick={acceptAll}>
              Acceptera alla
              <Check size={18} />
            </button>
          </div>
        </section>

        {/* Cookie Categories */}
        <section className={styles.categoriesSection}>
          <h2>Cookie-kategorier</h2>
          <div className={styles.categories}>
            {cookieCategories.map(category => (
              <div
                key={category.id}
                className={`${styles.category} ${expandedCategory === category.id ? styles.expanded : ''}`}
                style={{ '--category-color': category.color } as React.CSSProperties}
              >
                <div className={styles.categoryHeader} onClick={() => toggleCategory(category.id)}>
                  <div className={styles.categoryTitle}>
                    {category.icon}
                    <h3>{category.title}</h3>
                  </div>
                  <ChevronDown className={styles.expandIcon} size={20} />
                </div>

                <div className={styles.categoryContent}>
                  <p>{category.description}</p>
                  <div className={styles.featuresList}>
                    <h4>Funktioner:</h4>
                    <ul>
                      {category.features.map((feature, index) => (
                        <li key={index}>
                          <Check size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {category.required ? <div className={styles.requiredBadge}>Nödvändig</div> : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cookie Preferences Modal */}
        {showPreferences && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <h2>Cookie-inställningar</h2>
                <button className={styles.closeButton} onClick={() => setShowPreferences(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className={styles.modalBody}>
                {cookieCategories.map(category => (
                  <div key={category.id} className={styles.preferenceItem}>
                    <div className={styles.preferenceInfo}>
                      {category.icon}
                      <div>
                        <h4>{category.title}</h4>
                        <p>{category.description}</p>
                      </div>
                    </div>
                    <label className={styles.switch}>
                      <input
                        type="checkbox"
                        checked={preferences[category.id]}
                        onChange={() => togglePreference(category.id)}
                        disabled={category.required}
                      />
                      <span className={styles.slider}></span>
                    </label>
                  </div>
                ))}
              </div>

              <div className={styles.modalFooter}>
                <button
                  className={styles.secondaryButton}
                  onClick={() => setShowPreferences(false)}
                >
                  Avbryt
                </button>
                <button className={styles.primaryButton} onClick={savePreferences}>
                  Spara inställningar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Additional Information */}
        <section className={styles.additionalInfo}>
          <div className={styles.infoCard}>
            <h3>Hantera i webbläsaren</h3>
            <p>
              Du kan även hantera cookies direkt i din webbläsares inställningar. Här är länkar till
              instruktioner för de vanligaste webbläsarna:
            </p>
            <div className={styles.browserLinks}>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chrome <ArrowRight size={16} />
              </a>
              <a
                href="https://support.mozilla.org/sv/kb/cookies-information-webbplatser-lagrar-pa-din-dator"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firefox <ArrowRight size={16} />
              </a>
              <a
                href="https://support.apple.com/sv-se/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safari <ArrowRight size={16} />
              </a>
              <a
                href="https://support.microsoft.com/sv-se/microsoft-edge/ta-bort-cookies-i-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edge <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className={styles.infoCard}>
            <h3>Frågor?</h3>
            <p>
              Om du har frågor om hur vi använder cookies eller andra tekniska frågor, är du
              välkommen att kontakta vår support.
            </p>
            <a href="/contact" className={styles.contactLink}>
              Kontakta oss <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
