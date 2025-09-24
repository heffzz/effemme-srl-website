export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { nome, cognome, email, telefono, servizio, messaggio, dataPreferita, orarioPreferito } = req.body

  // Validazione base
  if (!nome || !cognome || !email || !telefono) {
    return res.status(400).json({ message: 'Campi obbligatori mancanti' })
  }

  // Email di destinazione (da variabile d'ambiente)
  const contactEmail = process.env.CONTACT_EMAIL || '{{EMAIL}}'
  
  // Se l'email è ancora un placeholder, restituisci un messaggio di configurazione
  if (contactEmail === '{{EMAIL}}') {
    console.log('Form submission received but CONTACT_EMAIL not configured:', {
      nome,
      cognome,
      email,
      telefono,
      servizio,
      messaggio,
      dataPreferita,
      orarioPreferito,
      timestamp: new Date().toISOString()
    })
    
    return res.status(200).json({ 
      message: 'Richiesta ricevuta. Ti ricontatteremo al più presto.',
      note: 'CONTACT_EMAIL not configured - check server logs for form data'
    })
  }

  try {
    // Qui andrà l'integrazione con il servizio email (Nodemailer, SendGrid, etc.)
    // Per ora logghiamo i dati e restituiamo successo
    
    const emailContent = `
Nuova richiesta di contatto da ${nome} ${cognome}

Dettagli:
- Email: ${email}
- Telefono: ${telefono}
- Servizio: ${servizio || 'Non specificato'}
- Data preferita: ${dataPreferita || 'Non specificata'}
- Orario preferito: ${orarioPreferito || 'Non specificato'}

Messaggio:
${messaggio || 'Nessun messaggio aggiuntivo'}

Inviato il: ${new Date().toLocaleString('it-IT')}
    `

    console.log('New contact form submission:', emailContent)

    // TODO: Implementare invio email reale
    // Esempio con Nodemailer:
    /*
    const nodemailer = require('nodemailer')
    
    const transporter = nodemailer.createTransporter({
      // Configurazione SMTP
    })
    
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: contactEmail,
      subject: `Nuova richiesta da ${nome} ${cognome} - EFFEMME SRL`,
      text: emailContent
    })
    */

    return res.status(200).json({ message: 'Richiesta inviata con successo' })
    
  } catch (error) {
    console.error('Error processing contact form:', error)
    return res.status(500).json({ message: 'Errore interno del server' })
  }
}