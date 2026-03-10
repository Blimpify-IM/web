'use client';

import React from 'react';
import { VStack, Label } from '@blimpify-im/ui';

export type ButtonVariant = 'accent' | 'primary' | 'secondary';
export type CardVariant = 'outlined' | 'elevated' | 'default';
export type CardRadius = 'sm' | 'md' | 'lg';
export type SectionSpacing = 'sm' | 'md' | 'lg';

export interface EditValues {
  heroHeadline: string;
  heroSubtext: string;
  contentHeading: string;
  contentBody: string;
  testimonialQuote: string;
  testimonialAuthor: string;
  ctaHeading: string;
  buttonVariant: ButtonVariant;
  cardVariant: CardVariant;
  cardRadius: CardRadius;
  sectionSpacing: SectionSpacing;
}

export interface StructureEditorSidebarProps {
  values: EditValues;
  onValuesChange: (values: Partial<EditValues>) => void;
}

const inputStyle = {
  padding: 'var(--foundation-space-2) var(--foundation-space-3)',
  minHeight: 44,
  borderRadius: 'var(--radius-button)',
  border: '1px solid var(--border-default)',
  background: 'var(--surface-base)',
  color: 'var(--text-default)',
  fontSize: 'var(--font-body-sm-size)',
  lineHeight: 1.4,
} as const;

const selectStyle = {
  ...inputStyle,
  cursor: 'pointer',
  appearance: 'none' as const,
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M2 4l4 4 4-4'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right var(--foundation-space-3) center',
  paddingRight: 'var(--foundation-space-8)',
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--foundation-space-2)' }}>
      <Label size="sm" color="secondary">{label}</Label>
      {children}
    </label>
  );
}

function Select<T extends string>({
  value,
  options,
  onChange,
  style,
}: {
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
  style?: React.CSSProperties;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
      style={style ?? selectStyle}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  );
}

export function StructureEditorSidebar({ values, onValuesChange }: StructureEditorSidebarProps) {
  return (
    <VStack spacing="lg" style={{ paddingTop: 'var(--foundation-space-2)', minHeight: 0, overflow: 'auto' }}>
      <VStack spacing="md">
        <Label size="xs" color="tertiary">Design</Label>
        <Field label="Knappstil">
          <Select
            value={values.buttonVariant}
            options={[
              { value: 'accent', label: 'Accent' },
              { value: 'primary', label: 'Primary' },
              { value: 'secondary', label: 'Secondary' },
            ]}
            onChange={(v) => onValuesChange({ buttonVariant: v })}
          />
        </Field>
        <Field label="Kortstil">
          <Select
            value={values.cardVariant}
            options={[
              { value: 'outlined', label: 'Outlined' },
              { value: 'elevated', label: 'Elevated' },
              { value: 'default', label: 'Default' },
            ]}
            onChange={(v) => onValuesChange({ cardVariant: v })}
          />
        </Field>
        <Field label="Kort rundning">
          <Select
            value={values.cardRadius}
            options={[
              { value: 'sm', label: 'Liten' },
              { value: 'md', label: 'Mellan' },
              { value: 'lg', label: 'Stor' },
            ]}
            onChange={(v) => onValuesChange({ cardRadius: v })}
          />
        </Field>
        <Field label="Sektionsavstånd">
          <Select
            value={values.sectionSpacing}
            options={[
              { value: 'sm', label: 'Tätt' },
              { value: 'md', label: 'Mellan' },
              { value: 'lg', label: 'Luftigt' },
            ]}
            onChange={(v) => onValuesChange({ sectionSpacing: v })}
          />
        </Field>
      </VStack>

      <VStack spacing="md">
        <Label size="xs" color="tertiary">Hero</Label>
        <Field label="Rubrik">
          <input type="text" value={values.heroHeadline} onChange={(e) => onValuesChange({ heroHeadline: e.target.value })} style={inputStyle} />
        </Field>
        <Field label="Undertext">
          <textarea value={values.heroSubtext} onChange={(e) => onValuesChange({ heroSubtext: e.target.value })} rows={2} style={{ ...inputStyle, resize: 'vertical' }} />
        </Field>
      </VStack>

      <VStack spacing="md">
        <Label size="xs" color="tertiary">Content</Label>
        <Field label="Rubrik">
          <input type="text" value={values.contentHeading} onChange={(e) => onValuesChange({ contentHeading: e.target.value })} style={inputStyle} />
        </Field>
        <Field label="Text">
          <textarea value={values.contentBody} onChange={(e) => onValuesChange({ contentBody: e.target.value })} rows={2} style={{ ...inputStyle, resize: 'vertical' }} />
        </Field>
      </VStack>

      <VStack spacing="md">
        <Label size="xs" color="tertiary">Testimonials</Label>
        <Field label="Citat">
          <textarea value={values.testimonialQuote} onChange={(e) => onValuesChange({ testimonialQuote: e.target.value })} rows={2} style={{ ...inputStyle, resize: 'vertical' }} />
        </Field>
        <Field label="Källa">
          <input type="text" value={values.testimonialAuthor} onChange={(e) => onValuesChange({ testimonialAuthor: e.target.value })} style={inputStyle} />
        </Field>
      </VStack>

      <VStack spacing="md">
        <Label size="xs" color="tertiary">CTA</Label>
        <Field label="Rubrik">
          <input type="text" value={values.ctaHeading} onChange={(e) => onValuesChange({ ctaHeading: e.target.value })} style={inputStyle} />
        </Field>
      </VStack>
    </VStack>
  );
}
