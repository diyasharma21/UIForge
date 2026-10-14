import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Palette, ArrowRight } from 'lucide-react';
import { DESIGN_SYSTEMS } from '../data/designSystems';
import { DesignStyleId } from '../types';

export const ColorSystemsPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedSystem, setSelectedSystem] = useState<DesignStyleId>('luxury-editorial');
  const system = DESIGN_SYSTEMS[selectedSystem];

  return (
    <div className="w-full min-h-screen bg-neutral-950 text-neutral-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider theme-text-accent block mb-2">
            Universal Design Tokens
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 font-heading">
            15 Cohesive Color & Typography Systems
          </h1>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Every template in UIForge adheres to strict semantic tokens. Changing a design system transforms background surfaces, text hierarchy, and button radii while preserving your layout composition.
          </p>
        </div>

        {/* 15 Systems Grid Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {Object.values(DESIGN_SYSTEMS).map((ds) => {
            const isSelected = selectedSystem === ds.id;

            return (
              <button
                key={ds.id}
                type="button"
                onClick={() => setSelectedSystem(ds.id as DesignStyleId)}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-[var(--theme-border-glow)] bg-[var(--theme-glow)] text-white shadow-md'
                    : 'border-neutral-800 bg-neutral-900/40 text-neutral-400 hover:bg-neutral-800 hover:text-white'
                }`}
              >
                <div>
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-white/20"
                      style={{ backgroundColor: ds.colors.bg }}
                    />
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-white/20"
                      style={{ backgroundColor: ds.colors.accent }}
                    />
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-white/20"
                      style={{ backgroundColor: ds.colors.cardBg }}
                    />
                  </div>
                  <h3 className="font-bold text-xs text-white truncate">{ds.name}</h3>
                </div>
                <span className="text-[10px] text-neutral-500 font-mono mt-2">
                  {ds.isDark ? 'Dark Mode' : 'Light Mode'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Inspector for Selected System */}
        <div
          className="p-8 sm:p-12 rounded-2xl border transition-all duration-300 shadow-2xl"
          style={{
            backgroundColor: system.colors.bg,
            color: system.colors.textPrimary,
            borderColor: system.colors.border,
            fontFamily: system.typography.bodyFont,
          }}
        >
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b" style={{ borderColor: system.colors.border }}>
              <div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2"
                  style={{
                    backgroundColor: system.colors.badgeBg,
                    color: system.colors.badgeText,
                  }}
                >
                  {system.isDark ? 'Dark Palette' : 'Light Palette'}
                </span>
                <h2
                  className="text-3xl sm:text-4xl font-bold tracking-tight"
                  style={{ fontFamily: system.typography.headingFont }}
                >
                  {system.name}
                </h2>
                <p className="text-sm mt-1" style={{ color: system.colors.textSecondary }}>
                  {system.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => navigate(`/explore?style=${system.id}`)}
                className="px-5 py-2.5 text-xs font-semibold tracking-wide transition-all self-start sm:self-auto flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: system.colors.accent,
                  color: system.isDark ? '#000000' : '#FFFFFF',
                  borderRadius: system.radii.button,
                }}
              >
                <span>Browse Templates in this Style</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Color Swatches Grid */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: system.colors.textMuted }}>
                Semantic Color Swatches
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'Background Canvas', hex: system.colors.bg },
                  { label: 'Subtle Surface', hex: system.colors.bgSubtle },
                  { label: 'Card Container', hex: system.colors.cardBg },
                  { label: 'Accent Brand', hex: system.colors.accent },
                  { label: 'Primary Text', hex: system.colors.textPrimary },
                  { label: 'Secondary Text', hex: system.colors.textSecondary },
                  { label: 'Muted Text', hex: system.colors.textMuted },
                  { label: 'Border Line', hex: system.colors.border },
                ].map(({ label, hex }) => (
                  <div
                    key={label}
                    className="p-3.5 rounded-lg border text-xs"
                    style={{
                      backgroundColor: system.colors.cardBg,
                      borderColor: system.colors.border,
                    }}
                  >
                    <div
                      className="w-full h-12 rounded mb-2 border border-black/10"
                      style={{ backgroundColor: hex }}
                    />
                    <div className="font-semibold text-xs" style={{ color: system.colors.textPrimary }}>
                      {label}
                    </div>
                    <div className="text-[11px] font-mono mt-0.5 opacity-75" style={{ color: system.colors.textMuted }}>
                      {hex}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography Tokens */}
            <div className="p-6 rounded-xl border" style={{ backgroundColor: system.colors.cardBg, borderColor: system.colors.border }}>
              <h3 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: system.colors.textMuted }}>
                Typography Hierarchy
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-mono block mb-1" style={{ color: system.colors.textMuted }}>
                    Heading Font: {system.typography.headingFont}
                  </span>
                  <div className="text-3xl font-bold tracking-tight" style={{ fontFamily: system.typography.headingFont }}>
                    The Quick Brown Fox Jumps Over The Lazy Dog
                  </div>
                </div>
                <div>
                  <span className="text-[11px] font-mono block mb-1" style={{ color: system.colors.textMuted }}>
                    Body Font: {system.typography.bodyFont}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: system.colors.textSecondary }}>
                    Design systems in UIForge maintain high legibility across dark and light backgrounds with deliberate optical sizing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
