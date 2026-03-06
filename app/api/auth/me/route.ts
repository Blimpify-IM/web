import { NextRequest, NextResponse } from 'next/server';

const API_BASE = (process.env.NEXT_PUBLIC_API_URL || 'https://api.blimpify-im.com').replace(/\/$/, '');

/**
 * Proxar GET /api/auth/me till riktiga API:et med användarens cookies.
 * Same-origin-anrop från landningssidan (blimpify-im.com) får då samma cookie
 * som när användaren besöker sidan, så sessionen blir rätt (ingen partitionering).
 */
export async function GET(request: NextRequest) {
  try {
    const cookieHeader = request.headers.get('cookie') ?? '';
    const res = await fetch(`${API_BASE}/api/authentication/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(cookieHeader ? { Cookie: cookieHeader } : {}),
      },
      cache: 'no-store',
    });

    const data = await res.json().catch(() => ({}));

    return NextResponse.json(data, {
      status: res.status,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, private',
      },
    });
  } catch (err) {
    console.error('[auth/me proxy]', err);
    return NextResponse.json(
      { success: false, message: 'Kunde inte hämta session' },
      { status: 502 }
    );
  }
}
