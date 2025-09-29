import React, { useState } from 'react';

const LeadMagnet = () => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Inserisci un indirizzo email valido');
      setIsSubmitting(false);
      return;
    }

    if (!nome.trim()) {
      setError('Inserisci il tuo nome');
      setIsSubmitting(false);
      return;
    }

    try {
      // Simula invio (in produzione collegare a servizio email)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In produzione, qui faresti la chiamata API per salvare il lead
      console.log('Lead captured:', { nome, email });
      
      setIsSubmitted(true);
      
      // Traccia conversione (Google Analytics, Facebook Pixel, etc.)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
          'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
          'value': 1.0,
          'currency': 'EUR'
        });
      }
      
    } catch (err) {
      setError('Errore durante l\'invio. Riprova più tardi.');
    }
    
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-8 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-green-800 mb-4">
          Perfetto! Controlla la tua email
        </h3>
        <p className="text-green-700 mb-6">
          Ti abbiamo inviato la <strong>"Guida Incentivi 2025"</strong> e il calcolatore di risparmio personalizzato.
        </p>
        <div className="bg-white rounded-lg p-4 border border-green-200">
          <p className="text-sm text-gray-600 mb-3">
            <strong>Cosa troverai nella guida:</strong>
          </p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>✅ Tutti gli incentivi disponibili nel 2025</li>
            <li>✅ Come ottenere fino a €15.000 di contributi</li>
            <li>✅ Calcolatore risparmio personalizzato</li>
            <li>✅ Checklist per non perdere nessun incentivo</li>
          </ul>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          Non hai ricevuto l'email? Controlla la cartella spam o contattaci su WhatsApp
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-200 rounded-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Badge gratuito */}
      <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-red-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold transform rotate-12">
        GRATIS
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
        {/* Contenuto */}
        <div>
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3">📊</span>
            <h3 className="text-2xl font-bold text-gray-800">
              Guida Incentivi 2025
            </h3>
          </div>
          
          <p className="text-gray-700 mb-6 text-lg">
            Scopri <strong>tutti gli incentivi statali 2025</strong> e calcola quanto puoi risparmiare con la tua nuova caldaia o pompa di calore.
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center text-gray-700">
              <span className="text-green-500 mr-3">✅</span>
              <span><strong>Ecobonus, Bonus Casa, Conto Termico</strong> - Tutte le opzioni</span>
            </div>
            <div className="flex items-center text-gray-700">
              <span className="text-green-500 mr-3">✅</span>
              <span><strong>Calcolatore personalizzato</strong> - Il tuo risparmio esatto</span>
            </div>
            <div className="flex items-center text-gray-700">
              <span className="text-green-500 mr-3">✅</span>
              <span><strong>Checklist completa</strong> - Non perdere nessun incentivo</span>
            </div>
            <div className="flex items-center text-gray-700">
              <span className="text-green-500 mr-3">✅</span>
              <span><strong>Esempi pratici</strong> - Casi reali di risparmio</span>
            </div>
          </div>

          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
            <p className="text-yellow-800 text-sm">
              <strong>⚠️ Attenzione:</strong> Alcuni incentivi hanno scadenze ravvicinate. 
              Scarica subito la guida per non perdere opportunità di risparmio!
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200">
          <div className="text-center mb-6">
            <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
              Scarica GRATIS la Guida
            </h4>
            <p className="text-gray-600 text-sm">
              Inserisci i tuoi dati e ricevi subito la guida completa
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                Nome *
              </label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                placeholder="Il tuo nome"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                placeholder="la-tua-email@esempio.com"
                required
              />
            </div>

            {error && (
              <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-bold text-base sm:text-lg transition-all transform hover:scale-105 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Invio in corso...
                </span>
              ) : (
                '📥 SCARICA GRATIS LA GUIDA'
              )}
            </button>

            <p className="text-xs text-gray-500 text-center">
              Riceverai la guida via email. Non condividiamo i tuoi dati con terzi.
            </p>
          </form>

          {/* Social proof */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-center text-sm text-gray-600">
              <span className="mr-2">⭐⭐⭐⭐⭐</span>
              <span>Già scaricata da <strong>500+ famiglie</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadMagnet;