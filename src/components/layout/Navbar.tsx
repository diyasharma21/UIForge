import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  Heart,
  Layers,
  Sparkles,
  Menu,
  X,
  Compass,
} from 'lucide-react';
import { useMarketplaceStore } from '../../store/marketplaceStore';

import { ThemeSelector } from './ThemeSelector';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { favorites, searchQuery, setSearchQuery } = useMarketplaceStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/explore?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/explore');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-neutral-950/80 backdrop-blur-2xl transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
          <div
            className="relative w-8 h-8 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300"
            style={{
              background: 'var(--theme-gradient)',
              boxShadow: '0 8px 25px -4px var(--theme-glow)',
            }}
          >
            <Layers className="w-4 h-4 text-white" />
            <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-base tracking-tight text-white font-heading">
              UI<span className="text-shimmer">FORGE</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-xs">
              100% Free
            </span>
          </div>
        </Link>

        {/* Global Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden md:flex flex-1 max-w-md items-center relative group"
        >
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 pointer-events-none group-focus-within:text-white transition-colors" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 25 industries, doctors, cafes, tech, gyms..."
            className="w-full pl-9 pr-12 py-2 bg-neutral-900/70 border border-white/10 hover:border-white/20 focus:border-[var(--theme-accent)] focus:bg-neutral-900 rounded-full text-xs text-neutral-200 placeholder-neutral-500 focus:outline-hidden transition-all shadow-inner backdrop-blur-md"
          />
          <kbd className="hidden sm:inline-block absolute right-3 px-1.5 py-0.5 rounded text-[10px] font-mono text-neutral-500 bg-neutral-800 border border-neutral-700/60 pointer-events-none">
            /
          </kbd>
        </form>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-neutral-300">
          <Link to="/explore" className="hover:text-white flex items-center gap-1.5 transition-colors group">
            <Compass className="w-3.5 h-3.5 theme-text-accent" />
            <span>Explore</span>
          </Link>
          <Link to="/industries" className="hover:text-white transition-colors">
            Industries (25)
          </Link>
          <Link to="/components" className="hover:text-white transition-colors">
            Components
          </Link>
          <Link to="/color-systems" className="hover:text-white flex items-center gap-1 transition-colors">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Design Systems</span>
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          {/* Theme Selector */}
          <ThemeSelector />

          {/* Favorites */}
          <Link
            to="/favorites"
            className="relative p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900/80 border border-transparent hover:border-white/10 transition-all"
            title="Saved Favorites"
          >
            <Heart className="w-4 h-4" />
            {favorites.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white font-bold text-[9px] flex items-center justify-center shadow-md shadow-rose-500/40 animate-pulse">
                {favorites.length}
              </span>
            )}
          </Link>

          {/* Open Studio CTA (Live Theme Aware) */}
          <Link
            to="/editor/dermatology-luxury-01"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold btn-theme-primary"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open Studio</span>
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900 border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-800 bg-neutral-950 p-4 space-y-3">
          <form onSubmit={handleSearchSubmit} className="relative mb-3">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search templates..."
              className="w-full pl-9 pr-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-neutral-200"
            />
          </form>

          <div className="flex flex-col space-y-2 text-sm font-medium">
            <Link
              to="/explore"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-neutral-900 text-neutral-200"
            >
              Explore Templates
            </Link>
            <Link
              to="/industries"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-neutral-900 text-neutral-200"
            >
              All 25 Industries
            </Link>
            <Link
              to="/components"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-neutral-900 text-neutral-200"
            >
              Component Library
            </Link>
            <Link
              to="/color-systems"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-neutral-900 text-neutral-200"
            >
              Color Systems
            </Link>
            <Link
              to="/favorites"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-neutral-900 text-neutral-200 flex items-center justify-between"
            >
              <span>Saved Favorites</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300">
                {favorites.length}
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
