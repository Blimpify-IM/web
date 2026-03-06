/**
 * Startar Stripe checkout för Pro-prenumeration (anropas från landningssidan när användaren redan är inloggad).
 */

const API_BASE =
  (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_API_URL) ||
  'https://api.blimpify-im.com';
const BASE = (typeof API_BASE === 'string' ? API_BASE : 'https://api.blimpify-im.com').replace(/\/$/, '');
const APP_BASE =
  (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_APP_URL) || 'https://app.blimpify-im.com';

export async function startProCheckout(billingPeriod: 'monthly' | 'yearly'): Promise<string> {
  const successUrl = `${APP_BASE}/sites?subscription=success`;
  const cancelUrl = `${APP_BASE}/sites`;

  const csrfRes = await fetch(`${BASE}/api/csrf-token`, {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!csrfRes.ok) throw new Error('Kunde inte hämta säkerhetstoken');
  const { csrfToken } = await csrfRes.json();
  if (!csrfToken) throw new Error('Saknar säkerhetstoken');

  const checkoutRes = await fetch(`${BASE}/api/dashboard/subscription/checkout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken,
    },
    body: JSON.stringify({
      billingPeriod,
      successUrl,
      cancelUrl,
    }),
  });

  const data = await checkoutRes.json().catch(() => ({}));
  if (!checkoutRes.ok) {
    throw new Error(data?.message || 'Kunde inte starta betalning');
  }
  if (!data?.url) {
    throw new Error('Ingen checkout-URL mottagen');
  }
  return data.url;
}
