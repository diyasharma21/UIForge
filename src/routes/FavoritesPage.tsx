import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Compass } from 'lucide-react';
import { useMarketplaceStore } from '../store/marketplaceStore';
import { ALL_TEMPLATES } from '../data/templates';
import { TemplateCard } from '../components/marketplace/TemplateCard';

export const FavoritesPage: React.FC = () => {
  const { favorites } = useMarketplaceStore();

  const favoriteTemplates = ALL_TEMPLATES.filter((t) => favorites.includes(t.id));

  return (
    <div className="w-full min-h-screen text-neutral-100 py-16 px-4 sm:px-6 lg:px-8 bg-mesh-grid relative">
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-6 h-6 text-rose-500 fill-current animate-pulse" />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
              Saved <span className="text-shimmer">Favorites</span>
            </h1>
          </div>
          <p className="text-sm text-neutral-400">
            Templates you have bookmarked for quick access. Saved securely in your browser's client storage.
          </p>
        </div>

        {favoriteTemplates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        ) : (
          <div className="p-16 text-center rounded-3xl border border-white/10 bg-gradient-to-b from-[#121520] to-[#0c0e16] flex flex-col items-center justify-center max-w-lg mx-auto shadow-2xl backdrop-blur-xl">
            <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-rose-400 mb-6 shadow-inner">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-heading">No favorites bookmarked yet</h3>
            <p className="text-xs text-neutral-400 mb-8 leading-relaxed max-w-sm">
              Click the heart icon on any template card across the marketplace to bookmark it here for instant studio access.
            </p>
            <Link
              to="/explore"
              className="px-6 py-3 rounded-xl btn-theme-primary text-xs font-semibold shadow-xl transition-all flex items-center gap-2 border border-white/10"
            >
              <Compass className="w-4 h-4" />
              <span>Explore 288+ Templates</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
