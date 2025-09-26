import React, { useState, useEffect } from 'react';
import { Calculator, Euro, Zap, Info, CheckCircle, ExternalLink } from 'lucide-react';

const CalcolatoreContoTermico = () => {
  const [formData, setFormData] = useState({
    costoIntervento: '',
    tipoIntervento: 'pompa-calore', // pompa-calore, caldaia-biomassa, solare-termico
    zonaClimatica: 'E', // A, B, C, D, E, F
    potenzaTermica: '', // kW
    cop: '', // COP per pompe di calore
    tipoPompa: 'aria-acqua', // aria-acqua, acqua-acqua, terra-acqua
    includeInstallazione: true,
    includeProgettazione: true
  });

  const [risultati, setRisultati] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  // Parametri ufficiali Conto Termico 2.0/3.0 - GSE
  const parametriContoTermico = {
    percentualeMax: {
      'pompa-calore': 0.65,
      'caldaia-biomassa': 0.65,
      'solare-termico': 0.65
    },
    // Coefficienti Ci ufficiali GSE (€/kWh) - Tabella 7 DM 16/02/2016
    ci: {
      'aria-acqua': 0.11,      // Pompe di calore aria/acqua ≤35kW
      'acqua-acqua': 0.16,     // Pompe di calore acqua/acqua ≤35kW  
      'terra-acqua': 0.16      // Pompe di calore salamoia/acqua ≤35kW
    },
    // Coefficienti QUF per zone climatiche (kWh/anno) - Formula: QUF × Potenza
    quf: {
      'A': 1000, 'B': 1200, 'C': 1400, 'D': 1600, 'E': 1800, 'F': 2000
    },
    sogliaPagamentoUnico: 5000,
    anniRate: 5,
    copMinimo: 3.0,
    potenzaMinima: 5, // kW
    potenzaMassima: 35 // kW per accesso diretto semplificato
  };

  const calcolaContoTermico = () => {
    const costo = parseFloat(formData.costoIntervento);
    const potenza = parseFloat(formData.potenzaTermica);
    const cop = parseFloat(formData.cop);

    if (!costo || costo <= 0) return;

    let rimborso = 0;
    let dettagliCalcolo = '';
    let anniIncentivo = 5;
    let modalitaPagamento = '';

    if (formData.tipoIntervento === 'pompa-calore') {
      if (!potenza || !cop || potenza < parametriContoTermico.potenzaMinima || 
          potenza > parametriContoTermico.potenzaMassima || cop < parametriContoTermico.copMinimo) {
        setRisultati({
          errore: `Parametri non validi. Potenza: ${parametriContoTermico.potenzaMinima}-${parametriContoTermico.potenzaMassima} kW, COP minimo: ${parametriContoTermico.copMinimo}`
        });
        return;
      }

      // Formula ufficiale GSE: Ia = Qu × Ci × anni
      const qu = parametriContoTermico.quf[formData.zonaClimatica] * potenza; // kWh/anno
      const ci = parametriContoTermico.ci[formData.tipoPompa]; // €/kWh
      rimborso = qu * ci * anniIncentivo; // Incentivo totale per 5 anni

      // Applicazione del limite massimo (65% del costo)
      const limiteMax = costo * parametriContoTermico.percentualeMax['pompa-calore'];
      const rimborsoFinale = Math.min(rimborso, limiteMax);

      dettagliCalcolo = `
        Formula GSE: Ia = Qu × Ci × anni
        Qu = ${parametriContoTermico.quf[formData.zonaClimatica]} kWh/anno × ${potenza} kW = ${qu.toFixed(0)} kWh/anno
        Ci = ${ci} €/kWh (${formData.tipoPompa})
        Incentivo = ${qu.toFixed(0)} × ${ci} × ${anniIncentivo} anni = ${rimborso.toFixed(0)} €
        Limite 65% del costo: ${limiteMax.toFixed(0)} €
        Incentivo finale: ${rimborsoFinale.toFixed(0)} €
        COP ${cop} (verificato ≥ ${parametriContoTermico.copMinimo})
      `;
      
      rimborso = rimborsoFinale;

    } else if (formData.tipoIntervento === 'caldaia-biomassa') {
      // Stima per caldaie a biomassa (formula semplificata)
      rimborso = Math.min(costo * 0.50, costo * parametriContoTermico.percentualeMax['caldaia-biomassa']);
      dettagliCalcolo = `Stima per caldaia a biomassa: 50% del costo, max 65%`;

    } else if (formData.tipoIntervento === 'solare-termico') {
      // Stima per solare termico
      rimborso = Math.min(costo * 0.55, costo * parametriContoTermico.percentualeMax['solare-termico']);
      dettagliCalcolo = `Stima per solare termico: 55% del costo, max 65%`;
    }

    // Modalità di pagamento
    modalitaPagamento = rimborso <= parametriContoTermico.sogliaPagamentoUnico ?
      'Unica soluzione (entro 60 giorni)' : 
      `${parametriContoTermico.anniRate} rate annuali`;

    const costoFinale = costo - rimborso;
    const percentualeRimborso = (rimborso / costo) * 100;

    setRisultati({
      costoIntervento: costo,
      rimborso: rimborso,
      percentuale: percentualeRimborso,
      costoFinale: costoFinale,
      modalitaPagamento: modalitaPagamento,
      anniIncentivo: anniIncentivo,
      dettagliCalcolo: dettagliCalcolo,
      parametriUsati: {
        zona: formData.zonaClimatica,
        potenza: potenza,
        cop: cop,
        tipoPompa: formData.tipoPompa
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  useEffect(() => {
    if (formData.costoIntervento) {
      calcolaContoTermico();
    }
  }, [formData]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <Calculator className="w-8 h-8 text-green-600 mr-3" />
        <h2 className="text-2xl font-bold text-secondary-700">
          Calcolatore Conto Termico 3.0
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Costo totale dell'intervento (€)
            </label>
            <input
              type="number"
              name="costoIntervento"
              value={formData.costoIntervento}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="es. 15000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Tipo di intervento
            </label>
            <select
              name="tipoIntervento"
              value={formData.tipoIntervento}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="pompa-calore">Pompa di Calore</option>
              <option value="caldaia-biomassa">Caldaia a Biomassa</option>
              <option value="solare-termico">Solare Termico</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Zona climatica del comune
            </label>
            <select
              name="zonaClimatica"
              value={formData.zonaClimatica}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="A">Zona A (Sud Italia, Isole)</option>
              <option value="B">Zona B (Sud Italia)</option>
              <option value="C">Zona C (Centro-Sud)</option>
              <option value="D">Zona D (Centro Italia)</option>
              <option value="E">Zona E (Nord Italia, Ravenna)</option>
              <option value="F">Zona F (Montagna)</option>
            </select>
          </div>

          {formData.tipoIntervento === 'pompa-calore' && (
            <>
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Tipo di pompa di calore
                </label>
                <select
                  name="tipoPompa"
                  value={formData.tipoPompa}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="aria-acqua">Aria-Acqua</option>
                  <option value="acqua-acqua">Acqua-Acqua (Geotermica)</option>
                  <option value="terra-acqua">Terra-Acqua (Geotermica)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Potenza termica nominale (kW)
                </label>
                <input
                  type="number"
                  name="potenzaTermica"
                  value={formData.potenzaTermica}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="es. 12"
                  min="5"
                  max="2000"
                  step="0.1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  COP (Coefficiente di Prestazione)
                </label>
                <input
                  type="number"
                  name="cop"
                  value={formData.cop}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="es. 4.2"
                  min="3.0"
                  step="0.1"
                />
              </div>
            </>
          )}

          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-start">
              <Info className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">Nota importante:</p>
                <p>Questo è un calcolo indicativo. Per la domanda ufficiale utilizza il portale GSE.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Risultati */}
        <div className="space-y-6">
          {risultati && !risultati.errore && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Risultati Conto Termico 3.0
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-green-700">Costo intervento:</span>
                  <span className="font-bold">€{risultati.costoIntervento.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-green-700">Rimborso GSE:</span>
                  <span className="font-bold text-green-600">€{risultati.rimborso.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-green-700">Percentuale:</span>
                  <span className="font-bold">{risultati.percentuale.toFixed(1)}%</span>
                </div>
                
                <div className="flex justify-between border-t pt-2">
                  <span className="text-green-700">Costo finale:</span>
                  <span className="font-bold text-lg">€{risultati.costoFinale.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-green-700">Modalità pagamento:</span>
                  <span className="font-medium">{risultati.modalitaPagamento}</span>
                </div>
              </div>

              {risultati.dettagliCalcolo && (
                <div className="mt-4 p-3 bg-white rounded border">
                  <button
                    onClick={() => setShowInfo(!showInfo)}
                    className="text-sm text-green-600 hover:text-green-700 font-medium"
                  >
                    {showInfo ? 'Nascondi' : 'Mostra'} dettagli calcolo
                  </button>
                  {showInfo && (
                    <pre className="text-xs text-gray-600 mt-2 whitespace-pre-wrap">
                      {risultati.dettagliCalcolo}
                    </pre>
                  )}
                </div>
              )}
            </div>
          )}

          {risultati && risultati.errore && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-800 mb-2">Errore</h3>
              <p className="text-red-700">{risultati.errore}</p>
            </div>
          )}

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">
              🌐 Domanda Ufficiale
            </h3>
            <p className="text-yellow-700 mb-4">
              Per presentare la domanda ufficiale e ottenere calcoli certificati, 
              utilizza il portale GSE.
            </p>
            <a
              href="https://www.gse.it/servizi-per-te/efficienza-energetica/conto-termico"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-all"
            >
              Vai al Portale GSE
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalcolatoreContoTermico;