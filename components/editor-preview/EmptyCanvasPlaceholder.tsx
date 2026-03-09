'use client';

import React from 'react';
import { Body, VStack } from '@blimpify-im/ui';

/** Sektionstyper som matchar pattern gallery (SECTION_CATEGORIES) – för visuella förslag. */
const SECTION_TYPE_LABELS = [
  'Hero',
  'About',
  'Services',
  'Testimonials',
  'FAQ',
  'Pricing',
  'CTA',
];

export function EmptyCanvasPlaceholder() {
  return (
    <VStack
      spacing="lg"
      align="center"
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 'var(--foundation-space-6)',
        minHeight: 200,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 360,
          minHeight: 120,
          border: '1px dashed var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--surface-ground)',
        }}
      >
        <Body size="sm" color="tertiary">
          Släpp sektion här eller klicka på &quot;Lägg till sektion&quot; i panelen till vänster
        </Body>
      </div>
      <Body size="xs" color="tertiary">
        Sektionstyper från galleriet: {SECTION_TYPE_LABELS.join(', ')}
      </Body>
    </VStack>
  );
}
