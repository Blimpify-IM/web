'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Book, ArrowRight, ChevronDown, ExternalLink } from 'react-feather';

import styles from './terms.module.css';

export default function Terms() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection: string | null = null;

      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Användarvillkor</h1>
          <p>Dessa villkor utgör grunden för din användning av Blimpify's tjänster.</p>
          <p className={styles.lastUpdated}>Senast uppdaterad: 4 mars 2024</p>
        </div>
      </section>

      <div className={styles.content}>
        <div className={styles.tableOfContents}>
          <h2>Innehåll</h2>
          <ul>
            {[
              'agreement',
              'services',
              'account',
              'content',
              'payments',
              'restrictions',
              'termination',
              'liability',
              'changes',
              'contact',
            ].map((section, index) => (
              <li key={section}>
                <a href={`#${section}`} className={activeSection === section ? styles.active : ''}>
                  {`${index + 1}. ${section.charAt(0).toUpperCase() + section.slice(1)}`}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.sectionsContainer}>
          <section id="agreement" className={styles.section}>
            <h2>1. Avtalet</h2>
            <p>
              Genom att använda Blimpify's tjänster accepterar du dessa användarvillkor i sin
              helhet. Om du inte accepterar villkoren ska du inte använda våra tjänster.
            </p>
            <p>Detta avtal utgör en bindande överenskommelse mellan dig och Blimpify AB.</p>
          </section>

          <section id="services" className={styles.section}>
            <h2>2. Våra Tjänster</h2>
            <p>Blimpify erbjuder följande tjänster:</p>
            <ul>
              <li>Digital plattform för innehållshantering</li>
              <li>Analysverktyg och rapportering</li>
              <li>Samarbetsverktyg för team</li>
              <li>Automatiserade arbetsflöden</li>
              <li>API-integration och anpassade lösningar</li>
            </ul>
          </section>

          <section id="account" className={styles.section}>
            <h2>3. Ditt Konto</h2>
            <p>När du skapar ett konto hos oss:</p>
            <ul>
              <li>Måste du tillhandahålla korrekt och fullständig information</li>
              <li>Är du ansvarig för att skydda dina inloggningsuppgifter</li>
              <li>Får du inte dela ditt konto med andra</li>
              <li>Måste du meddela oss omedelbart vid obehörig användning</li>
            </ul>
          </section>

          <section id="content" className={styles.section}>
            <h2>4. Innehåll och Upphovsrätt</h2>
            <p>Allt innehåll som du laddar upp förblir din egendom, men du ger oss rätt att:</p>
            <ul>
              <li>Lagra och visa innehållet på vår plattform</li>
              <li>Använda innehållet för att förbättra våra tjänster</li>
              <li>Dela innehållet enligt dina inställningar</li>
              <li>Moderera innehåll som bryter mot våra riktlinjer</li>
            </ul>
          </section>

          <section id="payments" className={styles.section}>
            <h2>5. Betalningar och Prenumerationer</h2>
            <p>För betalda tjänster gäller följande:</p>
            <ul>
              <li>Alla priser anges inklusive moms</li>
              <li>Prenumerationer förnyas automatiskt om de inte sägs upp</li>
              <li>Återbetalning kan ske enligt vår återbetalningspolicy</li>
              <li>Vi kan ändra priser med 30 dagars varsel</li>
            </ul>
          </section>

          <section id="restrictions" className={styles.section}>
            <h2>6. Användarbegränsningar</h2>
            <p>Du får inte använda våra tjänster för att:</p>
            <ul>
              <li>Bryta mot lagar eller andras rättigheter</li>
              <li>Sprida skadlig kod eller virus</li>
              <li>Överbelasta våra system</li>
              <li>Samla in användardata utan tillstånd</li>
            </ul>
          </section>

          <section id="termination" className={styles.section}>
            <h2>7. Uppsägning</h2>
            <p>Vi kan avsluta eller begränsa din tillgång till tjänsterna om:</p>
            <ul>
              <li>Du bryter mot dessa villkor</li>
              <li>Din användning skadar andra användare</li>
              <li>Det krävs enligt lag</li>
              <li>Vi avslutar tjänsten</li>
            </ul>
          </section>

          <section id="liability" className={styles.section}>
            <h2>8. Ansvarsbegränsning</h2>
            <p>Blimpify ansvarar inte för:</p>
            <ul>
              <li>Indirekta skador eller förluster</li>
              <li>Avbrott i tjänsten</li>
              <li>Förlust av data</li>
              <li>Tredjepartstjänsters tillgänglighet</li>
            </ul>
          </section>

          <section id="changes" className={styles.section}>
            <h2>9. Ändringar i Villkoren</h2>
            <p>
              Vi kan uppdatera dessa villkor när som helst. Vid väsentliga ändringar kommer vi att:
            </p>
            <ul>
              <li>Meddela dig i förväg via e-post</li>
              <li>Publicera de nya villkoren på vår webbplats</li>
              <li>Ge dig möjlighet att granska ändringarna</li>
              <li>Be om ditt godkännande när det krävs</li>
            </ul>
          </section>

          <section id="contact" className={styles.section}>
            <h2>10. Kontakta Oss</h2>
            <p>Om du har frågor om dessa användarvillkor, vänligen kontakta oss på:</p>
            <div className={styles.contactInfo}>
              <p>
                E-post: <a href="mailto:terms@blimpify.se">terms@blimpify.se</a>
                <br />
                Adress: Blimpify AB, Storgatan 1, 123 45 Stockholm
              </p>
            </div>
          </section>
        </div>
      </div>

      <section className={styles.contactSection}>
        <h2>Har du frågor om våra villkor?</h2>
        <p>
          Vi finns här för att hjälpa dig förstå dina rättigheter och skyldigheter när du använder
          våra tjänster.
        </p>
        <a href="/contact" className={styles.contactButton}>
          Kontakta oss
          <ArrowRight size={20} />
        </a>
      </section>
    </div>
  );
}
