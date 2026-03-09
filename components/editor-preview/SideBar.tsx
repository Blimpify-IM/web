// Resizable Sidebar – samma komponent som i im-dashboard editor.
// Använder endast @blimpify-im/ui.

'use client';

import React, {
  ReactNode,
  useState,
  useRef,
  useCallback,
  useMemo,
  useEffect,
} from 'react';
import {
  H3,
  VStack,
  HStack,
  IconButton,
  Icon,
  ResizeHandle,
} from '@blimpify-im/ui';
import {
  PanelLeftClose,
  PanelRightClose,
  PanelLeftOpen,
  PanelRightOpen,
} from 'lucide-react';
import './SideBar.css';

export interface SideBarProps {
  children: ReactNode;
  title: ReactNode;
  headerContent?: ReactNode;
  titleRowContent?: ReactNode;
  leadingAction?: ReactNode;
  /** Optional action after the title (e.g. expand icon when editing a section) */
  trailingAction?: ReactNode;
  expandTabContent?: ReactNode;
  position?: 'left' | 'right';
  defaultWidth?: number;
  minWidth?: number;
  maxWidth?: number;
  defaultCollapsed?: boolean;
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  onWidthChange?: (width: number) => void;
  resizable?: boolean;
  collapsible?: boolean;
  storageKey?: string;
  className?: string;
  showFooter?: boolean;
}

const DEFAULT_MIN_WIDTH = 200;
const DEFAULT_MAX_WIDTH = 480;
const DEFAULT_WIDTH = 280;
const COLLAPSED_WIDTH = 0;
const EXPAND_DRAG_THRESHOLD = 60;
const COLLAPSE_DRAG_THRESHOLD = 150;

export const SideBar: React.FC<SideBarProps> = ({
  children,
  title,
  headerContent,
  titleRowContent,
  leadingAction,
  trailingAction,
  position = 'left',
  defaultWidth = DEFAULT_WIDTH,
  minWidth = DEFAULT_MIN_WIDTH,
  maxWidth = DEFAULT_MAX_WIDTH,
  defaultCollapsed = false,
  collapsed: controlledCollapsed,
  onCollapsedChange,
  onWidthChange,
  resizable = true,
  collapsible = true,
  storageKey,
  className = '',
  showFooter = true,
}) => {
  const [internalWidth, setInternalWidth] = useState<number>(defaultWidth);
  const [internalCollapsed, setInternalCollapsed] = useState<boolean>(defaultCollapsed);

  useEffect(() => {
    if (!storageKey || typeof window === 'undefined') return;
    const storedWidth = localStorage.getItem(`sidebar-width-${storageKey}`);
    if (storedWidth) {
      const parsed = parseInt(storedWidth, 10);
      if (!isNaN(parsed) && parsed >= minWidth && parsed <= maxWidth) setInternalWidth(parsed);
    }
    const storedCollapsed = localStorage.getItem(`sidebar-collapsed-${storageKey}`);
    if (storedCollapsed !== null) setInternalCollapsed(storedCollapsed === 'true');
  }, [storageKey, minWidth, maxWidth]);

  const [isResizing, setIsResizing] = useState(false);
  const [dragWidth, setDragWidth] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);
  const startXRef = useRef<number>(0);
  const startWidthRef = useRef<number>(0);
  const wasCollapsedRef = useRef<boolean>(false);

  const isCollapsed = controlledCollapsed ?? internalCollapsed;
  const currentWidth = isCollapsed ? COLLAPSED_WIDTH : internalWidth;
  const displayWidth = dragWidth !== null ? dragWidth : currentWidth;

  const setCollapsed = useCallback(
    (value: boolean, animate = true) => {
      const shouldAnimate = animate && !value;
      if (shouldAnimate) {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 200);
      }
      if (controlledCollapsed === undefined) setInternalCollapsed(value);
      onCollapsedChange?.(value);
      if (storageKey && typeof window !== 'undefined') {
        localStorage.setItem(`sidebar-collapsed-${storageKey}`, String(value));
      }
    },
    [controlledCollapsed, onCollapsedChange, storageKey]
  );

  const toggleCollapsed = useCallback(() => setCollapsed(!isCollapsed), [isCollapsed, setCollapsed]);

  const handleResizeStart = useCallback(
    (e: React.MouseEvent) => {
      if (!resizable) return;
      e.preventDefault();
      e.stopPropagation();
      setIsResizing(true);
      startXRef.current = e.clientX;
      wasCollapsedRef.current = isCollapsed;
      startWidthRef.current = isCollapsed ? 0 : internalWidth;
    },
    [resizable, isCollapsed, internalWidth]
  );

  const handleResizeMove = useCallback(
    (e: MouseEvent) => {
      if (!isResizing) return;
      const deltaX = e.clientX - startXRef.current;
      const multiplier = position === 'right' ? -1 : 1;
      const rawWidth = startWidthRef.current + deltaX * multiplier;
      setDragWidth(Math.min(maxWidth, Math.max(0, rawWidth)));
    },
    [isResizing, position, maxWidth]
  );

  const handleResizeEnd = useCallback(() => {
    if (!isResizing) return;
    const finalDragWidth = dragWidth ?? 0;
    setIsResizing(false);
    setDragWidth(null);
    if (wasCollapsedRef.current) {
      if (finalDragWidth >= EXPAND_DRAG_THRESHOLD) {
        const newWidth = Math.min(maxWidth, Math.max(minWidth, finalDragWidth));
        setInternalWidth(newWidth);
        setCollapsed(false, true);
        onWidthChange?.(newWidth);
        if (storageKey && typeof window !== 'undefined') {
          localStorage.setItem(`sidebar-width-${storageKey}`, String(newWidth));
        }
      }
    } else {
      if (finalDragWidth < COLLAPSE_DRAG_THRESHOLD) {
        setCollapsed(true, false);
      } else {
        const newWidth = Math.min(maxWidth, Math.max(minWidth, finalDragWidth));
        setInternalWidth(newWidth);
        onWidthChange?.(newWidth);
        if (storageKey && typeof window !== 'undefined') {
          localStorage.setItem(`sidebar-width-${storageKey}`, String(newWidth));
        }
      }
    }
  }, [isResizing, dragWidth, minWidth, maxWidth, onWidthChange, storageKey, setCollapsed]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!resizable) return;
      if (isCollapsed) {
        if (
          (position === 'left' && e.key === 'ArrowRight') ||
          (position === 'right' && e.key === 'ArrowLeft')
        ) {
          e.preventDefault();
          setCollapsed(false);
          return;
        }
      }
      const step = e.shiftKey ? 50 : 10;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const delta = position === 'right' ? step : -step;
        const newWidth = internalWidth + delta;
        if (newWidth < COLLAPSE_DRAG_THRESHOLD) setCollapsed(true);
        else {
          const clamped = Math.min(maxWidth, Math.max(minWidth, newWidth));
          setInternalWidth(clamped);
          onWidthChange?.(clamped);
        }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        const delta = position === 'right' ? -step : step;
        const newWidth = internalWidth + delta;
        if (newWidth < COLLAPSE_DRAG_THRESHOLD) setCollapsed(true);
        else {
          const clamped = Math.min(maxWidth, Math.max(minWidth, newWidth));
          setInternalWidth(clamped);
          onWidthChange?.(clamped);
        }
      }
    },
    [resizable, isCollapsed, position, minWidth, maxWidth, internalWidth, onWidthChange, setCollapsed]
  );

  const handleDoubleClick = useCallback(() => {
    if (!resizable) return;
    if (isCollapsed) {
      setInternalWidth(defaultWidth);
      setCollapsed(false);
      onWidthChange?.(defaultWidth);
    } else {
      setInternalWidth(defaultWidth);
      onWidthChange?.(defaultWidth);
    }
    if (storageKey && typeof window !== 'undefined') {
      localStorage.setItem(`sidebar-width-${storageKey}`, String(defaultWidth));
    }
  }, [resizable, isCollapsed, defaultWidth, onWidthChange, storageKey, setCollapsed]);

  const CollapseIcon = useMemo(
    () => (
      <Icon size="sm" color="secondary" weight="medium">
        {position === 'left' ? <PanelLeftClose /> : <PanelRightClose />}
      </Icon>
    ),
    [position]
  );

  const ExpandIcon = useMemo(
    () => (
      <Icon size="sm" color="secondary" weight="medium">
        {position === 'left' ? <PanelLeftOpen /> : <PanelRightOpen />}
      </Icon>
    ),
    [position]
  );

  const isDraggingFromCollapsed = isResizing && wasCollapsedRef.current;
  const showSidebarContent = !isCollapsed || isDraggingFromCollapsed;
  const effectiveWidth = isDraggingFromCollapsed ? (dragWidth ?? 0) : displayWidth;

  return (
    <aside
      ref={sidebarRef}
      className={[
        'sidebar',
        `sidebar--${position}`,
        isCollapsed && !isDraggingFromCollapsed && 'sidebar--collapsed',
        isResizing && 'sidebar--resizing',
        isAnimating && 'sidebar--animating',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={
        {
          '--sidebar-width': `${effectiveWidth}px`,
          '--sidebar-target-width': `${currentWidth}px`,
          '--sidebar-min-width': `${minWidth}px`,
          '--sidebar-max-width': `${maxWidth}px`,
        } as React.CSSProperties
      }
      data-position={position}
      data-collapsed={isCollapsed && !isDraggingFromCollapsed}
    >
      {collapsible && isCollapsed && !isDraggingFromCollapsed && (
        <button
          type="button"
          className="sidebar__expand-tab"
          onClick={toggleCollapsed}
          aria-label="Öppna sidofält"
          title="Öppna sidofält"
        >
          {ExpandIcon}
        </button>
      )}
      {showSidebarContent && (
        <VStack spacing="xs" className="sidebar__container">
          <VStack spacing="sm" className="sidebar__header">
            <HStack spacing="sm" justify="between" align="center" className="sidebar__header-row">
              {leadingAction}
              {titleRowContent}
              <H3 className="sidebar__title">{title}</H3>
              {trailingAction}
              {collapsible && (
                <IconButton
                  icon={CollapseIcon}
                  size="sm"
                  onClick={toggleCollapsed}
                  aria-label="Stäng sidofält"
                />
              )}
            </HStack>
            {headerContent && <div className="sidebar__header-content">{headerContent}</div>}
          </VStack>
          <div className="sidebar__content">
            <VStack spacing="sm" className="sidebar__content-inner">
              {children}
            </VStack>
          </div>
          {showFooter && (
            <HStack spacing="sm" justify="center" className="sidebar__footer">
              <span className="sidebar__footer-title">{title}</span>
            </HStack>
          )}
        </VStack>
      )}
      {resizable && (
        <ResizeHandle
          orientation="vertical"
          position={position === 'left' ? 'end' : 'start'}
          handleStyle="full"
          collapsed={isCollapsed && !isDraggingFromCollapsed}
          currentValue={isCollapsed ? 0 : internalWidth}
          minValue={0}
          maxValue={maxWidth}
          onDragStart={handleResizeStart}
          onDrag={handleResizeMove}
          onDragEnd={handleResizeEnd}
          onDoubleClick={handleDoubleClick}
          onKeyDown={handleKeyDown}
          aria-label={
            isCollapsed
              ? 'Dra för att expandera sidofält'
              : `Bredd ${internalWidth}px. Dra för att ändra.`
          }
        />
      )}
    </aside>
  );
};

export default SideBar;
