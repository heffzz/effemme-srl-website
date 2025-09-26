import Head from 'next/head';
import Layout from '../components/Layout';
import CalcolatoreContoTermico from '../components/CalcolatoreContoTermico';

export default function ContoTermico() {
  const phone = "0544 123456";
  const email = "info@effemmesrl.com";

  return (
    <Layout>
      <Head>
        <title>Calcolatore Conto Termico 3.0 - Effemme SRL Ravenna</title>
        <meta 
          name="description" 
          content="Calcola il tuo incentivo Conto Termico 3.0 per pompe di calore, biomasse e solare termico. Rimborso diretto dal GSE fino al 65%." 
        />
        <meta name="keywords" content="conto termico 3.0, incentivi GSE, pompe di calore, biomasse, solare termico, Ravenna" />
        <link rel="canonical" href="https://effemmesrl.com/conto-termico-3-0" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Calcolatore Conto Termico 3.0 - Effemme SRL" />
        <meta property="og:description" content="Calcola il tuo incentivo Conto Termico 3.0 per pompe di calore, biomasse e solare termico." />
        <meta property="og:url" content="https://effemmesrl.com/conto-termico-3-0" />
        <meta property="og:type" content="website" />
        
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Calcolatore Conto Termico 3.0",
              "description": "Calcola il tuo incentivo Conto Termico 3.0 per pompe di calore, biomasse e solare termico",
              "url": "https://effemmesrl.com/conto-termico-3-0",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Effemme SRL",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Ravenna",
                  "addressRegion": "ER",
                  "addressCountry": "IT"
                }
              }
            })
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            💸 Calcolatore Conto Termico 3.0
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Scopri quanto puoi ottenere dal GSE con il Conto Termico 3.0 per pompe di calore, 
            biomasse e solare termico. Rimborso diretto fino al 65%!
          </p>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 max-w-2xl mx-auto">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="text-xl font-bold mb-2">Rimborso Diretto GSE</h3>
            <p className="text-white/90">Niente detrazioni fiscali, il GSE ti rimborsa direttamente!</p>
          </div>
        </div>
      </section>

      {/* Informazioni Conto Termico */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-secondary-900">
              Come Funziona il Conto Termico 3.0
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold mb-3 text-secondary-900">Pompe di Calore</h3>
                <p className="text-secondary-700">Fino al 65% di rimborso per pompe di calore aria-acqua e geotermiche</p>
              </div>
              
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-xl font-bold mb-3 text-secondary-900">Biomasse</h3>
                <p className="text-secondary-700">Incentivi per caldaie, stufe e termocamini a biomassa</p>
              </div>
              
              <div className="text-center p-6 bg-yellow-50 rounded-xl">
                <div className="text-4xl mb-4">☀️</div>
                <h3 className="text-xl font-bold mb-3 text-secondary-900">Solare Termico</h3>
                <p className="text-secondary-700">Contributi per impianti solari termici per acqua calda</p>
              </div>
            </div>

            {/* Calcolatore Conto Termico */}
            <CalcolatoreContoTermico />
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary-900">
            Perché Scegliere il Conto Termico 3.0
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="font-bold mb-2 text-secondary-900">Rimborso Diretto</h3>
              <p className="text-secondary-700 text-sm">Il GSE ti rimborsa direttamente, senza aspettare le detrazioni fiscali</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-bold mb-2 text-secondary-900">Tempi Rapidi</h3>
              <p className="text-secondary-700 text-sm">Rimborso in 2-4 mesi dall'approvazione della domanda</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="font-bold mb-2 text-secondary-900">Senza ISEE</h3>
              <p className="text-secondary-700 text-sm">Non serve l'ISEE, disponibile per tutti i tipi di immobili</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="font-bold mb-2 text-secondary-900">Anche Aziende</h3>
              <p className="text-secondary-700 text-sm">Disponibile anche per imprese e condomini</p>
            </div>
          </div>
        </div>
      </section>

      {/* Assistenza */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ti Aiutiamo con la Domanda
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Il nostro team esperto ti assiste in tutto il processo: dalla scelta dell'impianto 
            alla presentazione della domanda GSE.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contatti"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-all"
            >
              📧 Richiedi Preventivo
            </a>
            <a 
              href={`tel:${phone}`}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-bold transition-all"
            >
              📞 Chiamaci Ora
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}