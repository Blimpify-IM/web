import React from 'react';

interface JsonLdProps {
  data: Record<string, any>;
}

// Komponent för att lägga till strukturerad data (JSON-LD) i head
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Strukturerad data för organisationen
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Blimpify AB',
  url: 'https://blimpify.com',
  logo: 'https://blimpify.com/images/logo.png',
  sameAs: [
    'https://www.facebook.com/blimpify',
    'https://www.instagram.com/blimpifyy',
    'https://www.linkedin.com/company/blimpify',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+46-123456789',
    contactType: 'customer service',
    email: 'admin@blimpify.com',
    availableLanguage: ['Swedish', 'English'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Exempelgatan 123',
    addressLocality: 'Stockholm',
    postalCode: '12345',
    addressCountry: 'SE',
  },
};

// Strukturerad data för webbplatsen
export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Blimpify',
  url: 'https://blimpify.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://blimpify.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

// Strukturerad data för FAQ-sidan
export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad är Blimpify?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Blimpify är en plattform som hjälper kreativa talanger att hitta perfekta samarbeten med varumärken och företag. Vi förenklar processen att hitta, hantera och genomföra samarbeten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur mycket kostar det att använda Blimpify?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Blimpify erbjuder olika prisplaner för olika behov. Vi har en gratis basplan och premiumplaner med fler funktioner. Besök vår prissida för mer information.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur hittar jag samarbetspartners på Blimpify?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Blimpify använder avancerad matchningsteknik för att koppla ihop kreatörer med varumärken baserat på intressen, målgrupp och tidigare erfarenheter. Du kan också söka och filtrera efter specifika samarbetspartners.',
      },
    },
  ],
}; 