import { Collection } from '../types';

export const COLLECTIONS: Collection[] = [
  // Healthcare
  {
    id: 'luxury-dermatology',
    name: 'Luxury Dermatology & Aesthetics',
    slug: 'luxury-dermatology',
    description: 'High-end editorial aesthetic dermatology with warm tones, serif headlines, and treatments list.',
    categoryIds: ['dermatologist', 'cosmetic-dermatologist', 'skincare-clinic'],
    industryId: 'healthcare',
    designStyle: 'luxury-editorial',
    featured: true,
  },
  {
    id: 'minimal-clinical',
    name: 'Minimal Clinical Practice',
    slug: 'minimal-clinical',
    description: 'Ultra-clean Swiss grid precision designed for patient trust, clarity, and rapid booking.',
    categoryIds: ['dermatologist', 'general-physician', 'medical-clinic'],
    industryId: 'healthcare',
    designStyle: 'minimal-neutral',
    featured: true,
  },
  {
    id: 'modern-hospital',
    name: 'Modern Medical Center',
    slug: 'modern-hospital',
    description: 'Trusted clinical palette, multi-department navigation, emergency banners, and physician rosters.',
    categoryIds: ['hospital', 'multispecialty-hospital'],
    industryId: 'healthcare',
    designStyle: 'medical-clean',
    featured: true,
  },
  {
    id: 'modern-dental',
    name: 'Modern Dental Studio',
    slug: 'modern-dental',
    description: 'Bright welcoming smiles, smile makeover showcase, procedure pricing, and appointment forms.',
    categoryIds: ['dentist', 'dental-clinic', 'orthodontist'],
    industryId: 'healthcare',
    designStyle: 'medical-clean',
    featured: true,
  },

  // Food & Beverage
  {
    id: 'fine-dining',
    name: 'Fine Dining & Gastronomy',
    slug: 'fine-dining',
    description: 'Moody ambient photography, seasonal tasting menus, sommelier notes, and table reservations.',
    categoryIds: ['restaurant', 'fine-dining', 'steakhouse'],
    industryId: 'food-beverage',
    designStyle: 'luxury-editorial',
    featured: true,
  },
  {
    id: 'modern-bistro',
    name: 'Modern Bistro & Brunch',
    slug: 'modern-bistro',
    description: 'Vibrant daytime warmth, rotating blackboard menus, craft drinks, and casual elegance.',
    categoryIds: ['restaurant', 'cafe', 'italian-restaurant'],
    industryId: 'food-beverage',
    designStyle: 'bold-creative',
    featured: true,
  },
  {
    id: 'nordic-cafe',
    name: 'Nordic Artisanal Cafe',
    slug: 'nordic-cafe',
    description: 'Minimalist wood aesthetic, single-origin pour-overs, fresh sourdough bakes, and cafe hours.',
    categoryIds: ['cafe', 'coffee-shop', 'bakery'],
    industryId: 'food-beverage',
    designStyle: 'minimal-neutral',
    featured: true,
  },

  // Education
  {
    id: 'modern-school',
    name: 'Modern K-12 Academy',
    slug: 'modern-school',
    description: 'Holistic curriculum displays, campus tour bookings, STEM milestones, and term dates.',
    categoryIds: ['school', 'primary-school', 'secondary-school'],
    industryId: 'education',
    designStyle: 'modern-corporate',
    featured: true,
  },
  {
    id: 'scholarly-legacy',
    name: 'Collegiate & University Heritage',
    slug: 'scholarly-legacy',
    description: 'Dignified crimson crests, academic program catalogs, admissions portal, and faculty research.',
    categoryIds: ['college', 'university', 'business-school'],
    industryId: 'education',
    designStyle: 'academic-classic',
    featured: true,
  },

  // Fitness
  {
    id: 'power-fitness',
    name: 'High Performance & Power Gym',
    slug: 'power-fitness',
    description: 'High-contrast dark obsidian, athletic intensity, tier passes, trainer cards, and class schedules.',
    categoryIds: ['gym', 'crossfit', 'boxing-club'],
    industryId: 'fitness-wellness',
    designStyle: 'dark-cinematic',
    featured: true,
  },
  {
    id: 'prana-sanctuary',
    name: 'Boutique Yoga & Wellness Sanctuary',
    slug: 'prana-sanctuary',
    description: 'Serene botanical greens, tranquil flow timetables, sound bath retreats, and intro passes.',
    categoryIds: ['gym', 'yoga-studio', 'pilates-studio'],
    industryId: 'fitness-wellness',
    designStyle: 'organic-natural',
    featured: true,
  },

  // Beauty
  {
    id: 'luxury-salon',
    name: 'Haute Beauty Atelier & Salon',
    slug: 'luxury-salon',
    description: 'Editorial salon aesthetic, balayage & color lookbooks, stylist profiles, and treatment booking.',
    categoryIds: ['beauty-salon', 'hair-salon', 'spa'],
    industryId: 'beauty-aesthetics',
    designStyle: 'luxury-editorial',
    featured: true,
  },

  // Hospitality
  {
    id: 'luxury-hotel-resort',
    name: 'Luxury Sanctuary Hotel & Suites',
    slug: 'luxury-hotel-resort',
    description: 'Rich champagne tones, suite galleries, room amenity specs, and instant stay reservation.',
    categoryIds: ['hotel', 'luxury-hotel', 'resort', 'boutique-hotel'],
    industryId: 'hospitality-travel',
    designStyle: 'premium-hospitality',
    featured: true,
  },

  // Technology
  {
    id: 'dark-cinematic-saas',
    name: 'Dark Cinematic SaaS & AI Platform',
    slug: 'dark-cinematic-saas',
    description: 'Electric violet glow, feature matrix, API code samples, interactive pricing, and velocity.',
    categoryIds: ['software-company', 'saas-product', 'ai-product', 'developer-tools'],
    industryId: 'technology',
    designStyle: 'dark-cinematic',
    featured: true,
  },
  {
    id: 'modern-software',
    name: 'Modern B2B Enterprise Software',
    slug: 'modern-software',
    description: 'Clean sapphire and white surfaces, enterprise security badges, ROI metrics, and demo request.',
    categoryIds: ['software-company', 'saas-product', 'cloud-platform'],
    industryId: 'technology',
    designStyle: 'technology-gradient',
    featured: true,
  },

  // Business & Agency
  {
    id: 'growth-engine',
    name: 'Growth Marketing Agency',
    slug: 'growth-engine',
    description: 'Bold orange accents, case study metrics, client logos, service packages, and consultation CTA.',
    categoryIds: ['startup', 'marketing-agency', 'digital-agency'],
    industryId: 'business-services',
    designStyle: 'bold-creative',
    featured: true,
  },

  // Real Estate
  {
    id: 'luxury-real-estate',
    name: 'Architectural Real Estate & Estates',
    slug: 'luxury-real-estate',
    description: 'Curated properties, floorplan breakdowns, video tours, neighborhood maps, and agent leads.',
    categoryIds: ['real-estate', 'luxury-real-estate'],
    industryId: 'real-estate',
    designStyle: 'minimal-neutral',
    featured: true,
  },

  // Retail & Fashion
  {
    id: 'high-fashion-editorial',
    name: 'Runway & High Fashion Boutique',
    slug: 'high-fashion-editorial',
    description: 'Stark monochrome luxury, oversized typography, lookbook drops, and shopping bag drawer.',
    categoryIds: ['fashion-store', 'clothing-brand', 'boutique'],
    industryId: 'retail-ecommerce',
    designStyle: 'high-fashion',
    featured: true,
  },
];
