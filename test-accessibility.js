const puppeteer = require('puppeteer');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const fs = require('fs');

async function testAccessibility() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  const urls = [
    'http://localhost:3000',
    'http://localhost:3000/chi-siamo',
    'http://localhost:3000/servizi',
    'http://localhost:3000/contatti',
    'http://localhost:3000/montaggio-climatizzatori-ravenna'
  ];
  
  const results = [];
  
  for (const url of urls) {
    try {
      console.log(`Testing ${url}...`);
      await page.goto(url, { waitUntil: 'networkidle0' });
      
      const axeResults = await new AxePuppeteer(page).analyze();
      
      results.push({
        url,
        violations: axeResults.violations.length,
        critical: axeResults.violations.filter(v => v.impact === 'critical').length,
        serious: axeResults.violations.filter(v => v.impact === 'serious').length,
        moderate: axeResults.violations.filter(v => v.impact === 'moderate').length,
        minor: axeResults.violations.filter(v => v.impact === 'minor').length,
        details: axeResults.violations
      });
      
    } catch (error) {
      console.error(`Error testing ${url}:`, error.message);
    }
  }
  
  await browser.close();
  
  // Save detailed results
  fs.writeFileSync('accessibility-report.json', JSON.stringify(results, null, 2));
  
  // Print summary
  console.log('\n=== ACCESSIBILITY TEST RESULTS ===');
  let totalViolations = 0;
  let totalCritical = 0;
  let totalSerious = 0;
  
  results.forEach(result => {
    totalViolations += result.violations;
    totalCritical += result.critical;
    totalSerious += result.serious;
    
    console.log(`\n${result.url}:`);
    console.log(`  Total violations: ${result.violations}`);
    console.log(`  Critical: ${result.critical}`);
    console.log(`  Serious: ${result.serious}`);
    console.log(`  Moderate: ${result.moderate}`);
    console.log(`  Minor: ${result.minor}`);
    
    if (result.details.length > 0) {
      console.log('  Issues:');
      result.details.forEach(violation => {
        console.log(`    - ${violation.id} (${violation.impact}): ${violation.description}`);
      });
    }
  });
  
  console.log(`\n=== SUMMARY ===`);
  console.log(`Total violations across all pages: ${totalViolations}`);
  console.log(`Critical violations: ${totalCritical}`);
  console.log(`Serious violations: ${totalSerious}`);
  console.log(`\nDetailed report saved to accessibility-report.json`);
  
  return results;
}

testAccessibility().catch(console.error);