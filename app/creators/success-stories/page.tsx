import React from 'react'
import styles from './success-stories.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function SuccessStories() {
  return (
    <div className={styles.creatorsContainer}>
      {/* Hero Section */}
      <section className={styles.creatorsHero}>
        <div className={styles.heroContent}>
          <h1>Framgångsberättelser</h1>
          <p>Upptäck hur kreatörer som du har ökat sina intäkter, byggt sitt varumärke och nått nya höjder med Blimpify. Låt dig inspireras av deras resor och framgångar.</p>
        </div>
      </section>

      {/* Featured Story */}
      <section className={styles.featuredStory}>
        <div className={styles.featuredImage}>
          <div className={styles.imagePlaceholder}>
            <i className="fas fa-user"></i>
          </div>
          {/* När vi har riktiga bilder kan vi använda Image-komponenten istället */}
          {/* <Image 
            src="/images/creators/featured-creator.jpg" 
            alt="Emma Johansson" 
            width={600} 
            height={400} 
            className={styles.storyImage} 
          /> */}
        </div>
        <div className={styles.featuredContent}>
          <span className={styles.category}>Fotografi</span>
          <h2>Emma Johansson ökade sina intäkter med 300% på bara 6 månader</h2>
          <p className={styles.quote}>"Blimpify förändrade mitt sätt att arbeta med varumärken. Jag gick från att kämpa för att hitta uppdrag till att kunna välja de samarbeten som verkligen passar min stil och mina värderingar."</p>
          <p>Emma, en Stockholm-baserad fotograf, anslöt sig till Blimpify för att hitta nya samarbetsmöjligheter. Inom 6 månader hade hon tredubblat sina intäkter och byggt långsiktiga relationer med flera stora varumärken.</p>
          <Link href="#" className={styles.readMoreLink}>Läs hela berättelsen <i className="fas fa-arrow-right"></i></Link>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className={styles.storiesGrid}>
        <div className={styles.storyCard}>
          <div className={styles.cardImage}>
            <div className={styles.imagePlaceholder}>
              <i className="fas fa-user"></i>
            </div>
          </div>
          <div className={styles.cardContent}>
            <span className={styles.category}>Matblogg</span>
            <h3>Anders Nilsson</h3>
            <p>"Tack vare Blimpify har jag kunnat göra min passion till ett heltidsjobb. Plattformen har gett mig tillgång till varumärken jag bara kunde drömma om tidigare."</p>
            <Link href="#" className={styles.readMoreLink}>Läs mer <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>

        <div className={styles.storyCard}>
          <div className={styles.cardImage}>
            <div className={styles.imagePlaceholder}>
              <i className="fas fa-user"></i>
            </div>
          </div>
          <div className={styles.cardContent}>
            <span className={styles.category}>Fitness</span>
            <h3>Sofia Bergström</h3>
            <p>"Blimpify har hjälpt mig att nå ut till en bredare publik och bygga mitt personliga varumärke. Nu får jag jobba med produkter jag verkligen tror på."</p>
            <Link href="#" className={styles.readMoreLink}>Läs mer <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>

        <div className={styles.storyCard}>
          <div className={styles.cardImage}>
            <div className={styles.imagePlaceholder}>
              <i className="fas fa-user"></i>
            </div>
          </div>
          <div className={styles.cardContent}>
            <span className={styles.category}>Mode</span>
            <h3>Lina Karlsson</h3>
            <p>"Som ny inom influencer-branschen var det svårt att veta hur jag skulle prissätta mig själv. Blimpify gav mig verktygen och stödet jag behövde för att lyckas."</p>
            <Link href="#" className={styles.readMoreLink}>Läs mer <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>

        <div className={styles.storyCard}>
          <div className={styles.cardImage}>
            <div className={styles.imagePlaceholder}>
              <i className="fas fa-user"></i>
            </div>
          </div>
          <div className={styles.cardContent}>
            <span className={styles.category}>Tech</span>
            <h3>Mikael Svensson</h3>
            <p>"Jag har kunnat fokusera mer på att skapa kvalitetsinnehåll istället för att jaga samarbeten. Blimpify har automatiserat den delen för mig."</p>
            <Link href="#" className={styles.readMoreLink}>Läs mer <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <h2>Vad våra kreatörer säger</h2>
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <p>"Blimpify har revolutionerat mitt sätt att arbeta med varumärken. Plattformen är intuitiv, supportteamet är fantastiskt, och betalningarna kommer alltid i tid."</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>
                  <i className="fas fa-user-circle"></i>
                </div>
                <div>
                  <h4>Johan Lindberg</h4>
                  <span>Resebloggare</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <p>"Det bästa med Blimpify är att de matchar mig med varumärken som verkligen passar min nisch och mina värderingar. Det sparar tid och ger bättre resultat."</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>
                  <i className="fas fa-user-circle"></i>
                </div>
                <div>
                  <h4>Maria Eriksson</h4>
                  <span>Livsstilsinfluencer</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <p>"Som småbarnsförälder är tid en bristvara. Blimpify har gjort det möjligt för mig att balansera familjeliv med en framgångsrik karriär som innehållsskapare."</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>
                  <i className="fas fa-user-circle"></i>
                </div>
                <div>
                  <h4>Peter Holm</h4>
                  <span>Föräldrabloggare</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Redo att skriva din egen framgångsberättelse?</h2>
        <p>Anslut dig till tusentals kreatörer som redan har ökat sina intäkter och byggt sitt varumärke med Blimpify.</p>
        <div className={styles.ctaButtons}>
          <Link href="/register" className={styles.primaryButton}>Kom igång nu</Link>
          <Link href="/creators/how-it-works" className={styles.secondaryButton}>Läs mer om hur det fungerar</Link>
        </div>
      </section>
    </div>
  )
} 