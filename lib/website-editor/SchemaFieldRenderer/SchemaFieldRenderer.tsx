/**
 * SchemaFieldRenderer – schema-driven fältredigering.
 * Samma komponent som i im-dashboard; används av NavbarLayoutEditor och SectionLayoutEditor.
 * ActionBuilder är valfri (för navbar/hero behövs den inte).
 * Menu Alignment och Logo använder enbart ikoner (pilar / ikon-text-both) för att få plats.
 */
import React, { useEffect } from 'react';
import {
  Input,
  Textarea,
  Label,
  Body,
  Picker,
  SegmentedControl,
  Switch,
  Slider,
  Icon,
} from '@blimpify-im/ui';
import type { PropConfig } from '@blimpify-im/ui';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MinusIcon,
  PhotoIcon,
  ViewColumnsIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import './SchemaFieldRenderer.css';

export interface SchemaFieldRendererProps {
  propKey: string;
  propConfig: PropConfig;
  value: unknown;
  onChange: (key: string, value: unknown) => void;
  availablePages?: Array<{ id: string; name: string }>;
  availableSections?: Array<{ id: string; name: string }>;
  currentPage?: string;
  currentSection?: string;
  additionalCharCount?: number;
  /** Om inte satt visas en stub för action-builder (navbar/hero använder inte action) */
  renderActionBuilder?: (props: {
    value: unknown;
    onChange: (v: unknown) => void;
    availablePages: Array<{ id: string; name: string }>;
    availableSections: Array<{ id: string; name: string }>;
    currentPage?: string;
    currentSection?: string;
  }) => React.ReactNode;
}

export const SchemaFieldRenderer: React.FC<SchemaFieldRendererProps> = ({
  propKey,
  propConfig,
  value,
  onChange,
  availablePages = [],
  availableSections = [],
  currentPage,
  currentSection,
  additionalCharCount = 0,
  renderActionBuilder,
}) => {
  const { displayName, editorType, type } = propConfig;
  const isStringConfig = type === 'string';
  const isEnumConfig = type === 'enum';

  useEffect(() => {
    if ((editorType === 'text' || editorType === 'textarea') && isStringConfig) {
      const maxLength = (propConfig as { maxLength?: number }).maxLength;
      if (maxLength && typeof value === 'string' && value.length > maxLength) {
        onChange(propKey, value.slice(0, maxLength));
      }
    }
  }, []);

  const renderField = () => {
    switch (editorType) {
      case 'text': {
        const maxLength = isStringConfig ? (propConfig as { maxLength?: number }).maxLength : undefined;
        const placeholder = isStringConfig ? (propConfig as { placeholder?: string }).placeholder : undefined;
        return (
          <div className="schema-field__input-wrapper">
            <Input
              type="text"
              value={(value as string) || ''}
              onChange={(e) => onChange(propKey, e.target.value)}
              placeholder={placeholder}
              maxLength={maxLength}
              className="schema-field__input"
            />
            {maxLength && (
              <Body size="xs" color="tertiary" className="schema-field__char-count">
                {((value as string) || '').length} / {maxLength}
              </Body>
            )}
          </div>
        );
      }
      case 'textarea': {
        const textareaMaxLength = isStringConfig ? (propConfig as { maxLength?: number }).maxLength : undefined;
        const textareaPlaceholder = isStringConfig ? (propConfig as { placeholder?: string }).placeholder : undefined;
        const textareaValue = (value as string) || '';
        const clampedTextareaValue =
          textareaMaxLength && textareaValue.length > textareaMaxLength
            ? textareaValue.slice(0, textareaMaxLength)
            : textareaValue;
        const cleanTextareaValue = clampedTextareaValue.replace(/\{[^}]+\}|\*\*/g, '');
        const totalCharCount = cleanTextareaValue.length + additionalCharCount;
        return (
          <>
            <Textarea
              value={clampedTextareaValue}
              onChange={(e) => {
                const newVal = e.target.value;
                const cleanNewVal = newVal.replace(/\{[^}]+\}|\*\*/g, '');
                const totalLength = cleanNewVal.length + additionalCharCount;
                if (!textareaMaxLength || totalLength <= textareaMaxLength) onChange(propKey, newVal);
              }}
              placeholder={textareaPlaceholder}
              rows={4}
              className="schema-field__textarea"
            />
            {textareaMaxLength && (
              <Body
                size="xs"
                color={totalCharCount >= textareaMaxLength ? 'error' : 'tertiary'}
                className="schema-field__char-count"
              >
                {totalCharCount} / {textareaMaxLength}
              </Body>
            )}
          </>
        );
      }
      case 'url':
        return (
          <Input
            type="url"
            value={(value as string) || ''}
            onChange={(e) => onChange(propKey, e.target.value)}
            placeholder="https://..."
            className="schema-field__input"
          />
        );
      case 'email':
        return (
          <Input
            type="email"
            value={(value as string) || ''}
            onChange={(e) => onChange(propKey, e.target.value)}
            placeholder="email@example.com"
            className="schema-field__input"
          />
        );
      case 'select':
        if (!isEnumConfig) return null;
        const selectValues = (propConfig as { values?: readonly string[] }).values;
        const selectLabels = (propConfig as { valueLabels?: Record<string, string> }).valueLabels;
        const selectOptions =
          selectValues?.map((val: string) => ({
            value: val,
            label: selectLabels?.[val] || val,
          })) || [];
        return (
          <Picker
            options={selectOptions}
            value={(value as string) || (propConfig as { default?: string }).default || null}
            onChange={(newValue) => onChange(propKey, newValue)}
            placeholder="Select option..."
            size="md"
          />
        );
      case 'segmented': {
        if (!isEnumConfig) return null;
        const segmentedValues = (propConfig as { values?: readonly string[] }).values;
        const segmentedLabels = (propConfig as { valueLabels?: Record<string, string> }).valueLabels;
        const isMenuAlign = propKey === 'menuAlign' || propKey === 'mobileMenuAlign';
        const isLogoDisplay = propKey === 'logoDisplay' || propKey === 'mobileLogoDisplay';
        const useIconOnly = isMenuAlign || isLogoDisplay;

        let segmentedOptions: Array<{ value: string; label: string; icon?: React.ReactNode }> =
          segmentedValues?.map((val: string) => ({
            value: val,
            label: segmentedLabels?.[val] || val,
          })) || [];

        if (useIconOnly) {
          const iconSize = 'sm';
          if (isMenuAlign) {
            const menuIcons: Record<string, React.ReactNode> = {
              left: <Icon size={iconSize}><ArrowLeftIcon /></Icon>,
              center: <Icon size={iconSize}><MinusIcon /></Icon>,
              right: <Icon size={iconSize}><ArrowRightIcon /></Icon>,
            };
            segmentedOptions = segmentedOptions.map((o) => ({
              ...o,
              icon: menuIcons[o.value],
            }));
          }
          if (isLogoDisplay) {
            const logoIcons: Record<string, React.ReactNode> = {
              logo: <Icon size={iconSize}><PhotoIcon /></Icon>,
              both: <Icon size={iconSize}><ViewColumnsIcon /></Icon>,
              text: <Icon size={iconSize}><DocumentTextIcon /></Icon>,
            };
            segmentedOptions = segmentedOptions.map((o) => ({
              ...o,
              icon: logoIcons[o.value],
            }));
          }
        }

        return (
          <SegmentedControl
            options={segmentedOptions}
            value={((value as string) || (propConfig as { default?: string }).default || segmentedValues?.[0]) ?? ''}
            onChange={(newValue) => onChange(propKey, newValue)}
            size="sm"
            variant="default"
            fullWidth
            iconOnly={useIconOnly}
            aria-label={displayName || propKey}
          />
        );
      }
      case 'toggle':
        return (
          <Switch
            checked={value === true}
            onChange={(checked) => onChange(propKey, checked)}
            size="md"
          />
        );
      case 'action-builder':
      case 'builder':
        if (renderActionBuilder) {
          return renderActionBuilder({
            value,
            onChange: (v) => onChange(propKey, v),
            availablePages,
            availableSections,
            currentPage,
            currentSection,
          });
        }
        return <Body size="xs" color="tertiary">—</Body>;
      case 'number': {
        const numberPlaceholder = (propConfig as { placeholder?: string }).placeholder;
        const min = (propConfig as { min?: number }).min;
        const max = (propConfig as { max?: number }).max;
        const step = (propConfig as { step?: number }).step;
        return (
          <Input
            type="number"
            value={typeof value === 'number' ? value : ''}
            onChange={(e) => {
              const inputValue = e.target.value;
              const numValue = inputValue === '' ? 0 : Number(inputValue);
              if (!Number.isNaN(numValue)) onChange(propKey, numValue);
            }}
            placeholder={numberPlaceholder}
            min={min}
            max={max}
            step={step}
            className="schema-field__input"
          />
        );
      }
      case 'slider': {
        const sliderMin = (propConfig as { min?: number }).min ?? 0;
        const sliderMax = (propConfig as { max?: number }).max ?? 1;
        const sliderStep = (propConfig as { step?: number }).step ?? 0.01;
        const sliderValue =
          typeof value === 'number' ? value : ((propConfig as { default?: number }).default ?? sliderMin);
        return (
          <Slider
            minValue={sliderMin}
            maxValue={sliderMax}
            step={sliderStep}
            value={sliderValue}
            onChange={(val) => onChange(propKey, Array.isArray(val) ? val[0] : val)}
            size="sm"
            hideValue={false}
            getValue={(v) => `${Math.round((Array.isArray(v) ? v[0] : v) * 100)}%`}
          />
        );
      }
      default:
        return (
          <Input
            type="text"
            value={(value as string) || ''}
            onChange={(e) => onChange(propKey, e.target.value)}
            placeholder={`Edit ${displayName}`}
            className="schema-field__input"
          />
        );
    }
  };

  const isInline =
    editorType === 'toggle' ||
    editorType === 'segmented' ||
    editorType === 'select' ||
    editorType === 'slider';

  return (
    <div className={`schema-field${isInline ? ' schema-field--inline' : ''}`}>
      <Label size="xs" weight="medium" className="schema-field__label">
        {displayName || propKey}
      </Label>
      <div className="schema-field__control">{renderField()}</div>
    </div>
  );
};
