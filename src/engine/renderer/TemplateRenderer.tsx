import React from 'react';
import { TemplateConfig, SectionConfig, DesignStyleId } from '../../types';
import { DESIGN_SYSTEMS } from '../../data/designSystems';
import { NavbarSection } from '../../components/sections/NavbarSection';
import { HeroSection } from '../../components/sections/HeroSection';
import { ServicesSection } from '../../components/sections/ServicesSection';
import { AboutSection } from '../../components/sections/AboutSection';
import { PricingSection } from '../../components/sections/PricingSection';
import { IndustrySection } from '../../components/sections/IndustrySection';
import { CtaSection } from '../../components/sections/CtaSection';
import { FaqSection } from '../../components/sections/FaqSection';
import { FooterSection } from '../../components/sections/FooterSection';

interface TemplateRendererProps {
  template: TemplateConfig;
  selectedSectionId?: string | null;
  onSelectSection?: (sectionId: string) => void;
  isEditor?: boolean;
}

export const TemplateRenderer: React.FC<TemplateRendererProps> = ({
  template,
  selectedSectionId,
  onSelectSection,
  isEditor = false,
}) => {
  const design = DESIGN_SYSTEMS[template.designStyle as DesignStyleId] || DESIGN_SYSTEMS['luxury-editorial'];

  const renderSectionComponent = (section: SectionConfig) => {
    switch (section.type) {
      case 'navbar':
        return <NavbarSection section={section} design={design} isEditing={isEditor} />;
      case 'hero':
        return <HeroSection section={section} design={design} isEditing={isEditor} />;
      case 'services':
      case 'features':
        return <ServicesSection section={section} design={design} isEditing={isEditor} />;
      case 'about':
        return <AboutSection section={section} design={design} isEditing={isEditor} />;
      case 'pricing':
        return <PricingSection section={section} design={design} isEditing={isEditor} />;
      case 'cta':
        return <CtaSection section={section} design={design} isEditing={isEditor} />;
      case 'faq':
        return <FaqSection section={section} design={design} isEditing={isEditor} />;
      case 'footer':
        return <FooterSection section={section} design={design} isEditing={isEditor} />;
      // Specialized industry sections
      case 'doctor-profile':
      case 'appointment-booking':
      case 'medical-departments':
      case 'course-catalog':
      case 'faculty-showcase':
      case 'membership-plans':
      case 'class-schedule':
      case 'menu-catalog':
      case 'table-reservation':
      case 'room-showcase':
      case 'property-listing':
      case 'tech-specs-comparison':
        return <IndustrySection section={section} design={design} isEditing={isEditor} />;
      default:
        return (
          <div className="p-8 my-4 border border-dashed border-red-500/50 bg-red-950/20 text-red-200 text-sm rounded">
            <strong>Custom Section:</strong> {section.type} ({section.variant})
          </div>
        );
    }
  };

  return (
    <div
      className="w-full min-h-screen transition-colors duration-300 relative select-text"
      style={{
        backgroundColor: design.colors.bg,
        color: design.colors.textPrimary,
        fontFamily: design.typography.bodyFont,
      }}
    >
      {template.sections.map((section) => {
        // If not in editor mode and section is hidden, skip rendering
        if (!section.visible && !isEditor) return null;

        const isSelected = isEditor && selectedSectionId === section.id;
        const isHiddenInEditor = isEditor && !section.visible;

        return (
          <div
            key={section.id}
            id={section.id}
            onClick={() => {
              if (isEditor && onSelectSection) {
                onSelectSection(section.id);
              }
            }}
            className={`relative transition-all ${
              isEditor
                ? 'cursor-pointer hover:outline-2 hover:outline-[var(--theme-border-glow)] hover:outline-offset-[-2px]'
                : ''
            } ${
              isSelected
                ? 'outline-2 outline-[var(--theme-accent-light)] outline-offset-[-2px] shadow-2xl z-20'
                : ''
            } ${isHiddenInEditor ? 'opacity-40 grayscale' : ''}`}
          >
            {/* Editor Selection Badge */}
            {isEditor && isSelected && (
              <div className="absolute top-2 left-2 z-30 flex items-center gap-1.5 px-2.5 py-1 btn-theme-primary text-white rounded text-xs font-semibold shadow-lg pointer-events-none">
                <span>Selected: {section.type}</span>
                <span className="opacity-85 font-mono text-[10px]">({section.variant})</span>
              </div>
            )}

            {renderSectionComponent(section)}
          </div>
        );
      })}
    </div>
  );
};
