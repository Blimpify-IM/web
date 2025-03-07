'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import {
  ChevronDown,
  CheckCircle,
  ArrowRight,
  Users,
  MessageCircle,
  BarChart2,
  Image as ImageIcon,
  CreditCard,
  FileText,
  Check,
  ArrowUpRight,
  Play,
  Home as HomeIcon,
  Search,
  MessageSquare,
  Box,
} from 'react-feather';

import styles from './page.module.css';

// Funktionsdata för de roterande korten
const features = [
  {
    icon: 'users',
    title: 'Smart Matchning',
    description: 'Hitta perfekta samarbetspartners baserat på dina mål och målgrupp',
    color: '#8400ff',
    highlights: ['Feed för matchning', 'Personliga rekommendationer', 'Målgruppsanalys'],
  },
  {
    icon: 'message-circle',
    title: 'Chatta',
    description: 'Kommunicera direkt i appen med potentiella samarbetspartners',
    color: '#ff00d4',
    highlights: ['Realtidskommunikation', 'Fildelning', 'Meddelandehistorik'],
  },
  {
    icon: 'bar-chart-2',
    title: 'Statistik',
    description: 'Få detaljerade insikter om dina samarbeten och resultat',
    color: '#00e5ff',
    highlights: ['Visualiserade data', 'Prestationsanalys', 'Exporteringsalternativ'],
  },
  {
    icon: 'image',
    title: 'Portfolio',
    description: 'Visa upp dina bästa projekt i en professionell digital portfolio',
    color: '#00e676',
    highlights: ['Användarvänlig UI', 'Projektgalleri', 'Statistik och insikter'],
  },
  {
    icon: 'credit-card',
    title: 'Betalning',
    description: 'Hantera betalningar och fakturering direkt i plattformen',
    color: '#ffea00',
    highlights: ['Säkra transaktioner', 'Automatiska utbetalningar', 'Transparent avgiftsstruktur'],
  },
  {
    icon: 'file-text',
    title: 'Kontrakt',
    description: 'Skapa och hantera avtal med tydliga villkor och milstolpar',
    color: '#ff5722',
    highlights: ['Automatiska milstolpar', 'Tydlig uppföljning', 'Säker signering'],
  },
];

// FAQ-data
const faqItems = [
  {
    question: 'Hur fungerar betalningen?',
    answer:
      'Vi använder Stripe för alla betalningar vilket garanterar säkra transaktioner. Betalningar frigörs automatiskt när överenskomna milstolpar uppnås i samarbetet.',
    category: 'betalningar',
  },
  {
    question: 'Hur hittar jag rätt samarbetspartners?',
    answer:
      'Vår matchningsalgoritm analyserar flera faktorer för att hitta de bästa matchningarna baserat på kompetensområden, erfarenhet, tidigare projekthistorik och kundrecensioner.',
    category: 'samarbeten',
  },
  {
    question: 'Hur skyddas mina uppgifter?',
    answer:
      'Vi tar säkerhet på största allvar och använder end-to-end kryptering, regelbundna säkerhetsgranskningar och GDPR-kompatibel datahantering.',
    category: 'säkerhet',
  },
  {
    question: 'Vad händer om ett samarbete inte fungerar?',
    answer:
      'Vi har en tydlig process för konflikthantering med medling via vår supportavdelning, säker återbetalningsprocess och möjlighet att avsluta samarbetet med rättvis bedömning.',
    category: 'samarbeten',
  },
  {
    question: 'Hur kommer jag igång med plattformen?',
    answer:
      'Att komma igång är enkelt och tar bara några minuter. Skapa ett konto, verifiera din identitet, komplettera din profil och börja utforska möjliga samarbeten.',
    category: 'plattformen',
  },
  {
    question: 'Vilka betalningsmetoder accepteras?',
    answer:
      'Vi erbjuder flera säkra betalningsalternativ inklusive alla större kreditkort, direktbetalning via bank, företagsfakturering efter godkännande.',
    category: 'betalningar',
  },
];

// Funktion för att rendera rätt ikon baserat på namn
const renderFeatureIcon = (iconName: string) => {
  switch (iconName) {
    case 'users':
      return <Users size={20} />;
    case 'message-circle':
      return <MessageCircle size={20} />;
    case 'bar-chart-2':
      return <BarChart2 size={20} />;
    case 'image':
      return <ImageIcon size={20} />;
    case 'credit-card':
      return <CreditCard size={20} />;
    case 'file-text':
      return <FileText size={20} />;
    default:
      return null;
  }
};

export default function Home() {
  const featureCardsRef = useRef<HTMLDivElement>(null);
  const [activeFeatureCard, setActiveFeatureCard] = useState(0);
  const [activeFaqItem, setActiveFaqItem] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('alla');
  const [visualKey, setVisualKey] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  // Funktion för att växla FAQ-objekt
  const toggleFaq = (index: number) => {
    setActiveFaqItem(activeFaqItem === index ? null : index);
  };

  // Växla mellan funktionskort med intervall
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeatureCard(prev => (prev + 1) % features.length);
      setVisualKey(prevKey => prevKey + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Filtrera FAQ-objekt baserat på aktiv kategori
  const filteredFaqItems =
    activeCategory === 'alla'
      ? faqItems
      : faqItems.filter(item => item.category === activeCategory);

  // Visa bara de första tre frågorna om showAllFaqs är false
  const displayedFaqItems = showAllFaqs ? filteredFaqItems : filteredFaqItems.slice(0, 3);

  // Återställ showAllFaqs när kategorin ändras
  useEffect(() => {
    setShowAllFaqs(false);
  }, [activeCategory]);

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.heroGradient}></div>
          <div className={styles.heroShapes}>
            <div className={styles.heroShape1}></div>
            <div className={styles.heroShape2}></div>
            <div className={styles.heroShape3}></div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <h1>
                Hitta perfekta <span className={styles.gradientText}>samarbeten</span> som driver
                tillväxt
              </h1>
              <p className={styles.heroDescription}>
                Blimpify kopplar samman företag och kreatörer med intelligent matchning baserad på
                data. Maximera dina samarbeten och fokusera på det som verkligen ger resultat.
              </p>

              <div className={styles.heroButtons}>
                <Link href="/register" className={styles.ctaButton}>
                  <span>Kom igång nu</span>
                  <ArrowRight size={20} />
                </Link>
                <a href="#features" className={styles.secondaryButton}>
                  <span>Utforska funktioner</span>
                  <Play size={20} />
                </a>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.mockPhoneContainer}>
                <div className={styles.mockPhone}>
                  <div className={styles.phoneFrame}>
                    <div className={styles.phoneNotch}></div>
                    <div className={styles.phoneScreen}>
                      <div className={styles.appInterface}>
                        <div className={styles.appHeader}>
                          <div className={styles.appLogo}>
                            <Box size={24} />
                            <span>Blimpify</span>
                          </div>
                          <div className={styles.appActions}>
                            <div className={styles.appAction}></div>
                            <div className={styles.appAction}></div>
                          </div>
                        </div>

                        <div className={styles.appContent}>
                          <div className={styles.appSection}>
                            <h3>Matchningar för dig</h3>
                            <div className={styles.matchCards}>
                              {features.map((feature, index) => (
                                <div
                                  key={index}
                                  className={`${styles.matchCard} ${activeFeatureCard === index ? styles.activeCard : ''}`}
                                >
                                  <div
                                    className={styles.matchCardHeader}
                                    style={{
                                      background: `linear-gradient(135deg, ${feature.color}, rgba(255,255,255,0.1))`,
                                    }}
                                  >
                                    <div className={styles.matchCardIcon}>
                                      {renderFeatureIcon(feature.icon)}
                                    </div>
                                  </div>
                                  <div className={styles.matchCardContent}>
                                    <h4>{feature.title}</h4>
                                    <p>{feature.description}</p>
                                    <div className={styles.matchCardFeatures}>
                                      {feature.highlights.map((highlight, i) => (
                                        <div key={i} className={styles.matchCardFeature}>
                                          <Check size={12} />
                                          <span>{highlight}</span>
                                        </div>
                                      ))}
                                    </div>

                                    {/* Visuell förklaring för varje funktion */}
                                    {activeFeatureCard === index && (
                                      <div key={visualKey} className={styles.matchCardVisual}>
                                        {feature.icon === 'users' && (
                                          <div className={styles.smartMatchingVisual}>
                                            <div className={styles.profileCircle}></div>
                                            <div className={styles.connectionLine}></div>
                                            <div className={styles.profileCircle}></div>
                                          </div>
                                        )}

                                        {feature.icon === 'message-circle' && (
                                          <div className={styles.chatVisual}>
                                            <div
                                              className={`${styles.chatBubble} ${styles.chatBubbleLeft}`}
                                            >
                                              Hej! Jag gillar ditt projekt.
                                            </div>
                                            <div
                                              className={`${styles.chatBubble} ${styles.chatBubbleRight}`}
                                            >
                                              Tack! Vill du samarbeta?
                                            </div>
                                          </div>
                                        )}

                                        {feature.icon === 'bar-chart-2' && (
                                          <div className={styles.statsVisual}>
                                            <div className={styles.statsBar}></div>
                                            <div className={styles.statsBar}></div>
                                            <div className={styles.statsBar}></div>
                                            <div className={styles.statsBar}></div>
                                            <div className={styles.statsBar}></div>
                                          </div>
                                        )}

                                        {feature.icon === 'image' && (
                                          <div className={styles.portfolioVisual}>
                                            <div className={styles.portfolioItem}></div>
                                            <div className={styles.portfolioItem}></div>
                                            <div className={styles.portfolioItem}></div>
                                            <div className={styles.portfolioItem}></div>
                                            <div className={styles.portfolioItem}></div>
                                            <div className={styles.portfolioItem}></div>
                                          </div>
                                        )}

                                        {feature.icon === 'credit-card' && (
                                          <div className={styles.paymentVisual}>
                                            <div className={styles.paymentCard}></div>
                                            <div className={styles.paymentCheck}>
                                              <Check size={12} color="white" />
                                            </div>
                                          </div>
                                        )}

                                        {feature.icon === 'file-text' && (
                                          <div className={styles.contractVisual}>
                                            <div className={styles.contractDocument}>
                                              <div className={styles.contractLine}></div>
                                              <div className={styles.contractLine}></div>
                                              <div className={styles.contractLine}></div>
                                              <div className={styles.contractSignature}></div>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className={styles.appNav}>
                          <div className={styles.navItem}>
                            <HomeIcon size={20} />
                          </div>
                          <div className={styles.navItem}>
                            <Search size={20} />
                          </div>
                          <div className={`${styles.navItem} ${styles.navItemActive}`}>
                            <Users size={20} />
                          </div>
                          <div className={styles.navItem}>
                            <MessageSquare size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.phoneReflection}></div>
                </div>

                <div className={styles.phoneDecorations}>
                  <div className={styles.decorCircle1}></div>
                  <div className={styles.decorCircle2}></div>
                  <div className={styles.decorDots}>
                    <div className={styles.decorDot}></div>
                    <div className={styles.decorDot}></div>
                    <div className={styles.decorDot}></div>
                  </div>
                  <div className={styles.decorLine1}></div>
                  <div className={styles.decorLine2}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection} id="features">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Funktioner</span>
            <h2>Upptäck alla våra kraftfulla verktyg</h2>
            <p className={styles.sectionDescription}>
              Blimpify erbjuder en komplett uppsättning verktyg för att hantera hela din
              samarbetsprocess
            </p>
          </div>

          <div className={styles.featureSections}>
            {/* Feature 1: Portfolio */}
            <div className={styles.featureSection}>
              <div className={styles.featureText}>
                <div className={styles.featureIconWrapper}>
                  <Users size={24} />
                </div>
                <h3>Smart matchning</h3>
                <p>
                  Vår avancerade matchningsalgoritm analyserar din profil för att hitta de perfekta
                  matchningarna.
                </p>
                <ul className={styles.featureHighlights}>
                  <li>
                    <CheckCircle size={20} />
                    <span>Personliga rekommendationer baserade på dina preferenser</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Detaljerad matchningspoäng</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Kontinuerligt lärande från dina preferenser</span>
                  </li>
                </ul>
                <Link href="/features" className={styles.featureButton}>
                  <span>Läs mer om våra funktioner</span>
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className={styles.featureVisual}>
                <div className={styles.mockupWrapper}>
                  <div className={styles.mockupScreen}>
                    {/* Matchning mockup innehåll */}
                    <div className={styles.appInterface}>
                      <div className={styles.appHeader}>
                        <div className={styles.appLogo}>
                          <Box size={24} />
                          <span>Matchningar</span>
                        </div>
                        <div className={styles.appActions}>
                          <div className={styles.appAction}></div>
                          <div className={styles.appAction}></div>
                        </div>
                      </div>
                      <div className={styles.appContent}>
                        <div className={styles.matchCards}>
                          <div
                            className={styles.matchCard}
                            style={{ opacity: 1, transform: 'none' }}
                          >
                            <div
                              className={styles.matchCardHeader}
                              style={{
                                background:
                                  'linear-gradient(135deg, #8400ff, rgba(255,255,255,0.1))',
                              }}
                            >
                              <div className={styles.matchCardIcon}>
                                <Users size={20} />
                              </div>
                            </div>
                            <div className={styles.matchCardContent}>
                              <h4>Företagsnamn AB</h4>
                              <p>
                                Perfekt match för ditt nästa projekt inom digital marknadsföring
                              </p>
                              <div className={styles.matchCardFeatures}>
                                <div className={styles.matchCardFeature}>
                                  <Check size={12} />
                                  <span>Expertis inom sociala medier</span>
                                </div>
                                <div className={styles.matchCardFeature}>
                                  <Check size={12} />
                                  <span>Tidigare framgångsrika kampanjer</span>
                                </div>
                                <div className={styles.matchCardFeature}>
                                  <Check size={12} />
                                  <span>Hög kundnöjdhet</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Kontrakt */}
            <div className={styles.featureSection + ' ' + styles.reverse}>
              <div className={styles.featureText}>
                <div className={styles.featureIconWrapper}>
                  <FileText size={24} />
                </div>
                <h3>Smarta Kontrakt</h3>
                <p>
                  Hantera alla dina samarbetsavtal på ett ställe med tydliga villkor och automatiska
                  milstolpar.
                </p>
                <ul className={styles.featureHighlights}>
                  <li>
                    <CheckCircle size={20} />
                    <span>Automatiska milstolpar med påminnelser</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Tydlig uppföljning av projektets framsteg</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Säker digital signering av avtal</span>
                  </li>
                </ul>
                <Link href="/features" className={styles.featureButton}>
                  Läs mer om våra funktioner
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className={styles.featureVisual}>
                <div className={styles.mockupWrapper}>
                  <div className={styles.mockupScreen}>
                    <div className={styles.appInterface}>
                      <div className={styles.appHeader}>
                        <div className={styles.appLogo}>
                          <Box size={24} />
                          <span>Kontrakt</span>
                        </div>
                        <div className={styles.appActions}>
                          <div className={styles.appAction}></div>
                          <div className={styles.appAction}></div>
                        </div>
                      </div>
                      <div className={styles.appContent}>
                        <div style={{ padding: '15px' }}>
                          <h4 style={{ color: 'white', marginBottom: '15px' }}>Samarbetsavtal</h4>
                          <div
                            style={{
                              background: 'rgba(255,255,255,0.05)',
                              padding: '15px',
                              borderRadius: '10px',
                              marginBottom: '15px',
                            }}
                          >
                            <h5 style={{ color: 'white', fontSize: '14px', marginBottom: '10px' }}>
                              Milstolpe 1: Planering
                            </h5>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                marginBottom: '5px',
                              }}
                            >
                              <Check size={14} color="#00e676" />
                              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>
                                Godkänd: 12 mars 2023
                              </span>
                            </div>
                          </div>
                          <div
                            style={{
                              background: 'rgba(255,255,255,0.05)',
                              padding: '15px',
                              borderRadius: '10px',
                              marginBottom: '15px',
                            }}
                          >
                            <h5 style={{ color: 'white', fontSize: '14px', marginBottom: '10px' }}>
                              Milstolpe 2: Produktion
                            </h5>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                marginBottom: '5px',
                              }}
                            >
                              <div
                                style={{
                                  width: '14px',
                                  height: '14px',
                                  borderRadius: '50%',
                                  border: '2px solid #8400ff',
                                }}
                              ></div>
                              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>
                                Pågående: 50% klar
                              </span>
                            </div>
                          </div>
                          <div
                            style={{
                              background: 'rgba(255,255,255,0.05)',
                              padding: '15px',
                              borderRadius: '10px',
                            }}
                          >
                            <h5 style={{ color: 'white', fontSize: '14px', marginBottom: '10px' }}>
                              Milstolpe 3: Lansering
                            </h5>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                marginBottom: '5px',
                              }}
                            >
                              <div
                                style={{
                                  width: '14px',
                                  height: '14px',
                                  borderRadius: '50%',
                                  border: '2px solid rgba(255,255,255,0.3)',
                                }}
                              ></div>
                              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>
                                Kommande: 5 april 2023
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3: Betalningar */}
            <div className={styles.featureSection}>
              <div className={styles.featureText}>
                <div className={styles.featureIconWrapper}>
                  <CreditCard size={24} />
                </div>
                <h3>Säkra Betalningar</h3>
                <p>
                  Integrerad betalningslösning via Stripe för trygga transaktioner mellan
                  samarbetspartners.
                </p>
                <ul className={styles.featureHighlights}>
                  <li>
                    <CheckCircle size={20} />
                    <span>Säkra transaktioner med krypterad data</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Automatiska utbetalningar vid milstolpar</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Transparent avgiftsstruktur utan dolda kostnader</span>
                  </li>
                </ul>
                <Link href="/features" className={styles.featureButton}>
                  <span>Läs mer om våra funktioner</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className={styles.featureVisual}>
                <div className={styles.mockupWrapper}>
                  <div className={styles.mockupScreen}>
                    <div className={styles.appInterface}>
                      <div className={styles.appHeader}>
                        <div className={styles.appLogo}>
                          <Box size={24} />
                          <span>Betalningar</span>
                        </div>
                        <div className={styles.appActions}>
                          <div className={styles.appAction}></div>
                          <div className={styles.appAction}></div>
                        </div>
                      </div>
                      <div className={styles.appContent}>
                        <div style={{ padding: '15px', textAlign: 'center' }}>
                          <div style={{ marginBottom: '20px' }}>
                            <div
                              style={{
                                color: 'rgba(255,255,255,0.6)',
                                fontSize: '14px',
                                marginBottom: '5px',
                              }}
                            >
                              Belopp att betala
                            </div>
                            <div
                              style={{
                                fontSize: '32px',
                                fontWeight: 'bold',
                                color: 'white',
                                marginBottom: '5px',
                              }}
                            >
                              25 000 kr
                            </div>
                            <div style={{ color: '#ff9800', fontSize: '12px' }}>
                              Förfaller om 3 dagar
                            </div>
                          </div>

                          <div style={{ marginBottom: '20px' }}>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '5px',
                              }}
                            >
                              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>
                                Projektframsteg
                              </span>
                              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px' }}>
                                75%
                              </span>
                            </div>
                            <div
                              style={{
                                height: '8px',
                                background: 'rgba(255,255,255,0.1)',
                                borderRadius: '4px',
                                overflow: 'hidden',
                              }}
                            >
                              <div
                                style={{
                                  height: '100%',
                                  width: '75%',
                                  background: 'linear-gradient(90deg, #8400ff, #ff00d4)',
                                  borderRadius: '4px',
                                }}
                              ></div>
                            </div>
                          </div>

                          <div
                            style={{
                              background: 'rgba(255,255,255,0.05)',
                              padding: '15px',
                              borderRadius: '10px',
                              marginBottom: '20px',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '8px',
                              }}
                            >
                              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>
                                Projekt
                              </span>
                              <span style={{ color: 'white', fontSize: '12px' }}>Webbdesign</span>
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '8px',
                              }}
                            >
                              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>
                                Faktura #
                              </span>
                              <span style={{ color: 'white', fontSize: '12px' }}>INV-2024-001</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>
                                Förfallodatum
                              </span>
                              <span style={{ color: 'white', fontSize: '12px' }}>25 Mar, 2024</span>
                            </div>
                          </div>

                          <button
                            style={{
                              width: '100%',
                              background: 'linear-gradient(90deg, #8400ff, #ff00d4)',
                              border: 'none',
                              borderRadius: '8px',
                              padding: '12px',
                              color: 'white',
                              fontWeight: 'bold',
                              fontSize: '14px',
                              cursor: 'pointer',
                            }}
                          >
                            Betala nu
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Detail Modal */}
      {hoveredFeature !== null && (
        <div className={styles.featureDetailOverlay} onClick={() => setHoveredFeature(null)}>
          <div className={styles.featureDetailModal} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setHoveredFeature(null)}>
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

            <div className={styles.featureDetailHeader}>
              <div
                className={styles.featureDetailIcon}
                style={{ background: features[hoveredFeature].color }}
              >
                {renderFeatureIcon(features[hoveredFeature].icon)}
              </div>
              <h2>{features[hoveredFeature].title}</h2>
            </div>

            <div className={styles.featureDetailContent}>
              <p className={styles.featureDetailDescription}>
                {features[hoveredFeature].description}
              </p>

              {features[hoveredFeature].highlights && (
                <div className={styles.featureHighlights}>
                  <h3>Höjdpunkter</h3>
                  <ul>
                    {features[hoveredFeature].highlights.map((highlight, index) => (
                      <li key={index}>
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
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <section className={styles.faqSection} id="faq">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Vanliga frågor</span>
            <h2>Har du frågor? Vi har svar</h2>
            <p className={styles.sectionDescription}>
              Här hittar du svar på de vanligaste frågorna om Blimpify och hur vår plattform
              fungerar
            </p>
          </div>

          <div className={styles.faqCategories}>
            <button
              className={`${styles.faqCategoryButton} ${activeCategory === 'alla' ? styles.active : ''}`}
              onClick={() => setActiveCategory('alla')}
            >
              Alla frågor
            </button>
            <button
              className={`${styles.faqCategoryButton} ${activeCategory === 'plattformen' ? styles.active : ''}`}
              onClick={() => setActiveCategory('plattformen')}
            >
              Plattformen
            </button>
            <button
              className={`${styles.faqCategoryButton} ${activeCategory === 'samarbeten' ? styles.active : ''}`}
              onClick={() => setActiveCategory('samarbeten')}
            >
              Samarbeten
            </button>
            <button
              className={`${styles.faqCategoryButton} ${activeCategory === 'betalningar' ? styles.active : ''}`}
              onClick={() => setActiveCategory('betalningar')}
            >
              Betalningar
            </button>
            <button
              className={`${styles.faqCategoryButton} ${activeCategory === 'säkerhet' ? styles.active : ''}`}
              onClick={() => setActiveCategory('säkerhet')}
            >
              Säkerhet
            </button>
          </div>

          <div className={styles.faqContainer}>
            {displayedFaqItems.map((faq, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${activeFaqItem === index ? styles.faqItemActive : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className={styles.faqQuestion}>
                  <h3>{faq.question}</h3>
                  <div className={styles.faqToggle}>
                    <ChevronDown size={20} />
                  </div>
                </div>
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}

            {filteredFaqItems.length > 3 && (
              <button
                className={styles.faqShowMoreButton}
                onClick={() => setShowAllFaqs(!showAllFaqs)}
              >
                {showAllFaqs ? (
                  <>
                    <span>Visa färre</span>
                    <ChevronDown size={18} style={{ transform: 'rotate(180deg)' }} />
                  </>
                ) : (
                  <>
                    <span>Visa fler ({filteredFaqItems.length - 3} till)</span>
                    <ChevronDown size={18} />
                  </>
                )}
              </button>
            )}
          </div>

          <div className={styles.faqCta}>
            <p>Hittade du inte svaret på din fråga?</p>
            <Link href="/contact" className={styles.ctaButton}>
              Kontakta oss
              <span className={styles.buttonEffect}>
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaBackground}>
              <div className={styles.gradientOverlay}></div>
              <div className={styles.patternOverlay}></div>
            </div>
            <div className={styles.ctaText}>
              <span className={styles.ctaLabel}>Upptäck möjligheterna</span>
              <h2>Ta dina kreativa samarbeten till nästa nivå</h2>
              <div className={styles.ctaFeatures}>
                <div className={styles.ctaFeature}>
                  <CreditCard size={22} />
                  <span>Säkra betalningar</span>
                </div>
                <div className={styles.ctaFeature}>
                  <Users size={22} />
                  <span>Smart matchning</span>
                </div>
                <div className={styles.ctaFeature}>
                  <MessageCircle size={22} />
                  <span>Professionell support</span>
                </div>
              </div>
              <Link href="/register" className={styles.ctaButton}>
                Kom igång gratis
                <span className={styles.buttonEffect}>
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
