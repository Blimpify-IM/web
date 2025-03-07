'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Settings, ArrowRight, ChevronDown, ExternalLink } from 'react-feather';

import styles from './privacy.module.css';

export default function Privacy() {
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
          <h1>Integritetspolicy</h1>
          <p>Denna policy beskriver hur vi samlar in, använder och skyddar dina personuppgifter.</p>
          <p className={styles.lastUpdated}>Senast uppdaterad: 4 mars 2024</p>
        </div>
      </section>

      <div className={styles.content}>
        <div className={styles.tableOfContents}>
          <h2>Innehåll</h2>
          <ul>
            {[
              'introduction',
              'information',
              'usage',
              'sharing',
              'rights',
              'cookies',
              'security',
              'children',
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
          <section id="introduction" className={styles.section}>
            <h2>1. Inledning</h2>
            <p>
              Välkommen till Blimpify's integritetspolicy. Din integritet är viktig för oss. Denna
              policy beskriver vilken information vi samlar in, hur vi använder den och vilka
              rättigheter du har gällande dina personuppgifter.
            </p>
            <p>
              Genom att använda vår webbplats och våra tjänster godkänner du insamlingen och
              användningen av information i enlighet med denna policy.
            </p>
          </section>

          <section id="information" className={styles.section}>
            <h2>2. Information vi samlar in</h2>
            <p>Vi kan samla in följande typer av information:</p>
            <ul>
              <li>
                Personuppgifter som namn, e-postadress och telefonnummer när du registrerar dig
                eller kontaktar oss
              </li>
              <li>Användningsinformation om hur du interagerar med vår webbplats</li>
              <li>Enhetsinformation som IP-adress, webbläsartyp och operativsystem</li>
              <li>
                Betalningsinformation när du genomför transaktioner (notera att vi inte lagrar
                fullständiga kreditkortsuppgifter)
              </li>
              <li>Kommunikation mellan dig och andra användare på plattformen</li>
            </ul>
          </section>

          <section id="usage" className={styles.section}>
            <h2>3. Hur vi använder din information</h2>
            <p>Vi använder den insamlade informationen för att:</p>
            <ul>
              <li>Tillhandahålla och förbättra våra tjänster</li>
              <li>Kommunicera med dig om uppdateringar och erbjudanden</li>
              <li>Analysera användningsmönster för att förbättra användarupplevelsen</li>
              <li>Förhindra bedrägerier och säkerställa säkerheten på vår plattform</li>
              <li>Anpassa innehåll och rekommendationer baserat på dina preferenser</li>
              <li>Uppfylla våra juridiska skyldigheter</li>
            </ul>
          </section>

          <section id="sharing" className={styles.section}>
            <h2>4. Delning av information</h2>
            <p>Vi delar inte dina personuppgifter med tredje part utan ditt samtycke, förutom:</p>
            <ul>
              <li>Med tjänsteleverantörer som hjälper oss att driva vår verksamhet</li>
              <li>När det krävs enligt lag eller för att skydda våra rättigheter</li>
              <li>
                Med affärspartners som erbjuder tjänster tillsammans med oss (endast med ditt
                samtycke)
              </li>
              <li>I händelse av en fusion, försäljning eller omorganisation av vår verksamhet</li>
            </ul>
          </section>

          <section id="rights" className={styles.section}>
            <h2>5. Dina rättigheter</h2>
            <p>Som användare har du flera rättigheter gällande dina personuppgifter:</p>
            <ul>
              <li>Rätt till tillgång - Du kan begära en kopia av dina personuppgifter</li>
              <li>Rätt till rättelse - Du kan begära att vi korrigerar felaktiga uppgifter</li>
              <li>
                Rätt till radering - Du kan begära att vi raderar dina uppgifter under vissa
                omständigheter
              </li>
              <li>Rätt att invända - Du kan invända mot behandling av dina uppgifter</li>
              <li>
                Rätt till begränsning - Du kan begära att vi begränsar behandlingen av dina
                uppgifter
              </li>
              <li>
                Rätt till dataportabilitet - Du kan begära att få dina uppgifter överförda till en
                annan tjänst
              </li>
            </ul>
            <p>
              För att utöva dessa rättigheter, vänligen kontakta oss via uppgifterna i slutet av
              denna policy.
            </p>
          </section>

          <section id="cookies" className={styles.section}>
            <h2>6. Cookies och spårningstekniker</h2>
            <p>
              Vi använder cookies och liknande tekniker för att förbättra din upplevelse på vår
              webbplats. Cookies är små textfiler som lagras på din enhet när du besöker vår
              webbplats.
            </p>
            <p>
              Vi använder både nödvändiga cookies som krävs för webbplatsens funktion och valfria
              cookies för analys och marknadsföring. Du kan hantera dina cookie-inställningar genom
              att besöka vår
              <a href="/cookies" className={styles.inlineLink}>
                cookie-policy <ArrowRight size={16} />
              </a>
            </p>
          </section>

          <section id="security" className={styles.section}>
            <h2>7. Säkerhet</h2>
            <p>
              Vi tar säkerheten för dina personuppgifter på allvar och implementerar lämpliga
              tekniska och organisatoriska åtgärder för att skydda dina uppgifter mot obehörig
              åtkomst, förlust eller skada.
            </p>
            <p>
              Dessa åtgärder inkluderar kryptering, säkra servrar, regelbundna säkerhetsgranskningar
              och strikt kontroll av åtkomst till personuppgifter.
            </p>
          </section>

          <section id="children" className={styles.section}>
            <h2>8. Barn och integritet</h2>
            <p>
              Våra tjänster är inte avsedda för barn under 16 år, och vi samlar inte medvetet in
              personuppgifter från barn under denna ålder. Om du tror att vi har samlat in
              information från ett barn under 16 år, vänligen kontakta oss så att vi kan vidta
              lämpliga åtgärder.
            </p>
          </section>

          <section id="changes" className={styles.section}>
            <h2>9. Uppdateringar av policyn</h2>
            <p>
              Vi kan uppdatera denna policy från tid till annan för att återspegla ändringar i vår
              verksamhet eller juridiska krav. Vi kommer att meddela dig om väsentliga ändringar
              genom att publicera den nya policyn på vår webbplats och, om det är lämpligt, via
              e-post.
            </p>
            <p>
              Vi uppmuntrar dig att regelbundet granska denna policy för att hålla dig informerad om
              hur vi skyddar dina personuppgifter.
            </p>
          </section>

          <section id="contact" className={styles.section}>
            <h2>10. Kontakta oss</h2>
            <p>
              Om du har frågor om vår integritetspolicy eller hur vi hanterar dina uppgifter,
              vänligen kontakta oss på:
            </p>
            <div className={styles.contactInfo}>
              <p>
                E-post: <a href="mailto:privacy@blimpify.se">privacy@blimpify.se</a>
                <br />
                Adress: Blimpify AB, Storgatan 1, 123 45 Stockholm
              </p>
            </div>
          </section>
        </div>
      </div>

      <section className={styles.contactSection}>
        <h2>Har du frågor om din integritet?</h2>
        <p>
          Vi värnar om din integritet och är alltid redo att hjälpa dig med frågor om hur dina
          personuppgifter hanteras.
        </p>
        <a href="/contact" className={styles.contactButton}>
          Kontakta oss
          <ArrowRight size={20} />
        </a>
      </section>
    </div>
  );
}
