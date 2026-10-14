export type IndustryId =
  | 'healthcare'
  | 'education'
  | 'food-beverage'
  | 'fitness-wellness'
  | 'beauty-aesthetics'
  | 'technology'
  | 'business-services'
  | 'retail-ecommerce'
  | 'hospitality-travel'
  | 'real-estate'
  | 'finance-insurance'
  | 'automotive'
  | 'creative-portfolio'
  | 'entertainment-media'
  | 'agriculture-environment'
  | 'pets-animals'
  | 'events-weddings'
  | 'legal-public'
  | 'community-orgs'
  | 'industrial-mfg'
  | 'sports-recreation'
  | 'personal-services'
  | 'transport-logistics'
  | 'science-research'
  | 'personal-brands';

export interface Category {
  id: string;
  name: string;
  slug: string;
  parentIndustry: IndustryId;
  description: string;
  keywords: string[];
  tags: string[];
  availableCollections: string[];
}

export interface Industry {
  id: IndustryId;
  name: string;
  slug: string;
  description: string;
  iconName: string;
  keywords: string[];
  categoryIds: string[];
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  categoryIds: string[];
  industryId: IndustryId;
  designStyle: string;
  featured?: boolean;
}

export type DesignStyleId =
  | 'luxury-editorial'
  | 'modern-corporate'
  | 'minimal-neutral'
  | 'medical-clean'
  | 'organic-natural'
  | 'dark-cinematic'
  | 'bold-creative'
  | 'soft-pastel'
  | 'high-fashion'
  | 'technology-gradient'
  | 'academic-classic'
  | 'premium-hospitality'
  | 'brutalist-clean'
  | 'editorial-magazine'
  | 'glass-interface';

export interface DesignSystem {
  id: DesignStyleId;
  name: string;
  description: string;
  colors: {
    bg: string;
    bgSubtle: string;
    cardBg: string;
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    accent: string;
    accentHover: string;
    border: string;
    badgeBg: string;
    badgeText: string;
  };
  typography: {
    headingFont: string;
    bodyFont: string;
    headingWeight: string;
    bodyWeight: string;
  };
  radii: {
    badge: string;
    button: string;
    card: string;
  };
  shadow: string;
  isDark: boolean;
}

export type SectionType =
  | 'navbar'
  | 'hero'
  | 'about'
  | 'services'
  | 'features'
  | 'pricing'
  | 'testimonials'
  | 'gallery'
  | 'faq'
  | 'team'
  | 'stats'
  | 'contact'
  | 'cta'
  | 'footer'
  // Industry specialized
  | 'doctor-profile'
  | 'appointment-booking'
  | 'medical-departments'
  | 'course-catalog'
  | 'faculty-showcase'
  | 'membership-plans'
  | 'class-schedule'
  | 'menu-catalog'
  | 'table-reservation'
  | 'room-showcase'
  | 'property-listing'
  | 'tech-specs-comparison';

export type SectionVariant =
  // Hero variants
  | 'hero-split'
  | 'hero-bento'
  | 'hero-cinematic-dark'
  | 'hero-editorial-luxury'
  | 'hero-minimal-typography'
  | 'hero-fullscreen-photo'
  | 'hero-overlapping-card'
  // Navbar variants
  | 'navbar-glass'
  | 'navbar-minimal'
  | 'navbar-floating'
  | 'navbar-solid-pill'
  // Services variants
  | 'services-grid'
  | 'services-cards-accent'
  | 'services-editorial-list'
  | 'services-bento'
  // About variants
  | 'about-split-stats'
  | 'about-story-timeline'
  | 'about-quote-focus'
  // Testimonials variants
  | 'testimonials-quote-cards'
  | 'testimonials-editorial'
  | 'testimonials-minimal'
  // Pricing variants
  | 'pricing-cards-featured'
  | 'pricing-minimal-table'
  // FAQ variants
  | 'faq-accordion'
  | 'faq-two-column'
  // CTA variants
  | 'cta-banner-glow'
  | 'cta-editorial-split'
  | 'cta-minimal-center'
  // Footer variants
  | 'footer-multi-column'
  | 'footer-minimal-clean'
  | 'footer-dark-editorial'
  // Specialized variants
  | 'doctor-grid'
  | 'appointment-card-compact'
  | 'departments-accordion'
  | 'courses-grid'
  | 'faculty-cards'
  | 'membership-tier-cards'
  | 'classes-timetable'
  | 'menu-categorized'
  | 'reservation-form-elegant'
  | 'rooms-grid-luxury'
  | 'property-cards-modern'
  | 'tech-matrix';

export interface SectionContent {
  title?: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  imageUrl?: string;
  imageAlt?: string;
  secondaryImageUrl?: string;
  items?: Array<{
    id: string;
    title: string;
    description: string;
    badge?: string;
    icon?: string;
    price?: string;
    meta?: string;
    imageUrl?: string;
    rating?: number;
    authorName?: string;
    authorRole?: string;
  }>;
  stats?: Array<{
    id: string;
    label: string;
    value: string;
  }>;
  contactInfo?: {
    phone?: string;
    email?: string;
    address?: string;
    hours?: string;
  };
  navLinks?: Array<{
    label: string;
    href: string;
  }>;
  footerColumns?: Array<{
    title: string;
    links: Array<{ label: string; href: string }>;
  }>;
  copyrightText?: string;
}

export interface SectionStyles {
  paddingY?: 'compact' | 'normal' | 'spacious';
  textAlign?: 'left' | 'center' | 'right';
  customBg?: string;
  customTextColor?: string;
  customAccentColor?: string;
  fontScale?: number;
}

export interface SectionConfig {
  id: string;
  type: SectionType;
  variant: SectionVariant;
  visible: boolean;
  content: SectionContent;
  styles?: SectionStyles;
}

export interface TemplateConfig {
  id: string;
  slug: string;
  name: string;
  description: string;
  industryId: IndustryId;
  categoryId: string;
  collectionId: string;
  tags: string[];
  designStyle: DesignStyleId;
  thumbnail: string;
  featured?: boolean;
  sections: SectionConfig[];
}

export type DeviceMode = 'desktop' | 'tablet' | 'mobile';
export type ExportFormat = 'html-css' | 'react' | 'tailwind' | 'json' | 'zip';
