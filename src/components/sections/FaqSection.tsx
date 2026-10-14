import React, { useState } from 'react';
import { SectionConfig, DesignSystem } from '../../types';

interface SectionProps {
  section: SectionConfig;
  design: DesignSystem;
  isEditing?: boolean;
}

export const FaqSection: React.FC<SectionProps> = ({ section, design }) => {
  const { content, styles } = section;
  const items = content.items || [];
  const bgStyle = styles?.customBg || design.colors.bg;
  const textPrimary = styles?.customTextColor || design.colors.textPrimary;

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="w-full py-20 lg:py-28 px-6 lg:px-12 border-b"
      style={{
        backgroundColor: bgStyle,
        borderColor: design.colors.border,
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          {content.badge && (
            <span
              className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase rounded-full mb-3"
              style={{
                backgroundColor: design.colors.badgeBg,
                color: design.colors.badgeText,
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
            {content.title || 'Frequently Asked Questions'}
          </h2>
          {content.subtitle && (
            <p className="text-base md:text-lg" style={{ color: design.colors.textSecondary }}>
              {content.subtitle}
            </p>
          )}
        </div>

        <div className="divide-y" style={{ borderColor: design.colors.border }}>
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={item.id || idx} className="py-6">
                <button
                  type="button"
                  className="w-full flex items-center justify-between text-left font-semibold text-lg md:text-xl gap-4"
                  style={{ color: textPrimary }}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span>{item.title}</span>
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold border transition-transform duration-200"
                    style={{
                      borderColor: design.colors.border,
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                    }}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p
                    className="mt-4 text-sm md:text-base leading-relaxed max-w-3xl"
                    style={{ color: design.colors.textSecondary }}
                  >
                    {item.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
