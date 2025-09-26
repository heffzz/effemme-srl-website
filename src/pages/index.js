import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  const phone = process.env.PHONE || '{{PHONE}}'

  const services = [
    {
      title: "Caldaie IMMERGAS",
      description: "Installazione, manutenzione e riparazione caldaie IMMERGAS. Efficienza energetica garantita.",
      href: "/montaggio-caldaie-immergas-ravenna",
      icon: "🔥"
    },
    {
      title: "Pompe di Calore DAIKIN",
      description: "Sistemi di riscaldamento e raffrescamento eco-sostenibili DAIKIN per la tua casa.",
      href: "/pompe-di-calore-daikin-ravenna",
      icon: "♻️"
    },
    {
      title: "Riscaldamento a Pavimento",
      description: "Comfort ottimale con sistemi di riscaldamento a pavimento radiante.",
      href: "/riscaldamento-a-pavimento-ravenna",
      icon: "🏠"
    },
    {
      title: "Climatizzatori",
      description: "Installazione climatizzatori per il massimo comfort in ogni stagione.",
      href: "/montaggio-climatizzatori-ravenna",
      icon: "❄️"
    },
    {
      title: "Riparazioni e Manutenzione",
      description: "Interventi rapidi per riparazioni e manutenzione di tutti gli impianti.",
      href: "/piccole-riparazioni-manutenzione-ravenna",
      icon: "🔧"
    }
  ]

  const heroVariants = [
    {
      title: "Termoidraulica di Qualità a Ravenna",
      subtitle: "EFFEMME SRL: i tuoi esperti di fiducia per caldaie, climatizzatori e riscaldamento"
    },
    {
      title: "Caldaie IMMERGAS e Pompe di Calore DAIKIN",
      subtitle: "Installazione professionale e manutenzione garantita a Ravenna e provincia"
    },
    {
      title: "Riscaldamento e Climatizzazione Ravenna",
      subtitle: "Soluzioni complete per il comfort della tua casa con EFFEMME SRL"
    }
  ]

  const ctaVariants = [
    "Richiedi Preventivo Gratuito",
    "Chiama per Consulenza Gratuita"
  ]

  // Usa la prima variante per default
  const currentHero = heroVariants[0]
  const currentCta = ctaVariants[0]

  return (
    <Layout
      title="EFFEMME SRL - Termoidraulica, Caldaie IMMERGAS, Pompe di Calore DAIKIN Ravenna"
      description="EFFEMME SRL: esperti termoidraulici a Ravenna. Caldaie IMMERGAS, pompe di calore DAIKIN, climatizzatori, riscaldamento a pavimento. Preventivo gratuito!"
      keywords="termoidraulica ravenna, caldaie immergas ravenna, pompe di calore daikin, climatizzatori ravenna, riscaldamento a pavimento, effemme srl"
      canonical="/"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 text-secondary-900 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-xl text-secondary-900 mb-6">
                {currentHero.title}
              </h1>
              <p className="text-xl text-secondary-700 mb-8 leading-relaxed">
                {currentHero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contatti" className="btn-secondary bg-primary-600 text-white hover:bg-primary-700">
                  {currentCta}
                </Link>
                <a 
                  href={`tel:${phone}`} 
                  className="btn-primary bg-primary-600 hover:bg-primary-700 border-2 border-primary-600 text-white"
                  aria-label="Chiama subito EFFEMME SRL"
                >
                  📞 Chiama Subito
                </a>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-secondary-700">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Preventivo Gratuito
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Intervento Rapido
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Garanzia Qualità
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-primary-200 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-secondary-900">Perché Scegliere EFFEMME SRL?</h2>
                <ul className="space-y-4 text-secondary-700">
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">✅</span>
                    <span>Oltre 25 anni di esperienza nel settore termoidraulico</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🏆</span>
                    <span>Partner ufficiale IMMERGAS e DAIKIN</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">⚡</span>
                    <span>Interventi rapidi e assistenza 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">💰</span>
                    <span>Preventivi gratuiti e prezzi trasparenti</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi Principali */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">I Nostri Servizi Specializzati</h2>
            <p className="text-body max-w-3xl mx-auto">
              EFFEMME SRL offre soluzioni complete per il riscaldamento, climatizzazione e termoidraulica 
              a Ravenna e provincia. Qualità garantita e personale specializzato.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 group">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-secondary-900 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  Scopri di più
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zona di Servizio */}
-      <section className="section-padding">
+      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Serviamo Ravenna e Provincia</h2>
              <p className="text-body mb-6">
                EFFEMME SRL opera principalmente a Ravenna e in tutta la provincia, garantendo 
                interventi rapidi e assistenza professionale per tutti i tuoi impianti termoidraulici.
              </p>
              <div className="grid grid-cols-2 gap-4 text-secondary-800">
                <div>• Ravenna Centro</div>
                <div>• Marina di Ravenna</div>
                <div>• Cervia</div>
                <div>• Faenza</div>
                <div>• Lugo</div>
                <div>• Bagnacavallo</div>
                <div>• Russi</div>
                <div>• E tutta la provincia</div>
              </div>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-700 mb-6">Contattaci Ora</h3>
              <div className="space-y-4">
                <a 
                  href={`tel:${phone}`}
                  className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <div className="bg-primary-600 text-white p-3 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">Chiamaci</div>
                    <div className="text-primary-600">{phone}</div>
                  </div>
                </a>
                <Link 
                  href="/contatti"
                  className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <div className="bg-primary-600 text-white p-3 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">Richiedi Preventivo</div>
                    <div className="text-primary-600">Gratuito e senza impegno</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Finale */}
      <section className="bg-primary-50 text-secondary-900 section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-secondary-900 mb-6">
            Hai Bisogno di un Intervento Termoidraulico?
          </h2>
          <p className="text-xl text-secondary-700 mb-8 max-w-2xl mx-auto">
            Non aspettare! Contatta EFFEMME SRL per un preventivo gratuito e scopri 
            le nostre soluzioni per il comfort della tua casa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${phone}`}
              className="btn-secondary bg-white text-primary-600 hover:bg-gray-50 border border-primary-600"
            >
              📞 Chiama Ora
            </a>
            <Link href="/contatti" className="btn-primary bg-primary-600 hover:bg-primary-700 text-white">
              💬 Richiedi Preventivo
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}