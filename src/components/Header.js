import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const phone = process.env.PHONE || '3520030795'
  const email = process.env.CONTACT_EMAIL || '{{EMAIL}}'
  const whatsappNumber = '393520030795' // Formato internazionale per WhatsApp

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
                href={`https://wa.me/${whatsappNumber}?text=Ciao%20EFFEMME%20SRL%2C%20vorrei%20informazioni%20sui%20vostri%20servizi`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-primary-600 transition-colors bg-green-100 hover:bg-green-200 px-2 py-1 rounded-md"
                aria-label="Contatta EFFEMME SRL su WhatsApp"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
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
            <img 
              src="/logo-effemme-original.png" 
              alt="EFFEMME SRL - Impianti termoidraulici Ravenna" 
              className="h-20 sm:h-24 md:h-28 lg:h-36 w-auto"
            />
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
                    : 'text-secondary-700 hover:text-primary-600'
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
                    isActive(item.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-secondary-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={`tel:${phone}`}
                className="btn-primary inline-block text-center mt-4 min-h-[44px] flex items-center justify-center"
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