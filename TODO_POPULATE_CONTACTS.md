# TODO: Popolare Contatti Reali

Prima del go-live, è necessario sostituire i placeholder con i dati reali di EFFEMME SRL.

## 📞 Placeholder da Sostituire

### 1. Numero di Telefono
**Placeholder:** `{{PHONE}}`  
**Sostituire con:** Il numero di telefono reale di EFFEMME SRL

**File da modificare:**
- `src/components/Layout.js` (linea ~45)
- `src/components/Header.js` (linea ~8)
- `src/components/Footer.js` (linea ~4)
- `src/pages/index.js` (linea ~6)
- `src/pages/chi-siamo.js` (linea ~6)
- `src/pages/servizi.js` (linea ~6)
- `src/pages/contatti.js` (linea ~6)
- Tutte le pagine servizi (linea ~6 in ciascuna)
- `public/og-image.svg` (linea ~35)

### 2. Email di Contatto
**Email configurata:** `info@effemmesrl.com`  
**Sostituire con:** L'email aziendale di EFFEMME SRL

**File da modificare:**
- `src/components/Layout.js` (linea ~46)
- `src/components/Header.js` (linea ~9)
- `src/components/Footer.js` (linea ~5)
- `src/pages/contatti.js` (linea ~7)
- `src/pages/api/contact.js` (linea ~12)

### 3. Google Analytics ID
**Placeholder:** `{{GA_MEASUREMENT_ID}}`  
**Sostituire con:** L'ID di Google Analytics (formato: G-XXXXXXXXXX)

**File da modificare:**
- `src/components/Layout.js` (linea ~47)

## 🔧 Come Sostituire

### Opzione 1: Modifica Diretta dei File
1. Apri ogni file elencato sopra
2. Cerca il placeholder (es. `{{PHONE}}`)
3. Sostituisci con il valore reale
4. Salva il file

### Opzione 2: Ricerca e Sostituzione Globale
```bash
# Sostituisci numero di telefono (esempio)
find . -name "*.js" -o -name "*.svg" | xargs sed -i 's/{{PHONE}}/+39 0544 123456/g'

# Sostituisci email (esempio)
find . -name "*.js" | xargs sed -i 's/{{EMAIL}}/info@effemmesrl.com/g' # ✅ COMPLETATO

# Sostituisci Google Analytics ID (esempio)
find . -name "*.js" | xargs sed -i 's/{{GA_MEASUREMENT_ID}}/G-XXXXXXXXXX/g'
```

### Opzione 3: Variabili d'Ambiente (Consigliato per Netlify)
Invece di modificare i file, configura le variabili d'ambiente su Netlify:

1. Vai su Netlify Dashboard
2. Site Settings > Environment Variables
3. Aggiungi:
   - `PHONE` = numero reale
   - `CONTACT_EMAIL` = email reale  
   - `GA_MEASUREMENT_ID` = ID Google Analytics

## ✅ Checklist Verifica

Dopo aver sostituito i placeholder:

- [ ] Verificare che tutti i link telefonici funzionino
- [ ] Testare che le email si aprano correttamente
- [ ] Controllare che WhatsApp funzioni con il numero reale
- [ ] Verificare Google Analytics (se configurato)
- [ ] Testare il form contatti
- [ ] Controllare che l'og-image mostri il numero corretto

## 🚨 Importante

**NON fare il deploy in produzione finché tutti i placeholder non sono stati sostituiti!**

I placeholder sono facilmente identificabili perché racchiusi tra doppie parentesi graffe: `{{PLACEHOLDER}}`

## 📧 Form Contatti

Il form contatti è configurato per funzionare anche con placeholder. Quando `CONTACT_EMAIL` non è configurato:
- I dati vengono loggati nel server
- L'utente riceve comunque conferma di invio
- È necessario configurare l'email reale per ricevere le richieste

## 🔍 Verifica Finale

Dopo aver popolato tutti i contatti, esegui:
```bash
# Cerca eventuali placeholder rimasti
grep -r "{{" src/ public/
```

Se il comando non restituisce risultati, tutti i placeholder sono stati sostituiti correttamente.