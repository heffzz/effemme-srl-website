# 🚀 Setup Netlify per EFFEMME SRL

## 📧 Configurazione Variabili d'Ambiente

### 1. Accedi al Dashboard Netlify
- Vai su [netlify.com](https://netlify.com)
- Seleziona il tuo sito

### 2. Configura le Variabili
**Site Settings → Environment Variables → Add Variable**

Aggiungi una per una queste variabili:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=luca6854@gmail.com
SMTP_PASS=jccmjnjsnfztdfuv
SMTP_FROM=luca6854@gmail.com
CONTACT_EMAIL=info@effemmesrl.com
```

### 3. Deploy Settings
**Build & Deploy → Build Settings**

- **Build Command**: `npm run build`
- **Publish Directory**: `.next`
- **Framework Preset**: Next.js

### 4. Redeploy
Dopo aver aggiunto le variabili:
- **Deploys → Trigger Deploy → Deploy Site**

## ✅ Verifica Funzionamento

1. **Testa il form** sul sito live
2. **Controlla** che le email arrivino a `info@effemmesrl.com`
3. **Verifica** il formato HTML dell'email

## 🔒 Sicurezza

- ✅ Le credenziali sono protette da `.gitignore`
- ✅ Solo tu puoi vedere le variabili d'ambiente su Netlify
- ✅ La password è una App Password Gmail (non la password principale)

## 📞 Supporto

Se hai problemi:
1. Controlla i **Function Logs** su Netlify
2. Verifica che tutte le variabili siano impostate
3. Testa prima in locale con `npm run dev`