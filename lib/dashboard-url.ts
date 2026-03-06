/**
 * Dashboard app URL helpers
 * Centraliserar länkar till app.blimpify-im.com (signup, login, dashboard).
 */

const APP_BASE =
  (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_APP_URL) ||
  'https://app.blimpify-im.com';
const BASE = (APP_BASE as string).replace(/\/$/, '');

/**
 * Returnerar signup-URL för dashboard-appen med valfri plan och billing.
 * Exempel: getSignupUrl('pro', 'yearly') → .../sv/signup?plan=pro&billing=yearly
 */
export function getSignupUrl(plan?: 'free' | 'pro', billing?: 'monthly' | 'yearly'): string {
  const base = `${BASE}/sv/signup`;
  const params = new URLSearchParams();
  if (plan) params.set('plan', plan);
  if (billing) params.set('billing', billing);
  const q = params.toString();
  return q ? `${base}?${q}` : base;
}

/**
 * Returnerar login-URL för dashboard-appen.
 */
export function getLoginUrl(): string {
  return `${BASE}/sv/login`;
}

/**
 * Returnerar dashboard-URL (standard landningssida för locale).
 */
export function getDashboardBaseUrl(): string {
  return `${BASE}/sv`;
}

/**
 * Returnerar dashboard-URL beroende på roll (admin → /admin, annars /sites).
 */
export function getDashboardUrl(role?: string): string {
  if (role === 'admin' || role === 'superadmin') {
    return `${BASE}/admin`;
  }
  return `${BASE}/sites`;
}
