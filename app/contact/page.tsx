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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://devapi.blimpify-im.com';
      const response = await fetch(`${apiUrl}/api/public/contact/send-email-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          company: formData.company || undefined,
          message: formData.message,
          toAddress: 'admin@blimpify-im.com',
          sendConfirmation: true,
          siteName: 'Blimpify',
          subject: 'Ny förfrågan från kontaktformulär',
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
          phone: '',
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
          <VStack spacing="xl" align="center" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <VStack spacing="md" align="center">
              <H1 align="center">Tack för ditt meddelande!</H1>
              <Body size="lg" color="secondary" align="center">
                Vi har mottagit din förfrågan och kommer att kontakta dig inom kort.
              </Body>
            </VStack>
            <Button
              variant="primary"
              onClick={() => setSuccess(false)}
            >
              Skicka ett nytt meddelande
            </Button>
          </VStack>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container useFormWidth>
        <VStack spacing="3xl" align="stretch" style={{ maxWidth: '600px', margin: '0 auto' }}>
          {/* Header */}
          <VStack spacing="md" align="center">
            <H1 align="center">Kontakta oss</H1>
            <Body size="lg" color="secondary" align="center">
              Har du frågor eller vill diskutera ditt projekt? Skicka oss ett meddelande så hör vi av oss.
            </Body>
          </VStack>

          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            <VStack spacing="lg" align="stretch">
              {/* Name */}
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

              {/* Email */}
              <VStack spacing="xs" align="stretch">
                <Label size="sm" weight="medium">
                  E-post *
                </Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="din@email.com"
                  required
                  disabled={isSubmitting}
                />
              </VStack>

              {/* Phone */}
              <VStack spacing="xs" align="stretch">
                <Label size="sm" weight="medium">
                  Telefon
                </Label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="070-123 45 67"
                  disabled={isSubmitting}
                />
              </VStack>

              {/* Company */}
              <VStack spacing="xs" align="stretch">
                <Label size="sm" weight="medium">
                  Företag
                </Label>
                <Input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Ditt företag"
                  disabled={isSubmitting}
                />
              </VStack>

              {/* Message */}
              <VStack spacing="xs" align="stretch">
                <Label size="sm" weight="medium">
                  Meddelande *
                </Label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Berätta om ditt projekt eller ställ dina frågor..."
                  rows={6}
                  required
                  disabled={isSubmitting}
                />
              </VStack>

              {/* Error Message */}
              {error && (
                <AlertRoot variant="error" surface="subtle">
                  <AlertContent>
                    <AlertDescription>{error}</AlertDescription>
                  </AlertContent>
                </AlertRoot>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="accent"
                size="lg"
                fullWidth
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                Skicka meddelande
              </Button>
            </VStack>
          </form>
        </VStack>
      </Container>
    </Section>
  );
}
