import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Partnership',
  description: 'Contact Blimpify about partnerships. Want to integrate Blimpify into your platform or collaborate in other ways? Fill out the form and we\'ll get back to you if we see a match.',
  path: '/partnerskap',
});

export default function PartnerskapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
