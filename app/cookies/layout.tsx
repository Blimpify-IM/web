import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Cookiepolicy',
  description: 'Så använder Blimpify AB cookies och liknande tekniker på blimpify-im.com, blimpify.co och app.blimpify-im.com. Nödvändiga och valfria cookies.',
  path: '/cookies',
});

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
