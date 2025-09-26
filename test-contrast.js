const fs = require('fs');

// Definizione dei colori dal tailwind.config.js e standard Tailwind
const colors = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#2563eb', // Aggiornato per migliorare contrasto
    600: '#2563eb',
    700: '#1d4ed8',
    900: '#1e3a8a',
  },
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    400: '#94a3b8',
    500: '#64748b',
    600: '#374151',
    700: '#1f2937',
    800: '#111827',
    900: '#0f172a',
  },
  // Colori standard Tailwind utilizzati nel sito
  white: '#ffffff',
  black: '#000000',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#16a34a', // Aggiornato per migliorare contrasto
    600: '#15803d', // Già buono
    700: '#166534', // Per contrasti eccellenti
    800: '#14532d',
    900: '#14532d',
  },
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  cyan: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#0891b2', // Aggiornato per migliorare contrasto
    600: '#0e7490', // Aggiornato per migliorare contrasto
    700: '#155e75', // Per contrasti eccellenti
    800: '#155e75',
    900: '#164e63',
  },
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  purple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6b21a8',
    900: '#581c87',
  }
};

// Funzione per convertire hex in RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Funzione per calcolare la luminanza relativa
function getLuminance(rgb) {
  const { r, g, b } = rgb;
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Funzione per calcolare il rapporto di contrasto
function getContrastRatio(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return 0;
  
  const lum1 = getLuminance(rgb1);
  const lum2 = getLuminance(rgb2);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

// Funzione per ottenere il valore del colore
function getColorValue(colorClass) {
  // Gestisci casi speciali
  if (colorClass === 'white') return colors.white;
  if (colorClass === 'black') return colors.black;
  
  const parts = colorClass.split('-');
  if (parts.length < 2) return null;
  
  const colorName = parts[0];
  const shade = parts[1];
  
  // Controlla se il colore esiste nella palette
  if (colors[colorName]) {
    if (typeof colors[colorName] === 'string') {
      return colors[colorName];
    } else if (colors[colorName][shade]) {
      return colors[colorName][shade];
    }
  }
  
  return null;
}

// Combinazioni di colori identificate nel sito
const colorCombinations = [
  // Header e Footer
  { bg: 'secondary-900', text: 'white', context: 'Footer background' },
  { bg: 'primary-700', text: 'white', context: 'Header top bar' },
  { bg: 'green-700', text: 'white', context: 'WhatsApp button (Header)' },
  { bg: 'green-800', text: 'white', context: 'WhatsApp button hover (Header)' },
  
  // Homepage
  { bg: 'white', text: 'primary-600', context: 'Secondary button' },
  { bg: 'primary-600', text: 'white', context: 'Primary button' },
  { bg: 'gray-50', text: 'secondary-900', context: 'Section background' },
  { bg: 'primary-50', text: 'primary-700', context: 'Info box' },
  { bg: 'primary-600', text: 'white', context: 'Icon background' },
  { bg: 'primary-700', text: 'white', context: 'CTA section' },
  
  // Pagine servizi
  { bg: 'white', text: 'cyan-600', context: 'Climatizzatori - Secondary button' },
  { bg: 'cyan-500', text: 'white', context: 'Climatizzatori - Primary button' },
  { bg: 'cyan-600', text: 'white', context: 'Climatizzatori - Icon background' },
  { bg: 'secondary-900', text: 'white', context: 'Climatizzatori - Footer CTA' },
  
  { bg: 'white', text: 'green-600', context: 'Pompe di calore - Secondary button' },
  { bg: 'green-500', text: 'white', context: 'Pompe di calore - Primary button' },
  { bg: 'green-600', text: 'white', context: 'Pompe di calore - Icon background' },
  { bg: 'green-700', text: 'white', context: 'Pompe di calore - CTA section' },
  
  { bg: 'white', text: 'blue-600', context: 'Riscaldamento - Secondary button' },
  { bg: 'blue-500', text: 'white', context: 'Riscaldamento - Primary button' },
  { bg: 'blue-600', text: 'white', context: 'Riscaldamento - Icon background' },
  { bg: 'blue-700', text: 'white', context: 'Riscaldamento - CTA section' },
  
  { bg: 'white', text: 'red-600', context: 'Caldaie - Secondary button' },
  { bg: 'red-600', text: 'white', context: 'Caldaie - Text on background' },
  
  { bg: 'white', text: 'purple-600', context: 'Riparazioni - Secondary button' },
  { bg: 'purple-600', text: 'white', context: 'Riparazioni - Text elements' },
  
  // Contatti
  { bg: 'primary-100', text: 'primary-600', context: 'Contact icons' },
  { bg: 'green-600', text: 'white', context: 'Contact buttons' },
  { bg: 'blue-600', text: 'white', context: 'Email button' },
  { bg: 'green-50', text: 'green-700', context: 'Success message' },
  
  // Testi generali
  { bg: 'white', text: 'secondary-900', context: 'Main headings' },
  { bg: 'white', text: 'secondary-800', context: 'Sub headings' },
  { bg: 'white', text: 'secondary-700', context: 'Body text' },
  { bg: 'white', text: 'secondary-600', context: 'Secondary text' },
  { bg: 'gray-50', text: 'secondary-900', context: 'Headings on light background' },
  { bg: 'gray-50', text: 'secondary-700', context: 'Text on light background' },
];

// Test del contrasto
function testContrast() {
  console.log('🎨 ANALISI CONTRASTO COLORI - EFFEMME SRL\n');
  console.log('=' .repeat(80));
  
  const results = [];
  let criticalIssues = 0;
  let warningIssues = 0;
  let passedTests = 0;
  
  colorCombinations.forEach((combo, index) => {
    const bgColor = getColorValue(combo.bg);
    const textColor = getColorValue(combo.text);
    
    if (!bgColor || !textColor) {
      console.log(`❌ Errore: Colore non trovato per ${combo.context}`);
      return;
    }
    
    const ratio = getContrastRatio(bgColor, textColor);
    const wcagAA = ratio >= 4.5;
    const wcagAAA = ratio >= 7.0;
    
    let status = '';
    let icon = '';
    
    if (wcagAAA) {
      status = 'ECCELLENTE (AAA)';
      icon = '🟢';
      passedTests++;
    } else if (wcagAA) {
      status = 'BUONO (AA)';
      icon = '🟡';
      passedTests++;
    } else if (ratio >= 3.0) {
      status = 'INSUFFICIENTE';
      icon = '🟠';
      warningIssues++;
    } else {
      status = 'CRITICO';
      icon = '🔴';
      criticalIssues++;
    }
    
    const result = {
      context: combo.context,
      bg: combo.bg,
      text: combo.text,
      bgHex: bgColor,
      textHex: textColor,
      ratio: ratio.toFixed(2),
      status,
      wcagAA,
      wcagAAA
    };
    
    results.push(result);
    
    console.log(`${icon} ${combo.context}`);
    console.log(`   Sfondo: ${combo.bg} (${bgColor}) | Testo: ${combo.text} (${textColor})`);
    console.log(`   Rapporto: ${ratio.toFixed(2)}:1 | Status: ${status}`);
    console.log('');
  });
  
  // Riepilogo
  console.log('=' .repeat(80));
  console.log('📊 RIEPILOGO RISULTATI\n');
  
  console.log(`✅ Test superati (AA/AAA): ${passedTests}`);
  console.log(`⚠️  Problemi minori: ${warningIssues}`);
  console.log(`❌ Problemi critici: ${criticalIssues}`);
  console.log(`📈 Totale combinazioni testate: ${results.length}\n`);
  
  // Problemi critici
  if (criticalIssues > 0) {
    console.log('🚨 PROBLEMI CRITICI DA RISOLVERE:');
    results.filter(r => !r.wcagAA && parseFloat(r.ratio) < 3.0).forEach(r => {
      console.log(`   • ${r.context}: ${r.ratio}:1 (richiesto: 4.5:1)`);
    });
    console.log('');
  }
  
  // Problemi minori
  if (warningIssues > 0) {
    console.log('⚠️  MIGLIORAMENTI CONSIGLIATI:');
    results.filter(r => !r.wcagAA && parseFloat(r.ratio) >= 3.0).forEach(r => {
      console.log(`   • ${r.context}: ${r.ratio}:1 (consigliato: 4.5:1)`);
    });
    console.log('');
  }
  
  // Raccomandazioni
  console.log('💡 RACCOMANDAZIONI:');
  
  if (criticalIssues > 0) {
    console.log('   1. Risolvere IMMEDIATAMENTE i problemi critici');
    console.log('   2. Utilizzare colori più scuri per il testo o più chiari per lo sfondo');
  }
  
  if (warningIssues > 0) {
    console.log('   3. Migliorare i contrasti insufficienti per una migliore accessibilità');
  }
  
  console.log('   4. Testare i colori in condizioni di luce diverse');
  console.log('   5. Verificare la leggibilità su dispositivi mobili');
  console.log('   6. Considerare utenti con disabilità visive');
  
  // Salva risultati dettagliati
  const detailedReport = {
    timestamp: new Date().toISOString(),
    summary: {
      total: results.length,
      passed: passedTests,
      warnings: warningIssues,
      critical: criticalIssues
    },
    results: results,
    recommendations: [
      'Utilizzare sempre un rapporto di contrasto minimo di 4.5:1 per testo normale',
      'Puntare a 7:1 per testo importante o di piccole dimensioni',
      'Testare i colori con simulatori di daltonismo',
      'Verificare la leggibilità in diverse condizioni di illuminazione'
    ]
  };
  
  fs.writeFileSync('contrast-analysis-report.json', JSON.stringify(detailedReport, null, 2));
  console.log('\n📄 Report dettagliato salvato in: contrast-analysis-report.json');
  
  return {
    criticalIssues,
    warningIssues,
    passedTests,
    totalTests: results.length
  };
}

// Esegui il test
if (require.main === module) {
  testContrast();
}

module.exports = { testContrast, getContrastRatio, getColorValue };