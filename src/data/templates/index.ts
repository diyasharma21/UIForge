import { TemplateConfig, IndustryId } from '../../types';
import { HEALTHCARE_TEMPLATES } from './healthcareTemplates';
import { HEALTHCARE_SPECIALISTS_TEMPLATES } from './healthcareSpecialistsTemplates';
import { EDUCATION_TEMPLATES } from './educationTemplates';
import { EDUCATION_SPECIALISTS_TEMPLATES } from './educationSpecialistsTemplates';
import { FOOD_TEMPLATES } from './foodTemplates';
import { FITNESS_TEMPLATES } from './fitnessTemplates';
import { BEAUTY_TEMPLATES } from './beautyTemplates';
import { HOSPITALITY_TEMPLATES } from './hospitalityTemplates';
import { TECH_TEMPLATES } from './techTemplates';
import { BUSINESS_TEMPLATES } from './businessTemplates';
import { RETAIL_TEMPLATES } from './retailTemplates';
import { REAL_ESTATE_TEMPLATES } from './realEstateTemplates';
import { FINANCE_TEMPLATES } from './financeTemplates';
import { CREATIVE_TEMPLATES } from './creativeTemplates';
import { PROPERTY_RETAIL_TEMPLATES } from './propertyRetailTemplates';
import { REMAINING_SPECIALISTS_TEMPLATES } from './remainingSpecialistsTemplates';

export {
  HEALTHCARE_TEMPLATES,
  HEALTHCARE_SPECIALISTS_TEMPLATES,
  EDUCATION_TEMPLATES,
  EDUCATION_SPECIALISTS_TEMPLATES,
  FOOD_TEMPLATES,
  FITNESS_TEMPLATES,
  BEAUTY_TEMPLATES,
  HOSPITALITY_TEMPLATES,
  TECH_TEMPLATES,
  BUSINESS_TEMPLATES,
  RETAIL_TEMPLATES,
  REAL_ESTATE_TEMPLATES,
  FINANCE_TEMPLATES,
  CREATIVE_TEMPLATES,
  PROPERTY_RETAIL_TEMPLATES,
  REMAINING_SPECIALISTS_TEMPLATES,
};

export const ALL_TEMPLATES: TemplateConfig[] = [
  ...HEALTHCARE_TEMPLATES,
  ...HEALTHCARE_SPECIALISTS_TEMPLATES,
  ...EDUCATION_TEMPLATES,
  ...EDUCATION_SPECIALISTS_TEMPLATES,
  ...FOOD_TEMPLATES,
  ...FITNESS_TEMPLATES,
  ...BEAUTY_TEMPLATES,
  ...HOSPITALITY_TEMPLATES,
  ...TECH_TEMPLATES,
  ...BUSINESS_TEMPLATES,
  ...RETAIL_TEMPLATES,
  ...REAL_ESTATE_TEMPLATES,
  ...FINANCE_TEMPLATES,
  ...CREATIVE_TEMPLATES,
  ...REMAINING_SPECIALISTS_TEMPLATES,
];

export function getTemplateById(id: string): TemplateConfig | undefined {
  return ALL_TEMPLATES.find((t) => t.id === id || t.slug === id);
}

export function getTemplatesByCategory(categoryId: string): TemplateConfig[] {
  return ALL_TEMPLATES.filter((t) => t.categoryId === categoryId);
}

export function getTemplatesByIndustry(industryId: IndustryId): TemplateConfig[] {
  return ALL_TEMPLATES.filter((t) => t.industryId === industryId);
}

export function getFeaturedTemplates(): TemplateConfig[] {
  return ALL_TEMPLATES.filter((t) => t.featured);
}

export function getTemplateCountByCategory(categoryId: string): number {
  return ALL_TEMPLATES.filter((t) => t.categoryId === categoryId).length;
}

export function getTemplateCountByIndustry(industryId: IndustryId): number {
  return ALL_TEMPLATES.filter((t) => t.industryId === industryId).length;
}
