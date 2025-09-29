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
      description: "Risparmia fino al 30% sui consumi con le nostre caldaie a condensazione. Installazione in 24/48h!",
      href: "/montaggio-caldaie-immergas-ravenna",
      icon: "🔥",
      savings: "Risparmio fino al 30%",
      urgency: "Installazione in 24/48h"
    },
    {
      title: "Climatizzazione e Pompe di Calore",
      description: "Climatizzatori, condizionatori e pompe di calore DAIKIN. Comfort 365 giorni con incentivi fino a €15.000!",
      href: "/climatizzazione-e-pompe-di-calore-ravenna",
      icon: "🌡️",
      savings: "Incentivi fino a €15.000",
      urgency: "Comfort tutto l'anno"
    },
    {
      title: "Riscaldamento a Pavimento",
      description: "Comfort uniforme in tutta casa e bollette ridotte del 25%. Progettazione gratuita!",
      href: "/riscaldamento-a-pavimento-ravenna",
      icon: "🏠",
      savings: "Bollette -25%",
      urgency: "Progetto gratuito"
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
              <h1 className="heading-xl text-secondary-700 mb-6">
                <span className="text-red-600 font-bold">RISPARMIA FINO AL 30%</span><br />
                sulla Bolletta del Gas!
              </h1>
              <p className="text-xl text-secondary-700 mb-6 leading-relaxed">
                <strong>Caldaie IMMERGAS</strong> e <strong>Pompe di Calore DAIKIN</strong> con <span className="text-green-600 font-bold">incentivi statali fino a €15.000</span>. 
                Installazione in 24/48h e <strong>preventivo gratuito</strong> in 5 minuti!
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
                  <span className="font-semibold">Installazione in 24/48h</span>
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
                <h2 className="text-xl font-bold mb-4 text-secondary-700 text-center">
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
            <h2 className="heading-lg text-secondary-700 mb-4">
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
                    <div className="font-semibold text-secondary-700">{testimonial.name}</div>
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
            <h2 className="heading-lg text-secondary-700 mb-6">
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
                <h3 className="text-xl font-bold mb-3 text-secondary-700">{service.title}</h3>
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
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-700 px-6 py-2 rounded-lg font-bold transition-all"
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
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-700 px-8 py-3 rounded-lg font-bold transition-all text-lg"
              >
                👇 Confronta Tutti gli Incentivi
              </button>
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
    </Layout>
  )
}