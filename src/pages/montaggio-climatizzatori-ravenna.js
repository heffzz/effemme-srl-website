import Layout from '../components/Layout'
import Link from 'next/link'

export default function MontaggioClimatizzatori() {
  const phone = process.env.PHONE || '{{PHONE}}'

  const climatizzatoriTypes = [
    {
      name: "Climatizzatori Mono-Split",
      description: "Unità singola per climatizzare una stanza con massima efficienza",
      features: ["Controllo individuale", "Installazione semplice", "Ideale per singole stanze", "Rapporto qualità-prezzo"],
      power: "9.000 - 24.000 BTU/h",
      rooms: "1 stanza"
    },
    {
      name: "Climatizzatori Multi-Split",
      description: "Un'unità esterna collegata a più unità interne per climatizzare tutta la casa",
      features: ["Controllo indipendente", "Design elegante", "Risparmio spazio esterno", "Efficienza elevata"],
      power: "18.000 - 54.000 BTU/h",
      rooms: "2-5 stanze"
    },
    {
      name: "Climatizzatori Canalizzati",
      description: "Sistema invisibile con distribuzione dell'aria attraverso canalizzazioni",
      features: ["Completamente nascosto", "Distribuzione uniforme", "Controllo centralizzato", "Design invisibile"],
      power: "24.000 - 60.000 BTU/h",
      rooms: "Tutta la casa"
    }
  ]

  const benefits = [
    {
      title: "Comfort Tutto l'Anno",
      description: "Raffrescamento estivo e riscaldamento invernale con un unico sistema",
      icon: "🌡️"
    },
    {
      title: "Efficienza Energetica",
      description: "Tecnologia inverter per massimo risparmio energetico e comfort",
      icon: "⚡"
    },
    {
      title: "Controllo Smart",
      description: "Gestione da remoto tramite app e integrazione con sistemi domotici",
      icon: "📱"
    },
    {
      title: "Aria Pulita",
      description: "Filtri avanzati per purificare l'aria e ridurre allergeni e batteri",
      icon: "🌿"
    }
  ]

  return (
    <Layout
      title="Montaggio Climatizzatori Ravenna | Installazione e Manutenzione - EFFEMME SRL"
      description="Montaggio climatizzatori a Ravenna: installazione professionale mono-split, multi-split e canalizzati. Tecnologia inverter per massimo comfort. Preventivo gratuito!"
      keywords="montaggio climatizzatori ravenna, installazione climatizzatori, condizionatori ravenna, climatizzatori inverter, multi split"
      canonical="/montaggio-climatizzatori-ravenna"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-xl text-white mb-6">
                Montaggio Climatizzatori a Ravenna
              </h1>
              <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
                EFFEMME SRL installa climatizzatori di ultima generazione a Ravenna. 
                Tecnologia inverter, controllo smart e massima efficienza energetica per il comfort della tua casa tutto l'anno.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contatti" className="btn-secondary bg-white text-cyan-600 hover:bg-gray-50">
                  Richiedi Preventivo Gratuito
                </Link>
                <a 
                  href={`tel:${phone}`} 
                  className="btn-primary bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500"
                >
                  📞 Chiama Subito
                </a>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-6">Perché Scegliere i Nostri Climatizzatori?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">❄️</span>
                  <span>Raffrescamento e riscaldamento in un unico sistema</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">⚡</span>
                  <span>Tecnologia inverter per massimo risparmio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">📱</span>
                  <span>Controllo smart da smartphone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🔧</span>
                  <span>Installazione professionale certificata</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tipi di Climatizzatori */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Tipologie di Climatizzatori</h2>
            <p className="text-body max-w-3xl mx-auto">
              EFFEMME SRL installa diverse tipologie di climatizzatori a Ravenna, 
              scegliendo la soluzione più adatta alle dimensioni e alle esigenze della tua abitazione.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {climatizzatoriTypes.map((tipo, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                <div className="text-4xl mb-4">❄️</div>
                <h3 className="text-xl font-bold mb-2 text-secondary-900">{tipo.name}</h3>
                <p className="text-cyan-600 font-medium mb-4">{tipo.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <span className="text-sm font-medium text-secondary-700">Potenza: </span>
                    <span className="text-sm font-bold text-cyan-600">{tipo.power}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-secondary-700">Stanze: </span>
                    <span className="text-sm font-bold text-cyan-600">{tipo.rooms}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {tipo.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-secondary-700">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={`tel:${phone}`}
                  className="w-full btn-primary text-center bg-cyan-600 hover:bg-cyan-700"
                >
                  Richiedi Info
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Vantaggi dei Climatizzatori Moderni</h2>
            <p className="text-body max-w-3xl mx-auto">
              I climatizzatori di ultima generazione offrono molto più del semplice raffrescamento. 
              Scopri tutti i vantaggi per la tua casa a Ravenna.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-cyan-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-secondary-900">{benefit.title}</h3>
                <p className="text-secondary-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo di Installazione */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Il Nostro Processo di Installazione</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-cyan-100 text-cyan-600 p-2 rounded-lg mr-4 mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Sopralluogo e Progettazione</h3>
                    <p className="text-secondary-600">
                      Analizziamo la tua casa per determinare la potenza necessaria e la posizione ottimale delle unità.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyan-100 text-cyan-600 p-2 rounded-lg mr-4 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Installazione Unità Esterna</h3>
                    <p className="text-secondary-600">
                      Posizionamento dell'unità esterna in area ventilata e accessibile per la manutenzione.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyan-100 text-cyan-600 p-2 rounded-lg mr-4 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Montaggio Unità Interne</h3>
                    <p className="text-secondary-600">
                      Installazione delle unità interne con attenzione all'estetica e alla funzionalità.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyan-100 text-cyan-600 p-2 rounded-lg mr-4 mt-1">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Collegamento e Collaudo</h3>
                    <p className="text-secondary-600">
                      Collegamento frigorifero ed elettrico, vuoto dell'impianto e test di funzionamento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-cyan-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-cyan-700 mb-6">Servizi Inclusi</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Sopralluogo e progettazione gratuiti
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Installazione completa chiavi in mano
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Configurazione controlli e app
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Collaudo e prima accensione
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Garanzia 2 anni + estensione
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Assistenza post-vendita
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-cyan-700 mb-2">Certificazioni Incluse</h4>
                <ul className="text-sm text-secondary-600 space-y-1">
                  <li>• Dichiarazione di conformità</li>
                  <li>• Libretto d'impianto</li>
                  <li>• Certificato F-Gas</li>
                  <li>• Garanzia del produttore</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manutenzione */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6">Manutenzione Climatizzatori</h2>
            <p className="text-body max-w-3xl mx-auto">
              La manutenzione regolare è essenziale per garantire efficienza, durata e qualità dell'aria. 
              EFFEMME SRL offre servizi di manutenzione programmata a Ravenna.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-secondary-900">Pulizia Filtri</h3>
              <ul className="space-y-2 text-secondary-600 mb-6">
                <li>• Pulizia filtri aria</li>
                <li>• Sanificazione unità interna</li>
                <li>• Controllo scarico condensa</li>
                <li>• Verifica telecomando</li>
              </ul>
              <div className="text-2xl font-bold text-cyan-600 mb-2">€ 50</div>
              <p className="text-sm text-secondary-500">Per unità interna</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-cyan-600">
              <div className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Consigliato
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-900">Manutenzione Completa</h3>
              <ul className="space-y-2 text-secondary-600 mb-6">
                <li>• Pulizia completa unità</li>
                <li>• Controllo pressioni gas</li>
                <li>• Verifica collegamenti elettrici</li>
                <li>• Test prestazioni</li>
              </ul>
              <div className="text-2xl font-bold text-cyan-600 mb-2">€ 120</div>
              <p className="text-sm text-secondary-500">Sistema completo</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-secondary-900">Contratto Annuale</h3>
              <ul className="space-y-2 text-secondary-600 mb-6">
                <li>• 2 interventi programmati</li>
                <li>• Pronto intervento prioritario</li>
                <li>• Sconto 20% su riparazioni</li>
                <li>• Garanzia estesa</li>
              </ul>
              <div className="text-2xl font-bold text-cyan-600 mb-2">€ 180/anno</div>
              <p className="text-sm text-secondary-500">Fino a 3 unità interne</p>
            </div>
          </div>
        </div>
      </section>

      {/* Efficienza Energetica */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="heading-md mb-6">Efficienza Energetica e Risparmio</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Tecnologia Inverter</h3>
                  <p className="text-secondary-600 mb-4">
                    I climatizzatori inverter modulano la potenza in base alle esigenze, 
                    garantendo fino al 40% di risparmio energetico rispetto ai modelli tradizionali.
                  </p>
                </div>
                
                <div className="bg-cyan-50 rounded-lg p-4">
                  <h4 className="font-semibold text-cyan-700 mb-3">Confronto Consumi Estivi</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Climatizzatore tradizionale:</span>
                      <span className="font-bold">€ 400/stagione</span>
                    </div>
                    <div className="flex justify-between text-cyan-600">
                      <span>Climatizzatore inverter:</span>
                      <span className="font-bold">€ 240/stagione</span>
                    </div>
                    <div className="flex justify-between text-green-600 font-semibold">
                      <span>Risparmio:</span>
                      <span>€ 160/stagione</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Classe Energetica A+++</h3>
                  <p className="text-secondary-600">
                    Tutti i climatizzatori che installiamo hanno classe energetica A++ o superiore, 
                    garantendo massima efficienza e rispetto dell'ambiente.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="heading-md mb-6">Controllo Smart e Domotica</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-cyan-100 text-cyan-600 p-2 rounded-lg mr-4 mt-1">
                    📱
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">App Mobile</h3>
                    <p className="text-secondary-600">
                      Controlla i tuoi climatizzatori da smartphone: accensione, temperatura, 
                      modalità e programmazione oraria anche quando sei fuori casa.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyan-100 text-cyan-600 p-2 rounded-lg mr-4 mt-1">
                    🏠
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Integrazione Domotica</h3>
                    <p className="text-secondary-600">
                      Compatibilità con sistemi domotici per controllo centralizzato 
                      e automazioni intelligenti basate su presenza e orari.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyan-100 text-cyan-600 p-2 rounded-lg mr-4 mt-1">
                    🌡️
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Controllo Intelligente</h3>
                    <p className="text-secondary-600">
                      Sensori di presenza, programmazione settimanale e modalità eco 
                      per ottimizzare automaticamente consumi e comfort.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6">Domande Frequenti</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 text-secondary-900">
                Quanto costa installare un climatizzatore a Ravenna?
              </h3>
              <p className="text-secondary-600">
                Il costo varia da €600 per un mono-split 9000 BTU a €2500 per un multi-split 4 stanze, 
                inclusa installazione completa. Contattaci per un preventivo personalizzato gratuito.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 text-secondary-900">
                Quanto tempo richiede l'installazione?
              </h3>
              <p className="text-secondary-600">
                L'installazione di un mono-split richiede 3-4 ore, mentre un multi-split può richiedere 
                1-2 giorni lavorativi in base al numero di unità interne e alla complessità dell'impianto.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 text-secondary-900">
                I climatizzatori possono riscaldare d'inverno?
              </h3>
              <p className="text-secondary-600">
                Sì, tutti i climatizzatori moderni hanno funzione pompa di calore e possono riscaldare 
                efficacemente fino a temperature esterne di -15°C, ideali per il clima di Ravenna.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 text-secondary-900">
                Ogni quanto va fatta la manutenzione?
              </h3>
              <p className="text-secondary-600">
                Consigliamo la pulizia filtri ogni 2-3 mesi e una manutenzione completa annuale. 
                Per uso intensivo o ambienti polverosi, la frequenza può aumentare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cyan-700 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-white mb-6">
            Pronto per il Massimo Comfort?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Contatta EFFEMME SRL per l'installazione del tuo climatizzatore a Ravenna. 
            Sopralluogo gratuito e installazione professionale garantita!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${phone}`}
              className="btn-secondary bg-white text-cyan-600 hover:bg-gray-50"
            >
              📞 Chiama Ora
            </a>
            <Link href="/contatti" className="btn-primary bg-cyan-500 hover:bg-cyan-400">
              💬 Richiedi Preventivo
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}