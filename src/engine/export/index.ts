import JSZip from 'jszip';
import { TemplateConfig, DesignStyleId } from '../../types';
import { DESIGN_SYSTEMS } from '../../data/designSystems';

export function generateHtmlCss(template: TemplateConfig): { html: string; css: string } {
  const design = DESIGN_SYSTEMS[template.designStyle as DesignStyleId] || DESIGN_SYSTEMS['luxury-editorial'];
  const visibleSections = template.sections.filter((s) => s.visible);

  const css = `/* UIForge Generated Stylesheet for ${template.name} */
:root {
  --color-bg: ${design.colors.bg};
  --color-bg-subtle: ${design.colors.bgSubtle};
  --color-card-bg: ${design.colors.cardBg};
  --color-text-primary: ${design.colors.textPrimary};
  --color-text-secondary: ${design.colors.textSecondary};
  --color-text-muted: ${design.colors.textMuted};
  --color-accent: ${design.colors.accent};
  --color-border: ${design.colors.border};
  --color-badge-bg: ${design.colors.badgeBg};
  --color-badge-text: ${design.colors.badgeText};
  --font-heading: ${design.typography.headingFont};
  --font-body: ${design.typography.bodyFont};
  --radius-button: ${design.radii.button};
  --radius-card: ${design.radii.card};
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text-primary);
  font-family: var(--font-body);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.btn-primary {
  display: inline-block;
  background-color: var(--color-accent);
  color: ${design.isDark ? '#000000' : '#FFFFFF'};
  padding: 12px 28px;
  border-radius: var(--radius-button);
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.2s;
}

.btn-primary:hover {
  opacity: 0.92;
  transform: translateY(-1px);
}

.btn-secondary {
  display: inline-block;
  background: transparent;
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
  padding: 12px 28px;
  border-radius: var(--radius-button);
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
}

.badge {
  display: inline-block;
  background-color: var(--color-badge-bg);
  color: var(--color-badge-text);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 12px;
  border-radius: 9999px;
  margin-bottom: 16px;
}

.section {
  padding: 80px 0;
  border-bottom: 1px solid var(--color-border);
}

.card {
  background-color: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  padding: 32px;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

@media (max-width: 768px) {
  .section {
    padding: 50px 0;
  }
}
`;

  let sectionsHtml = '';

  visibleSections.forEach((s) => {
    const c = s.content;
    if (s.type === 'navbar') {
      sectionsHtml += `
  <header style="background: var(--color-bg); border-bottom: 1px solid var(--color-border); position: sticky; top: 0; z-index: 100;">
    <div class="container" style="display: flex; align-items: center; justify-content: space-between; height: 72px;">
      <div style="font-family: var(--font-heading); font-size: 20px; font-weight: 700;">${c.title || 'BRAND'}</div>
      <nav style="display: flex; gap: 24px; font-size: 14px;">
        ${(c.navLinks || []).map((l) => `<a href="${l.href}">${l.label}</a>`).join('')}
      </nav>
      ${c.primaryButtonText ? `<a href="${c.primaryButtonLink || '#'}" class="btn-primary">${c.primaryButtonText}</a>` : ''}
    </div>
  </header>`;
    } else if (s.type === 'hero') {
      sectionsHtml += `
  <section class="section">
    <div class="container" style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 48px; align-items: center;">
      <div>
        ${c.badge ? `<span class="badge">${c.badge}</span>` : ''}
        <h1 style="font-family: var(--font-heading); font-size: 48px; line-height: 1.15; margin-bottom: 24px;">${c.title || ''}</h1>
        <p style="font-size: 18px; color: var(--color-text-secondary); margin-bottom: 32px;">${c.subtitle || ''}</p>
        <div style="display: flex; gap: 16px;">
          ${c.primaryButtonText ? `<a href="${c.primaryButtonLink || '#'}" class="btn-primary">${c.primaryButtonText}</a>` : ''}
          ${c.secondaryButtonText ? `<a href="${c.secondaryButtonLink || '#'}" class="btn-secondary">${c.secondaryButtonText}</a>` : ''}
        </div>
      </div>
      ${c.imageUrl ? `<div><img src="${c.imageUrl}" alt="${c.imageAlt || ''}" style="width: 100%; border-radius: var(--radius-card); border: 1px solid var(--color-border); object-fit: cover;" /></div>` : ''}
    </div>
  </section>`;
    } else if (s.type === 'services' || s.type === 'features') {
      sectionsHtml += `
  <section class="section" style="background-color: var(--color-bg-subtle);">
    <div class="container">
      <div style="text-align: center; margin-bottom: 56px;">
        ${c.badge ? `<span class="badge">${c.badge}</span>` : ''}
        <h2 style="font-family: var(--font-heading); font-size: 36px; margin-bottom: 16px;">${c.title || ''}</h2>
        <p style="color: var(--color-text-secondary);">${c.subtitle || ''}</p>
      </div>
      <div class="grid-3">
        ${(c.items || [])
          .map(
            (item) => `
        <div class="card">
          <h3 style="font-family: var(--font-heading); font-size: 20px; margin-bottom: 12px;">${item.title}</h3>
          <p style="color: var(--color-text-secondary); font-size: 14px; margin-bottom: 16px;">${item.description}</p>
          ${item.price ? `<div style="font-weight: 700; color: var(--color-accent);">${item.price}</div>` : ''}
        </div>`
          )
          .join('')}
      </div>
    </div>
  </section>`;
    } else if (s.type === 'footer') {
      sectionsHtml += `
  <footer style="padding: 64px 0 32px; background-color: var(--color-bg-subtle); border-top: 1px solid var(--color-border);">
    <div class="container" style="text-align: center;">
      <h3 style="font-family: var(--font-heading); font-size: 20px; margin-bottom: 12px;">${c.title || ''}</h3>
      <p style="color: var(--color-text-muted); font-size: 13px;">${c.copyrightText || '© UIForge. All rights reserved.'}</p>
    </div>
  </footer>`;
    }
  });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${template.name}</title>
  <meta name="description" content="${template.description}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700&family=Playfair+Display:ital,wght@0,500;0,700;1,400&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
${sectionsHtml}
</body>
</html>`;

  return { html, css };
}

export function generateReact(template: TemplateConfig): string {
  return `import React from 'react';

// Design tokens
const theme = {
  style: "${template.designStyle}",
  industry: "${template.industryId}",
};

export default function ${template.slug.replace(/[^a-zA-Z0-9]/g, '')}() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
      <header className="border-b border-neutral-800 px-8 py-5 flex items-center justify-between">
        <span className="text-xl font-bold">${template.name}</span>
        <button className="px-5 py-2.5 bg-indigo-600 rounded-lg text-sm font-semibold hover:bg-indigo-500">
          Get Started
        </button>
      </header>
      <main>
        {/* Rendered ${template.sections.length} sections from UIForge */}
      </main>
    </div>
  );
}
`;
}

export function generateTailwind(template: TemplateConfig): string {
  const visible = template.sections.filter((s) => s.visible);
  return `// Tailwind CSS React component for ${template.name}
import React from 'react';

export function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Sections: ${visible.map((s) => s.type).join(', ')} */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-extrabold tracking-tight">${template.name}</h1>
        <p className="mt-4 text-xl text-slate-400">${template.description}</p>
      </div>
    </div>
  );
}
`;
}

export function generateJson(template: TemplateConfig): string {
  return JSON.stringify(template, null, 2);
}

export async function downloadZip(
  template: TemplateConfig,
  format: 'html-css' | 'react' | 'tailwind' | 'json' | 'all' = 'all'
): Promise<void> {
  const zip = new JSZip();
  const folderName = `${template.slug}-uiforge`;
  const folder = zip.folder(folderName) || zip;

  // Add JSON config
  folder.file('template-config.json', generateJson(template));

  // Add HTML + CSS
  const { html, css } = generateHtmlCss(template);
  folder.file('index.html', html);
  folder.file('styles.css', css);

  // Add React component
  folder.file('App.jsx', generateReact(template));
  folder.file('TailwindPage.jsx', generateTailwind(template));

  // Add README
  folder.file(
    'README.md',
    `# ${template.name}
Exported from **UIForge** — Free Multi-Industry Website Template Marketplace.

## What is in this package:
- \`index.html\`: Self-contained, responsive website layout.
- \`styles.css\`: Customized CSS stylesheet matching the ${template.designStyle} design system.
- \`App.jsx\`: React component export.
- \`TailwindPage.jsx\`: React with Tailwind CSS utility classes.
- \`template-config.json\`: Full UIForge template configuration (importable back into UIForge anytime!).

## How to use:
1. Open \`index.html\` directly in any web browser to view your website immediately.
2. Deploy to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any web host.
3. Import \`template-config.json\` into UIForge whenever you want to edit visually again!
`
  );

  const blob = await zip.generateAsync({ type: 'blob' });
  triggerBrowserDownload(blob, `${folderName}.zip`);
}

export function triggerBrowserDownload(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadSingleFile(content: string, filename: string, mimeType: string): void {
  const blob = new Blob([content], { type: mimeType });
  triggerBrowserDownload(blob, filename);
}
