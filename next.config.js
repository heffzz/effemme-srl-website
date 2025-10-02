/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Disabilitato per supportare API routes
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://effemmesrl.com',
    CONTACT_EMAIL: process.env.CONTACT_EMAIL || 'info@effemmesrl.com',
    PHONE: process.env.PHONE || '3520030795',
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID || '{{GA_MEASUREMENT_ID}}',
    // Configurazione SMTP per invio email
    SMTP_HOST: process.env.SMTP_HOST || 'smtp.gmail.com',
    SMTP_PORT: process.env.SMTP_PORT || '587',
    SMTP_USER: process.env.SMTP_USER || '',
    SMTP_PASS: process.env.SMTP_PASS || '',
    SMTP_FROM: process.env.SMTP_FROM || 'info@effemmesrl.com'
  },
  experimental: {
    scrollRestoration: true
  }
}

module.exports = nextConfig