const fs = require('fs');
const path = require('path');

function writeTemplateFile(filename, varName, templates) {
  const filePath = path.join(__dirname, '../src/data/templates', filename);
  const content = `import { TemplateConfig } from '../../types';\n\nexport const ${varName}: TemplateConfig[] = ${JSON.stringify(templates, null, 2)};\n`;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Wrote ${templates.length} templates to ${filename}`);
}

module.exports = { writeTemplateFile };
