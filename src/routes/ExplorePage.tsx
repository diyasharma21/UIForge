import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search,
  Filter,
  X,
  RotateCcw,
  SlidersHorizontal,
} from 'lucide-react';
import { ALL_TEMPLATES } from '../data/templates';
import { INDUSTRIES } from '../data/industries';
import { CATEGORIES } from '../data/categories';
import { DESIGN_SYSTEMS } from '../data/designSystems';
import { TemplateCard } from '../components/marketplace/TemplateCard';
import { useMarketplaceStore } from '../store/marketplaceStore';
import { IndustryId, DesignStyleId } from '../types';

export const ExplorePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    searchQuery,
    setSearchQuery,
    selectedIndustry,
    setSelectedIndustry,
    selectedCategory,
    setSelectedCategory,
    selectedDesignStyle,
    setSelectedDesignStyle,
    selectedSort,
    setSelectedSort,
    resetFilters,
  } = useMarketplaceStore();

  // Initialize from search query params if provided
  React.useEffect(() => {
    const q = searchParams.get('q');
    const ind = searchParams.get('industry');
    const cat = searchParams.get('category');
    if (q) setSearchQuery(q);
    if (ind) setSelectedIndustry(ind as IndustryId);
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  // Dynamic filtered categories based on industry
  const visibleCategories = useMemo(() => {
    if (selectedIndustry === 'all') return CATEGORIES;
    return CATEGORIES.filter((c) => c.parentIndustry === selectedIndustry);
  }, [selectedIndustry]);

  // Filter templates
  const filteredTemplates = useMemo(() => {
    return ALL_TEMPLATES.filter((tmpl) => {
      // 1. Text Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = tmpl.name.toLowerCase().includes(query);
        const matchesDesc = tmpl.description.toLowerCase().includes(query);
        const matchesCat = tmpl.categoryId.toLowerCase().includes(query);
        const matchesInd = tmpl.industryId.toLowerCase().includes(query);
        const matchesTag = tmpl.tags.some((t) => t.toLowerCase().includes(query));

        if (!matchesName && !matchesDesc && !matchesCat && !matchesInd && !matchesTag) {
          return false;
        }
      }

      // 2. Industry filter
      if (selectedIndustry !== 'all' && tmpl.industryId !== selectedIndustry) {
        return false;
      }

      // 3. Category filter
      if (selectedCategory !== 'all' && tmpl.categoryId !== selectedCategory) {
        return false;
      }

      // 4. Design style filter
      if (selectedDesignStyle !== 'all' && tmpl.designStyle !== selectedDesignStyle) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (selectedSort === 'featured') {
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
      if (selectedSort === 'alphabetical') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [searchQuery, selectedIndustry, selectedCategory, selectedDesignStyle, selectedSort]);

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedIndustry !== 'all' ||
    selectedCategory !== 'all' ||
    selectedDesignStyle !== 'all';

  return (
    <div className="w-full min-h-screen text-neutral-100 py-12 px-4 sm:px-6 lg:px-8 bg-mesh-grid transition-colors duration-400 relative">
      {/* Background ambient spots */}
      <div 
        className="absolute top-10 left-1/3 w-[500px] h-[300px] blur-[120px] pointer-events-none" 
        style={{ background: 'radial-gradient(ellipse at center, var(--theme-glow), transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-white/10 text-[11px] font-semibold text-neutral-300 mb-3 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full theme-bg-accent pulse-badge" />
            <span>Template Library</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-2">
            Explore <span className="text-shimmer">Website Templates</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-400">
            Discover 288+ art-directed landing pages built for 25 distinct industries and 240+ specialized business types.
          </p>
        </div>

        {/* Search & Sort Controls Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          <div className="relative flex-1 max-w-xl group">
            <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-3.5 group-focus-within:theme-text-accent transition-colors" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keywords, industry, or business type..."
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-neutral-900/70 backdrop-blur-md border border-white/10 text-xs text-neutral-100 placeholder-neutral-500 focus:outline-hidden focus:border-[var(--theme-border-glow)] focus:shadow-[0_0_20px_var(--theme-glow)] focus:bg-neutral-900 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3.5 text-neutral-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 self-end md:self-auto">
            <span className="text-xs text-neutral-400 font-medium">Sort by:</span>
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value as typeof selectedSort)}
              className="px-4 py-2.5 rounded-xl bg-neutral-900/80 border border-white/10 text-xs text-neutral-200 focus:outline-hidden focus:border-[var(--theme-border-glow)] cursor-pointer backdrop-blur-md"
            >
              <option value="featured">Featured First</option>
              <option value="alphabetical">Alphabetical (A–Z)</option>
            </select>
          </div>
        </div>

        {/* Filter Chips Bar */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-8 p-3 rounded-xl bg-neutral-900/60 border border-white/10 text-xs backdrop-blur-md">
            <span className="font-semibold text-neutral-300 flex items-center gap-1.5 mr-1">
              <SlidersHorizontal className="w-3.5 h-3.5 theme-text-accent" />
              Active Filters:
            </span>

            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full theme-badge-pill text-xs">
                <span>Query: "{searchQuery}"</span>
                <X className="w-3 h-3 cursor-pointer hover:text-white" onClick={() => setSearchQuery('')} />
              </span>
            )}

            {selectedIndustry !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full theme-badge-pill text-xs">
                <span>Industry: {selectedIndustry}</span>
                <X className="w-3 h-3 cursor-pointer hover:text-white" onClick={() => setSelectedIndustry('all')} />
              </span>
            )}

            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full theme-badge-pill text-xs">
                <span>Category: {selectedCategory}</span>
                <X className="w-3 h-3 cursor-pointer hover:text-white" onClick={() => setSelectedCategory('all')} />
              </span>
            )}

            {selectedDesignStyle !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full theme-badge-pill text-xs">
                <span>Style: {selectedDesignStyle}</span>
                <X className="w-3 h-3 cursor-pointer hover:text-white" onClick={() => setSelectedDesignStyle('all')} />
              </span>
            )}

            <button
              type="button"
              onClick={resetFilters}
              className="ml-auto flex items-center gap-1 text-xs font-semibold text-rose-400 hover:text-rose-300"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset All</span>
            </button>
          </div>
        )}

        {/* Main Grid & Filters Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Filters Sidebar */}
          <aside className="space-y-6">
            {/* Industry Filter */}
            <div className="p-4 rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl shadow-lg">
              <h3 className="font-bold text-xs uppercase tracking-wider text-neutral-300 mb-3 flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 theme-text-accent" />
                <span>Industry</span>
              </h3>
              <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
                <button
                  type="button"
                  onClick={() => setSelectedIndustry('all')}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all ${
                    selectedIndustry === 'all'
                      ? 'theme-tab-active font-semibold shadow-sm'
                      : 'text-neutral-400 hover:bg-neutral-800/80 hover:text-white'
                  }`}
                >
                  All Industries
                </button>
                {INDUSTRIES.map((ind) => (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all truncate ${
                      selectedIndustry === ind.id
                        ? 'theme-tab-active font-semibold shadow-sm'
                        : 'text-neutral-400 hover:bg-neutral-800/80 hover:text-white'
                    }`}
                  >
                    {ind.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="p-4 rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl shadow-lg">
              <h3 className="font-bold text-xs uppercase tracking-wider text-neutral-300 mb-3">
                Category
              </h3>
              <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all ${
                    selectedCategory === 'all'
                      ? 'theme-tab-active font-semibold shadow-sm'
                      : 'text-neutral-400 hover:bg-neutral-800/80 hover:text-white'
                  }`}
                >
                  All Categories
                </button>
                {visibleCategories.slice(0, 30).map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all truncate ${
                      selectedCategory === cat.id
                        ? 'theme-tab-active font-semibold shadow-sm'
                        : 'text-neutral-400 hover:bg-neutral-800/80 hover:text-white'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Design Style Filter */}
            <div className="p-4 rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl shadow-lg">
              <h3 className="font-bold text-xs uppercase tracking-wider text-neutral-300 mb-3">
                Design System
              </h3>
              <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
                <button
                  type="button"
                  onClick={() => setSelectedDesignStyle('all')}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all ${
                    selectedDesignStyle === 'all'
                      ? 'theme-tab-active font-semibold shadow-sm'
                      : 'text-neutral-400 hover:bg-neutral-800/80 hover:text-white'
                  }`}
                >
                  All Design Systems
                </button>
                {Object.values(DESIGN_SYSTEMS).map((ds) => (
                  <button
                    key={ds.id}
                    type="button"
                    onClick={() => setSelectedDesignStyle(ds.id as DesignStyleId)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all truncate ${
                      selectedDesignStyle === ds.id
                        ? 'theme-tab-active font-semibold shadow-sm'
                        : 'text-neutral-400 hover:bg-neutral-800/80 hover:text-white'
                    }`}
                  >
                    {ds.name}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Template Cards Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold text-neutral-400">
                Showing {filteredTemplates.length} matching template
                {filteredTemplates.length === 1 ? '' : 's'}
              </span>
            </div>

            {filteredTemplates.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTemplates.map((template) => (
                  <TemplateCard key={template.id} template={template} />
                ))}
              </div>
            ) : (
              <div className="p-16 text-center rounded-2xl border border-neutral-800 bg-neutral-900/30 flex flex-col items-center justify-center">
                <Search className="w-10 h-10 text-neutral-600 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">No matching templates found</h3>
                <p className="text-xs text-neutral-400 max-w-sm mb-6 leading-relaxed">
                  We couldn't find any templates matching your criteria. Try adjusting your query or reset filters.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="px-6 py-2.5 rounded-xl btn-theme-primary text-xs font-semibold shadow-md transition-all"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
