/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://effemmesrl.com',
    CONTACT_EMAIL: process.env.CONTACT_EMAIL || '{{EMAIL}}',
    PHONE: process.env.PHONE || '{{PHONE}}',
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID || '{{GA_MEASUREMENT_ID}}'
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true
  }
}

module.exports = nextConfig