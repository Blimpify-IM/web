/**
 * Shared types for website-editor (Hero section etc.)
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

export interface HeroSectionEditorContent {
  headline?: string;
  subtext?: string;
}

export interface HeroSectionEditorProps {
  layout: Partial<HeroLayout>;
  content?: HeroSectionEditorContent | null;
  onLayoutChange: (layout: Partial<HeroLayout>) => void;
  onContentChange?: (content: Partial<HeroSectionEditorContent>) => void;
  onOpenMediaPicker?: (currentUrl: string) => void;
  onUploadImage?: (file: File) => void | Promise<void>;
  resolveImageUrl?: (url: string) => string;
}
