/**
 * NavbarLayoutEditor – exakt samma som i im-dashboard och packages/website-editor.
 * Schema-driven editor för navbar (bar / pill / center-pill). Håll synkad med packages/website-editor.
 */
import React, { useMemo, useCallback } from 'react';
import { Body, VStack, SegmentedControl } from '@blimpify-im/ui';
import { getNavbarPatternSchema } from '@blimpify-im/ui/shells';
import type { PropConfig } from '@blimpify-im/ui';
import { SchemaFieldRenderer } from '../SchemaFieldRenderer/SchemaFieldRenderer';
import '../ComponentEditorStyles.css';

export interface NavbarPropUpdate {
  type: 'navbar' | 'footer';
  sectionKey: string;
  patternKey: string;
  propKey: string;
  value: unknown;
}

export type NavbarVariant = 'bar' | 'pill' | 'center-pill';

export interface NavbarLayoutEditorProps {
  section: {
    section_key: string;
    type: string;
    patterns?: Record<string, { type?: string; props?: Record<string, unknown> }>;
    order?: string[];
  };
  viewport?: string;
  onNavbarPropChanged?: (update: NavbarPropUpdate) => void;
  onNavbarVariantChanged?: (update: { sectionKey: string; patternKey: string; variant: NavbarVariant }) => void;
}

const VARIANT_OPTIONS: { value: NavbarVariant; label: string }[] = [
  { value: 'bar', label: 'Bar' },
  { value: 'pill', label: 'Pill' },
  { value: 'center-pill', label: 'Center' },
];

const groupMetadata: Record<string, { order: number; displayName: string }> = {
  layout: { order: 1, displayName: 'Layout' },
  style: { order: 2, displayName: 'Style' },
  behavior: { order: 3, displayName: 'Behavior' },
  mobile: { order: 4, displayName: 'Mobile' },
};

export const NavbarLayoutEditor: React.FC<NavbarLayoutEditorProps> = ({
  section,
  viewport,
  onNavbarPropChanged,
  onNavbarVariantChanged,
}) => {
  const isMobileViewport = viewport === 'mobile' || viewport === 'tablet';
  const sectionKey = section.section_key;
  const patterns = section.patterns ?? {};
  const patternKey = (section.order ?? Object.keys(patterns))[0];
  const pattern = patternKey ? patterns[patternKey] : null;
  const patternType: string = pattern?.type ?? '';
  const currentProps: Record<string, unknown> = pattern?.props ?? {};

  const schema = useMemo(() => getNavbarPatternSchema(patternType), [patternType]);

  const emit = useCallback(
    (propKey: string, value: unknown) => {
      if (!patternKey) return;
      onNavbarPropChanged?.({
        type: 'navbar',
        sectionKey,
        patternKey,
        propKey,
        value,
      });
    },
    [onNavbarPropChanged, sectionKey, patternKey]
  );

  const handleVariantChange = useCallback(
    (variant: string) => {
      if (!patternKey) return;
      onNavbarVariantChanged?.({ sectionKey, patternKey, variant: variant as NavbarVariant });
    },
    [onNavbarVariantChanged, sectionKey, patternKey]
  );

  const { groupedProps, sortedGroups } = useMemo(() => {
    if (!schema) return { groupedProps: {} as Record<string, Array<[string, PropConfig]>>, sortedGroups: [] as string[] };
    const grouped: Record<string, Array<[string, PropConfig]>> = {};
    Object.entries(schema.layoutProps).forEach(([key, config]) => {
      if (key === 'logoDisplay' || key === 'mobileLogoDisplay') return;
      const c = config as PropConfig;
      if (c.cmsEnabled === false) return;
      const group = (c as PropConfig & { group?: string }).group ?? 'general';
      if (!grouped[group]) grouped[group] = [];
      grouped[group].push([key, c]);
    });
    const sorted = Object.keys(grouped).sort(
      (a, b) => (groupMetadata[a]?.order ?? 999) - (groupMetadata[b]?.order ?? 999)
    );
    return { groupedProps: grouped, sortedGroups: sorted };
  }, [schema]);

  return (
    <div className="component-editor">
      <div className="component-editor__scrollable">
        <div className="component-editor__content" style={{ paddingTop: 'var(--foundation-space-2)' }}>
          <div className="component-editor__group">
            <div className="component-editor__group-title">Variant</div>
            <SegmentedControl
              options={VARIANT_OPTIONS}
              value={patternType as NavbarVariant}
              onChange={handleVariantChange}
              size="sm"
              fullWidth
            />
          </div>

          {!schema && (
            <Body size="sm" color="secondary">
              No schema found for navbar type: {patternType || '(unknown)'}
            </Body>
          )}

          {sortedGroups.map((groupName) => {
            const props = groupedProps[groupName];
            if (!props || props.length === 0) return null;
            if (groupName === 'mobile' && !isMobileViewport) return null;

            return (
              <div key={groupName} className="component-editor__group">
                <div className="component-editor__group-title">
                  {groupMetadata[groupName]?.displayName ?? groupName}
                </div>
                <VStack spacing="md">
                  {props.map(([propKey, propConfig]) => {
                    if (propKey === 'bottomBorderFade' && !currentProps.showBorder) return null;
                    return (
                      <SchemaFieldRenderer
                        key={propKey}
                        propKey={propKey}
                        propConfig={propConfig}
                        value={currentProps[propKey] ?? (propConfig as PropConfig & { default?: unknown }).default}
                        onChange={emit}
                      />
                    );
                  })}
                </VStack>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavbarLayoutEditor;
