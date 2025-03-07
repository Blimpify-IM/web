# SEO-implementering för Blimpify

Detta dokument beskriver hur SEO (sökmotoroptimering) har implementerats i Blimpify-projektet.

## Översikt

Vi har implementerat följande SEO-funktioner:

1. **Metadata** - Grundläggande och sidspecifik metadata
2. **Sitemap** - Automatiskt genererad sitemap.xml
3. **Robots.txt** - Konfiguration för sökmotorrobotar
4. **Strukturerad data** - JSON-LD för bättre förståelse av innehållet
5. **PWA-stöd** - Web App Manifest för bättre användarupplevelse

## Metadata

### Basmetadata (app/layout.tsx)

Vi har konfigurerat grundläggande metadata i `app/layout.tsx` som gäller för hela webbplatsen:

- Titel och beskrivning
- Nyckelord
- Författare och utgivare
- OpenGraph-metadata för sociala medier
- Twitter-kort
- Robotinstruktioner
- Ikoner och manifest

### Sidspecifik metadata

Varje sida har sin egen metadata som överskriver basmetadata när det behövs:

- För statiska sidor (server components): Exportera en `metadata`-konstant
- För klientsidor (client components): Skapa en separat `metadata.tsx`-fil

Exempel:
```tsx
export const metadata: Metadata = {
  title: 'Om oss | Blimpify',
  description: 'Lär känna teamet bakom Blimpify...',
  // ...
};
```

## Sitemap

Vi använder Next.js inbyggda stöd för att generera en sitemap.xml-fil automatiskt:

- `app/sitemap.ts` genererar en sitemap för alla statiska sidor
- Sitemapen hjälper sökmotorer att hitta och indexera alla sidor på webbplatsen

## Robots.txt

Vi har konfigurerat en robots.txt-fil för att styra hur sökmotorer crawlar webbplatsen:

- `app/robots.ts` genererar en robots.txt-fil
- Vi tillåter crawling av alla publika sidor
- Vi blockerar crawling av API-rutter, admin-sidor och interna Next.js-filer

## Strukturerad data (JSON-LD)

Vi använder JSON-LD för att ge sökmotorer mer kontext om innehållet:

- `app/components/JsonLd.tsx` innehåller komponenter och data för strukturerad data
- Vi har implementerat:
  - Organization - Information om företaget
  - WebSite - Information om webbplatsen
  - FAQPage - Strukturerad data för FAQ-sidan

## PWA-stöd

Vi har lagt till stöd för Progressive Web App (PWA):

- `public/site.webmanifest` definierar hur appen ska bete sig när den installeras
- Vi har konfigurerat ikoner, färger och andra PWA-egenskaper

## Implementeringsdetaljer

### Metadata-implementering

```tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'Blimpify - Hitta perfekta samarbeten som driver tillväxt',
    template: '%s | Blimpify',
  },
  // ...
};
```

### Sitemap-implementering

```tsx
// app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = routes.map(route => ({
    url: `https://blimpify.com${route}`,
    lastModified: new Date(),
    // ...
  }));

  return [...staticPages];
}
```

### Robots.txt-implementering

```tsx
// app/robots.ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/'],
    },
    // ...
  };
}
```

### JSON-LD-implementering

```tsx
// app/components/JsonLd.tsx
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

## Bästa praxis

1. **Håll metadata uppdaterad** - Uppdatera metadata när innehållet ändras
2. **Använd beskrivande titlar och beskrivningar** - Var specifik och relevant
3. **Optimera bilder** - Använd alt-text och optimera bildstorlekar
4. **Strukturera innehåll** - Använd korrekta HTML-element (h1, h2, etc.)
5. **Övervaka prestanda** - Använd verktyg som Lighthouse för att mäta SEO-prestanda

## Verktyg för SEO-testning

- [Google Search Console](https://search.google.com/search-console)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Schema.org Validator](https://validator.schema.org/)
- [Rich Results Test](https://search.google.com/test/rich-results) 