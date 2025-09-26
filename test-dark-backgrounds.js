#!/usr/bin/env node

// Test contrasto per sfondi scuri - EFFEMME SRL
// Verifica leggibilità testo su sfondi neri/scuri

const fs = require('fs');

// Definizione colori Tailwind
const colors = {
  'secondary-900': '#0f172a',
  'gray-400': '#9ca3af',
  'gray-500': '#6b7280',
  'gray-300': '#d1d5db',
  'gray-200': '#e5e7eb',
  'gray-100': '#f3f4f6',
  'white': '#ffffff',
  'slate-400': '#94a3b8',
  'slate-300': '#cbd5e1',
  'slate-200': '#e2e8f0'
};

// Funzione per convertire hex a RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Calcola luminanza relativa
function getRelativeLuminance(rgb) {
  const { r, g, b } = rgb;
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Calcola rapporto di contrasto
function getContrastRatio(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  const lum1 = getRelativeLuminance(rgb1);
  const lum2 = getRelativeLuminance(rgb2);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

// Valuta livello di contrasto
function evaluateContrast(ratio) {
  if (ratio >= 7) return { level: 'AAA', status: 'ECCELLENTE', icon: '🟢' };
  if (ratio >= 4.5) return { level: 'AA', status: 'BUONO', icon: '🟡' };
  if (ratio >= 3) return { level: 'A', status: 'INSUFFICIENTE', icon: '🟠' };
  return { level: 'FAIL', status: 'CRITICO', icon: '🔴' };
}

// Test combinazioni sfondi scuri
const darkBackgroundTests = [
  {
    name: 'Footer - Testo principale',
    background: 'secondary-900',
    text: 'white',
    context: 'Testo principale footer'
  },
  {
    name: 'Footer - Testo secondario (ATTUALE)',
    background: 'secondary-900',
    text: 'gray-400',
    context: 'Testo secondario footer - PROBLEMA IDENTIFICATO'
  },
  {
    name: 'Footer - Testo secondario (MIGLIORATO)',
    background: 'secondary-900',
    text: 'gray-300',
    context: 'Proposta miglioramento: gray-300'
  },
  {
    name: 'Footer - Testo secondario (OTTIMALE)',
    background: 'secondary-900',
    text: 'gray-200',
    context: 'Proposta ottimale: gray-200'
  },
  {
    name: 'Sezione scura - Testo principale',
    background: 'secondary-900',
    text: 'white',
    context: 'Sezioni con bg-secondary-900'
  },
  {
    name: 'Sezione scura - Testo secondario (ATTUALE)',
    background: 'secondary-900',
    text: 'slate-400',
    context: 'Se presente slate-400 su sfondo scuro'
  },
  {
    name: 'Sezione scura - Testo secondario (MIGLIORATO)',
    background: 'secondary-900',
    text: 'slate-300',
    context: 'Proposta miglioramento: slate-300'
  }
];

console.log('🌙 TEST CONTRASTO SFONDI SCURI - EFFEMME SRL');
console.log('=====================================');

let results = [];
let passed = 0;
let minor = 0;
let critical = 0;

darkBackgroundTests.forEach(test => {
  const bgColor = colors[test.background];
  const textColor = colors[test.text];
  
  if (!bgColor || !textColor) {
    console.log(`❌ Colore non trovato: ${test.background} o ${test.text}`);
    return;
  }
  
  const ratio = getContrastRatio(bgColor, textColor);
  const evaluation = evaluateContrast(ratio);
  
  const result = {
    name: test.name,
    background: test.background,
    backgroundHex: bgColor,
    text: test.text,
    textHex: textColor,
    ratio: ratio.toFixed(2),
    level: evaluation.level,
    status: evaluation.status,
    context: test.context
  };
  
  results.push(result);
  
  console.log(`${evaluation.icon} ${test.name}`);
  console.log(`   Sfondo: ${test.background} (${bgColor}) | Testo: ${test.text} (${textColor})`);
  console.log(`   Rapporto: ${ratio.toFixed(2)}:1 | Status: ${evaluation.status} (${evaluation.level})`);
  console.log(`   Contesto: ${test.context}`);
  console.log('');
  
  if (evaluation.level === 'AAA' || evaluation.level === 'AA') passed++;
  else if (evaluation.level === 'A') minor++;
  else critical++;
});

console.log('================================================================================');
console.log('📊 RIEPILOGO RISULTATI SFONDI SCURI');
console.log('');
console.log(`✅ Test superati (AA/AAA): ${passed}`);
console.log(`⚠️  Problemi minori: ${minor}`);
console.log(`❌ Problemi critici: ${critical}`);
console.log(`📈 Totale combinazioni testate: ${results.length}`);
console.log('');

// Raccomandazioni specifiche
console.log('💡 RACCOMANDAZIONI SPECIFICHE:');
console.log('   1. Sostituire text-gray-400 con text-gray-300 nel footer');
console.log('   2. Per testo molto importante: usare text-gray-200 o text-white');
console.log('   3. Evitare text-gray-500 e colori più scuri su sfondi secondary-900');
console.log('   4. Testare sempre su dispositivi con luminosità ridotta');
console.log('');

// Salva report
const report = {
  timestamp: new Date().toISOString(),
  summary: {
    total: results.length,
    passed: passed,
    minor: minor,
    critical: critical,
    successRate: `${Math.round((passed / results.length) * 100)}%`
  },
  tests: results,
  recommendations: [
    'Sostituire text-gray-400 con text-gray-300 nel footer',
    'Usare text-gray-200 per testo importante su sfondi scuri',
    'Evitare text-gray-500 e colori più scuri su bg-secondary-900',
    'Testare su dispositivi con luminosità ridotta'
  ]
};

fs.writeFileSync('dark-backgrounds-report.json', JSON.stringify(report, null, 2));
console.log('📄 Report dettagliato salvato in: dark-backgrounds-report.json');