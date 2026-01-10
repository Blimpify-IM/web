'use client';

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

export default function TermsPage() {
  return (
    <Section>
      <Container useFormWidth>
        <VStack spacing="3xl" align="stretch">
          {/* Header */}
          <VStack spacing="md" align="center">
            <H1 align="center">Användarvillkor</H1>
            <Body size="md" color="secondary" align="center">
              Senast uppdaterad: 2025-10-24
            </Body>
          </VStack>

          {/* Content */}
          <VStack spacing="2xl" align="stretch" style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
            {/* Introduction */}
            <VStack spacing="md" align="stretch">
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Dessa användarvillkor ("villkoren") gäller för användning av Blimpify AB:s tjänster.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Genom att använda eller köpa tjänster via <a href="http://blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>blimpify-im.com</a> eller <a href="http://app.blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>app.blimpify-im.com</a> godkänner du dessa villkor och ingår ett bindande avtal med Blimpify AB ("vi", "oss", "Blimpify").
              </Body>
            </VStack>

            {/* 1. Företagsinformation */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">1. Företagsinformation</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                <strong>Blimpify AB</strong>
                <br />
                Tallåsvägen 84, 186 51 Vallentuna, Sverige
                <br />
                Org.nr: 559519-2377
                <br />
                E-post: <a href="mailto:admin@blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>admin@blimpify-im.com</a>
              </Body>
            </VStack>

            {/* 2. Tjänstebeskrivning */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">2. Tjänstebeskrivning</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify erbjuder skräddarsydda digitala lösningar för företag — inklusive design, utveckling och drift av hemsidor och webbaserade applikationer.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Vår plattform, Project Builder, låter kunder konfigurera sin webbplats genom att välja paket, design, struktur och funktioner. Alla val och priser visas tydligt innan beställning.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify kan använda tredjepartstjänster (t.ex. hosting, API:er, betallösningar). Vi ansvarar inte för driftstörningar eller begränsningar som orsakas av dessa externa leverantörer.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Kunden ansvarar för att allt innehåll (t.ex. texter, bilder, logotyper, policytexter) är korrekt, lagligt och fritt från upphovsrättsintrång.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify förbehåller sig rätten att uppdatera, ersätta eller avveckla tekniska komponenter i tjänsten när detta inte väsentligt försämrar kundens åtkomst eller funktionalitet.
              </Body>
            </VStack>

            {/* 3. Betalning och prenumeration */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">3. Betalning och prenumeration</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                För att hålla hemsidan aktiv krävs en månadsprenumeration, vars pris framgår vid beställning i Project Builder.
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Den första månaden kan erbjudas kostnadsfritt.
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Prenumerationen startar automatiskt efter beställning och förnyas månadsvis via Stripe.
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Kunden kan säga upp sin prenumeration när som helst via sin dashboard eller genom att kontakta support.
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Redan betald period återbetalas inte.
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Vid utebliven betalning kan Blimpify pausa eller avsluta tjänsten tills betalning mottagits.
                  </Body>
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                För kunder som beställer skräddarsydda lösningar utanför Project Builder gäller särskilda villkor enligt separat offert- eller projektavtal.
              </Body>
            </VStack>

            {/* 4. Drift och avslut av tjänst */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">4. Drift och avslut av tjänst</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Prenumerationen ger kunden rätt att använda Blimpify-plattformen för drift av sin hemsida.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Vid uppsagd eller obetald prenumeration tas hemsidan offline.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Eftersom Blimpify-plattformen är en integrerad och proprietär tjänst kan kunden inte köpa loss eller exportera sin hemsida till extern driftmiljö. Koden är anpassad för Blimpifys system och inte avsedd för fristående installation.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Kundens konto och data sparas i upp till 12 månader efter avslut. Därefter raderas informationen permanent om ingen återaktivering sker.
              </Body>
            </VStack>

            {/* 5. Nyttjanderätt och immateriella rättigheter */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">5. Nyttjanderätt och immateriella rättigheter</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Kunden behåller äganderätten till allt eget material som laddas upp eller tillhandahålls (t.ex. texter, bilder, logotyper).
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                All teknik, kod, mallar, designkomponenter, dashboard, Project Builder och övrig infrastruktur tillhör Blimpify AB.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Kunden får en icke-exklusiv licens att använda dessa delar så länge prenumerationen är aktiv.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Vid avslutad prenumeration upphör licensen automatiskt.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Innehållet (kundens egna texter, bilder, logotyper) kan begäras ut i statisk form på förfrågan.
              </Body>
            </VStack>

            {/* 6. Support och ändringar */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">6. Support och ändringar</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Support erbjuds via dashboard och e-post (<a href="mailto:admin@blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>admin@blimpify-im.com</a>).
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify besvarar ärenden inom 48 timmar under helgfria vardagar.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Mindre ändringar och justeringar kan göras kostnadsfritt inom ramen för prenumerationen.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Omfattande ändringar eller nya funktioner kan faktureras separat enligt gällande prislista.
              </Body>
            </VStack>

            {/* 7. Ångerrätt och återbetalning */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">7. Ångerrätt och återbetalning</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Kunden har rätt till återbetalning (exklusive prenumerationsavgifter) inom 30 dagar om:
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Ingen hemsida har publicerats,
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Ingen design- eller kodproduktion har påbörjats, och
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Ingen implementation utanför vår miljö har inletts.
                  </Body>
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Begäran ska skickas skriftligt till <a href="mailto:admin@blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>admin@blimpify-im.com</a>.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Efter 30 dagar är återbetalning inte möjlig.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Om arbete har påbörjats kan Blimpify dra av skälig ersättning för nedlagd tid och resurser.
              </Body>
            </VStack>

            {/* 8. Integritet och personuppgifter */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">8. Integritet och personuppgifter</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify samlar endast in grundläggande kontaktuppgifter (t.ex. namn, företag, e-post) för att hantera kundrelationer.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Betalningsuppgifter hanteras av Stripe och lagras inte av Blimpify.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Behandling av personuppgifter regleras i vår <Link href="/privacy" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>Integritetspolicy</Link>.
              </Body>
            </VStack>

            {/* 9. Ansvarsbegränsning */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">9. Ansvarsbegränsning</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify ansvarar inte för:
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Driftstörningar eller tekniska fel,
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Förlust av data orsakad av kundens agerande eller tredjepart,
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Indirekta skador såsom utebliven vinst eller avbrott i verksamhet.
                  </Body>
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpifys totala ekonomiska ansvar är under alla omständigheter begränsat till den totala summa kunden betalat under de senaste 3 månaderna.
              </Body>
            </VStack>

            {/* 10. Ändringar av villkor */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">10. Ändringar av villkor</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify AB kan uppdatera dessa villkor.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Nya kunder omfattas direkt av uppdaterade villkor.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Befintliga kunder omfattas av de villkor som gällde vid beställning, om inget annat avtalas.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Ändringar kommuniceras via e-post eller genom meddelande i dashboarden.
              </Body>
            </VStack>

            {/* 11. Tillämplig lag och tvist */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">11. Tillämplig lag och tvist</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Dessa villkor regleras av svensk lag.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Tvister som inte kan lösas genom dialog mellan parterna ska avgöras av svensk allmän domstol med Stockholms tingsrätt som första instans.
              </Body>
            </VStack>
          </VStack>
        </VStack>
      </Container>
    </Section>
  );
}