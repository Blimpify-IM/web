'use client';

import { useState, useEffect } from 'react';

// Same-origin proxy så att rätt cookie skickas (ingen partitionering mellan landning och app).
const ME_URL = '/api/auth/me';

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
 * Refetchar session vid fokus/visibility så att rätt användare visas efter inlogg i annan flik.
 */
export function useLandingSession(): UseLandingSessionResult {
  const [user, setUser] = useState<LandingSessionUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function checkSession(isInitial = false) {
      try {
        const res = await fetch(`${ME_URL}?t=${Date.now()}`, {
          method: 'GET',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          cache: 'no-store',
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
          } else {
            setUser(null);
          }
        } else {
          setUser(null);
        }
      } catch {
        if (!cancelled) setUser(null);
      } finally {
        if (!cancelled && isInitial) setLoading(false);
      }
    }

    checkSession(true);

    const onRefetch = () => checkSession(false);
    const onVisible = () => {
      if (document.visibilityState === 'visible') onRefetch();
    };
    window.addEventListener('focus', onRefetch);
    document.addEventListener('visibilitychange', onVisible);

    return () => {
      cancelled = true;
      window.removeEventListener('focus', onRefetch);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, []);

  return { user, loading };
}
