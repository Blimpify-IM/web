/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@blimpify-im/ui'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
