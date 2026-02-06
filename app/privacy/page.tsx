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
            <H1 align="center">Privacy Policy</H1>
            <Body size="md" color="secondary" align="center">
              Last updated: 2025-10-24
            </Body>
          </VStack>

          {/* Content */}
          <VStack spacing="2xl" align="stretch" style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
            {/* Introduction */}
            <VStack spacing="md" align="stretch">
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                This privacy policy describes how <strong>Blimpify AB</strong> (&quot;we&quot;, &quot;us&quot; or &quot;Blimpify&quot;) collects, uses, stores and protects personal data. The policy applies to you when you visit our websites (<a href="http://blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>blimpify-im.com</a>, <a href="http://blimpify.co" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>blimpify.co</a>), our customer dashboard (<a href="http://app.blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>app.blimpify-im.com</a>), or otherwise interact with our services.
              </Body>
            </VStack>

            {/* 1. Personal Data We Collect */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">1. Personal Data We Collect</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                We collect personal data to deliver our services, improve the user experience and fulfil our legal obligations.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                When you use our services, we may collect:
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <strong>Contact details:</strong> name, email address, company name, phone number
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <strong>Account and project data:</strong> information you provide in Project Builder (e.g. design choices, features, content, colours)
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <strong>Payment information:</strong> handled by our third-party provider <strong>Stripe</strong> — we never store full card details
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <strong>Login data:</strong> username, password (hashed), session and authentication data. If you use optional Google sign-in, we receive your name and email from Google.
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <strong>Technical data:</strong> IP address, browser, device type, interactions with our pages
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <strong>Usage behaviour:</strong> purchase and usage history in the dashboard (<a href="http://app.blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>app.blimpify-im.com</a>)
                  </Body>
                </VStack>
              </Box>
            </VStack>

            {/* 2. Why We Process Personal Data */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">2. Why We Process Personal Data</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                We process your data to:
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Create and manage your account
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Build, deliver and maintain your website
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Handle orders, subscriptions and invoices
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Provide customer support and revisions
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Send important notices (e.g. payment confirmations, updates)
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Improve and develop our services
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Fulfil legal obligations (e.g. accounting requirements)
                  </Body>
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Processing is based on <strong>contract</strong>, <strong>legal obligation</strong> or our <strong>legitimate interest</strong> in delivering and improving the service.
              </Body>
            </VStack>

            {/* 3. Third-Party Providers */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">3. Third-Party Providers</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                We use trusted providers for the operation and administration of our services:
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
                        <Body size="sm" weight="semibold">Service</Body>
                      </th>
                      <th
                        style={{
                          padding: 'var(--foundation-space-3)',
                          textAlign: 'left',
                          border: '1px solid var(--border-default)',
                          fontWeight: 600,
                        }}
                      >
                        <Body size="sm" weight="semibold">Purpose</Body>
                      </th>
                      <th
                        style={{
                          padding: 'var(--foundation-space-3)',
                          textAlign: 'left',
                          border: '1px solid var(--border-default)',
                          fontWeight: 600,
                        }}
                      >
                        <Body size="sm" weight="semibold">Provider</Body>
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
                        <Body size="sm">Payments</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Card payments & subscriptions</Body>
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
                        <Body size="sm">Hosting & operations</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Web hosting, servers and CDN</Body>
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
                        <Body size="sm">Email</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Sending confirmations and notices</Body>
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
                        <Body size="sm">Sign-in (optional)</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Optional Google sign-in to create or access your account</Body>
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
                        <Body size="sm">Booking (optional)</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Optional Calendly link for booking on customer websites</Body>
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
                These providers meet the requirements of the EU General Data Protection Regulation (GDPR) and act as <strong>data processors</strong> or <strong>independent controllers</strong> under their own privacy policies.
              </Body>
            </VStack>

            {/* 4. Storage and Security */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">4. Storage and Security</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                • We store personal data for as long as you are a customer or as long as required to fulfil contracts and legal obligations.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                • When the subscription ends, the account is retained for up to <strong>12 months</strong> for possible reactivation and receipt management.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                • After that period, data is deleted or anonymised, <strong>with the exception of invoices and payment records</strong> which are retained for <strong>7 years</strong> in accordance with accounting law.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                • The purpose of retaining the account after termination is to allow the customer to access receipts and payment history via the dashboard.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                • Upon deletion request, all personal data is removed except that which we are legally required to retain.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                • Passwords are always stored hashed, and we use technical and organisational security measures to prevent unauthorised access, loss or manipulation.
              </Body>
            </VStack>

            {/* 5. Your Rights Under GDPR */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">5. Your Rights Under GDPR</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                You have the right to:
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Request <strong>access</strong> (see what data we hold)
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Request <strong>correction</strong> of inaccurate data
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Request <strong>erasure</strong> of data (&quot;right to be forgotten&quot;)
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <strong>Restrict</strong> or <strong>object</strong> to certain processing
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Request <strong>data portability</strong> (receive data in a machine-readable format)
                  </Body>
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Requests can be submitted by email to <a href="mailto:admin@blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>admin@blimpify-im.com</a>.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                We respond within <strong>30 days</strong>.
              </Body>
            </VStack>

            {/* 6. Cookies */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">6. Cookies</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                We use cookies on our websites to:
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Keep you logged in
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Save settings
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Improve performance and user experience
                  </Body>
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                You can decline cookies via your browser, but some features may then stop working as intended.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                For more information, see our <Link href="/cookies" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}><strong>Cookie Policy</strong></Link>.
              </Body>
            </VStack>

            {/* 7. Changes to the Policy */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">7. Changes to the Policy</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                We may update this policy as needed.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Material changes will be communicated via email or in the dashboard.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                The latest version is always available on this page.
              </Body>
            </VStack>

            {/* 8. Contact Details */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">8. Contact Details</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                <strong>Data controller:</strong>
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Blimpify AB
                <br />
                Tallåsvägen 84, 186 51 Vallentuna, Sweden
                <br />
                Org.nr: 559519-2377
                <br />
                Email: <a href="mailto:admin@blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>admin@blimpify-im.com</a>
              </Body>
            </VStack>
          </VStack>
        </VStack>
      </Container>
    </Section>
  );
}
