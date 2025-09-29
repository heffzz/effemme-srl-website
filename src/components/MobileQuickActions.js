import React, { useState, useEffect } from 'react';

const MobileQuickActions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const phone = '3520030795';
  const whatsappNumber = '393520030795';
  const whatsappMessage = encodeURIComponent("Ciao! Ho visto il vostro sito e vorrei ricevere un preventivo gratuito. Potete aiutarmi?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 300);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isMobile || !isVisible) {
    return null;
  }

  const actions = [
    {
      icon: '📞',
      label: 'Chiama',
      action: () => window.location.href = `tel:${phone}`,
      color: 'bg-blue-500 hover:bg-blue-600',
      urgent: true
    },
    {
      icon: '💬',
      label: 'WhatsApp',
      action: () => window.open(whatsappUrl, '_blank'),
      color: 'bg-green-500 hover:bg-green-600',
      urgent: true
    },
    {
      icon: '📊',
      label: 'Calcola',
      action: () => {
        const calcolatoreElement = document.getElementById('calcolatore-incentivi');
        if (calcolatoreElement) {
          calcolatoreElement.scrollIntoView({ behavior: 'smooth' });
        }
      },
      color: 'bg-purple-500 hover:bg-purple-600',
      urgent: false
    },
    {
      icon: '📧',
      label: 'Email',
      action: () => window.location.href = 'mailto:info@effemmesrl.com?subject=Richiesta Preventivo&body=Salve, vorrei ricevere un preventivo per...',
      color: 'bg-gray-500 hover:bg-gray-600',
      urgent: false
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl md:hidden">
      {/* Barra di urgenza */}
      <div className="bg-red-500 text-white text-center py-1 text-xs font-bold animate-pulse">
        🔥 PREVENTIVO GRATUITO IN 24H
      </div>
      
      {/* Azioni principali */}
      <div className="grid grid-cols-4 gap-1 p-2">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.action}
            className={`${action.color} text-white rounded-lg p-3 flex flex-col items-center justify-center transition-all transform active:scale-95 ${
              action.urgent ? 'shadow-lg' : ''
            }`}
          >
            <span className="text-xl mb-1">{action.icon}</span>
            <span className="text-xs font-semibold">{action.label}</span>
            {action.urgent && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            )}
          </button>
        ))}
      </div>

      {/* Messaggio di fiducia */}
      <div className="bg-green-50 text-center py-2 text-xs text-green-700">
        <span className="font-semibold">✅ Oltre 1000 clienti soddisfatti</span>
        <span className="mx-2">•</span>
        <span>⚡ Risposta immediata</span>
      </div>
    </div>
  );
};

export default MobileQuickActions;