import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Edit3, Eye, ArrowUpRight } from 'lucide-react';
import { TemplateConfig } from '../../types';
import { useMarketplaceStore } from '../../store/marketplaceStore';
import { SafeImage } from '../ui/SafeImage';

interface TemplateCardProps {
  template: TemplateConfig;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);
  const { isFavorite, toggleFavorite } = useMarketplaceStore();
  const favorited = isFavorite(template.id);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group card-spotlight relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#121520] to-[#0c0e16] overflow-hidden flex flex-col justify-between transition-all duration-500 ease-out hover:border-[var(--theme-border-glow)] hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_var(--theme-glow)] shadow-xl"
    >
      {/* Top Specular Shine Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent z-30 pointer-events-none" />

      {/* Dynamic Cursor Spotlight Surface Glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background:
            'radial-gradient(550px circle at var(--mouse-x, 150px) var(--mouse-y, 150px), var(--theme-glow, rgba(99, 102, 241, 0.15)), transparent 60%)',
        }}
      />

      {/* Ambient Top Glow Accent */}
      <div 
        className="absolute top-0 right-0 w-40 h-40 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700 ease-out opacity-25" 
        style={{ background: 'var(--theme-glow)' }}
      />

      {/* Browser Chrome Header (Makes each card look like an actual live deployed website) */}
      <div className="h-8 px-3.5 bg-neutral-950/85 border-b border-white/10 flex items-center justify-between text-[11px] text-neutral-400 select-none z-20">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
        </div>
        <div className="px-2.5 py-0.5 rounded-md bg-neutral-900/90 border border-white/5 text-[10px] font-mono text-neutral-400 truncate max-w-[160px] flex items-center gap-1">
          <span className="text-neutral-500">preview/</span>
          <span className="text-neutral-300 font-semibold">{template.slug}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-badge" />
          <span>PRO</span>
        </div>
      </div>

      {/* Thumbnail Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950 z-10">
        <SafeImage
          src={template.thumbnail}
          alt={template.name}
          fallbackCategory={template.categoryId}
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
        />

        {/* Diagonal Light Sheen Beam on Hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none z-10" />

        {/* Vignette Overlay for Crisp Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e16] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

        {/* Floating Favorite Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(template.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-300 shadow-xl z-20 hover:scale-110 active:scale-90 ${
            favorited
              ? 'bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-rose-500/30 ring-2 ring-rose-400/30'
              : 'bg-neutral-950/80 text-neutral-300 hover:text-white hover:bg-neutral-900 border border-white/10'
          }`}
          title={favorited ? 'Remove from favorites' : 'Save to favorites'}
        >
          <Heart
            className={`w-3.5 h-3.5 transition-transform duration-300 ${
              favorited ? 'fill-current scale-105' : 'group-hover:scale-105'
            }`}
          />
        </button>

        {/* Category Pill with Live Pulse Dot */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-neutral-950/90 backdrop-blur-md text-neutral-200 border border-white/10 shadow-lg group-hover:border-[var(--theme-border-glow)] group-hover:text-white transition-all duration-300">
            <span className="w-1.5 h-1.5 rounded-full theme-dot pulse-badge" />
            {template.categoryId.replace('-', ' ')}
          </span>
        </div>

        {/* Hover Overlay with Quick Action Buttons */}
        <div className="absolute inset-0 bg-neutral-950/50 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2.5 p-4 z-10 pointer-events-none group-hover:pointer-events-auto">
          <button
            type="button"
            onClick={() => navigate(`/editor/${template.id}`)}
            className="group/btn px-4 py-2 rounded-xl text-white text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 translate-y-3 group-hover:translate-y-0 btn-theme-primary"
          >
            <Edit3 className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:rotate-12" />
            <span>Customize</span>
          </button>
          <button
            type="button"
            onClick={() => navigate(`/template/${template.id}`)}
            className="px-4 py-2 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-white text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md border border-white/20 transition-all duration-200 translate-y-3 group-hover:translate-y-0 hover:scale-105 active:scale-95 shadow-lg"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Details</span>
          </button>
        </div>
      </div>

      {/* Info Body */}
      <div className="p-5 flex-1 flex flex-col justify-between relative z-10">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="font-bold text-sm text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[var(--theme-accent-light)] transition-all duration-300 truncate font-heading">
              {template.name}
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-neutral-300 group-hover:text-[var(--theme-accent-light)] group-hover:border-[var(--theme-border-glow)] transition-all duration-300 shrink-0">
              {template.sections.length} sections
            </span>
          </div>

          <p className="text-xs text-neutral-400 group-hover:text-neutral-300 line-clamp-2 leading-relaxed mb-4 transition-colors duration-300">
            {template.description}
          </p>

          {/* Micro Tags Preview */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {template.tags.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/5"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer info: style & launch */}
        <div className="pt-3.5 border-t border-white/5 group-hover:border-white/10 flex items-center justify-between text-[11px] text-neutral-400 transition-colors duration-300">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-[var(--theme-accent-light)] transition-colors duration-300" />
            <span className="capitalize font-medium text-neutral-300 group-hover:text-white transition-colors duration-300">
              {template.designStyle.replace('-', ' ')}
            </span>
          </div>

          <Link
            to={`/editor/${template.id}`}
            className="group/link inline-flex items-center gap-1 theme-text-accent font-semibold hover:brightness-125 transition-all duration-200"
          >
            <span>Open Studio</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

