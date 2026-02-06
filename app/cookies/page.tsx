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
            <H1 align="center">Cookie Policy</H1>
            <Body size="md" color="secondary" align="center">
              Last updated: 2025-11-14
            </Body>
          </VStack>

          {/* Content */}
          <VStack spacing="2xl" align="stretch" style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
            {/* Introduction */}
            <VStack spacing="md" align="stretch">
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                This cookie policy describes how <strong>Blimpify AB</strong> (&quot;we&quot;, &quot;us&quot;, &quot;Blimpify&quot;) uses cookies and similar technologies on our websites:
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <a href="http://blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>blimpify-im.com</a> (public website)
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <a href="http://blimpify.co" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>blimpify.co</a> (public website)
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <a href="http://app.blimpify-im.com" style={{ color: 'var(--text-link-color)', textDecoration: 'underline' }}>app.blimpify-im.com</a> (dashboard/signed-in service)
                  </Body>
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                When you use our services, only the cookies necessary for the websites to function are set. Analytics cookies are only set if you actively consent to them via our cookie banner.
              </Body>
            </VStack>

            {/* 1. What are cookies? */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">1. What are cookies?</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Cookies are small text files stored on your device when you visit a website.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Cookies are used to:
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Make the website work correctly
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Keep you logged in
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Remember your settings
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • Improve performance and user experience
                  </Body>
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Some cookies are necessary for our service to work, while others are voluntary.
              </Body>
            </VStack>

            {/* 2. Which cookies we use */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">2. Which cookies we use</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                We primarily use <strong>necessary and functional cookies</strong>.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                On some parts of the service we also use <strong>analytics cookies</strong>, which are only enabled if you give your consent.
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
                        <Body size="sm" weight="semibold">Cookie type</Body>
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
                        <Body size="sm" weight="semibold">Example</Body>
                      </th>
                      <th
                        style={{
                          padding: 'var(--foundation-space-3)',
                          textAlign: 'left',
                          border: '1px solid var(--border-default)',
                          fontWeight: 600,
                        }}
                      >
                        <Body size="sm" weight="semibold">Consent required?</Body>
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
                        <Body size="sm" weight="semibold">Session cookies</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Keep you logged in and power core functionality</Body>
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
                        <Body size="sm">❌ No</Body>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm" weight="semibold">Settings cookies / local storage</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Save chosen colours, design and preferences in Builder</Body>
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
                        <Body size="sm">❌ No</Body>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm" weight="semibold">Stripe cookies</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Security, payment processing and fraud prevention</Body>
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
                        <Body size="sm">❌ No</Body>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm" weight="semibold">Analytics cookies</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Statistics on website usage (e.g. page views, funnels, load time)</Body>
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
                        <Body size="sm">✅ Yes, only with consent</Body>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7, marginTop: 'var(--foundation-space-4)' }}>
                We do <strong>not</strong> use cookies for marketing, advertising or third-party tracking.
              </Body>
            </VStack>

            {/* 3. Third-party cookies */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">3. Third-party cookies</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Some cookies or similar technologies may be set by third-party providers we use:
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
                      <th
                        style={{
                          padding: 'var(--foundation-space-3)',
                          textAlign: 'left',
                          border: '1px solid var(--border-default)',
                          fontWeight: 600,
                        }}
                      >
                        <Body size="sm" weight="semibold">Privacy Policy</Body>
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
                        <Body size="sm">Payment processing and fraud prevention</Body>
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
                        <Body size="sm">Analytics</Body>
                      </td>
                      <td
                        style={{
                          padding: 'var(--foundation-space-3)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Body size="sm">Performance, error monitoring and usage statistics</Body>
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
                These technologies are only used for the purposes described in this policy.
              </Body>
            </VStack>

            {/* 4. Consent and cookie settings */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">4. Consent and cookie settings</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                On your first visit to our public website, a cookie banner is displayed where you can choose:
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <strong>Accept all cookies</strong> (incl. analytics cookies)
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • <strong>Essential cookies only</strong>
                  </Body>
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                If you choose &quot;Essential cookies only&quot;, no analytics tools are loaded.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                You can at any time:
              </Body>
              <Box style={{ paddingLeft: 'var(--foundation-space-4)' }}>
                <VStack spacing="xs" align="stretch">
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • change or withdraw your consent via <strong>Cookie settings</strong> (if available on the page), or
                  </Body>
                  <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                    • block cookies directly in your browser.
                  </Body>
                </VStack>
              </Box>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Note that if you block essential cookies, some features — such as login or payments — may stop working correctly.
              </Body>
            </VStack>

            {/* 5. Changes to cookie policy */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">5. Changes to cookie policy</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                We may update this cookie policy as needed, for example if we add new features or change how we use cookies.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                The latest version is always available on this page.
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Material changes will be communicated via email or in the dashboard.
              </Body>
            </VStack>

            {/* 6. Contact */}
            <VStack spacing="md" align="stretch">
              <H3 weight="semibold">6. Contact</H3>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Do you have questions about cookies or how we process your personal data?
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                Contact us:
              </Body>
              <Body size="md" color="primary" style={{ lineHeight: 1.7 }}>
                <strong>Blimpify AB</strong>
                <br />
                Tallåsvägen 84
                <br />
                186 51 Vallentuna, Sweden
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
