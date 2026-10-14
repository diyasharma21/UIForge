import React from 'react';
import { SectionConfig, DesignSystem } from '../../types';

interface SectionProps {
  section: SectionConfig;
  design: DesignSystem;
  isEditing?: boolean;
}

export const ServicesSection: React.FC<SectionProps> = ({ section, design }) => {
  const { content, variant, styles } = section;
  const items = content.items || [];

  const bgStyle = styles?.customBg || design.colors.bgSubtle;
  const textPrimary = styles?.customTextColor || design.colors.textPrimary;
  const accent = styles?.customAccentColor || design.colors.accent;

  // VARIANT: Editorial List (Minimalist elegant list with pricing & badges)
  if (variant === 'services-editorial-list') {
    return (
      <section
        className="w-full py-20 lg:py-28 px-6 lg:px-12 border-b"
        style={{
          backgroundColor: bgStyle,
          borderColor: design.colors.border,
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 max-w-2xl">
            {content.badge && (
              <span
                className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full mb-4"
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
              {content.title || 'Curated Offerings'}
            </h2>
            {content.subtitle && (
              <p className="text-base md:text-lg" style={{ color: design.colors.textSecondary }}>
                {content.subtitle}
              </p>
            )}
          </div>

          {/* List items */}
          <div className="divide-y" style={{ borderColor: design.colors.border }}>
            {items.map((item, index) => (
              <div
                key={item.id || index}
                className="py-8 group flex flex-col md:flex-row md:items-baseline justify-between gap-6 transition-colors hover:pl-2"
              >
                <div className="max-w-xl">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-xs font-mono opacity-50" style={{ color: textPrimary }}>
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <h3
                      className="text-xl md:text-2xl font-semibold tracking-tight"
                      style={{
                        fontFamily: design.typography.headingFont,
                        color: textPrimary,
                      }}
                    >
                      {item.title}
                    </h3>
                    {item.badge && (
                      <span
                        className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase"
                        style={{
                          backgroundColor: design.colors.badgeBg,
                          color: design.colors.badgeText,
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: design.colors.textSecondary }}>
                    {item.description}
                  </p>
                </div>

                {item.price && (
                  <div className="flex items-center gap-2 self-start md:self-auto font-semibold text-lg" style={{ color: accent }}>
                    {item.price}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // DEFAULT / GRID VARIANT: 2, 3 or 4 Column Cards
  return (
    <section
      className="w-full py-20 lg:py-28 px-6 lg:px-12 border-b"
      style={{
        backgroundColor: bgStyle,
        borderColor: design.colors.border,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
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
            {content.title || 'Capabilities & Services'}
          </h2>
          {content.subtitle && (
            <p className="text-base md:text-lg leading-relaxed" style={{ color: design.colors.textSecondary }}>
              {content.subtitle}
            </p>
          )}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div
              key={item.id || index}
              className="p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm"
              style={{
                backgroundColor: design.colors.cardBg,
                borderRadius: design.radii.card,
                border: `1px solid ${design.colors.border}`,
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs"
                    style={{
                      backgroundColor: design.colors.badgeBg,
                      color: accent,
                    }}
                  >
                    0{index + 1}
                  </span>
                  {item.badge && (
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase"
                      style={{
                        backgroundColor: design.colors.badgeBg,
                        color: design.colors.badgeText,
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3
                  className="text-xl font-bold mb-3 tracking-tight"
                  style={{
                    fontFamily: design.typography.headingFont,
                    color: textPrimary,
                  }}
                >
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed mb-6" style={{ color: design.colors.textSecondary }}>
                  {item.description}
                </p>
              </div>

              {item.price && (
                <div className="pt-4 border-t flex items-center justify-between text-sm font-semibold" style={{ borderColor: design.colors.border }}>
                  <span style={{ color: design.colors.textMuted }}>Fee / Rate</span>
                  <span style={{ color: accent }}>{item.price}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
