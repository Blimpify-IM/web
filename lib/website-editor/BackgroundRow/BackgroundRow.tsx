'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
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
  resolveImageUrl?: (url: string) => string;
}

const defaultResolveUrl = (url: string) => url || '';

export function BackgroundRow({
  layout,
  onLayoutChange,
  onOpenMediaPicker,
  resolveImageUrl = defaultResolveUrl,
}: BackgroundRowProps) {
  const rowRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [popoverPos, setPopoverPos] = useState<{ top: number; right: number } | null>(null);
  const [urlModalOpen, setUrlModalOpen] = useState(false);
  const [draftUrl, setDraftUrl] = useState(layout.backgroundImage || '');

  const hasImage = layout.background === 'image' && !!(layout.backgroundImage || '').trim();
  const currentImage = layout.backgroundImage || '';

  useEffect(() => {
    setDraftUrl(layout.backgroundImage || '');
  }, [layout.backgroundImage]);

  const openPopover = useCallback(() => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    const viewportW = window.innerWidth;
    const viewportH = window.innerHeight;
    const popoverH = 420;
    const popoverW = 300;
    const right = viewportW - rect.left + 8;
    const top = Math.min(rect.top, viewportH - popoverH - 16);
    setPopoverPos({ top: Math.max(8, top), right });
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handle = (e: MouseEvent) => {
      const t = e.target as Node;
      if (popoverRef.current?.contains(t) || rowRef.current?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handle);
    return () => document.removeEventListener('keydown', handle);
  }, [open]);

  const setBackgroundImage = useCallback(
    (url: string) => {
      onLayoutChange({
        background: url ? 'image' : 'default',
        backgroundImage: url || undefined,
      });
      setDraftUrl(url);
      setUrlModalOpen(false);
    },
    [onLayoutChange]
  );

  const clearBackground = useCallback(() => {
    onLayoutChange({ background: 'default', backgroundImage: '' });
    setOpen(false);
  }, [onLayoutChange]);

  const handleAddImageClick = () => {
    if (onOpenMediaPicker) {
      setOpen(false);
      onOpenMediaPicker(currentImage);
    } else {
      setOpen(false);
      setDraftUrl(currentImage);
      setUrlModalOpen(true);
    }
  };

  const imageName = currentImage
    ? currentImage.split('/').pop()?.split('?')[0] ?? 'image'
    : '';

  const popover = open && popoverPos ? createPortal(
    <div
      ref={popoverRef}
      className="bg-popover"
      data-editor-popover="true"
      style={{ top: popoverPos.top, right: popoverPos.right }}
    >
      <div className="bg-popover__header">
        <Label size="sm" weight="semibold">Background</Label>
        <IconButton
          aria-label="Stäng"
          icon={<Icon size="xs" color="secondary"><X /></Icon>}
          variant="ghost"
          size="xs"
          onClick={() => setOpen(false)}
        />
      </div>
      <div className="bg-popover__body">
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
                    setOpen(false);
                    setDraftUrl(currentImage);
                    setUrlModalOpen(true);
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
        )}
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      <div className="bg-row-wrapper">
        <Label size="xs" weight="medium" className="bg-row-wrapper__label">Background</Label>
        <div className={`bg-row${open ? ' bg-row--active' : ''}`}>
          <button
            ref={rowRef}
            type="button"
            className="bg-row__field"
            onClick={openPopover}
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

      {popover}

      {!onOpenMediaPicker && (
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
            <Body size="sm" color="secondary">
              Ange bildens URL. Bilden visas som bakgrund i hero-sektionen.
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
