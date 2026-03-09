'use client';

import React from 'react';
import { VStack, HStack, Body } from '@blimpify-im/ui';

export type SectionTypeKey =
  | 'Navbar'
  | 'Hero'
  | 'Content'
  | 'Testimonials'
  | 'Statistics'
  | 'CTA'
  | 'Pricing'
  | 'FAQ'
  | 'Footer';

interface SectionPreviewMiniProps {
  type: SectionTypeKey;
  /** Kompakt för små kort (t.ex. i grid), annars lite större för canvas. */
  compact?: boolean;
}

export function SectionPreviewMini({ type, compact = true }: SectionPreviewMiniProps) {
  const base = {
    borderRadius: 'var(--radius-sm)',
    background: 'var(--surface-raised)',
    border: '1px solid var(--border-subtle)',
    overflow: 'hidden' as const,
  };

  const padding = compact ? 'var(--foundation-space-2)' : 'var(--foundation-space-3)';

  switch (type) {
    case 'Navbar':
      return (
        <div style={{ ...base, padding }}>
          <HStack spacing="sm">
            <div style={{ height: 4, width: 24, background: 'var(--border-subtle)', borderRadius: 2 }} />
            <div style={{ height: 4, width: 40, background: 'var(--border-subtle)', borderRadius: 2 }} />
            <div style={{ height: 4, width: 32, background: 'var(--border-subtle)', borderRadius: 2 }} />
          </HStack>
        </div>
      );
    case 'Hero':
      return (
        <div style={{ ...base, padding }}>
          <VStack spacing="xs">
            <div style={{ height: 6, width: '70%', background: 'var(--border-subtle)', borderRadius: 2 }} />
            <div style={{ height: 4, width: '50%', background: 'var(--border-subtle)', borderRadius: 2 }} />
          </VStack>
        </div>
      );
    case 'Content':
      return (
        <div style={{ ...base, padding }}>
          <VStack spacing="xs">
            <div style={{ height: 4, width: '100%', background: 'var(--border-subtle)', borderRadius: 2 }} />
            <div style={{ height: 4, width: '90%', background: 'var(--border-subtle)', borderRadius: 2 }} />
            <div style={{ height: 4, width: '60%', background: 'var(--border-subtle)', borderRadius: 2 }} />
          </VStack>
        </div>
      );
    case 'Testimonials':
      return (
        <div style={{ ...base, padding }}>
          <VStack spacing="xs">
            <div style={{ height: 4, width: '100%', background: 'var(--border-subtle)', borderRadius: 2 }} />
            <Body size="xs" color="tertiary">— Kund</Body>
          </VStack>
        </div>
      );
    case 'Statistics':
      return (
        <div style={{ ...base, padding }}>
          <HStack spacing="sm" justify="center">
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ height: 20, width: 24, background: 'var(--surface-sunken)', borderRadius: 2 }} />
            ))}
          </HStack>
        </div>
      );
    case 'CTA':
      return (
        <div style={{ ...base, padding }}>
          <div style={{ height: 8, width: '60%', margin: '0 auto', background: 'var(--border-default)', borderRadius: 'var(--radius-button)' }} />
        </div>
      );
    case 'Pricing':
      return (
        <div style={{ ...base, padding }}>
          <HStack spacing="xs">
            <div style={{ flex: 1, height: 32, background: 'var(--surface-sunken)', borderRadius: 4 }} />
            <div style={{ flex: 1, height: 32, background: 'var(--surface-sunken)', borderRadius: 4 }} />
          </HStack>
        </div>
      );
    case 'FAQ':
      return (
        <div style={{ ...base, padding }}>
          <VStack spacing="xs">
            <div style={{ height: 4, width: '100%', background: 'var(--border-subtle)', borderRadius: 2 }} />
            <div style={{ height: 4, width: '80%', background: 'var(--border-subtle)', borderRadius: 2 }} />
          </VStack>
        </div>
      );
    case 'Footer':
      return (
        <div style={{ ...base, padding }}>
          <HStack spacing="sm">
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ height: 3, width: 16, background: 'var(--border-subtle)', borderRadius: 2 }} />
            ))}
          </HStack>
        </div>
      );
    default:
      return <div style={{ ...base, padding, minHeight: 24 }} />;
  }
}

export const SECTION_TYPES: SectionTypeKey[] = [
  'Navbar',
  'Hero',
  'Content',
  'Testimonials',
  'Statistics',
  'CTA',
  'Pricing',
  'FAQ',
  'Footer',
];

/** Träd-nyckel (lowercase) till SectionTypeKey. */
export const TREE_KEY_TO_SECTION_TYPE: Record<string, SectionTypeKey> = {
  navbar: 'Navbar',
  hero: 'Hero',
  content: 'Content',
  testimonials: 'Testimonials',
  statistics: 'Statistics',
  cta: 'CTA',
  pricing: 'Pricing',
  faq: 'FAQ',
  footer: 'Footer',
};
