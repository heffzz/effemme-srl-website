import Layout from '../components/Layout'
import Link from 'next/link'

export default function ChiSiamo() {
  const phone = '3520030795'

  return (
    <Layout
      title="Chi Siamo - EFFEMME SRL | Storia e Valori della Nostra Azienda Termoidraulica"
      description="Scopri la storia di EFFEMME SRL: oltre 25 anni di esperienza nella termoidraulica a Ravenna. Professionalità, qualità e innovazione per il comfort della tua casa."
      keywords="chi siamo effemme srl, storia azienda termoidraulica ravenna, esperienza caldaie climatizzatori, valori aziendali"
      canonical="/chi-siamo"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 text-secondary-700 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-secondary-700 mb-6">
              Chi Siamo
            </h1>
            <p className="text-xl text-secondary-700 leading-relaxed">
              EFFEMME SRL: la tua azienda di fiducia per termoidraulica, 
              riscaldamento e climatizzazione a Ravenna dal 1995
            </p>
          </div>
        </div>
      </section>

      {/* Storia Aziendale */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">La Nostra Storia</h2>
              <div className="space-y-6 text-body">
                <p>
                  <strong>EFFEMME SRL</strong> nasce nel 1995 dalla passione e dall'esperienza di professionisti 
                  del settore termoidraulico. Con sede a Ravenna, in Via del Fabbro 44 - Frazione Gambellara, 
                  la nostra azienda si è affermata nel territorio come punto di riferimento per 
                  <strong> installazione, manutenzione e riparazione di impianti termoidraulici</strong>.
                </p>
                <p>
                  Negli anni abbiamo costruito la nostra reputazione basandoci su <strong>qualità del servizio, 
                  professionalità e innovazione tecnologica</strong>. Siamo diventati partner ufficiali di 
                  marchi leader come <strong>IMMERGAS per le caldaie</strong> e <strong>DAIKIN per le pompe di calore</strong>, 
                  garantendo ai nostri clienti prodotti di eccellenza e assistenza specializzata.
                </p>
                <p>
                  Oggi, con oltre <strong>25 anni di esperienza</strong>, EFFEMME SRL continua a crescere 
                  e innovarsi, sempre attenta alle nuove tecnologie e alle esigenze di efficienza energetica 
                  che caratterizzano il settore moderno del riscaldamento e della climatizzazione.
                </p>
              </div>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-700 mb-6">I Nostri Numeri</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">25+</div>
                  <div className="text-secondary-700">Anni di Esperienza</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
                  <div className="text-secondary-700">Clienti Soddisfatti</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                  <div className="text-secondary-700">Comuni Serviti</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">⚡</div>
                  <div className="text-secondary-700">Rapidità</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valori Aziendali */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">I Nostri Valori</h2>
            <p className="text-body max-w-3xl mx-auto">
              Ogni giorno lavoriamo guidati da principi solidi che ci permettono di offrire 
              il miglior servizio possibile ai nostri clienti.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 text-primary-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-700">Professionalità</h3>
              <p className="text-secondary-700">
                Tecnici qualificati e formazione continua per garantire interventi sempre all'altezza delle aspettative.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 text-primary-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-700">Rapidità</h3>
              <p className="text-secondary-700">
                Interventi tempestivi per emergenze, perché il comfort non può aspettare.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 text-primary-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🏆
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-700">Qualità</h3>
              <p className="text-secondary-700">
                Utilizziamo solo materiali e componenti di prima qualità, con garanzia su tutti i nostri lavori.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 text-primary-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                💚
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-700">Sostenibilità</h3>
              <p className="text-secondary-700">
                Promuoviamo soluzioni eco-sostenibili per ridurre l'impatto ambientale e i costi energetici.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team e Competenze */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="heading-md mb-6">Il Nostro Team</h2>
              <div className="space-y-6 text-body">
                <p>
                  Il team di EFFEMME SRL è composto da <strong>tecnici specializzati e certificati</strong> 
                  che vantano anni di esperienza nel settore termoidraulico. Ogni membro del nostro staff 
                  partecipa regolarmente a corsi di aggiornamento per rimanere sempre al passo con le 
                  ultime innovazioni tecnologiche.
                </p>
                <p>
                  La nostra forza risiede nella <strong>competenza multidisciplinare</strong>: dai sistemi 
                  di riscaldamento tradizionali alle più moderne pompe di calore, dalla climatizzazione 
                  agli impianti solari termici, siamo in grado di offrire soluzioni complete e integrate.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Certificazioni e Abilitazioni</h3>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Abilitazione impianti gas
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Certificazione IMMERGAS
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Certificazione DAIKIN
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Patentino frigoristi
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Abilitazione impianti elettrici
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="heading-md mb-6">Perché Scegliere EFFEMME SRL</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 p-2 rounded-lg mr-4 mt-1">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Esperienza Consolidata</h3>
                    <p className="text-secondary-700">
                      Oltre 25 anni nel settore ci hanno permesso di affrontare ogni tipo di sfida 
                      e di sviluppare soluzioni innovative per ogni esigenza.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 p-2 rounded-lg mr-4 mt-1">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Garanzia Totale</h3>
                    <p className="text-secondary-700">
                      Tutti i nostri interventi sono coperti da garanzia. La tua soddisfazione 
                      è la nostra priorità assoluta.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 p-2 rounded-lg mr-4 mt-1">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Prezzi Trasparenti</h3>
                    <p className="text-secondary-700">
                      Preventivi dettagliati e gratuiti, senza sorprese. Saprai sempre 
                      esattamente cosa stai pagando e perché.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-50 text-secondary-500 section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-secondary-700 mb-6">
            Vuoi Conoscere Meglio i Nostri Servizi?
          </h2>
          <p className="text-xl text-secondary-700 mb-8 max-w-2xl mx-auto">
            Contattaci per una consulenza gratuita. Il nostro team è pronto ad aiutarti 
            a trovare la soluzione perfetta per le tue esigenze.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${phone}`}
              className="btn-secondary bg-white text-primary-600 hover:bg-gray-50 border border-primary-600"
            >
              📞 Chiama Ora
            </a>
            <Link href="/contatti" className="btn-primary">
              💬 Richiedi Informazioni
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}