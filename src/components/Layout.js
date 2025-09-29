import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import ChatWidget from './ChatWidget'
import UrgencyBanner from './UrgencyBanner'
import MobileQuickActions from './MobileQuickActions'

export default function Layout({ 
  children, 
  title = "EFFEMME SRL - Termoidraulica e Climatizzazione Ravenna",
  description = "EFFEMME SRL: esperti in termoidraulica, montaggio caldaie IMMERGAS, pompe di calore DAIKIN, climatizzatori e riscaldamento a pavimento a Ravenna.",
  keywords = "termoidraulica ravenna, caldaie immergas, pompe di calore daikin, climatizzatori ravenna, riscaldamento a pavimento",
  canonical,
  ogImage = "/og-image.png"
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://effemmesrl.com'
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "EFFEMME SRL",
    "description": "Termoidraulica, montaggio caldaie, climatizzatori e pompe di calore",
    "url": siteUrl,
    "telephone": process.env.PHONE || "3520030795",
    "email": process.env.CONTACT_EMAIL || "info@effemmesrl.com",
    "vatID": "IT02170530394",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "VIA DEL FABBRO, 44 - FRAZ. GAMBELLARA",
      "addressLocality": "Ravenna",
      "addressRegion": "RA",
      "postalCode": "48124",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "44.4056",
      "longitude": "12.1985"
    },
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 08:00-12:00"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "44.4056",
        "longitude": "12.1985"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servizi Termoidraulici",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Montaggio Caldaie IMMERGAS",
            "description": "Installazione e manutenzione caldaie IMMERGAS"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pompe di Calore DAIKIN",
            "description": "Installazione pompe di calore DAIKIN"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Riscaldamento a Pavimento",
            "description": "Progettazione e installazione riscaldamento a pavimento"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Montaggio Climatizzatori",
            "description": "Installazione e manutenzione climatizzatori"
          }
        }
      ]
    }
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=yes, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="EFFEMME SRL" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={fullCanonical} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={fullCanonical} />
        <meta property="og:site_name" content="EFFEMME SRL" />
        <meta property="og:image" content={`${siteUrl}${ogImage}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="it_IT" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Google Analytics */}
        {process.env.GA_MEASUREMENT_ID && process.env.GA_MEASUREMENT_ID !== '{{GA_MEASUREMENT_ID}}' && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.GA_MEASUREMENT_ID}');
                `,
              }}
            />
          </>
        )}
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <UrgencyBanner />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ChatWidget />
        <MobileQuickActions />
      </div>
    </>
  )
}