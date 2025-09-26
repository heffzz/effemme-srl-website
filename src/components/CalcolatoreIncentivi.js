import React, { useState, useEffect } from 'react';
import { Calculator, Euro, Home, Zap, Info, CheckCircle } from 'lucide-react';

const CalcolatoreIncentivi = () => {
  const [formData, setFormData] = useState({
    costoIntervento: '',
    tipoImmobile: 'prima-casa', // prima-casa, seconda-casa
    tipoIntervento: 'pompa-calore' // pompa-calore, caldaia-biomassa, solare-termico
  });

  const [risultati, setRisultati] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  // Parametri ufficiali 2025 - Agenzia delle Entrate
  const parametriIncentivi = {
    ecobonus: {
      primaCasa: 0.50, // 50% abitazione principale
      secondaCasa: 0.36, // 36% altre abitazioni
      massimaleDetrazione: 30000, // €30.000 max detrazione
      massimaleSpesa: 60000, // €60.000 max spesa
      anni: 10
    },
    bonusRistrutturazioni: {
      primaCasa: 0.50, // 50% abitazione principale
      secondaCasa: 0.36, // 36% altre abitazioni  
      massimaleSpesa: 96000, // €96.000 max spesa
      anni: 10
    },
    contoTermico: {
      percentualeIndicativa: 0.40, // indicativa 40-65%
      sogliaPagamentoUnico: 5000, // sotto €5.000 in unica soluzione
      anniRate: 5 // 2-5 anni per importi superiori
    }
  };

  const calcolaIncentivi = () => {
    const costo = parseFloat(formData.costoIntervento);
    if (!costo || costo <= 0) return;

    const isPrimaCasa = formData.tipoImmobile === 'prima-casa';
    
    // Calcolo Ecobonus
    const percentualeEcobonus = isPrimaCasa ? 
      parametriIncentivi.ecobonus.primaCasa : 
      parametriIncentivi.ecobonus.secondaCasa;
    
    const costoEligibileEcobonus = Math.min(costo, parametriIncentivi.ecobonus.massimaleSpesa);
    const detrazioneEcobonus = Math.min(
      costoEligibileEcobonus * percentualeEcobonus,
      parametriIncentivi.ecobonus.massimaleDetrazione
    );
    const rataAnnualeEcobonus = detrazioneEcobonus / parametriIncentivi.ecobonus.anni;

    // Calcolo Bonus Ristrutturazioni
    const percentualeBonusRistr = isPrimaCasa ? 
      parametriIncentivi.bonusRistrutturazioni.primaCasa : 
      parametriIncentivi.bonusRistrutturazioni.secondaCasa;
    
    const costoEligibileBonusRistr = Math.min(costo, parametriIncentivi.bonusRistrutturazioni.massimaleSpesa);
    const detrazioneBonusRistr = costoEligibileBonusRistr * percentualeBonusRistr;
    const rataAnnualeBonusRistr = detrazioneBonusRistr / parametriIncentivi.bonusRistrutturazioni.anni;

    // Calcolo Conto Termico (stima indicativa)
    let rimborsoContoTermico = 0;
    let modalitaPagamentoContoTermico = '';
    
    if (['pompa-calore', 'caldaia-biomassa', 'solare-termico'].includes(formData.tipoIntervento)) {
      // Stima indicativa basata sul 40% del costo
      rimborsoContoTermico = costo * parametriIncentivi.contoTermico.percentualeIndicativa;
      
      modalitaPagamentoContoTermico = rimborsoContoTermico <= parametriIncentivi.contoTermico.sogliaPagamentoUnico ?
        'Unica soluzione' : 
        `${parametriIncentivi.contoTermico.anniRate} rate annuali`;
    }

    // Calcolo costo finale
    const costoFinaleEcobonus = costo - detrazioneEcobonus;
    const costoFinaleBonusRistr = costo - detrazioneBonusRistr;
    const costoFinaleContoTermico = costo - rimborsoContoTermico;

    setRisultati({
      costoIntervento: costo,
      ecobonus: {
        detrazione: detrazioneEcobonus,
        percentuale: percentualeEcobonus * 100,
        rataAnnuale: rataAnnualeEcobonus,
        costoFinale: costoFinaleEcobonus,
        anni: parametriIncentivi.ecobonus.anni
      },
      bonusRistrutturazioni: {
        detrazione: detrazioneBonusRistr,
        percentuale: percentualeBonusRistr * 100,
        rataAnnuale: rataAnnualeBonusRistr,
        costoFinale: costoFinaleBonusRistr,
        anni: parametriIncentivi.bonusRistrutturazioni.anni
      },
      contoTermico: {
        rimborso: rimborsoContoTermico,
        percentuale: rimborsoContoTermico > 0 ? ((rimborsoContoTermico / costo) * 100) : 0,
        costoFinale: costoFinaleContoTermico,
        modalitaPagamento: modalitaPagamentoContoTermico,
        disponibile: ['pompa-calore', 'caldaia-biomassa', 'solare-termico'].includes(formData.tipoIntervento)
      }
    });
  };

  useEffect(() => {
    if (formData.costoIntervento) {
      calcolaIncentivi();
    }
  }, [formData]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Calculator className="h-8 w-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">
            Calcolatore Incentivi 2025
          </h2>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Calcola quanto puoi risparmiare con gli incentivi statali 2025. 
          Dati ufficiali aggiornati con Ecobonus, Bonus Ristrutturazioni e Conto Termico 3.0.
        </p>
      </div>

      {/* Form */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center">
            <Home className="h-5 w-5 mr-2 text-blue-600" />
            Dati del tuo intervento
          </h3>

          {/* Costo Intervento */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Costo totale dell'intervento (€)
            </label>
            <div className="relative">
              <Euro className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="number"
                value={formData.costoIntervento}
                onChange={(e) => handleInputChange('costoIntervento', e.target.value)}
                placeholder="Es. 12000"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Tipo Immobile */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo di immobile
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleInputChange('tipoImmobile', 'prima-casa')}
                className={`p-3 rounded-lg border-2 transition-all ${
                  formData.tipoImmobile === 'prima-casa'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Home className="h-5 w-5 mx-auto mb-1" />
                <div className="text-sm font-medium">Prima Casa</div>
                <div className="text-xs text-gray-500">Incentivi maggiori</div>
              </button>
              <button
                onClick={() => handleInputChange('tipoImmobile', 'seconda-casa')}
                className={`p-3 rounded-lg border-2 transition-all ${
                  formData.tipoImmobile === 'seconda-casa'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Home className="h-5 w-5 mx-auto mb-1" />
                <div className="text-sm font-medium">Seconda Casa</div>
                <div className="text-xs text-gray-500">Incentivi ridotti</div>
              </button>
            </div>
          </div>

          {/* Tipo Intervento */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo di intervento
            </label>
            <select
              value={formData.tipoIntervento}
              onChange={(e) => handleInputChange('tipoIntervento', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="pompa-calore">Pompa di Calore</option>
              <option value="caldaia-biomassa">Caldaia a Biomassa</option>
              <option value="solare-termico">Solare Termico</option>
            </select>
          </div>



          {/* Info Button */}
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="flex items-center text-blue-600 hover:text-blue-700 text-sm"
          >
            <Info className="h-4 w-4 mr-1" />
            Informazioni sui calcoli
          </button>

          {showInfo && (
            <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800">
              <h4 className="font-semibold mb-2">Come vengono calcolati gli incentivi:</h4>
              <ul className="space-y-1 text-xs">
                <li>• <strong>Ecobonus:</strong> 50% prima casa, 36% seconde case (max €30.000 detrazione)</li>
                <li>• <strong>Bonus Ristrutturazioni:</strong> 50% prima casa, 36% seconde case (max €96.000 spesa)</li>
                <li>• <strong>Conto Termico 3.0:</strong> Stima indicativa del 40% del costo. Per il calcolo preciso visita il portale GSE</li>
                <li>• Le detrazioni fiscali si recuperano in 10 anni, il Conto Termico è un rimborso diretto</li>
                <li>• I calcoli sono basati sui parametri ufficiali 2025</li>
              </ul>
            </div>
          )}
        </div>

        {/* Risultati */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center">
            <Zap className="h-5 w-5 mr-2 text-green-600" />
            I tuoi risparmi
          </h3>

          {risultati ? (
            <div className="space-y-4">
              {/* Ecobonus */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-blue-900">Ecobonus 2025</h4>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                    {risultati.ecobonus.percentuale}%
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Detrazione totale:</span>
                    <span className="font-semibold text-green-600">
                      {formatCurrency(risultati.ecobonus.detrazione)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rata annuale (10 anni):</span>
                    <span>{formatCurrency(risultati.ecobonus.rataAnnuale)}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Costo finale:</span>
                    <span>{formatCurrency(risultati.ecobonus.costoFinale)}</span>
                  </div>
                </div>
              </div>

              {/* Bonus Ristrutturazioni */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-green-900">Bonus Ristrutturazioni</h4>
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                    {risultati.bonusRistrutturazioni.percentuale}%
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Detrazione totale:</span>
                    <span className="font-semibold text-green-600">
                      {formatCurrency(risultati.bonusRistrutturazioni.detrazione)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rata annuale (10 anni):</span>
                    <span>{formatCurrency(risultati.bonusRistrutturazioni.rataAnnuale)}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Costo finale:</span>
                    <span>{formatCurrency(risultati.bonusRistrutturazioni.costoFinale)}</span>
                  </div>
                </div>
              </div>

              {/* Conto Termico */}
              {risultati.contoTermico.disponibile && (
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-orange-900">Conto Termico 3.0</h4>
                    <span className="bg-orange-600 text-white px-2 py-1 rounded text-sm">
                      {risultati.contoTermico.percentuale}%
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Rimborso diretto:</span>
                      <span className="font-semibold text-green-600">
                        {formatCurrency(risultati.contoTermico.rimborso)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Modalità pagamento:</span>
                      <span>{risultati.contoTermico.modalitaPagamento}</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Costo finale:</span>
                      <span>{formatCurrency(risultati.contoTermico.costoFinale)}</span>
                    </div>
                  </div>
                  <div className="mt-2 p-2 bg-orange-200 rounded text-xs text-orange-800">
                    <CheckCircle className="h-3 w-3 inline mr-1" />
                    Rimborso diretto sul conto corrente (non detrazione fiscale)
                  </div>
                  <div className="mt-2 p-2 bg-orange-100 rounded text-xs text-orange-700">
                    <strong>Nota:</strong> Questa è una stima indicativa. Per il calcolo preciso e la domanda ufficiale, 
                    <a 
                      href="https://www.gse.it/servizi-per-te/efficienza-energetica/conto-termico" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-orange-800 underline ml-1 hover:text-orange-900"
                    >
                      visita il portale GSE
                    </a>
                  </div>
                </div>
              )}

              {/* Confronto */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Confronto incentivi</h4>
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span>Costo originale:</span>
                    <span className="font-semibold">{formatCurrency(risultati.costoIntervento)}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between text-blue-700">
                      <span>Con Ecobonus:</span>
                      <span className="font-semibold">{formatCurrency(risultati.ecobonus.costoFinale)}</span>
                    </div>
                    <div className="flex justify-between text-green-700">
                      <span>Con Bonus Ristrutturazioni:</span>
                      <span className="font-semibold">{formatCurrency(risultati.bonusRistrutturazioni.costoFinale)}</span>
                    </div>
                    {risultati.contoTermico.disponibile && (
                      <div className="flex justify-between text-orange-700">
                        <span>Con Conto Termico:</span>
                        <span className="font-semibold">{formatCurrency(risultati.contoTermico.costoFinale)}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Calculator className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>Inserisci il costo dell'intervento per vedere i tuoi risparmi</p>
            </div>
          )}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div className="flex items-start">
          <Info className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-yellow-800">
            <p className="font-semibold mb-1">Importante:</p>
            <p>
              I calcoli sono indicativi e basati sui parametri ufficiali 2025. 
              Gli incentivi non sono cumulabili tra loro. Per informazioni precise 
              e personalizzate, contatta i nostri esperti per una consulenza gratuita.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalcolatoreIncentivi;