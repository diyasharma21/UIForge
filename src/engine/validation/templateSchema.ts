import { z } from 'zod';

export const SectionContentSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  badge: z.string().optional(),
  primaryButtonText: z.string().optional(),
  primaryButtonLink: z.string().optional(),
  secondaryButtonText: z.string().optional(),
  secondaryButtonLink: z.string().optional(),
  imageUrl: z.string().optional(),
  imageAlt: z.string().optional(),
  secondaryImageUrl: z.string().optional(),
  items: z
    .array(
      z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        badge: z.string().optional(),
        icon: z.string().optional(),
        price: z.string().optional(),
        meta: z.string().optional(),
        imageUrl: z.string().optional(),
        rating: z.number().optional(),
        authorName: z.string().optional(),
        authorRole: z.string().optional(),
      })
    )
    .optional(),
  stats: z
    .array(
      z.object({
        id: z.string(),
        label: z.string(),
        value: z.string(),
      })
    )
    .optional(),
  contactInfo: z
    .object({
      phone: z.string().optional(),
      email: z.string().optional(),
      address: z.string().optional(),
      hours: z.string().optional(),
    })
    .optional(),
  navLinks: z
    .array(
      z.object({
        label: z.string(),
        href: z.string(),
      })
    )
    .optional(),
  footerColumns: z
    .array(
      z.object({
        title: z.string(),
        links: z.array(z.object({ label: z.string(), href: z.string() })),
      })
    )
    .optional(),
  copyrightText: z.string().optional(),
});

export const SectionStylesSchema = z
  .object({
    paddingY: z.enum(['compact', 'normal', 'spacious']).optional(),
    textAlign: z.enum(['left', 'center', 'right']).optional(),
    customBg: z.string().optional(),
    customTextColor: z.string().optional(),
    customAccentColor: z.string().optional(),
    fontScale: z.number().optional(),
  })
  .optional();

export const SectionConfigSchema = z.object({
  id: z.string(),
  type: z.string(),
  variant: z.string(),
  visible: z.boolean().default(true),
  content: SectionContentSchema,
  styles: SectionStylesSchema,
});

export const TemplateConfigSchema = z.object({
  id: z.string().min(1, 'Template ID is required'),
  slug: z.string().min(1, 'Slug is required'),
  name: z.string().min(1, 'Name is required'),
  description: z.string(),
  industryId: z.string(),
  categoryId: z.string(),
  collectionId: z.string(),
  tags: z.array(z.string()),
  designStyle: z.string(),
  thumbnail: z.string().optional().default(''),
  featured: z.boolean().optional(),
  sections: z.array(SectionConfigSchema).min(1, 'At least one section is required'),
});

export type ValidatedTemplateConfig = z.infer<typeof TemplateConfigSchema>;

export function validateTemplate(data: unknown): {
  success: boolean;
  data?: ValidatedTemplateConfig;
  error?: string;
  errors?: string[];
} {
  const result = TemplateConfigSchema.safeParse(data);
  if (result.success) {
    return { success: true, data: result.data };
  } else {
    const errorMessages = result.error.issues.map(
      (issue) => `${issue.path.join('.')}: ${issue.message}`
    );
    return {
      success: false,
      error: errorMessages.join('; '),
      errors: errorMessages,
    };
  }
}
