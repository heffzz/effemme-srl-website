const puppeteer = require('puppeteer');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const fs = require('fs');
const path = require('path');

// Schema per LocalBusiness
const localBusinessSchema = {
  type: 'object',
  properties: {
    '@context': { const: 'https://schema.org' },
    '@type': { const: 'LocalBusiness' },
    name: { type: 'string', minLength: 1 },
    description: { type: 'string', minLength: 1 },
    url: { type: 'string', format: 'uri' },
    telephone: { type: 'string', minLength: 1 },
    email: { type: 'string', format: 'email' },
    vatID: { type: 'string', pattern: '^IT[0-9]{11}$' },
    address: {
      type: 'object',
      properties: {
        '@type': { const: 'PostalAddress' },
        streetAddress: { type: 'string', minLength: 1 },
        addressLocality: { type: 'string', minLength: 1 },
        addressRegion: { type: 'string', minLength: 1 },
        postalCode: { type: 'string', minLength: 1 },
        addressCountry: { type: 'string', minLength: 1 }
      },
      required: ['@type', 'streetAddress', 'addressLocality', 'addressRegion', 'postalCode', 'addressCountry']
    },
    geo: {
      type: 'object',
      properties: {
        '@type': { const: 'GeoCoordinates' },
        latitude: { type: 'string' },
        longitude: { type: 'string' }
      },
      required: ['@type', 'latitude', 'longitude']
    }
  },
  required: ['@context', '@type', 'name', 'description', 'url', 'vatID', 'address']
};

async function validateJsonLd() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const urls = [
    'http://localhost:3000',
    'http://localhost:3000/chi-siamo',
    'http://localhost:3000/servizi',
    'http://localhost:3000/contatti'
  ];

  const results = [];
  const ajv = new Ajv();
  addFormats(ajv);
  const validate = ajv.compile(localBusinessSchema);

  for (const url of urls) {
    console.log(`Validating JSON-LD for ${url}...`);
    try {
      await page.goto(url, { waitUntil: 'networkidle0' });
      
      // Extract JSON-LD scripts
      const jsonLdScripts = await page.evaluate(() => {
        const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
        return scripts.map(script => {
          try {
            return JSON.parse(script.textContent);
          } catch (e) {
            return { error: 'Invalid JSON', content: script.textContent };
          }
        });
      });

      const pageResult = {
        url,
        jsonLdFound: jsonLdScripts.length,
        schemas: [],
        timestamp: new Date().toISOString()
      };

      for (let i = 0; i < jsonLdScripts.length; i++) {
        const schema = jsonLdScripts[i];
        
        if (schema.error) {
          pageResult.schemas.push({
            index: i,
            type: 'unknown',
            valid: false,
            errors: [schema.error]
          });
          continue;
        }

        const schemaResult = {
          index: i,
          type: schema['@type'] || 'unknown',
          valid: false,
          errors: []
        };

        if (schema['@type'] === 'LocalBusiness') {
          const isValid = validate(schema);
          schemaResult.valid = isValid;
          
          if (!isValid) {
            schemaResult.errors = validate.errors.map(err => 
              `${err.instancePath} ${err.message}`
            );
          }

          // Additional checks
          if (schema.url && !schema.url.includes('effemmesrl.com')) {
            schemaResult.errors.push('URL should contain effemmesrl.com domain');
            schemaResult.valid = false;
          }

          if (schema.vatID && schema.vatID !== 'IT02170530394') {
            schemaResult.errors.push('VAT ID should be IT02170530394');
            schemaResult.valid = false;
          }
        }

        pageResult.schemas.push(schemaResult);
      }

      results.push(pageResult);
      
      const localBusinessSchemas = pageResult.schemas.filter(s => s.type === 'LocalBusiness');
      const validLocalBusiness = localBusinessSchemas.filter(s => s.valid).length;
      
      console.log(`✅ ${url}: ${pageResult.jsonLdFound} JSON-LD found, ${validLocalBusiness}/${localBusinessSchemas.length} LocalBusiness valid`);
      
      if (localBusinessSchemas.length === 0) {
        console.log(`⚠️  No LocalBusiness schema found on ${url}`);
      } else if (validLocalBusiness === 0) {
        console.log(`❌ Invalid LocalBusiness schema on ${url}:`);
        localBusinessSchemas.forEach(schema => {
          schema.errors.forEach(error => console.log(`   - ${error}`));
        });
      }
      
    } catch (error) {
      console.error(`❌ Error validating ${url}:`, error.message);
      results.push({
        url,
        error: error.message,
        timestamp: new Date().toISOString()
      });
    }
  }

  await browser.close();

  // Save results
  const reportPath = path.join(__dirname, '..', 'jsonld-validation-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

  // Generate summary
  const validResults = results.filter(r => !r.error);
  if (validResults.length > 0) {
    const totalSchemas = validResults.reduce((sum, r) => sum + r.jsonLdFound, 0);
    const validLocalBusiness = validResults.reduce((sum, r) => 
      sum + r.schemas.filter(s => s.type === 'LocalBusiness' && s.valid).length, 0
    );
    const totalLocalBusiness = validResults.reduce((sum, r) => 
      sum + r.schemas.filter(s => s.type === 'LocalBusiness').length, 0
    );

    console.log('\n🔍 JSON-LD VALIDATION SUMMARY:');
    console.log(`Total JSON-LD schemas found: ${totalSchemas}`);
    console.log(`LocalBusiness schemas: ${validLocalBusiness}/${totalLocalBusiness} valid`);
    
    if (totalLocalBusiness > 0 && validLocalBusiness === totalLocalBusiness) {
      console.log('✅ All LocalBusiness schemas are valid!');
    } else if (totalLocalBusiness === 0) {
      console.log('⚠️  No LocalBusiness schemas found');
    } else {
      console.log('❌ Some LocalBusiness schemas are invalid');
    }
  }

  console.log(`\nFull report saved to: ${reportPath}`);
  
  return validResults.every(r => 
    r.schemas.filter(s => s.type === 'LocalBusiness').every(s => s.valid)
  );
}

if (require.main === module) {
  validateJsonLd().catch(console.error);
}

module.exports = validateJsonLd;