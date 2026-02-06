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
            <H1 align="center">Terms of Use</H1>
            <Body size="md" color="secondary" align="center">
              Last updated: 2025-10-24
            </Body>
          </VStack>

          {/* Content */}
          <VStack spacing="2xl" align="stretch" style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
            {/* Introduction */}
            <VStack spacing="md" align="stretch">
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                These terms of use (&quot;the terms&quot;) apply to your use of Blimpify AB&apos;s services.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                By using or purchasing services through <a href="http://blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>blimpify-im.com</a>, <a href="http://blimpify.co" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>blimpify.co</a> or <a href="http://app.blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>app.blimpify-im.com</a>, you accept these terms and enter into a binding agreement with Blimpify AB (&quot;we&quot;, &quot;us&quot;, &quot;Blimpify&quot;).
              </Body>
            </VStack>

            {/* 1. Company Information */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">1. Company Information</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                <strong>Blimpify AB</strong>
                <br />
                Tallåsvägen 84, 186 51 Vallentuna, Sweden
                <br />
                Org.nr: 559519-2377
                <br />
                Email: <a href="mailto:admin@blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>admin@blimpify-im.com</a>
              </Body>
            </VStack>

            {/* 2. Service Description */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">2. Service Description</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify offers tailored digital solutions for businesses — including design, development, and operation of websites and web-based applications.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Our platform, Project Builder, lets customers configure their website by choosing packages, design, structure, and features. It is free to place an order. All choices and the subscription price are displayed clearly when you launch your website and start your 7-day free trial.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify may use third-party services (e.g. hosting, APIs, payment solutions). We are not responsible for service disruptions or limitations caused by these external providers.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                The customer is responsible for ensuring that all content (e.g. texts, images, logos, policy texts) is correct, lawful, and free from copyright infringement.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify reserves the right to update, replace, or discontinue technical components of the service when this does not materially impair the customer&apos;s access or functionality.
              </Body>
            </VStack>

            {/* 3. Payment and Subscription */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">3. Payment and Subscription</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                A monthly subscription is required to keep the website active; the price is shown when you launch your website and start your 7-day free trial.
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • You start the subscription yourself when you launch. You get a 7-day free trial to test your website live.
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • After the trial, you are charged automatically and the subscription renews monthly via Stripe.
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • The customer may cancel their subscription at any time via the dashboard or by contacting support.
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Already paid periods are not refunded.
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • If payment is not received, Blimpify may pause or terminate the service until payment is received.
                  </Body>
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                For customers ordering tailored solutions outside Project Builder, special terms apply as set out in a separate quote or project agreement.
              </Body>
            </VStack>

            {/* 4. Operation and Termination of Service */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">4. Operation and Termination of Service</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                The subscription grants the customer the right to use the Blimpify platform to operate their website.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Upon cancelled or unpaid subscription, the website will be taken offline.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                As the Blimpify platform is an integrated and proprietary service, the customer cannot purchase or export their website for external operation. The code is tailored for Blimpify&apos;s system and not intended for standalone installation.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                The customer&apos;s account and data are retained for up to 12 months after termination. Thereafter, the information is permanently deleted unless reactivation occurs.
              </Body>
            </VStack>

            {/* 5. Usage Rights and Intellectual Property */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">5. Usage Rights and Intellectual Property</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                The customer retains ownership of all their own material uploaded or provided (e.g. texts, images, logos).
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                All technology, code, templates, design components, dashboard, Project Builder, and other infrastructure belong to Blimpify AB.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                The customer receives a non-exclusive license to use these parts for as long as the subscription is active.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Upon terminated subscription, the license ends automatically.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Content (the customer&apos;s own texts, images, logos) may be requested in static form upon request.
              </Body>
            </VStack>

            {/* 6. Support and Changes */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">6. Support and Changes</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Support is offered via the dashboard and email (<a href="mailto:admin@blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>admin@blimpify-im.com</a>).
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify responds to inquiries within 48 hours on business days.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Minor changes and adjustments may be made free of charge within the scope of the subscription.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Substantial changes or new features may be billed separately according to the applicable price list.
              </Body>
            </VStack>

            {/* 7. Privacy and Personal Data */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">7. Privacy and Personal Data</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify only collects basic contact details (e.g. name, company, email) to manage customer relationships.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Payment details are handled by Stripe and are not stored by Blimpify.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Processing of personal data is governed by our <Link href="/privacy" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>Privacy Policy</Link>.
              </Body>
            </VStack>

            {/* 9. Limitation of Liability */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">8. Limitation of Liability</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify is not liable for:
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Service disruptions or technical failures,
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Loss of data caused by the customer&apos;s actions or third parties,
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Indirect damages such as lost profit or business interruption.
                  </Body>
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify&apos;s total financial liability is in all circumstances limited to the total amount the customer has paid during the last 3 months.
              </Body>
            </VStack>

            {/* 10. Changes to Terms */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">9. Changes to Terms</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify AB may update these terms.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                New customers are subject to updated terms immediately.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Existing customers are subject to the terms that applied at the time of ordering, unless otherwise agreed.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Changes are communicated via email or through a notice in the dashboard.
              </Body>
            </VStack>

            {/* 11. Applicable Law and Disputes */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">10. Applicable Law and Disputes</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                These terms are governed by Swedish law.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Disputes that cannot be resolved through dialogue between the parties shall be decided by Swedish courts of general jurisdiction, with Stockholm District Court as the court of first instance.
              </Body>
            </VStack>
          </VStack>
        </VStack>
      </Container>
    </Section>
  );
}