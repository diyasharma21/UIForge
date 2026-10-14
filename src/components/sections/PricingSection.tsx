import React from 'react';
import { SectionConfig, DesignSystem } from '../../types';

interface SectionProps {
  section: SectionConfig;
  design: DesignSystem;
  isEditing?: boolean;
}

export const PricingSection: React.FC<SectionProps> = ({ section, design }) => {
  const { content, styles } = section;
  const items = content.items || [];
  const bgStyle = styles?.customBg || design.colors.bg;
  const textPrimary = styles?.customTextColor || design.colors.textPrimary;
  const accent = styles?.customAccentColor || design.colors.accent;

  return (
    <section
      className="w-full py-20 lg:py-28 px-6 lg:px-12 border-b"
      style={{
        backgroundColor: bgStyle,
        borderColor: design.colors.border,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
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
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            style={{
              fontFamily: design.typography.headingFont,
              color: textPrimary,
            }}
          >
            {content.title || 'Simple, Transparent Pricing'}
          </h2>
          {content.subtitle && (
            <p className="text-base md:text-lg" style={{ color: design.colors.textSecondary }}>
              {content.subtitle}
            </p>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {items.map((item, index) => {
            const isFeatured = item.badge === 'Most Popular' || index === 1;

            return (
              <div
                key={item.id || index}
                className={`p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured ? 'shadow-2xl scale-105 z-10' : 'shadow-sm'
                }`}
                style={{
                  backgroundColor: design.colors.cardBg,
                  borderRadius: design.radii.card,
                  border: isFeatured
                    ? `2px solid ${accent}`
                    : `1px solid ${design.colors.border}`,
                }}
              >
                {item.badge && (
                  <span
                    className="absolute -top-3.5 left-8 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full"
                    style={{
                      backgroundColor: accent,
                      color: design.isDark ? '#000000' : '#FFFFFF',
                    }}
                  >
                    {item.badge}
                  </span>
                )}

                <div>
                  <h3
                    className="text-xl font-bold mb-2 tracking-tight"
                    style={{
                      fontFamily: design.typography.headingFont,
                      color: textPrimary,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm mb-6 leading-relaxed" style={{ color: design.colors.textSecondary }}>
                    {item.description}
                  </p>

                  <div className="mb-8">
                    <span
                      className="text-4xl lg:text-5xl font-extrabold tracking-tight"
                      style={{ color: textPrimary }}
                    >
                      {item.price}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full py-3.5 text-sm font-semibold tracking-wide transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    backgroundColor: isFeatured ? accent : design.colors.badgeBg,
                    color: isFeatured
                      ? design.isDark
                        ? '#000000'
                        : '#FFFFFF'
                      : textPrimary,
                    borderRadius: design.radii.button,
                  }}
                >
                  Choose {item.title}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
