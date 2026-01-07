'use client';
import { HeroSection } from '@/components/sections/HeroSection';
import { SystemSection } from '@/components/sections/SystemSection';
import { ScrollSection } from '@/components/sections/ScrollSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';
import { Divider } from '@blimpify-im/ui';

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <Divider></Divider>
      <ScrollSection />
      <Divider></Divider>
      <SystemSection />
      <Divider></Divider>
      <TestimonialsSection />
      <Divider></Divider>
      <PricingSection />
      <Divider></Divider>
      <FAQSection />
      
    </>
  );
}
