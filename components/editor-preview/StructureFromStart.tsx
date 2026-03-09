'use client';

/**
 * Minimal visuell för "Du börjar med struktur" – ett budskap, inget brus.
 * Visar bara att sidan redan har sektioner på plats.
 */
import React from 'react';
import { Card, VStack, Label, Body } from '@blimpify-im/ui';

const SECTIONS = [
  { label: 'Hero', line: 'Din rubrik och undertext' },
  { label: 'Innehåll', line: 'Så funkar det' },
  { label: 'Citat', line: 'Det kunden säger' },
  { label: 'CTA', line: 'Redo att komma igång?' },
] as const;

export function StructureFromStart() {
  return (
    <Card
      variant="outlined"
      radius="lg"
      padding="none"
      style={{
        overflow: 'hidden',
        background: 'var(--surface-base)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <VStack spacing="none" align="stretch">
        {SECTIONS.map(({ label, line }, i) => (
          <div
            key={label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--foundation-space-4)',
              padding: 'var(--foundation-space-4) var(--foundation-space-5)',
              borderBottom: i < SECTIONS.length - 1 ? '1px solid var(--border-subtle)' : undefined,
              minHeight: 56,
            }}
          >
            <Label size="xs" color="tertiary" style={{ width: 88, flexShrink: 0 }}>
              {label}
            </Label>
            <Body size="sm" color="secondary" style={{ flex: 1, minWidth: 0 }}>
              {line}
            </Body>
          </div>
        ))}
      </VStack>
    </Card>
  );
}
