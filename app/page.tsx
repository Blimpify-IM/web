'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

// Funktionsdata för de roterande korten
const features = [
  { icon: '/images/icons/match.svg', title: 'Smart Matchning' },
  { icon: '/images/icons/chat.svg', title: 'Chatta' },
  { icon: '/images/icons/analytics.svg', title: 'Statistik' },
  { icon: '/images/icons/portfolio.svg', title: 'Portfolio' },
  { icon: '/images/icons/payment.svg', title: 'Betalning' },
  { icon: '/images/icons/contract.svg', title: 'Kontrakt' }
];

export default function Home() {
  const sphereRef = useRef<HTMLDivElement>(null);
  const featureCardsRef = useRef<HTMLDivElement>(null);

  // Skapa och animera partiklar i sfären
  useEffect(() => {
    if (!sphereRef.current || !featureCardsRef.current) return;

    // Skapa partiklar
    const particlesContainer = document.createElement('div');
    particlesContainer.className = styles.sphereParticles;
    
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = styles.particle;
      
      // Slumpmässig position i 3D-rymden
      const x = Math.random() * 300 - 150;
      const y = Math.random() * 300 - 150;
      const z = Math.random() * 300 - 150;
      
      // Normalisera positionen för att hålla partiklar inom sfären
      const distance = Math.sqrt(x*x + y*y + z*z);
      const radius = 140 * (0.6 + Math.random() * 0.4); // Varierande radie
      
      const nx = x / distance * radius;
      const ny = y / distance * radius;
      const nz = z / distance * radius;
      
      particle.style.transform = `translate3d(${nx}px, ${ny}px, ${nz}px)`;
      particle.style.opacity = (0.3 + Math.random() * 0.7).toString();
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      particlesContainer.appendChild(particle);
    }
    
    sphereRef.current.appendChild(particlesContainer);
    
    // Skapa ringar
    const ringsContainer = document.createElement('div');
    ringsContainer.className = styles.sphereRings;
    
    for (let i = 0; i < 3; i++) {
      const ring = document.createElement('div');
      ring.className = styles.ring;
      
      const size = 150 + i * 50;
      ring.style.width = `${size}px`;
      ring.style.height = `${size}px`;
      ring.style.left = `${(300 - size) / 2}px`;
      ring.style.top = `${(300 - size) / 2}px`;
      
      ringsContainer.appendChild(ring);
    }
    
    sphereRef.current.appendChild(ringsContainer);
    
    // Uppdatera aktivt kort baserat på position i rotationen
    const updateActiveCards = () => {
      const cards = featureCardsRef.current?.querySelectorAll(`.${styles.featureCard}`);
      if (!cards) return;
      
      cards.forEach((card, index) => {
        const angle = (index / features.length) * 360;
        const rotation = (Date.now() / 15000 * 360 + angle) % 360;
        
        // Aktivera kortet när det är i den främre 90-graders sektorn
        const isActive = rotation > 315 || rotation < 45;
        (card as HTMLElement).style.opacity = isActive ? '1' : '0.3';
      });
      
      requestAnimationFrame(updateActiveCards);
    };
    
    updateActiveCards();
    
    return () => {
      // Rensa upp vid unmount
      if (sphereRef.current) {
        const particles = sphereRef.current.querySelector(`.${styles.sphereParticles}`);
        const rings = sphereRef.current.querySelector(`.${styles.sphereRings}`);
        
        if (particles) sphereRef.current.removeChild(particles);
        if (rings) sphereRef.current.removeChild(rings);
      }
    };
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <h1>Appen för samarbeten</h1>
              <p className={styles.heroDescription}>
                Sluta slösa tid på att leta samarbeten - Vi gör det åt dig
              </p>
              <div className={styles.heroButtons}>
                <Link href="/register" className={styles.ctaButton}>
                  Kom igång nu
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className={styles.heroVisual}>
              <div ref={sphereRef} className={styles.heroSphere}>
                <div className={styles.gradientSphere}></div>
                <div className={styles.globeGrid}></div>
                <div className={styles.sphereGlow}></div>
                
                <div ref={featureCardsRef} className={styles.featureCards}>
                  {features.map((feature, index) => (
                    <div 
                      key={index} 
                      className={styles.featureCard}
                      style={{
                        animationDelay: `${(index / features.length) * -15}s`
                      }}
                    >
                      <div className={styles.featureIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {index === 0 && (
                            // Match icon
                            <>
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </>
                          )}
                          {index === 1 && (
                            // Chat icon
                            <>
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </>
                          )}
                          {index === 2 && (
                            // Analytics icon
                            <>
                              <line x1="18" y1="20" x2="18" y2="10"></line>
                              <line x1="12" y1="20" x2="12" y2="4"></line>
                              <line x1="6" y1="20" x2="6" y2="14"></line>
                            </>
                          )}
                          {index === 3 && (
                            // Portfolio icon
                            <>
                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                              <circle cx="8.5" cy="8.5" r="1.5"></circle>
                              <polyline points="21 15 16 10 5 21"></polyline>
                            </>
                          )}
                          {index === 4 && (
                            // Payment icon
                            <>
                              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                              <line x1="1" y1="10" x2="23" y2="10"></line>
                            </>
                          )}
                          {index === 5 && (
                            // Contract icon
                            <>
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                              <polyline points="14 2 14 8 20 8"></polyline>
                              <line x1="16" y1="13" x2="8" y2="13"></line>
                              <line x1="16" y1="17" x2="8" y2="17"></line>
                              <polyline points="10 9 9 9 8 9"></polyline>
                            </>
                          )}
                        </svg>
                      </div>
                      <h4>{feature.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className={styles.features}>
        <h2>Våra tjänster</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIconLarge}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3>Smart Matchning</h3>
            <p>Vår AI matchar dig med perfekta samarbetspartners baserat på dina mål och målgrupp</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIconLarge}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h3>Inbyggd Kommunikation</h3>
            <p>Kommunicera direkt i appen med potentiella samarbetspartners</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIconLarge}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
              </svg>
            </div>
            <h3>Säkra Betalningar</h3>
            <p>Hantera betalningar och fakturering direkt i plattformen</p>
          </div>
        </div>
        <div className={styles.featureLink}>
          <Link href="/features" className={styles.learnMore}>
            Utforska alla våra funktioner
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </section>
      
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Redo att börja samarbeta?</h2>
          <p>Registrera dig idag och få tillgång till tusentals potentiella samarbetspartners</p>
          <div className={styles.ctaButtons}>
            <Link href="/register" className={styles.primaryButton}>
              Skapa konto
            </Link>
            <Link href="/pricing" className={styles.secondaryButton}>
              Se priser
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 