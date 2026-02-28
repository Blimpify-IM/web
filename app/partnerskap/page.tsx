'use client';

import { useState } from 'react';
import {
  Section,
  Container,
  VStack,
  H1,
  Body,
  Input,
  Textarea,
  Button,
  AlertRoot,
  AlertContent,
  AlertDescription,
  Label,
} from '@blimpify-im/ui';

export default function PartnerskapPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  // Honeypot field - if filled, it's a bot
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Honeypot check - silently reject if filled (it's a bot)
    if (honeypot) {
      // Fake success to not alert the bot
      setSuccess(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.blimpify-im.com';
      const response = await fetch(`${apiUrl}/api/public/contact/send-email-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || undefined,
          message: formData.message,
          toAddress: 'admin@blimpify-im.com',
          sendConfirmation: true,
          siteName: 'Blimpify',
          subject: 'Ny partnerskapsförfrågan',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.errors?.[0]?.msg || data.message || 'Något gick fel');
      }

      if (data.success) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
        });
      } else {
        throw new Error(data.message || 'Något gick fel');
      }
    } catch (err: any) {
      setError(err.message || 'Något gick fel. Försök igen senare.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <Section>
        <Container useFormWidth>
          <VStack spacing="3xl" align="stretch">
            <VStack spacing="2xl" align="stretch" style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
              <VStack spacing="xl" align="center">
                <VStack spacing="md" align="center">
                  <H1 align="center">Tack för att du hör av dig!</H1>
                  <Body size="lg" color="secondary" align="center">
                    Vi har tagit emot din partnerskapsförfrågan. Om vi ser en match återkommer vi till dig.
                  </Body>
                </VStack>
                <Button
                  variant="primary"
                  onClick={() => setSuccess(false)}
                >
                  Skicka en ny förfrågan
                </Button>
              </VStack>
            </VStack>
          </VStack>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container useFormWidth>
        <VStack spacing="3xl" align="stretch">
          {/* Header + content – same structure as cookies/privacy/terms */}
          <VStack spacing="2xl" align="stretch" style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
            {/* Header */}
            <VStack spacing="md" align="center">
              <H1 align="center">Har du en intressant idé?</H1>
              <Body size="lg" color="secondary" align="center">
                Är du intresserad av att samarbeta med oss, eller har du ett annat spännande förslag? Tveka inte att höra av dig. Vi är öppna för det mesta.
              </Body>
            </VStack>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <VStack spacing="lg" align="stretch">
              <VStack spacing="xs" align="stretch">
                <Label size="sm" weight="medium">
                  Namn *
                </Label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ditt namn"
                  required
                  disabled={isSubmitting}
                />
              </VStack>

              <VStack spacing="xs" align="stretch">
                <Label size="sm" weight="medium">
                  E-post *
                </Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="din@epost.se"
                  required
                  disabled={isSubmitting}
                />
              </VStack>

              <VStack spacing="xs" align="stretch">
                <Label size="sm" weight="medium">
                  Företag / Organisation
                </Label>
                <Input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Ditt företag eller organisation"
                  disabled={isSubmitting}
                />
              </VStack>

              <VStack spacing="xs" align="stretch">
                <Label size="sm" weight="medium">
                  Berätta kort vad du har i åtanke *
                </Label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="T.ex. samarbete, gemensamt projekt, idé du vill utforska..."
                  rows={6}
                  required
                  disabled={isSubmitting}
                />
              </VStack>

              {/* Honeypot field - hidden from users, bots will fill it */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '-9999px',
                  opacity: 0,
                  height: 0,
                  overflow: 'hidden',
                  pointerEvents: 'none',
                }}
              >
                <label htmlFor="website">Webbplats</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {error && (
                <AlertRoot variant="error" surface="subtle">
                  <AlertContent>
                    <AlertDescription>{error}</AlertDescription>
                  </AlertContent>
                </AlertRoot>
              )}

              <Button
                type="submit"
                variant="accent"
                size="lg"
                fullWidth
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                Skicka förfrågan
              </Button>
            </VStack>
          </form>
          </VStack>
        </VStack>
      </Container>
    </Section>
  );
}
