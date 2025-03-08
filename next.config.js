/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
    i18n: {
        locales: ['sv'],
        defaultLocale: 'sv',
    },
    images: {
        domains: [],
    },
    // Inaktivera CSS-optimering som orsakar problem
    experimental: {
        optimizeCss: false,
    },
}

module.exports = nextConfig 