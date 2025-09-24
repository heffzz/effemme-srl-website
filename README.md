# EFFEMME SRL - Sito Web Ufficiale

Sito web moderno e SEO-ottimizzato per EFFEMME SRL, azienda specializzata in termoidraulica, caldaie IMMERGAS, pompe di calore DAIKIN e climatizzatori a Ravenna.

## 🚀 Tecnologie Utilizzate

- **Next.js 14** - Framework React per produzione
- **TailwindCSS** - Framework CSS utility-first
- **Static Export** - Generazione sito statico per Netlify
- **SEO Ottimizzato** - Meta tags, OpenGraph, JSON-LD
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG 2.1 AA compliant

## 📁 Struttura del Progetto

```
├── src/
│   ├── components/          # Componenti React riutilizzabili
│   │   ├── Layout.js       # Layout principale con SEO
│   │   ├── Header.js       # Header con navigazione
│   │   └── Footer.js       # Footer con link e contatti
│   ├── pages/              # Pagine del sito
│   │   ├── index.js        # Homepage
│   │   ├── chi-siamo.js    # Chi siamo
│   │   ├── servizi.js      # Panoramica servizi
│   │   ├── contatti.js     # Contatti con form
│   │   ├── montaggio-caldaie-immergas-ravenna.js
│   │   ├── pompe-di-calore-daikin-ravenna.js
│   │   ├── riscaldamento-a-pavimento-ravenna.js
│   │   ├── montaggio-climatizzatori-ravenna.js
│   │   ├── piccole-riparazioni-manutenzione-ravenna.js
│   │   └── api/
│   │       └── contact.js  # API route per form contatti
│   └── styles/
│       └── globals.css     # Stili globali con TailwindCSS
├── public/                 # File statici
│   ├── robots.txt         # Configurazione crawler
│   ├── sitemap.xml        # Mappa del sito
│   ├── manifest.json      # PWA manifest
│   ├── og-image.svg       # Immagine OpenGraph
│   └── _redirects         # Redirect Netlify
├── scripts/               # Script di test automatici
│   ├── lighthouse-test.js # Test performance
│   ├── accessibility-test.js # Test accessibilità
│   └── validate-jsonld.js # Validazione JSON-LD
└── netlify.toml          # Configurazione Netlify
```

## 🛠️ Setup Locale

### Prerequisiti
- Node.js 18+ 
- npm 9+

### Installazione
```bash
# Clona il repository
git clone <repository-url>
cd sito-effemme

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Il sito sarà disponibile su `http://localhost:3000`

### Comandi Disponibili
```bash
npm run dev          # Server di sviluppo
npm run build        # Build di produzione
npm run export       # Export statico
npm run lint         # Linting del codice
npm run test:all     # Tutti i test automatici
npm run lighthouse   # Test performance
npm run accessibility # Test accessibilità
npm run validate-jsonld # Validazione JSON-LD
```

## 🌐 Deploy su Netlify

### Opzione 1: Deploy Automatico (Consigliato)

1. **Connetti Repository a Netlify**
   - Vai su [netlify.com](https://netlify.com)
   - Clicca "New site from Git"
   - Connetti il tuo repository GitHub/GitLab

2. **Configurazione Build**
   - Build command: `npm run build && npm run export`
   - Publish directory: `out`
   - Node version: `18`

3. **Variabili d'Ambiente**
   Aggiungi in Netlify Dashboard > Site Settings > Environment Variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://effemmesrl.com
   CONTACT_EMAIL=info@effemmesrl.com
   PHONE=+39 0544 123456
   GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### Opzione 2: Deploy Manuale

1. **Build Locale**
   ```bash
   npm run build
   npm run export
   ```

2. **Upload su Netlify**
   - Vai su [netlify.com](https://netlify.com)
   - Trascina la cartella `out` nell'area di deploy

### Configurazione Dominio

1. **DNS Settings**
   - Aggiungi record A: `185.199.108.153`
   - Aggiungi record AAAA: `2a05:d014:edb:f00::153`
   - Oppure CNAME: `effemme-srl.netlify.app`

2. **SSL Certificate**
   - Netlify fornisce automaticamente certificati SSL gratuiti
   - Forza HTTPS nelle impostazioni del sito

## 📧 Configurazione Form Contatti

Il form contatti utilizza una API route serverless. Per ricevere le email:

### Opzione 1: Netlify Forms (Semplice)
1. Aggiungi `netlify` attribute al form in `contatti.js`
2. Le submission saranno visibili nel Netlify Dashboard

### Opzione 2: Email Service (Avanzato)
1. Configura un servizio email (SendGrid, Mailgun, etc.)
2. Aggiorna `src/pages/api/contact.js` con le credenziali
3. Aggiungi le variabili d'ambiente necessarie

## 🔍 SEO e Performance

### Features SEO Implementate
- ✅ Meta tags ottimizzati per ogni pagina
- ✅ OpenGraph e Twitter Cards
- ✅ JSON-LD LocalBusiness schema
- ✅ Sitemap.xml automatico
- ✅ Robots.txt configurato
- ✅ URL SEO-friendly
- ✅ Canonical URLs
- ✅ Structured data per Google

### Performance Ottimizzazioni
- ✅ Static export per velocità massima
- ✅ Immagini ottimizzate (SVG)
- ✅ CSS e JS minificati
- ✅ Lazy loading
- ✅ Cache headers ottimizzati

## 🧪 Test Automatici

### Lighthouse Performance
```bash
npm run lighthouse
```
Target: Performance 90+, SEO 95+, Accessibility 90+

### Accessibility Testing
```bash
npm run accessibility
```
Verifica conformità WCAG 2.1 AA

### JSON-LD Validation
```bash
npm run validate-jsonld
```
Valida schema LocalBusiness

## 📋 Checklist Pre-Go-Live

### Contenuti
- [ ] Sostituire placeholder {{PHONE}} con numero reale
- [ ] Sostituire placeholder {{EMAIL}} con email reale
- [ ] Aggiungere Google Analytics ID
- [ ] Verificare tutti i testi e informazioni aziendali
- [ ] Aggiungere immagini reali (sostituire SVG placeholder)

### Configurazione
- [ ] Configurare variabili d'ambiente su Netlify
- [ ] Testare form contatti
- [ ] Verificare redirect www → non-www
- [ ] Configurare dominio personalizzato
- [ ] Attivare SSL/HTTPS

### SEO
- [ ] Verificare Google Search Console
- [ ] Inviare sitemap a Google
- [ ] Configurare Google My Business
- [ ] Verificare JSON-LD con Google Rich Results Test
- [ ] Test velocità con PageSpeed Insights

### Test Finali
- [ ] Test su dispositivi mobili
- [ ] Test su diversi browser
- [ ] Verificare tutti i link interni
- [ ] Test form contatti
- [ ] Verificare caricamento immagini

## 🆘 Troubleshooting

### Build Errors
```bash
# Pulisci cache e reinstalla
rm -rf .next out node_modules
npm install
npm run build
```

### Form Non Funziona
1. Verifica variabile `CONTACT_EMAIL` su Netlify
2. Controlla logs delle funzioni serverless
3. Testa API route: `/api/contact`

### Performance Issues
1. Esegui `npm run lighthouse` per identificare problemi
2. Ottimizza immagini se necessario
3. Verifica cache headers in `netlify.toml`

## 📞 Supporto

Per supporto tecnico o modifiche al sito:
- Documentazione Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Documentazione Netlify: [docs.netlify.com](https://docs.netlify.com)
- TailwindCSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## 📄 Licenza

Questo progetto è proprietario di EFFEMME SRL. Tutti i diritti riservati.

---

**EFFEMME SRL** - Termoidraulica e Climatizzazione Ravenna  
P.IVA: 02170530394 | Via del Fabbro, 44 - Fraz. Gambellara, 48124 Ravenna (RA)