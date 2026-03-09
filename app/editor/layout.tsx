import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editorn | Blimpify',
  description:
    'En editor byggd för företagssidor. Börja från genomtänkt struktur och ändra bara innehållet.',
};

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
