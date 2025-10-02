import Layout from '../components/Layout'
import Link from 'next/link'
import CalcolatoreIncentivi from '../components/CalcolatoreIncentivi'
import FAQSection from '../components/FAQSection'

export default function Home() {
  const phone = '3520030795'
  const whatsappNumber = '393520030795'
  const whatsappMessage = encodeURIComponent("Ciao! Ho visto il vostro sito e vorrei ricevere un preventivo gratuito per i vostri servizi termoidraulici. Potete aiutarmi?")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const services = [
    {
      title: "Caldaie IMMERGAS",
      subtitle: "Partner Ufficiale IMMERGAS",
      description: "Caldaie a condensazione di ultima generazione con efficienza energetica A+. Installazione professionale in 24/48h con garanzia 5 anni.",
      href: "/montaggio-caldaie-immergas-ravenna",
      icon: "🔥",
      price: "da €1.200",
      originalPrice: "€1.800",
      savings: "Risparmio 10-20%*",
      urgency: "Installazione in 24/48h",
      benefits: [
        "Efficienza A+ certificata",
        "Garanzia 5 anni inclusa",
        "Installazione in 24/48h",
        "Risparmio bolletta fino 20%"
      ],
      features: [
        "Tecnologia a condensazione",
        "Controllo remoto WiFi",
        "Manutenzione programmata",
        "Ricambi originali garantiti"
      ],
      popular: true
    },
    {
      title: "Pompe di Calore DAIKIN",
      subtitle: "Partner Ufficiale DAIKIN",
      description: "Pompe di calore aria-acqua DAIKIN per riscaldamento, raffrescamento e acqua calda. Incentivi statali fino a €15.000.",
      href: "/climatizzazione-e-pompe-di-calore-ravenna",
      icon: "🌡️",
      price: "da €3.500",
      originalPrice: "€8.000",
      savings: "Incentivi fino a €15.000",
      urgency: "Comfort tutto l'anno",
      benefits: [
        "Riscaldamento + Raffrescamento",
        "Incentivi fino a €15.000",
        "Efficienza A+++",
        "Controllo smart incluso"
      ],
      features: [
        "Tecnologia inverter",
        "Funzionamento fino -25°C",
        "App controllo remoto",
        "Classe energetica A+++"
      ],
      eco: true
    },
    {
      title: "Riscaldamento a Pavimento",
      subtitle: "Comfort e Risparmio",
      description: "Sistema radiante a pavimento per comfort uniforme e risparmio energetico del 10%. Progettazione e installazione chiavi in mano.",
      href: "/riscaldamento-a-pavimento-ravenna",
      icon: "🏠",
      price: "da €35/mq",
      originalPrice: "€50/mq",
      savings: "Risparmio 10%*",
      urgency: "Progetto gratuito",
      benefits: [
        "Comfort uniforme in casa",
        "Risparmio energetico 10%",
        "Progettazione gratuita",
        "Compatibile con ogni caldaia"
      ],
      features: [
        "Tubazioni certificate",
        "Isolamento termico incluso",
        "Termostati per zona",
        "Garanzia 10 anni"
      ],
      premium: true
    }
  ]

  const testimonials = [
    {
      name: "Marco R.",
      location: "Ravenna Centro",
      text: "Caldaia sostituita in un giorno, bolletta dimezzata! Professionali e veloci.",
      rating: 5,
      service: "Caldaia IMMERGAS"
    },
    {
      name: "Laura M.",
      location: "Marina di Ravenna",
      text: "Pompa di calore installata con incentivi. Ora riscaldo e raffreddo spendendo la metà!",
      rating: 5,
      service: "Pompa di Calore DAIKIN"
    },
    {
      name: "Giuseppe T.",
      location: "Faenza",
      text: "Riscaldamento a pavimento fantastico! Casa sempre calda e bollette leggere.",
      rating: 5,
      service: "Riscaldamento a Pavimento"
    }
  ]

  return (
    <Layout
      title="EFFEMME SRL - Termoidraulica, Caldaie IMMERGAS, Pompe di Calore DAIKIN Ravenna"
      description="EFFEMME SRL: esperti termoidraulici a Ravenna. Caldaie IMMERGAS, pompe di calore DAIKIN, climatizzatori, riscaldamento a pavimento. Preventivo gratuito!"
      keywords="termoidraulica ravenna, caldaie immergas ravenna, pompe di calore daikin, climatizzatori ravenna, riscaldamento a pavimento, effemme srl"
      canonical="/"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 text-secondary-700 section-padding relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-primary-100 text-primary-800 px-4 py-2 rounded-lg inline-block mb-4 font-semibold">
                PARTNER UFFICIALI IMMERGAS & DAIKIN
              </div>
              <h1 className="heading-xl text-secondary-700 mb-6">
                <span className="text-red-600 font-bold">Caldaia Rotta?</span><br />
                <span className="text-primary-700">Risolviamo in 24 ore</span><br />
                <span className="text-green-600">con Garanzia Totale</span>
              </h1>
              <p className="text-xl text-secondary-700 mb-6 leading-relaxed">
                <strong>Termoidraulici specializzati a Ravenna dal 1995</strong><br />
                Partner ufficiali <strong>IMMERGAS</strong> e <strong>DAIKIN</strong>
              </p>
              
              {/* Form preventivo rapido */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-orange-200 mb-6">
                <h3 className="text-lg font-bold text-secondary-700 mb-4 text-center">
                  PREVENTIVO GRATUITO IN 24H
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Nome"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Telefono"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      required
                    />
                  </div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                    <option value="">Seleziona Servizio</option>
                    <option value="caldaia">Caldaia IMMERGAS</option>
                    <option value="pompa-calore">Pompa di Calore DAIKIN</option>
                    <option value="climatizzatore">Climatizzatore</option>
                    <option value="pavimento">Riscaldamento a Pavimento</option>
                    <option value="assistenza">Assistenza Tecnica</option>
                  </select>
                  <textarea
                    placeholder="Descrivi brevemente la tua esigenza"
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                  >
                    RICHIEDI PREVENTIVO GRATUITO
                  </button>
                </form>
              </div>

              {/* Perché Sceglierci */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-primary-200 shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-secondary-700 text-center">
                  Perché Sceglierci
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <span className="font-semibold">🏆 25+ anni di esperienza a Ravenna</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold">⚡ Interventi in 24-48h garantiti</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold">🛡️ Garanzia 5 anni su tutti i lavori</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold">🎯 Partner ufficiali IMMERGAS & DAIKIN</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Box offerta speciale */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-6 mb-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">OFFERTA SPECIALE</div>
                  <div className="text-xl mb-4">Solo per i primi 10 clienti</div>
                  <div className="bg-white text-red-600 rounded-lg p-4 font-bold text-lg">
                    SCONTO 10% + SOPRALLUOGO GRATUITO
                  </div>
                  <div className="text-sm mt-2 opacity-90">Valida fino al 31 Dicembre 2025</div>
                </div>
              </div>

              {/* Box vantaggi */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-primary-200 shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-secondary-700 text-center">
                  🏆 Perché Oltre 1000 Famiglie ci Scelgono
                </h2>
                <ul className="space-y-3 text-secondary-700">
                  <li className="flex items-start">
                    <span><strong>Risparmio energetico</strong> del 10-20% in bolletta*</span>
                  </li>
                  <li className="flex items-start">
                    <span><strong>Installazione rapida</strong> in 24-48 ore</span>
                  </li>
                  <li className="flex items-start">
                    <span><strong>Partner ufficiale</strong> IMMERGAS e DAIKIN</span>
                  </li>
                  <li className="flex items-start">
                    <span><strong>Garanzia estesa</strong> e assistenza rapida</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Chi Siamo Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-secondary-700 mb-6">Chi Siamo</h2>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
              Dal 1995 al servizio di Ravenna e provincia con professionalità e competenza
            </p>
          </div>

          {/* Storia e Numeri */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Storia */}
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-700 mb-6">La Nostra Storia</h3>
              <div className="space-y-4 text-secondary-700">
                <p className="text-lg">
                  <strong>Dal 1995</strong> EFFEMME SRL è il punto di riferimento per gli impianti termoidraulici 
                  a Ravenna e in tutta la provincia.
                </p>
                <p>
                  Fondata con la missione di offrire soluzioni innovative e affidabili, 
                  l'azienda si è specializzata nell'installazione e manutenzione di caldaie, 
                  pompe di calore, climatizzatori e sistemi di riscaldamento a pavimento.
                </p>
                <p>
                  La nostra esperienza ventennale ci ha permesso di diventare 
                  <strong> partner ufficiali IMMERGAS e DAIKIN</strong>, 
                  garantendo ai nostri clienti prodotti di qualità superiore e assistenza specializzata.
                </p>
              </div>
            </div>

            {/* Numeri */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-lg">Anni di Esperienza</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-lg">Clienti Soddisfatti</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-lg">Comuni Serviti</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-lg">Clienti Soddisfatti</div>
              </div>
            </div>
          </div>




        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-secondary-700 mb-4">
              Cosa Dicono i Nostri Clienti
            </h2>
            <p className="text-lg text-secondary-600">
              Oltre 1000 famiglie soddisfatte in Romagna
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all">
                {/* Stars */}
                <div className="stars flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">5.0</span>
                </div>
                
                {/* Quote */}
                <blockquote className="text-secondary-700 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Client Info */}
                <div className="client-info flex items-center">
                  <img 
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=3b82f6&color=fff&size=64&rounded=true`}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 shadow-md"
                  />
                  <div className="flex-1">
                    <div className="font-bold text-secondary-700 text-lg">{testimonial.name}</div>
                    <div className="text-sm text-secondary-600 mb-1">{testimonial.location}</div>
                    <div className="text-sm text-primary-600 font-semibold">{testimonial.service}</div>
                  </div>
                </div>
                
                {/* Service Badge */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold inline-block">
                    ✓ Cliente Verificato
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA WhatsApp nella sezione testimonial */}
          <div className="text-center mt-12">
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 inline-block">
              <p className="text-lg text-secondary-700 mb-4">
                <strong>Vuoi risultati simili?</strong> Richiedi il tuo preventivo personalizzato
              </p>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center transition-all transform hover:scale-105 shadow-lg"
              >
                SCRIVICI SU WHATSAPP
                <span className="ml-2 bg-white text-green-500 px-2 py-1 rounded text-sm">RISPOSTA IN 5 MIN</span>
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* Servizi Principali - Panoramica */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-secondary-700 mb-6">
              I Nostri Servizi Principali
            </h2>
            <p className="text-xl text-secondary-700 max-w-2xl mx-auto">
              Partner ufficiali dei migliori marchi per soluzioni complete di riscaldamento e climatizzazione.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all group">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-lg font-bold text-secondary-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-secondary-600">{service.subtitle}</p>
                </div>
                
                <div className="text-center mb-4">
                  <div className="text-xl font-bold text-primary-600 mb-1">{service.price}</div>
                  <div className="text-sm text-green-600 font-semibold">{service.savings}</div>
                </div>
                
                <Link href={service.href} className="btn-primary w-full text-center block">
                  Scopri di Più
                </Link>
              </div>
            ))}
          </div>
          
          {/* CTA per pagina servizi completa */}
          <div className="text-center">
            <Link href="/servizi" className="btn-outline inline-flex items-center">
              <span>Vedi Tutti i Nostri Servizi</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Sezione Incentivi */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Approfitta degli Incentivi Statali 2025</h3>
              <p className="text-xl mb-2">
                Scegli la soluzione più conveniente per te
              </p>
              <p className="text-lg opacity-90">
                Fino a <strong>€15.000 di contributi</strong> per pompe di calore e sistemi ibridi
              </p>
            </div>

            {/* Soluzioni incentivi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Detrazioni Fiscali */}
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2"></div>
                  <h4 className="text-xl font-bold mb-2">Detrazioni Fiscali</h4>
                  <p className="text-sm opacity-90">Per prima e seconda casa</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                    <span className="font-semibold">Ecobonus</span>
                    <span className="bg-blue-500 px-3 py-1 rounded-full text-sm font-bold">50%</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                    <span className="font-semibold">Bonus Ristrutturazioni</span>
                    <span className="bg-green-500 px-3 py-1 rounded-full text-sm font-bold">50%</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <button 
                    onClick={() => document.getElementById('calcolatore-incentivi').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-bold transition-all w-full"
                  >
                    Calcola Detrazioni
                  </button>
                </div>
              </div>

              {/* Conto Termico */}
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2"></div>
                  <h4 className="text-xl font-bold mb-2">Conto Termico 3.0</h4>
                  <p className="text-sm opacity-90">Rimborso diretto GSE</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                    <span className="font-semibold">Contributo diretto</span>
                    <span className="bg-orange-500 px-3 py-1 rounded-full text-sm font-bold">fino 65%</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                    <span className="font-semibold">Pagamento</span>
                    <span className="text-sm">2-5 anni</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <Link 
                href="/conto-termico-3-0"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-700 px-6 py-2 rounded-lg font-bold transition-all"
              >
                Calcola Conto Termico
              </Link>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <p className="text-lg mb-4">
                <strong>Non sai quale scegliere?</strong> Usa il nostro calcolatore per confrontare tutte le opzioni
              </p>
              <button 
                onClick={() => document.getElementById('calcolatore-incentivi').scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-700 px-8 py-3 rounded-lg font-bold transition-all text-lg"
              >
                Confronta Tutti gli Incentivi
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="trust-signals bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-secondary-700 mb-6">Garanzie e Certificazioni</h2>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
              La tua sicurezza è la nostra priorità. Lavoriamo solo con i migliori partner e offriamo garanzie complete.
            </p>
          </div>

          {/* Certificazioni Partner */}
          <div className="certificazioni grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="bg-white rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-all mb-4">
                <img 
                  src="/logoImmergas.png" 
                  alt="Partner IMMERGAS"
                  className="h-16 mx-auto mb-3 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="text-3xl font-bold text-red-600 hidden">IMMERGAS</div>
                <div className="text-sm font-semibold text-secondary-700">Partner Ufficiale</div>
              </div>
              <p className="text-sm text-secondary-600">Caldaie a condensazione di alta qualità</p>
            </div>

            <div className="text-center group">
              <div className="bg-white rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-all mb-4">
                <img 
                  src="/logodaikin.png" 
                  alt="Partner DAIKIN"
                  className="h-16 mx-auto mb-3 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="text-3xl font-bold text-blue-600 hidden">DAIKIN</div>
                <div className="text-sm font-semibold text-secondary-700">Partner Ufficiale</div>
              </div>
              <p className="text-sm text-secondary-600">Pompe di calore e climatizzatori</p>
            </div>

            <div className="text-center group">
              <div className="bg-white rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-all mb-4">
                <img 
                  src="/logo-gas-uni7129.svg" 
                  alt="Abilitazione GAS UNI 7129:2015"
                  className="h-16 mx-auto mb-3 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="text-3xl font-bold text-yellow-600 mb-3 hidden">GAS</div>
                <div className="text-sm font-semibold text-secondary-700">Abilitazione Gas</div>
              </div>
              <p className="text-sm text-secondary-600">Certificazione UNI 7129:2015</p>
            </div>

            <div className="text-center group">
              <div className="bg-white rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-all mb-4">
                <img 
                  src="/logoFgas.jpg" 
                  alt="Certificazione F-GAS"
                  className="h-16 mx-auto mb-3 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="text-3xl font-bold text-green-600 mb-3 hidden">F-GAS</div>
                <div className="text-sm font-semibold text-secondary-700">Certificazione F-GAS</div>
              </div>
              <p className="text-sm text-secondary-600">Abilitazione frigoristi</p>
            </div>
          </div>

          {/* Garanzie */}
          <div className="garanzie bg-primary-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary-700">Le Nostre Garanzie</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2 text-secondary-700">Garanzia 5 anni su lavori</h4>
                <p className="text-secondary-600 text-sm">Copertura completa su tutti gli interventi di installazione e manutenzione</p>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2 text-secondary-700">Assicurazione professionale</h4>
                <p className="text-secondary-600 text-sm">Copertura assicurativa per danni a terzi e responsabilità civile</p>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2 text-secondary-700">Ricambi originali garantiti</h4>
                <p className="text-secondary-600 text-sm">Utilizziamo solo ricambi originali dei produttori con garanzia ufficiale</p>
              </div>
            </div>
          </div>

          {/* Numeri e Statistiche */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">I Nostri Numeri</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-lg">Anni di Esperienza</div>
                <div className="text-sm opacity-80">Dal 1995</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-lg">Clienti Soddisfatti</div>
                <div className="text-sm opacity-80">In Romagna</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-lg">Comuni Serviti</div>
                <div className="text-sm opacity-80">Ravenna e provincia</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-lg">Clienti Soddisfatti</div>
                <div className="text-sm opacity-80">Rating medio</div>
              </div>
            </div>
          </div>

          {/* Processo di Lavoro */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-secondary-700">Il Nostro Processo</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary-100 text-primary-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                <h4 className="font-bold mb-2">Sopralluogo Gratuito</h4>
                <p className="text-sm text-secondary-600">Analisi tecnica e preventivo dettagliato senza impegno</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 text-primary-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                <h4 className="font-bold mb-2">Progettazione</h4>
                <p className="text-sm text-secondary-600">Soluzione personalizzata per le tue esigenze specifiche</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 text-primary-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                <h4 className="font-bold mb-2">Installazione</h4>
                <p className="text-sm text-secondary-600">Lavori eseguiti da tecnici specializzati e certificati</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 text-primary-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
                <h4 className="font-bold mb-2">Assistenza</h4>
                <p className="text-sm text-secondary-600">Manutenzione programmata e assistenza tecnica specializzata</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Sezione Calcolatore Incentivi */}
      <section id="calcolatore-incentivi" className="bg-gray-50 section-padding">
        <div className="container-custom">
          <CalcolatoreIncentivi />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-gray-100 py-8">
        <div className="container-custom">
          <div className="text-center text-sm text-gray-600">
            <p className="mb-2">
              <strong>*Disclaimer:</strong> I dati di risparmio energetico sono indicativi e basati su fonti ufficiali (ENEA, studi settoriali). 
              I risultati effettivi possono variare in base a fattori specifici come: tipologia di abitazione, isolamento termico, 
              abitudini di utilizzo, condizioni climatiche e stato dell'impianto esistente.
            </p>
            <p>
              Per una valutazione personalizzata e accurata del risparmio energetico, 
              richiedi un sopralluogo tecnico gratuito.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}