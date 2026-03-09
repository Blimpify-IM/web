'use client';

import { EditorHero } from './sections/EditorHero';
import { EditorProblem } from './sections/EditorProblem';
import { EditorSolution } from './sections/EditorSolution';
import { EditorComponentsSection } from './sections/EditorComponentsSection';
import { EditorPreview } from './sections/EditorPreview';
import { EditorCta } from './sections/EditorCta';
import { Divider } from '@blimpify-im/ui';

export default function EditorPage() {
  return (
    <>
      <EditorHero />
      <Divider />
      <EditorProblem />
      <Divider />
      <EditorSolution />
      <Divider />
      <EditorPreview />
      <Divider />
      <EditorComponentsSection />
      <Divider />
      <EditorCta />
    </>
  );
}
