const fs = require('fs');

// Colori dal tailwind.config.js
const colors = {
  'primary-600': '#2563eb',
  'primary-800': '#1e40af',
  'primary-100': '#dbeafe',
  'primary-700': '#1d4ed8',
  'secondary-900': '#0f172a',
  'secondary-800': '#111827',
  'secondary-700': '#1f2937',
  'white': '#ffffff',
  'gray-50': '#f9fafb'
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

// Calcola la luminanza relativa
function getRelativeLuminance(rgb) {
  const { r, g, b } = rgb;
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Calcola il rapporto di contrasto
function getContrastRatio(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return null;
  
  const lum1 = getRelativeLuminance(rgb1);
  const lum2 = getRelativeLuminance(rgb2);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

// Funzione per valutare il contrasto
function evaluateContrast(ratio) {
  if (ratio >= 7) return { level: 'AAA', status: 'ECCELLENTE', icon: '🟢' };
  if (ratio >= 4.5) return { level: 'AA', status: 'BUONO', icon: '🟡' };
  if (ratio >= 3) return { level: 'AA Large', status: 'INSUFFICIENTE', icon: '🟠' };
  return { level: 'Fail', status: 'CRITICO', icon: '🔴' };
}

console.log('🎨 TEST CONTRASTO HERO SECTIONS E SFONDI COLORATI\n');
console.log('================================================================================');

// Test specifici per hero sections e sfondi colorati
const heroTests = [
  // Hero sections con gradient
  { name: 'Hero - Testo principale su gradient primary', bg: 'primary-600', text: 'white', context: 'H1 su hero gradient' },
  { name: 'Hero - Testo secondario su gradient primary', bg: 'primary-800', text: 'primary-100', context: 'Sottotitolo su hero gradient' },
  
  // Sezioni con sfondi colorati
  { name: 'Sezione primary-50 - Heading', bg: 'primary-100', text: 'primary-700', context: 'Titoli su sfondo chiaro primary' },
  { name: 'Sezione gray-50 - Heading', bg: 'gray-50', text: 'secondary-900', context: 'Titoli su sfondo grigio chiaro' },
  { name: 'Sezione gray-50 - Body text', bg: 'gray-50', text: 'secondary-700', context: 'Testo corpo su sfondo grigio' },
  
  // Footer
  { name: 'Footer - Testo principale', bg: 'secondary-900', text: 'white', context: 'Testo footer' },
  { name: 'Footer - Link hover', bg: 'secondary-800', text: 'white', context: 'Link footer hover' }
];

const results = [];
let passed = 0;
let warnings = 0;
let critical = 0;

heroTests.forEach(test => {
  const bgColor = colors[test.bg];
  const textColor = colors[test.text];
  
  if (!bgColor || !textColor) {
    console.log(`❌ ${test.name}: Colore non trovato (${test.bg} o ${test.text})`);
    return;
  }
  
  const ratio = getContrastRatio(bgColor, textColor);
  const evaluation = evaluateContrast(ratio);
  
  console.log(`${evaluation.icon} ${test.name}`);
  console.log(`   Sfondo: ${test.bg} (${bgColor}) | Testo: ${test.text} (${textColor})`);
  console.log(`   Rapporto: ${ratio.toFixed(2)}:1 | Status: ${evaluation.status} (${evaluation.level})`);
  console.log(`   Contesto: ${test.context}`);
  console.log('');
  
  const result = {
    name: test.name,
    background: test.bg,
    backgroundHex: bgColor,
    text: test.text,
    textHex: textColor,
    ratio: parseFloat(ratio.toFixed(2)),
    level: evaluation.level,
    status: evaluation.status,
    context: test.context
  };
  
  results.push(result);
  
  if (evaluation.status === 'ECCELLENTE' || evaluation.status === 'BUONO') {
    passed++;
  } else if (evaluation.status === 'INSUFFICIENTE') {
    warnings++;
  } else {
    critical++;
  }
});

console.log('================================================================================');
console.log('📊 RIEPILOGO RISULTATI HERO SECTIONS E SFONDI COLORATI\n');
console.log(`✅ Test superati (AA/AAA): ${passed}`);
console.log(`⚠️  Problemi minori: ${warnings}`);
console.log(`❌ Problemi critici: ${critical}`);
console.log(`📈 Totale combinazioni testate: ${results.length}\n`);

if (warnings > 0) {
  console.log('⚠️  MIGLIORAMENTI CONSIGLIATI:');
  results.filter(r => r.status === 'INSUFFICIENTE').forEach(r => {
    console.log(`   • ${r.name}: ${r.ratio}:1 (consigliato: 4.5:1)`);
  });
  console.log('');
}

if (critical > 0) {
  console.log('❌ PROBLEMI CRITICI DA RISOLVERE IMMEDIATAMENTE:');
  results.filter(r => r.status === 'CRITICO').forEach(r => {
    console.log(`   • ${r.name}: ${r.ratio}:1 (minimo richiesto: 3:1)`);
  });
  console.log('');
}

console.log('💡 RACCOMANDAZIONI:');
console.log('   1. Tutti i testi su hero sections devono avere contrasto ≥ 4.5:1');
console.log('   2. Verificare la leggibilità in condizioni di luce diverse');
console.log('   3. Testare su dispositivi con luminosità variabile');
console.log('   4. Considerare utenti con disabilità visive');

// Salva il report dettagliato
const report = {
  summary: {
    total: results.length,
    passed: passed,
    warnings: warnings,
    critical: critical,
    testType: 'Hero Sections e Sfondi Colorati'
  },
  results: results,
  timestamp: new Date().toISOString()
};

fs.writeFileSync('hero-contrast-report.json', JSON.stringify(report, null, 2));
console.log('\n📄 Report dettagliato salvato in: hero-contrast-report.json');