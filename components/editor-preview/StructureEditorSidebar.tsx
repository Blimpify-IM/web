'use client';

import React, { useMemo, useCallback, useState, useRef } from 'react';
import { VStack, Label, Body, SegmentedControl, Switch, Picker, Slider, Button, Icon } from '@blimpify-im/ui';
import { ArrowUpTrayIcon, XMarkIcon } from '@heroicons/react/24/outline';
import type { SegmentedControlOption } from '@blimpify-im/ui';
import { HeroSectionEditor } from '@/lib/website-editor';
import { NavbarLayoutEditor, type NavbarPropUpdate } from '@/lib/website-editor';
import './SectionEditor.css';

export type ButtonVariant = 'accent' | 'primary' | 'secondary';
export type CardVariant = 'outlined' | 'elevated' | 'default';
export type CardRadius = 'sm' | 'md' | 'lg';
export type SectionSpacing = 'sm' | 'md' | 'lg';

export type NavbarVariant = 'bar' | 'pill' | 'center-pill';
export type NavbarBackgroundVariant =
  | 'default'
  | 'solid'
  | 'accent'
  | 'raised'
  | 'glass'
  | 'glass-clear'
  | 'transparent';
export type NavbarMenuAlign = 'left' | 'center' | 'right';
export type NavbarLogoDisplay = 'both' | 'logo' | 'text';
export type NavbarMobileMenuVariant = 'sheet' | 'fullscreen';

export interface EditValues {
  navbarLogoText: string;
  navbarLink1: string;
  navbarLink2: string;
  navbarLink3: string;
  navbarCtaText: string;
  navbarVariant: NavbarVariant;
  navbarMenuAlign: NavbarMenuAlign;
  navbarBackgroundVariant: NavbarBackgroundVariant;
  navbarShowBorder: boolean;
  navbarBottomBorderFade: boolean;
  navbarHideOnScroll: boolean;
  /** Style: vad som visas i logo-området (schema: logoDisplay) */
  navbarLogoDisplay: NavbarLogoDisplay;
  /** Logostorlek i pixlar (32–40). Croppas i rutan, navbaren förblir smal. */
  navbarLogoSizePx: number;
  /** URL till uppladdad logobild (relativ sökväg eller full URL) */
  navbarLogoImageUrl: string;
  /** Mobile: justering av länkar i drawer (schema: mobileMenuAlign) */
  navbarMobileMenuAlign: NavbarMenuAlign;
  /** Mobile: logo i drawer (schema: mobileLogoDisplay) */
  navbarMobileLogoDisplay: NavbarLogoDisplay;
  /** Mobile: pill/center-pill – hur menyn öppnas (schema: mobileMenuVariant) */
  navbarMobileMenuVariant: NavbarMobileMenuVariant;
  heroHeadline: string;
  heroSubtext: string;
  heroAlignSectionHeader: 'left' | 'center';
  heroRightColumn: string;
  heroBackgroundImage: string;
  /** Samma som dashboardens layout: position, opacity, tint, fade */
  heroBackgroundPosition: string;
  heroBackgroundOpacity: number;
  heroBackgroundTint: 'none' | 'accent';
  heroImageFadeEdge: 'none' | 'top' | 'bottom' | 'both';
  heroImageFadeStrength: number;
  servicesHeading: string;
  servicesBody: string;
  pricingHeading: string;
  pricingBody: string;
  resultsHeading: string;
  resultsBody: string;
  statsHeading: string;
  statsBody: string;
  testimonialQuote: string;
  testimonialAuthor: string;
  faqHeading: string;
  faqBody: string;
  contactHeading: string;
  contactBody: string;
  buttonVariant: ButtonVariant;
  cardVariant: CardVariant;
  cardRadius: CardRadius;
  sectionSpacing: SectionSpacing;
}

export type SectionEditorKey =
  | 'navbar'
  | 'hero'
  | 'services'
  | 'pricing'
  | 'results'
  | 'stats'
  | 'testimonials'
  | 'faq'
  | 'contact';

export interface StructureEditorSidebarProps {
  values: EditValues;
  onValuesChange: (values: Partial<EditValues>) => void;
  sectionKey?: SectionEditorKey | null;
  /** När satt = text-läge: visa endast detta fält. Null = sektionsläge: visa endast sektionsval (inga textfält). */
  selectedComponentKey?: string | null;
  focusedFieldKey?: string | null;
  onFocusedFieldCleared?: () => void;
}

/** Map componentKey (kebab) → etikett + EditValues-nyckel för "enda fält"-vyn. */
const COMPONENT_FIELD_MAP: Record<string, { label: string; fieldKey: keyof EditValues }> = {
  'navbar-logoText': { label: 'Logotext', fieldKey: 'navbarLogoText' },
  'hero-headline': { label: 'Rubrik', fieldKey: 'heroHeadline' },
  'hero-subtext': { label: 'Undertext', fieldKey: 'heroSubtext' },
  'services-heading': { label: 'Rubrik', fieldKey: 'servicesHeading' },
  'services-body': { label: 'Text', fieldKey: 'servicesBody' },
  'pricing-heading': { label: 'Rubrik', fieldKey: 'pricingHeading' },
  'pricing-body': { label: 'Text', fieldKey: 'pricingBody' },
  'results-heading': { label: 'Rubrik', fieldKey: 'resultsHeading' },
  'results-body': { label: 'Text', fieldKey: 'resultsBody' },
  'stats-heading': { label: 'Rubrik', fieldKey: 'statsHeading' },
  'stats-body': { label: 'Text', fieldKey: 'statsBody' },
  'testimonial-quote': { label: 'Citat', fieldKey: 'testimonialQuote' },
  'testimonial-author': { label: 'Författare', fieldKey: 'testimonialAuthor' },
  'faq-heading': { label: 'Rubrik', fieldKey: 'faqHeading' },
  'faq-body': { label: 'Text', fieldKey: 'faqBody' },
  'contact-heading': { label: 'Rubrik', fieldKey: 'contactHeading' },
  'contact-body': { label: 'Text', fieldKey: 'contactBody' },
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="section-editor__field">
      <span className="section-editor__label">{label}</span>
      {children}
    </label>
  );
}

/** Grupp med titel – samma upplägg som dashboard (VARIANT, STYLE, SECTION HEADER, etc.) */
function EditorGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="section-editor__group">
      <div className="section-editor__group-title">{title}</div>
      <VStack spacing="md">{children}</VStack>
    </div>
  );
}

/** Schema propKey → EditValues-nyckel (samma som dashboard navbar.schema) */
const NAVBAR_PROP_TO_EDIT: Record<string, keyof EditValues> = {
  menuAlign: 'navbarMenuAlign',
  backgroundVariant: 'navbarBackgroundVariant',
  showBorder: 'navbarShowBorder',
  bottomBorderFade: 'navbarBottomBorderFade',
  hideOnScroll: 'navbarHideOnScroll',
  logoDisplay: 'navbarLogoDisplay',
  mobileMenuAlign: 'navbarMobileMenuAlign',
  mobileLogoDisplay: 'navbarMobileLogoDisplay',
  mobileMenuVariant: 'navbarMobileMenuVariant',
};

function navbarSectionFromValues(values: EditValues): {
  section_key: string;
  type: string;
  patterns: Record<string, { type: string; props: Record<string, unknown> }>;
  order: string[];
} {
  const patternKey = 'navbar_0';
  return {
    section_key: 'navbar',
    type: 'navbar',
    patterns: {
      [patternKey]: {
        type: values.navbarVariant,
        props: {
          menuAlign: values.navbarMenuAlign,
          backgroundVariant: values.navbarBackgroundVariant,
          showBorder: values.navbarShowBorder,
          bottomBorderFade: values.navbarBottomBorderFade,
          hideOnScroll: values.navbarHideOnScroll,
          logoDisplay: values.navbarLogoDisplay,
          mobileMenuAlign: values.navbarMobileMenuAlign,
          mobileLogoDisplay: values.navbarMobileLogoDisplay,
          mobileMenuVariant: values.navbarMobileMenuVariant,
        },
      },
    },
    order: [patternKey],
  };
}

/** Navbar: exakt samma editor som dashboard (NavbarLayoutEditor från @blimpify-im/website-editor) + Innehåll */
function NavbarBlock({
  values,
  onValuesChange,
  sectionOnly,
}: {
  values: EditValues;
  onValuesChange: (v: Partial<EditValues>) => void;
  sectionOnly?: boolean;
}) {
  const section = useMemo(() => navbarSectionFromValues(values), [values]);

  const onNavbarPropChanged = useCallback(
    (update: NavbarPropUpdate) => {
      const editKey = NAVBAR_PROP_TO_EDIT[update.propKey];
      if (!editKey) return;
      // Schema toggle-fält (showBorder, bottomBorderFade, hideOnScroll) ska alltid sparas som boolean
      const raw = update.value;
      const value =
        raw === true || raw === false
          ? raw
          : typeof raw === 'string' && (raw === 'true' || raw === 'false')
            ? raw === 'true'
            : raw;
      onValuesChange({ [editKey]: value } as Partial<EditValues>);
    },
    [onValuesChange]
  );

  const onNavbarVariantChanged = useCallback(
    (update: { variant: NavbarVariant }) => {
      onValuesChange({ navbarVariant: update.variant });
    },
    [onValuesChange]
  );

  const logoDisplayOptions: SegmentedControlOption[] = [
    { value: 'logo', label: 'Icon' },
    { value: 'both', label: 'Both' },
    { value: 'text', label: 'Text' },
  ];
  const [logoUploading, setLogoUploading] = useState(false);
  const [logoError, setLogoError] = useState<string | null>(null);
  const logoFileInputRef = useRef<HTMLInputElement>(null);

  const handleLogoFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      e.target.value = '';
      if (!file) return;
      const valid = ['image/png', 'image/jpeg', 'image/jpg'].includes(file.type);
      if (!valid) {
        setLogoError('Endast PNG och JPG är tillåtna.');
        return;
      }
      setLogoError(null);
      setLogoUploading(true);
      try {
        const url = await uploadBackgroundImage(file);
        onValuesChange({ navbarLogoImageUrl: url });
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Kunde inte ladda upp.';
        const isAuthError = /token|åtkomst|unauthorized|login|session/i.test(msg);
        if (isAuthError) {
          try {
            const dataUrl = await fileToDataUrl(file);
            onValuesChange({ navbarLogoImageUrl: dataUrl });
          } catch {
            setLogoError('Kunde inte använda bilden. Ange en bild-URL nedan istället.');
          }
        } else {
          setLogoError(msg);
        }
      } finally {
        setLogoUploading(false);
      }
    },
    [onValuesChange]
  );

  const logoImageUrl = values.navbarLogoImageUrl?.trim()
    ? (values.navbarLogoImageUrl.startsWith('http') || values.navbarLogoImageUrl.startsWith('data:')
        ? values.navbarLogoImageUrl
        : `https://cdn.blimpify-im.com/members${values.navbarLogoImageUrl}`)
    : null;

  return (
    <div className="section-editor">
      <NavbarLayoutEditor
        section={section}
        onNavbarPropChanged={onNavbarPropChanged}
        onNavbarVariantChanged={onNavbarVariantChanged}
      />
      {!sectionOnly && (
        <div className="section-editor__scrollable">
          <div className="section-editor__content">
            <EditorGroup title="Logo">
              <Field label="Visa som">
                <SegmentedControl
                  options={logoDisplayOptions}
                  value={values.navbarLogoDisplay}
                  onChange={(v) => onValuesChange({ navbarLogoDisplay: (v ?? values.navbarLogoDisplay) as NavbarLogoDisplay })}
                  size="sm"
                  fullWidth
                />
              </Field>
              {(values.navbarLogoDisplay === 'both' || values.navbarLogoDisplay === 'logo') && (
                <Field label="Storlek (croppas i rutan)">
                  <Slider
                    minValue={32}
                    maxValue={40}
                    step={4}
                    value={Math.min(40, Math.max(32, values.navbarLogoSizePx ?? 36))}
                    onChange={(v) => onValuesChange({ navbarLogoSizePx: Math.round(Array.isArray(v) ? v[0] : v) })}
                    size="sm"
                    hideValue={false}
                    getValue={(v) => `${Math.round(Array.isArray(v) ? v[0] : v)} px`}
                  />
                </Field>
              )}
              {(values.navbarLogoDisplay === 'both' || values.navbarLogoDisplay === 'text') && (
                <Field label="Namn">
                  <input
                    data-field-key="navbarLogoText"
                    type="text"
                    value={values.navbarLogoText}
                    onChange={(e) => onValuesChange({ navbarLogoText: e.target.value })}
                    className="section-editor__input"
                    placeholder="Företagsnamn"
                  />
                </Field>
              )}
              {(values.navbarLogoDisplay === 'both' || values.navbarLogoDisplay === 'logo') && (
                <>
                  <Field label="Logobild">
                    <input
                      ref={logoFileInputRef}
                      type="file"
                      accept="image/png,image/jpeg,image/jpg"
                      className="section-editor__input section-editor__input--hidden"
                      aria-hidden
                      onChange={handleLogoFileChange}
                    />
                    {logoImageUrl ? (
                      <VStack spacing="xs">
                        <div
                          style={{
                            width: 64,
                            height: 64,
                            borderRadius: 'var(--radius-md)',
                            overflow: 'hidden',
                            background: 'var(--surface-subtle)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <img src={logoImageUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <div style={{ display: 'flex', gap: 'var(--foundation-space-2)', alignItems: 'center' }}>
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => logoFileInputRef.current?.click()}
                            disabled={logoUploading}
                            leftIcon={<Icon size="sm"><ArrowUpTrayIcon /></Icon>}
                          >
                            {logoUploading ? 'Laddar upp…' : 'Byt bild'}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onValuesChange({ navbarLogoImageUrl: '' })}
                            leftIcon={<Icon size="sm"><XMarkIcon /></Icon>}
                            aria-label="Ta bort logobild"
                          >
                            Ta bort
                          </Button>
                        </div>
                      </VStack>
                    ) : (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => logoFileInputRef.current?.click()}
                        disabled={logoUploading}
                        leftIcon={<Icon size="sm"><ArrowUpTrayIcon /></Icon>}
                      >
                        {logoUploading ? 'Laddar upp…' : 'Ladda upp bild'}
                      </Button>
                    )}
                    {logoError && <Body size="xs" color="destructive" style={{ marginTop: 'var(--foundation-space-1)' }}>{logoError}</Body>}
                  </Field>
                  <Field label="Eller ange bild-URL">
                    <input
                      type="url"
                      value={values.navbarLogoImageUrl || ''}
                      onChange={(e) => {
                        setLogoError(null);
                        onValuesChange({ navbarLogoImageUrl: e.target.value.trim() });
                      }}
                      className="section-editor__input"
                      placeholder="https://…"
                    />
                  </Field>
                </>
              )}
            </EditorGroup>
          </div>
        </div>
      )}
    </div>
  );
}

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error('Kunde inte läsa filen'));
    reader.readAsDataURL(file);
  });
}

async function uploadBackgroundImage(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('files', file);
  const res = await fetch('/api/upload-media', {
    method: 'POST',
    credentials: 'include',
    body: formData,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.message || 'Kunde inte ladda upp bilden');
  if (!data?.success || !data?.data?.uploadedFiles?.length) throw new Error(data?.message || 'Ingen bild returnerades');
  const first = data.data.uploadedFiles[0];
  const url = first.url || (first.s3KeyEndpoint && `https://cdn.blimpify-im.com/members${first.s3KeyEndpoint}`);
  if (!url) throw new Error('Kunde inte få bild-URL');
  return url;
}

function HeroBlock({ values, onValuesChange, sectionOnly }: { values: EditValues; onValuesChange: (v: Partial<EditValues>) => void; sectionOnly?: boolean }) {
  const layout = {
    alignSectionHeader: values.heroAlignSectionHeader,
    secondColumn: values.heroRightColumn as 'none' | 'action',
    background: values.heroBackgroundImage?.trim() ? 'image' as const : 'default' as const,
    backgroundImage: values.heroBackgroundImage || '',
    backgroundPosition: values.heroBackgroundPosition,
    backgroundOpacity: values.heroBackgroundOpacity,
    backgroundTint: values.heroBackgroundTint,
    imageFadeEdge: values.heroImageFadeEdge,
    imageFadeStrength: values.heroImageFadeStrength,
  };
  const content = {
    headline: values.heroHeadline,
    subtext: values.heroSubtext,
    ctaText: values.navbarCtaText,
  };
  return (
    <div className="section-editor">
      <div className="section-editor__scrollable">
        <div className="section-editor__content">
          <HeroSectionEditor
            layout={layout}
            content={!sectionOnly ? content : undefined}
            onLayoutChange={(patch) => {
              onValuesChange({
                ...(patch.alignSectionHeader != null && { heroAlignSectionHeader: patch.alignSectionHeader }),
                ...(patch.secondColumn != null && { heroRightColumn: patch.secondColumn }),
                ...(patch.background === 'default' && { heroBackgroundImage: '' }),
                ...(patch.backgroundImage != null && { heroBackgroundImage: patch.backgroundImage }),
                ...(patch.backgroundPosition != null && { heroBackgroundPosition: patch.backgroundPosition }),
                ...(patch.backgroundOpacity != null && { heroBackgroundOpacity: patch.backgroundOpacity }),
                ...(patch.backgroundTint != null && { heroBackgroundTint: patch.backgroundTint }),
                ...(patch.imageFadeEdge != null && { heroImageFadeEdge: patch.imageFadeEdge }),
                ...(patch.imageFadeStrength != null && { heroImageFadeStrength: patch.imageFadeStrength }),
              });
            }}
            onContentChange={
              !sectionOnly
                ? (c) => onValuesChange({
                    ...(c.headline != null && { heroHeadline: c.headline }),
                    ...(c.subtext != null && { heroSubtext: c.subtext }),
                  })
                : undefined
            }
            onUploadImage={uploadBackgroundImage}
            inlineSettings
          />
        </div>
      </div>
    </div>
  );
}

function ServicesBlock({ values, onValuesChange, sectionOnly }: { values: EditValues; onValuesChange: (v: Partial<EditValues>) => void; sectionOnly?: boolean }) {
  if (sectionOnly) {
    return (
      <div className="section-editor">
        <div className="section-editor__scrollable">
          <div className="section-editor__content">
            <Body size="sm" color="tertiary">Klicka på rubrik eller text i förhandsgranskningen för att redigera innehåll.</Body>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="section-editor">
      <div className="section-editor__scrollable">
        <div className="section-editor__content">
          <EditorGroup title="TJÄNSTER">
            <Field label="Rubrik">
              <input data-field-key="servicesHeading" type="text" value={values.servicesHeading} onChange={(e) => onValuesChange({ servicesHeading: e.target.value })} className="section-editor__input" />
            </Field>
            <Field label="Text">
              <textarea data-field-key="servicesBody" value={values.servicesBody} onChange={(e) => onValuesChange({ servicesBody: e.target.value })} rows={2} className="section-editor__textarea" />
            </Field>
          </EditorGroup>
        </div>
      </div>
    </div>
  );
}

function PricingBlock({ values, onValuesChange, sectionOnly }: { values: EditValues; onValuesChange: (v: Partial<EditValues>) => void; sectionOnly?: boolean }) {
  if (sectionOnly) {
    return (
      <div className="section-editor">
        <div className="section-editor__scrollable">
          <div className="section-editor__content">
            <Body size="sm" color="tertiary">Klicka på rubrik eller text i förhandsgranskningen för att redigera innehåll.</Body>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="section-editor">
      <div className="section-editor__scrollable">
        <div className="section-editor__content">
          <EditorGroup title="PRISER">
            <Field label="Rubrik">
              <input data-field-key="pricingHeading" type="text" value={values.pricingHeading} onChange={(e) => onValuesChange({ pricingHeading: e.target.value })} className="section-editor__input" />
            </Field>
            <Field label="Text">
              <textarea data-field-key="pricingBody" value={values.pricingBody} onChange={(e) => onValuesChange({ pricingBody: e.target.value })} rows={2} className="section-editor__textarea" />
            </Field>
          </EditorGroup>
        </div>
      </div>
    </div>
  );
}

function ResultsBlock({ values, onValuesChange, sectionOnly }: { values: EditValues; onValuesChange: (v: Partial<EditValues>) => void; sectionOnly?: boolean }) {
  if (sectionOnly) {
    return (
      <div className="section-editor">
        <div className="section-editor__scrollable">
          <div className="section-editor__content">
            <Body size="sm" color="tertiary">Klicka på rubrik eller text i förhandsgranskningen för att redigera innehåll.</Body>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="section-editor">
      <div className="section-editor__scrollable">
        <div className="section-editor__content">
          <EditorGroup title="RESULTAT">
            <Field label="Rubrik">
              <input data-field-key="resultsHeading" type="text" value={values.resultsHeading} onChange={(e) => onValuesChange({ resultsHeading: e.target.value })} className="section-editor__input" />
            </Field>
            <Field label="Text">
              <textarea data-field-key="resultsBody" value={values.resultsBody} onChange={(e) => onValuesChange({ resultsBody: e.target.value })} rows={2} className="section-editor__textarea" />
            </Field>
          </EditorGroup>
        </div>
      </div>
    </div>
  );
}

function StatsBlock({ values, onValuesChange, sectionOnly }: { values: EditValues; onValuesChange: (v: Partial<EditValues>) => void; sectionOnly?: boolean }) {
  if (sectionOnly) {
    return (
      <div className="section-editor">
        <div className="section-editor__scrollable">
          <div className="section-editor__content">
            <Body size="sm" color="tertiary">Klicka på rubrik eller text i förhandsgranskningen för att redigera innehåll.</Body>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="section-editor">
      <div className="section-editor__scrollable">
        <div className="section-editor__content">
          <EditorGroup title="STATISTIK">
            <Field label="Rubrik">
              <input data-field-key="statsHeading" type="text" value={values.statsHeading} onChange={(e) => onValuesChange({ statsHeading: e.target.value })} className="section-editor__input" />
            </Field>
            <Field label="Text">
              <textarea data-field-key="statsBody" value={values.statsBody} onChange={(e) => onValuesChange({ statsBody: e.target.value })} rows={2} className="section-editor__textarea" />
            </Field>
          </EditorGroup>
        </div>
      </div>
    </div>
  );
}

function TestimonialsBlock({ values, onValuesChange, sectionOnly }: { values: EditValues; onValuesChange: (v: Partial<EditValues>) => void; sectionOnly?: boolean }) {
  if (sectionOnly) {
    return (
      <div className="section-editor">
        <div className="section-editor__scrollable">
          <div className="section-editor__content">
            <Body size="sm" color="tertiary">Klicka på citat eller författare i förhandsgranskningen för att redigera.</Body>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="section-editor">
      <div className="section-editor__scrollable">
        <div className="section-editor__content">
          <EditorGroup title="RECENSIONER">
            <Field label="Citat">
              <textarea data-field-key="testimonialQuote" value={values.testimonialQuote} onChange={(e) => onValuesChange({ testimonialQuote: e.target.value })} rows={2} className="section-editor__textarea" />
            </Field>
            <Field label="Källa">
              <input data-field-key="testimonialAuthor" type="text" value={values.testimonialAuthor} onChange={(e) => onValuesChange({ testimonialAuthor: e.target.value })} className="section-editor__input" />
            </Field>
          </EditorGroup>
        </div>
      </div>
    </div>
  );
}

function FaqBlock({ values, onValuesChange, sectionOnly }: { values: EditValues; onValuesChange: (v: Partial<EditValues>) => void; sectionOnly?: boolean }) {
  if (sectionOnly) {
    return (
      <div className="section-editor">
        <div className="section-editor__scrollable">
          <div className="section-editor__content">
            <Body size="sm" color="tertiary">Klicka på rubrik eller text i förhandsgranskningen för att redigera innehåll.</Body>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="section-editor">
      <div className="section-editor__scrollable">
        <div className="section-editor__content">
          <EditorGroup title="FAQ">
            <Field label="Rubrik">
              <input data-field-key="faqHeading" type="text" value={values.faqHeading} onChange={(e) => onValuesChange({ faqHeading: e.target.value })} className="section-editor__input" />
            </Field>
            <Field label="Text">
              <textarea data-field-key="faqBody" value={values.faqBody} onChange={(e) => onValuesChange({ faqBody: e.target.value })} rows={2} className="section-editor__textarea" />
            </Field>
          </EditorGroup>
        </div>
      </div>
    </div>
  );
}

function ContactBlock({ values, onValuesChange, sectionOnly }: { values: EditValues; onValuesChange: (v: Partial<EditValues>) => void; sectionOnly?: boolean }) {
  if (sectionOnly) {
    return (
      <div className="section-editor">
        <div className="section-editor__scrollable">
          <div className="section-editor__content">
            <Body size="sm" color="tertiary">Klicka på rubrik eller text i förhandsgranskningen för att redigera innehåll.</Body>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="section-editor">
      <div className="section-editor__scrollable">
        <div className="section-editor__content">
          <EditorGroup title="KONTAKT">
            <Field label="Rubrik">
              <input data-field-key="contactHeading" type="text" value={values.contactHeading} onChange={(e) => onValuesChange({ contactHeading: e.target.value })} className="section-editor__input" />
            </Field>
            <Field label="Text">
              <textarea data-field-key="contactBody" value={values.contactBody} onChange={(e) => onValuesChange({ contactBody: e.target.value })} rows={2} className="section-editor__textarea" />
            </Field>
          </EditorGroup>
        </div>
      </div>
    </div>
  );
}

function DesignBlock({ values, onValuesChange }: { values: EditValues; onValuesChange: (v: Partial<EditValues>) => void }) {
  return (
    <VStack spacing="md">
      <Label size="xs" color="tertiary">Design</Label>
      <Field label="Knappstil">
        <Picker
          size="sm"
          value={values.buttonVariant}
          options={[
            { value: 'accent', label: 'Accent' },
            { value: 'primary', label: 'Primary' },
            { value: 'secondary', label: 'Secondary' },
          ]}
          onChange={(v) => onValuesChange({ buttonVariant: (v ?? values.buttonVariant) as EditValues['buttonVariant'] })}
        />
      </Field>
      <Field label="Kortstil">
        <Picker
          size="sm"
          value={values.cardVariant}
          options={[
            { value: 'outlined', label: 'Outlined' },
            { value: 'elevated', label: 'Elevated' },
            { value: 'default', label: 'Default' },
          ]}
          onChange={(v) => onValuesChange({ cardVariant: (v ?? values.cardVariant) as EditValues['cardVariant'] })}
        />
      </Field>
      <Field label="Kort rundning">
        <Picker
          size="sm"
          value={values.cardRadius}
          options={[
            { value: 'sm', label: 'Liten' },
            { value: 'md', label: 'Mellan' },
            { value: 'lg', label: 'Stor' },
          ]}
          onChange={(v) => onValuesChange({ cardRadius: (v ?? values.cardRadius) as EditValues['cardRadius'] })}
        />
      </Field>
      <Field label="Sektionsavstånd">
        <Picker
          size="sm"
          value={values.sectionSpacing}
          options={[
            { value: 'sm', label: 'Tätt' },
            { value: 'md', label: 'Mellan' },
            { value: 'lg', label: 'Luftigt' },
          ]}
          onChange={(v) => onValuesChange({ sectionSpacing: (v ?? values.sectionSpacing) as EditValues['sectionSpacing'] })}
        />
      </Field>
    </VStack>
  );
}

function SingleFieldView({
  componentKey,
  values,
  onValuesChange,
}: {
  componentKey: string;
  values: EditValues;
  onValuesChange: (v: Partial<EditValues>) => void;
}) {
  const meta = COMPONENT_FIELD_MAP[componentKey];
  if (!meta) return null;
  const value = values[meta.fieldKey];
  const isTextarea = ['heroSubtext', 'servicesBody', 'pricingBody', 'resultsBody', 'statsBody', 'testimonialQuote', 'faqBody', 'contactBody'].includes(meta.fieldKey);
  return (
    <div className="section-editor">
      <div className="section-editor__scrollable">
        <div className="section-editor__content">
          <Field label={meta.label}>
            {isTextarea ? (
              <textarea
                data-field-key={meta.fieldKey}
                value={typeof value === 'string' ? value : ''}
                onChange={(e) => onValuesChange({ [meta.fieldKey]: e.target.value } as Partial<EditValues>)}
                rows={3}
                className="section-editor__textarea"
              />
            ) : (
              <input
                data-field-key={meta.fieldKey}
                type="text"
                value={typeof value === 'string' ? value : ''}
                onChange={(e) => onValuesChange({ [meta.fieldKey]: e.target.value } as Partial<EditValues>)}
                className="section-editor__input"
              />
            )}
          </Field>
        </div>
      </div>
    </div>
  );
}

export function StructureEditorSidebar({ values, onValuesChange, sectionKey, selectedComponentKey, focusedFieldKey, onFocusedFieldCleared }: StructureEditorSidebarProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!focusedFieldKey || !containerRef.current || !onFocusedFieldCleared) return;
    const el = containerRef.current.querySelector(`[data-field-key="${focusedFieldKey}"]`) as HTMLInputElement | HTMLTextAreaElement | null;
    if (el) {
      el.focus();
      el.select?.();
      onFocusedFieldCleared();
    }
  }, [focusedFieldKey, onFocusedFieldCleared]);

  const sectionOnly = sectionKey != null && selectedComponentKey == null;
  /** Klick på logo → visa hela navbar-editorn men markera logo i preview; visa då NavbarBlock istället för endast logotext-fält. */
  const isNavbarLogoSelected = sectionKey === 'navbar' && selectedComponentKey === 'navbar-logoText';
  const showSingleField = selectedComponentKey != null && sectionKey != null && !isNavbarLogoSelected;
  const showNavbarBlock = sectionKey === 'navbar' && (selectedComponentKey == null || isNavbarLogoSelected);
  const showOtherSectionBlocks = sectionKey != null && !selectedComponentKey;

  const content = (
    <div ref={containerRef}>
    <VStack spacing="lg" style={{ paddingTop: 'var(--foundation-space-2)', minHeight: 0, overflow: 'auto' }}>
      {showSingleField && (
        <SingleFieldView
          componentKey={selectedComponentKey!}
          values={values}
          onValuesChange={onValuesChange}
        />
      )}
      {showNavbarBlock && <NavbarBlock values={values} onValuesChange={onValuesChange} sectionOnly={sectionOnly} />}
      {showOtherSectionBlocks && sectionKey !== 'navbar' && (
        <>
      {sectionKey === 'hero' && <HeroBlock values={values} onValuesChange={onValuesChange} sectionOnly={sectionOnly} />}
        </>
      )}
      {!sectionKey && (
        <>
          <DesignBlock values={values} onValuesChange={onValuesChange} />
          <NavbarBlock values={values} onValuesChange={onValuesChange} />
          <HeroBlock values={values} onValuesChange={onValuesChange} />
        </>
      )}
    </VStack>
    </div>
  );
  return content;
}
