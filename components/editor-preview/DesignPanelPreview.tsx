'use client';

/**
 * Design-panel – exakt samma upplägg och kontroller som im-dashboard ThemeControlPanel:
 * flikar Theme, Typography, Spacing & layout, Radius. Samma etiketter, samma ColorGrid/Slider/Picker.
 */
import React, { useState, useRef, useEffect } from 'react';
import {
  SegmentedControl,
  Picker,
  Box,
  VStack,
  Body,
  Icon,
  SelectionCard,
  Slider,
  type SegmentedControlOption,
  type PickerOption,
} from '@blimpify-im/ui';
import { Palette, CaseSensitive, LayoutDashboard, Spline } from 'lucide-react';
import { CheckIcon } from 'lucide-react';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import './ThemeControlPanel.css';

export type DesignPanelTab = 'theme' | 'typography' | 'spacing' | 'radius';

export type SpacingScale = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type LayoutScale = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type RadiusScale = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export interface DesignPanelValues {
  themeMode: 'light' | 'dark' | 'system';
  themeTone: string;
  accentColor: string;
  sectionSpacing: SpacingScale;
  containerSpacing: SpacingScale;
  navbarSpacing: SpacingScale;
  layoutContent: LayoutScale;
  layoutMedia: LayoutScale;
  formWidth: LayoutScale;
  radius: RadiusScale;
  fontPrimary: string;
  fontSecondary: string;
  typographyScale: 'sm' | 'md' | 'lg';
  fontWeightHeadingNumeric?: number;
  fontWeightBodyNumeric?: number;
  fontWeightLabelNumeric?: number;
}

const DEFAULT_VALUES: DesignPanelValues = {
  themeMode: 'light',
  themeTone: 'mono',
  accentColor: 'blue',
  sectionSpacing: 'lg',
  containerSpacing: 'md',
  navbarSpacing: 'md',
  layoutContent: 'lg',
  layoutMedia: 'lg',
  formWidth: 'md',
  radius: 'md',
  fontPrimary: 'Inter',
  fontSecondary: 'Inter',
  typographyScale: 'md',
  fontWeightHeadingNumeric: 700,
  fontWeightBodyNumeric: 400,
  fontWeightLabelNumeric: 500,
};

interface ColorOption {
  value: string;
  label: string;
  color?: string;
}

/** Samma som im-dashboard themeConstants THEME_TONE_OPTIONS (15 toner) */
const THEME_TONE_OPTIONS: ColorOption[] = [
  { value: 'pure', label: 'Pure', color: '#bcbcbc' },
  { value: 'graphite', label: 'Graphite', color: '#bbb9b9' },
  { value: 'mono', label: 'Mono', color: '#bbb8b8' },
  { value: 'charcoal', label: 'Charcoal', color: '#bbbab8' },
  { value: 'steel', label: 'Steel', color: '#b8babc' },
  { value: 'slate', label: 'Slate', color: '#b6babe' },
  { value: 'aqua', label: 'Aqua', color: '#a3bac8' },
  { value: 'ink', label: 'Ink', color: '#abb7c8' },
  { value: 'frost', label: 'Frost', color: '#acbec2' },
  { value: 'violet', label: 'Violet', color: '#baafc8' },
  { value: 'sage', label: 'Sage', color: '#b2c1b2' },
  { value: 'pearl', label: 'Pearl', color: '#bfbaaf' },
  { value: 'linen', label: 'Linen', color: '#c2b5a8' },
  { value: 'ember', label: 'Ember', color: '#c5b2a1' },
];

/** Samma som im-dashboard themeConstants ACCENT_COLOR_OPTIONS */
const ACCENT_COLOR_OPTIONS: ColorOption[] = [
  { value: 'inverse', label: 'Inverse' },
  { value: 'red', label: 'Red' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'orange', label: 'Orange' },
  { value: 'tangerine', label: 'Tangerine' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'honey', label: 'Honey' },
  { value: 'green', label: 'Green' },
  { value: 'emerald', label: 'Emerald' },
  { value: 'teal', label: 'Teal' },
  { value: 'azure', label: 'Azure' },
  { value: 'blue', label: 'Blue' },
  { value: 'indigo', label: 'Indigo' },
  { value: 'purple', label: 'Purple' },
  { value: 'pink', label: 'Pink' },
];

/** Samma som im-dashboard themeConstants FONT_OPTIONS */
const FONT_OPTIONS: PickerOption[] = [
  { value: 'Inter', label: 'Inter' },
  { value: 'Sora', label: 'Sora' },
  { value: 'Outfit', label: 'Outfit' },
  { value: 'Plus Jakarta Sans', label: 'Plus Jakarta Sans' },
  { value: 'DM Sans', label: 'DM Sans' },
  { value: 'Manrope', label: 'Manrope' },
  { value: 'Space Grotesk', label: 'Space Grotesk' },
  { value: 'Work Sans', label: 'Work Sans' },
  { value: 'Satoshi', label: 'Satoshi' },
  { value: 'Bricolage Grotesque', label: 'Bricolage Grotesque' },
  { value: 'Geist Sans', label: 'Geist Sans' },
  { value: 'Public Sans', label: 'Public Sans' },
  { value: 'Red Hat Display', label: 'Red Hat Display' },
  { value: 'Lexend', label: 'Lexend' },
  { value: 'Urbanist', label: 'Urbanist' },
  { value: 'Cabinet Grotesk', label: 'Cabinet Grotesk' },
  { value: 'Poppins', label: 'Poppins' },
  { value: 'Montserrat', label: 'Montserrat' },
  { value: 'Nunito', label: 'Nunito' },
  { value: 'Quicksand', label: 'Quicksand' },
  { value: 'Raleway', label: 'Raleway' },
  { value: 'Rubik', label: 'Rubik' },
  { value: 'Jost', label: 'Jost' },
  { value: 'Playfair Display', label: 'Playfair Display' },
  { value: 'Libre Baskerville', label: 'Libre Baskerville' },
  { value: 'Lora', label: 'Lora' },
  { value: 'Merriweather', label: 'Merriweather' },
  { value: 'Crimson Pro', label: 'Crimson Pro' },
  { value: 'Fraunces', label: 'Fraunces' },
  { value: 'IBM Plex Sans', label: 'IBM Plex Sans' },
  { value: 'JetBrains Mono', label: 'JetBrains Mono' },
  { value: 'Roboto', label: 'Roboto' },
  { value: 'Open Sans', label: 'Open Sans' },
  { value: 'Source Sans 3', label: 'Source Sans 3' },
  { value: 'Noto Sans', label: 'Noto Sans' },
];

/** Samma som editorn: Theme, Typography, Spacing & layout, Radius. Exporteras för sidebar header. */
export const DESIGN_TAB_OPTIONS: SegmentedControlOption[] = [
  { value: 'theme', label: 'Theme', icon: <Palette /> },
  { value: 'typography', label: 'Typography', icon: <CaseSensitive /> },
  { value: 'spacing', label: 'Spacing & layout', icon: <LayoutDashboard /> },
  { value: 'radius', label: 'Radius', icon: <Spline /> },
];

const SPACING_OPTIONS: SegmentedControlOption[] = [
  { value: 'xs', label: 'XS' },
  { value: 'sm', label: 'SM' },
  { value: 'md', label: 'MD' },
  { value: 'lg', label: 'LG' },
  { value: 'xl', label: 'XL' },
  { value: '2xl', label: '2XL' },
];

const LAYOUT_OPTIONS: SegmentedControlOption[] = [
  { value: 'xs', label: 'XS' },
  { value: 'sm', label: 'SM' },
  { value: 'md', label: 'MD' },
  { value: 'lg', label: 'LG' },
  { value: 'xl', label: 'XL' },
];

const TYPOGRAPHY_SCALE_OPTIONS: SegmentedControlOption[] = [
  { value: 'sm', label: 'Small' },
  { value: 'md', label: 'Medium' },
  { value: 'lg', label: 'Large' },
];

const RADIUS_SLIDER_MAP: RadiusScale[] = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'];

function ControlSection({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className ? `theme-control-section ${className}` : 'theme-control-section'}>
      {title ? <h4 className="theme-control-section__title">{title}</h4> : null}
      <div className="theme-control-section__content">{children}</div>
    </div>
  );
}

function ControlRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="theme-control-row">
      <span className="theme-control-row__label">{label}</span>
      <div className="theme-control-row__control">{children}</div>
    </div>
  );
}

function ColorSwatch({
  color,
  label,
  isSelected,
  onClick,
  hexColor,
}: {
  color: string;
  label: string;
  isSelected: boolean;
  onClick: () => void;
  hexColor?: string;
}) {
  const backgroundColor = hexColor
    ? hexColor
    : color === 'inverse'
      ? 'var(--neutral-1200)'
      : `var(--foundation-${color}-600)`;
  return (
    <SelectionCard
      onClick={onClick}
      selected={isSelected}
      orientation="vertical"
      size="sm"
      indicator="none"
      className="color-swatch"
    >
      <VStack spacing="xs" align="center">
        <Box className="color-swatch__circle" style={{ backgroundColor, position: 'relative' }}>
          {isSelected && (
            <Icon size="xs" className="color-swatch__check">
              <CheckIcon />
            </Icon>
          )}
        </Box>
        <Body size="xs" color="secondary" className="color-swatch__label">
          {label}
        </Body>
      </VStack>
    </SelectionCard>
  );
}

function ColorGrid({
  colors,
  selectedColor,
  onColorSelect,
  columns,
}: {
  colors: ColorOption[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
  columns?: number;
}) {
  return (
    <div
      className="color-grid"
      role="group"
      aria-label="Färgval"
      style={{
        display: 'grid',
        gridTemplateColumns: columns ? `repeat(${columns}, 1fr)` : 'repeat(auto-fit, minmax(60px, 1fr))',
        gap: 'var(--foundation-space-2)',
      }}
    >
      {colors.map((item) => (
        <ColorSwatch
          key={item.value}
          color={item.value}
          label={item.label}
          hexColor={item.color}
          isSelected={selectedColor === item.value}
          onClick={() => onColorSelect(item.value)}
        />
      ))}
    </div>
  );
}

export interface DesignPanelPreviewProps {
  values?: Partial<DesignPanelValues>;
  onChange?: (values: Partial<DesignPanelValues>) => void;
  /** När satt: flikar visas i sidebar header (som i dashboard), inte i panelen. */
  tab?: DesignPanelTab;
  onTabChange?: (tab: DesignPanelTab) => void;
}

export function DesignPanelPreview({ values: controlledValues, onChange, tab: tabProp, onTabChange }: DesignPanelPreviewProps) {
  const [internalTab, setInternalTab] = useState<DesignPanelTab>('theme');
  const [uncontrolledValues, setUncontrolledValues] = useState<DesignPanelValues>(DEFAULT_VALUES);
  const panelRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const isControlled = controlledValues !== undefined;
  const t: DesignPanelValues = { ...DEFAULT_VALUES, ...(isControlled ? controlledValues : uncontrolledValues) };

  const tab = tabProp ?? internalTab;
  const setTab = (v: DesignPanelTab) => {
    if (onTabChange) onTabChange(v);
    else setInternalTab(v);
  };

  const update = (key: keyof DesignPanelValues, value: unknown) => {
    const next = { ...t, [key]: value };
    if (!isControlled) setUncontrolledValues(next);
    onChange?.({ [key]: value } as Partial<DesignPanelValues>);
  };

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const scrollContainer =
      el.closest('.framer-editor-panel__content') ?? el.closest('.sidebar__content') ?? el.closest('[style*="overflow"]') ?? el.parentElement;
    if (!scrollContainer) return;
    const handleScroll = () => setIsScrolled((scrollContainer as HTMLElement).scrollTop > 10);
    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const radiusIndex = RADIUS_SLIDER_MAP.indexOf(t.radius);
  const radiusValue = radiusIndex >= 0 ? radiusIndex : 3;

  const showTabsInPanel = !tabProp && !onTabChange;

  return (
    <div className="theme-control-panel" ref={panelRef}>
      {showTabsInPanel && (
        <div className={`theme-control-panel__tabs ${isScrolled ? 'theme-control-panel__tabs--scrolled' : ''}`}>
          <SegmentedControl
            iconOnly
            options={DESIGN_TAB_OPTIONS}
            value={tab}
            onChange={(v) => setTab(v as DesignPanelTab)}
            fullWidth
          />
        </div>
      )}
      <div className="theme-control-panel__content">
        {tab === 'theme' && (
          <ControlSection title="" className="theme-control-section--theme">
            <ControlRow label="Mode">
              <SegmentedControl
                iconOnly
                options={[
                  { value: 'light', label: 'Light', icon: <SunIcon className="w-4 h-4" /> },
                  { value: 'dark', label: 'Dark', icon: <MoonIcon className="w-4 h-4" /> },
                  { value: 'system', label: 'System', icon: <ComputerDesktopIcon className="w-4 h-4" /> },
                ]}
                value={t.themeMode}
                onChange={(v) => update('themeMode', v as DesignPanelValues['themeMode'])}
                fullWidth
              />
            </ControlRow>
            <ControlRow label="Tone">
              <ColorGrid colors={THEME_TONE_OPTIONS} selectedColor={t.themeTone} onColorSelect={(v) => update('themeTone', v)} />
            </ControlRow>
            <ControlRow label="Accent Color">
              <ColorGrid colors={ACCENT_COLOR_OPTIONS} selectedColor={t.accentColor} onColorSelect={(v) => update('accentColor', v)} />
            </ControlRow>
          </ControlSection>
        )}

        {tab === 'typography' && (
          <ControlSection title="Typography">
            <ControlRow label="Primary Font">
              <Picker
                options={FONT_OPTIONS}
                searchable
                searchPlaceholder="Choose a primary font..."
                value={t.fontPrimary}
                onChange={(v) => update('fontPrimary', v ?? t.fontPrimary)}
                size="sm"
              />
            </ControlRow>
            <ControlRow label="Secondary Font">
              <Picker
                options={FONT_OPTIONS}
                searchable
                searchPlaceholder="Choose a secondary font..."
                value={t.fontSecondary}
                onChange={(v) => update('fontSecondary', v ?? t.fontSecondary)}
                size="sm"
              />
            </ControlRow>
            <ControlRow label="Scale">
              <SegmentedControl
                options={TYPOGRAPHY_SCALE_OPTIONS}
                value={t.typographyScale}
                onChange={(v) => update('typographyScale', v as DesignPanelValues['typographyScale'])}
                fullWidth
              />
            </ControlRow>
            <ControlRow label="Heading weight">
              <Slider
                value={t.fontWeightHeadingNumeric ?? 700}
                onChange={(value) => update('fontWeightHeadingNumeric', Array.isArray(value) ? value[0] : value)}
                minValue={100}
                maxValue={900}
                step={100}
                showSteps
                marks={[100, 200, 300, 400, 500, 600, 700, 800, 900].map((v) => ({ value: v, label: String(v) }))}
              />
            </ControlRow>
            <ControlRow label="Body weight">
              <Slider
                value={t.fontWeightBodyNumeric ?? 400}
                onChange={(value) => update('fontWeightBodyNumeric', Array.isArray(value) ? value[0] : value)}
                minValue={100}
                maxValue={900}
                step={100}
                showSteps
                marks={[100, 200, 300, 400, 500, 600, 700, 800, 900].map((v) => ({ value: v, label: String(v) }))}
              />
            </ControlRow>
            <ControlRow label="Label weight">
              <Slider
                value={t.fontWeightLabelNumeric ?? 500}
                onChange={(value) => update('fontWeightLabelNumeric', Array.isArray(value) ? value[0] : value)}
                minValue={100}
                maxValue={900}
                step={100}
                showSteps
                marks={[100, 200, 300, 400, 500, 600, 700, 800, 900].map((v) => ({ value: v, label: String(v) }))}
              />
            </ControlRow>
          </ControlSection>
        )}

        {tab === 'spacing' && (
          <ControlSection title="Spacing">
            <ControlRow label="Section">
              <SegmentedControl
                options={SPACING_OPTIONS}
                value={t.sectionSpacing}
                onChange={(v) => update('sectionSpacing', v as SpacingScale)}
                size="sm"
                fullWidth
              />
            </ControlRow>
            <ControlRow label="Container">
              <SegmentedControl
                options={SPACING_OPTIONS}
                value={t.containerSpacing}
                onChange={(v) => update('containerSpacing', v as SpacingScale)}
                size="sm"
                fullWidth
              />
            </ControlRow>
            <ControlRow label="Navbar">
              <SegmentedControl
                options={SPACING_OPTIONS}
                value={t.navbarSpacing}
                onChange={(v) => update('navbarSpacing', v as SpacingScale)}
                size="sm"
                fullWidth
              />
            </ControlRow>
            <ControlSection title="Layout">
              <ControlRow label="Content Width">
                <SegmentedControl
                  options={LAYOUT_OPTIONS}
                  value={t.layoutContent}
                  onChange={(v) => update('layoutContent', v as LayoutScale)}
                  size="sm"
                  fullWidth
                />
              </ControlRow>
              <ControlRow label="Media Width">
                <SegmentedControl
                  options={LAYOUT_OPTIONS}
                  value={t.layoutMedia}
                  onChange={(v) => update('layoutMedia', v as LayoutScale)}
                  size="sm"
                  fullWidth
                />
              </ControlRow>
              <ControlRow label="Form Width">
                <SegmentedControl
                  options={LAYOUT_OPTIONS}
                  value={t.formWidth}
                  onChange={(v) => update('formWidth', v as LayoutScale)}
                  size="sm"
                  fullWidth
                />
              </ControlRow>
            </ControlSection>
          </ControlSection>
        )}

        {tab === 'radius' && (
          <ControlSection title="Border Radius">
            <ControlRow label="Radius Scale">
              <Slider
                value={radiusValue}
                onChange={(value) => {
                  const n = Array.isArray(value) ? value[0] : value;
                  const idx = Math.round(n);
                  update('radius', RADIUS_SLIDER_MAP[Math.max(0, Math.min(idx, 7))] ?? 'md');
                }}
                minValue={0}
                maxValue={7}
                step={1}
                showSteps
                marks={[
                  { value: 0, label: 'None' },
                  { value: 1, label: 'XS' },
                  { value: 2, label: 'SM' },
                  { value: 3, label: 'MD' },
                  { value: 4, label: 'LG' },
                  { value: 5, label: 'XL' },
                  { value: 6, label: '2XL' },
                  { value: 7, label: 'Full' },
                ]}
              />
            </ControlRow>
          </ControlSection>
        )}
      </div>
    </div>
  );
}
