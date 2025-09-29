import React, { useState, useEffect } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const phone = '393520030795';

  // Mostra il widget dopo 3 secondi per non essere invasivo
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const predefinedMessages = [
    {
      text: "🔥 Preventivo caldaia IMMERGAS",
      message: "Ciao! Vorrei un preventivo per una caldaia IMMERGAS. Potete aiutarmi?"
    },
    {
      text: "❄️ Preventivo climatizzatore",
      message: "Salve, sono interessato a un preventivo per climatizzatore. Quando potete fare un sopralluogo?"
    },
    {
      text: "💰 Info incentivi 2025",
      message: "Buongiorno, vorrei informazioni sugli incentivi statali 2025 per pompe di calore."
    },
    {
      text: "🚨 Pronto intervento",
      message: "URGENTE: Ho un problema con la caldaia. Potete intervenire oggi?"
    },
    {
      text: "📋 Preventivo personalizzato",
      message: "Ciao! Ho visto il vostro sito e vorrei ricevere un preventivo personalizzato per i vostri servizi."
    }
  ];

  const sendWhatsAppMessage = (message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Chat Widget */}
      <div className="fixed bottom-4 right-4 z-50">
        {/* Chat Panel */}
        {isOpen && (
          <div className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 max-w-[calc(100vw-2rem)] md:w-80 sm:w-[calc(100vw-1rem)] sm:mx-2">
            {/* Header */}
            <div className="bg-green-500 text-white p-4 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-500 font-bold text-lg">E</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">EFFEMME SRL</h3>
                    <p className="text-xs opacity-90">Risposta in 5 minuti</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-green-600 rounded-full p-1 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 max-h-80 overflow-y-auto">
              <div className="space-y-3">
                {/* Welcome Message */}
                <div className="bg-gray-100 rounded-lg p-3 text-sm">
                  <p className="font-semibold text-gray-800 mb-2">👋 Ciao! Come possiamo aiutarti?</p>
                  <p className="text-gray-600 text-xs">Scegli una delle opzioni qui sotto per iniziare:</p>
                </div>

                {/* Quick Actions */}
                <div className="space-y-2">
                  {predefinedMessages.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => sendWhatsAppMessage(item.message)}
                      className="w-full text-left bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg p-3 text-sm transition-colors"
                    >
                      <span className="text-green-700 font-medium">{item.text}</span>
                    </button>
                  ))}
                </div>

                {/* Custom Message */}
                <div className="border-t pt-3 mt-3">
                  <button
                    onClick={() => sendWhatsAppMessage("Ciao! Ho una domanda specifica sui vostri servizi.")}
                    className="w-full bg-green-500 hover:bg-green-600 text-white rounded-lg p-3 text-sm font-medium transition-colors flex items-center justify-center"
                  >
                    💬 Scrivi messaggio personalizzato
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 p-3 rounded-b-2xl text-center">
              <p className="text-xs text-gray-500">
                ⚡ Risposta garantita entro 5 minuti
              </p>
            </div>
          </div>
        )}

        {/* Chat Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all transform hover:scale-110 ${
            isOpen ? 'rotate-45' : ''
          }`}
          aria-label="Apri chat WhatsApp"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
            </svg>
          )}
        </button>

        {/* Notification Badge */}
        {!isOpen && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
            1
          </div>
        )}
      </div>
    </>
  );
};

export default ChatWidget;