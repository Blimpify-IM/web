'use client';

import React, { useState, useCallback } from 'react';
import { Body, VStack, Label, Card, CardContent, H3 } from '@blimpify-im/ui';
import { SideBar } from './SideBar';
import { EditorTreeMock } from './EditorTreeMock';
import { SectionPreviewMini, TREE_KEY_TO_SECTION_TYPE } from './SectionPreviewMini';
import { AddSectionButton } from './AddSectionButton';
import { EmptyCanvasPlaceholder } from './EmptyCanvasPlaceholder';
import { StructureCanvasPreview } from './StructureCanvasPreview';
import { StructureEditorSidebar, type EditValues } from './StructureEditorSidebar';
import type { SectionTypeKey } from './SectionPreviewMini';
import styles from './EditorPreviewBlock.module.css';

const DEFAULT_EDIT_VALUES: EditValues = {
  heroHeadline: 'Din rubrik här',
  heroSubtext: 'Undertext som beskriver erat erbjudande. Redigera i panelen till höger.',
  contentHeading: 'Så funkar det',
  contentBody: 'Varje sektion har inbyggd struktur. Du byter bara text och bilder – layouten håller.',
  testimonialQuote: 'Blimpify gjorde att vi kunde lansera hemsidan på en dag.',
  testimonialAuthor: '— Kund, Företag AB',
  ctaHeading: 'Redo att komma igång?',
  buttonVariant: 'accent',
  cardVariant: 'outlined',
  cardRadius: 'md',
  sectionSpacing: 'lg',
};

export interface EditorPreviewBlockProps {
  /** Om true, visa "tom dokument"-variant: sidebar med tom eller minimal lista. */
  emptyDocument?: boolean;
  /** Om true, sektioner i trädet är klickbara och canvas visar vald sektion. */
  interactive?: boolean;
  /** För Problem-sektionen och "Design utan att vara designer": canvas + höger sidebar med live-redigering. */
  variant?: 'default' | 'structure';
  /** När variant="structure": större höjd så att hela editorn får plats och är användbar. */
  large?: boolean;
  /** När variant="structure": full höjd (70–90vh) som dashboard-editorn. */
  fullHeight?: boolean;
}

export function EditorPreviewBlock({ emptyDocument, interactive = false, variant = 'default', large = false, fullHeight = false }: EditorPreviewBlockProps) {
  const [selectedKey, setSelectedKey] = useState('hero');
  const [editValues, setEditValues] = useState<EditValues>(DEFAULT_EDIT_VALUES);
  const sectionType: SectionTypeKey = TREE_KEY_TO_SECTION_TYPE[selectedKey] ?? 'Hero';
  const isStructureView = variant === 'structure';

  const handleValuesChange = useCallback((next: Partial<EditValues>) => {
    setEditValues((prev) => ({ ...prev, ...next }));
  }, []);

  const structureMinHeight = fullHeight ? '70vh' : large ? 560 : 440;
  const structureMaxHeight = fullHeight ? '90vh' : large ? 720 : 560;
  const structureHeight = fullHeight ? '80vh' : undefined;

  if (isStructureView) {
    return (
      <div
        className={`editor-preview-block editor-preview-block--structure ${styles.previewShell}`}
        style={{
          minHeight: structureMinHeight,
          maxHeight: structureMaxHeight,
          height: structureHeight,
        }}
      >
        <div className={styles.canvas}>
          <div className={styles.canvasInner}>
            <div className={styles.canvasBar}>
              <Label size="sm" color="tertiary">Förhandsgranskning</Label>
            </div>
            <StructureCanvasPreview
              heroHeadline={editValues.heroHeadline}
              heroSubtext={editValues.heroSubtext}
              contentHeading={editValues.contentHeading}
              contentBody={editValues.contentBody}
              testimonialQuote={editValues.testimonialQuote}
              testimonialAuthor={editValues.testimonialAuthor}
              ctaHeading={editValues.ctaHeading}
              buttonVariant={editValues.buttonVariant}
              cardVariant={editValues.cardVariant}
              cardRadius={editValues.cardRadius}
              sectionSpacing={editValues.sectionSpacing}
            />
          </div>
        </div>
        <SideBar
          title="Redigera"
          position="right"
          defaultWidth={320}
          minWidth={300}
          maxWidth={480}
          storageKey="editor-preview-structure"
          collapsible
          resizable
          showFooter={false}
          headerContent={
            <Body size="sm" color="secondary">
              Ändra innehåll och design nedan – förhandsgranskningen uppdateras live.
            </Body>
          }
        >
          <StructureEditorSidebar
            values={editValues}
            onValuesChange={handleValuesChange}
          />
        </SideBar>
      </div>
    );
  }

  return (
    <div
      className="editor-preview-block"
      style={{
        display: 'flex',
        width: '100%',
        maxWidth: '100%',
        minWidth: 0,
        minHeight: interactive ? 520 : 360,
        maxHeight: interactive ? 640 : 440,
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        background: 'var(--surface-ground)',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-default)',
      }}
    >
      <SideBar
        title="Sidor"
        position="left"
        defaultWidth={emptyDocument ? 240 : 260}
        minWidth={emptyDocument ? 200 : 200}
        maxWidth={emptyDocument ? 320 : 340}
        storageKey={emptyDocument ? undefined : 'editor-preview-interactive'}
        collapsible
        resizable
        showFooter={false}
      >
        {emptyDocument ? (
          <VStack spacing="sm" style={{ padding: 'var(--foundation-space-4)', flex: 1, minHeight: 0 }}>
            <div style={{ flex: 1, minHeight: 0 }}>
              <Body size="sm" color="tertiary">
                Tom sida – inga sektioner ännu.
              </Body>
            </div>
            <AddSectionButton />
          </VStack>
        ) : (
          <EditorTreeMock
            selectedKey={selectedKey}
            onSectionClick={interactive ? setSelectedKey : undefined}
            interactive={interactive}
          />
        )}
      </SideBar>
      <div
        className="editor-preview-block__canvas"
        style={{
          flex: 1,
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--surface-page)',
          borderLeft: '1px solid var(--border-default)',
          overflow: 'auto',
        }}
      >
        {emptyDocument ? (
          <EmptyCanvasPlaceholder />
        ) : interactive ? (
          <VStack spacing="md" style={{ flex: 1, padding: 'var(--foundation-space-4)' }}>
            <Label size="sm" color="secondary">
              Klicka på en sektion till vänster – du redigerar: {sectionType}
            </Label>
            <div style={{ flex: 1, minHeight: 120, display: 'flex', alignItems: 'flex-start' }}>
              <SectionPreviewMini type={sectionType} compact={false} />
            </div>
          </VStack>
        ) : (
          <VStack spacing="sm" style={{ padding: 'var(--foundation-space-4)' }}>
            <SectionPreviewMini type="Hero" compact={false} />
            <SectionPreviewMini type="Content" compact={false} />
            <SectionPreviewMini type="CTA" compact={false} />
          </VStack>
        )}
      </div>
    </div>
  );
}
