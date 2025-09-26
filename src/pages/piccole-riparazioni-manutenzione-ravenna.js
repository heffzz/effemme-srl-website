import Layout from '../components/Layout'
import Link from 'next/link'

export default function PiccoleRiparazioniManutenzione() {
  const phone = process.env.PHONE || '{{PHONE}}'

  const servicesTypes = [
    {
      category: "Pronto Intervento",
      description: "Assistenza rapida per emergenze termoidrauliche",
      services: [
        "Perdite d'acqua urgenti",
        "Caldaia in blocco",
        "Climatizzatore non funzionante",
        "Problemi riscaldamento",
        "Guasti impianto gas"
      ],
      icon: "🚨",
      availability: "Rapido",
      response: "Entro 2 ore"
    },
    {
      category: "Riparazioni Caldaie",
      description: "Diagnosi e riparazione di tutti i tipi di caldaie",
      services: [
        "Sostituzione componenti",
        "Riparazione scambiatori",
        "Pulizia bruciatori",
        "Controllo elettronica",
        "Reset errori sistema"
      ],
      icon: "🔥",
      availability: "Lun-Sab",
      response: "Stesso giorno"
    },
    {
      category: "Manutenzione Impianti",
      description: "Controlli programmati per efficienza e sicurezza",
      services: [
        "Controllo annuale caldaia",
        "Pulizia climatizzatori",
        "Verifica impianto gas",
        "Controllo pressioni",
        "Analisi combustione"
      ],
      icon: "🔧",
      availability: "Su appuntamento",
      response: "24-48 ore"
    },
    {
      category: "Piccole Riparazioni",
      description: "Interventi rapidi per problemi minori",
      services: [
        "Sostituzione rubinetti",
        "Riparazione perdite",
        "Spurgo radiatori",
        "Sostituzione termostati",
        "Riparazione scarichi"
      ],
      icon: "🔨",
      availability: "Lun-Ven",
      response: "Entro 24 ore"
    }
  ]

  const emergencyServices = [
    {
      problem: "Caldaia in Blocco",
      description: "La caldaia non si accende o va in blocco frequentemente",
      solutions: ["Reset sistema", "Controllo pressione", "Verifica elettronica", "Pulizia sensori"],
      urgency: "Alta"
    },
    {
      problem: "Perdita d'Acqua",
      description: "Perdite da tubazioni, radiatori o caldaia",
      solutions: ["Chiusura acqua", "Riparazione perdita", "Sostituzione guarnizioni", "Test tenuta"],
      urgency: "Critica"
    },
    {
      problem: "Climatizzatore Guasto",
      description: "Climatizzatore non raffredda o non si accende",
      solutions: ["Controllo alimentazione", "Verifica gas refrigerante", "Pulizia filtri", "Reset sistema"],
      urgency: "Media"
    },
    {
      problem: "Riscaldamento Insufficiente",
      description: "Casa non si riscalda o riscaldamento irregolare",
      solutions: ["Spurgo radiatori", "Controllo circolatore", "Verifica termostato", "Bilanciamento impianto"],
      urgency: "Media"
    }
  ]

  return (
    <Layout
      title="Piccole Riparazioni e Manutenzione Ravenna | Pronto Intervento - EFFEMME SRL"
      description="Piccole riparazioni e manutenzione termoidraulica a Ravenna: pronto intervento rapido, riparazione caldaie, climatizzatori. Assistenza veloce EFFEMME SRL!"
        keywords="riparazioni termoidrauliche ravenna, pronto intervento caldaie, manutenzione climatizzatori, assistenza rapida, riparazioni urgenti"
      canonical="/piccole-riparazioni-manutenzione-ravenna"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 text-secondary-900 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-xl text-secondary-900 mb-6">
                Riparazioni e Manutenzione a Ravenna
              </h1>
              <p className="text-xl text-secondary-700 mb-8 leading-relaxed">
                EFFEMME SRL offre servizi di pronto intervento, riparazioni e manutenzione per tutti gli impianti termoidraulici a Ravenna. 
                Assistenza rapida per emergenze e interventi programmati per la massima efficienza.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`tel:${phone}`} 
                  className="btn-secondary bg-white text-primary-600 hover:bg-gray-50 border border-primary-600"
                >
                  🚨 Pronto Intervento
                </a>
                <Link href="/contatti" className="btn-primary">
                  📅 Prenota Manutenzione
                </Link>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-primary-200 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-secondary-900">Servizio di Emergenza</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">⏰</span>
                  <span>Disponibili 24 ore su 24, 7 giorni su 7</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🚗</span>
                  <span>Intervento entro 2 ore dalle chiamate</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🔧</span>
                  <span>Tecnici specializzati e attrezzati</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">💰</span>
                  <span>Preventivi gratuiti e prezzi trasparenti</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipi di Servizi */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">I Nostri Servizi di Assistenza</h2>
            <p className="text-body max-w-3xl mx-auto">
              EFFEMME SRL offre una gamma completa di servizi di riparazione e manutenzione 
              per tutti gli impianti termoidraulici a Ravenna e provincia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesTypes.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{service.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900">{service.category}</h3>
                    <p className="text-purple-600 font-medium">{service.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.services.map((item, idx) => (
                    <li key={idx} className="flex items-center text-secondary-700">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-purple-50 rounded-lg p-3">
                    <div className="text-sm font-medium text-purple-700">Disponibilità</div>
                    <div className="text-purple-600 font-bold">{service.availability}</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <div className="text-sm font-medium text-purple-700">Risposta</div>
                    <div className="text-purple-600 font-bold">{service.response}</div>
                  </div>
                </div>
                
                <a 
                  href={`tel:${phone}`}
                  className="w-full btn-primary text-center"
                >
                  Richiedi Intervento
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergenze Comuni */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Emergenze Più Comuni</h2>
            <p className="text-body max-w-3xl mx-auto">
              Riconoscere i problemi più frequenti ti aiuta a capire quando è necessario 
              un intervento urgente. EFFEMME SRL è sempre pronta ad aiutarti.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emergencyServices.map((emergency, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start mb-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium mr-4 mt-1 ${
                    emergency.urgency === 'Critica' ? 'bg-red-100 text-red-700' :
                    emergency.urgency === 'Alta' ? 'bg-orange-100 text-orange-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {emergency.urgency}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">{emergency.problem}</h3>
                    <p className="text-secondary-600 mb-4">{emergency.description}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-secondary-900 mb-2">Soluzioni Immediate:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {emergency.solutions.map((solution, idx) => (
                      <div key={idx} className="flex items-center text-sm text-secondary-700">
                        <svg className="w-3 h-3 text-purple-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {solution}
                      </div>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={`tel:${phone}`}
                  className="w-full btn-primary text-center"
                >
                  Chiama per Questo Problema
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contratti di Manutenzione */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6">Contratti di Manutenzione</h2>
            <p className="text-body max-w-3xl mx-auto">
              La manutenzione programmata previene i guasti e garantisce efficienza e sicurezza. 
              Scegli il contratto più adatto alle tue esigenze.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-secondary-900">Contratto Base</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">€ 120/anno</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  1 controllo annuale caldaia
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Pulizia climatizzatore
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Sconto 10% riparazioni
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Assistenza telefonica
                </li>
              </ul>
              <a href={`tel:${phone}`} className="w-full btn-primary">
                Attiva Contratto
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-600">
              <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Più Richiesto
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-900">Contratto Premium</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">€ 200/anno</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  2 controlli annuali
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Pronto intervento prioritario
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Sconto 20% riparazioni
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Garanzia estesa
                </li>
              </ul>
              <a href={`tel:${phone}`} className="w-full btn-primary">
                Attiva Contratto
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-secondary-900">Contratto Business</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">€ 350/anno</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  4 controlli annuali
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Assistenza Rapida
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Sconto 30% riparazioni
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Tecnico dedicato
                </li>
              </ul>
              <a href={`tel:${phone}`} className="w-full btn-primary">
                Attiva Contratto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Processo di Intervento */}
      <section className="section-padding bg-purple-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6">Come Funziona il Nostro Servizio</h2>
            <p className="text-body max-w-3xl mx-auto">
              Dal primo contatto alla risoluzione del problema, EFFEMME SRL garantisce 
              un servizio professionale e tempestivo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-3 text-secondary-900">Chiamata</h3>
              <p className="text-secondary-600 text-sm">
                Contattaci telefonicamente descrivendo il problema. Valutiamo l'urgenza e programmiamo l'intervento.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-3 text-secondary-900">Diagnosi</h3>
              <p className="text-secondary-600 text-sm">
                Il nostro tecnico arriva con tutta l'attrezzatura necessaria ed effettua una diagnosi accurata.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-3 text-secondary-900">Preventivo</h3>
              <p className="text-secondary-600 text-sm">
                Ricevi un preventivo chiaro e dettagliato prima di qualsiasi intervento di riparazione.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-3 text-secondary-900">Riparazione</h3>
              <p className="text-secondary-600 text-sm">
                Eseguiamo la riparazione con ricambi originali e testiamo il corretto funzionamento.
              </p>
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
              <h3 className="text-lg font-semibold mb-3 text-secondary-900">
                Quanto costa un intervento di pronto intervento a Ravenna?
              </h3>
              <p className="text-secondary-600">
                Il costo base per il pronto intervento è di €60 nei giorni feriali e €80 nei festivi. 
                Questo include la chiamata e la prima ora di lavoro. Eventuali riparazioni sono quotate separatamente.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 text-secondary-900">
                Siete davvero disponibili 24 ore su 24?
              </h3>
              <p className="text-secondary-600">
                Sì, il nostro servizio di pronto intervento è sempre disponibile per vere emergenze come perdite d'acqua, 
                caldaia in blocco o problemi di sicurezza. Per interventi non urgenti, operiamo dal lunedì al sabato.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 text-secondary-900">
                Utilizzate ricambi originali per le riparazioni?
              </h3>
              <p className="text-secondary-600">
                Sì, utilizziamo sempre ricambi originali o compatibili di alta qualità. 
                Tutti i ricambi sono coperti da garanzia del produttore e del nostro intervento.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 text-secondary-900">
                Conviene riparare o sostituire un impianto vecchio?
              </h3>
              <p className="text-secondary-600">
                Dipende dall'età e dalle condizioni dell'impianto. Generalmente, per caldaie oltre i 15 anni 
                o con riparazioni frequenti, conviene valutare la sostituzione. Ti forniamo sempre un consiglio onesto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-50 text-secondary-900 section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-secondary-900 mb-6">
            Hai Bisogno di Assistenza Immediata?
          </h2>
          <p className="text-xl text-secondary-700 mb-8 max-w-2xl mx-auto">
            Non aspettare che il problema peggiori! Contatta EFFEMME SRL per un intervento rapido e professionale. 
            Siamo sempre pronti ad aiutarti a Ravenna e provincia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${phone}`}
              className="btn-secondary bg-white text-primary-600 hover:bg-gray-50 border border-primary-600"
            >
              🚨 Pronto Intervento
            </a>
            <Link href="/contatti" className="btn-primary">
              📅 Prenota Manutenzione
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}