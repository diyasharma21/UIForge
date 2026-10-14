import React from 'react';
import { SectionConfig, DesignSystem } from '../../types';
import { SafeImage } from '../ui/SafeImage';

interface SectionProps {
  section: SectionConfig;
  design: DesignSystem;
  isEditing?: boolean;
}

export const IndustrySection: React.FC<SectionProps> = ({ section, design }) => {
  const { content, type, variant, styles } = section;
  const items = content.items || [];
  const bgStyle = styles?.customBg || design.colors.bgSubtle;
  const textPrimary = styles?.customTextColor || design.colors.textPrimary;
  const accent = styles?.customAccentColor || design.colors.accent;

  // 1. Doctor Profile Grid
  if (type === 'doctor-profile' || variant === 'doctor-grid') {
    return (
      <section
        className="w-full py-20 lg:py-28 px-6 lg:px-12 border-b"
        style={{ backgroundColor: bgStyle, borderColor: design.colors.border }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            {content.badge && (
              <span
                className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full mb-3"
                style={{ backgroundColor: design.colors.badgeBg, color: design.colors.badgeText }}
              >
                {content.badge}
              </span>
            )}
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
              style={{ fontFamily: design.typography.headingFont, color: textPrimary }}
            >
              {content.title || 'Our Medical Specialists'}
            </h2>
            {content.subtitle && (
              <p className="text-base md:text-lg" style={{ color: design.colors.textSecondary }}>
                {content.subtitle}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((doc, idx) => (
              <div
                key={doc.id || idx}
                className="overflow-hidden shadow-sm transition-all hover:-translate-y-1"
                style={{
                  backgroundColor: design.colors.cardBg,
                  borderRadius: design.radii.card,
                  border: `1px solid ${design.colors.border}`,
                }}
              >
                {doc.imageUrl && (
                  <SafeImage
                    src={doc.imageUrl}
                    alt={doc.title}
                    className="w-full h-72 object-cover"
                  />
                )}
                <div className="p-6">
                  {doc.meta && (
                    <span className="text-xs font-semibold tracking-wider uppercase mb-1 block" style={{ color: accent }}>
                      {doc.meta}
                    </span>
                  )}
                  <h3
                    className="text-xl font-bold mb-2 tracking-tight"
                    style={{ fontFamily: design.typography.headingFont, color: textPrimary }}
                  >
                    {doc.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: design.colors.textSecondary }}>
                    {doc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 2. Appointment Booking / Table Reservation Card
  if (type === 'appointment-booking' || type === 'table-reservation') {
    return (
      <section
        className="w-full py-20 lg:py-28 px-6 lg:px-12 border-b"
        style={{ backgroundColor: bgStyle, borderColor: design.colors.border }}
      >
        <div className="max-w-4xl mx-auto">
          <div
            className="p-8 md:p-12 shadow-2xl relative overflow-hidden"
            style={{
              backgroundColor: design.colors.cardBg,
              borderRadius: design.radii.card,
              border: `1px solid ${design.colors.border}`,
            }}
          >
            {content.badge && (
              <span
                className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full mb-4"
                style={{ backgroundColor: design.colors.badgeBg, color: design.colors.badgeText }}
              >
                {content.badge}
              </span>
            )}
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
              style={{ fontFamily: design.typography.headingFont, color: textPrimary }}
            >
              {content.title || 'Reserve Your Visit'}
            </h2>
            {content.subtitle && (
              <p className="text-base mb-8 leading-relaxed" style={{ color: design.colors.textSecondary }}>
                {content.subtitle}
              </p>
            )}

            {/* Contact details */}
            {content.contactInfo && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pt-6 border-t" style={{ borderColor: design.colors.border }}>
                {content.contactInfo.phone && (
                  <div>
                    <span className="text-xs uppercase font-semibold block" style={{ color: design.colors.textMuted }}>Direct Line</span>
                    <span className="text-sm font-medium" style={{ color: textPrimary }}>{content.contactInfo.phone}</span>
                  </div>
                )}
                {content.contactInfo.email && (
                  <div>
                    <span className="text-xs uppercase font-semibold block" style={{ color: design.colors.textMuted }}>Inquiries</span>
                    <span className="text-sm font-medium" style={{ color: textPrimary }}>{content.contactInfo.email}</span>
                  </div>
                )}
                {content.contactInfo.address && (
                  <div className="sm:col-span-2">
                    <span className="text-xs uppercase font-semibold block" style={{ color: design.colors.textMuted }}>Location</span>
                    <span className="text-sm font-medium" style={{ color: textPrimary }}>{content.contactInfo.address}</span>
                  </div>
                )}
              </div>
            )}

            <button
              type="button"
              className="px-8 py-3.5 text-sm font-semibold tracking-wide transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
              style={{
                backgroundColor: accent,
                color: design.isDark ? '#000000' : '#FFFFFF',
                borderRadius: design.radii.button,
              }}
            >
              {content.primaryButtonText || 'Confirm Booking'}
            </button>
          </div>
        </div>
      </section>
    );
  }

  // 3. Rooms / Villas / Property Listings
  if (type === 'room-showcase' || type === 'property-listing') {
    return (
      <section
        className="w-full py-20 lg:py-28 px-6 lg:px-12 border-b"
        style={{ backgroundColor: bgStyle, borderColor: design.colors.border }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            {content.badge && (
              <span
                className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full mb-3"
                style={{ backgroundColor: design.colors.badgeBg, color: design.colors.badgeText }}
              >
                {content.badge}
              </span>
            )}
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
              style={{ fontFamily: design.typography.headingFont, color: textPrimary }}
            >
              {content.title || 'Featured Sanctuaries'}
            </h2>
            {content.subtitle && (
              <p className="text-base md:text-lg" style={{ color: design.colors.textSecondary }}>
                {content.subtitle}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((room, idx) => (
              <div
                key={room.id || idx}
                className="overflow-hidden shadow-lg transition-all hover:-translate-y-1"
                style={{
                  backgroundColor: design.colors.cardBg,
                  borderRadius: design.radii.card,
                  border: `1px solid ${design.colors.border}`,
                }}
              >
                <div className="p-8 flex flex-col justify-between h-full">
                  <div>
                    {room.meta && (
                      <span className="text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: accent }}>
                        {room.meta}
                      </span>
                    )}
                    <h3
                      className="text-2xl font-bold mb-3 tracking-tight"
                      style={{ fontFamily: design.typography.headingFont, color: textPrimary }}
                    >
                      {room.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: design.colors.textSecondary }}>
                      {room.description}
                    </p>
                  </div>
                  {room.price && (
                    <div className="pt-4 border-t flex items-center justify-between font-bold text-lg" style={{ borderColor: design.colors.border }}>
                      <span style={{ color: textPrimary }}>Pricing</span>
                      <span style={{ color: accent }}>{room.price}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Fallback generic categorized items
  return (
    <section
      className="w-full py-20 lg:py-28 px-6 lg:px-12 border-b"
      style={{ backgroundColor: bgStyle, borderColor: design.colors.border }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          {content.badge && (
            <span
              className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full mb-3"
              style={{ backgroundColor: design.colors.badgeBg, color: design.colors.badgeText }}
            >
              {content.badge}
            </span>
          )}
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-2"
            style={{ fontFamily: design.typography.headingFont, color: textPrimary }}
          >
            {content.title}
          </h2>
          {content.subtitle && (
            <p className="text-base" style={{ color: design.colors.textSecondary }}>
              {content.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <div
              key={item.id || idx}
              className="p-6 rounded-lg border shadow-sm"
              style={{
                backgroundColor: design.colors.cardBg,
                borderColor: design.colors.border,
              }}
            >
              <h3 className="font-bold text-lg mb-2" style={{ color: textPrimary }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: design.colors.textSecondary }}>
                {item.description}
              </p>
              {item.price && (
                <span className="text-sm font-semibold" style={{ color: accent }}>
                  {item.price}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
