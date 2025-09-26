#!/usr/bin/env node

// Test specifico per hero section - EFFEMME SRL
// Analizza il problema di leggibilità mostrato nell'immagine

const fs = require('fs');

// Definizione colori Tailwind
const colors = {
  'primary-600': '#2563eb',
  'primary-800': '#1e40af',
  'primary-100': '#dbeafe',
  'primary-200': '#bfdbfe',
  'white': '#ffffff',
  'gray-50': '#f9fafb'
};

// Funzioni di calcolo contrasto
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function getRelativeLuminance(rgb) {
  const { r, g, b } = rgb;
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrastRatio(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  const lum1 = getRelativeLuminance(rgb1);
  const lum2 = getRelativeLuminance(rgb2);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

function evaluateContrast(ratio) {
  if (ratio >= 7) return { level: 'AAA', status: 'ECCELLENTE', icon: '🟢' };
  if (ratio >= 4.5) return { level: 'AA', status: 'BUONO', icon: '🟡' };
  if (ratio >= 3) return { level: 'A', status: 'INSUFFICIENTE', icon: '🟠' };
  return { level: 'FAIL', status: 'CRITICO', icon: '🔴' };
}

// Simula il gradiente (approssimazione con primary-700)
const gradientApprox = '#1d4ed8'; // primary-700 come media tra 600 e 800

console.log('🔍 ANALISI HERO SECTION - PROBLEMA LEGGIBILITÀ');
console.log('===============================================');
console.log('Analizzando il problema mostrato nell\'immagine...');
console.log('');

// Test combinazioni hero section
const heroTests = [
  {
    name: 'Hero - Titolo principale',
    background: 'primary-600',
    text: 'white',
    context: 'H1 su gradiente (lato chiaro)',
    current: true
  },
  {
    name: 'Hero - Sottotitolo',
    background: 'primary-600',
    text: 'primary-100',
    context: 'Sottotitolo su gradiente (lato chiaro)',
    current: true
  },
  {
    name: 'Hero - Testo piccolo ATTUALE',
    background: 'primary-800',
    text: 'primary-200',
    context: 'Testo piccolo su gradiente (lato scuro) - PROBLEMA!',
    current: true
  },
  {
    name: 'Hero - Testo piccolo MIGLIORATO',
    background: 'primary-800',
    text: 'primary-100',
    context: 'Proposta: primary-100 invece di primary-200',
    current: false
  },
  {
    name: 'Hero - Testo piccolo OTTIMALE',
    background: 'primary-800',
    text: 'white',
    context: 'Proposta ottimale: white per massimo contrasto',
    current: false
  }
];

let results = [];
let currentIssues = 0;

heroTests.forEach(test => {
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
    context: test.context,
    current: test.current
  };
  
  results.push(result);
  
  const prefix = test.current ? '🔴 ATTUALE' : '✅ PROPOSTA';
  console.log(`${evaluation.icon} ${prefix}: ${test.name}`);
  console.log(`   Sfondo: ${test.background} (${bgColor}) | Testo: ${test.text} (${textColor})`);
  console.log(`   Rapporto: ${ratio.toFixed(2)}:1 | Status: ${evaluation.status} (${evaluation.level})`);
  console.log(`   Contesto: ${test.context}`);
  console.log('');
  
  if (test.current && (evaluation.level === 'A' || evaluation.level === 'FAIL')) {
    currentIssues++;
  }
});

console.log('================================================================================');
console.log('🎯 DIAGNOSI PROBLEMA HERO SECTION');
console.log('');

if (currentIssues > 0) {
  console.log(`❌ PROBLEMI IDENTIFICATI: ${currentIssues}`);
  console.log('');
  console.log('🔧 SOLUZIONI RACCOMANDATE:');
  console.log('   1. Sostituire text-primary-200 con text-primary-100');
  console.log('   2. Per massimo contrasto: usare text-white');
  console.log('   3. Evitare testi chiari su parti scure del gradiente');
  console.log('');
  console.log('📝 CODICE DA MODIFICARE:');
  console.log('   Cambiare: text-primary-200');
  console.log('   Con: text-primary-100 o text-white');
} else {
  console.log('✅ Nessun problema critico identificato');
}

// Salva report
const report = {
  timestamp: new Date().toISOString(),
  summary: {
    total: results.length,
    currentIssues: currentIssues,
    recommendations: [
      'Sostituire text-primary-200 con text-primary-100',
      'Considerare text-white per massimo contrasto',
      'Evitare testi chiari su parti scure del gradiente'
    ]
  },
  tests: results
};

fs.writeFileSync('hero-specific-analysis.json', JSON.stringify(report, null, 2));
console.log('📄 Analisi salvata in: hero-specific-analysis.json');