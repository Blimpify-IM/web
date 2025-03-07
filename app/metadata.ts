import { Metadata } from 'next';

// Metadata för startsidan
export const homeMetadata: Metadata = {
  title: 'Blimpify - Hitta perfekta samarbeten som driver tillväxt',
  description: 'Blimpify hjälper kreativa talanger att hitta perfekta samarbeten med varumärken och företag. Anslut, samarbeta och väx tillsammans.',
  openGraph: {
    title: 'Blimpify - Hitta perfekta samarbeten som driver tillväxt',
    description: 'Blimpify hjälper kreativa talanger att hitta perfekta samarbeten med varumärken och företag. Anslut, samarbeta och väx tillsammans.',
    images: [
      {
        url: '/images/blimpify-home-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Blimpify - Plattformen för kreativa samarbeten',
      },
    ],
  },
};

// Metadata för about-sidan
export const aboutMetadata: Metadata = {
  title: 'Om oss | Blimpify',
  description: 'Lär känna teamet bakom Blimpify och vår mission att revolutionera hur kreativa talanger och varumärken samarbetar.',
  openGraph: {
    title: 'Om oss | Blimpify',
    description: 'Lär känna teamet bakom Blimpify och vår mission att revolutionera hur kreativa talanger och varumärken samarbetar.',
    images: [
      {
        url: '/images/blimpify-about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Teamet bakom Blimpify',
      },
    ],
  },
};

// Metadata för pricing-sidan
export const pricingMetadata: Metadata = {
  title: 'Priser | Blimpify',
  description: 'Transparenta priser för alla behov. Välj den plan som passar dig bäst och börja växa dina samarbeten idag.',
  openGraph: {
    title: 'Priser | Blimpify',
    description: 'Transparenta priser för alla behov. Välj den plan som passar dig bäst och börja växa dina samarbeten idag.',
    images: [
      {
        url: '/images/blimpify-pricing-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Blimpify prisplaner',
      },
    ],
  },
};

// Metadata för contact-sidan
export const contactMetadata: Metadata = {
  title: 'Kontakta oss | Blimpify',
  description: 'Har du frågor eller funderingar? Kontakta vårt team så hjälper vi dig.',
  openGraph: {
    title: 'Kontakta oss | Blimpify',
    description: 'Har du frågor eller funderingar? Kontakta vårt team så hjälper vi dig.',
    images: [
      {
        url: '/images/blimpify-contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Kontakta Blimpify',
      },
    ],
  },
}; 