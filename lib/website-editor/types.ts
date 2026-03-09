/**
 * Minimal content shape för hero-editorn.
 */
export interface HeroLayout {
  alignSectionHeader?: 'left' | 'center';
  secondColumn?: 'none' | 'action';
  background?: 'default' | 'image';
  backgroundImage?: string;
  backgroundPosition?: string;
  backgroundOpacity?: number;
  backgroundTint?: 'none' | 'accent';
  imageFadeEdge?: 'none' | 'top' | 'bottom' | 'both';
  imageFadeStrength?: number;
}

export interface HeroContent {
  headline?: string;
  subtext?: string;
  ctaText?: string;
}

export interface HeroSectionEditorProps {
  layout: HeroLayout;
  content?: HeroContent;
  onLayoutChange: (layout: Partial<HeroLayout>) => void;
  onContentChange?: (content: Partial<HeroContent>) => void;
  onOpenMediaPicker?: (currentUrl: string) => void;
  /** Ladda upp en fil; returnerar CDN-URL. Används t.ex. i webben för bakgrundsbild. */
  onUploadImage?: (file: File) => Promise<string>;
  resolveImageUrl?: (url: string) => string;
  /** Visa bakgrundsinställningar inline (ingen modal) så förhandsgranskningen syns live. */
  inlineSettings?: boolean;
}

