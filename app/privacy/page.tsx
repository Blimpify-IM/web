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
                Denna integritetspolicy beskriver hur <strong>Blimpify AB</strong> (&quot;vi&quot;, &quot;oss&quot; eller &quot;Blimpify&quot;) samlar in, använder, lagrar och skyddar personuppgifter. Policyn gäller dig när du besöker våra webbplatser (<a href="http://blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>blimpify-im.com</a>, <a href="http://blimpify.co" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>blimpify.co</a>), vår kunddashboard (<a href="http://app.blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>app.blimpify-im.com</a>) eller på annat sätt använder våra tjänster.
              </Body>
            </VStack>

            {/* 1. Personal Data We Collect */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">1. Personuppgifter vi samlar in</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Vi samlar in personuppgifter för att leverera våra tjänster, förbättra användarupplevelsen och uppfylla våra rättsliga förpliktelser.
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
                    • <strong>Konto- och projektdata:</strong> information du anger i Project Builder (t.ex. designval, funktioner, innehåll, färger)
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <strong>Betalningsinformation:</strong> hanteras av vår underleverantör <strong>Stripe</strong>, vi lagrar aldrig fullständiga kortuppgifter
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <strong>Inloggningsdata:</strong> användarnamn, lösenord (hashat), session och autentiseringsdata. Om du använder valfri inloggning med Google får vi ditt namn och din e-post från Google.
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <strong>Teknisk data:</strong> IP-adress, webbläsare, enhetstyp, interaktioner med våra sidor
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <strong>Användningsbeteende:</strong> köp- och användningshistorik i dashboarden (<a href="http://app.blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>app.blimpify-im.com</a>)
                  </Body>
                </VStack>
              </Box>
            </VStack>

            {/* 2. Why We Process Personal Data */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">2. Varför vi behandlar personuppgifter</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Vi behandlar dina uppgifter för att:
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • skapa och hantera ditt konto
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • bygga, leverera och underhålla din webbplats
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • hantera beställningar, abonnemang och fakturor
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • ge kundsupport och genomföra ändringar
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • skicka viktiga meddelanden (t.ex. betalningsbekräftelser, uppdateringar)
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • förbättra och utveckla våra tjänster
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • uppfylla rättsliga förpliktelser (t.ex. bokföringskrav)
                  </Body>
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Behandlingen grundar sig på <strong>avtal</strong>, <strong>rättslig förpliktelse</strong> eller vårt <strong>berättigade intresse</strong> av att leverera och förbättra tjänsten.
              </Body>
            </VStack>

            {/* 3. Third-Party Providers */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">3. Underleverantörer</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Vi använder pålitliga leverantörer för drift och administration av våra tjänster:
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
                        <Body size="sm">Kortbetalningar och abonnemang</Body>
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
                        <Body size="sm">Hosting och drift</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Webbhosting, servrar och CDN</Body>
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
                        <Body size="sm">Skicka bekräftelser och meddelanden</Body>
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
                    <tr>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Inloggning (valfritt)</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Valfri inloggning med Google för att skapa eller nå ditt konto</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm" weight="semibold">Google</Body>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Bokning (valfritt)</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Valfri Calendly-länk för bokning på kundens webbplatser</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm" weight="semibold">Calendly</Body>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7, marginTop: 'var(--foundation-space-4)' }}>
                Dessa leverantörer uppfyller kraven i EU:s dataskyddsförordning (GDPR) och agerar som <strong>personuppgiftsbiträdande</strong> eller <strong>oberoende personuppgiftsansvariga</strong> enligt sina egna integritetspolicyer.
              </Body>
            </VStack>

            {/* 4. Storage and Security */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">4. Lagring och säkerhet</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                • Vi lagrar personuppgifter så länge du är kund eller så länge det krävs för att uppfylla avtal och rättsliga förpliktelser.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                • När abonnemanget avslutas behålls kontot i upp till <strong>12 månader</strong> för eventuell reaktivering och kvittohantering.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                • Efter den perioden raderas eller anonymiseras data, <strong>med undantag för fakturor och betalningsunderlag</strong> som behålls i <strong>7 år</strong> enligt bokföringslagen.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                • Syftet med att behålla kontot efter avslut är att låta kunden nå kvitton och betalningshistorik via dashboarden.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                • Vid begäran om radering tas alla personuppgifter bort utom det vi är juridiskt skyldiga att behålla.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                • Lösenord lagras alltid hashat, och vi använder tekniska och organisatoriska säkerhetsåtgärder för att förhindra obehörig åtkomst, förlust eller manipulation.
              </Body>
            </VStack>

            {/* 5. Your Rights Under GDPR */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">5. Dina rättigheter enligt GDPR</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Du har rätt att:
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • begära <strong>åtkomst</strong> (se vilka uppgifter vi har)
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • begära <strong>rättelse</strong> av felaktiga uppgifter
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • begära <strong>radering</strong> av uppgifter (&quot;rätten att bli glömd&quot;)
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <strong>begränsa</strong> eller <strong>invända</strong> mot viss behandling
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • begära <strong>dataportabilitet</strong> (få uppgifterna i maskinläsbart format)
                  </Body>
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Begäran kan skickas via e-post till <a href="mailto:admin@blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>admin@blimpify-im.com</a>.
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
                    • hålla dig inloggad
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • spara inställningar
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • förbättra prestanda och användarupplevelse
                  </Body>
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Du kan avvisa cookies via din webbläsare, men vissa funktioner kan då sluta fungera som tänkt.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                För mer information, se vår <Link href="/cookies" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}><strong>cookiepolicy</strong></Link>.
              </Body>
            </VStack>

            {/* 7. Changes to the Policy */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">7. Ändringar av policyn</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Vi kan uppdatera denna policy vid behov.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Väsentliga ändringar meddelas via e-post eller i dashboarden.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Senaste versionen finns alltid på denna sida.
              </Body>
            </VStack>

            {/* 8. Contact Details */}
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
