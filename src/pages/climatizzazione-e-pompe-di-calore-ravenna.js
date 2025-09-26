import Layout from '../components/Layout'
import Link from 'next/link'
import CalcolatoreIncentivi from '../components/CalcolatoreIncentivi'

export default function ClimatizzazioneEPompeDiCalore() {
  const phone = process.env.PHONE || '{{PHONE}}'
  const whatsappUrl = `https://wa.me/39${phone?.replace(/\s+/g, '')}?text=Ciao! Vorrei informazioni sui sistemi di climatizzazione e pompe di calore.`

  const climatizzatoriTypes = [
    {
      name: "MONO-SPLIT",
      type: "Unità singola",
      features: ["Ideale per singoli ambienti", "Installazione semplice", "Controllo indipendente", "Massima efficienza"],
      power: "2.5-7 kW",
      rooms: "1 ambiente",
      price: "da €800"
    },
    {
      name: "MULTI-SPLIT",
      type: "Unità multiple", 
      features: ["Fino a 5 unità interne", "Un'unità esterna", "Controllo indipendente", "Design elegante"],
      power: "5-14 kW",
      rooms: "2-5 ambienti",
      price: "da €1.500"
    },
    {
      name: "CANALIZZATI",
      type: "Sistema invisibile",
      features: ["Distribuzione aria canalizzata", "Estetica preservata", "Controllo centralizzato", "Silenziosità"],
      power: "7-20 kW", 
      rooms: "Tutta la casa",
      price: "da €3.000"
    }
  ]

  const pompeModels = [
    {
      name: "DAIKIN ALTHERMA 3",
      type: "Pompa di calore aria-acqua",
      features: ["Inverter", "R-32 eco-friendly", "Controllo smart", "Efficienza A+++"],
      power: "4-16 kW",
      cop: "4.5",
      price: "da €8.000"
    },
    {
      name: "DAIKIN ALTHERMA 3 H HT", 
      type: "Alta temperatura",
      features: ["Fino a 70°C", "Retrofit caldaia", "Inverter", "Silenzioso"],
      power: "4-16 kW",
      cop: "4.2",
      price: "da €9.500"
    },
    {
      name: "DAIKIN ALTHERMA 3 GEO",
      type: "Pompa di calore geotermica", 
      features: ["Massima efficienza", "Funzionamento costante", "Lunga durata", "Zero emissioni"],
      power: "6-16 kW",
      cop: "5.2",
      price: "da €15.000"
    }
  ]

  const benefits = [
    {
      title: "Efficienza Energetica Superiore",
      description: "Tecnologia inverter e COP fino a 5.2 per massimo risparmio energetico",
      icon: "⚡"
    },
    {
      title: "Comfort 365 Giorni",
      description: "Riscaldamento d'inverno, raffrescamento d'estate con un unico sistema",
      icon: "🌡️"
    },
    {
      title: "Eco-Sostenibilità",
      description: "Zero emissioni locali e gas refrigeranti eco-friendly R-32",
      icon: "🌱"
    },
    {
      title: "Controllo Smart",
      description: "Gestione da remoto tramite app e controlli WiFi intelligenti",
      icon: "📱"
    },
    {
      title: "Incentivi Fiscali",
      description: "Accesso a Ecobonus, Superbonus e Conto Termico per massimo risparmio",
      icon: "💰"
    },
    {
      title: "Installazione Professionale",
      description: "Team certificato con garanzia 5 anni su installazione e manutenzione",
      icon: "🔧"
    }
  ]

  const installationSteps = [
    {
      step: "1",
      title: "Sopralluogo Gratuito",
      description: "Analisi tecnica dell'immobile e valutazione delle esigenze energetiche",
      duration: "1 ora"
    },
    {
      step: "2", 
      title: "Progettazione Sistema",
      description: "Dimensionamento ottimale e scelta della tecnologia più adatta",
      duration: "2-3 giorni"
    },
    {
      step: "3",
      title: "Installazione Certificata", 
      description: "Montaggio professionale con materiali di prima qualità",
      duration: "1-2 giorni"
    },
    {
      step: "4",
      title: "Collaudo e Avviamento",
      description: "Test completo del sistema e formazione all'utilizzo",
      duration: "2 ore"
    }
  ]

  return (
    <Layout 
      title="Climatizzazione e Pompe di Calore Ravenna | Installazione e Manutenzione"
      description="Sistemi di climatizzazione e pompe di calore a Ravenna. Climatizzatori, condizionatori e pompe di calore DAIKIN. Installazione certificata, incentivi fiscali e garanzia 5 anni."
      keywords="climatizzatori ravenna, pompe di calore ravenna, condizionatori ravenna, daikin ravenna, climatizzazione ravenna, installazione climatizzatori, pompe di calore daikin"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 border-b border-primary-200 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full inline-block font-semibold text-sm mb-6">
                🌡️ CLIMATIZZAZIONE COMPLETA
              </div>
              <h1 className="heading-xl text-secondary-700 mb-6">
                Climatizzatori e Pompe di Calore a <span className="text-primary-600">Ravenna</span>
              </h1>
              <p className="text-xl text-secondary-700 mb-8 leading-relaxed">
                Soluzioni complete per il comfort termico della tua casa: <strong>climatizzatori</strong>, <strong>condizionatori</strong> e <strong>pompe di calore DAIKIN</strong>. 
                Installazione certificata, incentivi fiscali e <strong>garanzia 5 anni</strong>.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-2">❄️</div>
                  <h3 className="font-semibold text-secondary-700 mb-1">Climatizzatori</h3>
                  <p className="text-sm text-secondary-600">Raffrescamento efficiente</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-2">🔥</div>
                  <h3 className="font-semibold text-secondary-700 mb-1">Pompe di Calore</h3>
                  <p className="text-sm text-secondary-600">Riscaldamento eco-sostenibile</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center transition-all transform hover:scale-105"
                >
                  💬 Preventivo Gratuito
                </a>
                <a 
                  href={`tel:${phone}`} 
                  className="bg-white border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-all inline-flex items-center justify-center"
                >
                  📞 Chiama Ora
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-secondary-900 mb-6 text-center">
                  🎯 Vantaggi Immediati
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <span className="text-green-600">✓</span>
                    </div>
                    <span className="text-secondary-700">Risparmio fino al 60% in bolletta</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <span className="text-green-600">✓</span>
                    </div>
                    <span className="text-secondary-700">Incentivi fiscali fino al 65%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <span className="text-green-600">✓</span>
                    </div>
                    <span className="text-secondary-700">Installazione in 24-48 ore</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <span className="text-green-600">✓</span>
                    </div>
                    <span className="text-secondary-700">Garanzia 5 anni inclusa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Climatizzatori */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-secondary-700 mb-6">
              ❄️ Climatizzatori e Condizionatori
            </h2>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
              Soluzioni di raffrescamento per ogni esigenza: dai sistemi mono-split per singoli ambienti 
              ai sistemi canalizzati per tutta la casa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {climatizzatoriTypes.map((type, index) => (
              <div key={index} className="bg-cyan-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-secondary-700 mb-2">{type.name}</h3>
                  <p className="text-cyan-600 font-semibold">{type.type}</p>
                  <div className="text-2xl font-bold text-primary-600 mt-2">{type.price}</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-secondary-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-cyan-200 pt-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-secondary-600">Potenza:</span>
                      <div className="font-semibold text-secondary-700">{type.power}</div>
                    </div>
                    <div>
                      <span className="text-secondary-600">Ambienti:</span>
                      <div className="font-semibold text-secondary-700">{type.rooms}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sezione Pompe di Calore */}
      <section className="bg-primary-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-secondary-900 mb-6">
              🔥 Pompe di Calore DAIKIN
            </h2>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
              Sistemi di riscaldamento eco-sostenibili ad alta efficienza energetica. 
              Riscaldamento d'inverno, raffrescamento d'estate con un unico impianto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pompeModels.map((model, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">{model.name}</h3>
                  <p className="text-blue-600 font-semibold">{model.type}</p>
                  <div className="text-2xl font-bold text-primary-600 mt-2">{model.price}</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {model.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-secondary-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-secondary-600">Potenza:</span>
                      <div className="font-semibold text-secondary-700">{model.power}</div>
                    </div>
                    <div>
                      <span className="text-secondary-600">COP:</span>
                      <div className="font-semibold text-secondary-700">{model.cop}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-secondary-700 mb-6">
              🌟 Perché Scegliere i Nostri Sistemi
            </h2>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
              Tecnologie all'avanguardia per massimo comfort, efficienza energetica e risparmio economico.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-secondary-700 mb-3">{benefit.title}</h3>
                <p className="text-secondary-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo di Installazione */}
      <section className="bg-primary-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-secondary-700 mb-6">
              🔧 Processo di Installazione
            </h2>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
              Dalla progettazione al collaudo, seguiamo ogni fase per garantire un'installazione perfetta.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {installationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-secondary-700 mb-2">{step.title}</h3>
                <p className="text-secondary-700 mb-2">{step.description}</p>
                <div className="text-sm text-primary-600 font-semibold">{step.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calcolatore Incentivi */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <CalcolatoreIncentivi />
        </div>
      </section>

      {/* CTA Finale */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">
            🚀 Inizia Subito a Risparmiare
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contattaci per un <strong>sopralluogo gratuito</strong> e scopri la soluzione di climatizzazione 
            più adatta alle tue esigenze.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
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
          
          <div className="text-sm opacity-90">
            ✅ Sopralluogo gratuito • ✅ Preventivo senza impegno • ✅ Garanzia 5 anni • ✅ Incentivi fiscali inclusi
          </div>
        </div>
      </section>
    </Layout>
  )
}