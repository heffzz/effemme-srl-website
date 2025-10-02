const nodemailer = require('nodemailer')

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
  const contactEmail = process.env.CONTACT_EMAIL || 'info@effemmesrl.com'

  try {
    // Configurazione del transporter SMTP
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true per 465, false per altri ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    // Contenuto dell'email
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

    const htmlContent = `
    <h2>Nuova richiesta di contatto</h2>
    <p><strong>Da:</strong> ${nome} ${cognome}</p>
    
    <h3>Dettagli:</h3>
    <ul>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Telefono:</strong> ${telefono}</li>
      <li><strong>Servizio:</strong> ${servizio || 'Non specificato'}</li>
      <li><strong>Data preferita:</strong> ${dataPreferita || 'Non specificata'}</li>
      <li><strong>Orario preferito:</strong> ${orarioPreferito || 'Non specificato'}</li>
    </ul>
    
    <h3>Messaggio:</h3>
    <p>${messaggio || 'Nessun messaggio aggiuntivo'}</p>
    
    <hr>
    <p><small>Inviato il: ${new Date().toLocaleString('it-IT')}</small></p>
    `

    // Verifica se le credenziali SMTP sono configurate
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log('SMTP credentials not configured. Logging form data:', {
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
        note: 'Email logged - SMTP credentials needed for actual sending'
      })
    }

    // Invio dell'email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'info@effemmesrl.com',
      to: contactEmail,
      subject: `Nuova richiesta da ${nome} ${cognome} - EFFEMME SRL`,
      text: emailContent,
      html: htmlContent
    })

    console.log('Email sent successfully to:', contactEmail)
    return res.status(200).json({ message: 'Richiesta inviata con successo' })
    
  } catch (error) {
    console.error('Error processing contact form:', error)
    return res.status(500).json({ message: 'Errore interno del server' })
  }
}