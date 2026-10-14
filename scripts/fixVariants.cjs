const fs = require('fs');
const path = require('path');

const allowed = new Set([
  'hero-split', 'hero-bento', 'hero-cinematic-dark', 'hero-editorial-luxury', 'hero-minimal-typography', 'hero-fullscreen-photo', 'hero-overlapping-card',
  'navbar-glass', 'navbar-minimal', 'navbar-floating', 'navbar-solid-pill',
  'services-grid', 'services-cards-accent', 'services-editorial-list', 'services-bento',
  'about-split-stats', 'about-story-timeline', 'about-quote-focus',
  'testimonials-quote-cards', 'testimonials-editorial', 'testimonials-minimal',
  'pricing-cards-featured', 'pricing-minimal-table',
  'faq-accordion', 'faq-two-column',
  'cta-banner-glow', 'cta-editorial-split', 'cta-minimal-center',
  'footer-multi-column', 'footer-minimal-clean', 'footer-dark-editorial',
  'doctor-grid', 'appointment-card-compact', 'departments-accordion',
  'courses-grid', 'faculty-cards', 'membership-tier-cards', 'classes-timetable',
  'menu-categorized', 'reservation-form-elegant', 'rooms-grid-luxury',
  'property-cards-modern', 'tech-matrix'
]);

const replacements = {
  'services-cards-accent': 'services-cards-accent',
  'cta-banner-glow': 'cta-banner-glow',
  'cta-banner-glow': 'cta-banner-glow',
  'cta-editorial-split': 'cta-editorial-split',
  'hero-minimal-typography': 'hero-minimal-typography'
};

const templatesDir = path.join(__dirname, '../src/data/templates');
const files = fs.readdirSync(templatesDir).filter(f => f.endsWith('.ts'));

for (const file of files) {
  const filePath = path.join(templatesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const [from, to] of Object.entries(replacements)) {
    if (content.includes(`"${from}"`) || content.includes(`'${from}'`)) {
      content = content.split(`"${from}"`).join(`"${to}"`);
      content = content.split(`'${from}'`).join(`'${to}'`);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated variants in ${file}`);
  }
}

// Also update the generator scripts so re-running them keeps the valid variants
const scriptsDir = path.join(__dirname, '../scripts');
const scriptFiles = fs.readdirSync(scriptsDir).filter(f => f.endsWith('.cjs'));

for (const file of scriptFiles) {
  const filePath = path.join(scriptsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const [from, to] of Object.entries(replacements)) {
    if (content.includes(`"${from}"`) || content.includes(`'${from}'`)) {
      content = content.split(`"${from}"`).join(`"${to}"`);
      content = content.split(`'${from}'`).join(`'${to}'`);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated generator script ${file}`);
  }
}

console.log('Variant normalization complete.');
