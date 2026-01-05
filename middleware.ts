// ===============================================
// middleware.ts
// Next.js Middleware for security headers
// ===============================================

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware function to add security headers and remove debug headers
 * 
 * Security:
 * - Adds security headers (CSP, X-Frame-Options, etc.)
 * - Removes Next.js debug headers in production
 */
export function middleware(req: NextRequest) {
  const response = NextResponse.next();
  
  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  // Content Security Policy - adjust as needed for your application
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
    "style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' data: https:; " +
    "font-src 'self' data:; " +
    "connect-src 'self' https:; " +
    "frame-ancestors 'none';"
  );
  
  // Remove Next.js debug headers (security best practice)
  response.headers.delete('x-nextjs-cache');
  response.headers.delete('x-nextjs-prerender');
  response.headers.delete('x-nextjs-stale-time');
  response.headers.delete('x-powered-by');
  
  return response;
}

// Configure which paths trigger the middleware
export const config = {
  matcher: ['/:path*'],
};
