'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Section,
  Container,
  VStack,
  H3,
  H4,
  Body,
  Display,
  Box,
  SegmentedControl,
  type SegmentedControlOption,
  Card,
  CardContent,
  HStack,
  Label,
  SelectionCard,
  Icon,
  Button,
  Tag,
  Input,
  Badge,
  Avatar,
  Progress,
  Spinner,
  Accordion,
  AccordionItem,
  Alert,
  FadeIn,
} from '@blimpify-im/ui';
import { Palette, CaseSensitive, LayoutDashboard, Spline, Car } from 'lucide-react';
import { 
  SunIcon, 
  MoonIcon,
  DocumentTextIcon,
  PaintBrushIcon,
  CursorArrowRaysIcon,
  RectangleGroupIcon,
  TableCellsIcon,
  ViewColumnsIcon,
  PhotoIcon,
  BellAlertIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  ServerIcon,
  LockClosedIcon,
  GlobeAltIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { CheckIcon } from 'lucide-react';

interface SystemBlock {
  title: string;
  description: string;
  showEditor?: boolean;
  showDocumentation?: boolean;
  showStats?: boolean;
}

interface DocCategory {
  id: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  components: Array<{ id: string; label: string }>;
}

const systemBlocks: SystemBlock[] = [
  {
    title: 'A cohesive system',
    description:
      'Your website is built in Blimpify\'s system, which allows us to take full responsibility for design, structure, and overall quality over time.',
    showEditor: true,
  },
  {
    title: 'Design that lasts over time',
    description:
      'A dedicated design and UI system means your website can evolve without losing its expression or needing to be rebuilt.',
    showDocumentation: true,
  },
  {
    title: 'Stable operations that we own',
    description:
      'We are responsible for operations, performance, and security with proven infrastructure so your website is fast and stable.',
    showStats: true,
  },
];

// Documentation Categories (from DocumentationLayout)
const DOC_CATEGORIES: DocCategory[] = [
  {
    id: "typography",
    label: "Typography",
    icon: DocumentTextIcon,
    components: [
      { id: "headings", label: "Headings" },
      { id: "body-text", label: "Body Text" },
      { id: "labels", label: "Labels" },
    ],
  },
  {
    id: "icons",
    label: "Icons",
    icon: PaintBrushIcon,
    components: [
      { id: "icon", label: "Icon" },
    ],
  },
  {
    id: "actions",
    label: "Actions",
    icon: CursorArrowRaysIcon,
    components: [
      { id: "button", label: "Button" },
      { id: "icon-button", label: "IconButton" },
      { id: "clickable", label: "Clickable" },
      { id: "text-link", label: "TextLink" },
      { id: "nav", label: "Nav" },
      { id: "tabs", label: "Tabs" },
      { id: "segmented-control", label: "Segmented Control" },
      { id: "selection-card", label: "SelectionCard" },
      { id: "kbd", label: "Kbd" },
    ],
  },
  {
    id: "navigation",
    label: "Navigation",
    icon: Car,
    components: [
      { id: "breadcrumbs", label: "Breadcrumbs" },
    ],
  },
  {
    id: "forms",
    label: "Forms",
    icon: RectangleGroupIcon,
    components: [
      { id: "input", label: "Input" },
      { id: "textarea", label: "Textarea" },
      { id: "picker", label: "Picker" },
      { id: "checkbox", label: "Checkbox" },
      { id: "radio", label: "Radio" },
      { id: "switch", label: "Switch" },
      { id: "file-uploader", label: "File Uploader" },
      { id: "date-picker", label: "Date Picker" },
      { id: "date-range-picker", label: "Date Range Picker" },
      { id: "slider", label: "Slider" },
    ],
  },
  {
    id: "data-display",
    label: "Data Display",
    icon: TableCellsIcon,
    components: [
      { id: "table", label: "Table" },
      { id: "list", label: "List" },
      { id: "listbox-item", label: "ListboxItem" },
    ],
  },
  {
    id: "charts",
    label: "Charts",
    icon: ChartBarIcon,
    components: [
      { id: "sparkline", label: "Sparkline" },
      { id: "linechart", label: "LineChart" },
      { id: "barchart", label: "BarChart" },
      { id: "areachart", label: "AreaChart" },
      { id: "donutchart", label: "DonutChart" },
    ],
  },
  {
    id: "layout",
    label: "Layout",
    icon: ViewColumnsIcon,
    components: [
      { id: "container", label: "Container" },
      { id: "vstack", label: "VStack" },
      { id: "hstack", label: "HStack" },
      { id: "grid", label: "Grid" },
      { id: "box", label: "Box" },
      { id: "card", label: "Card" },
      { id: "divider", label: "Divider" },
    ],
  },
  {
    id: "overlays",
    label: "Overlays",
    icon: BellAlertIcon,
    components: [
      { id: "modal", label: "Modal" },
      { id: "drawer", label: "Drawer" },
      { id: "popover", label: "Popover" },
      { id: "menu", label: "Menu" },
      { id: "command-menu", label: "Command Menu" },
      { id: "tooltip", label: "Tooltip" },
    ],
  },
  {
    id: "feedback",
    label: "Feedback",
    icon: BellAlertIcon,
    components: [
      { id: "toast", label: "Toast" },
      { id: "tag", label: "Tag" },
      { id: "alert", label: "Alert" },
      { id: "banner", label: "Banner" },
      { id: "spinner", label: "Spinner" },
      { id: "progress", label: "Progress" },
      { id: "loading-skeleton", label: "Loading Skeleton" },
      { id: "badge", label: "Badge" },
    ],
  },
  {
    id: "animations",
    label: "Animations",
    icon: PhotoIcon,
    components: [
      { id: "carousel-animation", label: "Carousel Animation" },
      { id: "count-up", label: "Count Up" },
    ],
  },
  {
    id: "media",
    label: "Media",
    icon: PhotoIcon,
    components: [
      { id: "image", label: "Image" },
      { id: "avatar", label: "Avatar" },
      { id: "logo", label: "Logo" },
    ],
  },
];

// Editor Preview Constants
const TAB_OPTIONS: SegmentedControlOption[] = [
  {
    value: "theme",
    label: "Theme",
    icon: <Palette className="w-4 h-4" />,
  },
  {
    value: "typography",
    label: "Typography",
    icon: <CaseSensitive className="w-4 h-4" />,
  },
  {
    value: "spacing",
    label: "Spacing",
    icon: <LayoutDashboard className="w-4 h-4" />,
  },
  {
    value: "radius",
    label: "Radius",
    icon: <Spline className="w-4 h-4" />,
  },
];

// Accent colors from dashboard - limited to 8 to keep card compact
const ACCENT_COLORS = [
  { value: "blue", label: "Blue", color: "#3B82F6" },
  { value: "purple", label: "Purple", color: "#9333EA" },
  { value: "pink", label: "Pink", color: "#EC4899" },
  { value: "red", label: "Red", color: "#EF4444" },
  { value: "orange", label: "Orange", color: "#F97316" },
  { value: "green", label: "Green", color: "#22C55E" },
  { value: "teal", label: "Teal", color: "#14B8A6" },
  { value: "indigo", label: "Indigo", color: "#7C3AED" },
];

const SPACING_OPTIONS: SegmentedControlOption[] = [
  { value: "xs", label: "XS" },
  { value: "sm", label: "SM" },
  { value: "md", label: "MD" },
  { value: "lg", label: "LG" },
  { value: "xl", label: "XL" },
];

const RADIUS_OPTIONS: SegmentedControlOption[] = [
  { value: "none", label: "None" },
  { value: "sm", label: "SM" },
  { value: "md", label: "MD" },
  { value: "lg", label: "LG" },
  { value: "xl", label: "XL" },
];

// ColorSwatch Component (matching DesignPanel)
interface ColorSwatchProps {
  color: string;
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
  hexColor?: string;
}

function ColorSwatch({ color, label, isSelected = false, onClick, hexColor }: ColorSwatchProps) {
  const backgroundColor = hexColor || (color === 'inverse' ? 'var(--neutral-1200)' : `var(--foundation-${color}-600)`);

  return (
    <SelectionCard
      onClick={onClick}
      selected={isSelected}
      orientation="vertical"
      size="sm"
      indicator="none"
      style={{ cursor: 'pointer' }}
    >
      <VStack spacing="xs" align="center">
        <Box
          style={{
            width: '20px',
            height: '20px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            backgroundColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {isSelected && (
            <Icon size="xs" style={{ color: 'var(--always-white)', filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))' }}>
              <CheckIcon />
            </Icon>
          )}
        </Box>
        <Body size="xs" color="secondary" style={{ textAlign: 'center', textTransform: 'capitalize', fontSize: '10px', lineHeight: 1.2, maxWidth: '50px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {label}
        </Body>
      </VStack>
    </SelectionCard>
  );
}

// ColorGrid Component
interface ColorGridProps {
  colors: Array<{ value: string; label: string; color?: string }>;
  selectedColor?: string;
  onColorSelect?: (color: string) => void;
}

function ColorGrid({ colors, selectedColor, onColorSelect }: ColorGridProps) {
  return (
    <div
      className="color-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 'var(--foundation-space-2)',
        width: '100%',
      }}
    >
      {colors.map((colorItem) => (
        <ColorSwatch
          key={colorItem.value}
          color={colorItem.value}
          label={colorItem.label}
          hexColor={colorItem.color}
          isSelected={selectedColor === colorItem.value}
          onClick={() => onColorSelect?.(colorItem.value)}
        />
      ))}
    </div>
  );
}

// ControlRow Component (matching DesignPanel structure)
interface ControlRowProps {
  label: string;
  children: React.ReactNode;
}

function ControlRow({ label, children }: ControlRowProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--foundation-space-2)' }}>
      <Label size="sm" weight="medium">
        {label}
      </Label>
      <div>{children}</div>
    </div>
  );
}

// Documentation Preview Component - Shows impressive component previews (mobile-optimized)
function DocumentationPreview() {
  return (
    <Box
      className="documentation-preview"
      style={{
        width: '100%',
        height: '100%',
        background: 'var(--surface-raised)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--foundation-space-3)',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <VStack spacing="xs" align="stretch" style={{ width: '100%', flex: 1 }}>
        {/* Compact Button Variants */}
        <Card variant="outlined">
          <CardContent style={{ padding: 'var(--foundation-space-2)' }}>
            <VStack spacing="xs" align="stretch">
              <Label size="xs" color="secondary" style={{ fontSize: '10px' }}>Buttons</Label>
              <HStack spacing="xs" style={{ flexWrap: 'wrap' }}>
                <Button variant="primary" size="sm">Primary</Button>
                <Button variant="accent" size="sm">Accent</Button>
                <Button variant="secondary" size="sm">Secondary</Button>
              </HStack>
            </VStack>
          </CardContent>
        </Card>

        {/* Badge Preview - Simplified */}
        <Card variant="outlined">
          <CardContent style={{ padding: 'var(--foundation-space-2)' }}>
            <VStack spacing="xs" align="stretch">
              <Label size="xs" color="secondary" style={{ fontSize: '10px' }}>Badge</Label>
              <HStack spacing="xs" style={{ flexWrap: 'wrap' }}>
                <Badge content={3} variant="accent">
                  <Button variant="primary" size="sm">Meddelanden</Button>
                </Badge>
                <Badge isDot variant="accent">
                  <Button variant="ghost" size="sm">Online</Button>
                </Badge>
              </HStack>
            </VStack>
          </CardContent>
        </Card>

        {/* Progress Bar - Single */}
        <Card variant="outlined">
          <CardContent style={{ padding: 'var(--foundation-space-2)' }}>
            <VStack spacing="xs" align="stretch">
              <Label size="xs" color="secondary" style={{ fontSize: '10px' }}>Progress</Label>
              <Progress value={75} />
            </VStack>
          </CardContent>
        </Card>

        {/* Interactive - Compact */}
        <Card variant="outlined">
          <CardContent style={{ padding: 'var(--foundation-space-2)' }}>
            <VStack spacing="xs" align="stretch">
              <Label size="xs" color="secondary" style={{ fontSize: '10px' }}>Status</Label>
              <HStack spacing="xs" align="center" style={{ flexWrap: 'wrap' }}>
                <Spinner size="xs" variant="accent" />
                <Tag variant="accent" style={{ fontSize: '10px', padding: '2px 6px' }}>Aktiv</Tag>
              </HStack>
            </VStack>
          </CardContent>
        </Card>

        {/* Component Count Footer */}
        <Box
          style={{
            marginTop: 'auto',
            paddingTop: 'var(--foundation-space-2)',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <Body size="xs" color="tertiary" align="center" style={{ fontSize: '9px' }}>
            {DOC_CATEGORIES.reduce((sum, cat) => sum + cat.components.length, 0)}+ komponenter
          </Body>
        </Box>
      </VStack>
    </Box>
  );
}

// Operations Status Component - Shows control and responsibility, not metrics
function OperationsStatus() {
  return (
    <Box
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <VStack spacing="md" align="stretch" style={{ width: '100%', maxWidth: '320px' }}>
        {/* Drift */}
        <Box
          style={{
            padding: 'var(--foundation-space-4)',
            background: 'var(--surface-raised)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-default)',
          }}
        >
          <HStack spacing="md" align="center" justify="between">
            <HStack spacing="sm" align="center">
              <Icon size="md" color="success">
                <GlobeAltIcon />
              </Icon>
              <Label color="secondary" size="sm">Published</Label>
            </HStack>
            <Tag variant="success" size="small" surface="subtle">Active</Tag>
          </HStack>
        </Box>

        {/* Security */}
        <Box
          style={{
            padding: 'var(--foundation-space-4)',
            background: 'var(--surface-raised)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-default)',
          }}
        >
          <HStack spacing="md" align="center" justify="between">
            <HStack spacing="sm" align="center">
              <Icon size="md" color="success">
                <ShieldCheckIcon />
              </Icon>
              <Label color="secondary" size="sm">Security</Label>
            </HStack>
            <Tag variant="success" size="small" surface="subtle">Protected</Tag>
          </HStack>
        </Box>

        {/* Monitoring */}
        <Box
          style={{
            padding: 'var(--foundation-space-4)',
            background: 'var(--surface-raised)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-default)',
          }}
        >
          <HStack spacing="md" align="center" justify="between">
            <HStack spacing="sm" align="center">
              <Icon size="md" color="success">
                <ServerIcon />
              </Icon>
              <Label color="secondary" size="sm">Monitored</Label>
            </HStack>
            <Tag variant="success" size="small" surface="subtle">Active</Tag>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
}

// Editor Preview Component
function EditorPreview() {
  const [activeTab, setActiveTab] = useState<string>("theme");
  const [themeMode, setThemeMode] = useState<string>("light");
  const [accentColor, setAccentColor] = useState<string>("blue");
  const [spacing, setSpacing] = useState<string>("md");
  const [radius, setRadius] = useState<string>("md");
  const [typographyScale, setTypographyScale] = useState<string>("md");

  return (
    <VStack spacing="md" align="stretch" style={{height: '100%', width: '100%', maxWidth: '100%' }}>
        {/* Segmented Control Tabs */}
        <SegmentedControl
          iconOnly
          options={TAB_OPTIONS}
          value={activeTab}
          onChange={setActiveTab}
          fullWidth
          size="sm"
          tooltipPlacement="bottom"
          className="editor-preview-tabs"
        />

        {/* Tab Content - Fixed height and width to prevent jumping */}
        <Box style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Theme Tab */}
          {activeTab === "theme" && (
            <Box
              style={{
                width: '100%',
                flex: 1,
                background: 'var(--surface-raised)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--foundation-space-4)',
                overflow: 'auto',
              }}
            >
              <VStack spacing="md" align="stretch" style={{height: '100%', width: '100%' }}>
                <ControlRow label="Mode">
                  <Box style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <SegmentedControl
                      iconOnly
                      options={[
                        { value: "light", label: "Light", icon: <SunIcon className="w-4 h-4" /> },
                        { value: "dark", label: "Dark", icon: <MoonIcon className="w-4 h-4" /> },
                      ]}
                      value={themeMode}
                      onChange={setThemeMode}
                      size="sm"
                    />
                  </Box>
                </ControlRow>

                <ControlRow label="Accent Color">
                  <ColorGrid
                    colors={ACCENT_COLORS}
                    selectedColor={accentColor}
                    onColorSelect={setAccentColor}
                  />
                </ControlRow>
              </VStack>
            </Box>
          )}

          {/* Typography Tab */}
          {activeTab === "typography" && (
            <Box
              style={{
                width: '100%',
                height: '100%',
                background: 'var(--surface-raised)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--foundation-space-4)',
              }}
            >
              <VStack spacing="md" align="stretch" style={{ width: '100%' }}>
              <ControlRow label="Typography Scale">
                <SegmentedControl
                  options={[
                    { value: "sm", label: "Small" },
                    { value: "md", label: "Medium" },
                    { value: "lg", label: "Large" },
                  ]}
                  value={typographyScale}
                  onChange={setTypographyScale}
                  fullWidth
                  size="sm"
                />
              </ControlRow>

              <ControlRow label="Preview">
                <Box
                  style={{
                    padding: 'var(--foundation-space-4)',
                    background: 'var(--surface-raised)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-default)',
                    width: '100%',
                  }}
                >
                  <Body size={typographyScale as any} weight="semibold">Heading Text</Body>
                  <Body size={typographyScale === 'sm' ? 'xs' : typographyScale === 'lg' ? 'md' : 'sm'} color="secondary" style={{ marginTop: 'var(--foundation-space-2)' }}>
                    Body text example with {typographyScale} scale
                  </Body>
                </Box>
              </ControlRow>
              </VStack>
            </Box>
          )}

          {/* Spacing Tab */}
          {activeTab === "spacing" && (
            <Box
              style={{
                width: '100%',
                height: '100%',
                background: 'var(--surface-raised)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--foundation-space-4)',
              }}
            >
              <VStack spacing="md" align="stretch" style={{ width: '100%' }}>
              <ControlRow label="Section Spacing">
                <SegmentedControl
                  options={SPACING_OPTIONS}
                  value={spacing}
                  onChange={setSpacing}
                  fullWidth
                  size="sm"
                />
              </ControlRow>

              <ControlRow label="Preview">
                <Box
                  style={{
                    padding: `var(--foundation-space-${spacing === 'xs' ? '4' : spacing === 'sm' ? '6' : spacing === 'md' ? '8' : spacing === 'lg' ? '10' : '12'})`,
                    background: 'var(--surface-raised)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-default)',
                    width: '100%',
                  }}
                >
                  <Body size="sm">Spacing: {spacing.toUpperCase()}</Body>
                </Box>
              </ControlRow>
              </VStack>
            </Box>
          )}

          {/* Radius Tab */}
          {activeTab === "radius" && (
            <Box
              style={{
                width: '100%',
                height: '100%',
                background: 'var(--surface-raised)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--foundation-space-4)',
              }}
            >
              <VStack spacing="md" align="stretch" style={{ width: '100%' }}>
              <ControlRow label="Border Radius">
                <SegmentedControl
                  options={RADIUS_OPTIONS}
                  value={radius}
                  onChange={setRadius}
                  fullWidth
                  size="sm"
                />
              </ControlRow>

              <ControlRow label="Preview">
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))',
                    gap: 'var(--foundation-space-2)',
                    width: '100%',
                  }}
                >
                  {RADIUS_OPTIONS.map((option) => (
                    <SelectionCard
                      key={option.value}
                      selected={radius === option.value}
                      onClick={() => setRadius(option.value)}
                      orientation="vertical"
                      size="sm"
                      indicator="none"
                    >
                      <VStack spacing="xs" align="center">
                        <Box
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: option.value === 'none' ? '0' : `var(--radius-${option.value})`,
                            background: 'var(--surface-accent-subtle)',
                            border: '1px solid var(--border-default)',
                          }}
                        />
                        <Body size="xs" color="secondary" style={{ fontSize: '10px', textAlign: 'center' }}>
                          {option.label}
                        </Body>
                      </VStack>
                    </SelectionCard>
                  ))}
                </div>
              </ControlRow>
              </VStack>
            </Box>
          )}
        </Box>
      </VStack>
  );
}

export function SystemSection() {
  const [isDark, setIsDark] = useState(true); // Default to dark theme first
  const [accentColor, setAccentColor] = useState<string>('blue');

  // Map accent colors to hue-rotate values
  const getHueRotate = (color: string): string => {
    const hueMap: Record<string, string> = {
      blue: '0deg',
      purple: '30deg',
      pink: '90deg',
      red: '120deg',
      orange: '150deg',
      tangerine: '150deg',
      green: '120deg',
      teal: '180deg',
      indigo: '60deg',
      inverse: '0deg',
    };
    return hueMap[color] || '0deg';
  };

  // Detect theme and accent color from document
  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDark(theme === 'dark');
      
      // Get accent color from CSS variable or design.json
      const accentMode = document.documentElement.getAttribute('data-accent-mode');
      if (accentMode === 'inverse') {
        setAccentColor('inverse');
      } else {
        // Try to detect from CSS variable
        const computedStyle = getComputedStyle(document.documentElement);
        const accent500 = computedStyle.getPropertyValue('--foundation-accent-500').trim();
        
        // Map color values to color names (simplified approach)
        // For now, read from design.json via fetch or use a default
        fetch('/design/design.json')
          .then(res => res.json())
          .then(data => {
            setAccentColor(data.globalStyles?.accentColor || 'blue');
          })
          .catch(() => {
            // Fallback: try to detect from CSS
            if (accent500.includes('blue') || accent500.includes('#3B82F6')) {
              setAccentColor('blue');
            } else if (accent500.includes('purple') || accent500.includes('#9333EA')) {
              setAccentColor('purple');
            } else if (accent500.includes('pink') || accent500.includes('#EC4899')) {
              setAccentColor('pink');
            } else {
              setAccentColor('blue');
            }
          });
      }
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'data-accent-mode'],
    });

    return () => observer.disconnect();
  }, []);

  // Determine background image for each block based on theme
  const getBackgroundImage = (index: number) => {
    // First two blocks use section images, third uses cloudy
    if (index === 0) {
      return isDark ? '/assets/section-1-dark.png' : '/assets/section-1.png';
    } else if (index === 1) {
      return isDark ? '/assets/section-2-dark.png' : '/assets/section-2.png';
    } else {
      return isDark ? '/assets/cloudy-dark.png' : '/assets/cloudy.png';
    }
  };

  return (
    <Section
      id="system-section"
      style={{
        background: 'var(--surface-page)',
      }}
    >
      <Container>
        <VStack spacing="3xl">
          {/* Header */}
          <FadeIn>
          <VStack spacing="md" align="center" className="system-section-header" style={{ marginBottom: 'var(--foundation-space-16)' }}>
            <Display size="md" align="center">
              What makes Blimpify different
            </Display>
          </VStack>
          </FadeIn>

          <FadeIn>
          {/* System Blocks - Alternating Card/Text Layout */}
          <VStack spacing="3xl" align="stretch" className="system-blocks-container">
            {systemBlocks.map((block, index) => {
              const isEven = index % 2 === 0;

              return (
                <Box
                  key={index}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 'var(--foundation-space-16)',
                    alignItems: 'center',
                  }}
                  className="system-block-layout"
                >
                  {/* Text Content */}
                  <Box
                    style={{
                      order: isEven ? 1 : 2,
                      maxWidth: '300px',
                    }}
                    className="system-block-text"
                  >
                    <VStack spacing="sm" align="start" className="system-block-text-content">
                      <H3 weight="semibold">{block.title}</H3>
                      <Body size="lg" color="secondary" style={{ lineHeight: 1.7 }}>
                        {block.description}
                      </Body>
                    </VStack>
                  </Box>

                  {/* Editor Preview or Image */}
                  <Box
                    style={{
                      order: isEven ? 2 : 1,
                      width: '100%',
                      maxWidth: '550px',
                      justifySelf: isEven ? 'end' : 'start',
                    }}
                    className="system-block-visual"
                  >
                    <Box
                      style={{
                        position: 'relative',
                        width: '100%',
                        aspectRatio: '1 / 1',
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-strong)',
                        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                      }}
                    >
                      {/* Background Image */}
                      <Image
                        src={getBackgroundImage(index)}
                        alt="Background"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                        style={{
                          objectFit: 'cover',
                          filter: `hue-rotate(${getHueRotate(accentColor)})`,
                        }}
                        priority={index === 0}
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                      
                      {/* Content Overlay - Only for third block (Stats) */}
                      {block.showStats && (
                        <Box
                          style={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 'var(--foundation-space-4)',
                            zIndex: 2,
                            opacity: 0.95,
                          }}
                        >
                          <Box style={{ width: '100%', height: '100%', transform: 'scale(0.85)' }}>
                            <OperationsStatus />
                          </Box>
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </VStack>
          </FadeIn>
        </VStack>
      </Container>

      {/* Responsive Styles */}
      <style jsx global>{`
        /* Custom Scrollbar for Documentation Preview */
        .documentation-preview::-webkit-scrollbar {
          width: 8px;
        }
        
        .documentation-preview::-webkit-scrollbar-track {
          background: var(--surface-subtle);
          border-radius: var(--radius-full);
        }
        
        .documentation-preview::-webkit-scrollbar-thumb {
          background: var(--border-strong);
          border-radius: var(--radius-full);
          border: 2px solid var(--surface-subtle);
        }
        
        .documentation-preview::-webkit-scrollbar-thumb:hover {
          background: var(--icon-accent);
        }
        
        /* Firefox scrollbar */
        .documentation-preview {
          scrollbar-width: thin;
          scrollbar-color: var(--border-strong) var(--surface-subtle);
        }

        /* Mobile optimizations for documentation preview */
        @media (max-width: 768px) {
          .documentation-preview {
            padding: var(--foundation-space-2) !important;
          }
        }

        @media (max-width: 1024px) {
          .system-section-header {
            align-items: flex-start !important;
          }
          
          .system-blocks-container {
            gap: var(--foundation-space-16) !important;
          }
          
          .system-section-header {
            align-items: flex-start !important;
          }
          
          .system-section-header h1,
          .system-section-header h2,
          .system-section-header h3 {
            text-align: left !important;
          }
          
          .system-block-layout {
            grid-template-columns: 1fr !important;
            gap: var(--foundation-space-8) !important;
          }
          
          .system-block-text {
            order: 2 !important;
            max-width: 100% !important;
            width: 100% !important;
          }
          
          .system-block-text-content {
            align-items: flex-start !important;
            text-align: left !important;
          }
          
          .system-block-visual {
            order: 1 !important;
            max-width: 100% !important;
            width: 100% !important;
            justify-self: center !important;
          }
          
          .editor-preview-tabs {
            display: none !important;
          }
          
          .color-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </Section>
  );
}
