/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Om du använder Next.js 13+ med app router
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig 