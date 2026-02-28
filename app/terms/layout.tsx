import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Användarvillkor',
  description: 'Användarvillkor för Blimpify AB:s tjänster. Gäller när du använder eller köper tjänster via blimpify-im.com, blimpify.co eller app.blimpify-im.com.',
  path: '/terms',
});

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
