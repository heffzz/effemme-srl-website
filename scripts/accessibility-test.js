const puppeteer = require('puppeteer');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const fs = require('fs');
const path = require('path');

async function runAccessibilityTests() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const urls = [
    'http://localhost:3000',
    'http://localhost:3000/chi-siamo',
    'http://localhost:3000/servizi',
    'http://localhost:3000/montaggio-caldaie-immergas-ravenna',
    'http://localhost:3000/contatti'
  ];

  const results = [];

  for (const url of urls) {
    console.log(`Testing accessibility for ${url}...`);
    try {
      await page.goto(url, { waitUntil: 'networkidle0' });
      
      const axeResults = await new AxePuppeteer(page)
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();

      const summary = {
        url,
        violations: axeResults.violations.length,
        passes: axeResults.passes.length,
        incomplete: axeResults.incomplete.length,
        inapplicable: axeResults.inapplicable.length,
        criticalViolations: axeResults.violations.filter(v => v.impact === 'critical').length,
        seriousViolations: axeResults.violations.filter(v => v.impact === 'serious').length,
        moderateViolations: axeResults.violations.filter(v => v.impact === 'moderate').length,
        minorViolations: axeResults.violations.filter(v => v.impact === 'minor').length,
        timestamp: new Date().toISOString(),
        violations_detail: axeResults.violations.map(v => ({
          id: v.id,
          impact: v.impact,
          description: v.description,
          help: v.help,
          helpUrl: v.helpUrl,
          nodes: v.nodes.length
        }))
      };

      results.push(summary);
      
      console.log(`✅ ${url}: ${summary.violations} violations (${summary.criticalViolations} critical, ${summary.seriousViolations} serious)`);
      
      if (summary.criticalViolations > 0) {
        console.log(`❌ Critical violations found on ${url}:`);
        summary.violations_detail
          .filter(v => v.impact === 'critical')
          .forEach(v => console.log(`   - ${v.description}`));
      }
      
    } catch (error) {
      console.error(`❌ Error testing ${url}:`, error.message);
      results.push({
        url,
        error: error.message,
        timestamp: new Date().toISOString()
      });
    }
  }

  await browser.close();

  // Save results
  const reportPath = path.join(__dirname, '..', 'accessibility-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

  // Generate summary
  const validResults = results.filter(r => !r.error);
  if (validResults.length > 0) {
    const totalViolations = validResults.reduce((sum, r) => sum + r.violations, 0);
    const totalCritical = validResults.reduce((sum, r) => sum + r.criticalViolations, 0);
    const totalSerious = validResults.reduce((sum, r) => sum + r.seriousViolations, 0);

    console.log('\n♿ ACCESSIBILITY SUMMARY:');
    console.log(`Total violations: ${totalViolations}`);
    console.log(`Critical violations: ${totalCritical}`);
    console.log(`Serious violations: ${totalSerious}`);
    
    if (totalCritical === 0) {
      console.log('✅ No critical accessibility violations found!');
    } else {
      console.log('❌ Critical accessibility violations found. Please fix before deployment.');
    }
    
    if (totalViolations === 0) {
      console.log('🎉 Perfect accessibility score!');
    }
  }

  console.log(`\nFull report saved to: ${reportPath}`);
  
  return validResults.reduce((sum, r) => sum + r.criticalViolations, 0) === 0;
}

if (require.main === module) {
  runAccessibilityTests().catch(console.error);
}

module.exports = runAccessibilityTests;