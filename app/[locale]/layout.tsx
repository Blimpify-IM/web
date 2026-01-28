// ===============================================
// app/[locale]/layout.tsx
// Layout for locale-specific routes
// ===============================================

import { notFound } from 'next/navigation';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// Valid locales
const locales = ['sv', 'en'];

export default async function LocaleLayout({ children, params }: Props) {
  // Await params (Next.js 15 requirement)
  const { locale } = await params;
  
  // Validate locale
  if (!locales.includes(locale)) {
    notFound();
  }

  return <>{children}</>;
}

// Generate static params for both locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
