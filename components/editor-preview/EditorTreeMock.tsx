'use client';

import React from 'react';
import { Icon, Label } from '@blimpify-im/ui';
import {
  RectangleGroupIcon,
  DocumentTextIcon,
  ChatBubbleBottomCenterTextIcon,
  ChartBarIcon,
  MegaphoneIcon,
  CurrencyDollarIcon,
  QuestionMarkCircleIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import './EditorTreeMock.css';

export const SECTION_ITEMS: { key: string; label: string; IconComponent: React.ComponentType<{ className?: string }> }[] = [
  { key: 'navbar', label: 'Navbar', IconComponent: RectangleGroupIcon },
  { key: 'hero', label: 'Hero', IconComponent: DocumentTextIcon },
  { key: 'content', label: 'Content', IconComponent: DocumentTextIcon },
  { key: 'testimonials', label: 'Testimonials', IconComponent: ChatBubbleBottomCenterTextIcon },
  { key: 'statistics', label: 'Statistics', IconComponent: ChartBarIcon },
  { key: 'cta', label: 'CTA', IconComponent: MegaphoneIcon },
  { key: 'pricing', label: 'Pricing', IconComponent: CurrencyDollarIcon },
  { key: 'faq', label: 'FAQ', IconComponent: QuestionMarkCircleIcon },
  { key: 'footer', label: 'Footer', IconComponent: DocumentDuplicateIcon },
];

export interface EditorTreeMockProps {
  selectedKey?: string;
  /** Vid klick på en sektion (endast när interaktiv). */
  onSectionClick?: (key: string) => void;
  /** Om true, visa bara några rader (t.ex. för Problem-sektionens "tom dokument"-kontrast). */
  minimal?: boolean;
  /** Om true, noder är klickbara (för interaktiv editor-preview). */
  interactive?: boolean;
}

export function EditorTreeMock({
  selectedKey = 'hero',
  onSectionClick,
  minimal,
  interactive = false,
}: EditorTreeMockProps) {
  const items = minimal ? SECTION_ITEMS.slice(0, 3) : SECTION_ITEMS;

  return (
    <div className="editor-tree-mock" role="tree" aria-label="Sektioner">
      {items.map(({ key, label, IconComponent }) => {
        const isSelected = selectedKey === key;
        const Node = (
          <>
            <span className="editor-tree-mock__icon" aria-hidden>
              <Icon size="sm" color="secondary">
                <IconComponent />
              </Icon>
            </span>
            <span className="editor-tree-mock__label">
              <Label size="sm" weight="medium">
                {label}
              </Label>
            </span>
          </>
        );
        return (
          <div
            key={key}
            className={`editor-tree-mock__node editor-tree-mock__node--level-0 ${isSelected ? 'editor-tree-mock__node--selected' : ''} ${interactive ? 'editor-tree-mock__node--interactive' : ''}`}
            role="treeitem"
            aria-selected={isSelected}
            onClick={interactive ? () => onSectionClick?.(key) : undefined}
            onKeyDown={
              interactive
                ? (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSectionClick?.(key);
                    }
                  }
                : undefined
            }
            tabIndex={interactive ? 0 : undefined}
          >
            {Node}
          </div>
        );
      })}
    </div>
  );
}
