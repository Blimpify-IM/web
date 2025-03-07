import type { Metadata } from 'next';
import React from 'react';

import JsonLd, { faqJsonLd } from '../components/JsonLd';

// Metadata för FAQ-sidan
export const metadata: Metadata = {
  title: 'Vanliga frågor | Blimpify',
  description: 'Hitta svar på vanliga frågor om Blimpify, vår plattform för kreativa samarbeten, priser, funktioner och mer.',
  openGraph: {
    title: 'Vanliga frågor | Blimpify',
    description: 'Hitta svar på vanliga frågor om Blimpify, vår plattform för kreativa samarbeten, priser, funktioner och mer.',
    images: [
      {
        url: '/images/blimpify-faq-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Vanliga frågor om Blimpify',
      },
    ],
  },
};

// Komponent för att lägga till strukturerad data för FAQ-sidan
export default function FaqJsonLd() {
  return <JsonLd data={faqJsonLd} />;
} 