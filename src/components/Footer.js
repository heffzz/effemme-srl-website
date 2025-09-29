import Link from 'next/link'

export default function Footer() {
  const phone = process.env.PHONE || '3520030795'
  const email = process.env.CONTACT_EMAIL || '{{EMAIL}}'
  const whatsappNumber = '393520030795' // Formato internazionale per WhatsApp
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-50 text-secondary-700">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informazioni Azienda */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-600">EFFEMME SRL</h3>
            <p className="text-secondary-700 mb-4">
              Esperti in termoidraulica, climatizzazione e riscaldamento a Ravenna. 
              Qualità e professionalità dal 1995.
            </p>
            <div className="space-y-2 text-sm text-secondary-600">
              <p>P.IVA: 02170530394</p>
              <p>VIA DEL FABBRO, 44</p>
              <p>FRAZ. GAMBELLARA</p>
              <p>48124 RAVENNA (RA)</p>
            </div>
          </div>

          {/* Servizi */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-700">I Nostri Servizi</h3>
            <ul className="space-y-2 text-secondary-700">
              <li>
                <Link href="/montaggio-caldaie-immergas-ravenna" className="hover:text-primary-400 transition-colors">
                  Caldaie IMMERGAS
                </Link>
              </li>
              <li>
                <Link href="/climatizzazione-e-pompe-di-calore-ravenna" className="hover:text-primary-400 transition-colors">
                  Climatizzazione e Pompe di Calore
                </Link>
              </li>
              <li>
                <Link href="/riscaldamento-a-pavimento-ravenna" className="hover:text-primary-400 transition-colors">
                  Riscaldamento a Pavimento
                </Link>
              </li>

            </ul>
          </div>

          {/* Link Utili */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-700">Link Utili</h3>
            <ul className="space-y-2 text-secondary-700">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/chi-siamo" className="hover:text-primary-400 transition-colors">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/servizi" className="hover:text-primary-400 transition-colors">
                  Tutti i Servizi
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="hover:text-primary-400 transition-colors">
                  Contatti
                </Link>
              </li>
              <li>
                <a 
                  href="/sitemap.xml" 
                  className="hover:text-primary-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-700">Contatti</h3>
            <div className="space-y-3">
              <a 
                href={`tel:${phone}`} 
                className="flex items-center text-secondary-700 hover:text-primary-600 transition-colors"
                aria-label="Chiama EFFEMME SRL"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {phone}
              </a>
              <a 
                href={`mailto:${email}`} 
                className="flex items-center text-secondary-700 hover:text-primary-600 transition-colors"
                aria-label="Invia email a EFFEMME SRL"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {email}
              </a>
              <div className="flex items-center text-secondary-700">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Ravenna e provincia
              </div>
              <div className="pt-2">
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=Ciao%20EFFEMME%20SRL%2C%20vorrei%20informazioni%20sui%20vostri%20servizi`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-100 hover:bg-green-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors text-green-700 border border-green-300"
                  aria-label="Contattaci su WhatsApp"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Scrivici su WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-600 text-sm">
            © {currentYear} EFFEMME SRL. Tutti i diritti riservati.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-secondary-600">
            <span>P.IVA: 02170530394</span>
            <span>•</span>
            <span>Ravenna, Italia</span>
          </div>
        </div>
      </div>
    </footer>
  )
}