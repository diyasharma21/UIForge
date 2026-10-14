import React from 'react';
import { SectionConfig, DesignSystem } from '../../types';

interface SectionProps {
  section: SectionConfig;
  design: DesignSystem;
  isEditing?: boolean;
}

export const CtaSection: React.FC<SectionProps> = ({ section, design }) => {
  const { content, variant, styles } = section;
  const bgStyle = styles?.customBg || design.colors.bg;
  const textPrimary = styles?.customTextColor || design.colors.textPrimary;
  const accent = styles?.customAccentColor || design.colors.accent;

  const isGlow = variant === 'cta-banner-glow';

  return (
    <section
      className="w-full py-20 lg:py-28 px-6 lg:px-12 border-b relative overflow-hidden"
      style={{
        backgroundColor: bgStyle,
        borderColor: design.colors.border,
      }}
    >
      {/* Glow effect background */}
      {isGlow && (
        <div
          className="absolute inset-0 opacity-25 blur-3xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${accent} 0%, transparent 70%)`,
          }}
        />
      )}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {content.badge && (
          <span
            className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase rounded-full mb-4"
            style={{
              backgroundColor: design.colors.badgeBg,
              color: design.colors.badgeText,
              border: `1px solid ${design.colors.border}`,
            }}
          >
            {content.badge}
          </span>
        )}

        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight"
          style={{
            fontFamily: design.typography.headingFont,
            color: textPrimary,
          }}
        >
          {content.title || 'Take the Next Step Forward'}
        </h2>

        {content.subtitle && (
          <p
            className="text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ color: design.colors.textSecondary }}
          >
            {content.subtitle}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-4">
          {content.primaryButtonText && (
            <a
              href={content.primaryButtonLink || '#'}
              className="px-8 py-3.5 text-sm font-semibold tracking-wide transition-all shadow-lg hover:scale-105 active:scale-95"
              style={{
                backgroundColor: accent,
                color: design.isDark ? '#000000' : '#FFFFFF',
                borderRadius: design.radii.button,
              }}
              onClick={(e) => e.preventDefault()}
            >
              {content.primaryButtonText}
            </a>
          )}
          {content.secondaryButtonText && (
            <a
              href={content.secondaryButtonLink || '#'}
              className="px-8 py-3.5 text-sm font-semibold tracking-wide border transition-all hover:opacity-80"
              style={{
                borderColor: design.colors.border,
                color: textPrimary,
                borderRadius: design.radii.button,
              }}
              onClick={(e) => e.preventDefault()}
            >
              {content.secondaryButtonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
