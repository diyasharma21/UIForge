import React from 'react';
import { SectionConfig, DesignSystem } from '../../types';

interface SectionProps {
  section: SectionConfig;
  design: DesignSystem;
  isEditing?: boolean;
}

export const FooterSection: React.FC<SectionProps> = ({ section, design }) => {
  const { content, variant } = section;
  const isMultiColumn = variant === 'footer-multi-column';

  return (
    <footer
      className="w-full py-16 px-6 lg:px-12 border-t"
      style={{
        backgroundColor: design.colors.bgSubtle,
        borderColor: design.colors.border,
        color: design.colors.textPrimary,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {isMultiColumn && content.footerColumns && content.footerColumns.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <span
                className="text-xl font-bold tracking-tight block mb-3"
                style={{ fontFamily: design.typography.headingFont }}
              >
                {content.title || 'BRAND'}
              </span>
              {content.description && (
                <p className="text-sm max-w-sm mb-4 leading-relaxed" style={{ color: design.colors.textSecondary }}>
                  {content.description}
                </p>
              )}
            </div>

            {content.footerColumns.map((col, idx) => (
              <div key={idx}>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: design.colors.textMuted }}>
                  {col.title}
                </h4>
                <ul className="space-y-2 text-sm">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.href}
                        className="transition-colors hover:opacity-80"
                        style={{ color: design.colors.textSecondary }}
                        onClick={(e) => e.preventDefault()}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 text-center md:text-left">
            <div>
              <span
                className="text-lg font-bold tracking-tight block"
                style={{ fontFamily: design.typography.headingFont }}
              >
                {content.title || 'BRAND'}
              </span>
              {content.description && (
                <p className="text-xs mt-1" style={{ color: design.colors.textSecondary }}>
                  {content.description}
                </p>
              )}
            </div>
            {content.contactInfo && (
              <div className="text-xs" style={{ color: design.colors.textMuted }}>
                {content.contactInfo.address && <span>{content.contactInfo.address} • </span>}
                {content.contactInfo.phone && <span>{content.contactInfo.phone}</span>}
              </div>
            )}
          </div>
        )}

        <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between text-xs gap-4" style={{ borderColor: design.colors.border, color: design.colors.textMuted }}>
          <div>{content.copyrightText || `© ${new Date().getFullYear()} UIForge. All rights reserved.`}</div>
          <div className="flex items-center gap-6">
            <span>Built with UIForge Template Engine</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
