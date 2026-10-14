import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronDown, ChevronRight, Layers, ArrowRight } from 'lucide-react';
import { INDUSTRIES } from '../data/industries';
import { CATEGORIES } from '../data/categories';
import { getTemplateCountByCategory, getTemplateCountByIndustry } from '../data/templates';
import { IndustryId } from '../types';

export const IndustriesPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchFilter, setSearchFilter] = useState('');
  const [expandedIndustry, setExpandedIndustry] = useState<IndustryId | null>('healthcare');

  const filteredIndustries = useMemo(() => {
    if (!searchFilter.trim()) return INDUSTRIES;
    const query = searchFilter.toLowerCase().trim();

    return INDUSTRIES.filter((ind) => {
      const matchName = ind.name.toLowerCase().includes(query);
      const matchKeywords = ind.keywords.some((k) => k.toLowerCase().includes(query));
      const matchCategories = CATEGORIES.some(
        (c) => c.parentIndustry === ind.id && c.name.toLowerCase().includes(query)
      );
      return matchName || matchKeywords || matchCategories;
    });
  }, [searchFilter]);

  return (
    <div className="w-full min-h-screen text-neutral-100 py-16 px-4 sm:px-6 lg:px-8 bg-mesh-grid relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-white/10 text-xs font-semibold theme-text-accent mb-3 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full theme-bg-accent pulse-badge" />
            <span>Structured Taxonomy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-3">
            All 25 Specialized <span className="text-shimmer">Industries</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Every business type has its own specialized niche. Explore our hierarchy of 240+ categories with genuine templates and collections.
          </p>
        </div>

        {/* Quick Taxonomy Search */}
        <div className="relative max-w-md mb-10 group">
          <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-3.5 group-focus-within:theme-text-accent transition-colors" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Search specific business type (e.g. 'dermatologist', 'bakery')..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-neutral-900/70 border border-white/10 text-xs text-neutral-100 placeholder-neutral-500 focus:outline-hidden focus:border-[var(--theme-border-glow)] focus:shadow-[0_0_20px_var(--theme-glow)] focus:bg-neutral-900 backdrop-blur-md transition-all shadow-inner"
          />
        </div>

        {/* Industry Cards List */}
        <div className="space-y-4">
          {filteredIndustries.map((ind) => {
            const isExpanded = expandedIndustry === ind.id;
            const indCategories = CATEGORIES.filter((c) => c.parentIndustry === ind.id);
            const totalTemplates = getTemplateCountByIndustry(ind.id);

            return (
              <div
                key={ind.id}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#121520] to-[#0c0e16] hover:border-white/20 transition-all duration-300 overflow-hidden shadow-lg backdrop-blur-xl"
              >
                {/* Header row */}
                <div
                  onClick={() => setExpandedIndustry(isExpanded ? null : ind.id)}
                  className="p-5 flex items-center justify-between cursor-pointer hover:bg-neutral-850/60 transition-colors select-none group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center theme-text-accent font-bold group-hover:scale-105 group-hover:border-[var(--theme-border-glow)] transition-all duration-300">
                      <Layers className="w-5 h-5 theme-text-accent" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="font-bold text-base text-white group-hover:text-[var(--theme-accent-light)] transition-colors">{ind.name}</h2>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-neutral-800/80 border border-neutral-700/60 text-neutral-300 font-mono">
                          {indCategories.length} categories
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 mt-0.5 line-clamp-1">
                        {ind.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold text-neutral-300 hidden sm:inline-block">
                      {totalTemplates} {totalTemplates === 1 ? 'template' : 'templates'}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/explore?industry=${ind.id}`);
                      }}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-neutral-800 hover:bg-[var(--theme-accent)] text-neutral-200 hover:text-white border border-neutral-700/60 hover:border-[var(--theme-border-glow)] transition-all duration-200 hidden md:inline-flex items-center gap-1.5 group/btn shadow-xs hover:shadow-md"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                    )}
                  </div>
                </div>

                {/* Expanded categories drawer */}
                {isExpanded && (
                  <div className="border-t border-neutral-800/80 bg-neutral-950/60 p-6 animate-in slide-in-from-top-1 duration-200">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
                      Specialized Categories in {ind.name}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {indCategories.map((cat) => {
                        const count = getTemplateCountByCategory(cat.id);

                        return (
                          <div
                            key={cat.id}
                            onClick={() => navigate(`/explore?category=${cat.id}`)}
                            className="p-3.5 rounded-xl border border-neutral-800/80 bg-neutral-900/60 hover:bg-neutral-850 hover:border-[var(--theme-border-glow)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--theme-glow)] transition-all duration-200 cursor-pointer flex items-center justify-between group"
                          >
                            <div className="truncate pr-2">
                              <h4 className="font-semibold text-xs text-neutral-200 group-hover:text-[var(--theme-accent-light)] transition-colors truncate">
                                {cat.name}
                              </h4>
                              <p className="text-[11px] text-neutral-500 group-hover:text-neutral-400 transition-colors truncate mt-0.5">
                                {cat.description}
                              </p>
                            </div>
                            <span
                              className={`text-[10px] font-mono px-2 py-0.5 rounded-full shrink-0 transition-transform duration-200 group-hover:scale-105 ${
                                count > 0
                                  ? 'theme-badge-pill font-bold'
                                  : 'bg-neutral-800 text-neutral-500'
                              }`}
                            >
                              {count}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
