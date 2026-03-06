import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Priser',
  description:
    'Blimpify erbjuder en gratis plan med full redigerare och publicering på blimpify-subdomän. Pro ger egen domän.',
  path: '/pricing',
});

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
