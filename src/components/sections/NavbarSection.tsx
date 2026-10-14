import React from 'react';
import { SectionConfig, DesignSystem } from '../../types';

interface SectionProps {
  section: SectionConfig;
  design: DesignSystem;
  isEditing?: boolean;
}

export const NavbarSection: React.FC<SectionProps> = ({ section, design }) => {
  const { content, variant } = section;
  const isFloating = variant === 'navbar-floating';
  const isGlass = variant === 'navbar-glass';

  return (
    <header
      className={`w-full z-40 transition-all ${
        isFloating ? 'pt-4 px-4 sticky top-0' : 'sticky top-0'
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all ${
          isFloating
            ? 'max-w-7xl px-6 py-3.5 rounded-full shadow-lg'
            : isGlass
            ? 'w-full px-6 lg:px-12 py-4 backdrop-blur-md border-b'
            : 'w-full px-6 lg:px-12 py-4 border-b'
        }`}
        style={{
          backgroundColor: isGlass
            ? `${design.colors.bg}CC`
            : isFloating
            ? design.colors.cardBg
            : design.colors.bg,
          borderColor: design.colors.border,
          color: design.colors.textPrimary,
        }}
      >
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <span
            className="text-lg font-bold tracking-tight"
            style={{
              fontFamily: design.typography.headingFont,
              color: design.colors.textPrimary,
            }}
          >
            {content.title || 'BRAND'}
          </span>
          {content.badge && (
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider hidden sm:inline-block"
              style={{
                backgroundColor: design.colors.badgeBg,
                color: design.colors.badgeText,
              }}
            >
              {content.badge}
            </span>
          )}
        </div>

        {/* Navigation Links */}
        {content.navLinks && content.navLinks.length > 0 && (
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {content.navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="transition-colors hover:opacity-80"
                style={{ color: design.colors.textSecondary }}
                onClick={(e) => e.preventDefault()}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {/* Action Button */}
        {content.primaryButtonText && (
          <div className="flex items-center gap-3">
            <a
              href={content.primaryButtonLink || '#'}
              className="px-4 py-2 text-xs font-semibold tracking-wide transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              style={{
                backgroundColor: design.colors.accent,
                color: design.isDark ? '#000000' : '#FFFFFF',
                borderRadius: design.radii.button,
              }}
              onClick={(e) => e.preventDefault()}
            >
              {content.primaryButtonText}
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
