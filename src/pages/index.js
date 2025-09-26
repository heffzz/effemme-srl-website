import Layout from '../components/Layout'
import Link from 'next/link'
import CalcolatoreIncentivi from '../components/CalcolatoreIncentivi'

export default function Home() {
  const phone = process.env.PHONE || '{{PHONE}}'
  const whatsappNumber = phone.replace(/\s+/g, '').replace(/[^\d+]/g, '')
  const whatsappMessage = encodeURIComponent("Ciao! Ho visto il vostro sito e vorrei ricevere un preventivo gratuito per i vostri servizi termoidraulici. Potete aiutarmi?")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const services = [
    {
      title: "Caldaie IMMERGAS",
      description: "Risparmia fino al 30% sui consumi con le nostre caldaie a condensazione. Installazione in 24h!",
      href: "/montaggio-caldaie-immergas-ravenna",
      icon: "🔥",
      savings: "Risparmio fino al 30%",
      urgency: "Installazione in 24h"
    },
    {
      title: "Pompe di Calore DAIKIN",
      description: "Riscalda e raffreschi casa tua con un solo sistema. Incentivi statali fino a €15.000!",
      href: "/pompe-di-calore-daikin-ravenna",
      icon: "♻️",
      savings: "Incentivi fino a €15.000",
      urgency: "Incentivi disponibili"
    },
    {
      title: "Riscaldamento a Pavimento",
      description: "Comfort uniforme in tutta casa e bollette ridotte del 25%. Progettazione gratuita!",
      href: "/riscaldamento-a-pavimento-ravenna",
      icon: "🏠",
      savings: "Bollette -25%",
      urgency: "Progetto gratuito"
    },
    {
      title: "Climatizzatori",
      description: "Aria fresca d'estate, calore d'inverno. Installazione professionale in giornata!",
      href: "/montaggio-climatizzatori-ravenna",
      icon: "❄️",
      savings: "Comfort tutto l'anno",
      urgency: "Installazione in giornata"
    },
    {
      title: "Pronto Intervento Rapido",
      description: "Emergenze termoidrauliche? Ti raggiungiamo in 2 ore, anche nei weekend!",
      href: "/piccole-riparazioni-manutenzione-ravenna",
      icon: "🔧",
      savings: "Servizio Rapido",
      urgency: "Intervento in 2 ore"
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
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 text-secondary-900 section-padding relative overflow-hidden">
        {/* Badge offerta speciale */}
        <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
          ⭐ OFFERTA SPECIALE
        </div>
        
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg inline-block mb-4 font-semibold">
                ⚡ Risposta in 5 minuti su WhatsApp
              </div>
              <h1 className="heading-xl text-secondary-900 mb-6">
                <span className="text-red-600 font-bold">RISPARMIA FINO AL 30%</span><br />
                sulla Bolletta del Gas!
              </h1>
              <p className="text-xl text-secondary-700 mb-6 leading-relaxed">
                <strong>Caldaie IMMERGAS</strong> e <strong>Pompe di Calore DAIKIN</strong> con <span className="text-green-600 font-bold">incentivi statali fino a €15.000</span>. 
                Installazione in 24h e <strong>preventivo gratuito</strong> in 5 minuti!
              </p>
              
              {/* Pulsanti CTA principali */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center transition-all transform hover:scale-105 shadow-lg"
                >
                  💬 PREVENTIVO WHATSAPP
                  <span className="ml-2 bg-white text-green-500 px-2 py-1 rounded text-sm">GRATIS</span>
                </a>
                <a 
                  href={`tel:${phone}`} 
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center transition-all transform hover:scale-105 shadow-lg"
                  aria-label="Chiama subito EFFEMME SRL"
                >
                  📞 CHIAMA ORA
                  <span className="ml-2 bg-white text-primary-600 px-2 py-1 rounded text-sm">RAPIDO</span>
                </a>
              </div>

              {/* Garanzie e benefici */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center bg-white/50 rounded-lg p-3">
                  <span className="text-green-500 text-xl mr-2">✅</span>
                  <span className="font-semibold">Preventivo Gratuito</span>
                </div>
                <div className="flex items-center bg-white/50 rounded-lg p-3">
                  <span className="text-blue-500 text-xl mr-2">⚡</span>
                  <span className="font-semibold">Intervento in 24h</span>
                </div>
                <div className="flex items-center bg-white/50 rounded-lg p-3">
                  <span className="text-purple-500 text-xl mr-2">🛡️</span>
                  <span className="font-semibold">Garanzia 5 anni</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Box offerta speciale */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-6 mb-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">🎯 OFFERTA SPECIALE</div>
                  <div className="text-xl mb-4">Solo per i primi 10 clienti</div>
                  <div className="bg-white text-red-600 rounded-lg p-4 font-bold text-lg">
                    SCONTO 15% + SOPRALLUOGO GRATUITO
                  </div>
                  <div className="text-sm mt-2 opacity-90">Valida fino al 31 Dicembre 2024</div>
                </div>
              </div>

              {/* Box vantaggi */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-primary-200 shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-secondary-900 text-center">
                  🏆 Perché Oltre 1000 Famiglie ci Scelgono
                </h2>
                <ul className="space-y-3 text-secondary-700">
                  <li className="flex items-start">
                    <span className="text-xl mr-3">💰</span>
                    <span><strong>Risparmio garantito</strong> fino al 30% in bolletta</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-3">🚀</span>
                    <span><strong>Installazione rapida</strong> in 24-48 ore</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-3">🎯</span>
                    <span><strong>Partner ufficiale</strong> IMMERGAS e DAIKIN</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-3">🛡️</span>
                    <span><strong>Garanzia estesa</strong> e assistenza rapida</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-secondary-900 mb-4">
              💬 Cosa Dicono i Nostri Clienti
            </h2>
            <p className="text-lg text-secondary-600">
              Oltre 1000 famiglie soddisfatte in Romagna
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 shadow-lg border border-primary-100">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-secondary-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center text-primary-700 font-bold text-lg mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">{testimonial.name}</div>
                    <div className="text-sm text-secondary-600">{testimonial.location}</div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-green-600 font-semibold">
                  💰 {testimonial.service}
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
                💬 SCRIVICI SU WHATSAPP
                <span className="ml-2 bg-white text-green-500 px-2 py-1 rounded text-sm">RISPOSTA IN 5 MIN</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi Principali */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-secondary-900 mb-6">
              🔥 Servizi più Richiesti
            </h2>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
              <strong>Risparmia fino al 30%</strong> con le nostre soluzioni innovative
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-2 border-transparent hover:border-primary-200 relative">
                {/* Badge risparmio */}
                {service.savings && (
                  <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {service.savings}
                  </div>
                )}
                
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-secondary-900">{service.title}</h3>
                <p className="text-secondary-700 mb-4 text-sm">{service.description}</p>
                
                {/* Elementi di urgenza */}
                {service.urgency && (
                  <div className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-lg text-sm font-semibold mb-4">
                    ⚡ {service.urgency}
                  </div>
                )}
                
                <div className="flex flex-col gap-2">
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-center transition-all text-sm"
                  >
                    💬 Preventivo WhatsApp
                  </a>
                  <Link href={service.href} className="btn-outline text-sm py-2">
                    Scopri di più
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Sezione incentivi */}
          <div className="mt-16 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">💰 Approfitta degli Incentivi Statali 2025</h3>
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
                  <div className="text-4xl mb-2">🏠</div>
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
                    🧮 Calcola Detrazioni
                  </button>
                </div>
              </div>

              {/* Conto Termico */}
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">💸</div>
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
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-bold transition-all"
              >
                📊 Calcola Conto Termico
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
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-bold transition-all text-lg"
              >
                👇 Confronta Tutti gli Incentivi
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Calcolatore Incentivi */}
      <section id="calcolatore-incentivi" className="bg-gray-50 section-padding">
        <div className="container-custom">
          <CalcolatoreIncentivi />
        </div>
      </section>

      {/* Sezione Offerta Speciale */}
      <section className="bg-gradient-to-r from-primary-600 to-blue-600 text-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="bg-yellow-400 text-primary-800 px-6 py-3 rounded-full inline-block font-bold text-lg mb-6">
              ⭐ OFFERTA SPECIALE
            </div>
            <h2 className="heading-lg mb-6">
              🎯 PROMOZIONE ATTIVA
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              <strong>SCONTO 15% + SOPRALLUOGO GRATUITO</strong><br />
              Per tutti i nuovi clienti che richiedono un preventivo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Intervento Immediato</h3>
              <p>Disponibilità entro 24 ore dalla chiamata</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Risparmio Garantito</h3>
              <p>Fino al 30% in meno sulla bolletta</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Garanzia Totale</h3>
              <p>5 anni di garanzia su tutti i lavori</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 inline-block shadow-2xl">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                📱 PRENOTA ORA SU WHATSAPP
              </h3>
              <p className="text-lg text-secondary-700 mb-6">
                Risposta garantita in <strong className="text-green-600">5 minuti</strong>
              </p>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-xl font-bold text-2xl inline-flex items-center transition-all transform hover:scale-105 shadow-lg mb-4"
              >
                💬 SCRIVICI SUBITO
              </a>
              <div className="text-sm text-secondary-600">
                ✅ Preventivo gratuito • ✅ Nessun impegno • ✅ Risposta immediata
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof e Contatti */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg text-secondary-900 mb-6">
                🏆 La Scelta di Oltre 1000 Famiglie
              </h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-1">Chiamata Immediata</h3>
                    <p className="text-secondary-700 mb-2">Assistenza tecnica rapida per emergenze</p>
                    <a 
                      href={`tel:${phone}`} 
                      className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-all"
                    >
                      📞 {phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-1">WhatsApp Veloce</h3>
                    <p className="text-secondary-700 mb-2">Preventivo personalizzato in 5 minuti</p>
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-all"
                    >
                      💬 Scrivici su WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-secondary-900 mb-6 text-center">
                ⭐ Recensioni Verificate
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-sm text-secondary-700 italic">"Servizio eccellente, risparmio del 25% sulla bolletta!"</p>
                  <div className="text-xs text-secondary-600 mt-2">- Marco R., Ravenna</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-sm text-secondary-700 italic">"Installazione caldaia in 24h, professionali e veloci"</p>
                  <div className="text-xs text-secondary-600 mt-2">- Anna M., Faenza</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-sm text-secondary-700 italic">"Prezzi onesti e lavoro impeccabile"</p>
                  <div className="text-xs text-secondary-600 mt-2">- Giuseppe L., Cervia</div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <div className="text-2xl font-bold text-green-600">4.9/5</div>
                <div className="text-sm text-secondary-600">Media di 247 recensioni</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Finale Sticky */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">
            💡 Non Aspettare, Inizia a Risparmiare Oggi!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ogni giorno che aspetti è denaro sprecato. <strong>Contattaci ora</strong> e scopri quanto puoi risparmiare.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-xl font-bold text-xl inline-flex items-center transition-all transform hover:scale-105 shadow-lg"
            >
              💬 PREVENTIVO WHATSAPP
              <span className="ml-3 bg-white text-green-500 px-3 py-1 rounded text-sm">GRATIS</span>
            </a>
            <div className="text-center">
              <div className="text-sm opacity-90 mb-2">Oppure chiama subito:</div>
              <a 
                href={`tel:${phone}`} 
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
              >
                📞 {phone}
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-sm opacity-90">
            ✅ Preventivo gratuito • ✅ Sopralluogo incluso • ✅ Garanzia 5 anni • ✅ Assistenza rapida
          </div>
        </div>
      </section>

      {/* Pulsante WhatsApp Fisso */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 animate-pulse"
          aria-label="Contattaci su WhatsApp"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
        <div className="absolute -top-12 right-0 bg-white text-secondary-900 px-3 py-2 rounded-lg shadow-lg text-sm font-semibold whitespace-nowrap">
          💬 Preventivo Gratuito!
        </div>
      </div>
    </Layout>
  )
}