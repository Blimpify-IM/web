'use client';

import {
  Section,
  Container,
  VStack,
  H1,
  H3,
  Body,
  Box,
} from '@blimpify-im/ui';

export default function CookiesPage() {
  return (
    <Section>
      <Container useFormWidth>
        <VStack spacing="3xl" align="stretch">
          {/* Header */}
          <VStack spacing="md" align="center">
            <H1 align="center">Cookiepolicy</H1>
            <Body size="md" color="secondary" align="center">
              Senast uppdaterad: 2025-11-14
            </Body>
          </VStack>

          {/* Content */}
          <VStack spacing="2xl" align="stretch" style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
            {/* Introduction */}
            <VStack spacing="md" align="stretch">
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Denna cookiepolicy beskriver hur <strong>Blimpify AB</strong> (&quot;vi&quot;, &quot;oss&quot;, &quot;Blimpify&quot;) använder cookies och liknande tekniker på våra webbplatser:
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <a href="http://blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>blimpify-im.com</a> (offentlig webbplats)
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <a href="http://blimpify.co" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>blimpify.co</a> (offentlig webbplats)
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <a href="http://app.blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>app.blimpify-im.com</a> (dashboard/inloggad tjänst)
                  </Body>
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                När du använder våra tjänster sätts endast de cookies som behövs för att webbplatserna ska fungera. Analyscookies sätts endast om du aktivt samtycker till dem via vår cookiebanner.
              </Body>
            </VStack>

            {/* 1. What are cookies? */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">1. Vad är cookies?</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Cookies är små textfiler som lagras på din enhet när du besöker en webbplats.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Cookies används för att:
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • få webbplatsen att fungera korrekt
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • hålla dig inloggad
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • komma ihåg dina inställningar
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • förbättra prestanda och användarupplevelse
                  </Body>
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Vissa cookies är nödvändiga för att tjänsten ska fungera, andra är frivilliga.
              </Body>
            </VStack>

            {/* 2. Which cookies we use */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">2. Vilka cookies vi använder</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Vi använder främst <strong>nödvändiga och funktionella cookies</strong>.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                På vissa delar av tjänsten använder vi också <strong>analyscookies</strong>, som endast aktiveras om du ger ditt samtycke.
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
                        <Body size="sm" weight="semibold">Cookietyp</Body>
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
                        <Body size="sm" weight="semibold">Exempel</Body>
                      </th>
                      <th
                        style={{
                          padding: 'var(--foundation-space-3)',
                          textAlign: 'left',
                          border: '1px solid var(--border-default)',
                          fontWeight: 600,
                        }}
                      >
                        <Body size="sm" weight="semibold">Samtycke krävs?</Body>
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
                        <Body size="sm" weight="semibold">Sessionscookies</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Håller dig inloggad och driver kärnfunktionalitet</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">session_id</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">❌ Nej</Body>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm" weight="semibold">Inställningscookies / local storage</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Sparar valda färger, design och preferenser i Builder</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">builder_theme, layout_settings</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">❌ Nej</Body>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm" weight="semibold">Stripe-cookies</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Säkerhet, betalningshantering och bedrägeriförebyggande</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">__stripe_sid, __stripe_mid</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">❌ Nej</Body>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm" weight="semibold">Analyscookies</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Statistik om webbplatsanvändning (t.ex. sidvisningar, funnels, laddningstid)</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">amplify_analytics_session</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">✅ Ja, endast med samtycke</Body>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7, marginTop: 'var(--foundation-space-4)' }}>
                Vi använder <strong>inte</strong> cookies för marknadsföring, reklam eller spårning från tredje part.
              </Body>
            </VStack>

            {/* 3. Third-party cookies */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">3. Cookies från tredje part</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Vissa cookies eller liknande tekniker kan sättas av underleverantörer vi använder:
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
                      <th
                        style={{
                          padding: 'var(--foundation-space-3)',
                          textAlign: 'left',
                          border: '1px solid var(--border-default)',
                          fontWeight: 600,
                        }}
                      >
                        <Body size="sm" weight="semibold">Integritetspolicy</Body>
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
                        <Body size="sm">Betalningshantering och bedrägeriförebyggande</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm" weight="semibold">Stripe</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">
                          <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>
                            stripe.com/privacy
                          </a>
                        </Body>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Analys</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Prestanda, felövervakning och användningsstatistik</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm" weight="semibold">AWS</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">
                          <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>
                            aws.amazon.com
                          </a>
                        </Body>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7, marginTop: 'var(--foundation-space-4)' }}>
                Dessa tekniker används endast i de syften som beskrivs i denna policy.
              </Body>
            </VStack>

            {/* 4. Consent and cookie settings */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">4. Samtycke och cookieinställningar</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Vid ditt första besök på vår offentliga webbplats visas en cookiebanner där du kan välja:
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <strong>Acceptera alla cookies</strong> (inkl. analyscookies)
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <strong>Endast nödvändiga cookies</strong>
                  </Body>
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Om du väljer &quot;Endast nödvändiga cookies&quot; laddas inga analysverktyg.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Du kan när som helst:
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • ändra eller återkalla ditt samtycke via <strong>Cookieinställningar</strong> (om tillgängligt på sidan), eller
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • blockera cookies direkt i din webbläsare.
                  </Body>
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Observera att om du blockerar nödvändiga cookies kan vissa funktioner, till exempel inloggning eller betalning, sluta fungera korrekt.
              </Body>
            </VStack>

            {/* 5. Changes to cookie policy */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">5. Ändringar av cookiepolicyn</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Vi kan uppdatera denna cookiepolicy vid behov, till exempel om vi lägger till nya funktioner eller ändrar hur vi använder cookies.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Senaste versionen finns alltid på denna sida.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Väsentliga ändringar meddelas via e-post eller i dashboarden.
              </Body>
            </VStack>

            {/* 6. Contact */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">6. Kontakt</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Har du frågor om cookies eller hur vi behandlar dina personuppgifter?
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Kontakta oss:
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                <strong>Blimpify AB</strong>
                <br />
                Tallåsvägen 84
                <br />
                186 51 Vallentuna, Sverige
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
