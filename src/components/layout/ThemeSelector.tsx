import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';
import { useMarketplaceStore, MarketplaceTheme } from '../../store/marketplaceStore';

interface ThemeOption {
  id: MarketplaceTheme;
  name: string;
  badge: string;
  colors: [string, string, string];
  description: string;
}

const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'cosmic',
    name: 'Cosmic Obsidian',
    badge: 'Default',
    colors: ['#6366f1', '#a855f7', '#ec4899'],
    description: 'Deep obsidian night with electric violet & indigo aurora',
  },
  {
    id: 'cyber',
    name: 'Cyber Neon',
    badge: 'High Contrast',
    colors: ['#06b6d4', '#3b82f6', '#ec4899'],
    description: 'Electric cyan, neon blue & hot magenta cyber luminescence',
  },
  {
    id: 'gold',
    name: 'Midnight Gold',
    badge: 'Luxury',
    colors: ['#f59e0b', '#f97316', '#fbbf24'],
    description: 'Warm champagne gold and espresso onyx elegance',
  },
  {
    id: 'emerald',
    name: 'Emerald Matrix',
    badge: 'Nature & Tech',
    colors: ['#10b981', '#06b6d4', '#34d399'],
    description: 'Deep forest obsidian with electric jade and mint glow',
  },
  {
    id: 'frost',
    name: 'Polar Frost',
    badge: 'Modern Clean',
    colors: ['#38bdf8', '#818cf8', '#e0e7ff'],
    description: 'Arctic slate with glacier sky blue and periwinkle accents',
  },
];

export const ThemeSelector: React.FC = () => {
  const { activeTheme, setActiveTheme } = useMarketplaceStore();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  const currentTheme = THEME_OPTIONS.find((t) => t.id === activeTheme) || THEME_OPTIONS[0];

  return (
    <div className="relative" ref={containerRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-neutral-900/80 hover:bg-neutral-850 border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white backdrop-blur-md transition-all shadow-sm active:scale-95 group"
        title="Change aesthetic theme"
      >
        <div className="flex items-center -space-x-1">
          {currentTheme.colors.map((c, i) => (
            <span
              key={i}
              className="w-2.5 h-2.5 rounded-full border border-neutral-900 shadow-xs"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
        <span className="hidden sm:inline-block font-medium">{currentTheme.name.split(' ')[0]}</span>
        <Palette className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 p-2 rounded-2xl border border-white/10 bg-neutral-950/95 backdrop-blur-2xl shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-2 border-b border-white/10 flex items-center justify-between mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
              Aesthetic Theme
            </span>
            <span className="text-[10px] text-neutral-500 font-mono">Live Sync</span>
          </div>

          <div className="space-y-1">
            {THEME_OPTIONS.map((theme) => {
              const isSelected = activeTheme === theme.id;

              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => {
                    setActiveTheme(theme.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl transition-all duration-200 flex items-start gap-3 group ${
                    isSelected
                      ? 'bg-neutral-900 border border-white/15 shadow-md'
                      : 'hover:bg-neutral-900/60 hover:border-white/5 border border-transparent'
                  }`}
                >
                  {/* Swatch dots */}
                  <div className="flex flex-col gap-1 pt-1 shrink-0">
                    <div className="flex items-center -space-x-1">
                      {theme.colors.map((c, i) => (
                        <span
                          key={i}
                          className="w-3 h-3 rounded-full border border-neutral-950 shadow-xs"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white group-hover:text-[var(--theme-accent-light)] transition-colors">
                        {theme.name}
                      </span>
                      {isSelected ? (
                        <Check className="w-3.5 h-3.5 theme-text-accent shrink-0" />
                      ) : (
                        <span className="text-[9px] font-mono uppercase text-neutral-500 px-1.5 py-0.2 rounded bg-neutral-900 border border-white/5">
                          {theme.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] text-neutral-400 line-clamp-1 mt-0.5">
                      {theme.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
