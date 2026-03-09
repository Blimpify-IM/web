/**
 * Hämtar design.json från ett GitHub-template-repo (t.ex. template-26feb21)
 * så att editorn på hemsidan kan använda templatets design som utgångspunkt.
 */
import type { DesignPanelValues } from '@/components/editor-preview/DesignPanelPreview';

const GITHUB_ORG = 'Blimpify-IM';
const DEFAULT_TEMPLATE_REPO = 'template-26feb21';
const FALLBACK_TEMPLATE_REPO = 'template-26feb20';
const DEFAULT_BRANCH = 'main';

interface TemplateDesignJson {
  globalStyles?: {
    themeMode?: 'light' | 'dark' | 'system';
    themeTone?: string;
    accentColor?: string;
    sectionSpacing?: string;
    containerSpacing?: string;
    radius?: string;
    fontPrimary?: string;
    typographyScale?: string;
  };
}

/** Mappar themeTone från design.json (t.ex. "neutral") till UI-värde (t.ex. "pure"). */
function mapThemeTone(tone: string | undefined): DesignPanelValues['themeTone'] {
  if (!tone) return 'mono';
  if (tone === 'neutral') return 'pure';
  const valid: DesignPanelValues['themeTone'][] = [
    'pure', 'graphite', 'mono', 'charcoal', 'steel', 'slate',
    'aqua', 'ink', 'frost', 'violet', 'sage', 'pearl', 'linen', 'ember',
  ];
  return valid.includes(tone as any) ? (tone as DesignPanelValues['themeTone']) : 'mono';
}

function mapRadius(r: string | undefined): DesignPanelValues['radius'] {
  if (!r) return 'md';
  const valid: DesignPanelValues['radius'][] = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'];
  return valid.includes(r as any) ? (r as DesignPanelValues['radius']) : 'md';
}

function mapSpacing(s: string | undefined): DesignPanelValues['sectionSpacing'] {
  if (!s) return 'lg';
  const valid: DesignPanelValues['sectionSpacing'][] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
  return valid.includes(s as any) ? (s as DesignPanelValues['sectionSpacing']) : 'lg';
}

function mapTypographyScale(s: string | undefined): DesignPanelValues['typographyScale'] {
  if (!s) return 'md';
  const valid: DesignPanelValues['typographyScale'][] = ['sm', 'md', 'lg'];
  return valid.includes(s as any) ? (s as DesignPanelValues['typographyScale']) : 'md';
}

export interface FetchTemplateDesignOptions {
  repo?: string;
  branch?: string;
}

/**
 * Hämtar design.json från GitHub (raw) och mappar till DesignPanelValues.
 * Försöker template-26feb21 först, sedan template-26feb20 om det inte finns.
 * Returnerar null vid fel eller om inget repo har design.json.
 */
export async function fetchTemplateDesign(
  options: FetchTemplateDesignOptions = {}
): Promise<Partial<DesignPanelValues> | null> {
  const branch = options.branch ?? DEFAULT_BRANCH;
  const repos = options.repo ? [options.repo] : [DEFAULT_TEMPLATE_REPO, FALLBACK_TEMPLATE_REPO];

  for (const repo of repos) {
    const url = `https://raw.githubusercontent.com/${GITHUB_ORG}/${repo}/${branch}/public/design/design.json`;
    try {
      const res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) continue;
      const data: TemplateDesignJson = await res.json();
      const g = data?.globalStyles;
      if (!g) continue;

      return {
        themeMode: g.themeMode ?? undefined,
        themeTone: mapThemeTone(g.themeTone),
        accentColor: g.accentColor ?? undefined,
        sectionSpacing: mapSpacing(g.sectionSpacing),
        containerSpacing: mapSpacing(g.containerSpacing),
        radius: mapRadius(g.radius),
        fontPrimary: g.fontPrimary ?? undefined,
        typographyScale: mapTypographyScale(g.typographyScale),
      };
    } catch {
      continue;
    }
  }
  return null;
}
