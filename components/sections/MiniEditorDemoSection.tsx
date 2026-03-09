'use client';

import React, { useState } from 'react';
import {
  Section,
  Container,
  VStack,
  H2,
  Body,
  Button,
  Card,
  CardContent,
  FadeIn,
} from '@blimpify-im/ui';
import { getSignupUrl } from '@/lib/dashboard-url';
import styles from './MiniEditorDemoSection.module.css';

const SIGNUP_URL = getSignupUrl();

type ToneKey = 'pure' | 'graphite' | 'mono' | 'charcoal';
type BackgroundKey = 'gradient' | 'soft-image' | 'dark-gradient';

const ACCENT_SWATCHES = [
  { value: 'blue', hex: '#2563eb' },
  { value: 'emerald', hex: '#059669' },
  { value: 'violet', hex: '#7c3aed' },
  { value: 'orange', hex: '#ea580c' },
  { value: 'rose', hex: '#e11d48' },
  { value: 'teal', hex: '#0d9488' },
] as const;

const TONE_OPTIONS: { value: ToneKey; label: string }[] = [
  { value: 'pure', label: 'Pure' },
  { value: 'graphite', label: 'Graphite' },
  { value: 'mono', label: 'Mono' },
  { value: 'charcoal', label: 'Charcoal' },
];

const BACKGROUND_OPTIONS: { value: BackgroundKey; label: string }[] = [
  { value: 'gradient', label: 'Gradient' },
  { value: 'soft-image', label: 'Soft image' },
  { value: 'dark-gradient', label: 'Dark gradient' },
];

const DEFAULT_TITLE = 'Välkommen till Vårt Företag';
const DEFAULT_BODY =
  'Vi erbjuder högkvalitativa tjänster och lösningar som hjälper ditt företag att växa.';

export function MiniEditorDemoSection() {
  const [title, setTitle] = useState(DEFAULT_TITLE);
  const [body, setBody] = useState(DEFAULT_BODY);
  const [accentColor, setAccentColor] = useState<(typeof ACCENT_SWATCHES)[number]>(ACCENT_SWATCHES[0]);
  const [tone, setTone] = useState<ToneKey>('mono');
  const [background, setBackground] = useState<BackgroundKey>('gradient');

  const heroBgStyle = (() => {
    if (background === 'gradient') {
      return { background: 'linear-gradient(135deg, var(--mini-hero-bg-start) 0%, var(--mini-hero-bg-end) 100%)' };
    }
    if (background === 'soft-image') {
      return {
        background:
          'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(248,250,252,0.95) 100%), url("https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80") center/cover',
      };
    }
    return {
      background: 'linear-gradient(160deg, #1e293b 0%, #0f172a 50%, #020617 100%)',
    };
  })();

  return (
    <Section id="mini-editor-demo" style={{ background: 'var(--surface-page)' }}>
      <Container>
        <VStack spacing="3xl">
          <FadeIn direction="up" duration={600}>
            <VStack spacing="md" align="center">
              <H2 weight="bold" align="center">
                Design utan att vara designer
              </H2>
              <Body size="sm" color="secondary" align="center">
                Redigera innehållet i panelen till höger – förhandsgranskningen uppdateras direkt.
              </Body>
            </VStack>
          </FadeIn>

          <FadeIn direction="up" duration={600} delay={100}>
            <div className={styles.demoShell}>
              {/* LEFT PANEL - Structure (som dashboard ContentTree) */}
              <aside className={styles.leftPanel} aria-label="Sidor">
                <div className={styles.panelHeader}>
                  <h2 className={styles.panelTitle}>Sidor</h2>
                </div>
                <div className={styles.leftPanelInner}>
                  <nav className={styles.structureList} role="tree">
                    <div className={styles.structureItem}>Navbar</div>
                    <div className={styles.structureBranch}>
                      <div className={`${styles.structureItem} ${styles.structureItemActive}`}>
                        Hero
                      </div>
                      <div className={styles.structureChildren}>
                        <div className={styles.structureItemChild}>Rubrik</div>
                        <div className={styles.structureItemChild}>Undertext</div>
                      </div>
                    </div>
                  </nav>
                </div>
              </aside>

              {/* CENTER - Live preview */}
              <div className={styles.centerPanel}>
                <div
                  className={styles.heroPreview}
                  data-tone={tone}
                  data-background={background}
                  style={heroBgStyle}
                >
                  <header className={styles.heroNav}>
                    <span className={styles.heroLogo}>DITT FÖRETAG</span>
                    <div className={styles.heroNavLinks}>
                      <a href="#demo" className={styles.heroNavLink}>
                        Tjänster
                      </a>
                      <a href="#demo" className={styles.heroNavLink}>
                        Priser
                      </a>
                      <a href="#demo" className={styles.heroNavLink}>
                        Faq
                      </a>
                    </div>
                    <Button
                      variant="accent"
                      size="sm"
                      className={styles.heroNavCta}
                      style={
                        tone === 'charcoal'
                          ? undefined
                          : {
                              backgroundColor: accentColor.hex,
                              borderColor: accentColor.hex,
                            }
                      }
                    >
                      Kontakta mig
                    </Button>
                  </header>
                  <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>{title}</h1>
                    <p className={styles.heroBody}>{body}</p>
                    <Button
                      variant="accent"
                      size="md"
                      style={{
                        backgroundColor: accentColor.hex,
                        borderColor: accentColor.hex,
                      }}
                      className={styles.heroCta}
                    >
                      Kom igång
                    </Button>
                  </div>
                </div>
              </div>

              {/* RIGHT PANEL - Controls (som dashboard SectionEditor) */}
              <aside className={styles.rightPanel} aria-label="Hero-inställningar">
                <div className={styles.rightPanelHeader}>
                  <h2 className={styles.rightPanelTitle}>Hero</h2>
                </div>
                <div className={styles.rightPanelInner}>
                  <div className={styles.controls}>
                    <div className={styles.group}>
                      <div className={styles.groupTitle}>Card</div>
                      <label className={styles.field}>
                        <span className={styles.fieldLabel}>Rubrik</span>
                        <input
                          type="text"
                          className={styles.input}
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder={DEFAULT_TITLE}
                        />
                      </label>
                      <label className={styles.field}>
                        <span className={styles.fieldLabel}>Undertext</span>
                        <textarea
                          className={styles.textarea}
                          value={body}
                          onChange={(e) => setBody(e.target.value)}
                          placeholder={DEFAULT_BODY}
                          rows={3}
                        />
                      </label>
                    </div>
                    <div className={styles.group}>
                      <div className={styles.groupTitle}>Theme</div>
                      <div className={styles.field}>
                        <span className={styles.fieldLabel}>Accentfärg</span>
                        <div className={styles.swatchGrid}>
                          {ACCENT_SWATCHES.map((s) => (
                            <button
                              key={s.value}
                              type="button"
                              className={`${styles.swatch} ${accentColor.value === s.value ? styles.swatchActive : ''}`}
                              style={{ backgroundColor: s.hex }}
                              aria-label={s.value}
                              onClick={() => setAccentColor(s)}
                            />
                          ))}
                        </div>
                      </div>
                      <div className={styles.field}>
                        <span className={styles.fieldLabel}>Ton</span>
                        <div className={styles.buttonRow}>
                          {TONE_OPTIONS.map((t) => (
                            <Button
                              key={t.value}
                              variant={tone === t.value ? 'primary' : 'secondary'}
                              size="sm"
                              onClick={() => setTone(t.value)}
                            >
                              {t.label}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={styles.group}>
                      <div className={styles.groupTitle}>Background</div>
                      <div className={styles.field}>
                        <div className={styles.buttonRow}>
                          {BACKGROUND_OPTIONS.map((b) => (
                            <Button
                              key={b.value}
                              variant={background === b.value ? 'primary' : 'secondary'}
                              size="sm"
                              onClick={() => setBackground(b.value)}
                            >
                              {b.label}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </FadeIn>

          {/* CTA below demo */}
          <FadeIn direction="up" duration={500} delay={200}>
            <Card variant="outlined" padding="lg" radius="lg" className={styles.ctaCard}>
              <CardContent>
                <VStack spacing="md" align="center">
                  <H2 weight="bold" align="center">
                    Redo att bygga din egen sida?
                  </H2>
                  <Button variant="accent" size="lg" href={SIGNUP_URL} target="_blank">
                    Kom igång gratis
                  </Button>
                </VStack>
              </CardContent>
            </Card>
          </FadeIn>
        </VStack>
      </Container>
    </Section>
  );
}
