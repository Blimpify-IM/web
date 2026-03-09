'use client';

/**
 * Visar riktiga sektioner byggda med blimpify-ui.
 * Tar emot innehåll + designval – uppdateras live från höger sidebar.
 */
import React, { useState, useEffect, useRef } from 'react';
import {
  Section,
  Container,
  VStack,
  HStack,
  H2,
  Body,
  Button,
  Card,
  CardContent,
  Label,
  TextLink,
} from '@blimpify-im/ui';
import type { ButtonVariant, CardVariant, CardRadius, SectionSpacing } from './StructureEditorSidebar';

/** Sektionsnycklar enligt template-26feb20 */
export type PreviewSectionKey =
  | 'navbar'
  | 'hero'
  | 'services'
  | 'pricing'
  | 'results'
  | 'stats'
  | 'testimonials'
  | 'faq'
  | 'contact';

/** Nycklar för redigerbara komponenter – matchar EditValues-fält (camelCase → kebab). */
export type EditableComponentKey =
  | 'navbar-logoText'
  | 'hero-headline'
  | 'hero-subtext'
  | 'services-heading'
  | 'services-body'
  | 'pricing-heading'
  | 'pricing-body'
  | 'results-heading'
  | 'results-body'
  | 'stats-heading'
  | 'stats-body'
  | 'testimonial-quote'
  | 'testimonial-author'
  | 'faq-heading'
  | 'faq-body'
  | 'contact-heading'
  | 'contact-body';

/** Wrapper som sätter data-section-key + data-component-key så hover/click matchar dashboarden. */
function EditableBlock({
  sectionKey,
  componentKey,
  children,
  className,
  style,
  /** När false: dubbelklick öppnar bara sidopanelen, ingen inline-redigering (t.ex. logo när bara ikon visas). */
  allowInlineEdit = true,
}: {
  sectionKey: PreviewSectionKey;
  componentKey: EditableComponentKey;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  allowInlineEdit?: boolean;
}) {
  return (
    <span
      data-section-key={sectionKey}
      data-component-key={componentKey}
      data-inline-edit={allowInlineEdit ? 'true' : 'false'}
      className={className}
      style={{ display: 'inline-block', cursor: 'pointer', ...style }}
    >
      {children}
    </span>
  );
}

export interface StructureCanvasPreviewProps {
  /** Vald sektion (för highlight) – sätts vid klick i canvas som i dashboarden */
  selectedSectionKey?: PreviewSectionKey | null;
  navbarLogoText?: string;
  navbarLink1?: string;
  navbarLink2?: string;
  navbarLink3?: string;
  navbarCtaText?: string;
  heroHeadline?: string;
  heroSubtext?: string;
  servicesHeading?: string;
  servicesBody?: string;
  pricingHeading?: string;
  pricingBody?: string;
  resultsHeading?: string;
  resultsBody?: string;
  statsHeading?: string;
  statsBody?: string;
  testimonialQuote?: string;
  testimonialAuthor?: string;
  faqHeading?: string;
  faqBody?: string;
  contactHeading?: string;
  contactBody?: string;
  buttonVariant?: ButtonVariant;
  cardVariant?: CardVariant;
  cardRadius?: CardRadius;
  sectionSpacing?: SectionSpacing;
  fontPrimary?: string;
  typographyScale?: 'sm' | 'md' | 'lg';
  /** Navbar layout: bar = full width, center-pill = logo left + centered links + CTA right, pill = en pill */
  navbarVariant?: 'bar' | 'pill' | 'center-pill';
  /** Navbar bar: horisontell placering av menyn (left, center, right) */
  navbarMenuAlign?: 'left' | 'center' | 'right';
  /** Navbar bakgrund: default, solid, accent, raised, glass, glass-clear, transparent */
  navbarBackgroundVariant?: 'default' | 'solid' | 'accent' | 'raised' | 'glass' | 'glass-clear' | 'transparent';
  navbarShowBorder?: boolean;
  navbarBottomBorderFade?: boolean;
  navbarHideOnScroll?: boolean;
  /** Logo-område: both = text+ikon, logo = endast ikon, text = endast text */
  navbarLogoDisplay?: 'both' | 'logo' | 'text';
  /** Logostorlek i pixlar (32–96) */
  navbarLogoSizePx?: number;
  /** URL till uppladdad logobild (används när Icon eller Both visas) */
  navbarLogoImageUrl?: string;
  /** Mobile drawer: justering av menyn (left, center, right) */
  navbarMobileMenuAlign?: 'left' | 'center' | 'right';
  /** Mobile drawer: logo (both, logo, text) */
  navbarMobileLogoDisplay?: 'both' | 'logo' | 'text';
  /** Mobile drawer: sheet eller fullscreen (pill/center-pill) */
  navbarMobileMenuVariant?: 'sheet' | 'fullscreen';
  /** Hero Header Alignment – styr textens alignment (left/center) */
  heroAlignSectionHeader?: 'left' | 'center';
  /** Hero Right column – none = en kolumn, action = två kolumner med CTA till höger */
  heroRightColumn?: string;
  /** Hero-bakgrundsbild (URL) – visas som cover på hero-sektionen */
  heroBackgroundImage?: string;
  heroBackgroundPosition?: string;
  heroBackgroundOpacity?: number;
  heroBackgroundTint?: 'none' | 'accent';
  heroImageFadeEdge?: 'none' | 'top' | 'bottom' | 'both';
  heroImageFadeStrength?: number;
}

const defaults = {
  navbarLogoText: 'Blimpify',
  navbarLink1: 'Tjänster',
  navbarLink2: 'Priser',
  navbarLink3: 'FAQ',
  navbarCtaText: 'Kontakta mig',
  heroHeadline: 'Välkommen till Vårt Företag',
  heroSubtext: 'Vi erbjuder högkvalitativa tjänster och lösningar som hjälper ditt företag att växa.',
  servicesHeading: 'Våra Tjänster',
  servicesBody: 'Vi erbjuder ett brett utbud av professionella tjänster anpassade efter dina behov.',
  pricingHeading: 'Enkla, transparenta priser',
  pricingBody: 'Välj den plan som passar dina behov.',
  resultsHeading: 'Våra Resultat',
  resultsBody: 'Vi levererar mätbara resultat och dokumenterad framgång för våra kunder.',
  statsHeading: 'Siffror som talar för sig själva',
  statsBody: 'Vi har hjälpt hundratals företag att växa genom autentiskt innehåll.',
  testimonialQuote: 'Incredibly professional and results-driven team. Our ad performance has improved significantly.',
  testimonialAuthor: '— Anna Lindqvist, Trustpilot',
  faqHeading: 'Vanliga frågor',
  faqBody: 'Allt du behöver veta om att arbeta med oss.',
  contactHeading: 'Redo att Komma Igång?',
  contactBody: 'Kontakta oss idag för en kostnadsfri konsultation.',
  buttonVariant: 'accent' as ButtonVariant,
  cardVariant: 'outlined' as CardVariant,
  cardRadius: 'md' as CardRadius,
  sectionSpacing: 'lg' as SectionSpacing,
};

export function StructureCanvasPreview({
  selectedSectionKey = null,
  navbarLogoText = defaults.navbarLogoText,
  navbarLink1 = defaults.navbarLink1,
  navbarLink2 = defaults.navbarLink2,
  navbarLink3 = defaults.navbarLink3,
  navbarCtaText = defaults.navbarCtaText,
  heroHeadline = defaults.heroHeadline,
  heroSubtext = defaults.heroSubtext,
  servicesHeading = defaults.servicesHeading,
  servicesBody = defaults.servicesBody,
  pricingHeading = defaults.pricingHeading,
  pricingBody = defaults.pricingBody,
  resultsHeading = defaults.resultsHeading,
  resultsBody = defaults.resultsBody,
  statsHeading = defaults.statsHeading,
  statsBody = defaults.statsBody,
  testimonialQuote = defaults.testimonialQuote,
  testimonialAuthor = defaults.testimonialAuthor,
  faqHeading = defaults.faqHeading,
  faqBody = defaults.faqBody,
  contactHeading = defaults.contactHeading,
  contactBody = defaults.contactBody,
  buttonVariant = defaults.buttonVariant,
  cardVariant = defaults.cardVariant,
  cardRadius = defaults.cardRadius,
  sectionSpacing = defaults.sectionSpacing,
  fontPrimary = 'Inter',
  typographyScale = 'md',
  navbarVariant = 'bar',
  navbarMenuAlign = 'right',
  navbarBackgroundVariant = 'default',
  navbarShowBorder = true,
  navbarBottomBorderFade = false,
  navbarHideOnScroll = false,
  navbarLogoDisplay = 'both',
  navbarLogoSizePx = 56,
  navbarLogoImageUrl,
  navbarMobileMenuAlign = 'left',
  navbarMobileLogoDisplay = 'both',
  navbarMobileMenuVariant = 'fullscreen',
  heroAlignSectionHeader = 'center',
  heroRightColumn = 'none',
  heroBackgroundImage,
  heroBackgroundPosition = 'center',
  heroBackgroundOpacity = 1,
  heroBackgroundTint = 'none',
  heroImageFadeEdge = 'none',
  heroImageFadeStrength = 0.15,
}: StructureCanvasPreviewProps) {
  const fontStyle = fontPrimary ? { fontFamily: `${fontPrimary}, var(--font-body-family), sans-serif` } : undefined;
  const scaleMultiplier = typographyScale === 'sm' ? 0.9 : typographyScale === 'lg' ? 1.1 : 1;
  const heroAlign = heroAlignSectionHeader === 'left' ? 'start' : heroAlignSectionHeader === 'center' ? 'center' : 'end';
  const hasHeroRightColumn = heroRightColumn === 'action';

  const [navHidden, setNavHidden] = useState(false);
  const lastScrollYRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  useEffect(() => {
    if (!navbarHideOnScroll) return;
    const handleScroll = () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const y = window.scrollY;
        if (y > lastScrollYRef.current && y > 80) setNavHidden(true);
        else setNavHidden(false);
        lastScrollYRef.current = y;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [navbarHideOnScroll]);

  const navbarBgStyle = (): React.CSSProperties => {
    switch (navbarBackgroundVariant) {
      case 'solid':
        return { background: 'var(--surface-base)' };
      case 'accent':
        return { background: 'var(--surface-button-accent, var(--foundation-accent-500))' };
      case 'raised':
        return { background: 'var(--surface-raised)' };
      case 'glass':
        return { background: 'color-mix(in srgb, var(--neutral-1000) 12%, transparent)' };
      case 'glass-clear':
        return { background: 'color-mix(in srgb, var(--neutral-1000) 4%, transparent)' };
      case 'transparent':
        return { background: 'transparent' };
      default:
        return { background: 'var(--surface-base)' };
    }
  };

  const navBorderStyle = (): React.CSSProperties => {
    if (!navbarShowBorder) return { borderBottom: 'none' };
    if (navbarBottomBorderFade)
      return {
        borderBottom: 'none',
        boxShadow: '0 8px 24px -8px color-mix(in srgb, var(--neutral-1000) 18%, transparent)',
      };
    return { borderBottom: '1px solid var(--border-subtle)' };
  };

  /** Center-pill: endast mitten-pillen har bakgrund (som i dashboard); yttre nav är transparent. */
  const isCenterPill = navbarVariant === 'center-pill';
  const navPositionStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: navbarVariant === 'pill' ? 'var(--foundation-space-2) var(--foundation-space-4)' : 'var(--foundation-space-2) var(--foundation-space-6)',
    cursor: 'pointer',
    transition: 'transform 0.25s ease',
    ...(navHidden ? { transform: 'translateY(-100%)' } : {}),
    ...(isCenterPill
      ? { background: 'transparent', borderBottom: 'none', boxShadow: 'none' }
      : { ...navbarBgStyle(), ...navBorderStyle() }),
    ...(navbarVariant === 'pill'
      ? {
          borderRadius: '9999px',
          margin: 'var(--foundation-space-3) var(--foundation-space-6)',
          border: navbarShowBorder ? '1px solid var(--border-subtle)' : '1px solid transparent',
          borderBottom: 'none',
          boxShadow: 'none',
        }
      : {}),
  };

  /** Bakgrund endast på mitten-pillen vid center-pill (matchar dashboard backgroundVariant). */
  const centerPillMiddleStyle: React.CSSProperties = isCenterPill
    ? {
        padding: 'var(--foundation-space-2) var(--foundation-space-4)',
        borderRadius: 9999,
        border: navbarShowBorder ? '1px solid var(--border-subtle)' : '1px solid transparent',
        ...navbarBgStyle(),
      }
    : {};

  const showLogoIcon = navbarLogoDisplay === 'both' || navbarLogoDisplay === 'logo';
  const showLogoText = navbarLogoDisplay === 'both' || navbarLogoDisplay === 'text';
  /** Logostorlek i px (32–40). Tak 40px så navbaren förblir smal – logon croppas i rutan. */
  const logoBoxPx = Math.min(40, Math.max(32, navbarLogoSizePx ?? 36));
  /** Navbarens logo-rad: smal höjd. */
  const LOGO_ROW_HEIGHT_PX = 40;
  /** Använd uppladdad logobild om satt (URL eller data-URL), annars default Blimpify-logotyp */
  const BLIMPIFY_LOGO_URL = 'https://cdn.blimpify-im.com/assets/logo/blimpify-transparent-logo.png';
  const logoImgSrc = navbarLogoImageUrl?.trim()
    ? (navbarLogoImageUrl.startsWith('http') || navbarLogoImageUrl.startsWith('data:')
        ? navbarLogoImageUrl
        : `https://cdn.blimpify-im.com/members${navbarLogoImageUrl}`)
    : BLIMPIFY_LOGO_URL;
  const logoPlaceholder = showLogoIcon ? (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: logoBoxPx,
        height: logoBoxPx,
        flexShrink: 0,
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
      }}
    >
      <img
        src={logoImgSrc}
        alt=""
        width={logoBoxPx}
        height={logoBoxPx}
        className="structure-preview__navbar-logo"
        data-blimpify="navbar-logo"
        style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
        aria-hidden
      />
    </span>
  ) : null;
  const navbarLogoContent = (
    <EditableBlock
      sectionKey="navbar"
      componentKey="navbar-logoText"
      allowInlineEdit={showLogoText}
      style={{
        padding: 'var(--foundation-space-1) var(--foundation-space-2)',
        minHeight: LOGO_ROW_HEIGHT_PX,
        minWidth: showLogoText ? 140 : logoBoxPx + 12,
        borderRadius: 'var(--radius-md)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <HStack spacing="sm" align="center" style={{ minHeight: LOGO_ROW_HEIGHT_PX, minWidth: 0 }}>
        {showLogoIcon && logoPlaceholder}
        {showLogoText && (
          <Label size="md" weight="semibold" color="primary">
            {navbarLogoText}
          </Label>
        )}
      </HStack>
    </EditableBlock>
  );

  const navbarNode = (
    <nav
      data-section-key="navbar"
      data-editor-level="section"
      style={navPositionStyle}
    >
      {navbarVariant === 'center-pill' ? (
        <HStack spacing="md" justify="between" align="center" style={{ width: '100%', maxWidth: 1200, margin: '0 auto' }}>
          {navbarLogoContent}
          <HStack
            spacing="md"
            align="center"
            style={centerPillMiddleStyle}
          >
            <TextLink href="#" variant="accent" size="sm">
              {navbarLink1}
            </TextLink>
            <TextLink href="#" variant="accent" size="sm">
              {navbarLink2}
            </TextLink>
            <TextLink href="#" variant="accent" size="sm">
              {navbarLink3}
            </TextLink>
          </HStack>
          <Button variant="accent" size="sm">
            {navbarCtaText}
          </Button>
        </HStack>
      ) : (
        <HStack spacing="md" justify="between" align="center" style={{ width: '100%', minWidth: 0, flexWrap: 'nowrap' }}>
          {navbarLogoContent}
          {navbarMenuAlign === 'right' ? (
            <HStack spacing="md" align="center" style={{ flexShrink: 0 }}>
              <TextLink href="#" variant="accent" size="sm">
                {navbarLink1}
              </TextLink>
              <TextLink href="#" variant="accent" size="sm">
                {navbarLink2}
              </TextLink>
              <TextLink href="#" variant="accent" size="sm">
                {navbarLink3}
              </TextLink>
              <Button variant="accent" size="sm">
                {navbarCtaText}
              </Button>
            </HStack>
          ) : navbarMenuAlign === 'center' ? (
            <>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center', minWidth: 0 }}>
                <HStack spacing="md" align="center">
                  <TextLink href="#" variant="accent" size="sm">
                    {navbarLink1}
                  </TextLink>
                  <TextLink href="#" variant="accent" size="sm">
                    {navbarLink2}
                  </TextLink>
                  <TextLink href="#" variant="accent" size="sm">
                    {navbarLink3}
                  </TextLink>
                </HStack>
              </div>
              <Button variant="accent" size="sm">
                {navbarCtaText}
              </Button>
            </>
          ) : (
            /* left: logo, länkar grupperade till vänster, sedan spacer, sedan CTA */
            <>
              <HStack spacing="md" align="center" style={{ flexShrink: 0 }}>
                <TextLink href="#" variant="accent" size="sm">
                  {navbarLink1}
                </TextLink>
                <TextLink href="#" variant="accent" size="sm">
                  {navbarLink2}
                </TextLink>
                <TextLink href="#" variant="accent" size="sm">
                  {navbarLink3}
                </TextLink>
              </HStack>
              <div style={{ flex: 1, minWidth: 8 }} aria-hidden />
              <Button variant="accent" size="sm">
                {navbarCtaText}
              </Button>
            </>
          )}
        </HStack>
      )}
    </nav>
  );

  // Exakt som dashboard WebsiteRenderer: div (bara background) → Navbar → main → Section(hero, applyNavbarVoid).
  return (
    <div style={{ background: 'var(--surface-base)', ...fontStyle, fontSize: scaleMultiplier !== 1 ? `calc(1em * ${scaleMultiplier})` : undefined, ['--navbar-void' as string]: '5rem' }}>
      {navbarNode}
      <main>
        <Section
        sectionKey="hero"
        data-editor-level="section"
        spacing={sectionSpacing}
        height="75vh"
        contentPosition="center"
        applyNavbarVoid
        background={heroBackgroundImage ? 'image' : undefined}
        backgroundImage={heroBackgroundImage || undefined}
        backgroundSize="cover"
        backgroundPosition={heroBackgroundPosition}
        backgroundOpacity={heroBackgroundOpacity}
        backgroundTint={heroBackgroundTint}
        imageFadeEdge={heroImageFadeEdge}
        imageFadeStrength={heroImageFadeStrength}
        style={{ cursor: 'pointer' }}
      >
        <Container spacing="md" style={{ width: '100%' }}>
          {hasHeroRightColumn ? (
            <HStack spacing="lg" align="center" justify="between" wrap style={{ width: '100%', alignItems: heroAlign === 'center' ? 'center' : heroAlign === 'start' ? 'flex-start' : 'flex-end' }}>
              <VStack spacing="md" align={heroAlign} style={{ flex: 1, minWidth: 0 }}>
                <EditableBlock sectionKey="hero" componentKey="hero-headline">
                  <H2 weight="bold" align={heroAlignSectionHeader}>
                    {heroHeadline}
                  </H2>
                </EditableBlock>
                <EditableBlock sectionKey="hero" componentKey="hero-subtext">
                  <Body size="md" color="secondary" align={heroAlignSectionHeader}>
                    {heroSubtext}
                  </Body>
                </EditableBlock>
              </VStack>
              <div style={{ flexShrink: 0 }}>
                <Button variant="accent" size="md">
                  Kom igång
                </Button>
              </div>
            </HStack>
          ) : (
            <VStack spacing="md" align={heroAlign}>
              <EditableBlock sectionKey="hero" componentKey="hero-headline">
                <H2 weight="bold" align={heroAlignSectionHeader}>
                  {heroHeadline}
                </H2>
              </EditableBlock>
              <EditableBlock sectionKey="hero" componentKey="hero-subtext">
                <Body size="md" color="secondary" align={heroAlignSectionHeader}>
                  {heroSubtext}
                </Body>
              </EditableBlock>
              <Button variant="accent" size="md">
                Kom igång
              </Button>
            </VStack>
          )}
        </Container>
      </Section>
      </main>
    </div>
  );
}
