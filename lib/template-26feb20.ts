/**
 * Hårdkodad template-26feb20 – struktur, innehåll och design.
 * Används som utgångspunkt för struktureditorn utan att hämta från GitHub.
 */
import type { EditValues } from '@/components/editor-preview/StructureEditorSidebar';
import type { DesignPanelValues } from '@/components/editor-preview/DesignPanelPreview';

/** Sektionsordning – endast navbar och hero. */
export const TEMPLATE_26FEB20_SECTION_ORDER = ['navbar', 'hero'] as const;

export type Template26Feb20SectionKey = (typeof TEMPLATE_26FEB20_SECTION_ORDER)[number];

export const TEMPLATE_26FEB20_LABELS: Record<Template26Feb20SectionKey, string> = {
  navbar: 'Navbar',
  hero: 'Hero',
};

/** Innehåll från template-26feb20 public/content/sv (navbar + start-sida) */
export const TEMPLATE_26FEB20_EDIT_VALUES: EditValues = {
  navbarLogoText: 'DITT FÖRETAG',
  navbarLink1: 'Tjänster',
  navbarLink2: 'Priser',
  navbarLink3: 'Faq',
  navbarCtaText: 'Kontakta mig',
  navbarVariant: 'center-pill',
  navbarMenuAlign: 'right',
  navbarBackgroundVariant: 'default',
  navbarShowBorder: true,
  navbarBottomBorderFade: false,
  navbarHideOnScroll: false,
  navbarLogoDisplay: 'both',
  navbarLogoSizePx: 36,
  navbarLogoImageUrl: '',
  navbarMobileMenuAlign: 'left',
  navbarMobileLogoDisplay: 'both',
  navbarMobileMenuVariant: 'fullscreen',
  heroHeadline: 'Välkommen till Vårt Företag',
  heroSubtext:
    'Vi erbjuder högkvalitativa tjänster och lösningar som hjälper ditt företag att växa och lyckas. Med vår expertis och engagemang levererar vi resultat som överträffar förväntningar.',
  heroAlignSectionHeader: 'center',
  heroRightColumn: 'none',
  heroBackgroundImage: '',
  heroBackgroundPosition: 'center',
  heroBackgroundOpacity: 1,
  heroBackgroundTint: 'none',
  heroImageFadeEdge: 'none',
  heroImageFadeStrength: 0.15,
  servicesHeading: 'Våra Tjänster',
  servicesBody:
    'Vi erbjuder ett brett utbud av professionella tjänster anpassade efter dina behov och mål.',
  pricingHeading: 'Enkla, transparenta priser',
  pricingBody:
    'Välj den plan som passar dina behov. Alla planer inkluderar fullständiga användningsrättigheter och dedikerad kontohantering.',
  resultsHeading: 'Våra Resultat',
  resultsBody: 'Vi levererar mätbara resultat och dokumenterad framgång för våra kunder.',
  statsHeading: 'Siffror som talar för sig själva',
  statsBody:
    'Vi har hjälpt hundratals företag att växa genom autentiskt innehåll som konverterar.',
  testimonialQuote:
    'Incredibly professional and results-driven team. Our ad performance has improved significantly — the content feels authentic and converts really well.',
  testimonialAuthor: '— Anna Lindqvist, Trustpilot',
  faqHeading: 'Vanliga frågor',
  faqBody:
    'Allt du behöver veta om att arbeta med oss. Kan du inte hitta svaret du letar efter? Tveka inte att höra av dig.',
  contactHeading: 'Redo att Komma Igång?',
  contactBody:
    'Kontakta oss idag för en kostnadsfri konsultation. Vi hjälper dig att hitta rätt lösning för dina behov.',
  buttonVariant: 'accent',
  cardVariant: 'outlined',
  cardRadius: 'md',
  sectionSpacing: 'lg',
};

/** Design från template-26feb20 public/design/design.json */
export const TEMPLATE_26FEB20_DESIGN_VALUES: DesignPanelValues = {
  themeMode: 'system',
  themeTone: 'mono',
  accentColor: 'inverse',
  sectionSpacing: 'md',
  containerSpacing: 'lg',
  navbarSpacing: 'xl',
  layoutContent: 'xl',
  layoutMedia: 'xl',
  formWidth: 'md',
  radius: 'lg',
  fontPrimary: 'Sora',
  fontSecondary: 'Sora',
  typographyScale: 'lg',
  fontWeightHeadingNumeric: 700,
  fontWeightBodyNumeric: 500,
  fontWeightLabelNumeric: 600,
};
