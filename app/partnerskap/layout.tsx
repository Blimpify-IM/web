import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Partnerskap',
  description: 'Kontakta Blimpify om partnerskap. Vill du integrera Blimpify i din plattform eller samarbeta på andra sätt? Fyll i formuläret så hör vi av oss om vi ser en matchning.',
  path: '/partnerskap',
});

export default function PartnerskapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
