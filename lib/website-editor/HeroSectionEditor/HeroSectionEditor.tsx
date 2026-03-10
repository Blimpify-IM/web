'use client';

import React from 'react';
import { VStack, SegmentedControl, Picker } from '@blimpify-im/ui';
import { BackgroundRow } from '../BackgroundRow/BackgroundRow';
import type { HeroSectionEditorProps, HeroLayout } from '../types';

const RIGHT_COLUMN_OPTIONS = [
  { value: 'none', label: 'None' },
  { value: 'action', label: 'Action' },
];

export function HeroSectionEditor({
  layout,
  content,
  onLayoutChange,
  onContentChange,
  onOpenMediaPicker,
  onUploadImage,
  resolveImageUrl,
}: HeroSectionEditorProps) {
  const alignOptions = [
    { value: 'left', label: 'Left' },
    { value: 'center', label: 'Center' },
  ];

  const layoutWithDefaults: HeroLayout = {
    alignSectionHeader: 'center',
    secondColumn: 'none',
    background: 'default',
    backgroundImage: '',
    backgroundPosition: 'center',
    backgroundOpacity: 1,
    backgroundTint: 'none',
    imageFadeEdge: 'none',
    imageFadeStrength: 0.15,
    ...layout,
  };

  return (
    <VStack spacing="md">
      <div className="section-editor__group">
        <div className="section-editor__group-title">Section header</div>
        <VStack spacing="sm">
          <label className="section-editor__field">
            <span className="section-editor__label">Header Alignment</span>
            <SegmentedControl
              options={alignOptions}
              value={layoutWithDefaults.alignSectionHeader ?? 'center'}
              onChange={(v) => onLayoutChange({ alignSectionHeader: (v as 'left' | 'center') ?? 'center' })}
              size="sm"
              variant="default"
              fullWidth
            />
          </label>
        </VStack>
      </div>

      <div className="section-editor__group">
        <label className="section-editor__field-row">
          <span className="section-editor__label">Right column</span>
          <Picker
            size="sm"
            value={layoutWithDefaults.secondColumn ?? 'none'}
            options={RIGHT_COLUMN_OPTIONS}
            onChange={(v) => onLayoutChange({ secondColumn: (v as 'none' | 'action') ?? 'none' })}
          />
        </label>
      </div>

      {onContentChange && content && (
        <div className="section-editor__group">
          <div className="section-editor__group-title">Card</div>
          <VStack spacing="sm">
            <label className="section-editor__field">
              <span className="section-editor__label">Rubrik</span>
              <input
                type="text"
                className="section-editor__input"
                value={content.headline ?? ''}
                onChange={(e) => onContentChange({ headline: e.target.value })}
              />
            </label>
            <label className="section-editor__field">
              <span className="section-editor__label">Undertext</span>
              <textarea
                className="section-editor__textarea"
                value={content.subtext ?? ''}
                onChange={(e) => onContentChange({ subtext: e.target.value })}
                rows={2}
              />
            </label>
          </VStack>
        </div>
      )}

      <div className="section-editor__group">
        <div className="section-editor__group-title">Background</div>
        <div style={{ marginTop: 0 }}>
          <BackgroundRow
            layout={{
              background: layoutWithDefaults.background,
              backgroundImage: layoutWithDefaults.backgroundImage,
              backgroundPosition: layoutWithDefaults.backgroundPosition,
              backgroundOpacity: layoutWithDefaults.backgroundOpacity,
              backgroundTint: layoutWithDefaults.backgroundTint,
              imageFadeEdge: layoutWithDefaults.imageFadeEdge,
              imageFadeStrength: layoutWithDefaults.imageFadeStrength,
            }}
            onLayoutChange={(patch) => onLayoutChange(patch)}
            onOpenMediaPicker={onOpenMediaPicker}
            resolveImageUrl={resolveImageUrl}
          />
        </div>
      </div>
    </VStack>
  );
}
