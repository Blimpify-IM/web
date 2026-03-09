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
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import './EditorTreeMock.css';

const ICON_BY_KEY: Record<string, React.ComponentType<{ className?: string }>> = {
  navbar: RectangleGroupIcon,
  hero: DocumentTextIcon,
  services: DocumentTextIcon,
  pricing: CurrencyDollarIcon,
  results: ChartBarIcon,
  stats: ChartBarIcon,
  testimonials: ChatBubbleBottomCenterTextIcon,
  faq: QuestionMarkCircleIcon,
  contact: MegaphoneIcon,
  content: DocumentTextIcon,
  statistics: ChartBarIcon,
  cta: MegaphoneIcon,
  footer: DocumentDuplicateIcon,
};

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

/** Underordnade komponenter per sektion (t.ex. Hero → Rubrik, Undertext). */
export type SectionChildrenMap = Record<string, { key: string; label: string }[]>;

export interface EditorTreeMockProps {
  /** Vald sektion (för markering av sektionsrad). Kan anges som selectedKey för enkel användning. */
  selectedSectionKey?: string | null;
  /** Bakåtkompatibel: används som selectedSectionKey om selectedSectionKey inte sätts. */
  selectedKey?: string;
  /** Vald komponent inom sektionen (t.ex. hero-headline). Null = endast sektion vald. */
  selectedComponentKey?: string | null;
  /** Vid klick på en sektion (endast när interaktiv). */
  onSectionClick?: (key: string) => void;
  /** Vid klick på en underordnad komponent (sektion + componentKey). */
  onComponentClick?: (sectionKey: string, componentKey: string) => void;
  /** Om true, visa bara några rader (t.ex. för Problem-sektionens "tom dokument"-kontrast). */
  minimal?: boolean;
  /** Om true, noder är klickbara (för interaktiv editor-preview). */
  interactive?: boolean;
  /** När satt: använd denna ordning och etiketter (t.ex. template-26feb20). */
  sectionOrder?: readonly string[];
  sectionLabels?: Record<string, string>;
  /** Underordnade noder per sektion (t.ex. hero → Rubrik, Undertext). */
  sectionChildren?: SectionChildrenMap;
  /** Nod-id:n (sektionsnycklar) som är expanderade. */
  expandedNodes?: Set<string>;
  /** Callback när användaren expanderar/kollapsar en nod. */
  onExpandedNodesChange?: (nodes: Set<string>) => void;
}

export function EditorTreeMock({
  selectedSectionKey: selectedSectionKeyProp = null,
  selectedKey,
  selectedComponentKey = null,
  onSectionClick,
  onComponentClick,
  minimal,
  interactive = false,
  sectionOrder,
  sectionLabels,
  sectionChildren,
  expandedNodes = new Set(),
  onExpandedNodesChange,
}: EditorTreeMockProps) {
  const selectedSectionKey = selectedSectionKeyProp ?? selectedKey ?? null;
  const items =
    sectionOrder && sectionLabels
      ? sectionOrder.map((key) => ({
          key,
          label: sectionLabels[key] ?? key,
          IconComponent: ICON_BY_KEY[key] ?? DocumentTextIcon,
        }))
      : minimal
        ? SECTION_ITEMS.slice(0, 3)
        : SECTION_ITEMS;

  const toggleExpand = (sectionKey: string) => {
    const next = new Set(expandedNodes);
    if (next.has(sectionKey)) next.delete(sectionKey);
    else next.add(sectionKey);
    onExpandedNodesChange?.(next);
  };

  return (
    <div className="editor-tree-mock" role="tree" aria-label="Sektioner">
      {items.map(({ key, label, IconComponent }) => {
        const children = sectionChildren?.[key];
        const hasChildren = Boolean(children?.length);
        const isExpanded = hasChildren && expandedNodes.has(key);
        const isSectionSelected = selectedSectionKey === key && !selectedComponentKey;
        const nodeContent = (
          <>
            {hasChildren ? (
              <button
                type="button"
                className={`editor-tree-mock__expand ${isExpanded ? 'editor-tree-mock__expand--open' : ''}`}
                aria-label={isExpanded ? 'Kollapsa' : 'Expandera'}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleExpand(key);
                }}
              >
                <Icon size="sm" color="secondary">
                  <ChevronRightIcon />
                </Icon>
              </button>
            ) : (
              <span className="editor-tree-mock__icon-spacer" aria-hidden />
            )}
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
          <div key={key} className="editor-tree-mock__branch">
            <div
              className={`editor-tree-mock__node editor-tree-mock__node--level-0 ${isSectionSelected ? 'editor-tree-mock__node--selected' : ''} ${interactive ? 'editor-tree-mock__node--interactive' : ''}`}
              role="treeitem"
              aria-expanded={hasChildren ? isExpanded : undefined}
              aria-selected={isSectionSelected}
              onClick={interactive ? (e) => { e.stopPropagation(); onSectionClick?.(key); } : undefined}
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
              {nodeContent}
            </div>
            {hasChildren && isExpanded && (
              <div className="editor-tree-mock__children" role="group">
                {children!.map(({ key: compKey, label: compLabel }) => {
                  const isChildSelected = selectedSectionKey === key && selectedComponentKey === compKey;
                  return (
                    <div
                      key={compKey}
                      className={`editor-tree-mock__node editor-tree-mock__node--level-1 ${isChildSelected ? 'editor-tree-mock__node--selected' : ''} ${interactive ? 'editor-tree-mock__node--interactive' : ''}`}
                      role="treeitem"
                      aria-selected={isChildSelected}
                      onClick={
                        interactive
                          ? (e) => {
                              e.stopPropagation();
                              onSectionClick?.(key);
                              onComponentClick?.(key, compKey);
                            }
                          : undefined
                      }
                      onKeyDown={
                        interactive
                          ? (e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                onSectionClick?.(key);
                                onComponentClick?.(key, compKey);
                              }
                            }
                          : undefined
                      }
                      tabIndex={interactive ? 0 : undefined}
                    >
                      <span className="editor-tree-mock__icon-spacer" aria-hidden />
                      <span className="editor-tree-mock__icon" aria-hidden />
                      <span className="editor-tree-mock__label">
                        <Label size="sm" weight="medium">
                          {compLabel}
                        </Label>
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
