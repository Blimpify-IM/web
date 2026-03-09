'use client';

import React from 'react';
import { Icon } from '@blimpify-im/ui';
import { Plus } from 'lucide-react';
import './AddSectionButton.css';

export interface AddSectionButtonProps {
  /** Visuell only – klick gör inget tills pattern gallery är kopplad. */
  onClick?: () => void;
}

export function AddSectionButton({ onClick }: AddSectionButtonProps) {
  return (
    <div className="editor-add-section-sticky">
      <button
        type="button"
        className="editor-add-section-btn"
        onClick={onClick}
        aria-label="Lägg till sektion"
      >
        <Icon size="sm" color="secondary">
          <Plus />
        </Icon>
        <span>Lägg till sektion</span>
      </button>
    </div>
  );
}
