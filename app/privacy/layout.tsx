import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Integritetspolicy',
  description: 'Så samlar, använder och skyddar Blimpify AB personuppgifter. Gäller när du besöker våra webbplatser, dashboard eller på annat sätt använder våra tjänster.',
  path: '/privacy',
});

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
