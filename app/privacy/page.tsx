import { generateLegalPageMetadata } from '@/lib/seo';

export const metadata = generateLegalPageMetadata('Integritetspolicy', '/privacy');

'use client';

import Link from 'next/link';
import {
  Section,
  Container,
  VStack,
  H1,
  H3,
  Body,
  Box,
} from '@blimpify-im/ui';

export default function PrivacyPage() {
  return (
    <Section>
      <Container useFormWidth>
        <VStack spacing="3xl" align="stretch">
          {/* Header */}
          <VStack spacing="md" align="center">
            <H1 align="center">Integritetspolicy</H1>
            <Body size="md" color="secondary" align="center">
              Senast uppdaterad: 2025-10-24
            </Body>
          </VStack>

          {/* Content */}
          <VStack spacing="2xl" align="stretch" style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
            {/* Introduction */}
            <VStack spacing="md" align="stretch">
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Denna integritetspolicy beskriver hur <strong>Blimpify AB</strong> ("vi", "oss" eller "Blimpify") samlar in, använder, lagrar och skyddar personuppgifter. Policyn gäller för dig som besöker vår webbplats (<a href="http://blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>blimpify-im.com</a>), vår kunddashboard (<a href="http://app.blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>app.blimpify-im.com</a>) eller på annat sätt interagerar med våra tjänster.
              </Body>
            </VStack>

            {/* 1. Personuppgifter vi samlar in */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">1. Personuppgifter vi samlar in</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Vi samlar in personuppgifter för att kunna leverera våra tjänster, förbättra användarupplevelsen och uppfylla våra juridiska skyldigheter.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                När du använder våra tjänster kan vi samla in:
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <strong>Kontaktuppgifter:</strong> namn, e-postadress, företagsnamn, telefonnummer
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <strong>Konto- och projektdata:</strong> uppgifter du lämnar i Project Builder (t.ex. val av design, funktioner, innehåll, färger)
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <strong>Betalningsinformation:</strong> hanteras av tredjepartsleverantören <strong>Stripe</strong> – vi lagrar aldrig fullständiga kortuppgifter
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <strong>Inloggningsdata:</strong> användarnamn, lösenord (hashat), sessions- och autentiseringsdata
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <strong>Teknisk data:</strong> IP-adress, webbläsare, enhetstyp, interaktioner med våra sidor
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <strong>Användarbeteende:</strong> köp- och användningshistorik i dashboarden (<a href="http://app.blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>app.blimpify-im.com</a>)
                  </Body>
                </VStack>
              </Box>
            </VStack>

            {/* 2. Varför vi behandlar personuppgifter */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">2. Varför vi behandlar personuppgifter</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Vi behandlar dina uppgifter för att kunna:
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Skapa och hantera ditt konto
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Bygga, leverera och underhålla din hemsida
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Hantera beställningar, prenumerationer och fakturor
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Tillhandahålla kundsupport och revisioner
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Skicka viktiga notiser (t.ex. betalningsbekräftelser, uppdateringar)
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Förbättra och utveckla våra tjänster
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Uppfylla rättsliga skyldigheter (exempelvis bokföringskrav)
                  </Body>
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Behandlingen sker med stöd av <strong>avtal</strong>, <strong>rättslig förpliktelse</strong> eller vårt <strong>berättigade intresse</strong> av att leverera och förbättra tjänsten.
              </Body>
            </VStack>

            {/* 3. Tredjepartsleverantörer */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">3. Tredjepartsleverantörer</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Vi använder betrodda leverantörer för drift och administration av våra tjänster:
              </Body>
              <Box
                style={{
                  marginTop: 'var(--foundation-space-4)',
                  overflowX: 'auto',
                }}
              >
                <table
                  style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <thead>
                    <tr style={{ background: 'var(--surface-subtle)' }}>
                      <th
                        style={{
                          padding: 'var(--foundation-space-3)',
                          textAlign: 'left',
                          border: '1px solid var(--border-default)',
                          fontWeight: 600,
                        }}
                      >
                        <Body size="sm" weight="semibold">Tjänst</Body>
                      </th>
                      <th
                        style={{
                          padding: 'var(--foundation-space-3)',
                          textAlign: 'left',
                          border: '1px solid var(--border-default)',
                          fontWeight: 600,
                        }}
                      >
                        <Body size="sm" weight="semibold">Syfte</Body>
                      </th>
                      <th
                        style={{
                          padding: 'var(--foundation-space-3)',
                          textAlign: 'left',
                          border: '1px solid var(--border-default)',
                          fontWeight: 600,
                        }}
                      >
                        <Body size="sm" weight="semibold">Leverantör</Body>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Betalningar</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Kortbetalningar & prenumerationer</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm" weight="semibold">Stripe</Body>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Hosting & drift</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Webbhotell, servrar och CDN</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm" weight="semibold">AWS</Body>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">E-post</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Utskick av bekräftelser och notiser</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm" weight="semibold">AWS SES</Body>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7, marginTop: 'var(--foundation-space-4)' }}>
                Dessa leverantörer uppfyller kraven enligt EU:s dataskyddsförordning (GDPR) och agerar som <strong>personuppgiftsbiträden</strong> eller <strong>självständigt ansvariga</strong> enligt sina egna integritetspolicys.
              </Body>
            </VStack>

            {/* 4. Lagring och säkerhet */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">4. Lagring och säkerhet</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                • Vi lagrar personuppgifter så länge du är kund eller så länge det krävs för att uppfylla avtal och lagkrav.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                • När prenumerationen avslutas sparas kontot i upp till <strong>12 månader</strong> för eventuell återaktivering och kvitto hantering.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                • Efter den tiden raderas eller anonymiseras data, <strong>med undantag för fakturor och betalningsuppgifter</strong> som sparas i <strong>7 år</strong> enligt bokföringslagen.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                • Syftet med att spara kontot efter avslut är att kunden ska kunna få tillgång till sina kvitton och betalningshistorik via dashboarden.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                • Vid begäran om radering tas all personlig data bort, förutom den som vi enligt lag måste bevara.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                • Lösenord lagras alltid hashat och vi använder tekniska och organisatoriska säkerhetsåtgärder för att förhindra obehörig åtkomst, förlust eller manipulation.
              </Body>
            </VStack>

            {/* 5. Dina rättigheter enligt GDPR */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">5. Dina rättigheter enligt GDPR</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Du har rätt att:
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Begära <strong>registerutdrag</strong> (se vilka uppgifter vi har)
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Begära <strong>rättelse</strong> av felaktiga uppgifter
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Begära <strong>radering</strong> av uppgifter ("rätten att bli glömd")
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <strong>Begränsa</strong> eller <strong>invända</strong> mot viss behandling
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Begära <strong>dataportabilitet</strong> (få ut uppgifter i maskinläsbart format)
                  </Body>
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Begäran görs via e-post till <a href="mailto:admin@blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>admin@blimpify-im.com</a>.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Vi svarar inom <strong>30 dagar</strong>.
              </Body>
            </VStack>

            {/* 6. Cookies */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">6. Cookies</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Vi använder cookies på våra webbplatser för att:
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Hålla dig inloggad
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Spara inställningar
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Förbättra prestanda och användarupplevelse
                  </Body>
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Du kan neka cookies via din webbläsare, men vissa funktioner kan då sluta fungera som avsett.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Mer information finns i vår <Link href="/cookies" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}><strong>Cookiepolicy</strong></Link>.
              </Body>
            </VStack>

            {/* 7. Ändringar i policyn */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">7. Ändringar i policyn</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Vi kan uppdatera denna policy vid behov.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Väsentliga ändringar kommuniceras via e-post eller i dashboarden.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Den senaste versionen finns alltid tillgänglig på denna sida.
              </Body>
            </VStack>

            {/* 8. Kontaktuppgifter */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">8. Kontaktuppgifter</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                <strong>Personuppgiftsansvarig:</strong>
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify AB
                <br />
                Tallåsvägen 84, 186 51 Vallentuna, Sverige
                <br />
                Org.nr: 559519-2377
                <br />
                E-post: <a href="mailto:admin@blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>admin@blimpify-im.com</a>
              </Body>
            </VStack>
          </VStack>
        </VStack>
      </Container>
    </Section>
  );
}
