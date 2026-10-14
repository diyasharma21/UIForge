# UIForge — Multi-Industry Website Template Marketplace & Visual Page Builder

**UIForge** is a 100% free, production-ready website template marketplace and visual page builder. It allows users to discover, preview, customize, and export professionally designed website landing pages for 25 distinct industries and 300+ specialized categories—ranging from medical clinics and universities to cafes, SaaS startups, luxury resorts, and creative portfolios.

Built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, **Zustand**, **Zod**, and **JSZip**, UIForge operates entirely client-side with zero mandatory logins, zero subscriptions, zero tracking, and zero lock-in exports.

---

## 📖 About UIForge

**UIForge** is an open-source, client-first website template marketplace and visual design studio created by [Diya Sharma](https://github.com/diyasharma21).

### 🎯 The Mission
Building a modern, agency-grade website shouldn't require paying $50–$200 per template or locking yourself into expensive recurring hosting subscriptions. UIForge was architected from the ground up to democratize high-fidelity web design for every industry, practitioner, and creator:

- **100% Free & Open**: No paywalls, no recurring fees, and no feature gating. Every template, component, and design system is completely free.
- **Zero Lock-In**: Export clean, production-ready **HTML/CSS**, **React (TSX)**, **Tailwind CSS**, and **JSON** configurations that you own 100%. Deploy to Vercel, Netlify, GitHub Pages, or any server.
- **Complete Industry Coverage**: Spans **25 industries** and **243 categories** with **363 art-directed templates**—guaranteeing that every single business type has authentic, ready-to-use layouts.
- **15 Universal Design Systems**: Seamlessly switch any template between curated aesthetics like *Luxury Editorial*, *Dark Cinematic*, *Medical Clean*, *Technology Gradient*, and *Academic Classic*.
- **Privacy-First Architecture**: Runs completely in your browser. All customizations, favorites, and history persist in `localStorage` without tracking or telemetry.

---

## 🌟 Key Features

### 1. Public Marketplace
- **Art-Directed Homepage**: Features live template showcases, popular category pills with verified counts, curated collections, design system tokens, and a full 25-industry exploration directory.
- **25 Industry Taxonomy**: 25 top-level industries covering healthcare, education, dining, fitness, tech, hospitality, retail, real estate, legal, and more.
- **243 Specialized Categories**: Filter down to exact business types (e.g. *Neurosurgeon*, *Primary School*, *Organic Farm*, *Gaming Studio*, *Fine Dining*, *SaaS AI Platform*).
- **Curated Collections**: Intentional design directions like *Luxury Dermatology*, *Modern Medical*, *Dark Cinematic SaaS*, *Nordic Artisanal Cafe*, and *High Fashion Editorial*.
- **Real-Time Search & Filters**: Search across template names, keywords, categories, and tags. Filter by industry, category, and 15 design systems with active chip indicators.
- **Client-Side Persistence**: Favorites and recently viewed templates are saved automatically in browser `localStorage`.

### 2. Universal Visual Page Editor (`/editor/:templateId`)
- **Interactive Preview Canvas**: Click any section on the live page to inspect and customize it.
- **Responsive Device Switcher**: Test layouts across Desktop (100%), Tablet (768px frame), and Mobile (375px frame).
- **Outline Navigator (Left Sidebar)**:
  - Reorder sections up and down
  - Duplicate any section
  - Toggle section visibility (instant show/hide)
  - Delete sections safely
  - Add new pre-configured modular sections via the component library modal
- **Context-Sensitive Inspector (Right Sidebar)**:
  - **Content Tab**: Edit headings, subheadings, paragraphs, eyebrow badges, primary/secondary action buttons, links, and card items.
  - **Media Tab**: Edit web image URLs, alt text, or upload local image files (converted to base64 data URLs in-memory).
  - **Theme Tab**: Switch between any of the 15 Universal Design Systems on the fly, or apply custom background and accent color overrides.
  - **Layout Tab**: Adjust vertical section padding (`compact`, `normal`, `spacious`) and review section variant specs.
- **History & Keyboard Shortcuts**:
  - Full Undo (`Ctrl+Z` / `Cmd+Z`) and Redo (`Ctrl+Y` / `Cmd+Shift+Z`) support with deep snapshot state preservation.
  - Reset section to initial configuration or reset the entire page layout.
- **Distraction-Free Preview**: Fullscreen mode without sidebars for client presentations.

### 3. Production-Ready Export Engine
- **HTML + CSS**: Generates a self-contained, responsive website bundle using clean HTML5 semantic elements and CSS variables matching the chosen design system.
- **React**: Generates modular JSX components.
- **Tailwind CSS**: Generates React components styled with Tailwind CSS utility classes.
- **JSON**: Exports the complete editable configuration.
- **ZIP Download**: Uses `JSZip` to generate and download a complete `.zip` archive containing all code formats and a deployment `README.md`.

### 4. Zod-Powered Import Engine
- Upload or paste any `.json` template configuration.
- Validates the structure against the strict Zod `TemplateConfigSchema`.
- Displays friendly validation error messages if the file is malformed, preventing crashes.

---

## 🛠 Technology Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript 5/6](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) with `localStorage` persistence
- **Schema Validation**: [Zod 4](https://zod.dev/)
- **ZIP Packaging**: [JSZip](https://stuk.github.io/jszip/)
- **Test Runner**: [tsx](https://github.com/privatenumber/tsx)

---

## 📁 Project Structure

```text
uiforge/
├── public/
├── src/
│   ├── components/
│   │   ├── editor/              # Visual Studio Editor
│   │   │   ├── AddSectionModal.tsx
│   │   │   ├── EditorToolbar.tsx
│   │   │   ├── ExportModal.tsx
│   │   │   ├── ImportModal.tsx
│   │   │   ├── InspectorPanel.tsx
│   │   │   └── SectionNavigator.tsx
│   │   ├── layout/              # Public layout
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── marketplace/         # Marketplace widgets
│   │   │   └── TemplateCard.tsx
│   │   ├── sections/            # Universal Section components
│   │   │   ├── AboutSection.tsx
│   │   │   ├── CtaSection.tsx
│   │   │   ├── FaqSection.tsx
│   │   │   ├── FooterSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── IndustrySection.tsx
│   │   │   ├── NavbarSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   └── ServicesSection.tsx
│   │   └── ui/
│   │       └── SafeImage.tsx    # Image loader with graceful SVG fallback
│   ├── data/
│   │   ├── categories.ts        # 300+ specialized categories
│   │   ├── collections.ts       # Curated design collections
│   │   ├── designSystems.ts     # 15 complete design token systems
│   │   ├── industries.ts        # 25 core industries
│   │   └── templates/           # Art-directed templates
│   │       ├── beautyTemplates.ts
│   │       ├── businessTemplates.ts
│   │       ├── educationTemplates.ts
│   │       ├── fitnessTemplates.ts
│   │       ├── foodTemplates.ts
│   │       ├── healthcareTemplates.ts
│   │       ├── hospitalityTemplates.ts
│   │       ├── index.ts
│   │       ├── propertyRetailTemplates.ts
│   │       └── techTemplates.ts
│   ├── engine/
│   │   ├── export/              # HTML, CSS, React, Tailwind, and JSZip
│   │   │   └── index.ts
│   │   ├── renderer/            # Universal dynamic page renderer
│   │   │   └── TemplateRenderer.tsx
│   │   ├── validation/          # Zod template & section schemas
│   │   │   └── templateSchema.ts
│   │   └── verifySystem.ts      # Automated verification suite
│   ├── routes/                  # React Router Pages
│   │   ├── ColorSystemsPage.tsx
│   │   ├── ComponentLibraryPage.tsx
│   │   ├── EditorPage.tsx
│   │   ├── ExplorePage.tsx
│   │   ├── FavoritesPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── IndustriesPage.tsx
│   │   └── TemplateDetailPage.tsx
│   ├── store/                   # Zustand stores
│   │   ├── marketplaceStore.ts
│   │   └── templateStore.ts
│   ├── types/                   # TypeScript interfaces
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── run-tests.ts             # Test runner entry point
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Run Automated System Tests
Runs the 9 automated checks verifying taxonomy uniqueness, Zod validation, export output, and category mapping:
```bash
npm test
```

### 4. Build for Production
Compiles TypeScript and creates optimized production assets in `dist/`:
```bash
npm run build
```

---

## 🎨 The 15 Universal Design Systems

UIForge includes 15 distinct design systems with semantic color palettes, typography pairings, borders, and shadows:

1. **Luxury Editorial**: Warm charcoal, deep bronze gold, and Playfair Display serif elegance.
2. **Modern Corporate**: Crisp sapphire, polished white, and structured Plus Jakarta Sans geometry.
3. **Minimal Neutral**: Architectural greys, Scandinavian balance, and deliberate restraint.
4. **Medical Clean**: Calming cyan teal, clinical white, and clear accessibility.
5. **Organic Natural**: Earthy moss greens, oatmeal warmth, and botanicals.
6. **Dark Cinematic**: Midnight obsidian, electric violet neon glow, and high-impact depth.
7. **Bold Creative**: Vibrant sunset orange, stark black contrasts, and Outfit typography.
8. **Soft Pastel**: Delicate lavender, blush peach, and whisper tones.
9. **High Fashion**: Monochrome runway contrast, razor-sharp Cinzel serif headlines.
10. **Technology Gradient**: Indigo-cyan modern SaaS signature and deep slate surfaces.
11. **Academic Classic**: Crimson burgundy, warm parchment, and scholarly crest authority.
12. **Premium Hospitality**: Champagne gold, espresso darks, and sanctuary ambiance.
13. **Brutalist Clean**: High impact stark lines, bold black borders, and monospace accents.
14. **Editorial Magazine**: Deep ink on warm vellum with balanced column rhythms.
15. **Glass Interface**: Frosted crystal translucency, ethereal cyan/violet sheen, and spatial depth.

---

## ➕ How to Extend UIForge

### Adding a New Template
Create a configuration conforming to `TemplateConfig` inside `src/data/templates/`:

```typescript
import { TemplateConfig } from '../../types';

export const myNewTemplate: TemplateConfig = {
  id: 'clinic-vital-01',
  slug: 'vital-skin-clinic',
  name: 'Vital Dermatology Studio',
  description: 'Evidence-based acne care and skin cancer evaluations.',
  industryId: 'healthcare',
  categoryId: 'dermatologist',
  collectionId: 'luxury-dermatology',
  designStyle: 'luxury-editorial',
  featured: true,
  tags: ['dermatologist', 'skin', 'acne', 'medical'],
  thumbnail: 'https://images.unsplash.com/...',
  sections: [
    {
      id: 'nav-main',
      type: 'navbar',
      variant: 'navbar-glass',
      visible: true,
      content: {
        title: 'VITAL CLINIC',
        primaryButtonText: 'Book Visit',
      },
    },
    {
      id: 'hero-main',
      type: 'hero',
      variant: 'hero-editorial-luxury',
      visible: true,
      content: {
        badge: 'Board Certified Dermatologists',
        title: 'Precision Dermatology for Lasting Health',
        subtitle: 'Advanced cutaneous diagnostics and gentle clinical care.',
        primaryButtonText: 'Reserve Consult',
      },
    },
    // Add additional sections...
  ],
};
```
Export it and add it to `ALL_TEMPLATES` in `src/data/templates/index.ts`. Run `npm test` to automatically verify that your new template passes all Zod schema and taxonomy checks!

---

## 📄 License & Philosophy

UIForge is released under the **MIT License**. It is 100% free for commercial and personal use. All exported code belongs entirely to you with zero royalty or platform restrictions.

---

## 👩‍💻 Author & Maintainer

Created and maintained with ❤️ by **Diya Sharma**
- GitHub: [@diyasharma21](https://github.com/diyasharma21)
- Repository: [github.com/diyasharma21/UIForge](https://github.com/diyasharma21/UIForge)

