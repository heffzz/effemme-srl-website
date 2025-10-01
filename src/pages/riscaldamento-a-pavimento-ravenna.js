import Layout from '../components/Layout'
import Link from 'next/link'

export default function RiscaldamentoAPavimento() {
  const phone = '3520030795'

  const sistemiTypes = [
    {
      name: "Sistema Radiante ad Acqua",
      description: "Tubazioni in polietilene reticolato con distribuzione uniforme del calore",
      features: ["Temperatura 30-40°C", "Massimo comfort", "Compatibile con ogni caldaia", "Lunga durata"],
      applications: "Ideale per nuove costruzioni e ristrutturazioni"
    },
    {
      name: "Sistema Radiante Elettrico",
      description: "Cavi scaldanti o film radianti per installazioni rapide e flessibili",
      features: ["Installazione veloce", "Controllo zona per zona", "Spessore minimo", "Ideale per bagni"],
      applications: "Perfetto per singole stanze e ristrutturazioni leggere"
    },
    {
      name: "Sistema Ibrido",
      description: "Combinazione di sistemi ad acqua ed elettrici per massima flessibilità",
      features: ["Flessibilità totale", "Ottimizzazione consumi", "Controllo intelligente", "Adattabile"],
      applications: "Soluzione su misura per esigenze specifiche"
    }
  ]

  const benefits = [
    {
      title: "Comfort Ottimale",
      description: "Calore uniforme dal basso verso l'alto, temperatura costante in ogni punto della stanza",
      icon: "🏠"
    },
    {
      title: "Risparmio Energetico",
      description: "Risparmio energetico dal 10% al 15% rispetto ai sistemi tradizionali (fonte: ENEA)",
      icon: "💰"
    },
    {
      title: "Spazio Libero",
      description: "Nessun radiatore a parete, massima libertà nell'arredamento degli ambienti",
      icon: "📐"
    },
    {
      title: "Benessere e Salute",
      description: "Riduce la circolazione di polveri e acari, ideale per chi soffre di allergie",
      icon: "🌿"
    }
  ]

  return (
    <Layout
      title="Riscaldamento a Pavimento Ravenna | Installazione Sistemi Radianti - EFFEMME SRL"
      description="Riscaldamento a pavimento a Ravenna: progettazione e installazione sistemi radianti. Comfort ottimale e risparmio energetico. Preventivo gratuito EFFEMME SRL!"
      keywords="riscaldamento a pavimento ravenna, sistemi radianti, impianto radiante pavimento, installazione riscaldamento pavimento"
      canonical="/riscaldamento-a-pavimento-ravenna"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 text-secondary-700 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-xl text-secondary-700 mb-6">
                Riscaldamento a Pavimento a Ravenna
              </h1>
              <p className="text-xl text-secondary-700 mb-8 leading-relaxed">
                EFFEMME SRL progetta e installa sistemi di riscaldamento a pavimento radiante a Ravenna. 
                Comfort ottimale, risparmio energetico e massima libertà nell'arredamento della tua casa.
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
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-orange-200 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-secondary-700">Vantaggi del Riscaldamento a Pavimento</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🌡️</span>
                  <span>Temperatura uniforme in tutta la casa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">💰</span>
                  <span>Risparmio fino al 15% sui consumi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🏠</span>
                  <span>Nessun radiatore, spazio libero</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🌿</span>
                  <span>Ambiente più salubre</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tipi di Sistemi */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Sistemi di Riscaldamento a Pavimento</h2>
            <p className="text-body max-w-3xl mx-auto">
              EFFEMME SRL installa diverse tipologie di sistemi radianti a pavimento, 
              scegliendo la soluzione più adatta alle tue esigenze e alla tua abitazione a Ravenna.
            </p>
          </div>
          
          <div className="space-y-12">
            {sistemiTypes.map((sistema, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="heading-md mb-4">{sistema.name}</h3>
                  <p className="text-body mb-6">{sistema.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {sistema.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-secondary-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-primary-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-primary-700 mb-2">Applicazioni Ideali</h4>
                    <p className="text-primary-600">{sistema.applications}</p>
                  </div>
                  
                  <a 
                    href={`tel:${phone}`}
                    className="btn-primary"
                  >
                    Richiedi Informazioni
                  </a>
                </div>
                
                <div className={`bg-gradient-to-br ${index === 0 ? 'from-primary-50 to-primary-100 border-primary-200' : index === 1 ? 'from-primary-50 to-primary-100 border-primary-200' : 'from-primary-50 to-primary-100 border-primary-200'} rounded-2xl p-8 text-primary-800 border ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏠</div>
                    <h4 className="text-xl font-bold mb-4">{sistema.name}</h4>
                    <p className="opacity-90">Comfort e efficienza per la tua casa</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Perché Scegliere il Riscaldamento a Pavimento</h2>
            <p className="text-body max-w-3xl mx-auto">
              Il riscaldamento a pavimento rappresenta la soluzione più moderna e confortevole 
              per riscaldare la tua casa a Ravenna. Scopri tutti i vantaggi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl border-2 border-primary-500">
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
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6">Processo di Installazione</h2>
            <p className="text-body max-w-3xl mx-auto">
              L'installazione del riscaldamento a pavimento richiede competenza tecnica e precisione. 
              EFFEMME SRL gestisce ogni fase del progetto con professionalità.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold border-2 border-primary-500">
                1
              </div>
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Progettazione</h3>
              <p className="text-secondary-700 text-sm">
                Calcolo termico e progettazione del sistema radiante su misura per la tua casa.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold border-2 border-primary-500">
                2
              </div>
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Preparazione</h3>
              <p className="text-secondary-700 text-sm">
                Preparazione del massetto e posa dell'isolamento termico perimetrale.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold border-2 border-primary-500">
                3
              </div>
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Posa Tubazioni</h3>
              <p className="text-secondary-700 text-sm">
                Installazione delle tubazioni secondo il progetto con passo di posa ottimale.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold border-2 border-primary-500">
                4
              </div>
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Collaudo</h3>
              <p className="text-secondary-700 text-sm">
                Test di tenuta idraulica e verifica del corretto funzionamento dell'impianto.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold border-2 border-primary-500">
                5
              </div>
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Finitura</h3>
              <p className="text-secondary-700 text-sm">
                Getto del massetto e posa della pavimentazione finale scelta dal cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compatibilità */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Compatibilità con Generatori di Calore</h2>
              <p className="text-body mb-6">
                Il riscaldamento a pavimento è compatibile con tutti i tipi di generatori di calore, 
                rendendolo la scelta ideale per ogni situazione a Ravenna.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-primary-100 text-primary-600 p-2 rounded-lg mr-4">
                    🔥
                  </div>
                  <div>
                    <h3 className="font-semibold">Caldaie a Condensazione</h3>
                    <p className="text-sm text-secondary-700">Perfetta integrazione con caldaie IMMERGAS</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-primary-100 text-primary-600 p-2 rounded-lg mr-4">
                    ♻️
                  </div>
                  <div>
                    <h3 className="font-semibold">Pompe di Calore</h3>
                    <p className="text-sm text-secondary-700">Ideale con pompe di calore DAIKIN</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-primary-100 text-primary-600 p-2 rounded-lg mr-4">
                    ☀️
                  </div>
                  <div>
                    <h3 className="font-semibold">Solare Termico</h3>
                    <p className="text-sm text-secondary-700">Integrazione con pannelli solari termici</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-primary-100 text-primary-600 p-2 rounded-lg mr-4">
                    🌿
                  </div>
                  <div>
                    <h3 className="font-semibold">Biomasse</h3>
                    <p className="text-sm text-secondary-700">Compatibile con caldaie a pellet e legna</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary-700 mb-6">Stima del Risparmio Energetico</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-primary-50 rounded-lg">
                  <span>Casa 120 mq con radiatori tradizionali:</span>
                  <span className="font-bold">€ 1.800/anno</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-primary-50 rounded-lg">
                  <span>Stessa casa con riscaldamento a pavimento:</span>
                  <span className="font-bold text-primary-600">€ 1.530/anno</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-primary-50 rounded-lg">
                  <span className="text-primary-700 font-semibold">Risparmio annuo stimato:</span>
                  <span className="font-bold text-primary-600">€ 270</span>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary-600 mb-2">10-15%</div>
                <p className="text-secondary-700 mb-4">Risparmio energetico (fonte: ENEA)</p>
              </div>
              
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mb-6">
                <p className="text-sm text-secondary-700">
                  <strong>Disclaimer:</strong> I costi sono stimati per una casa di 120 mq in zona climatica E (Ravenna) con riscaldamento a gas metano. I valori possono variare significativamente in base a: isolamento dell'edificio, zona climatica, abitudini di utilizzo, tipo di generatore di calore, costo del combustibile e condizioni dell'impianto esistente. Per una valutazione precisa è necessario un sopralluogo tecnico.
                </p>
              </div>
              
              <div className="text-center">
                <a 
                  href={`tel:${phone}`}
                  className="btn-primary"
                >
                  Richiedi Preventivo Personalizzato
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confronto Sistemi di Riscaldamento */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6">Confronto con Altri Sistemi di Riscaldamento</h2>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              Analisi comparativa basata su dati verificati per una casa di 120 mq in zona climatica E (Ravenna)
            </p>
          </div>

          {/* Tabella Comparativa */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Sistema di Riscaldamento</th>
                    <th className="px-6 py-4 text-center font-semibold">Consumo Annuo</th>
                    <th className="px-6 py-4 text-center font-semibold">Costo Operativo</th>
                    <th className="px-6 py-4 text-center font-semibold">Efficienza</th>
                    <th className="px-6 py-4 text-center font-semibold">Tempo Riscaldamento</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-semibold text-secondary-700">Caldaia Tradizionale + Radiatori</div>
                        <div className="text-sm text-secondary-600">Sistema più diffuso</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-semibold">1.300 mc gas</div>
                      <div className="text-sm text-secondary-600">Rendimento 85%</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-semibold text-red-600">€1.800/anno</div>
                      <div className="text-sm text-secondary-600">Costi elevati</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-semibold">75-85%</div>
                      <div className="text-sm text-secondary-600">Efficienza media</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-semibold">30 min</div>
                      <div className="text-sm text-secondary-600">Riscaldamento rapido</div>
                    </td>
                  </tr>
                  <tr className="bg-primary-50 hover:bg-primary-100">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-semibold text-primary-700">🏆 Caldaia Condensazione + Pavimento</div>
                        <div className="text-sm text-primary-600">Soluzione consigliata</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-semibold text-primary-600">1.000 mc gas</div>
                      <div className="text-sm text-primary-600">Rendimento 105%</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-semibold text-primary-600">€1.530/anno</div>
                      <div className="text-sm text-primary-600">Risparmio 15%</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-semibold text-primary-600">90-95%</div>
                      <div className="text-sm text-primary-600">Alta efficienza</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-semibold">60-90 min</div>
                      <div className="text-sm text-primary-600">Comfort superiore</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-semibold text-secondary-700">Pompa di Calore + Pavimento</div>
                        <div className="text-sm text-secondary-600">Soluzione ecologica</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-semibold">4.000 kWh elettrici</div>
                      <div className="text-sm text-secondary-600">COP 3.5-4.0</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-semibold text-green-600">€1.200/anno</div>
                      <div className="text-sm text-green-600">Massimo risparmio</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-semibold">300-400%</div>
                      <div className="text-sm text-secondary-600">Efficienza massima</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="font-semibold">90-120 min</div>
                      <div className="text-sm text-secondary-600">Dipende da T esterna</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Grafici Comparativi */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Costi Operativi */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-secondary-700 mb-6 text-center">Costi Operativi Annuali</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Caldaia Tradizionale</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-3 mr-3">
                      <div className="bg-red-500 h-3 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    <span className="font-bold text-red-600">€1.800</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Condensazione + Pavimento</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-3 mr-3">
                      <div className="bg-primary-500 h-3 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <span className="font-bold text-primary-600">€1.530</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Pompa di Calore</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-3 mr-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{width: '67%'}}></div>
                    </div>
                    <span className="font-bold text-green-600">€1.200</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Efficienza Energetica */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-secondary-700 mb-6 text-center">Efficienza Energetica</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Caldaia Tradizionale</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-3 mr-3">
                      <div className="bg-orange-500 h-3 rounded-full" style={{width: '80%'}}></div>
                    </div>
                    <span className="font-bold">80%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Condensazione + Pavimento</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-3 mr-3">
                      <div className="bg-primary-500 h-3 rounded-full" style={{width: '95%'}}></div>
                    </div>
                    <span className="font-bold text-primary-600">95%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Pompa di Calore</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-3 mr-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    <span className="font-bold text-green-600">350%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vantaggi Specifici */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary-500">
              <h4 className="font-bold text-primary-700 mb-3">🏆 Riscaldamento a Pavimento</h4>
              <ul className="text-sm text-secondary-700 space-y-2">
                <li>✅ Comfort termico superiore</li>
                <li>✅ Distribuzione uniforme del calore</li>
                <li>✅ Risparmio energetico 10-15%</li>
                <li>✅ Compatibile con energie rinnovabili</li>
                <li>✅ Nessun ingombro visivo</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-700 mb-3">⚡ Radiatori Tradizionali</h4>
              <ul className="text-sm text-secondary-700 space-y-2">
                <li>✅ Installazione rapida</li>
                <li>✅ Costo iniziale contenuto</li>
                <li>✅ Riscaldamento veloce</li>
                <li>❌ Comfort limitato</li>
                <li>❌ Consumi elevati</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-3">🌱 Pompa di Calore</h4>
              <ul className="text-sm text-secondary-700 space-y-2">
                <li>✅ Massima efficienza energetica</li>
                <li>✅ Zero emissioni locali</li>
                <li>✅ Raffrescamento estivo</li>
                <li>❌ Investimento iniziale elevato</li>
                <li>❌ Dipendenza da temperatura esterna</li>
              </ul>
            </div>
          </div>

          {/* Fonti e Disclaimer */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">📊 Fonti e Metodologia</h4>
            <div className="text-sm text-blue-700 space-y-2">
              <p><strong>Dati basati su:</strong> ENEA (Agenzia Nazionale Efficienza Energetica), GSE (Gestore Servizi Energetici), Normative UNI EN 14825</p>
              <p><strong>Parametri di calcolo:</strong> Casa 120 mq, zona climatica E (Ravenna), isolamento medio, temperatura comfort 20°C</p>
              <p><strong>Costi energetici:</strong> Gas metano €1.38/mc, Energia elettrica €0.30/kWh (prezzi medi 2024)</p>
              <p><strong>Disclaimer:</strong> I valori sono indicativi e possono variare in base alle specifiche condizioni dell'edificio e dell'impianto. Per una valutazione precisa è necessario un sopralluogo tecnico gratuito.</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a 
              href={`tel:${phone}`}
              className="btn-primary mr-4"
            >
              Richiedi Consulenza Gratuita
            </a>
            <a 
              href="/contatti"
              className="btn-secondary"
            >
              Confronta Preventivi
            </a>
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
                Quanto costa installare il riscaldamento a pavimento a Ravenna?
              </h3>
              <p className="text-secondary-700">
                Il costo varia da €40 a €80 al mq in base al tipo di sistema e alla complessità dell'installazione. 
                Per una casa di 100 mq, il costo medio è di €5.000-7.000. Contattaci per un preventivo dettagliato gratuito.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">
                Si può installare in una casa già esistente?
              </h3>
              <p className="text-secondary-700">
                Sì, è possibile installare il riscaldamento a pavimento anche in ristrutturazioni. 
                Valutiamo l'altezza disponibile e proponiamo sistemi a basso spessore quando necessario.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">
                Che tipo di pavimentazione posso usare?
              </h3>
              <p className="text-secondary-700">
                Il riscaldamento a pavimento è compatibile con ceramica, gres, parquet, laminato e resina. 
                Ogni materiale ha caratteristiche specifiche che valutiamo in fase di progettazione.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">
                Quanto tempo ci vuole per riscaldare la casa?
              </h3>
              <p className="text-secondary-700">
                Il riscaldamento a pavimento ha tempi di risposta più lenti dei radiatori (2-3 ore), 
                ma mantiene la temperatura costante più a lungo, garantendo maggior comfort e risparmio energetico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-50 text-secondary-700 section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-secondary-700 mb-6">
            Pronto per il Massimo Comfort?
          </h2>
          <p className="text-xl text-secondary-700 mb-8 max-w-2xl mx-auto">
            Contatta EFFEMME SRL per una consulenza gratuita sul riscaldamento a pavimento. 
            Progettazione personalizzata e installazione professionale a Ravenna!
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
    </Layout>
  )
}