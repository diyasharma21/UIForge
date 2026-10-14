import React from 'react';
import { SectionConfig, DesignSystem } from '../../types';
import { SafeImage } from '../ui/SafeImage';

interface SectionProps {
  section: SectionConfig;
  design: DesignSystem;
  isEditing?: boolean;
}

export const AboutSection: React.FC<SectionProps> = ({ section, design }) => {
  const { content, styles } = section;
  const bgStyle = styles?.customBg || design.colors.bg;
  const textPrimary = styles?.customTextColor || design.colors.textPrimary;

  return (
    <section
      className="w-full py-20 lg:py-28 px-6 lg:px-12 border-b"
      style={{
        backgroundColor: bgStyle,
        borderColor: design.colors.border,
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column Story */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {content.badge && (
            <span
              className="self-start mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full"
              style={{
                backgroundColor: design.colors.badgeBg,
                color: design.colors.badgeText,
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
            {content.title || 'Our Foundations'}
          </h2>

          <p
            className="text-base sm:text-lg mb-8 leading-relaxed font-normal"
            style={{ color: design.colors.textSecondary }}
          >
            {content.description || content.subtitle}
          </p>

          {/* Stats Bar */}
          {content.stats && content.stats.length > 0 && (
            <div className="grid grid-cols-3 gap-6 pt-6 border-t" style={{ borderColor: design.colors.border }}>
              {content.stats.map((stat) => (
                <div key={stat.id}>
                  <div className="text-2xl lg:text-3xl font-extrabold tracking-tight" style={{ color: textPrimary }}>
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider mt-1" style={{ color: design.colors.textMuted }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column Image */}
        {content.imageUrl && (
          <div className="lg:col-span-5 relative">
            <div
              className="relative overflow-hidden shadow-xl"
              style={{
                borderRadius: design.radii.card,
                border: `1px solid ${design.colors.border}`,
              }}
            >
              <SafeImage
                src={content.imageUrl}
                alt={content.imageAlt || content.title || 'About us image'}
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
