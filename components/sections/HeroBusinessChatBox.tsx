'use client';

import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Button, Icon, Textarea } from '@blimpify-im/ui';
import styles from './HeroBusinessChatBox.module.css';

type HeroBusinessChatBoxProps = {
  signupHref?: string;
};

/**
 * Textarea + Button från UI. bordered + heroInCard = transparent fält inuti kortet
 * (motsvarande kan bli variant "embedded" i @blimpify-im/ui vid nästa release).
 */
export function HeroBusinessChatBox({
  signupHref = 'https://app.blimpify-im.com/sv/signup',
}: HeroBusinessChatBoxProps) {
  const [value, setValue] = useState('');

  return (
    <div className={styles.shell}>
      <Textarea
        id="hero-business-prompt"
        variant="bordered"
        size="lg"
        resize="none"
        minRows={3}
        fullWidth
        placeholder="Vilken typ av verksamhet bygger du?"
        value={value}
        onValueChange={setValue}
        aria-label="Beskriv din verksamhet"
        autoComplete="off"
        wrapperClassName={styles.textareaWrap}
        textareaClassName={styles.heroInCard}
      />
      <div className={styles.bar}>
        <Button
          href={signupHref}
          target="_blank"
          variant="primary"
          size="lg"
          rightIcon={
            <Icon size="sm" color="button-primary">
              <ArrowRightIcon aria-hidden />
            </Icon>
          }
        >
          Starta gratis
        </Button>
      </div>
    </div>
  );
}
