import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  reactStrictMode: true,
  
  // Dölj Next.js version från headers (security best practice)
  poweredByHeader: false,
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.s3.eu-north-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 's3.eu-north-1.amazonaws.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  typescript: {
    // Inaktivera TypeScript strict checking under build
    ignoreBuildErrors: false,
  },
  transpilePackages: ['@blimpify-im/ui'],
  webpack: (config: any) => {
    // Exkludera Node.js-only moduler från browser build
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    return config;
  },

  // ============================================
  // SECURITY HEADERS
  // ============================================
  async headers() {
    return [
      {
        // Applicera på alla routes
        source: '/:path*',
        headers: [
          {
            // Förhindra att sidan visas i iframe (clickjacking protection)
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            // Förhindra MIME-sniffing som kan leda till XSS
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            // Kontrollera hur mycket referrer info skickas
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            // Begränsa vilka features som kan användas (privacy)
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
          {
            // XSS Protection (legacy, men vissa äldre browsers använder den)
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            // Content Security Policy - tillåter Google Analytics och Google Tag Manager
            key: 'Content-Security-Policy',
            value: "default-src 'self'; " +
                   "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; " +
                   "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
                   "img-src 'self' data: https:; " +
                   "font-src 'self' data: https://fonts.gstatic.com; " +
                   "connect-src 'self' https: https://www.google-analytics.com https://www.googletagmanager.com; " +
                   "frame-ancestors 'none';"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
