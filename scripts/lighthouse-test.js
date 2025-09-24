const lighthouse = require('lighthouse').default || require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const path = require('path');

async function runLighthouse() {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  
  const options = {
    logLevel: 'info',
    output: 'json',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port,
  };

  const urls = [
    'http://localhost:3000',
    'http://localhost:3000/chi-siamo',
    'http://localhost:3000/servizi',
    'http://localhost:3000/montaggio-caldaie-immergas-ravenna',
    'http://localhost:3000/contatti'
  ];

  const results = [];

  for (const url of urls) {
    console.log(`Testing ${url}...`);
    try {
      const runnerResult = await lighthouse(url, options);
      const scores = {
        url,
        performance: Math.round(runnerResult.lhr.categories.performance.score * 100),
        accessibility: Math.round(runnerResult.lhr.categories.accessibility.score * 100),
        bestPractices: Math.round(runnerResult.lhr.categories['best-practices'].score * 100),
        seo: Math.round(runnerResult.lhr.categories.seo.score * 100),
        timestamp: new Date().toISOString()
      };
      
      results.push(scores);
      console.log(`✅ ${url}: Performance ${scores.performance}, Accessibility ${scores.accessibility}, SEO ${scores.seo}`);
    } catch (error) {
      console.error(`❌ Error testing ${url}:`, error.message);
      results.push({
        url,
        error: error.message,
        timestamp: new Date().toISOString()
      });
    }
  }

  await chrome.kill();

  // Save results
  const reportPath = path.join(__dirname, '..', 'lighthouse-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

  // Generate summary
  const validResults = results.filter(r => !r.error);
  if (validResults.length > 0) {
    const avgPerformance = Math.round(validResults.reduce((sum, r) => sum + r.performance, 0) / validResults.length);
    const avgAccessibility = Math.round(validResults.reduce((sum, r) => sum + r.accessibility, 0) / validResults.length);
    const avgSeo = Math.round(validResults.reduce((sum, r) => sum + r.seo, 0) / validResults.length);

    console.log('\n📊 LIGHTHOUSE SUMMARY:');
    console.log(`Average Performance: ${avgPerformance}/100`);
    console.log(`Average Accessibility: ${avgAccessibility}/100`);
    console.log(`Average SEO: ${avgSeo}/100`);
    
    if (avgPerformance >= 90 && avgAccessibility >= 90 && avgSeo >= 90) {
      console.log('✅ All targets met!');
    } else {
      console.log('⚠️  Some targets not met. Check individual page scores.');
    }
  }

  console.log(`\nFull report saved to: ${reportPath}`);
}

if (require.main === module) {
  runLighthouse().catch(console.error);
}

module.exports = runLighthouse;