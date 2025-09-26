import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const phone = process.env.PHONE || '{{PHONE}}'
  const email = process.env.CONTACT_EMAIL || '{{EMAIL}}'

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Chi Siamo', href: '/chi-siamo' },
    { name: 'Servizi', href: '/servizi' },
    { name: 'Contatti', href: '/contatti' }
  ]

  const isActive = (href) => router.pathname === href

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar con contatti */}
      <div className="bg-primary-50 text-primary-700 py-2">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <a 
                href={`tel:${phone}`} 
                className="flex items-center hover:text-primary-600 transition-colors"
                aria-label="Chiama EFFEMME SRL"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {phone}
              </a>
              <a 
                href={`mailto:${email}`} 
                className="flex items-center hover:text-primary-600 transition-colors"
                aria-label="Invia email a EFFEMME SRL"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {email}
              </a>
            </div>
            <div className="flex items-center space-x-3 mt-1 sm:mt-0">
              <span className="text-xs">Ravenna e provincia</span>
              <a 
                href={`https://wa.me/${phone?.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-100 hover:bg-primary-200 px-3 py-1 rounded text-xs font-medium transition-colors text-primary-700 border border-primary-300"
                aria-label="Contattaci su WhatsApp"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-primary-700">
              EFFEMME <span className="text-secondary-700">SRL</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-secondary-800 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={`tel:${phone}`}
              className="btn-primary"
              aria-label="Chiama ora EFFEMME SRL"
            >
              Chiama Ora
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-secondary-800 hover:text-primary-600 hover:bg-gray-100"
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
            <div className="flex flex-col space-y-3 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium py-2 transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-600'
                      : 'text-secondary-800 hover:text-primary-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={`tel:${phone}`}
                className="btn-primary inline-block text-center mt-4"
                aria-label="Chiama ora EFFEMME SRL"
              >
                Chiama Ora
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}