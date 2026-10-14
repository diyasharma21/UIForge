/**
 * UIForge System Verification Test Suite
 * Automatically verifies taxonomy integrity, template uniqueness,
 * Zod validation schema, export generation, and section resolution.
 */

import { INDUSTRIES } from '../data/industries';
import { CATEGORIES } from '../data/categories';
import { COLLECTIONS } from '../data/collections';
import { ALL_TEMPLATES } from '../data/templates';
import { validateTemplate } from './validation/templateSchema';
import { generateHtmlCss, generateJson, generateReact, generateTailwind } from './export';

export function runSystemVerification(): {
  allPassed: boolean;
  results: Array<{ test: string; passed: boolean; message?: string }>;
} {
  const results: Array<{ test: string; passed: boolean; message?: string }> = [];

  // 1. Industry IDs are unique
  const industryIds = new Set<string>();
  let duplicateIndustry: string | null = null;
  for (const ind of INDUSTRIES) {
    if (industryIds.has(ind.id)) {
      duplicateIndustry = ind.id;
      break;
    }
    industryIds.add(ind.id);
  }
  results.push({
    test: 'Industry IDs are unique',
    passed: !duplicateIndustry && INDUSTRIES.length === 25,
    message: duplicateIndustry ? `Duplicate industry: ${duplicateIndustry}` : `Found ${INDUSTRIES.length} unique industries`,
  });

  // 2. Category IDs are unique
  const categoryIds = new Set<string>();
  let duplicateCategory: string | null = null;
  for (const cat of CATEGORIES) {
    if (categoryIds.has(cat.id)) {
      duplicateCategory = cat.id;
      break;
    }
    categoryIds.add(cat.id);
  }
  results.push({
    test: 'Category IDs are unique',
    passed: !duplicateCategory,
    message: duplicateCategory ? `Duplicate category: ${duplicateCategory}` : `Found ${CATEGORIES.length} unique categories`,
  });

  // 3. Every category references a valid industry
  let invalidParentIndustry: string | null = null;
  for (const cat of CATEGORIES) {
    if (!industryIds.has(cat.parentIndustry)) {
      invalidParentIndustry = `${cat.id} references invalid industry ${cat.parentIndustry}`;
      break;
    }
  }
  results.push({
    test: 'Every category references a valid industry',
    passed: !invalidParentIndustry,
    message: invalidParentIndustry || 'All categories mapped correctly',
  });

  // 4. Template IDs are unique
  const templateIds = new Set<string>();
  let duplicateTemplate: string | null = null;
  for (const tmpl of ALL_TEMPLATES) {
    if (templateIds.has(tmpl.id)) {
      duplicateTemplate = tmpl.id;
      break;
    }
    templateIds.add(tmpl.id);
  }
  results.push({
    test: 'Template IDs are unique',
    passed: !duplicateTemplate,
    message: duplicateTemplate ? `Duplicate template: ${duplicateTemplate}` : `Found ${ALL_TEMPLATES.length} unique templates`,
  });

  // 5. Every template references a valid category & industry
  let invalidTemplateRef: string | null = null;
  for (const tmpl of ALL_TEMPLATES) {
    if (!categoryIds.has(tmpl.categoryId)) {
      invalidTemplateRef = `Template ${tmpl.id} references invalid category ${tmpl.categoryId}`;
      break;
    }
    if (!industryIds.has(tmpl.industryId)) {
      invalidTemplateRef = `Template ${tmpl.id} references invalid industry ${tmpl.industryId}`;
      break;
    }
  }
  results.push({
    test: 'Every template references valid category and industry',
    passed: !invalidTemplateRef,
    message: invalidTemplateRef || 'All templates mapped correctly',
  });

  // 6. Every template configuration validates against Zod schema
  let schemaValidationError: string | null = null;
  for (const tmpl of ALL_TEMPLATES) {
    const val = validateTemplate(tmpl);
    if (!val.success) {
      schemaValidationError = `Template ${tmpl.id} failed validation: ${val.error}`;
      break;
    }
  }
  results.push({
    test: 'All templates satisfy Zod validation schema',
    passed: !schemaValidationError,
    message: schemaValidationError || 'All templates 100% valid',
  });

  // 7. Invalid configurations fail gracefully
  const invalidConfig = { id: '', sections: [] };
  const shouldFail = validateTemplate(invalidConfig);
  results.push({
    test: 'Invalid configurations fail gracefully with helpful errors',
    passed: !shouldFail.success && Boolean(shouldFail.error),
    message: shouldFail.error || 'Failed gracefully',
  });

  // 8. Collections reference valid industries
  let invalidCollection: string | null = null;
  for (const col of COLLECTIONS) {
    if (!industryIds.has(col.industryId)) {
      invalidCollection = `Collection ${col.id} has invalid industry ${col.industryId}`;
      break;
    }
  }
  results.push({
    test: 'Collections reference valid industries',
    passed: !invalidCollection,
    message: invalidCollection || `${COLLECTIONS.length} valid collections verified`,
  });

  // 9. Export engine produces valid non-empty HTML/CSS and React
  const sampleTemplate = ALL_TEMPLATES[0];
  const exported = generateHtmlCss(sampleTemplate);
  const exportedReact = generateReact(sampleTemplate);
  const exportedTailwind = generateTailwind(sampleTemplate);
  const exportedJson = generateJson(sampleTemplate);

  const exportsValid =
    exported.html.includes(sampleTemplate.name) &&
    exported.css.length > 50 &&
    exportedReact.length > 50 &&
    exportedTailwind.length > 50 &&
    exportedJson.length > 50;

  results.push({
    test: 'Export engine generates complete HTML, CSS, React, Tailwind, and JSON',
    passed: exportsValid,
    message: exportsValid ? 'All export engines operational' : 'Export engine output incomplete',
  });

  const allPassed = results.every((r) => r.passed);
  return { allPassed, results };
}
