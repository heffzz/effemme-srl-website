import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const phone = process.env.PHONE || '3520030795'
  const email = process.env.CONTACT_EMAIL || 'info@effemmesrl.com'
  const whatsappNumber = '393520030795' // Formato internazionale per WhatsApp

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Servizi', href: '/servizi' },

    { name: 'Chi Siamo', href: '/chi-siamo' },
    { name: 'Contatti', href: '/contatti' }
  ]

  const isActive = (href) => router.pathname === href

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Emergency bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span className="font-semibold">EMERGENZE 24/7:</span>
              <a 
                href={`tel:${phone}`} 
                className="flex items-center hover:text-red-200 transition-colors font-bold text-lg"
                aria-label="Chiama per emergenze EFFEMME SRL"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {phone}
              </a>
            </div>
            <div className="flex items-center space-x-3 mt-1 sm:mt-0">
              <span className="text-xs">Ravenna e provincia • Intervento rapido</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/logo-effemme-original.png" 
              alt="EFFEMME SRL - Impianti termoidraulici Ravenna" 
              className="h-20 sm:h-24 md:h-28 lg:h-36 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  item.isEmergency 
                    ? 'text-red-600 hover:text-red-700 font-bold'
                    : isActive(item.href)
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-secondary-700 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/contatti"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg"
              aria-label="Richiedi preventivo gratuito"
            >
              PREVENTIVO GRATUITO
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-3 rounded-md text-secondary-700 hover:text-primary-600 hover:bg-gray-100 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Apri menu di navigazione"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-1 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium py-3 px-2 rounded-md transition-colors min-h-[44px] flex items-center ${
                    item.isEmergency
                      ? 'text-red-600 bg-red-50 font-bold'
                      : isActive(item.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-secondary-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="/contatti"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold transition-all text-center mt-4 min-h-[44px] flex items-center justify-center"
                aria-label="Richiedi preventivo gratuito"
              >
                PREVENTIVO GRATUITO
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}