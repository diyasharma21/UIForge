import React from 'react';
import { Link } from 'react-router-dom';
import { Layers } from 'lucide-react';
import { INDUSTRIES } from '../../data/industries';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-neutral-950/90 text-neutral-400 text-xs relative overflow-hidden">
      {/* Top ambient highlight line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

      {/* Top Footer Sitemap */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 relative z-10">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Layers className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-base tracking-tight text-white font-heading">
              UI<span className="text-shimmer">FORGE</span>
            </span>
          </Link>
          <p className="text-neutral-400 max-w-sm leading-relaxed text-xs">
            UIForge is a completely free, client-side website template marketplace and visual page builder. Built for businesses ranging from clinics and universities to cafes, SaaS startups, and creative portfolios.
          </p>
          <div className="inline-flex items-center gap-2 text-[11px] text-neutral-400 px-3 py-1 rounded-full bg-neutral-900/60 border border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-badge" />
            <span>100% Free • No Signups • Client-side Privacy • Zero Lock-in</span>
          </div>
        </div>

        {/* Column 1: Marketplace */}
        <div className="space-y-3">
          <h4 className="font-bold text-neutral-200 text-xs uppercase tracking-wider">Marketplace</h4>
          <ul className="space-y-2">
            <li><Link to="/explore" className="hover:text-white transition-colors">All Templates</Link></li>
            <li><Link to="/industries" className="hover:text-white transition-colors">25 Industry Taxonomies</Link></li>
            <li><Link to="/components" className="hover:text-white transition-colors">Component Library</Link></li>
            <li><Link to="/color-systems" className="hover:text-white transition-colors">15 Design Systems</Link></li>
            <li><Link to="/favorites" className="hover:text-white transition-colors">Saved Favorites</Link></li>
          </ul>
        </div>

        {/* Column 2: Key Industries */}
        <div className="space-y-3">
          <h4 className="font-bold text-neutral-200 text-xs uppercase tracking-wider">Top Industries</h4>
          <ul className="space-y-2">
            {INDUSTRIES.slice(0, 6).map((ind) => (
              <li key={ind.id}>
                <Link to={`/explore?industry=${ind.id}`} className="hover:text-white transition-colors">
                  {ind.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Open Studio */}
        <div className="space-y-3">
          <h4 className="font-bold text-neutral-200 text-xs uppercase tracking-wider">Visual Studio</h4>
          <ul className="space-y-2">
            <li><Link to="/editor/dermatology-luxury-01" className="hover:text-white transition-colors">Lumière Dermatology</Link></li>
            <li><Link to="/editor/restaurant-aura-01" className="hover:text-white transition-colors">L'Aura Gastronomy</Link></li>
            <li><Link to="/editor/gym-ironforge-01" className="hover:text-white transition-colors">IronForge Athletic Club</Link></li>
            <li><Link to="/editor/software-hyperscale-01" className="hover:text-white transition-colors">HyperScale AI Compute</Link></li>
            <li><Link to="/editor/realestate-sovereign-01" className="hover:text-white transition-colors">Sovereign Real Estate</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-900 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>© {new Date().getFullYear()} UIForge. An open website building and design platform.</div>
          <div className="flex items-center gap-6">
            <span>Client-side Storage</span>
            <span>No Telemetry</span>
            <span>MIT Export License</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
