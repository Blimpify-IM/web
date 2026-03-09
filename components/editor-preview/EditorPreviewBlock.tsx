'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Body, VStack, Label, H3, IconButton, Icon, SegmentedControl } from '@blimpify-im/ui';
import { Palette } from 'lucide-react';
import { SideBar } from './SideBar';
import { EditorTreeMock } from './EditorTreeMock';
import { SectionPreviewMini, TREE_KEY_TO_SECTION_TYPE } from './SectionPreviewMini';
import { EmptyCanvasPlaceholder } from './EmptyCanvasPlaceholder';
import { StructurePreviewIframe } from './StructurePreviewIframe';
import { StructureEditorSidebar, type EditValues } from './StructureEditorSidebar';
import { DesignPanelPreview, DESIGN_TAB_OPTIONS, type DesignPanelTab } from './DesignPanelPreview';
import type { SectionTypeKey } from './SectionPreviewMini';
import type { DesignPanelValues } from './DesignPanelPreview';
import type { PreviewSectionKey } from './StructureCanvasPreview';
import {
  TEMPLATE_26FEB20_SECTION_ORDER,
  TEMPLATE_26FEB20_LABELS,
  TEMPLATE_26FEB20_EDIT_VALUES,
  TEMPLATE_26FEB20_DESIGN_VALUES,
} from '@/lib/template-26feb20';

/** Underordnade komponenter per sektion för trädet (template-26feb20). */
const SECTION_CHILDREN: Record<string, { key: string; label: string }[]> = {
  hero: [
    { key: 'hero-headline', label: 'Rubrik' },
    { key: 'hero-subtext', label: 'Undertext' },
  ],
};
import styles from './EditorPreviewBlock.module.css';

const SECTION_LABELS: Record<PreviewSectionKey, string> = {
  ...TEMPLATE_26FEB20_LABELS,
  services: 'Tjänster',
  pricing: 'Priser',
  results: 'Resultat',
  stats: 'Statistik',
  testimonials: 'Omdömen',
  faq: 'FAQ',
  contact: 'Kontakt',
};

/** Nycklar för att spara utkast – använd samma vid "Skapa konto" för att föra över projekt. */
export const STORAGE_KEY_DESIGN = 'blimpify-website-editor-design';
export const STORAGE_KEY_EDIT = 'blimpify-website-editor-edit';

/** I struktureditorn används hårdkodad template-26feb20. */
const DEFAULT_DESIGN_VALUES: DesignPanelValues = TEMPLATE_26FEB20_DESIGN_VALUES;

/** I struktureditorn används hårdkodad template-26feb20 (TEMPLATE_26FEB20_EDIT_VALUES / TEMPLATE_26FEB20_DESIGN_VALUES). */
const DEFAULT_EDIT_VALUES: EditValues = TEMPLATE_26FEB20_EDIT_VALUES;

function loadStoredDesign(): DesignPanelValues {
  try {
    const s = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY_DESIGN) : null;
    if (s) {
      const parsed = JSON.parse(s) as Partial<DesignPanelValues>;
      return { ...DEFAULT_DESIGN_VALUES, ...parsed };
    }
  } catch (_) {}
  return DEFAULT_DESIGN_VALUES;
}

function loadStoredEdit(): EditValues {
  try {
    const s = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY_EDIT) : null;
    if (s) {
      const parsed = JSON.parse(s) as Partial<EditValues>;
      return { ...DEFAULT_EDIT_VALUES, ...parsed };
    }
  } catch (_) {}
  return DEFAULT_EDIT_VALUES;
}

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
  const [editValues, setEditValues] = useState<EditValues>(loadStoredEdit);
  const [designValues, setDesignValues] = useState<DesignPanelValues>(loadStoredDesign);
  const [selectedSectionKey, setSelectedSectionKey] = useState<PreviewSectionKey | null>(null);
  const hasHydratedRef = useRef(false);
  /** När satt = klick på text → sidopanel visar endast det fältet. Null = klick på sektion → endast sektionsval. */
  const [selectedComponentKey, setSelectedComponentKey] = useState<string | null>(null);
  const [focusedFieldKey, setFocusedFieldKey] = useState<string | null>(null);
  const [designTab, setDesignTab] = useState<DesignPanelTab>('theme');
  const [expandedTreeNodes, setExpandedTreeNodes] = useState<Set<string>>(new Set(['hero']));
  const canvasAreaRef = useRef<HTMLDivElement>(null);
  const leftSidebarRef = useRef<HTMLDivElement>(null);
  const rightSidebarRef = useRef<HTMLDivElement>(null);
  const editorWrapperRef = useRef<HTMLDivElement>(null);
  const sectionType: SectionTypeKey = TREE_KEY_TO_SECTION_TYPE[selectedKey] ?? 'Hero';
  const isStructureView = variant === 'structure';

  /** Klick utanför hela editor-fönstret → avmarkera och visa designpanelen. */
  useEffect(() => {
    if (!isStructureView) return;
    const handleDocClick = (e: MouseEvent) => {
      if (selectedSectionKey == null) return;
      const target = e.target as Node;
      if (editorWrapperRef.current?.contains(target)) return;
      setSelectedSectionKey(null);
      setSelectedComponentKey(null);
      setFocusedFieldKey(null);
    };
    document.addEventListener('click', handleDocClick, true);
    return () => document.removeEventListener('click', handleDocClick, true);
  }, [isStructureView, selectedSectionKey]);

  /** Klick utanför canvas och utanför båda sidopanelerna → avmarkera. Klick i sidopanelen (även om man missar en knapp) avmarkerar inte. */
  const handleShellClick = useCallback(
    (e: React.MouseEvent) => {
      if (selectedSectionKey == null) return;
      if (canvasAreaRef.current?.contains(e.target as Node)) return;
      if (leftSidebarRef.current?.contains(e.target as Node)) return;
      if (rightSidebarRef.current?.contains(e.target as Node)) return;
      setSelectedSectionKey(null);
      setSelectedComponentKey(null);
      setFocusedFieldKey(null);
    },
    [selectedSectionKey]
  );

  /** Klick i canvas: med componentKey = text-läge (enda textfält), utan = sektionsläge (enda designval). */
  const handleCanvasClick = useCallback((payload: { sectionKey: PreviewSectionKey; componentKey?: string }) => {
    setSelectedSectionKey(payload.sectionKey);
    setSelectedComponentKey(payload.componentKey ?? null);
    if (payload.componentKey) {
      const camel = payload.componentKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      setFocusedFieldKey(camel);
    } else {
      setFocusedFieldKey(null);
    }
  }, []);

  /** Klick på sektion i trädet = sektionsläge (inga textfält). */
  const handleTreeSectionClick = useCallback((key: PreviewSectionKey) => {
    setSelectedSectionKey(key);
    setSelectedComponentKey(null);
    setFocusedFieldKey(null);
  }, []);

  /** Klick på underordnad komponent i trädet (t.ex. Rubrik) = välj sektion + komponent. */
  const handleTreeComponentClick = useCallback((sectionKey: string, componentKey: string) => {
    setSelectedSectionKey(sectionKey as PreviewSectionKey);
    setSelectedComponentKey(componentKey);
    const camel = componentKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    setFocusedFieldKey(camel);
  }, []);

  /** Dubbelklick på text: fokusera fältet när redan i text-läge. */
  const handleInlineEditRequest = useCallback((payload: { sectionKey: PreviewSectionKey; componentKey: string }) => {
    setSelectedSectionKey(payload.sectionKey);
    setSelectedComponentKey(payload.componentKey);
    const camel = payload.componentKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    setFocusedFieldKey(camel);
  }, []);

  /** Spara inline-redigering från canvas till editValues. */
  const handleInlineEditCommit = useCallback((payload: { sectionKey: PreviewSectionKey; componentKey: string; value: string }) => {
    const fieldKey = payload.componentKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase()) as keyof EditValues;
    setEditValues((prev) => ({ ...prev, [fieldKey]: payload.value }));
  }, []);

  const handleValuesChange = useCallback((next: Partial<EditValues>) => {
    setEditValues((prev) => ({ ...prev, ...next }));
  }, []);

  const mapRadiusToCardRadius = (r: DesignPanelValues['radius']): EditValues['cardRadius'] => {
    if (r === 'none' || r === 'xs' || r === 'sm') return 'sm';
    if (r === 'md' || r === 'lg') return 'md';
    return 'lg'; // xl, 2xl, full
  };
  const mapSpacingToSection = (s: DesignPanelValues['sectionSpacing']): EditValues['sectionSpacing'] => {
    if (s === 'xs' || s === 'sm') return 'sm';
    if (s === 'md' || s === 'lg') return 'md';
    return 'lg';
  };
  const handleDesignPanelChange = useCallback((next: Partial<DesignPanelValues>) => {
    setDesignValues((prev) => ({ ...prev, ...next }));
    setEditValues((prev) => ({
      ...prev,
      ...(next.sectionSpacing !== undefined && { sectionSpacing: mapSpacingToSection(next.sectionSpacing) }),
      ...(next.radius !== undefined && { cardRadius: mapRadiusToCardRadius(next.radius) }),
    }));
  }, []);

  const effectiveTheme = designValues.themeMode === 'system' ? 'light' : designValues.themeMode;

  /** Persist design + edit till localStorage. Vid "Skapa konto" kan man läsa STORAGE_KEY_DESIGN / STORAGE_KEY_EDIT och skicka med så projektet redan är igång. */
  useEffect(() => {
    if (!hasHydratedRef.current) {
      hasHydratedRef.current = true;
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY_DESIGN, JSON.stringify(designValues));
    } catch (_) {}
  }, [designValues]);
  useEffect(() => {
    if (!hasHydratedRef.current) return;
    try {
      localStorage.setItem(STORAGE_KEY_EDIT, JSON.stringify(editValues));
    } catch (_) {}
  }, [editValues]);

  const goBackToDesign = useCallback(() => {
    setSelectedSectionKey(null);
    setSelectedComponentKey(null);
    setFocusedFieldKey(null);
  }, []);

  const structureMinHeight = fullHeight ? '70vh' : large ? 560 : 440;
  const structureMaxHeight = fullHeight ? '90vh' : large ? 720 : 560;
  const structureHeight = fullHeight ? '80vh' : undefined;

  if (isStructureView) {
    return (
      <div
        ref={editorWrapperRef}
        className={`editor-preview-block editor-preview-block--structure ${styles.previewShell}`}
        style={{
          minHeight: structureMinHeight,
          maxHeight: structureMaxHeight,
          height: structureHeight,
        }}
        onClick={handleShellClick}
        role="presentation"
      >
        <div ref={leftSidebarRef} style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <SideBar
            title="Sidor"
            position="left"
          defaultWidth={240}
          minWidth={200}
          maxWidth={320}
          storageKey="editor-preview-structure-left"
          collapsible
          resizable
          showFooter={false}
        >
          <VStack spacing="xs" style={{ padding: 'var(--foundation-space-2)', flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, minHeight: 0, overflow: 'auto', width: '100%', display: 'flex', flexDirection: 'column' }}>
              <EditorTreeMock
                selectedSectionKey={selectedSectionKey ?? selectedKey}
                selectedComponentKey={selectedComponentKey}
                onSectionClick={(key) => {
                  setSelectedKey(key);
                  handleTreeSectionClick(key as PreviewSectionKey);
                }}
                onComponentClick={handleTreeComponentClick}
                interactive
                sectionOrder={TEMPLATE_26FEB20_SECTION_ORDER}
                sectionLabels={TEMPLATE_26FEB20_LABELS}
                sectionChildren={SECTION_CHILDREN}
                expandedNodes={expandedTreeNodes}
                onExpandedNodesChange={setExpandedTreeNodes}
              />
            </div>
          </VStack>
        </SideBar>
        </div>
        <div
          ref={canvasAreaRef}
          style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
        >
          <StructurePreviewIframe
            designValues={designValues}
            editValues={editValues}
            radiusForTokens={designValues.radius}
            selectedSectionKey={selectedSectionKey}
            selectedComponentKey={selectedComponentKey}
            onCanvasClick={handleCanvasClick}
            onInlineEditRequest={handleInlineEditRequest}
            onInlineEditCommit={handleInlineEditCommit}
          />
        </div>
        <div ref={rightSidebarRef} style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <SideBar
            title={selectedSectionKey ? SECTION_LABELS[selectedSectionKey] : ''}
            position="right"
            defaultWidth={320}
            minWidth={300}
            maxWidth={480}
            storageKey="editor-preview-structure"
            collapsible
            resizable
            showFooter={false}
            leadingAction={undefined}
            titleRowContent={!selectedSectionKey ? (
              <SegmentedControl
                iconOnly
                options={DESIGN_TAB_OPTIONS}
                value={designTab}
                onChange={(v) => setDesignTab(v as DesignPanelTab)}
                fullWidth
              />
            ) : undefined}
            trailingAction={selectedSectionKey ? (
              <IconButton
                icon={<Icon size="sm"><Palette /></Icon>}
                size="sm"
                variant="ghost"
                aria-label="Tillbaka till design"
                onClick={goBackToDesign}
              />
            ) : undefined}
          >
            {selectedSectionKey ? (
              <StructureEditorSidebar
                sectionKey={selectedSectionKey}
                selectedComponentKey={selectedComponentKey}
                values={editValues}
                onValuesChange={handleValuesChange}
                focusedFieldKey={focusedFieldKey}
                onFocusedFieldCleared={() => setFocusedFieldKey(null)}
              />
            ) : (
              <DesignPanelPreview
                values={designValues}
                onChange={handleDesignPanelChange}
                tab={designTab}
                onTabChange={setDesignTab}
              />
            )}
          </SideBar>
        </div>
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
