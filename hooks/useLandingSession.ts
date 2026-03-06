'use client';

import { useState, useEffect } from 'react';

const API_BASE = typeof process !== 'undefined'
  ? (process.env.NEXT_PUBLIC_API_URL || 'https://api.blimpify-im.com').replace(/\/$/, '')
  : 'https://api.blimpify-im.com';

export interface LandingSessionUser {
  id: number;
  username: string | null;
  email: string;
  role: string;
}

export interface UseLandingSessionResult {
  user: LandingSessionUser | null;
  loading: boolean;
}

/**
 * Kollar om användaren har en giltig session (cookies med domain .blimpify-im.com).
 * Används på landningssidan för att visa "Dashboard" istället för "Logga in" när inloggad.
 */
export function useLandingSession(): UseLandingSessionResult {
  const [user, setUser] = useState<LandingSessionUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function checkSession() {
      try {
        const res = await fetch(`${API_BASE}/api/authentication/me`, {
          method: 'GET',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
        });

        if (cancelled) return;

        if (res.ok) {
          const data = await res.json();
          if (data?.success && data?.user) {
            setUser({
              id: data.user.id,
              username: data.user.username ?? null,
              email: data.user.email ?? '',
              role: data.user.role ?? 'client',
            });
            return;
          }
        }
        setUser(null);
      } catch {
        if (!cancelled) setUser(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    checkSession();
    return () => { cancelled = true; };
  }, []);

  return { user, loading };
}
