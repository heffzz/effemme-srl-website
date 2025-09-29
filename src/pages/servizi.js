import Layout from '../components/Layout'
import Link from 'next/link'
import CalcolatoreIncentivi from '../components/CalcolatoreIncentivi'

export default function Servizi() {
  const phone = '3520030795'

  const services = [
    {
      title: "Montaggio Caldaie IMMERGAS",
      description: "Installazione professionale di caldaie IMMERGAS a condensazione e tradizionali. Efficienza energetica garantita e risparmio sui consumi.",
      features: ["Caldaie a condensazione", "Caldaie murali e a basamento", "Sistemi ibridi", "Manutenzione programmata"],
      href: "/montaggio-caldaie-immergas-ravenna",
      icon: "🔥",
      color: "from-red-50 to-orange-50 border-red-200"
    },
    {
      title: "Climatizzazione e Pompe di Calore",
      description: "Soluzioni complete per climatizzazione: climatizzatori, condizionatori e pompe di calore DAIKIN. Comfort 365 giorni l'anno con massima efficienza energetica.",
      features: ["Climatizzatori e condizionatori", "Pompe di calore DAIKIN", "Sistemi inverter", "Controllo smart", "Incentivi fiscali"],
      href: "/climatizzazione-e-pompe-di-calore-ravenna",
      icon: "🌡️",
      color: "from-cyan-50 to-blue-50 border-cyan-200"
    },
    {
      title: "Riscaldamento a Pavimento",
      description: "Progettazione e installazione di sistemi di riscaldamento a pavimento radiante. Comfort ottimale e risparmio energetico.",
      features: ["Sistemi radianti", "Controllo zona per zona", "Compatibile con ogni caldaia", "Massimo comfort"],
      href: "/riscaldamento-a-pavimento-ravenna",
      icon: "🏠",
      color: "from-blue-50 to-cyan-50 border-blue-200"
    }
  ]

  const additionalServices = [
    "Installazione solare termico",
    "Sistemi di ventilazione meccanica",
    "Impianti di condizionamento industriali",
    "Certificazioni energetiche",
    "Collaudi e verifiche impianti",
    "Consulenza efficienza energetica"
  ]

  return (
    <Layout
      title="Servizi Termoidraulici EFFEMME SRL | Caldaie, Climatizzatori, Riscaldamento Ravenna"
      description="Scopri tutti i servizi di EFFEMME SRL: caldaie IMMERGAS, pompe di calore DAIKIN, climatizzatori, riscaldamento a pavimento e manutenzione a Ravenna."
      keywords="servizi termoidraulici ravenna, caldaie immergas, pompe di calore daikin, climatizzatori, riscaldamento a pavimento, manutenzione"
      canonical="/servizi"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 text-secondary-700 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-secondary-700 mb-6">
              I Nostri Servizi Termoidraulici
            </h1>
            <p className="text-xl text-secondary-700 leading-relaxed">
              Soluzioni complete per riscaldamento, climatizzazione e termoidraulica a Ravenna. 
              Qualità professionale e tecnologie all'avanguardia per il comfort della tua casa.
            </p>
          </div>
        </div>
      </section>

      {/* Servizi Principali */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">I Nostri Servizi Specializzati</h2>
            <p className="text-body max-w-3xl mx-auto">
              EFFEMME SRL offre una gamma completa di servizi termoidraulici, 
              dalla progettazione all'installazione, dalla manutenzione alle riparazioni urgenti.
            </p>
          </div>
          
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className={`relative overflow-hidden rounded-2xl ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Contenuto */}
                  <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center mb-6">
                      <span className="text-4xl mr-4">{service.icon}</span>
                      <h3 className="heading-md">{service.title}</h3>
                    </div>
                    <p className="text-body mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-secondary-700">
                          <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href={service.href} className="btn-primary">
                        Scopri di Più
                      </Link>
                      <a href={`tel:${phone}`} className="btn-secondary">
                        Chiama per Info
                      </a>
                    </div>
                  </div>
                  
                  {/* Gradiente colorato */}
                  <div className={`bg-gradient-to-br ${service.color} p-8 lg:p-12 flex items-center justify-center text-secondary-800 border`}>
                    <div className="text-center">
                      <div className="text-8xl mb-6 opacity-80">{service.icon}</div>
                      <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                      <p className="text-lg opacity-90">
                        Professionalità e qualità garantita
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servizi Aggiuntivi */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6">Altri Servizi Disponibili</h2>
            <p className="text-body max-w-3xl mx-auto">
              Oltre ai nostri servizi principali, offriamo una vasta gamma di soluzioni 
              per ogni esigenza termoidraulica e di efficienza energetica.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center">
                  <div className="bg-primary-100 text-primary-600 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium text-secondary-700">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo di Lavoro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Come Lavoriamo</h2>
            <p className="text-body max-w-3xl mx-auto">
              Il nostro processo è studiato per garantire la massima qualità e soddisfazione del cliente, 
              dalla prima consulenza al servizio post-vendita.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 text-primary-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-700">Consulenza</h3>
              <p className="text-secondary-700">
                Sopralluogo gratuito e analisi delle tue esigenze per trovare la soluzione ottimale.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 text-primary-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-700">Preventivo</h3>
              <p className="text-secondary-700">
                Preventivo dettagliato e trasparente, senza costi nascosti o sorprese.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 text-primary-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-700">Installazione</h3>
              <p className="text-secondary-700">
                Installazione professionale con materiali di qualità e nel rispetto dei tempi concordati.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 text-primary-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-700">Assistenza</h3>
              <p className="text-secondary-700">
                Garanzia su tutti i lavori e assistenza post-vendita per la massima tranquillità.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zona di Servizio */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Dove Operiamo</h2>
              <p className="text-body mb-6">
                EFFEMME SRL serve Ravenna e tutta la provincia con interventi rapidi e professionali. 
                La nostra esperienza locale ci permette di conoscere le specifiche esigenze del territorio.
              </p>
              <div className="grid grid-cols-2 gap-4 text-secondary-700 mb-8">
                <div>• Ravenna Centro</div>
                <div>• Marina di Ravenna</div>
                <div>• Cervia - Milano Marittima</div>
                <div>• Faenza</div>
                <div>• Lugo</div>
                <div>• Bagnacavallo</div>
                <div>• Russi</div>
                <div>• Cotignola</div>
                <div>• Fusignano</div>
                <div>• Massa Lombarda</div>
                <div>• Sant'Agata sul Santerno</div>
                <div>• E tutta la provincia</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-secondary-700 mb-2">Tempi di Intervento</h3>
                <div className="space-y-2 text-sm text-secondary-700">
                  <div>• Emergenze: entro 2 ore</div>
                  <div>• Interventi programmati: entro 24-48 ore</div>
                  <div>• Installazioni: su appuntamento</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary-700 mb-6">Richiedi un Preventivo</h3>
              <p className="text-secondary-700 mb-6">
                Contattaci per una consulenza gratuita e un preventivo personalizzato 
                per le tue esigenze termoidrauliche.
              </p>
              <div className="space-y-4">
                <a 
                  href={`tel:${phone}`}
                  className="flex items-center p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                >
                  <div className="bg-primary-100 text-primary-700 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-700">Chiamaci Ora</div>
                    <div className="text-primary-600">{phone}</div>
                  </div>
                </a>
                <Link 
                  href="/contatti"
                  className="flex items-center p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                >
                  <div className="bg-primary-100 text-primary-700 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-700">Invia Richiesta</div>
                    <div className="text-primary-600">Compila il form online</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Incentivi */}
      <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">💰 Incentivi Statali 2025</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Tutti i nostri servizi sono compatibili con gli incentivi statali. 
            Scopri quanto puoi risparmiare con il nostro calcolatore!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-3xl mb-2">🏠</div>
              <h3 className="text-lg font-bold mb-2">Ecobonus</h3>
              <p className="text-sm opacity-90">Fino al 50% di detrazione</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-3xl mb-2">🔧</div>
              <h3 className="text-lg font-bold mb-2">Bonus Ristrutturazioni</h3>
              <p className="text-sm opacity-90">50% per ristrutturazioni</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-3xl mb-2">💸</div>
              <h3 className="text-lg font-bold mb-2">Conto Termico 3.0</h3>
              <p className="text-sm opacity-90">Rimborso diretto GSE</p>
            </div>
          </div>
          
          <button 
            onClick={() => document.getElementById('calcolatore-incentivi').scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-700 px-8 py-3 rounded-lg font-bold transition-all text-lg"
          >
            👇 Calcola i Tuoi Risparmi
          </button>
        </div>
      </section>

      {/* Calcolatore Incentivi */}
      <section id="calcolatore-incentivi" className="bg-gray-50 section-padding">
        <div className="container-custom">
          <CalcolatoreIncentivi />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-50 text-secondary-700 section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-secondary-700 mb-6">
            Hai Bisogno di Uno dei Nostri Servizi?
          </h2>
          <p className="text-xl text-secondary-700 mb-8 max-w-2xl mx-auto">
            Non esitare a contattarci! Il nostro team è pronto a fornirti la soluzione 
            perfetta per ogni tua esigenza termoidraulica.
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