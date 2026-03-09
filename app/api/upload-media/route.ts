import { NextRequest, NextResponse } from 'next/server';

const API_BASE = (process.env.NEXT_PUBLIC_API_URL || 'https://api.blimpify-im.com').replace(/\/$/, '');

/** Plockar name=value från Set-Cookie-rad(er) och bygger Cookie-header. */
function mergeCookies(existingCookie: string, setCookieHeaders: string[]): string {
  const parts = existingCookie ? [existingCookie.trim()] : [];
  for (const line of setCookieHeaders) {
    const nameValue = line.split(';')[0]?.trim();
    if (nameValue) parts.push(nameValue);
  }
  return parts.filter(Boolean).join('; ');
}

/**
 * Proxar POST bilduppladdning till IM-api med användarens cookies.
 * Används av webb-editorn för att ladda upp bakgrundsbilder (samma flöde som dashboarden).
 */
export async function POST(request: NextRequest) {
  try {
    const cookieHeader = request.headers.get('cookie') ?? '';
    const formData = await request.formData();

    // Hämta CSRF-token – API sätter _csrf-cookie som måste skickas med POST
    const csrfRes = await fetch(`${API_BASE}/api/csrf-token`, {
      method: 'GET',
      headers: cookieHeader ? { Cookie: cookieHeader } : {},
      cache: 'no-store',
    });
    const csrfJson = await csrfRes.json().catch(() => ({}));
    const csrfToken = csrfJson?.csrfToken;
    const setCookies =
      (typeof csrfRes.headers.getSetCookie === 'function'
        ? csrfRes.headers.getSetCookie()
        : []) as string[] ||
      (csrfRes.headers.get('set-cookie') ? [csrfRes.headers.get('set-cookie')!] : []);
    const uploadCookie = mergeCookies(cookieHeader, setCookies);

    const headers: Record<string, string> = {
      Cookie: uploadCookie,
    };
    if (csrfToken) headers['X-CSRF-Token'] = csrfToken;

    const res = await fetch(`${API_BASE}/api/dashboard/client/cms/upload-media`, {
      method: 'POST',
      body: formData,
      headers,
      cache: 'no-store',
    });

    const data = await res.json().catch(() => ({}));

    return NextResponse.json(data, {
      status: res.status,
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, private' },
    });
  } catch (err) {
    console.error('[upload-media proxy]', err);
    return NextResponse.json(
      { success: false, message: 'Kunde inte ladda upp filen' },
      { status: 502 }
    );
  }
}
