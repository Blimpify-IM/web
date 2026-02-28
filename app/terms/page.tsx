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
                Dessa användarvillkor (&quot;villkoren&quot;) gäller för din användning av Blimpify AB:s tjänster.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Genom att använda eller köpa tjänster via <a href="http://blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>blimpify-im.com</a>, <a href="http://blimpify.co" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>blimpify.co</a> eller <a href="http://app.blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>app.blimpify-im.com</a> godkänner du dessa villkor och ingår ett bindande avtal med Blimpify AB (&quot;vi&quot;, &quot;oss&quot;, &quot;Blimpify&quot;).
              </Body>
            </VStack>

            {/* 1. Company Information */}
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

            {/* 2. Service Description */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">2. Tjänstebeskrivning</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify erbjuder skräddarsydda digitala lösningar för företag, bland annat design, utveckling och drift av webbplatser och webbaserade applikationer.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Vår plattform, Project Builder, låter kunden konfigurera sin webbplats genom att välja paket, design, struktur och funktioner. Det är gratis att lägga en beställning. Alla val och abonnemangspriset visas tydligt när du lanserar din webbplats och startar din 7-dagars gratisperiod.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify kan använda tjänster från tredje part (t.ex. hosting, API:er, betallösningar). Vi ansvarar inte för avbrott eller begränsningar orsakade av dessa externa leverantörer.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Kunden ansvarar för att allt innehåll (t.ex. texter, bilder, logotyper, policytexter) är korrekt, lagligt och fri från upphovsrättsintrång.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify förbehåller sig rätten att uppdatera, ersätta eller avveckla tekniska komponenter i tjänsten när detta inte väsentligt försämrar kundens tillgång eller funktionalitet.
              </Body>
            </VStack>

            {/* 3. Payment and Subscription */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">3. Betalning och abonnemang</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Ett månadsabonnemang krävs för att webbplatsen ska vara aktiv. Priset visas när du lanserar din webbplats och startar din 7-dagars gratisperiod.
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Du startar abonnemanget själv när du lanserar. Du får 7 dagars gratisperiod för att testa din webbplats live.
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Efter gratisperioden debiteras du automatiskt och abonnemanget förnyas månadsvis via Stripe.
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Kunden kan när som helst avsluta abonnemanget via dashboarden eller genom att kontakta support.
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Redan betalda perioder återbetalas inte.
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Om betalning uteblir kan Blimpify pausa eller avsluta tjänsten tills betalning erhålls.
                  </Body>
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                För kunder som beställer skräddarsydda lösningar utanför Project Builder gäller särskilda villkor enligt separat offert eller projektavtal.
              </Body>
            </VStack>

            {/* 4. Operation and Termination of Service */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">4. Drift och avslut av tjänst</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Abonnemanget ger kunden rätt att använda Blimpify-plattformen för att driva sin webbplats.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Vid avslutat eller obetalt abonnemang tas webbplatsen offline.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Eftersom Blimpify-plattformen är en integrerad och proprietär tjänst kan kunden inte köpa eller exportera sin webbplats för extern drift. Koden är anpassad för Blimpify:s system och avsedd för drift inom tjänsten, inte fristående installation.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Kundens konto och data behålls i upp till 12 månader efter avslut. Därefter raderas informationen permanent om inte reaktivering sker.
              </Body>
            </VStack>

            {/* 5. Usage Rights and Intellectual Property */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">5. Användningsrätter och immateriella rättigheter</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Kunden behåller äganderätten till allt eget material som laddats upp eller lämnats (t.ex. texter, bilder, logotyper).
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                All teknologi, kod, mallar, designkomponenter, dashboard, Project Builder och övrig infrastruktur tillhör Blimpify AB.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Kunden får en icke-exklusiv licens att använda dessa delar så länge abonnemanget är aktivt.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Vid avslutat abonnemang upphör licensen automatiskt.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Innehåll (kundens egna texter, bilder, logotyper) kan på begäran lämnas ut i statisk form.
              </Body>
            </VStack>

            {/* 6. Support and Changes */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">6. Support och ändringar</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Support erbjuds via dashboarden och e-post (<a href="mailto:admin@blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>admin@blimpify-im.com</a>).
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify svarar på förfrågningar inom 48 timmar på vardagar.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Mindre ändringar och justeringar kan göras kostnadsfritt inom ramen för abonnemanget.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Väsentliga ändringar eller nya funktioner kan faktureras separat enligt gällande prissättning.
              </Body>
            </VStack>

            {/* 7. Privacy and Personal Data */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">7. Integritet och personuppgifter</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify samlar endast grundläggande kontaktuppgifter (t.ex. namn, företag, e-post) för att hantera kundrelationer.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Betalningsuppgifter hanteras av Stripe och lagras inte av Blimpify.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Behandling av personuppgifter regleras i vår <Link href="/privacy" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>integritetspolicy</Link>.
              </Body>
            </VStack>

            {/* 8. Limitation of Liability */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">8. Ansvarsbegränsning</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify ansvarar inte för:
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • tjänsteavbrott eller tekniska fel,
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • dataförlust orsakad av kundens handlingar eller tredje part,
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • indirekta skador såsom utebliven vinst eller verksamhetsavbrott.
                  </Body>
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify:s totala finansiella ansvar är i alla fall begränsat till det belopp kunden har betalat under de senaste 3 månaderna.
              </Body>
            </VStack>

            {/* 9. Changes to Terms */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">9. Ändringar av villkoren</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify AB kan uppdatera dessa villkor.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Nya kunder omfattas av uppdaterade villkor omedelbart.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Befintliga kunder omfattas av de villkor som gällde vid beställningstillfället, om inte annat avtalats.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Ändringar meddelas via e-post eller genom information i dashboarden.
              </Body>
            </VStack>

            {/* 10. Applicable Law and Disputes */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">10. Tillämplig lag och tvister</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Dessa villkor styrs av svensk lag.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Tvister som inte kan lösas genom dialog mellan parterna ska avgöras av svensk allmän domstol, med Stockholms tingsrätt som första instans.
              </Body>
            </VStack>
          </VStack>
        </VStack>
      </Container>
    </Section>
  );
}