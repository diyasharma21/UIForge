const fs = require('fs');
const path = require('path');

// Read categories directly from src/data/categories.ts
const catContent = fs.readFileSync(path.join(__dirname, '../src/data/categories.ts'), 'utf8');

// Match each object block in CATEGORIES
const catBlocks = catContent.split(/\{\s*id:/).slice(1);
const categories = catBlocks.map(block => {
  const id = (block.match(/^\s*['"]([^'"]+)['"]/) || [])[1];
  const name = (block.match(/name:\s*['"]([^'"]+)['"]/) || [])[1];
  const parentIndustry = (block.match(/parentIndustry:\s*['"]([^'"]+)['"]/) || [])[1];
  return { id, name, parentIndustry };
}).filter(c => c.id && c.parentIndustry);

console.log(`Parsed ${categories.length} categories from categories.ts`);

// Check template files in src/data/templates
const templatesDir = path.join(__dirname, '../src/data/templates');
const files = fs.readdirSync(templatesDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

const categoryCounts = {};
categories.forEach(c => categoryCounts[c.id] = 0);

let totalTemplates = 0;

files.forEach(f => {
  const content = fs.readFileSync(path.join(templatesDir, f), 'utf8');
  // Match categoryId: '...' or "categoryId": "..."
  const matches = [...content.matchAll(/["']?categoryId["']?\s*:\s*["']([^"']+)["']/g)];
  matches.forEach(m => {
    const catId = m[1];
    categoryCounts[catId] = (categoryCounts[catId] || 0) + 1;
    totalTemplates++;
  });
});

console.log(`Scanned ${files.length} template files, found ${totalTemplates} template entries.`);

const zeroCats = categories.filter(c => !categoryCounts[c.id] || categoryCounts[c.id] === 0);
console.log(`Categories with 0 templates: ${zeroCats.length} out of ${categories.length}`);

// Group by industry
const byIndustry = {};
zeroCats.forEach(c => {
  if (!byIndustry[c.parentIndustry]) byIndustry[c.parentIndustry] = [];
  byIndustry[c.parentIndustry].push(c);
});

console.log('\n--- ZERO CATEGORIES BY INDUSTRY ---');
for (const [ind, cats] of Object.entries(byIndustry)) {
  console.log(`\n${ind} (${cats.length} missing):`);
  cats.forEach(c => console.log(`  - ${c.id}: "${c.name}"`));
}

// Write zero categories to JSON
fs.writeFileSync(path.join(__dirname, 'zeroCategories.json'), JSON.stringify(zeroCats, null, 2), 'utf8');
console.log(`\nSaved ${zeroCats.length} zero categories to scripts/zeroCategories.json`);
