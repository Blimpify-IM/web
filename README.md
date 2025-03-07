# Blimpify Web

Detta är frontend-delen av Blimpify-projektet, byggd med Next.js.

## Utvecklingsmiljö

### Förutsättningar

- Node.js (version 18 eller senare)
- npm (kommer med Node.js)

### Installation

1. Klona repositoryt
2. Navigera till web-mappen: `cd web`
3. Installera beroenden: `npm install`

### Utvecklingsserver

Kör utvecklingsservern:

```bash
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare för att se resultatet.

## Kodkvalitet

### ESLint

Vi använder ESLint för att upprätthålla kodkvalitet och konsekvent kodstil. Vår konfiguration finns i `.eslintrc.js`.

Kör ESLint:

```bash
npm run lint
```

Fixa automatiskt ESLint-problem:

```bash
npm run lint:fix
```

### Prettier

Vi använder Prettier för kodformatering. Konfigurationen finns i `.prettierrc.js`.

Formatera kod:

```bash
npm run format
```

## Deployment

Projektet är konfigurerat för deployment till AWS Elastic Beanstalk.

### Byggprocess

Bygg projektet för produktion:

```bash
npm run build
```

Starta produktionsservern:

```bash
npm start
```

## Projektstruktur

- `app/` - Next.js App Router
  - `components/` - Återanvändbara komponenter
  - `styles/` - Globala stilar
  - `[route]/` - Sidkomponenter för varje rutt
- `public/` - Statiska filer
- `.elasticbeanstalk/` - AWS Elastic Beanstalk-konfiguration

## ESLint-konfiguration

Vår ESLint-konfiguration är anpassad för Next.js, React och TypeScript. Här är de viktigaste delarna:

### Extends

- `eslint:recommended` - ESLint:s rekommenderade regler
- `plugin:@typescript-eslint/recommended` - TypeScript-rekommenderade regler
- `plugin:react/recommended` - React-rekommenderade regler
- `plugin:jsx-a11y/recommended` - Tillgänglighetsregler
- `next/core-web-vitals` - Next.js-regler för Core Web Vitals
- `plugin:prettier/recommended` - Prettier-integration

### Viktiga regler

- **Next.js-regler**: Förhindrar användning av `<a>` istället för `<Link>`, uppmuntrar användning av `next/image`
- **React-regler**: Inaktiverar `prop-types` eftersom vi använder TypeScript
- **TypeScript-regler**: Varnar för oanvända variabler, `any`-typer och icke-null-påståenden
- **Import-regler**: Organiserar imports i grupper och alfabetisk ordning
- **Tillgänglighetsregler**: Säkerställer att komponenter är tillgängliga för alla användare
- **AWS-relaterade regler**: Optimerar kod för AWS-integration

### Anpassade regler

Vi har anpassat vissa regler för att passa vårt projekt:

- Vissa tillgänglighetsregler är satta till "warn" istället för "error" för att inte blockera utvecklingen
- `no-console` tillåter `console.warn`, `console.error` och `console.info`
- TypeScript-specifika regler är konfigurerade för att passa vår kodstil 