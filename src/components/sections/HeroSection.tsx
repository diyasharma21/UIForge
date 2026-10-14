import React from 'react';
import { SectionConfig, DesignSystem } from '../../types';
import { SafeImage } from '../ui/SafeImage';

interface SectionProps {
  section: SectionConfig;
  design: DesignSystem;
  isEditing?: boolean;
}

export const HeroSection: React.FC<SectionProps> = ({ section, design }) => {
  const { content, variant, styles } = section;

  // Background styling overrides
  const bgStyle = styles?.customBg || design.colors.bg;
  const textPrimaryColor = styles?.customTextColor || design.colors.textPrimary;
  const accentColor = styles?.customAccentColor || design.colors.accent;

  // VARIANT 1: Fullscreen Photography
  if (variant === 'hero-fullscreen-photo') {
    return (
      <section
        className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden px-6 py-24 text-center"
        style={{ backgroundColor: bgStyle }}
      >
        {/* Background Image with Dark Gradient Overlay */}
        {content.imageUrl && (
          <div className="absolute inset-0 z-0">
            <SafeImage
              src={content.imageUrl}
              alt={content.imageAlt || content.title}
              className="w-full h-full object-cover scale-105 filter brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>
        )}

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {content.badge && (
            <span
              className="mb-6 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full"
              style={{
                backgroundColor: design.colors.badgeBg,
                color: design.colors.badgeText,
                border: `1px solid ${design.colors.border}`,
              }}
            >
              {content.badge}
            </span>
          )}

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.08] text-white"
            style={{ fontFamily: design.typography.headingFont }}
          >
            {content.title}
          </h1>

          {content.subtitle && (
            <p className="text-base md:text-xl text-neutral-200 max-w-2xl mb-10 leading-relaxed font-light">
              {content.subtitle}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4">
            {content.primaryButtonText && (
              <a
                href={content.primaryButtonLink || '#'}
                className="px-8 py-3.5 text-sm font-semibold tracking-wide transition-all shadow-xl hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: accentColor,
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
                className="px-8 py-3.5 text-sm font-semibold tracking-wide transition-all border backdrop-blur-md text-white hover:bg-white/10"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  borderRadius: design.radii.button,
                }}
                onClick={(e) => e.preventDefault()}
              >
                {content.secondaryButtonText}
              </a>
            )}
          </div>

          {/* Stats Bar */}
          {content.stats && content.stats.length > 0 && (
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 border-t border-white/20 w-full max-w-2xl">
              {content.stats.map((stat) => (
                <div key={stat.id} className="flex flex-col items-center">
                  <span className="text-2xl md:text-3xl font-extrabold text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-neutral-300 mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }

  // VARIANT 2: Bento Grid Layout
  if (variant === 'hero-bento') {
    return (
      <section
        className="w-full py-16 lg:py-24 px-6 lg:px-12 border-b"
        style={{
          backgroundColor: bgStyle,
          borderColor: design.colors.border,
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Info Card */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {content.badge && (
              <span
                className="self-start mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-md"
                style={{
                  backgroundColor: design.colors.badgeBg,
                  color: design.colors.badgeText,
                }}
              >
                {content.badge}
              </span>
            )}

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.12]"
              style={{
                fontFamily: design.typography.headingFont,
                color: textPrimaryColor,
              }}
            >
              {content.title}
            </h1>

            {content.subtitle && (
              <p
                className="text-base md:text-lg mb-8 leading-relaxed max-w-xl"
                style={{ color: design.colors.textSecondary }}
              >
                {content.subtitle}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4">
              {content.primaryButtonText && (
                <a
                  href={content.primaryButtonLink || '#'}
                  className="px-6 py-3.5 text-sm font-semibold tracking-wide transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    backgroundColor: accentColor,
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
                  className="px-6 py-3.5 text-sm font-semibold tracking-wide border transition-colors hover:opacity-80"
                  style={{
                    borderColor: design.colors.border,
                    color: textPrimaryColor,
                    borderRadius: design.radii.button,
                  }}
                  onClick={(e) => e.preventDefault()}
                >
                  {content.secondaryButtonText}
                </a>
              )}
            </div>

            {/* Quick Metrics */}
            {content.stats && content.stats.length > 0 && (
              <div className="mt-12 grid grid-cols-3 gap-6 pt-6 border-t" style={{ borderColor: design.colors.border }}>
                {content.stats.map((stat) => (
                  <div key={stat.id}>
                    <div className="text-2xl lg:text-3xl font-extrabold" style={{ color: textPrimaryColor }}>
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

          {/* Right Bento Visual */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative overflow-hidden shadow-2xl p-2"
              style={{
                backgroundColor: design.colors.cardBg,
                borderRadius: design.radii.card,
                border: `1px solid ${design.colors.border}`,
              }}
            >
              {content.imageUrl ? (
                <SafeImage
                  src={content.imageUrl}
                  alt={content.imageAlt || content.title}
                  className="w-full h-80 lg:h-[450px] object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-80 lg:h-[450px] bg-neutral-900 rounded-lg flex items-center justify-center text-neutral-500 font-medium">
                  Interactive Preview
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // VARIANT 3: Dark Cinematic or Split Editorial (Default high quality split)
  return (
    <section
      className="w-full py-16 lg:py-28 px-6 lg:px-12 border-b overflow-hidden relative"
      style={{
        backgroundColor: bgStyle,
        borderColor: design.colors.border,
      }}
    >
      {/* Subtle radial ambient light for dark mode */}
      {design.isDark && (
        <div
          className="absolute -top-40 right-1/4 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-20"
          style={{ backgroundColor: accentColor }}
        />
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Column Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {content.badge && (
            <div className="mb-4">
              <span
                className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase rounded-full"
                style={{
                  backgroundColor: design.colors.badgeBg,
                  color: design.colors.badgeText,
                  border: `1px solid ${design.colors.border}`,
                }}
              >
                {content.badge}
              </span>
            </div>
          )}

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.12]"
            style={{
              fontFamily: design.typography.headingFont,
              color: textPrimaryColor,
            }}
          >
            {content.title}
          </h1>

          {content.subtitle && (
            <p
              className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl font-normal"
              style={{ color: design.colors.textSecondary }}
            >
              {content.subtitle}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4">
            {content.primaryButtonText && (
              <a
                href={content.primaryButtonLink || '#'}
                className="px-7 py-3.5 text-sm font-semibold tracking-wide transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  backgroundColor: accentColor,
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
                className="px-7 py-3.5 text-sm font-semibold tracking-wide border transition-all hover:opacity-80"
                style={{
                  borderColor: design.colors.border,
                  color: textPrimaryColor,
                  borderRadius: design.radii.button,
                }}
                onClick={(e) => e.preventDefault()}
              >
                {content.secondaryButtonText}
              </a>
            )}
          </div>

          {/* Stats Bar */}
          {content.stats && content.stats.length > 0 && (
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t" style={{ borderColor: design.colors.border }}>
              {content.stats.map((stat) => (
                <div key={stat.id}>
                  <div className="text-2xl lg:text-3xl font-extrabold tracking-tight" style={{ color: textPrimaryColor }}>
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider font-medium mt-1" style={{ color: design.colors.textMuted }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column Imagery */}
        <div className="lg:col-span-5 relative">
          <div
            className="relative overflow-hidden shadow-2xl"
            style={{
              borderRadius: design.radii.card,
              border: `1px solid ${design.colors.border}`,
            }}
          >
            {content.imageUrl ? (
              <SafeImage
                src={content.imageUrl}
                alt={content.imageAlt || content.title}
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover transition-transform duration-700 hover:scale-105"
              />
            ) : (
              <div className="w-full h-96 bg-neutral-900 flex items-center justify-center text-neutral-500">
                Visual Showcase
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
