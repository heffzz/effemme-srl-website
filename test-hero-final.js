// Test finale per verificare la leggibilità di tutte le hero sections
const colors = {
  'primary-600': '#2563eb',
  'primary-800': '#1e40af',
  'cyan-600': '#0891b2',
  'cyan-700': '#0e7490',
  'blue-600': '#2563eb',
  'blue-700': '#1d4ed8',
  'white': '#ffffff',
  'primary-100': '#dbeafe',
  'primary-200': '#bfdbfe',
  'cyan-100': '#cffafe'
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

function getContrastRatio(color1, color2) {
  const rgb1 = hexToRgb(color1)
  const rgb2 = hexToRgb(color2)
  
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b)
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b)
  
  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)
  
  return (brightest + 0.05) / (darkest + 0.05)
}

function evaluateContrast(ratio) {
  if (ratio >= 7) return { level: 'AAA', status: 'ECCELLENTE', icon: '🟢 ✅' }
  if (ratio >= 4.5) return { level: 'AA', status: 'BUONO', icon: '🟡 ✅' }
  if (ratio >= 3) return { level: 'A', status: 'INSUFFICIENTE', icon: '🟠 ⚠️' }
  return { level: 'FAIL', status: 'CRITICO', icon: '🔴 ❌' }
}

console.log('🎯 TEST FINALE HERO SECTIONS - LEGGIBILITÀ')
console.log('==========================================')
console.log('Verificando tutti i miglioramenti applicati...\n')

const heroTests = [
  {
    page: 'Homepage',
    element: 'Titolo principale',
    background: 'primary-600',
    text: 'white',
    context: 'H1 su gradiente (lato chiaro)'
  },
  {
    page: 'Homepage', 
    element: 'Sottotitolo MIGLIORATO',
    background: 'primary-600',
    text: 'white',
    context: 'Sottotitolo su gradiente - AGGIORNATO'
  },
  {
    page: 'Homepage',
    element: 'Testo piccolo MIGLIORATO',
    background: 'primary-800',
    text: 'white',
    context: 'Testo piccolo su gradiente (lato scuro) - AGGIORNATO'
  },
  {
    page: 'Chi Siamo',
    element: 'Sottotitolo MIGLIORATO',
    background: 'primary-600',
    text: 'white',
    context: 'Hero section - AGGIORNATO'
  },
  {
    page: 'Servizi',
    element: 'Sottotitolo MIGLIORATO',
    background: 'primary-600',
    text: 'white',
    context: 'Hero section - AGGIORNATO'
  },
  {
    page: 'Contatti',
    element: 'Sottotitolo MIGLIORATO',
    background: 'primary-600',
    text: 'white',
    context: 'Hero section - AGGIORNATO'
  },
  {
    page: 'Climatizzatori',
    element: 'Sottotitolo MIGLIORATO',
    background: 'cyan-700',
    text: 'white',
    context: 'Hero section - AGGIORNATO (cyan-700)'
  }
]

let passed = 0
let total = heroTests.length
let issues = []

heroTests.forEach(test => {
  const bgColor = colors[test.background]
  const textColor = colors[test.text]
  const ratio = getContrastRatio(bgColor, textColor)
  const evaluation = evaluateContrast(ratio)
  
  console.log(`${evaluation.icon} ${test.page} - ${test.element}`)
  console.log(`   Sfondo: ${test.background} (${bgColor}) | Testo: ${test.text} (${textColor})`)
  console.log(`   Rapporto: ${ratio.toFixed(2)}:1 | Status: ${evaluation.status} (${evaluation.level})`)
  console.log(`   Contesto: ${test.context}`)
  console.log('')
  
  if (evaluation.level === 'AA' || evaluation.level === 'AAA') {
    passed++
  } else {
    issues.push({
      page: test.page,
      element: test.element,
      ratio: ratio.toFixed(2),
      status: evaluation.status
    })
  }
})

console.log('================================================================================')
console.log('🎯 RISULTATI FINALI HERO SECTIONS')
console.log('')
console.log(`✅ Test superati: ${passed}/${total} (${Math.round(passed/total*100)}%)`)
console.log(`⚠️  Problemi rimanenti: ${issues.length}`)
console.log(`🎯 Conformità WCAG 2.1: ${issues.length === 0 ? 'COMPLETA' : 'PARZIALE'}`)

if (issues.length > 0) {
  console.log('')
  console.log('🔧 PROBLEMI DA RISOLVERE:')
  issues.forEach((issue, index) => {
    console.log(`   ${index + 1}. ${issue.page} - ${issue.element}: ${issue.ratio}:1 (${issue.status})`)
  })
} else {
  console.log('')
  console.log('🎉 TUTTI I TEST SUPERATI!')
  console.log('   Tutte le hero sections ora hanno contrasto ottimale')
  console.log('   Conformità WCAG 2.1 AA/AAA raggiunta')
}

console.log('')
console.log('📄 Report salvato in: hero-final-report.json')

// Salva report dettagliato
const report = {
  timestamp: new Date().toISOString(),
  summary: {
    total_tests: total,
    passed: passed,
    success_rate: Math.round(passed/total*100),
    remaining_issues: issues.length,
    wcag_compliance: issues.length === 0 ? 'COMPLETE' : 'PARTIAL'
  },
  improvements_implemented: [
    'Homepage: text-primary-100 → text-white (sottotitolo)',
    'Homepage: text-primary-200 → text-white (testo piccolo)',
    'Chi Siamo: text-primary-100 → text-white (sottotitolo)',
    'Servizi: text-primary-100 → text-white (sottotitolo)',
    'Contatti: text-primary-100 → text-white (sottotitolo)',
    'Climatizzatori: text-cyan-100 → text-white (sottotitolo)',
    'Climatizzatori: bg-cyan-600 → bg-cyan-700 (sfondo più scuro)'
  ],
  test_results: heroTests.map(test => {
    const bgColor = colors[test.background]
    const textColor = colors[test.text]
    const ratio = getContrastRatio(bgColor, textColor)
    const evaluation = evaluateContrast(ratio)
    
    return {
      page: test.page,
      element: test.element,
      background_color: test.background,
      text_color: test.text,
      contrast_ratio: ratio.toFixed(2),
      wcag_level: evaluation.level,
      status: evaluation.status,
      context: test.context
    }
  }),
  remaining_issues: issues
}

require('fs').writeFileSync('hero-final-report.json', JSON.stringify(report, null, 2))