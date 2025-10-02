import { useState } from 'react'
import Layout from '../components/Layout'

export default function Contatti() {
  const phone = '3520030795'
  const email = process.env.CONTACT_EMAIL || 'info@effemmesrl.com'
  const whatsappNumber = '393520030795' // Formato internazionale per WhatsApp
  
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    servizio: '',
    messaggio: '',
    dataPreferita: '',
    orarioPreferito: '',
    privacy: false
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          nome: '',
          cognome: '',
          email: '',
          telefono: '',
          servizio: '',
          messaggio: '',
          dataPreferita: '',
          orarioPreferito: '',
          privacy: false
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    }
    
    setIsSubmitting(false)
  }

  const servizi = [
    'Montaggio Caldaie IMMERGAS',
    'Climatizzazione e Pompe di Calore',
    'Riscaldamento a Pavimento',
    'Riparazioni e Manutenzione',
    'Assistenza Tecnica',
    'Altro'
  ]

  const orari = [
    '08:00 - 10:00',
    '10:00 - 12:00',
    '12:00 - 14:00',
    '14:00 - 16:00',
    '16:00 - 18:00',
    'Indifferente'
  ]

  return (
    <Layout
      title="Contatti EFFEMME SRL | Preventivi Gratuiti Termoidraulica Ravenna"
      description="Contatta EFFEMME SRL per preventivi gratuiti: caldaie, climatizzatori, pompe di calore a Ravenna. Form online, telefono e WhatsApp. Risposta entro 24h!"
      keywords="contatti effemme srl, preventivo gratuito ravenna, termoidraulica ravenna contatti, caldaie climatizzatori preventivo"
      canonical="/contatti"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 text-secondary-700 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-secondary-700 mb-6">
              Contatta EFFEMME SRL
            </h1>
            <p className="text-xl text-secondary-700 leading-relaxed">
              Richiedi un preventivo gratuito o contattaci per qualsiasi esigenza termoidraulica a Ravenna. 
              Siamo sempre pronti ad aiutarti con professionalità e competenza.
            </p>
          </div>
        </div>
      </section>

      {/* Informazioni di Contatto */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary-700">Come Contattarci</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary-700">Telefono</h3>
              <a 
                href={`tel:${phone}`}
                className="text-primary-600 font-medium text-lg hover:text-primary-700 transition-colors"
              >
                {phone}
              </a>
              <p className="text-secondary-700 text-sm mt-2">
                Lun-Ven: 8:00-18:00<br />
                Sab: 8:00-12:00<br />
                Emergenze: Sempre disponibili
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary-700">Email</h3>
              <a 
                href={`mailto:${email}`}
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                {email}
              </a>
              <p className="text-secondary-700 text-sm mt-2">
                Risposta entro 24 ore<br />
                Preventivi gratuiti<br />
                Consulenze tecniche
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary-700">Sede</h3>
              <address className="text-secondary-700 not-italic">
                VIA DEL FABBRO, 44 - FRAZ. GAMBELLARA<br />
                48124 RAVENNA (RA)<br />
                P.IVA: 02170530394
              </address>
              <p className="text-secondary-700 text-sm mt-2">
                Lun-Ven: 8:00-18:00 | Sab: 8:00-12:00
              </p>
            </div>
          </div>

          {/* Contatti Rapidi */}
          <div className="bg-primary-50 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-primary-700">Contatti Rapidi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a 
                href={`tel:${phone}`}
                className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <div className="bg-primary-100 text-primary-700 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-secondary-700">Chiama Ora</div>
                  <div className="text-primary-600 text-sm">Risposta immediata</div>
                </div>
              </a>
              
              <a 
                href={`https://wa.me/${whatsappNumber}?text=Ciao%20EFFEMME%20SRL%2C%20vorrei%20informazioni%20sui%20vostri%20servizi`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border-l-4 border-green-500"
              >
                <div className="bg-green-100 text-green-700 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-green-700">Scrivici su WhatsApp</div>
                  <div className="text-green-600 text-sm">Risposta immediata • {phone}</div>
                </div>
              </a>
              
              <a 
                href={`mailto:${email}`}
                className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <div className="bg-primary-100 text-primary-700 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-secondary-700">Invia Email</div>
                  <div className="text-primary-600 text-sm">Preventivo dettagliato</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form di Contatto */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-lg mb-6">Richiedi un Preventivo Gratuito</h2>
              <p className="text-body mb-8">
                Compila il form per ricevere un preventivo personalizzato. Ti ricontatteremo entro 24 ore 
                per fissare un sopralluogo gratuito e fornirti la migliore soluzione per le tue esigenze.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 p-2 rounded-lg mr-4 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-700 mb-1">Sopralluogo Gratuito</h3>
                    <p className="text-secondary-700 text-sm">
                      Veniamo a casa tua per valutare le tue esigenze senza alcun costo
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 p-2 rounded-lg mr-4 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-700 mb-1">Preventivo Dettagliato</h3>
                    <p className="text-secondary-700 text-sm">
                      Ricevi un preventivo completo e trasparente, senza sorprese
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 p-2 rounded-lg mr-4 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-700 mb-1">Consulenza Professionale</h3>
                    <p className="text-secondary-700 text-sm">
                      Ti consigliamo la soluzione migliore per le tue esigenze e budget
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-secondary-700 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      autoComplete="given-name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label htmlFor="cognome" className="block text-sm font-medium text-secondary-700 mb-2">
                      Cognome *
                    </label>
                    <input
                      type="text"
                      id="cognome"
                      name="cognome"
                      required
                      value={formData.cognome}
                      onChange={handleChange}
                      autoComplete="family-name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 min-h-[44px]"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      inputMode="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-secondary-700 mb-2">
                      Telefono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="es. 0544 123456"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 min-h-[44px]"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="servizio" className="block text-sm font-medium text-secondary-700 mb-2">
                    Servizio di Interesse
                  </label>
                  <select
                    id="servizio"
                    name="servizio"
                    value={formData.servizio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 min-h-[44px]"
                  >
                    <option value="">Seleziona un servizio</option>
                    {servizi.map((servizio, index) => (
                      <option key={index} value={servizio}>{servizio}</option>
                    ))}
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="dataPreferita" className="block text-sm font-medium text-secondary-700 mb-2">
                      Data Preferita per Sopralluogo
                    </label>
                    <input
                      type="date"
                      id="dataPreferita"
                      name="dataPreferita"
                      value={formData.dataPreferita}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="orarioPreferito" className="block text-sm font-medium text-secondary-700 mb-2">
                      Orario Preferito
                    </label>
                    <select
                      id="orarioPreferito"
                      name="orarioPreferito"
                      value={formData.orarioPreferito}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Seleziona orario</option>
                      {orari.map((orario, index) => (
                        <option key={index} value={orario}>{orario}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="messaggio" className="block text-sm font-medium text-secondary-700 mb-2">
                    Messaggio
                  </label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    rows={4}
                    value={formData.messaggio}
                    onChange={handleChange}
                    placeholder="Descrivi le tue esigenze o fai domande specifiche..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="privacy" className="text-sm text-secondary-700">
                    Accetto il trattamento dei dati personali secondo la normativa privacy vigente. 
                    I dati saranno utilizzati esclusivamente per rispondere alla richiesta. *
                  </label>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex">
                      <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <p className="text-green-700 text-sm">
                        Messaggio inviato con successo! Ti ricontatteremo entro 24 ore.
                      </p>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex">
                      <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <p className="text-red-700 text-sm">
                        Errore nell'invio del messaggio. Riprova o contattaci telefonicamente.
                      </p>
                    </div>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Invio in corso...' : 'Invia Richiesta'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mappa */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6">Dove Siamo</h2>
            <p className="text-body max-w-3xl mx-auto">
              La nostra sede si trova a Ravenna, in Via del Fabbro 44 - Frazione Gambellara. 
              Serviamo tutta Ravenna e provincia con interventi rapidi e professionali.
            </p>
          </div>
          
          <div className="bg-primary-100 rounded-2xl overflow-hidden h-96 mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.123456789!2d12.1985!3d44.4056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI0JzIwLjIiTiAxMsKwMTEnNTQuNiJF!5e0!3m2!1sit!2sit!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa EFFEMME SRL - Via del Fabbro 44, Ravenna"
            ></iframe>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-secondary-900 mb-2">Zona di Servizio</h3>
              <p className="text-secondary-600 text-sm">
                Ravenna e tutta la provincia, raggio di 50 km dalla sede
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-secondary-900 mb-2">Tempi di Arrivo</h3>
              <p className="text-secondary-600 text-sm">
                Ravenna centro: 15 min<br />
                Provincia: 30-45 min
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-secondary-900 mb-2">Parcheggio</h3>
              <p className="text-secondary-600 text-sm">
                Ampio parcheggio gratuito disponibile presso la sede
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-secondary-900 mb-2">Mezzi Pubblici</h3>
              <p className="text-secondary-600 text-sm">
                Fermata autobus a 200m, linea urbana Ravenna
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Finale */}
      <section className="bg-primary-50 text-secondary-700 section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-secondary-900 mb-6">
            Non Aspettare, Contattaci Subito!
          </h2>
          <p className="text-xl text-secondary-700 mb-8 max-w-2xl mx-auto">
            EFFEMME SRL è sempre pronta ad aiutarti. Che tu abbia bisogno di un preventivo, 
            di un intervento urgente o di una semplice consulenza, siamo qui per te.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${phone}`}
              className="btn-secondary bg-white text-primary-600 hover:bg-gray-50 border border-primary-600"
            >
              📞 Chiama Ora
            </a>
            <a 
              href={`https://wa.me/${phone?.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}