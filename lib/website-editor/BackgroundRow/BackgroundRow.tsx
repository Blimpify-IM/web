'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  Label,
  Body,
  Icon,
  IconButton,
  Modal,
  Button,
  VStack,
  Picker,
  SegmentedControl,
} from '@blimpify-im/ui';
import { ImageIcon, X } from 'lucide-react';
import type { HeroLayout } from '../types';
import './BackgroundRow.css';

const POSITION_OPTIONS = [
  { value: 'center', label: 'Center' },
  { value: 'top', label: 'Top' },
  { value: 'bottom', label: 'Bottom' },
  { value: 'left', label: 'Left' },
  { value: 'right', label: 'Right' },
  { value: 'top left', label: 'Top Left' },
  { value: 'top right', label: 'Top Right' },
  { value: 'bottom left', label: 'Bottom Left' },
  { value: 'bottom right', label: 'Bottom Right' },
];

export interface BackgroundRowProps {
  layout: HeroLayout;
  onLayoutChange: (layout: Partial<HeroLayout>) => void;
  /** Om satt: "Lägg till bild" öppnar denna. Annars visas URL-fält i popover. */
  onOpenMediaPicker?: (currentUrl: string) => void;
  /** Ladda upp fil; returnerar bild-URL. Visar "Ladda upp bild" i popover. */
  onUploadImage?: (file: File) => Promise<string>;
  resolveImageUrl?: (url: string) => string;
  /** När true: visa inställningar inline under raden istället för modal – så förhandsgranskningen syns live. */
  inlineSettings?: boolean;
}

const defaultResolveUrl = (url: string) => url || '';

export function BackgroundRow({
  layout,
  onLayoutChange,
  onOpenMediaPicker,
  onUploadImage,
  resolveImageUrl = defaultResolveUrl,
  inlineSettings = false,
}: BackgroundRowProps) {
  const rowRef = useRef<HTMLButtonElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [urlModalOpen, setUrlModalOpen] = useState(false);
  const [showUrlInline, setShowUrlInline] = useState(false);
  const [draftUrl, setDraftUrl] = useState(layout.backgroundImage || '');
  const [uploading, setUploading] = useState(false);

  const hasImage = layout.background === 'image' && !!(layout.backgroundImage || '').trim();
  const currentImage = layout.backgroundImage || '';

  useEffect(() => {
    setDraftUrl(layout.backgroundImage || '');
  }, [layout.backgroundImage]);

  const openSettings = useCallback(() => setOpen((prev) => (inlineSettings ? !prev : true)), [inlineSettings]);

  const setBackgroundImage = useCallback(
    (url: string) => {
      onLayoutChange({
        background: url ? 'image' : 'default',
        backgroundImage: url || undefined,
      });
      setDraftUrl(url);
      setUrlModalOpen(false);
      setShowUrlInline(false);
    },
    [onLayoutChange]
  );

  const clearBackground = useCallback(() => {
    onLayoutChange({ background: 'default', backgroundImage: '' });
    setOpen(false);
  }, [onLayoutChange]);

  const handleAddImageClick = () => {
    if (onOpenMediaPicker) {
      if (inlineSettings) setOpen(true);
      else setOpen(false);
      onOpenMediaPicker(currentImage);
    } else {
      if (inlineSettings) {
        setOpen(true);
        setDraftUrl(currentImage);
        setShowUrlInline(true);
      } else {
        setOpen(false);
        setDraftUrl(currentImage);
        setUrlModalOpen(true);
      }
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      e.target.value = '';
      if (!file || !onUploadImage) return;
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        return;
      }
      setUploading(true);
      try {
        const url = await onUploadImage(file);
        setBackgroundImage(url);
      } finally {
        setUploading(false);
      }
    },
    [onUploadImage, setBackgroundImage]
  );

  const imageName = currentImage
    ? currentImage.split('/').pop()?.split('?')[0] ?? 'image'
    : '';

  const settingsContent = (
    <VStack spacing="md" style={{ overflowY: 'auto', maxHeight: '70vh', minHeight: 0 }}>
      {hasImage ? (
        <>
          <div className="bg-popover__preview-well">
            <img
              src={resolveImageUrl(currentImage)}
              alt=""
              className="bg-popover__preview-img"
            />
            {onOpenMediaPicker && (
              <div
                className="bg-popover__preview-overlay"
                onClick={() => {
                  setOpen(false);
                  onOpenMediaPicker(currentImage);
                }}
              >
                <Body size="xs" weight="medium" style={{ color: '#fff' }}>Byt</Body>
              </div>
            )}
            {!onOpenMediaPicker && (
              <div
                className="bg-popover__preview-overlay"
                onClick={() => {
                  if (inlineSettings) {
                    setDraftUrl(currentImage);
                    setShowUrlInline(true);
                  } else {
                    setOpen(false);
                    setDraftUrl(currentImage);
                    setUrlModalOpen(true);
                  }
                }}
              >
                <Body size="xs" weight="medium" style={{ color: '#fff' }}>Byt URL</Body>
              </div>
            )}
            <button
              type="button"
              className="bg-popover__remove"
              onClick={(e) => {
                e.stopPropagation();
                clearBackground();
              }}
              aria-label="Ta bort bakgrund"
            >
              <X size={11} />
            </button>
          </div>
          <div className="bg-popover__settings">
            <label>
              <Body size="xs" color="secondary">Position</Body>
              <Picker
                size="sm"
                value={layout.backgroundPosition ?? 'center'}
                options={POSITION_OPTIONS}
                onChange={(v) => onLayoutChange({ backgroundPosition: v ?? 'center' })}
              />
            </label>
            <label>
              <Body size="xs" color="secondary">Opacity {(layout.backgroundOpacity ?? 1) * 100}%</Body>
              <input
                type="range"
                className="bg-popover__range"
                min={0.1}
                max={1}
                step={0.05}
                value={layout.backgroundOpacity ?? 1}
                onChange={(e) =>
                  onLayoutChange({ backgroundOpacity: Number(e.target.value) })
                }
              />
            </label>
            <label>
              <Body size="xs" color="secondary">Accent Tint</Body>
              <SegmentedControl
                options={[
                  { value: 'none', label: 'No tint' },
                  { value: 'accent', label: 'Accent color' },
                ]}
                value={layout.backgroundTint ?? 'none'}
                onChange={(v) => onLayoutChange({ backgroundTint: (v as 'none' | 'accent') ?? 'none' })}
                size="sm"
                fullWidth
              />
            </label>
            <label>
              <Body size="xs" color="secondary">Fade Edge</Body>
              <SegmentedControl
                options={[
                  { value: 'none', label: 'None' },
                  { value: 'top', label: 'Top' },
                  { value: 'bottom', label: 'Bottom' },
                  { value: 'both', label: 'Both' },
                ]}
                value={layout.imageFadeEdge ?? 'none'}
                onChange={(v) =>
                  onLayoutChange({ imageFadeEdge: (v as HeroLayout['imageFadeEdge']) ?? 'none' })
                }
                size="sm"
                fullWidth
              />
            </label>
            {(layout.imageFadeEdge ?? 'none') !== 'none' && (
              <label>
                <Body size="xs" color="secondary">
                  Fade Strength {(layout.imageFadeStrength ?? 0.15) * 100}%
                </Body>
                <input
                  type="range"
                  className="bg-popover__range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={layout.imageFadeStrength ?? 0.15}
                  onChange={(e) =>
                    onLayoutChange({ imageFadeStrength: Number(e.target.value) })
                  }
                />
              </label>
            )}
          </div>
        </>
      ) : (
        <div className="bg-popover__empty-actions">
          {onUploadImage && (
            <button
              type="button"
              className="bg-popover__empty-well"
              onClick={handleUploadClick}
              disabled={uploading}
            >
              <ImageIcon size={18} strokeWidth={1.5} />
              <Body size="xs" color="secondary">
                {uploading ? 'Laddar upp…' : 'Ladda upp bild'}
              </Body>
            </button>
          )}
          <button
            type="button"
            className="bg-popover__empty-well"
            onClick={handleAddImageClick}
          >
            <ImageIcon size={18} strokeWidth={1.5} />
            <Body size="xs" color="secondary">
              {onOpenMediaPicker ? 'Välj bild från galleri' : 'Ange bild-URL'}
            </Body>
          </button>
        </div>
      )}
    </VStack>
  );

  return (
    <>
      {onUploadImage && (
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
          className="bg-popover__file-input"
          aria-hidden
          onChange={handleFileChange}
        />
      )}
      <div className="bg-row-wrapper">
        <Label size="xs" weight="medium" className="bg-row-wrapper__label">Background</Label>
        <div className={`bg-row${open ? ' bg-row--active' : ''}`}>
          <button
            ref={rowRef}
            type="button"
            className="bg-row__field"
            onClick={openSettings}
            aria-expanded={open}
          >
            <div className="bg-row__thumb">
              {hasImage ? (
                <img
                  src={resolveImageUrl(currentImage)}
                  alt=""
                  className="bg-row__thumb-img"
                />
              ) : (
                <ImageIcon size={13} strokeWidth={1.5} className="bg-row__thumb-icon" />
              )}
            </div>
            <span className={`bg-row__text${hasImage ? '' : ' bg-row__text--empty'}`}>
              {hasImage ? imageName : 'Lägg till bakgrundsbild…'}
            </span>
          </button>
          {hasImage && (
            <button
              type="button"
              className="bg-row__clear"
              onClick={(e) => {
                e.stopPropagation();
                clearBackground();
              }}
              aria-label="Ta bort bakgrundsbild"
              tabIndex={-1}
            >
              <X size={12} />
            </button>
          )}
        </div>
      </div>

      {inlineSettings && open && (
        <div className="bg-row-inline">
          {/* Ladda upp / URL först så man slipper scrolla ned */}
          <div className="bg-row-inline__top">
            {onUploadImage && (
              <Button
                variant="secondary"
                size="sm"
                onClick={handleUploadClick}
                disabled={uploading}
              >
                {uploading ? 'Laddar upp…' : 'Ladda upp bild'}
              </Button>
            )}
            {!onOpenMediaPicker && (
              showUrlInline ? (
                <VStack spacing="sm">
                  <Body size="xs" color="secondary">Ange bildens URL</Body>
                  <input
                    type="url"
                    value={draftUrl}
                    onChange={(e) => setDraftUrl(e.target.value)}
                    placeholder="https://…"
                    className="bg-row-inline__url-input"
                  />
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                    <Button variant="ghost" size="sm" onClick={() => setShowUrlInline(false)}>Avbryt</Button>
                    <Button variant="primary" size="sm" onClick={() => setBackgroundImage(draftUrl.trim())}>Använd</Button>
                  </div>
                </VStack>
              ) : (
                <Button variant="secondary" size="sm" onClick={() => { setDraftUrl(currentImage); setShowUrlInline(true); }}>
                  Ange bild-URL
                </Button>
              )
            )}
          </div>
          {/* Preview + inställningar under – bara när det finns bild, så inget dubbel "Ladda upp" */}
          {hasImage && (
            <div className="bg-row-inline__main">
              {settingsContent}
            </div>
          )}
        </div>
      )}

      {!inlineSettings && (
        <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        size="md"
        title="Background"
        showCloseButton
        closeOnBackdropClick
        closeOnEscape
      >
        {settingsContent}
      </Modal>
      )}

      {!onOpenMediaPicker && !inlineSettings && (
        <Modal
          isOpen={urlModalOpen}
          onClose={() => setUrlModalOpen(false)}
          size="md"
          title="Bakgrundsbild"
          showCloseButton
          closeOnBackdropClick
          closeOnEscape
        >
          <VStack spacing="md">
            {onUploadImage && (
              <Button
                variant="secondary"
                size="sm"
                onClick={handleUploadClick}
                disabled={uploading}
              >
                {uploading ? 'Laddar upp…' : 'Ladda upp bild'}
              </Button>
            )}
            <Body size="sm" color="secondary">
              {onUploadImage ? 'Eller ange bildens URL.' : 'Ange bildens URL. Bilden visas som bakgrund i hero-sektionen.'}
            </Body>
            <input
              type="url"
              value={draftUrl}
              onChange={(e) => setDraftUrl(e.target.value)}
              placeholder="https://…"
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-default)',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
              <Button variant="secondary" size="sm" onClick={() => setUrlModalOpen(false)}>
                Avbryt
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setBackgroundImage(draftUrl.trim())}
              >
                Använd
              </Button>
            </div>
          </VStack>
        </Modal>
      )}
    </>
  );
}
