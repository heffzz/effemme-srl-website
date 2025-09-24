import Layout from '../components/Layout'
import Link from 'next/link'

export default function PompeDiCaloreDaikin() {
  const phone = process.env.PHONE || '{{PHONE}}'

  const pompeModels = [
    {
      name: "DAIKIN ALTHERMA 3",
      type: "Pompa di calore aria-acqua",
      features: ["Inverter", "R-32 eco-friendly", "Controllo smart", "Efficienza A+++"],
      power: "4-16 kW",
      cop: "4.5"
    },
    {
      name: "DAIKIN ALTHERMA 3 H HT",
      type: "Alta temperatura",
      features: ["Fino a 70°C", "Retrofit caldaia", "Inverter", "Silenzioso"],
      power: "4-16 kW",
      cop: "4.2"
    },
    {
      name: "DAIKIN ALTHERMA 3 GEO",
      type: "Pompa di calore geotermica",
      features: ["Massima efficienza", "Funzionamento costante", "Lunga durata", "Zero emissioni"],
      power: "6-16 kW",
      cop: "5.2"
    }
  ]

  const benefits = [
    {
      title: "Efficienza Energetica",
      description: "COP fino a 5.2: per ogni kW consumato, produci fino a 5.2 kW di calore",
      icon: "⚡"
    },
    {
      title: "Eco-Sostenibilità",
      description: "Zero emissioni locali e gas refrigerante R-32 a basso impatto ambientale",
      icon: "🌱"
    },
    {
      title: "Riscaldamento e Raffrescamento",
      description: "Un unico sistema per riscaldare d'inverno e raffrescare d'estate",
      icon: "🌡️"
    },
    {
      title: "Incentivi Fiscali",
      description: "Accesso a Superbonus, Ecobonus e Conto Termico per massimo risparmio",
      icon: "💰"
    }
  ]

  return (
    <Layout
      title="Pompe di Calore DAIKIN Ravenna | Installazione e Manutenzione - EFFEMME SRL"
      description="Pompe di calore DAIKIN a Ravenna: installazione professionale, sistemi aria-acqua ad alta efficienza. Riscaldamento e raffrescamento eco-sostenibile. Preventivo gratuito!"
      keywords="pompe di calore daikin ravenna, installazione pompe di calore, riscaldamento pompa di calore, climatizzazione eco-sostenibile ravenna"
      canonical="/pompe-di-calore-daikin-ravenna"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-600 text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-xl text-white mb-6">
                Pompe di Calore DAIKIN a Ravenna
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                EFFEMME SRL è partner certificato DAIKIN per l'installazione di pompe di calore ad alta efficienza. 
                Riscaldamento e raffrescamento eco-sostenibile per la tua casa a Ravenna con tecnologia giapponese di qualità superiore.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contatti" className="btn-secondary bg-white text-green-600 hover:bg-gray-50">
                  Richiedi Preventivo Gratuito
                </Link>
                <a 
                  href={`tel:${phone}`} 
                  className="btn-primary bg-green-500 hover:bg-green-400 border-2 border-green-500"
                >
                  📞 Chiama Subito
                </a>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-6">Perché Scegliere DAIKIN?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🏆</span>
                  <span>Leader mondiale nelle pompe di calore</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🌡️</span>
                  <span>Funzionamento fino a -25°C esterni</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">📱</span>
                  <span>Controllo smart da remoto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🔧</span>
                  <span>Garanzia fino a 7 anni</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modelli Pompe di Calore */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Pompe di Calore DAIKIN Disponibili</h2>
            <p className="text-body max-w-3xl mx-auto">
              Scopri la gamma completa di pompe di calore DAIKIN che installiamo a Ravenna. 
              Tecnologia inverter avanzata per massima efficienza energetica e comfort.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pompeModels.map((pompa, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                <div className="text-4xl mb-4">♻️</div>
                <h3 className="text-xl font-bold mb-2 text-secondary-900">{pompa.name}</h3>
                <p className="text-green-600 font-medium mb-4">{pompa.type}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <span className="text-sm font-medium text-secondary-700">Potenza: </span>
                    <span className="text-lg font-bold text-green-600">{pompa.power}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-secondary-700">COP: </span>
                    <span className="text-lg font-bold text-green-600">{pompa.cop}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {pompa.features.map((feature, idx) => (
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
                  className="w-full btn-primary text-center bg-green-600 hover:bg-green-700"
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
            <h2 className="heading-lg mb-6">Vantaggi delle Pompe di Calore DAIKIN</h2>
            <p className="text-body max-w-3xl mx-auto">
              Le pompe di calore DAIKIN rappresentano il futuro del riscaldamento e raffrescamento domestico. 
              Scopri tutti i vantaggi di scegliere DAIKIN per la tua casa a Ravenna.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-secondary-900">{benefit.title}</h3>
                <p className="text-secondary-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Come Funziona */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Come Funziona una Pompa di Calore</h2>
              <div className="space-y-6 text-body">
                <p>
                  La <strong>pompa di calore DAIKIN</strong> è un sistema innovativo che sfrutta l'energia presente 
                  nell'aria esterna per riscaldare e raffrescare la tua casa a Ravenna. Anche con temperature 
                  esterne fino a -25°C, la pompa di calore continua a funzionare efficacemente.
                </p>
                <p>
                  Il principio di funzionamento si basa sul <strong>ciclo termodinamico</strong>: il refrigerante 
                  assorbe calore dall'aria esterna e lo trasferisce all'interno dell'abitazione attraverso 
                  l'impianto di riscaldamento esistente (radiatori, riscaldamento a pavimento, fancoil).
                </p>
                <p>
                  Durante l'estate, il processo si inverte e la pompa di calore funziona come un climatizzatore, 
                  offrendo <strong>raffrescamento efficiente</strong> con un unico sistema integrato.
                </p>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-6">Efficienza Energetica</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">COP 5.2</div>
                  <p className="text-secondary-600">Coefficiente di prestazione massimo</p>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Confronto Consumi Annuali</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Caldaia a gas:</span>
                      <span className="font-bold">€ 1.200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Caldaia elettrica:</span>
                      <span className="font-bold">€ 2.400</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Pompa di calore DAIKIN:</span>
                      <span className="font-bold">€ 600</span>
                    </div>
                  </div>
                  <p className="text-xs text-secondary-500 mt-2">
                    *Calcolo per abitazione 120 mq, zona climatica E
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">50-70%</div>
                  <p className="text-secondary-600">Risparmio sui costi energetici</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installazione */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6">Processo di Installazione</h2>
            <p className="text-body max-w-3xl mx-auto">
              L'installazione di una pompa di calore DAIKIN richiede competenza tecnica specializzata. 
              EFFEMME SRL gestisce ogni fase del processo con professionalità e precisione.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-900">Progettazione</h3>
              <p className="text-secondary-600">
                Studio termico dell'abitazione e dimensionamento ottimale del sistema DAIKIN.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-900">Installazione</h3>
              <p className="text-secondary-600">
                Montaggio unità esterna, collegamento idraulico ed elettrico con impianto esistente.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-900">Configurazione</h3>
              <p className="text-secondary-600">
                Programmazione parametri, test di funzionamento e ottimizzazione prestazioni.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-900">Formazione</h3>
              <p className="text-secondary-600">
                Istruzioni d'uso, configurazione app mobile e attivazione garanzia estesa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Incentivi */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="heading-md mb-6">Incentivi e Detrazioni Fiscali</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold mb-2">Superbonus 70%</h3>
                  <p className="text-secondary-600">
                    Detrazione fiscale del 70% per interventi di efficientamento energetico 
                    con pompa di calore in sostituzione di caldaia a gas.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold mb-2">Ecobonus 65%</h3>
                  <p className="text-secondary-600">
                    Detrazione fiscale del 65% per installazione pompa di calore 
                    ad alta efficienza energetica.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-semibold mb-2">Conto Termico 2.0</h3>
                  <p className="text-secondary-600">
                    Contributo diretto fino al 65% della spesa sostenuta, 
                    erogato in 2-5 anni dal GSE.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-700 mb-2">Ti Assistiamo Gratuitamente</h4>
                <p className="text-green-600 text-sm">
                  EFFEMME SRL ti supporta in tutte le pratiche burocratiche per accedere 
                  agli incentivi fiscali disponibili.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="heading-md mb-6">Calcola il Tuo Risparmio</h2>
              <div className="bg-green-50 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Esempio Pratico</h3>
                  <p className="text-secondary-600">Casa 120 mq a Ravenna</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span>Costo pompa di calore DAIKIN:</span>
                    <span className="font-bold">€ 12.000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-100 rounded-lg">
                    <span>Con Superbonus 70%:</span>
                    <span className="font-bold text-green-600">€ 3.600</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span>Risparmio annuo energia:</span>
                    <span className="font-bold">€ 800</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-100 rounded-lg">
                    <span>Rientro investimento:</span>
                    <span className="font-bold text-green-600">4.5 anni</span>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <a 
                    href={`tel:${phone}`}
                    className="btn-primary bg-green-600 hover:bg-green-700"
                  >
                    Calcola il Tuo Preventivo
                  </a>
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
                Una pompa di calore funziona anche con il freddo di Ravenna?
              </h3>
              <p className="text-secondary-600">
                Sì, le pompe di calore DAIKIN funzionano efficacemente fino a -25°C esterni. 
                A Ravenna, dove le temperature raramente scendono sotto i -5°C, 
                garantiscono prestazioni ottimali tutto l'anno.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 text-secondary-900">
                Posso collegare la pompa di calore ai radiatori esistenti?
              </h3>
              <p className="text-secondary-600">
                Sì, le pompe di calore DAIKIN Altherma 3 H HT possono raggiungere temperature 
                fino a 70°C, rendendole compatibili con i radiatori tradizionali senza modifiche all'impianto.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 text-secondary-900">
                Quanto costa installare una pompa di calore a Ravenna?
              </h3>
              <p className="text-secondary-600">
                Il costo varia da €8.000 a €15.000 in base alla potenza e complessità dell'installazione. 
                Con gli incentivi fiscali, il costo effettivo può ridursi del 65-70%. 
                Contattaci per un preventivo personalizzato gratuito.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 text-secondary-900">
                Che manutenzione richiede una pompa di calore DAIKIN?
              </h3>
              <p className="text-secondary-600">
                La manutenzione è minima: controllo annuale dei filtri e verifica del refrigerante ogni 2-3 anni. 
                EFFEMME SRL offre contratti di manutenzione programmata per garantire sempre massima efficienza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-white mb-6">
            Pronto per il Futuro del Riscaldamento?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contatta EFFEMME SRL per una consulenza gratuita sulle pompe di calore DAIKIN. 
            Scopri quanto puoi risparmiare con la tecnologia più avanzata del settore!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${phone}`}
              className="btn-secondary bg-white text-green-600 hover:bg-gray-50"
            >
              📞 Chiama Ora
            </a>
            <Link href="/contatti" className="btn-primary bg-green-500 hover:bg-green-400">
              💬 Richiedi Preventivo
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}