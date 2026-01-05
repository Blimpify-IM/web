// ===============================================
// middleware.ts
// Next.js Middleware for security headers
// ===============================================

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware function to remove debug headers in production
 * 
 * Security:
 * - Removes Next.js debug headers in production
 */
export function middleware(req: NextRequest) {
  // Pass through all requests
  const response = NextResponse.next();
  
  // Remove Next.js debug headers in production (security best practice)
  // These headers expose internal caching strategy and can aid attackers
  if (process.env.NODE_ENV === 'production') {
    response.headers.delete('x-nextjs-cache');
    response.headers.delete('x-nextjs-prerender');
    response.headers.delete('x-nextjs-stale-time');
  }
  
  return response;
}

// Configure which paths trigger the middleware
// '/:path*' matches all routes for header removal
export const config = {
  matcher: ['/:path*'],
};
