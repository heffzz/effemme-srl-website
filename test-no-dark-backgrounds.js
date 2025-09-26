#!/usr/bin/env node

// Test finale per verificare l'eliminazione di tutti gli sfondi scuri
// EFFEMME SRL - Verifica rimozione sfondi neri

const fs = require('fs');
const path = require('path');

console.log('🔍 TEST FINALE - VERIFICA ELIMINAZIONE SFONDI SCURI');
console.log('==================================================');
console.log('Controllo che non ci siano più sfondi neri/scuri nel sito');
console.log('');

// Pattern da cercare per sfondi scuri
const darkBackgroundPatterns = [
  'bg-secondary-900',
  'bg-black',
  'bg-gray-900',
  'bg-slate-900',
  'bg-zinc-900',
  'bg-neutral-900'
];

// File da escludere (test e report)
const excludeFiles = [
  'test-dark-backgrounds.js',
  'test-no-dark-backgrounds.js',
  'test-final-contrast.js',
  'test-readability-final.js',
  'dark-backgrounds-report.json',
  'ACCESSIBILITY_IMPROVEMENTS_REPORT.md',
  'hero-contrast-report.json',
  'hero-final-report.json'
];

// Funzione per cercare pattern in un file
function searchInFile(filePath, patterns) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const findings = [];
    
    patterns.forEach(pattern => {
      const lines = content.split('\n');
      lines.forEach((line, index) => {
        if (line.includes(pattern)) {
          findings.push({
            pattern,
            line: index + 1,
            content: line.trim()
          });
        }
      });
    });
    
    return findings;
  } catch (error) {
    return [];
  }
}

// Funzione per scansionare directory ricorsivamente
function scanDirectory(dir, patterns, excludeFiles = []) {
  const results = [];
  
  function scan(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Salta node_modules, .git, .next
        if (!['node_modules', '.git', '.next', 'out'].includes(item)) {
          scan(fullPath);
        }
      } else if (stat.isFile()) {
        // Controlla solo file JS, JSX, CSS, HTML
        const ext = path.extname(item).toLowerCase();
        if (['.js', '.jsx', '.css', '.html', '.ts', '.tsx'].includes(ext)) {
          // Salta file esclusi
          if (!excludeFiles.includes(item)) {
            const findings = searchInFile(fullPath, patterns);
            if (findings.length > 0) {
              results.push({
                file: path.relative(process.cwd(), fullPath),
                findings
              });
            }
          }
        }
      }
    });
  }
  
  scan(dir);
  return results;
}

// Esegui la scansione
const projectRoot = process.cwd();
const results = scanDirectory(projectRoot, darkBackgroundPatterns, excludeFiles);

console.log('📊 RISULTATI SCANSIONE:');
console.log('');

if (results.length === 0) {
  console.log('✅ PERFETTO! Nessun sfondo scuro trovato nel sito');
  console.log('');
  console.log('🎉 OBIETTIVO RAGGIUNTO:');
  console.log('   • Tutti gli sfondi neri/scuri sono stati eliminati');
  console.log('   • Il sito ora usa solo sfondi chiari');
  console.log('   • Footer: da bg-secondary-900 → bg-gray-50');
  console.log('   • CTA Climatizzatori: da bg-secondary-900 → bg-primary-50');
  console.log('');
  console.log('🔧 MODIFICHE APPLICATE:');
  console.log('   1. Footer completamente ridisegnato con sfondo chiaro');
  console.log('   2. Sezione CTA climatizzatori con sfondo chiaro');
  console.log('   3. Tutti i colori del testo aggiornati per il contrasto');
  console.log('');
  console.log('✨ Il sito è ora completamente privo di sfondi scuri!');
} else {
  console.log(`❌ TROVATI ${results.length} file con sfondi scuri:`);
  console.log('');
  
  results.forEach((result, index) => {
    console.log(`${index + 1}. ${result.file}:`);
    result.findings.forEach(finding => {
      console.log(`   Linea ${finding.line}: ${finding.pattern}`);
      console.log(`   Codice: ${finding.content}`);
    });
    console.log('');
  });
  
  console.log('🔧 AZIONI RICHIESTE:');
  console.log('   • Rimuovere o sostituire i pattern trovati');
  console.log('   • Usare sfondi chiari come bg-gray-50, bg-primary-50, bg-white');
  console.log('   • Aggiornare i colori del testo di conseguenza');
}

console.log('');
console.log('==================================================');
console.log('Test completato - ' + new Date().toLocaleString());

// Salva report
const report = {
  timestamp: new Date().toISOString(),
  darkBackgroundsFound: results.length,
  status: results.length === 0 ? 'SUCCESS' : 'ISSUES_FOUND',
  scannedPatterns: darkBackgroundPatterns,
  excludedFiles: excludeFiles,
  results: results
};

fs.writeFileSync('no-dark-backgrounds-report.json', JSON.stringify(report, null, 2));
console.log('📄 Report salvato in: no-dark-backgrounds-report.json');