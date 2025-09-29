import React, { useState } from 'react';
import Head from 'next/head';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "Quanto costa sostituire una caldaia a Ravenna?",
      answer: "Il costo per sostituire una caldaia varia da €1.500 a €4.000, a seconda del modello e della potenza. Con gli incentivi statali 2025 (Ecobonus, Bonus Casa) puoi risparmiare fino al 65% del costo totale. Offriamo preventivi gratuiti e finanziamenti a tasso zero.",
      category: "Prezzi"
    },
    {
      question: "Quali incentivi statali sono disponibili nel 2025?",
      answer: "Nel 2025 sono attivi: Ecobonus (65% per pompe di calore), Bonus Ristrutturazioni (50%), Conto Termico 3.0 (fino a €15.000 per pompe di calore). Gestiamo noi tutte le pratiche burocratiche per ottenere gli incentivi.",
      category: "Incentivi"
    },
    {
      question: "In quanto tempo installate una caldaia?",
      answer: "L'installazione di una caldaia richiede generalmente 4-6 ore. Offriamo servizio di installazione in 24/48h dalla conferma dell'ordine. Per sostituzioni urgenti, garantiamo intervento in giornata (servizio disponibile a Ravenna e provincia).",
      category: "Tempi"
    },
    {
      question: "Che garanzia offrite sui vostri lavori?",
      answer: "Offriamo 2 anni di garanzia su tutti i nostri lavori di installazione, oltre alla garanzia del produttore (fino a 10 anni per caldaie IMMERGAS). Include assistenza tecnica gratuita e manutenzione programmata nel primo anno.",
      category: "Garanzie"
    },
    {
      question: "Lavorate anche nei weekend e festivi?",
      answer: "Sì, offriamo servizio di emergenza 24/7 per guasti urgenti. Per installazioni programmate, lavoriamo anche il sabato mattina. Il servizio di pronto intervento è disponibile in tutta la provincia di Ravenna.",
      category: "Orari"
    },
    {
      question: "Quanto si risparmia con una pompa di calore?",
      answer: "Una pompa di calore può ridurre i costi di riscaldamento del 50-70% rispetto a una caldaia tradizionale. Con gli incentivi statali, l'investimento si ammortizza in 3-5 anni. Offriamo calcolo personalizzato del risparmio.",
      category: "Risparmio"
    },
    {
      question: "Fate anche la manutenzione delle caldaie?",
      answer: "Sì, offriamo servizio di manutenzione ordinaria e straordinaria per tutte le marche di caldaie. Controllo fumi obbligatorio, pulizia, controllo efficienza. Pacchetti manutenzione annuale da €80 con controlli programmati.",
      category: "Manutenzione"
    },
    {
      question: "In che zone di Ravenna operate?",
      answer: "Operiamo in tutta la provincia di Ravenna: Ravenna centro, Marina di Ravenna, Lido Adriano, Cervia, Milano Marittima, Faenza, Lugo, Bagnacavallo, Russi, e tutti i comuni limitrofi. Sopralluoghi gratuiti entro 30km.",
      category: "Zone"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Genera JSON-LD per le FAQ
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd)
          }}
        />
      </Head>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-secondary-700 mb-4">
              ❓ Domande Frequenti
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Risposte alle domande più comuni sui nostri servizi termoidraulici a Ravenna
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-semibold mr-3">
                        {faq.category}
                      </span>
                      <h3 className="font-semibold text-secondary-700 text-lg">
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`transform transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-6 py-4 bg-white border-t border-gray-100">
                      <p className="text-secondary-700 leading-relaxed">
                        {faq.answer}
                      </p>
                      
                      {/* CTA contestuale */}
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-sm text-blue-800 mb-3">
                          <strong>Hai altre domande su questo argomento?</strong>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <a
                            href={`https://wa.me/393520030795?text=${encodeURIComponent(`Ciao! Ho una domanda su: ${faq.question}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold inline-flex items-center justify-center transition-colors"
                          >
                            💬 Chiedi su WhatsApp
                          </a>
                          <a
                            href="tel:3520030795"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold inline-flex items-center justify-center transition-colors"
                          >
                            📞 Chiama Ora
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA finale */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-4 sm:p-6 lg:p-8 border border-primary-200">
              <h3 className="text-xl sm:text-2xl font-bold text-secondary-700 mb-4">
                Non hai trovato la risposta che cercavi?
              </h3>
              <p className="text-base sm:text-lg text-secondary-600 mb-6">
                I nostri esperti sono pronti a rispondere a tutte le tue domande
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href={`https://wa.me/393520030795?text=${encodeURIComponent("Ciao! Ho alcune domande sui vostri servizi termoidraulici. Potete aiutarmi?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg inline-flex items-center justify-center transition-all transform hover:scale-105 shadow-lg"
                >
                  <span className="flex flex-col sm:flex-row items-center">
                    <span>💬 SCRIVICI SU WHATSAPP</span>
                    <span className="mt-1 sm:mt-0 sm:ml-2 bg-white text-green-500 px-2 py-1 rounded text-xs sm:text-sm">RISPOSTA IN 5 MIN</span>
                  </span>
                </a>
                <a
                  href="tel:3520030795"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg inline-flex items-center justify-center transition-all transform hover:scale-105 shadow-lg"
                >
                  <span className="flex flex-col sm:flex-row items-center">
                    <span>📞 CHIAMA ORA</span>
                    <span className="mt-1 sm:mt-0 sm:ml-2 bg-white text-blue-500 px-2 py-1 rounded text-xs sm:text-sm">PREVENTIVO GRATUITO</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;