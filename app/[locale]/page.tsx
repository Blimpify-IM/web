'use client';
import { HeroSection } from '@/components/sections/HeroSection';
import { SystemSection } from '@/components/sections/SystemSection';
import { ScrollSection } from '@/components/sections/ScrollSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';
import { Divider } from '@blimpify-im/ui';
import { StructuredData, generateOrganizationSchema, generateWebsiteSchema } from '@/lib/seo';
import { useTranslation } from '@/utils/i18n';
import svHome from './locales/sv.json';
import enHome from './locales/en.json';

const translations = { sv: svHome, en: enHome };

export default function HomePage() {
  const { t, locale } = useTranslation(translations);

  return (
    <>
      <StructuredData data={generateOrganizationSchema()} />
      <StructuredData data={generateWebsiteSchema()} />
      
      <HeroSection translations={translations} />

      <Divider></Divider>
      <ScrollSection translations={translations} />
      <Divider></Divider>
      <SystemSection translations={translations} />
      <Divider></Divider>
      <TestimonialsSection translations={translations} />
      <Divider></Divider>
      <PricingSection translations={translations} />
      <Divider></Divider>
      <FAQSection translations={translations} />
      
    </>
  );
}
