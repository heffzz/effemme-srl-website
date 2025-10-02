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