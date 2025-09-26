import Layout from '../components/Layout'
import Link from 'next/link'

export default function MontaggioClimatizzatori() {
  const phone = process.env.PHONE || '{{PHONE}}'

  const climatizzatoriTypes = [
    {
      name: "MONO-SPLIT",
      type: "Unità singola",
      features: ["Ideale per singoli ambienti", "Installazione semplice", "Controllo indipendente", "Massima efficienza"],
      power: "2.5-7 kW",
      rooms: "1 ambiente"
    },
    {
      name: "MULTI-SPLIT",
      type: "Unità multiple",
      features: ["Fino a 5 unità interne", "Un'unità esterna", "Controllo indipendente", "Design elegante"],
      power: "5-14 kW",
      rooms: "2-5 ambienti"
    },
    {
      name: "CANALIZZATI",
      type: "Sistema invisibile",
      features: ["Distribuzione aria canalizzata", "Estetica preservata", "Controllo centralizzato", "Silenziosità"],
      power: "7-20 kW",
      rooms: "Tutta la casa"
    }
  ]

  const benefits = [
    {
      title: "Tecnologia Inverter",
      description: "Risparmio energetico fino al 40% con controllo automatico della potenza",
      icon: "⚡"
    },
    {
      title: "Classe Energetica A+++",
      description: "Massima efficienza energetica per ridurre i costi in bolletta",
      icon: "🌟"
    },
    {
      title: "Funzione Riscaldamento",
      description: "Pompa di calore per riscaldare d'inverno e raffrescare d'estate",
      icon: "🌡️"
    },
    {
      title: "Controllo Smart",
      description: "Gestione da remoto tramite app smartphone e controlli WiFi",
      icon: "📱"
    }
  ]

  const installationSteps = [
    {
      step: "1",
      title: "Sopralluogo Gratuito",
      description: "Valutiamo la posizione migliore e calcoliamo la potenza necessaria per ogni ambiente"
    },
    {
      step: "2", 
      title: "Preventivo Dettagliato",
      description: "Forniamo un preventivo completo con tutti i costi, senza sorprese o costi nascosti"
    },
    {
      step: "3",
      title: "Installazione Professionale", 
      description: "Montaggio a regola d'arte con certificazione e collaudo finale dell'impianto"
    },
    {
      step: "4",
      title: "Assistenza Post-Vendita",
      description: "Manutenzione programmata e assistenza tecnica per massima efficienza nel tempo"
    }
  ]

  return (
    <Layout
      title="Montaggio Climatizzatori Ravenna | Installazione e Manutenzione - EFFEMME SRL"
      description="Montaggio climatizzatori a Ravenna: installazione professionale mono-split, multi-split e canalizzati. Tecnologia inverter per massimo risparmio energetico. Preventivo gratuito!"
      keywords="montaggio climatizzatori ravenna, installazione climatizzatori, condizionatori ravenna, climatizzazione casa ravenna"
      canonical="/montaggio-climatizzatori-ravenna"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 text-secondary-900 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-xl text-secondary-900 mb-6">
                Montaggio Climatizzatori a Ravenna
              </h1>
              <p className="text-xl text-secondary-700 mb-8 leading-relaxed">
                EFFEMME SRL è specializzata nell'installazione professionale di climatizzatori a Ravenna. 
                Mono-split, multi-split e sistemi canalizzati con tecnologia inverter per massimo comfort e risparmio energetico.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contatti" className="btn-secondary bg-cyan-600 text-white hover:bg-cyan-700">
                  Richiedi Preventivo Gratuito
                </Link>
                <a 
                  href={`tel:${phone}`} 
                  className="btn-primary bg-primary-600 hover:bg-primary-700 border-2 border-primary-600 text-white"
                >
                  📞 Chiama Subito
                </a>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-primary-200 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-secondary-900">Vantaggi dei Nostri Climatizzatori</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">❄️</span>
                  <span>Raffrescamento rapido ed efficiente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🔥</span>
                  <span>Riscaldamento con pompa di calore</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🔇</span>
                  <span>Funzionamento silenzioso</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">💰</span>
                  <span>Risparmio energetico garantito</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tipi di Climatizzatori */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-secondary-900 mb-6">
              Tipi di Climatizzatori che Installiamo
            </h2>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
              Soluzioni per ogni esigenza: dal singolo ambiente alla climatizzazione completa della casa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {climatizzatoriTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2">{type.name}</h3>
                  <p className="text-cyan-600 font-semibold">{type.type}</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-secondary-700">Potenza:</span>
                    <span className="font-semibold text-secondary-900">{type.power}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-700">Ambienti:</span>
                    <span className="font-semibold text-secondary-900">{type.rooms}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-cyan-500 mr-2">✓</span>
                      <span className="text-secondary-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-secondary-900 mb-6">
              Perché Scegliere i Nostri Climatizzatori
            </h2>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
              Tecnologia avanzata e installazione professionale per il massimo comfort e risparmio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">{benefit.title}</h3>
                <p className="text-secondary-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo di Installazione */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-secondary-900 mb-6">
              Il Nostro Processo di Installazione
            </h2>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
              Dalla progettazione all'assistenza post-vendita, seguiamo ogni fase con professionalità
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {installationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">{step.title}</h3>
                <p className="text-secondary-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zona di Servizio */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-12 text-cyan-800 text-center border border-cyan-200">
            <h2 className="heading-lg text-cyan-800 mb-6">
              Installiamo Climatizzatori in Tutta la Provincia di Ravenna
            </h2>
            <p className="text-xl text-cyan-700 mb-8 max-w-4xl mx-auto">
              EFFEMME SRL opera a Ravenna e in tutti i comuni della provincia. Interventi rapidi, 
              sopralluoghi gratuiti e assistenza tecnica specializzata per climatizzatori di ogni marca e modello.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-cyan-700 mb-8">
              <div>• Ravenna</div>
              <div>• Faenza</div>
              <div>• Lugo</div>
              <div>• Cervia</div>
              <div>• Russi</div>
              <div>• Bagnacavallo</div>
              <div>• Alfonsine</div>
              <div>• Conselice</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contatti" className="btn-secondary bg-white text-primary-600 hover:bg-gray-50 border border-primary-600">
                Richiedi Preventivo
              </Link>
              <a 
                href={`https://wa.me/${phone?.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-primary-600 hover:bg-primary-700 border-2 border-primary-600 text-white"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Finale */}
      <section className="section-padding bg-primary-50 text-secondary-900">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-secondary-900 mb-6">
            Pronto per il Tuo Nuovo Climatizzatore?
          </h2>
          <p className="text-xl text-secondary-700 mb-8 max-w-3xl mx-auto">
            Contattaci per un preventivo gratuito! EFFEMME SRL è il partner ideale 
            per il tuo climatizzatore a Ravenna.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${phone}`}
              className="btn-primary bg-primary-600 hover:bg-primary-700"
            >
              📞 {phone}
            </a>
            <Link href="/contatti" className="btn-primary bg-primary-600 hover:bg-primary-700">
              💬 Richiedi Preventivo
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}