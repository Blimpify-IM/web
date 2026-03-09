'use client';

import {
  Section,
  Container,
  VStack,
  H2,
  Body,
  FadeIn,
} from '@blimpify-im/ui';
import { StructureFromStart } from '@/components/editor-preview/StructureFromStart';
import styles from './EditorProblem.module.css';

export function EditorProblem() {
  return (
    <Section
      style={{
        background: 'var(--surface-ground)',
      }}
    >
      <Container>
        <div className={styles.editorProblemGrid}>
          <FadeIn direction="up" duration={600}>
            <VStack spacing="lg" align="start" style={{ minWidth: 0 }}>
              <H2 weight="bold">
                De flesta builders börjar från ett tomt dokument
              </H2>
              <Body size="md" color="secondary">
                I typiska byggverktyg måste du själv tänka på layout, spacing,
                typografi och struktur. Du drar komponenter, justerar kolumner
                och hoppas att det ser bra ut. Det är därför så många hemsidor
                slutar med obalanserad design – det krävs både tid och känsla
                för att få det rätt från en tom sida.
              </Body>
              <Body size="sm" color="tertiary">
                Hos oss börjar du med struktur – sektioner och förhandsgranskning redan på plats.
              </Body>
            </VStack>
          </FadeIn>
          <FadeIn direction="up" duration={600} delay={100}>
            <div className={styles.teaserWrap} style={{ minWidth: 0 }}>
              <StructureFromStart />
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
