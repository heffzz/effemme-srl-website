import React, { useState, useEffect } from 'react';

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isVisible, setIsVisible] = useState(true);

  // Calcola la data di scadenza (fine del mese corrente)
  const getEndOfMonth = () => {
    const now = new Date();
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    return endOfMonth;
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endDate = getEndOfMonth();
      const now = new Date();
      const difference = endDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Salva in localStorage per non mostrare di nuovo nella sessione
    localStorage.setItem('urgencyBannerClosed', 'true');
  };

  // Controlla se il banner è stato chiuso in precedenza
  useEffect(() => {
    const wasClosed = localStorage.getItem('urgencyBannerClosed');
    if (wasClosed) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible || (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0)) {
    return null;
  }

  const phone = '3520030795';
  const whatsappNumber = '393520030795';
  const whatsappMessage = encodeURIComponent("🔥 OFFERTA SPECIALE: Vorrei approfittare dello sconto del 15% + sopralluogo gratuito!");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white relative overflow-hidden">
      {/* Animazione di sfondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-50 animate-pulse"></div>
      
      <div className="relative container-custom py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Messaggio principale */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <span className="text-2xl animate-bounce">🔥</span>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="font-bold text-lg">OFFERTA LIMITATA:</span>
              <span className="sm:ml-2 text-sm sm:text-base">Sconto 15% + Sopralluogo GRATUITO</span>
            </div>
          </div>

          {/* Countdown */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-center">
              <span className="text-xs uppercase tracking-wide opacity-90">Scade tra:</span>
              <div className="flex items-center gap-1 sm:gap-2 mt-1">
                <div className="bg-white text-red-600 rounded px-1 sm:px-2 py-1 min-w-[30px] sm:min-w-[40px] font-bold text-sm">
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <span className="text-sm">:</span>
                <div className="bg-white text-red-600 rounded px-1 sm:px-2 py-1 min-w-[30px] sm:min-w-[40px] font-bold text-sm">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <span className="text-sm">:</span>
                <div className="bg-white text-red-600 rounded px-1 sm:px-2 py-1 min-w-[30px] sm:min-w-[40px] font-bold text-sm">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <span className="text-sm">:</span>
                <div className="bg-white text-red-600 rounded px-1 sm:px-2 py-1 min-w-[30px] sm:min-w-[40px] font-bold text-sm">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
              </div>
              <div className="flex text-xs mt-1 gap-1 sm:gap-2 opacity-90">
                <span>GG</span>
                <span>:</span>
                <span>HH</span>
                <span>:</span>
                <span>MM</span>
                <span>:</span>
                <span>SS</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg font-bold text-xs sm:text-sm transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                💬 RICHIEDI SCONTO
              </a>
              <a
                href={`tel:${phone}`}
                className="bg-white text-red-600 hover:bg-gray-100 px-3 sm:px-4 py-2 rounded-lg font-bold text-xs sm:text-sm transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                📞 CHIAMA
              </a>
            </div>
          </div>

          {/* Pulsante chiudi */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 md:relative md:top-auto md:right-auto text-white hover:bg-red-800 rounded-full p-1 transition-colors"
            aria-label="Chiudi banner"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Effetto brillantezza */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform -skew-x-12 animate-pulse"></div>
    </div>
  );
};

export default UrgencyBanner;