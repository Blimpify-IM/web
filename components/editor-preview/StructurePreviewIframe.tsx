'use client';

/**
 * Förhandsgranskning i iframe – samma modell som dashboardens WebsiteRenderer.
 * Design (theme, tone, accent, typography, spacing, radius) appliceras via
 * injicerad design-token-CSS på iframe :root + html-attribut.
 */
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { StructureCanvasPreview } from './StructureCanvasPreview';
import type { DesignPanelValues } from './DesignPanelPreview';
import type { EditValues } from './StructureEditorSidebar';
import type { PreviewSectionKey } from './StructureCanvasPreview';
import styles from './EditorPreviewBlock.module.css';

export interface HoveredIdentifier {
  sectionKey: PreviewSectionKey;
  componentKey?: string;
}

export interface CanvasClickPayload {
  sectionKey: PreviewSectionKey;
  /** När satt = klick på text → visa endast textfält. Saknas = klick på sektion → visa endast sektionsval. */
  componentKey?: string;
}

export interface StructurePreviewIframeProps {
  designValues: DesignPanelValues;
  editValues: EditValues;
  radiusForTokens: DesignPanelValues['radius'];
  selectedSectionKey?: PreviewSectionKey | null;
  /** När satt = text vald → markera detta element, inte hela sektionen. */
  selectedComponentKey?: string | null;
  onCanvasClick?: (payload: CanvasClickPayload) => void;
  onInlineEditRequest?: (payload: { sectionKey: PreviewSectionKey; componentKey: string }) => void;
  /** När användaren sparar inline-redigering (blur) – uppdatera editValues. */
  onInlineEditCommit?: (payload: { sectionKey: PreviewSectionKey; componentKey: string; value: string }) => void;
}

/** Foundation-palett för vald accent (samma flöde som theme tone) – design-tokens refererar --foundation-${accentColor}-500. */
const ACCENT_PALETTE_HEX: Record<string, { 500: string; 600: string; 700: string }> = {
  inverse: { 500: '#737373', 600: '#525252', 700: '#404040' },
  red: { 500: '#F87171', 600: '#EF4444', 700: '#DC2626' },
  ruby: { 500: '#E8556F', 600: '#E11D48', 700: '#BE1139' },
  orange: { 500: '#FB923C', 600: '#F97316', 700: '#EA580C' },
  tangerine: { 500: '#F4956B', 600: '#E8703A', 700: '#D4591F' },
  yellow: { 500: '#FBBF24', 600: '#EAB308', 700: '#CA8A04' },
  honey: { 500: '#F59E0B', 600: '#D97706', 700: '#B45309' },
  green: { 500: '#4ADE80', 600: '#22C55E', 700: '#16A34A' },
  emerald: { 500: '#34D399', 600: '#10B981', 700: '#059669' },
  teal: { 500: '#2DD4BF', 600: '#14B8A6', 700: '#0F766E' },
  azure: { 500: '#22D3EE', 600: '#0EA5E9', 700: '#0891B2' },
  blue: { 500: '#60A5FA', 600: '#3B82F6', 700: '#2563EB' },
  indigo: { 500: '#8B5CF6', 600: '#7C3AED', 700: '#6D28D9' },
  purple: { 500: '#A855F7', 600: '#9333EA', 700: '#7C3AED' },
  pink: { 500: '#F472B6', 600: '#EC4899', 700: '#DB2777' },
};

/** Mappar DesignPanelValues till DesignTokens (buildCssVars). */
function toDesignTokens(
  designValues: DesignPanelValues,
  radiusForTokens: DesignPanelValues['radius']
): Record<string, unknown> {
  const r = radiusForTokens === 'xs' ? 'sm' : radiusForTokens === '2xl' ? 'xl' : radiusForTokens;
  return {
    themeMode: designValues.themeMode,
    themeTone: designValues.themeTone,
    accentColor: designValues.accentColor,
    fontPrimary: designValues.fontPrimary,
    fontSecondary: designValues.fontSecondary ?? designValues.fontPrimary,
    radius: r as 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full',
    sectionSpacing: designValues.sectionSpacing,
    containerSpacing: designValues.containerSpacing,
    navbarSpacing: designValues.navbarSpacing ?? designValues.containerSpacing,
    typographyScale: designValues.typographyScale,
    fontWeightHeadingNumeric: designValues.fontWeightHeadingNumeric,
    fontWeightBodyNumeric: designValues.fontWeightBodyNumeric,
    fontWeightLabelNumeric: designValues.fontWeightLabelNumeric,
  };
}

const VALID_SECTION_KEYS: PreviewSectionKey[] = ['navbar', 'hero'];

/** Hitta mest specifika elementet (component > section) som i dashboardens EditorOverlay. */
function findEditableElement(target: EventTarget | null): HoveredIdentifier | null {
  let el = target as HTMLElement | null;
  let sectionKey: PreviewSectionKey | undefined;
  let componentKey: string | undefined;
  while (el && el !== document.body) {
    const sk = el.getAttribute?.('data-section-key');
    if (sk && VALID_SECTION_KEYS.includes(sk as PreviewSectionKey)) {
      if (!sectionKey) sectionKey = sk as PreviewSectionKey;
    }
    const ck = el.getAttribute?.('data-component-key');
    if (ck) {
      componentKey = ck;
      break;
    }
    el = el.parentElement;
  }
  if (sectionKey) return { sectionKey, ...(componentKey && { componentKey }) };
  return null;
}

/** Returnera section-level-element för en sektion (har data-section-key men inte data-component-key). */
function getSectionLevelElement(doc: Document, sectionKey: string): Element | null {
  const all = doc.querySelectorAll(`[data-section-key="${sectionKey}"]`);
  for (let i = 0; i < all.length; i++) {
    if (!all[i].hasAttribute('data-component-key')) return all[i];
  }
  return all[0] ?? null;
}

export function StructurePreviewIframe({
  designValues,
  editValues,
  radiusForTokens,
  selectedSectionKey = null,
  selectedComponentKey = null,
  onCanvasClick,
  onInlineEditRequest,
  onInlineEditCommit,
}: StructurePreviewIframeProps) {
  const [iframeDocument, setIframeDocument] = useState<Document | null>(null);
  const [designCSS, setDesignCSS] = useState<string>('');
  const [hoveredIdentifier, setHoveredIdentifier] = useState<HoveredIdentifier | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const activeInlineEditRef = useRef<{
    el: HTMLElement;
    originalHTML: string;
    identifier: { sectionKey: PreviewSectionKey; componentKey: string };
  } | null>(null);
  const reactId = React.useId();
  const iframeId = `structure-preview-iframe-${reactId.replace(/:/g, '')}`;

  const effectiveTheme = designValues.themeMode === 'system' ? 'light' : designValues.themeMode;
  const isDark = effectiveTheme === 'dark';

  // 1) Setup iframe document (once)
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const setupIframe = () => {
      const doc = iframe.contentDocument ?? iframe.contentWindow?.document;
      if (!doc) return;

      doc.open();
      doc.write(`
        <!DOCTYPE html>
        <html lang="sv">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Förhandsgranskning</title>
          </head>
          <body style="margin: 0; padding: 0; overflow: hidden; font-family: system-ui, sans-serif;">
            <div id="react-root"></div>
          </body>
        </html>
      `);
      doc.close();
      setIframeDocument(doc);
    };

    if (iframe.contentDocument?.readyState === 'complete') {
      setupIframe();
    } else {
      iframe.onload = setupIframe;
    }

    return () => setIframeDocument(null);
  }, []);

  // 2) Build design CSS from designValues (async)
  useEffect(() => {
    let cancelled = false;
    const tokens = toDesignTokens(designValues, radiusForTokens);

    (async () => {
      try {
        const { buildCssVars } = await import('@blimpify-im/ui/design');
        const css = await buildCssVars(tokens as any);
        if (!cancelled) setDesignCSS(css);
      } catch (e) {
        console.warn('[StructurePreviewIframe] buildCssVars failed:', e);
        if (!cancelled) setDesignCSS('');
      }
    })();

    return () => { cancelled = true; };
  }, [
    designValues.themeMode,
    designValues.themeTone,
    designValues.accentColor,
    designValues.fontPrimary,
    designValues.fontSecondary,
    designValues.typographyScale,
    designValues.sectionSpacing,
    designValues.containerSpacing,
    designValues.navbarSpacing,
    designValues.fontWeightHeadingNumeric,
    designValues.fontWeightBodyNumeric,
    designValues.fontWeightLabelNumeric,
    radiusForTokens,
  ]);

  // 3) Inject UI CSS + design CSS into iframe and set html attributes
  useEffect(() => {
    if (!iframeDocument) return;

    const injectCSS = async () => {
      const existingUi = iframeDocument.querySelector('style[data-blimpify="ui-system"]');
      const existingDesign = iframeDocument.querySelector('style[data-blimpify="design-tokens"]');

      if (!existingUi) {
        const mainDoc = document;
        let combined = '';
        for (const style of Array.from(mainDoc.querySelectorAll('style'))) {
          if (style.textContent) combined += style.textContent + '\n';
        }
        try {
          const sheets = Array.from(mainDoc.styleSheets);
          for (const sheet of sheets) {
            try {
              if (sheet.cssRules) {
                combined += Array.from(sheet.cssRules).map((r) => r.cssText).join('\n') + '\n';
              }
            } catch {
              if (sheet.href) {
                try {
                  const res = await fetch(sheet.href);
                  if (res.ok) combined += await res.text() + '\n';
                } catch {}
              }
            }
          }
        } catch {}
        if (combined.trim()) {
          const style = iframeDocument.createElement('style');
          style.setAttribute('data-blimpify', 'ui-system');
          style.textContent = combined;
          iframeDocument.head.appendChild(style);
        }
      }

      /* Accent samma flöde som theme tone: sätt --foundation-${accentColor}-500 före design-tokens så referensen löser sig */
      const accent = designValues.accentColor ?? 'blue';
      const hex = ACCENT_PALETTE_HEX[accent] ?? ACCENT_PALETTE_HEX.blue;
      let paletteEl = iframeDocument.querySelector('style[data-blimpify="accent-palette"]');
      if (!paletteEl) {
        paletteEl = iframeDocument.createElement('style');
        paletteEl.setAttribute('data-blimpify', 'accent-palette');
        iframeDocument.head.appendChild(paletteEl);
      }
      paletteEl.textContent = `:root {
  --foundation-${accent}-500: ${hex[500]};
  --foundation-${accent}-600: ${hex[600]};
  --foundation-${accent}-700: ${hex[700]};
}`;
      const designEl = iframeDocument.querySelector('style[data-blimpify="design-tokens"]');
      if (paletteEl.parentNode && designEl && paletteEl.nextSibling !== designEl) {
        designEl.parentNode!.insertBefore(paletteEl, designEl);
      }

      if (designCSS) {
        if (existingDesign) {
          existingDesign.textContent = designCSS;
        } else {
          const style = iframeDocument.createElement('style');
          style.setAttribute('data-blimpify', 'design-tokens');
          style.textContent = designCSS;
          iframeDocument.head.appendChild(style);
        }
      }
    };

    injectCSS();
  }, [iframeDocument, designCSS, designValues.accentColor]);

  // 4) Set theme + accent attributes on iframe <html> (så accent och theme alltid synkade)
  useEffect(() => {
    if (!iframeDocument) return;
    const html = iframeDocument.documentElement;
    html.setAttribute('data-theme-tone', designValues.themeTone);
    html.setAttribute('data-theme', isDark ? 'dark' : 'light');
    html.setAttribute('data-theme-mode', designValues.themeMode);
    html.setAttribute('data-accent-color', designValues.accentColor ?? 'blue');
    html.style.setProperty('--is-dark', isDark ? '1' : '0');
    if (designValues.accentColor === 'inverse') {
      html.setAttribute('data-accent-mode', 'inverse');
    } else {
      html.removeAttribute('data-accent-mode');
    }
  }, [iframeDocument, designValues.themeTone, designValues.themeMode, designValues.accentColor, isDark]);

  // 5) Klick i canvas – text ger endast textfält, sektion ger endast sektionsval (som i dashboarden)
  useEffect(() => {
    if (!iframeDocument || !onCanvasClick) return;
    const handleClick = (e: MouseEvent) => {
      const id = findEditableElement(e.target);
      if (id) {
        e.preventDefault();
        e.stopPropagation();
        onCanvasClick(id.componentKey
          ? { sectionKey: id.sectionKey, componentKey: id.componentKey }
          : { sectionKey: id.sectionKey });
      }
    };
    iframeDocument.body.addEventListener('click', handleClick, true);
    return () => iframeDocument.body.removeEventListener('click', handleClick, true);
  }, [iframeDocument, onCanvasClick]);

  // 5b) Inline-redigering: commit vid blur eller Escape (som i dashboarden)
  const commitInlineEdit = React.useCallback((cancelled: boolean) => {
    const edit = activeInlineEditRef.current;
    if (!edit) return;
    activeInlineEditRef.current = null;
    const { el, originalHTML, identifier } = edit;
    const rawText = (el.textContent ?? '').replace(/\n$/, '');
    el.contentEditable = 'false';
    el.classList.remove('editor-inline-editing');
    if (cancelled) {
      el.innerHTML = originalHTML;
    } else if (onInlineEditCommit && rawText !== undefined) {
      onInlineEditCommit({ sectionKey: identifier.sectionKey, componentKey: identifier.componentKey, value: rawText });
    }
  }, [onInlineEditCommit]);

  // 5c) Dubbelklick på text – starta inline-redigering i canvas (som i dashboarden) + öppna sidopanel
  useEffect(() => {
    if (!iframeDocument) return;

    const injectInlineEditCSS = () => {
      if (iframeDocument.getElementById('editor-inline-style')) return;
      const style = iframeDocument.createElement('style');
      style.id = 'editor-inline-style';
      style.textContent = `
        [contenteditable="true"].editor-inline-editing {
          outline: 2px solid var(--border-info, #3b82f6) !important;
          outline-offset: 2px;
          border-radius: 3px;
          cursor: text !important;
          caret-color: var(--border-info, #3b82f6);
          white-space: pre-wrap;
          word-wrap: break-word;
          overflow-wrap: break-word;
          max-width: 100%;
        }
      `;
      iframeDocument.head.appendChild(style);
    };

    const handleDblClick = (e: MouseEvent) => {
      const id = findEditableElement(e.target);
      if (!id?.componentKey) return;
      e.preventDefault();
      e.stopPropagation();

      const el = iframeDocument.querySelector(`[data-component-key="${id.componentKey}"]`) as HTMLElement | null;
      if (!el) {
        onInlineEditRequest?.({ sectionKey: id.sectionKey, componentKey: id.componentKey });
        return;
      }

      const allowInline = el.getAttribute('data-inline-edit') !== 'false';
      if (!allowInline) {
        onInlineEditRequest?.({ sectionKey: id.sectionKey, componentKey: id.componentKey });
        return;
      }

      if (activeInlineEditRef.current) commitInlineEdit(false);

      injectInlineEditCSS();
      const originalHTML = el.innerHTML;
      activeInlineEditRef.current = { el, originalHTML, identifier: { sectionKey: id.sectionKey, componentKey: id.componentKey } };
      el.contentEditable = 'true';
      el.classList.add('editor-inline-editing');

      const win = iframeRef.current?.contentWindow;
      const scrollX = win?.scrollX ?? 0;
      const scrollY = win?.scrollY ?? 0;
      el.focus({ preventScroll: true });
      if (win) win.scrollTo(scrollX, scrollY);

      const sel = win?.getSelection();
      if (sel && win) {
        try {
          const range = win.document.createRange();
          range.selectNodeContents(el);
          sel.removeAllRanges();
          sel.addRange(range);
        } catch { /* ignore */ }
      }

      const onBlur = () => {
        el.removeEventListener('blur', onBlur);
        el.removeEventListener('keydown', onKeydown);
        commitInlineEdit(false);
      };
      const onKeydown = (ev: KeyboardEvent) => {
        if (ev.key === 'Escape') {
          ev.preventDefault();
          el.removeEventListener('blur', onBlur);
          el.removeEventListener('keydown', onKeydown);
          commitInlineEdit(true);
        }
      };
      el.addEventListener('blur', onBlur);
      el.addEventListener('keydown', onKeydown);
      onInlineEditRequest?.({ sectionKey: id.sectionKey, componentKey: id.componentKey });
    };

    iframeDocument.body.addEventListener('dblclick', handleDblClick, true);
    return () => iframeDocument.body.removeEventListener('dblclick', handleDblClick, true);
  }, [iframeDocument, onInlineEditRequest, commitInlineEdit]);

  // 5d) Hover i canvas – uppdatera hover-state
  useEffect(() => {
    if (!iframeDocument) return;
    const handleMouseMove = (e: MouseEvent) => {
      setHoveredIdentifier(findEditableElement(e.target));
    };
    const handleMouseLeave = () => setHoveredIdentifier(null);
    iframeDocument.body.addEventListener('mousemove', handleMouseMove, true);
    iframeDocument.body.addEventListener('mouseleave', handleMouseLeave, true);
    return () => {
      iframeDocument.body.removeEventListener('mousemove', handleMouseMove, true);
      iframeDocument.body.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, [iframeDocument]);

  // 5e) Applicera editor-hover och editor-selected på rätt element (som i dashboarden)
  useEffect(() => {
    if (!iframeDocument) return;
    const doc = iframeDocument;
    doc.querySelectorAll('.editor-hover').forEach((el) => el.classList.remove('editor-hover'));
    doc.querySelectorAll('.editor-selected').forEach((el) => el.classList.remove('editor-selected'));

    if (selectedSectionKey) {
      if (selectedComponentKey) {
        const componentEl = doc.querySelector(`[data-component-key="${selectedComponentKey}"]`);
        if (componentEl) componentEl.classList.add('editor-selected');
      } else {
        const sectionEl = getSectionLevelElement(doc, selectedSectionKey);
        if (sectionEl) sectionEl.classList.add('editor-selected');
      }
    }

    if (hoveredIdentifier && hoveredIdentifier.sectionKey !== selectedSectionKey) {
      const isHoveringSelected =
        selectedSectionKey &&
        hoveredIdentifier.sectionKey === selectedSectionKey &&
        (selectedComponentKey ? hoveredIdentifier.componentKey === selectedComponentKey : !hoveredIdentifier.componentKey);
      if (!isHoveringSelected) {
        let hoverEl: Element | null = null;
        if (hoveredIdentifier.componentKey) {
          hoverEl = doc.querySelector(`[data-component-key="${hoveredIdentifier.componentKey}"]`);
        }
        if (!hoverEl) {
          hoverEl = getSectionLevelElement(doc, hoveredIdentifier.sectionKey);
        }
        if (hoverEl) hoverEl.classList.add('editor-hover');
      }
    }
  }, [iframeDocument, selectedSectionKey, selectedComponentKey, hoveredIdentifier]);

  // 5f) Injicera editor-overlay CSS i iframe – samma som dashboardens WebsiteRenderer (fixed→absolute, hover/selected)
  const EDITOR_OVERLAY_CSS = `
html, body {
  overflow: hidden !important;
  min-height: 0 !important;
}
#react-root > div {
  min-height: 0 !important;
}
:root {
  --editor-border-info: var(--border-info, #3b82f6);
}
.editor-hover {
  outline: 2px solid var(--editor-border-info) !important;
  outline-offset: -1px !important;
  cursor: pointer !important;
}
.editor-selected {
  outline: 3px solid var(--editor-border-info) !important;
  outline-offset: -3px !important;
  cursor: pointer !important;
  z-index: 1 !important;
}
/* Navbar ska alltid ligga kvar (absolute) – överstyck om något annat gav den position */
nav[data-section-key="navbar"] {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 1000 !important;
}
/* Logotyp anpassas efter valt tema: mörkt tema eller inverse → invertera så den syns */
html[data-theme="dark"] [data-blimpify="navbar-logo"],
html[data-accent-mode="inverse"] [data-blimpify="navbar-logo"] {
  filter: invert(1) !important;
}
/* Knappar (accent): fallback till design tokens om semantic tokens inte når iframe */
.btn-accent {
  background-color: var(--surface-button-accent, var(--foundation-accent-500)) !important;
  color: var(--text-button-accent, var(--text-inverse)) !important;
  border-color: var(--border-button-accent, var(--foundation-accent-500)) !important;
}
.btn-accent:hover:not(:disabled) {
  background-color: var(--surface-button-accent-hover, var(--foundation-accent-600)) !important;
  border-color: var(--border-button-accent-hover, var(--foundation-accent-600)) !important;
}
.btn-accent:active:not(:disabled) {
  background-color: var(--surface-button-accent-active, var(--foundation-accent-700)) !important;
}
/* Länkar (accent): tydlig färg så de inte smälter in i tonen */
.textlink-accent {
  color: var(--text-accent, var(--foundation-accent-600)) !important;
}
.textlink-accent:hover {
  color: var(--text-accent-strong, var(--foundation-accent-700)) !important;
}
/* Samma som dashboard: fixed → absolute i iframe så navbar + bakgrund beter sig rätt */
[style*="position: fixed"] {
  position: absolute !important;
}
main > div[style*="min-height"] {
  min-height: unset !important;
}
section[class*="height75vh"] {
  min-height: 600px !important;
}
section[class*="heightFull"],
section[class*="heightScreen"] {
  min-height: 800px !important;
}
`;
  useEffect(() => {
    if (!iframeDocument) return;
    let el = iframeDocument.querySelector('style[data-blimpify="editor-overlay"]');
    if (!el) {
      el = iframeDocument.createElement('style');
      el.setAttribute('data-blimpify', 'editor-overlay');
      iframeDocument.head.appendChild(el);
    }
    el.textContent = EDITOR_OVERLAY_CSS;
  }, [iframeDocument]);

  // 5g) Portal preview content into iframe (innehållet visas direkt; design-CSS läggs in när klar)
  const canPortal = iframeDocument?.getElementById('react-root') != null;

  return (
    <div className={styles.canvas} data-theme={effectiveTheme}>
      <div className={styles.canvasInner} style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
        <iframe
          ref={iframeRef}
          id={iframeId}
          title="Designförhandsgranskning"
          style={{
            flex: 1,
            minHeight: 0,
            width: '100%',
            border: 'none',
            background: 'var(--surface-base)',
          }}
        />
        {canPortal &&
          createPortal(
            <div style={{ background: 'var(--surface-base)' }}>
              <StructureCanvasPreview
                selectedSectionKey={selectedSectionKey}
                navbarVariant={editValues.navbarVariant}
                navbarMenuAlign={editValues.navbarMenuAlign}
                navbarBackgroundVariant={editValues.navbarBackgroundVariant}
                navbarShowBorder={editValues.navbarShowBorder}
                navbarBottomBorderFade={editValues.navbarBottomBorderFade}
                navbarHideOnScroll={editValues.navbarHideOnScroll}
                navbarLogoDisplay={editValues.navbarLogoDisplay}
                navbarLogoSizePx={editValues.navbarLogoSizePx ?? 36}
                navbarLogoImageUrl={editValues.navbarLogoImageUrl || undefined}
                navbarMobileMenuAlign={editValues.navbarMobileMenuAlign}
                navbarMobileLogoDisplay={editValues.navbarMobileLogoDisplay}
                navbarMobileMenuVariant={editValues.navbarMobileMenuVariant}
                navbarLogoText={editValues.navbarLogoText}
                navbarLink1={editValues.navbarLink1}
                navbarLink2={editValues.navbarLink2}
                navbarLink3={editValues.navbarLink3}
                navbarCtaText={editValues.navbarCtaText}
                heroHeadline={editValues.heroHeadline}
                heroSubtext={editValues.heroSubtext}
                heroAlignSectionHeader={editValues.heroAlignSectionHeader}
                heroRightColumn={editValues.heroRightColumn}
                heroBackgroundImage={editValues.heroBackgroundImage || undefined}
                heroBackgroundPosition={editValues.heroBackgroundPosition}
                heroBackgroundOpacity={editValues.heroBackgroundOpacity}
                heroBackgroundTint={editValues.heroBackgroundTint}
                heroImageFadeEdge={editValues.heroImageFadeEdge}
                heroImageFadeStrength={editValues.heroImageFadeStrength}
                servicesHeading={editValues.servicesHeading}
                servicesBody={editValues.servicesBody}
                pricingHeading={editValues.pricingHeading}
                pricingBody={editValues.pricingBody}
                resultsHeading={editValues.resultsHeading}
                resultsBody={editValues.resultsBody}
                statsHeading={editValues.statsHeading}
                statsBody={editValues.statsBody}
                testimonialQuote={editValues.testimonialQuote}
                testimonialAuthor={editValues.testimonialAuthor}
                faqHeading={editValues.faqHeading}
                faqBody={editValues.faqBody}
                contactHeading={editValues.contactHeading}
                contactBody={editValues.contactBody}
                buttonVariant={editValues.buttonVariant}
                cardVariant={editValues.cardVariant}
                cardRadius={editValues.cardRadius}
                sectionSpacing={editValues.sectionSpacing}
                fontPrimary={designValues.fontPrimary}
                typographyScale={designValues.typographyScale}
              />
            </div>,
            iframeDocument.getElementById('react-root')!
          )}
      </div>
    </div>
  );
}
