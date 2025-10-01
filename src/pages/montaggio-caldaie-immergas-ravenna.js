import Layout from '../components/Layout'
import Link from 'next/link'

export default function MontaggioCaldeieImmergas() {
  const phone = '3520030795'

  const caldaieModels = [
    {
      name: "VICTRIX TERA",
      type: "Caldaia a condensazione murale",
      features: ["Efficienza A+", "Modulazione 1:10", "Compatta", "Wi-Fi ready"],
      power: "24-32 kW"
    },
    {
      name: "HERCULES CONDENSING",
      type: "Caldaia a condensazione a basamento",
      features: ["Alta potenza", "Robusta", "Lunga durata", "Efficienza elevata"],
      power: "25-115 kW"
    },
    {
      name: "VICTRIX PRO",
      type: "Caldaia a condensazione premium",
      features: ["Tecnologia avanzata", "Controllo smart", "Massima efficienza", "Design moderno"],
      power: "25-35 kW"
    }
  ]

  const benefits = [
    {
      title: "Risparmio Energetico",
      description: "Le caldaie IMMERGAS a condensazione offrono un risparmio energetico del 10-20% rispetto alle caldaie tradizionali (fonte: ENEA)",
      icon: "💰"
    },
    {
      title: "Affidabilità",
      description: "Tecnologia italiana di qualità superiore con garanzia estesa fino a 10 anni",
      icon: "🛡️"
    },
    {
      title: "Eco-Sostenibilità",
      description: "Basse emissioni NOx e compatibilità con energie rinnovabili",
      icon: "🌱"
    },
    {
      title: "Controllo Smart",
      description: "Gestione da remoto tramite app e integrazione domotica",
      icon: "📱"
    }
  ]

  return (
    <Layout
      title="Montaggio Caldaie IMMERGAS Ravenna | Installazione e Manutenzione - EFFEMME SRL"
      description="Montaggio caldaie IMMERGAS a Ravenna: installazione professionale, manutenzione e riparazione. Caldaie a condensazione ad alta efficienza. Preventivo gratuito!"
      keywords="montaggio caldaie immergas ravenna, installazione caldaie condensazione, caldaie immergas ravenna, sostituzione caldaia, manutenzione caldaie"
      canonical="/montaggio-caldaie-immergas-ravenna"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 text-secondary-700 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-xl text-secondary-700 mb-6">
                Montaggio Caldaie IMMERGAS a Ravenna
              </h1>
              <p className="text-xl text-secondary-700 mb-8 leading-relaxed">
                EFFEMME SRL è partner ufficiale IMMERGAS per l'installazione di caldaie a condensazione 
                ad alta efficienza energetica. Esperienza, qualità e garanzia per il riscaldamento della tua casa a Ravenna.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contatti" className="btn-secondary bg-white text-primary-600 hover:bg-gray-50 border border-primary-600">
                  Richiedi Preventivo Gratuito
                </Link>
                <a 
                  href={`tel:${phone}`} 
                  className="btn-primary"
                >
                  📞 Chiama Subito
                </a>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-secondary-700">Perché Scegliere IMMERGAS?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🏆</span>
                  <span className="text-secondary-700">Leader italiano nel settore caldaie</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">⚡</span>
                  <span className="text-secondary-700">Tecnologia a condensazione avanzata</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🔧</span>
                  <span className="text-secondary-700">Assistenza tecnica specializzata</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">💚</span>
                  <span className="text-secondary-700">Rispetto dell'ambiente</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modelli Caldaie */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Caldaie IMMERGAS Disponibili</h2>
            <p className="text-body max-w-3xl mx-auto">
              Scopri la gamma completa di caldaie IMMERGAS che installiamo a Ravenna. 
              Ogni modello è progettato per garantire massima efficienza e affidabilità.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caldaieModels.map((caldaia, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-xl font-bold mb-2 text-secondary-700">{caldaia.name}</h3>
                <p className="text-primary-600 font-medium mb-4">{caldaia.type}</p>
                <div className="mb-6">
                  <span className="text-sm font-medium text-secondary-700">Potenza: </span>
                  <span className="text-lg font-bold text-primary-600">{caldaia.power}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {caldaia.features.map((feature, idx) => (
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
                  className="w-full btn-primary text-center"
                >
                  Richiedi Info
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Vantaggi delle Caldaie IMMERGAS</h2>
            <p className="text-body max-w-3xl mx-auto">
              Le caldaie IMMERGAS rappresentano l'eccellenza italiana nel settore del riscaldamento. 
              Scopri tutti i vantaggi di scegliere IMMERGAS per la tua casa a Ravenna.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-secondary-700">{benefit.title}</h3>
                <p className="text-secondary-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo di Installazione */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Il Nostro Processo di Installazione</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-4 mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Sopralluogo Gratuito</h3>
                    <p className="text-secondary-600">
                      Analizziamo la tua abitazione e le tue esigenze per consigliarti la caldaia IMMERGAS più adatta.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-4 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Preventivo Dettagliato</h3>
                    <p className="text-secondary-600">
                      Ricevi un preventivo completo e trasparente, inclusi materiali, manodopera e smaltimento.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-4 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Installazione Professionale</h3>
                    <p className="text-secondary-600">
                      I nostri tecnici certificati IMMERGAS installano la caldaia nel rispetto delle normative vigenti.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-4 mt-1">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Collaudo e Garanzia</h3>
                    <p className="text-secondary-600">
                      Test di funzionamento, rilascio certificazioni e attivazione garanzia estesa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-700 mb-6">Servizi Inclusi</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Smontaggio caldaia esistente
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Adeguamento impianto gas
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Collegamento scarico condensa
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Prima accensione e collaudo
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Certificazioni di conformità
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Smaltimento caldaia vecchia
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Garanzia estesa fino a 10 anni
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Manutenzione */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6">Manutenzione Caldaie IMMERGAS</h2>
            <p className="text-body max-w-3xl mx-auto">
              La manutenzione regolare è fondamentale per garantire efficienza, sicurezza e durata della tua caldaia IMMERGAS. 
              EFFEMME SRL offre servizi di manutenzione programmata a Ravenna e provincia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-secondary-700">Controllo Annuale</h3>
              <ul className="space-y-2 text-secondary-600 mb-6">
                <li>• Verifica combustione</li>
                <li>• Pulizia scambiatore</li>
                <li>• Controllo pressioni</li>
                <li>• Test sicurezze</li>
              </ul>
              <div className="text-2xl font-bold text-primary-600 mb-2">€ 80</div>
              <p className="text-sm text-secondary-500">IVA inclusa</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary-600">
              <div className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Più Richiesto
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-700">Contratto Manutenzione</h3>
              <ul className="space-y-2 text-secondary-600 mb-6">
                <li>• 2 controlli annuali</li>
                <li>• Pronto intervento prioritario</li>
                <li>• Sconto 20% su riparazioni</li>
                <li>• Garanzia estesa</li>
              </ul>
              <div className="text-2xl font-bold text-primary-600 mb-2">€ 120/anno</div>
              <p className="text-sm text-secondary-500">IVA inclusa</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-secondary-700">Pronto Intervento</h3>
              <ul className="space-y-2 text-secondary-600 mb-6">
                <li>• Interventi rapidi</li>
                <li>• Intervento entro 2 ore</li>
                <li>• Diagnosi gratuita</li>
                <li>• Ricambi originali</li>
              </ul>
              <div className="text-2xl font-bold text-primary-600 mb-2">€ 60</div>
              <p className="text-sm text-secondary-500">Solo chiamata + intervento</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6">Domande Frequenti</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">
                Quanto costa sostituire una caldaia a Ravenna?
              </h3>
              <p className="text-secondary-600">
                Il costo varia in base al modello scelto e alla complessità dell'installazione. 
                Per una caldaia IMMERGAS a condensazione, i prezzi partono da €1.500 inclusa installazione. 
                Contattaci per un preventivo gratuito personalizzato.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">
                Quanto tempo richiede l'installazione?
              </h3>
              <p className="text-secondary-600">
                L'installazione di una caldaia IMMERGAS richiede generalmente 4-6 ore per una sostituzione standard. 
                In caso di adeguamenti dell'impianto, i tempi possono estendersi a 1-2 giorni lavorativi.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">
                Che garanzia offre IMMERGAS?
              </h3>
              <p className="text-secondary-600">
                IMMERGAS offre 2 anni di garanzia standard, estendibile fino a 10 anni con il servizio di manutenzione programmata. 
                Come partner ufficiale, EFFEMME SRL gestisce direttamente tutte le pratiche di garanzia.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">
                Posso usufruire degli incentivi fiscali 2025?
              </h3>
              <p className="text-secondary-600">
                Sì, la sostituzione con caldaia a condensazione IMMERGAS permette di accedere al <strong>Bonus Casa 50% per prima casa</strong> 
                o <strong>36% per seconde case</strong>. Per sistemi ibridi con pompa di calore è disponibile anche l'<strong>Ecobonus</strong>. 
                Ti assistiamo in tutte le pratiche burocratiche necessarie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-50 text-secondary-700 section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-secondary-700 mb-6">
            Pronto per una Nuova Caldaia IMMERGAS?
          </h2>
          <p className="text-xl text-secondary-700 mb-8 max-w-2xl mx-auto">
            Contatta EFFEMME SRL per un sopralluogo gratuito e scopri quale caldaia IMMERGAS 
            è perfetta per la tua casa a Ravenna. Installazione professionale garantita!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${phone}`}
              className="btn-secondary bg-white text-primary-600 hover:bg-gray-50 border border-primary-600"
            >
              📞 Chiama Ora
            </a>
            <Link href="/contatti" className="btn-primary">
              💬 Richiedi Preventivo
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-gray-100 py-6">
        <div className="container-custom">
          <div className="text-center text-sm text-gray-600">
            <p>
              <strong>Disclaimer:</strong> I dati di risparmio energetico sono indicativi e basati su fonti ufficiali (ENEA). 
              I risultati effettivi possono variare in base alle caratteristiche specifiche dell'abitazione e dell'impianto esistente. 
              Per una valutazione personalizzata, richiedi un sopralluogo tecnico gratuito.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}