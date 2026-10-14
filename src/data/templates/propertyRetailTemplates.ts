import { TemplateConfig } from '../../types';
import { RETAIL_TEMPLATES } from './retailTemplates';
import { REAL_ESTATE_TEMPLATES } from './realEstateTemplates';

export const PROPERTY_RETAIL_TEMPLATES: TemplateConfig[] = [
  ...RETAIL_TEMPLATES,
  ...REAL_ESTATE_TEMPLATES,
];
