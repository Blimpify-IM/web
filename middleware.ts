// ===============================================
// middleware.ts
// Next.js Middleware for locale detection and routing
// ===============================================

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Nordic countries where Swedish is preferred
const NORDIC_COUNTRIES = ['SE', 'NO', 'DK', 'FI', 'IS'];

/**
 * Detect user's preferred locale from:
 * 1. Cookie (NEXT_LOCALE)
 * 2. CloudFront geo header (Amplify auto-adds this)
 * 3. Accept-Language header
 * 4. Default to 'en' for international
 */
function detectLocale(req: NextRequest): 'sv' | 'en' {
  // Check cookie first (user preference)
  const cookieLocale = req.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale === 'sv' || cookieLocale === 'en') {
    return cookieLocale;
  }

  // Check CloudFront geo header (Amplify provides this in production)
  const country = req.geo?.country || req.headers.get('cloudfront-viewer-country');
  
  if (country) {
    // Nordic countries → Swedish
    if (NORDIC_COUNTRIES.includes(country.toUpperCase())) {
      return 'sv';
    }
    // All other countries → English
    return 'en';
  }

  // Fallback: Check Accept-Language header
  const acceptLanguage = req.headers.get('accept-language');
  if (acceptLanguage) {
    const languages = acceptLanguage
      .split(',')
      .map(lang => {
        const [code, qValue] = lang.trim().split(';q=');
        const q = qValue ? parseFloat(qValue) : 1.0;
        return { code: code.split('-')[0].toLowerCase(), q };
      })
      .sort((a, b) => b.q - a.q);

    for (const { code } of languages) {
      if (code === 'sv') return 'sv';
    }
  }

  // Default to English for international audience
  return 'en';
}

/**
 * Add security headers to response
 */
function setSecurityHeaders(response: NextResponse) {
  // Prevent DNS prefetching for privacy
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  
  // Enforce HTTPS
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  );
  
  // Prevent clickjacking
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  
  // Prevent MIME sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff');
  
  // Referrer policy
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Permissions policy
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  );
  
  return response;
}

/**
 * Middleware function to handle locale detection and routing
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip static files, API routes, _next
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/assets/') ||
    pathname.startsWith('/favicon') ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js|woff|woff2|ttf|webp)$/)
  ) {
    return setSecurityHeaders(NextResponse.next());
  }

  const pathnameHasLocale = /^\/(sv|en)(\/|$)/.test(pathname);
  
  // Skip root path - let page.tsx handle it
  if (pathname === '/') {
    return setSecurityHeaders(NextResponse.next());
  }
  
  // If path doesn't have locale, redirect to detected locale
  if (!pathnameHasLocale) {
    const detectedLocale = detectLocale(req);
    const url = req.nextUrl.clone();
    url.pathname = `/${detectedLocale}${pathname}`;
    
    const response = NextResponse.redirect(url);
    response.cookies.set('NEXT_LOCALE', detectedLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    });
    
    return setSecurityHeaders(response);
  }

  return setSecurityHeaders(NextResponse.next());
}

export const config = {
  matcher: ['/((?!_next|api|assets|favicon).*)'],
};
