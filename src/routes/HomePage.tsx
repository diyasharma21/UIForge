import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  Sparkles,
  ArrowRight,
  Layers,
  CheckCircle2,
  Sliders,
  Code2,
  Compass,
  Zap,
  Eye,
  Edit3,
  Star,
  ShieldCheck,
  Smartphone,
  ExternalLink,
} from 'lucide-react';
import { INDUSTRIES } from '../data/industries';
import { CATEGORIES } from '../data/categories';
import { COLLECTIONS } from '../data/collections';
import { ALL_TEMPLATES, getFeaturedTemplates, getTemplateCountByCategory, getTemplateCountByIndustry } from '../data/templates';
import { DESIGN_SYSTEMS } from '../data/designSystems';
import { TemplateCard } from '../components/marketplace/TemplateCard';
import { useMarketplaceStore } from '../store/marketplaceStore';
import { SafeImage } from '../components/ui/SafeImage';

interface FlagshipItem {
  id: string;
  categoryName: string;
  badge: string;
  tagline: string;
  features: string[];
}

const FLAGSHIP_ITEMS: FlagshipItem[] = [
  {
    id: 'dermatology-luxury-01',
    categoryName: 'Medical & Clinic',
    badge: 'Luxury Aesthetic',
    tagline: 'Lumière Dermatology Clinic — Art-directed patient booking, doctor credentials, and treatment menu.',
    features: ['Clinical Procedure Grid', 'Physician Bio Cards', 'Patient Inquiry Modal', '15 Treatment Sections'],
  },
  {
    id: 'restaurant-aura-01',
    categoryName: 'Fine Dining & Culinary',
    badge: 'Michelin Grade',
    tagline: "L'Aura Gastronomy — Ambient dark dining layout with tasting menu courses, chef showcase, and table reservations.",
    features: ['Seasonal Menu Breakdown', 'Wine Pairing Grid', 'Table Reservation Flow', 'Atmospheric Hero Imagery'],
  },
  {
    id: 'gym-ironforge-01',
    categoryName: 'Fitness & Athletics',
    badge: 'High Performance',
    tagline: 'IronForge Athletic Club — Dynamic kinetic typography, weekly class schedules, membership tiers, and coach roster.',
    features: ['Live Class Schedule Matrix', 'Tiered Pricing Cards', 'Coach Certifications', 'Facility Tour Showcase'],
  },
  {
    id: 'software-hyperscale-01',
    categoryName: 'Cloud & AI SaaS',
    badge: 'Enterprise Tech',
    tagline: 'HyperScale AI Infrastructure — Technical developer layout, GPU cluster benchmarks, API docs, and code switcher.',
    features: ['Interactive Code Switcher', 'GPU Benchmark Chart', 'Enterprise Security Badges', 'CLI Quickstart Section'],
  },
  {
    id: 'realestate-sovereign-01',
    categoryName: 'Luxury Architecture',
    badge: 'Ultra Premium',
    tagline: 'Sovereign Real Estate — Penthouse showcase with architectural floorplans, high-res gallery, and private broker concierge.',
    features: ['Architectural Floorplans', 'Property Spec Sheet', 'Private Broker Modal', 'Curated Neighborhood Guide'],
  },
];

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery } = useMarketplaceStore();
  const [activeFlagshipIdx, setActiveFlagshipIdx] = useState(0);
  const featuredTemplates = getFeaturedTemplates().slice(0, 6);

  const activeFlagship = FLAGSHIP_ITEMS[activeFlagshipIdx];
  const activeTemplate =
    ALL_TEMPLATES.find((t) => t.id === activeFlagship.id) || ALL_TEMPLATES[0];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/explore?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/explore');
    }
  };

  // Popular category chips with real counts
  const popularCategories = [
    'dermatologist',
    'hospital',
    'dental-clinic',
    'restaurant',
    'cafe',
    'school',
    'gym',
    'software-company',
    'startup',
    'marketing-agency',
    'hotel',
    'real-estate',
    'fashion-store',
  ];

  return (
    <div className="w-full min-h-screen text-neutral-100 transition-colors duration-400">
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/5 bg-mesh-grid">
        {/* Dynamic ambient aurora lighting */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] blur-[140px] pointer-events-none rounded-full" 
          style={{ background: 'radial-gradient(ellipse at center, var(--theme-glow), transparent 70%)' }}
        />
        <div className="absolute top-1/3 left-1/5 w-[400px] h-[350px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-white/10 shadow-lg backdrop-blur-md mb-8 hover:border-white/20 transition-all">
            <span className="w-2 h-2 rounded-full theme-bg-accent pulse-badge" />
            <Sparkles className="w-3.5 h-3.5 theme-text-accent" />
            <span className="text-xs font-semibold text-neutral-200">
              Agency-Grade Website Marketplace & Live Visual Studio
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full theme-badge-pill font-bold">
              100% Free
            </span>
          </div>

          {/* Primary Proposition */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.05] font-heading text-white">
            The Website Template Marketplace{' '}
            <span className="text-shimmer">
              for Modern Brands.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-300/90 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Showcasing 288+ bespoke, art-directed templates across 25 specialized industries. Customize live with zero logins, zero subscriptions, and export production-ready code with complete freedom.
          </p>

          {/* Search Bar with Luxury Glassmorphic Ring */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative mb-8">
            <div className="relative flex items-center rounded-full p-1.5 bg-neutral-900/70 backdrop-blur-2xl border border-white/10 hover:border-[var(--theme-border-glow)] focus-within:border-[var(--theme-border-glow)] focus-within:shadow-[0_0_35px_var(--theme-glow)] transition-all shadow-2xl">
              <Search className="w-5 h-5 text-neutral-400 absolute left-5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Try 'dermatologist', 'fine dining', 'gym', 'saas', 'university'..."
                className="w-full pl-12 pr-28 py-3.5 bg-transparent text-sm text-neutral-100 placeholder-neutral-500 focus:outline-hidden"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full btn-theme-primary text-xs font-semibold shadow-lg transition-all shrink-0"
              >
                Search
              </button>
            </div>
          </form>

          {/* Popular Category Shortcuts */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto mb-12">
            <span className="text-xs font-medium text-neutral-400 mr-1">Popular:</span>
            {popularCategories.slice(0, 8).map((catId) => {
              const cat = CATEGORIES.find((c) => c.id === catId);
              if (!cat) return null;
              const count = getTemplateCountByCategory(cat.id);

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => navigate(`/explore?category=${cat.id}`)}
                  className="px-3.5 py-1 rounded-full text-xs font-medium bg-neutral-900/70 border border-white/10 text-neutral-300 hover:text-white hover:border-[var(--theme-border-glow)] hover:bg-neutral-850 backdrop-blur-md transition-all flex items-center gap-1.5 shadow-xs hover:scale-105 active:scale-95"
                >
                  <span>{cat.name}</span>
                  {count > 0 && (
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-neutral-800 text-neutral-400 font-mono">
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Key Metrics Proof Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14 pt-8 border-t border-white/10">
            <div className="p-4 rounded-2xl bg-neutral-900/40 border border-white/5 backdrop-blur-md text-center hover:border-white/15 hover:bg-neutral-900/60 transition-all">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">288+</div>
              <div className="text-xs text-neutral-400 mt-1 font-medium">Bespoke Templates</div>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-900/40 border border-white/5 backdrop-blur-md text-center hover:border-white/15 hover:bg-neutral-900/60 transition-all">
              <div className="text-2xl sm:text-3xl font-extrabold theme-text-accent font-heading">25</div>
              <div className="text-xs text-neutral-400 mt-1 font-medium">Industry Taxonomies</div>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-900/40 border border-white/5 backdrop-blur-md text-center hover:border-white/15 hover:bg-neutral-900/60 transition-all">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-heading">100% Free</div>
              <div className="text-xs text-neutral-400 mt-1 font-medium">Open Source & Zero Login</div>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-900/40 border border-white/5 backdrop-blur-md text-center hover:border-white/15 hover:bg-neutral-900/60 transition-all">
              <div className="text-2xl sm:text-3xl font-extrabold theme-text-accent font-heading">15</div>
              <div className="text-xs text-neutral-400 mt-1 font-medium">Universal Design Systems</div>
            </div>
          </div>

          {/* INTERACTIVE FLAGSHIP SHOWROOM CENTERPIECE */}
          <div className="max-w-5xl mx-auto rounded-3xl border border-white/15 bg-gradient-to-b from-[#141824] to-[#0b0d14] p-5 sm:p-7 shadow-2xl backdrop-blur-2xl relative text-left">
            {/* Top Shine Accent */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

            {/* Showcase Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 border-b border-white/10 scrollbar-none">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 mr-2 shrink-0">
                Showcase Reel:
              </span>
              {FLAGSHIP_ITEMS.map((item, idx) => {
                const isActive = activeFlagshipIdx === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveFlagshipIdx(idx)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-2 shrink-0 ${
                      isActive
                        ? 'theme-tab-active'
                        : 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-white/5'
                    }`}
                  >
                    <span>{item.categoryName}</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/40 text-neutral-300 font-mono">
                      {item.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Flagship Display Stage */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full theme-badge-pill text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>Flagship Production Website</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {activeTemplate.name}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  {activeFlagship.tagline}
                </p>

                {/* Features List */}
                <div className="space-y-2 py-2">
                  {activeFlagship.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => navigate(`/editor/${activeTemplate.id}`)}
                    className="px-5 py-2.5 rounded-xl btn-theme-primary text-xs font-semibold flex items-center gap-2 shadow-lg transition-all shrink-0"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Open In Visual Studio</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate(`/template/${activeTemplate.id}`)}
                    className="px-4 py-2.5 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 hover:text-white text-xs font-semibold flex items-center gap-1.5 border border-white/10 transition-all hover:scale-105 active:scale-95"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Template Specs</span>
                  </button>
                </div>
              </div>

              {/* Right Live Browser Mockup */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-white/15 bg-neutral-950 overflow-hidden shadow-2xl group relative">
                  {/* Browser Window Bar */}
                  <div className="h-8 px-3.5 bg-neutral-900/90 border-b border-white/10 flex items-center justify-between text-[11px] text-neutral-400 select-none">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <div className="px-3 py-0.5 rounded-md bg-neutral-950 border border-white/10 text-[10px] font-mono text-neutral-300 truncate max-w-[240px] flex items-center gap-1">
                      <span className="text-neutral-500">https://</span>
                      <span>uiforge.com/{activeTemplate.slug}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-badge" />
                      <span>ACTIVE</span>
                    </div>
                  </div>

                  {/* Thumbnail with quick launch button */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                    <SafeImage
                      src={activeTemplate.thumbnail}
                      alt={activeTemplate.name}
                      fallbackCategory={activeTemplate.categoryId}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Quick Badge */}
                    <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-white border border-white/15 shadow-lg">
                        {activeTemplate.designStyle.replace('-', ' ')}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono theme-bg-accent text-white backdrop-blur-md shadow-lg">
                        {activeTemplate.sections.length} sections
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRY SHORTCUTS BAR */}
      <section className="w-full border-b border-neutral-800/80 bg-neutral-950 py-6 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 shrink-0 mr-2">
            Industries:
          </span>
          <div className="flex items-center gap-2">
            {INDUSTRIES.slice(0, 10).map((ind) => {
              const count = getTemplateCountByIndustry(ind.id);

              return (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => navigate(`/explore?industry=${ind.id}`)}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-medium border border-neutral-800/80 bg-neutral-900/40 hover:bg-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-all whitespace-nowrap flex items-center gap-1.5"
                >
                  <span>{ind.name}</span>
                  {count > 0 && (
                    <span className="text-[10px] theme-text-accent font-semibold font-mono">
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
            <Link
              to="/industries"
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold theme-text-accent hover:brightness-125 whitespace-nowrap flex items-center gap-1"
            >
              <span>View All 25 →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. FEATURED TEMPLATES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-neutral-800/80">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider theme-text-accent">
                Art-Directed Designs
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Featured Templates
            </h2>
            <p className="text-sm text-neutral-400 mt-1">
              Structurally diverse compositions designed for specific industries.
            </p>
          </div>

          <Link
            to="/explore"
            className="flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-white group"
          >
            <span>Browse Full Library ({ALL_TEMPLATES.length} Templates)</span>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </section>

      {/* 4. CURATED COLLECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-neutral-800/80">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-wider theme-text-accent block mb-2">
            Intentional Themes
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Curated Collections
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            Collections reflect genuine aesthetic directions, not arbitrary color tints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COLLECTIONS.slice(0, 6).map((col) => (
            <div
              key={col.id}
              onClick={() => navigate(`/explore?collection=${col.id}`)}
              className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-[#121520] to-[#0c0e16] hover:border-[var(--theme-border-glow)] hover:-translate-y-2 hover:shadow-[0_20px_45px_-12px_var(--theme-glow)] transition-all duration-500 cursor-pointer group flex flex-col justify-between relative overflow-hidden backdrop-blur-xl shadow-lg"
            >
              {/* Top ambient glow bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                style={{ background: 'var(--theme-gradient)' }}
              />
              {/* Ambient radial blur */}
              <div 
                className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700 ease-out" 
                style={{ background: 'var(--theme-glow)' }}
              />

              <div className="relative z-10">
                <span className="text-[10px] font-mono uppercase theme-text-accent block mb-2 font-semibold tracking-wider">
                  {col.industryId}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[var(--theme-accent-light)] transition-all duration-300 mb-2 font-heading">
                  {col.name}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6 group-hover:text-neutral-300 transition-colors">
                  {col.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 group-hover:border-white/10 flex items-center justify-between text-xs text-neutral-400 relative z-10">
                <span className="capitalize text-neutral-400 group-hover:text-neutral-300">{col.designStyle.replace('-', ' ')}</span>
                <span className="theme-text-accent font-semibold group-hover:brightness-125 group-hover:translate-x-1.5 transition-all duration-300 flex items-center gap-1">
                  Explore Collection →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 15 DESIGN SYSTEMS & COLOR SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider theme-text-accent block mb-2">
              Cohesive Design Tokens
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight font-heading">
              15 Universal Design Systems
            </h2>
            <p className="text-sm text-neutral-400 mt-1">
              Switch palettes with confidence without compromising layout architecture.
            </p>
          </div>
          <Link
            to="/color-systems"
            className="text-xs font-semibold theme-text-accent hover:brightness-125"
          >
            View All 15 Color Systems →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {Object.values(DESIGN_SYSTEMS).map((ds) => (
            <div
              key={ds.id}
              className="p-4 rounded-2xl border border-white/10 bg-gradient-to-b from-[#121520] to-[#0c0e16] hover:border-[var(--theme-border-glow)] hover:-translate-y-1.5 hover:shadow-lg hover:shadow-[var(--theme-glow)] transition-all duration-300 group flex flex-col justify-between cursor-default shadow-md"
            >
              <div>
                <div className="flex items-center gap-1.5 mb-3">
                  <span
                    className="w-4 h-4 rounded-full border border-white/20 shadow-xs group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: ds.colors.bg }}
                  />
                  <span
                    className="w-4 h-4 rounded-full border border-white/20 shadow-xs group-hover:scale-110 transition-transform duration-300 delay-75"
                    style={{ backgroundColor: ds.colors.accent }}
                  />
                  <span
                    className="w-4 h-4 rounded-full border border-white/20 shadow-xs group-hover:scale-110 transition-transform duration-300 delay-150"
                    style={{ backgroundColor: ds.colors.cardBg }}
                  />
                </div>
                <h4 className="font-bold text-xs text-white group-hover:text-[var(--theme-accent-light)] transition-colors mb-1 font-heading">{ds.name}</h4>
                <p className="text-[11px] text-neutral-400 line-clamp-2 leading-relaxed">
                  {ds.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 group-hover:border-white/10 text-[10px] font-mono text-neutral-500 group-hover:theme-text-accent transition-colors">
                {ds.typography.headingFont.split(',')[0]}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider theme-text-accent block mb-2">
            Effortless Workflow
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight font-heading">
            How UIForge Works
          </h2>
          <p className="text-sm text-neutral-400 mt-2">
            No signup barriers, no subscription paywalls, and no hidden server requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: '01',
              title: 'Discover Industry Match',
              desc: 'Select from 25 industries and 300+ specialized categories designed specifically for your field.',
              icon: Compass,
            },
            {
              step: '02',
              title: 'Live Visual Editing',
              desc: 'Edit headings, paragraphs, doctor credentials, menu items, images, and colors with immediate visual feedback.',
              icon: Sliders,
            },
            {
              step: '03',
              title: 'Reorder & Compose',
              desc: 'Add, reorder, duplicate, or hide sections. Test responsive viewports on desktop, tablet, and mobile.',
              icon: Layers,
            },
            {
              step: '04',
              title: 'Export Free Package',
              desc: 'Download a complete ZIP containing self-contained HTML/CSS, React components, and Tailwind markup.',
              icon: Code2,
            },
          ].map(({ step, title, desc, icon: Icon }) => (
            <div
              key={step}
              className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-[#121520] to-[#0c0e16] hover:border-[var(--theme-border-glow)] hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--theme-glow)] transition-all duration-300 relative group overflow-hidden shadow-lg"
            >
              <div 
                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-xl pointer-events-none opacity-20 group-hover:opacity-40 transition-all duration-500" 
                style={{ background: 'var(--theme-glow)' }}
              />
              <div className="text-xs font-mono font-bold theme-text-accent mb-4 flex items-center justify-between">
                <span>STEP {step}</span>
                <span className="w-1.5 h-1.5 rounded-full theme-bg-accent opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-4 group-hover:border-[var(--theme-border-glow)] group-hover:scale-105 transition-all duration-300">
                <Icon className="w-5 h-5 theme-text-accent" />
              </div>
              <h3 className="font-bold text-sm text-white group-hover:text-[var(--theme-accent-light)] transition-colors mb-2 font-heading">{title}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. EXPLORE ALL 25 INDUSTRIES DIRECTORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider theme-text-accent block mb-2">
              Taxonomy Architecture
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight font-heading">
              Explore All 25 Industries
            </h2>
            <p className="text-sm text-neutral-400 mt-1">
              Over 300 specialized business categories ready for expansion.
            </p>
          </div>
          <Link
            to="/industries"
            className="text-xs font-semibold theme-text-accent hover:brightness-125"
          >
            Full Taxonomy Directory →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind) => {
            const count = getTemplateCountByIndustry(ind.id);
            const indCategories = CATEGORIES.filter((c) => c.parentIndustry === ind.id);

            return (
              <div
                key={ind.id}
                onClick={() => navigate(`/explore?industry=${ind.id}`)}
                className="p-5 rounded-2xl border border-white/10 bg-gradient-to-b from-[#121520] to-[#0c0e16] hover:border-[var(--theme-border-glow)] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[var(--theme-glow)] transition-all duration-300 cursor-pointer group relative overflow-hidden shadow-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-sm text-white group-hover:text-[var(--theme-accent-light)] transition-colors font-heading">
                    {ind.name}
                  </h3>
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-neutral-900 border border-white/10 text-neutral-300 group-hover:border-[var(--theme-border-glow)] group-hover:theme-text-accent transition-colors">
                    {count} {count === 1 ? 'template' : 'templates'}
                  </span>
                </div>

                <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-4 group-hover:text-neutral-300 transition-colors">
                  {ind.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {indCategories.slice(0, 3).map((cat) => (
                    <span
                      key={cat.id}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-neutral-400 group-hover:border-white/10 transition-colors"
                    >
                      {cat.name}
                    </span>
                  ))}
                  {indCategories.length > 3 && (
                    <span className="text-[10px] px-2 py-0.5 text-neutral-500 font-mono">
                      +{indCategories.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. CALL TO ACTION BANNER */}
      <section className="border-t border-white/10 bg-gradient-to-b from-[#0c0e16] to-[#05060a] py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden bg-mesh-grid">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] blur-[130px] pointer-events-none rounded-full" 
          style={{ background: 'radial-gradient(ellipse at center, var(--theme-glow), transparent 70%)' }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-badge-pill text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant Access • 100% Free Forever</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-heading tracking-tight">
            Build Your Website Today.{' '}
            <span className="text-shimmer">Zero Friction.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 mb-10 max-w-xl mx-auto leading-relaxed">
            Jump directly into the visual editor with any of our 288 bespoke templates. Tweak text, colors, and layout, then download your self-contained package.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/editor/dermatology-luxury-01"
              className="px-8 py-3.5 rounded-xl btn-theme-primary font-semibold text-xs shadow-xl transition-all shrink-0"
            >
              Open Studio With Lumière
            </Link>
            <Link
              to="/explore"
              className="px-8 py-3.5 rounded-xl border border-white/15 bg-neutral-900/80 hover:bg-neutral-850 text-white font-semibold text-xs transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              Explore Full Library ({ALL_TEMPLATES.length} Templates)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
