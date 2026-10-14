import React, { useState } from 'react';
import {
  Type,
  Image as ImageIcon,
  Palette,
  Sliders,
  RotateCcw,
  Upload,
} from 'lucide-react';
import { useTemplateStore } from '../../store/templateStore';
import { DESIGN_SYSTEMS } from '../../data/designSystems';
import { DesignStyleId } from '../../types';

export const InspectorPanel: React.FC = () => {
  const {
    template,
    selectedSectionId,
    updateSectionContent,
    updateSectionStyles,
    applyDesignSystem,
    resetSection,
  } = useTemplateStore();

  const [activeTab, setActiveTab] = useState<'content' | 'media' | 'theme' | 'layout'>('content');

  const selectedSection = template.sections.find((s) => s.id === selectedSectionId);

  if (!selectedSection) {
    return (
      <aside className="w-80 border-l border-neutral-800 bg-neutral-900/95 p-6 flex flex-col items-center justify-center text-center text-neutral-500">
        <Sliders className="w-8 h-8 mb-3 opacity-40" />
        <p className="text-xs">Select any section on the canvas or outline to customize its content and styles.</p>
      </aside>
    );
  }

  const { content, styles } = selectedSection;

  // Handle local image file upload converting to base64 Data URL
  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        updateSectionContent(selectedSection.id, { imageUrl: reader.result });
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <aside className="w-80 border-l border-neutral-800 bg-neutral-900/95 flex flex-col h-[calc(100vh-3.5rem)] select-none">
      {/* Header */}
      <div className="p-3.5 border-b border-neutral-800 flex items-center justify-between">
        <div>
          <span className="text-xs font-bold text-neutral-200 capitalize block">
            {selectedSection.type.replace('-', ' ')}
          </span>
          <span className="text-[10px] text-neutral-500 font-mono">
            {selectedSection.variant}
          </span>
        </div>

        <button
          type="button"
          onClick={() => resetSection(selectedSection.id)}
          className="p-1 rounded text-neutral-400 hover:text-amber-400 hover:bg-neutral-800 transition-colors"
          title="Reset this section to initial content"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-neutral-800 bg-neutral-950/40 text-xs">
        {[
          { id: 'content', label: 'Content', icon: Type },
          { id: 'media', label: 'Media', icon: ImageIcon },
          { id: 'theme', label: 'Theme', icon: Palette },
          { id: 'layout', label: 'Layout', icon: Sliders },
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setActiveTab(id as typeof activeTab)}
            className={`flex-1 py-2.5 flex flex-col items-center justify-center gap-1 border-b-2 transition-colors ${
              activeTab === id
                ? 'border-[var(--theme-accent-light)] theme-text-accent font-medium'
                : 'border-transparent text-neutral-500 hover:text-neutral-300'
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span className="text-[10px]">{label}</span>
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
        {/* TAB 1: CONTENT */}
        {activeTab === 'content' && (
          <div className="space-y-4">
            {/* Badge */}
            <div>
              <label className="block text-neutral-400 font-medium mb-1.5">
                Eyebrow Badge
              </label>
              <input
                type="text"
                value={content.badge || ''}
                onChange={(e) => updateSectionContent(selectedSection.id, { badge: e.target.value })}
                placeholder="e.g. Board Certified"
                className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded text-neutral-100 focus:outline-hidden focus:border-[var(--theme-border-glow)]"
              />
            </div>

            {/* Title / Heading */}
            <div>
              <label className="block text-neutral-400 font-medium mb-1.5">
                Main Heading
              </label>
              <textarea
                rows={2}
                value={content.title || ''}
                onChange={(e) => updateSectionContent(selectedSection.id, { title: e.target.value })}
                className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded text-neutral-100 focus:outline-hidden focus:border-[var(--theme-border-glow)] resize-none font-medium"
              />
            </div>

            {/* Subtitle / Description */}
            <div>
              <label className="block text-neutral-400 font-medium mb-1.5">
                Subtitle / Description
              </label>
              <textarea
                rows={3}
                value={content.subtitle || content.description || ''}
                onChange={(e) => updateSectionContent(selectedSection.id, { subtitle: e.target.value, description: e.target.value })}
                className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded text-neutral-100 focus:outline-hidden focus:border-[var(--theme-border-glow)] resize-none leading-relaxed"
              />
            </div>

            {/* Primary Button */}
            <div className="p-3 bg-neutral-800/40 rounded-lg border border-neutral-800 space-y-3">
              <span className="font-semibold text-neutral-300 block">Primary Action Button</span>
              <div>
                <label className="block text-neutral-400 text-[11px] mb-1">Button Label</label>
                <input
                  type="text"
                  value={content.primaryButtonText || ''}
                  onChange={(e) => updateSectionContent(selectedSection.id, { primaryButtonText: e.target.value })}
                  placeholder="e.g. Book Consultation"
                  className="w-full px-2.5 py-1.5 bg-neutral-800 border border-neutral-700 rounded text-neutral-100"
                />
              </div>
              <div>
                <label className="block text-neutral-400 text-[11px] mb-1">Button Link</label>
                <input
                  type="text"
                  value={content.primaryButtonLink || ''}
                  onChange={(e) => updateSectionContent(selectedSection.id, { primaryButtonLink: e.target.value })}
                  placeholder="#booking or https://..."
                  className="w-full px-2.5 py-1.5 bg-neutral-800 border border-neutral-700 rounded text-neutral-100"
                />
              </div>
            </div>

            {/* Secondary Button */}
            <div className="p-3 bg-neutral-800/40 rounded-lg border border-neutral-800 space-y-3">
              <span className="font-semibold text-neutral-300 block">Secondary Button</span>
              <div>
                <label className="block text-neutral-400 text-[11px] mb-1">Button Label</label>
                <input
                  type="text"
                  value={content.secondaryButtonText || ''}
                  onChange={(e) => updateSectionContent(selectedSection.id, { secondaryButtonText: e.target.value })}
                  placeholder="e.g. Learn More"
                  className="w-full px-2.5 py-1.5 bg-neutral-800 border border-neutral-700 rounded text-neutral-100"
                />
              </div>
            </div>

            {/* Editable List Items (if present) */}
            {content.items && content.items.length > 0 && (
              <div className="pt-2 border-t border-neutral-800">
                <span className="font-semibold text-neutral-300 block mb-3">
                  Card / List Items ({content.items.length})
                </span>
                <div className="space-y-3">
                  {content.items.map((item, idx) => (
                    <div key={item.id || idx} className="p-2.5 bg-neutral-800/60 rounded border border-neutral-700/50 space-y-2">
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => {
                          const updated = [...(content.items || [])];
                          updated[idx] = { ...updated[idx], title: e.target.value };
                          updateSectionContent(selectedSection.id, { items: updated });
                        }}
                        className="w-full px-2 py-1 bg-neutral-900 border border-neutral-700 rounded font-medium text-neutral-100 text-xs"
                      />
                      <textarea
                        rows={2}
                        value={item.description}
                        onChange={(e) => {
                          const updated = [...(content.items || [])];
                          updated[idx] = { ...updated[idx], description: e.target.value };
                          updateSectionContent(selectedSection.id, { items: updated });
                        }}
                        className="w-full px-2 py-1 bg-neutral-900 border border-neutral-700 rounded text-neutral-300 text-xs resize-none"
                      />
                      {item.price !== undefined && (
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-neutral-500 uppercase">Price:</span>
                          <input
                            type="text"
                            value={item.price}
                            onChange={(e) => {
                              const updated = [...(content.items || [])];
                              updated[idx] = { ...updated[idx], price: e.target.value };
                              updateSectionContent(selectedSection.id, { items: updated });
                            }}
                            className="px-2 py-0.5 bg-neutral-900 border border-neutral-700 rounded text-xs theme-text-accent font-mono"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: MEDIA & IMAGES */}
        {activeTab === 'media' && (
          <div className="space-y-4">
            <div>
              <label className="block text-neutral-400 font-medium mb-1.5">
                Image Web URL
              </label>
              <input
                type="text"
                value={content.imageUrl || ''}
                onChange={(e) => updateSectionContent(selectedSection.id, { imageUrl: e.target.value })}
                placeholder="https://images.unsplash.com/..."
                className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded text-neutral-100 text-xs focus:outline-hidden focus:border-[var(--theme-border-glow)]"
              />
            </div>

            {/* Local Image Upload */}
            <div>
              <label className="block text-neutral-400 font-medium mb-1.5">
                Upload Local Photo
              </label>
              <label className="flex items-center justify-center gap-2 p-3 border border-dashed border-neutral-700 hover:border-[var(--theme-border-glow)] rounded-lg cursor-pointer bg-neutral-800/40 hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200 transition-colors">
                <Upload className="w-4 h-4 theme-text-accent" />
                <span className="text-xs">Browse image file...</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Image Preview */}
            {content.imageUrl && (
              <div className="pt-2">
                <span className="text-neutral-400 text-[11px] block mb-1.5">Current Image Preview</span>
                <img
                  src={content.imageUrl}
                  alt={content.imageAlt || 'Preview'}
                  className="w-full h-36 object-cover rounded-md border border-neutral-700"
                />
              </div>
            )}

            {/* Alt Text */}
            <div>
              <label className="block text-neutral-400 font-medium mb-1.5">
                Accessibility Alt Text
              </label>
              <input
                type="text"
                value={content.imageAlt || ''}
                onChange={(e) => updateSectionContent(selectedSection.id, { imageAlt: e.target.value })}
                placeholder="Describe image for screen readers"
                className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded text-neutral-100 text-xs"
              />
            </div>
          </div>
        )}

        {/* TAB 3: THEME & COLOR PALETTES */}
        {activeTab === 'theme' && (
          <div className="space-y-4">
            <div>
              <label className="block text-neutral-400 font-medium mb-2">
                Template Design System
              </label>
              <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto pr-1">
                {Object.values(DESIGN_SYSTEMS).map((ds) => {
                  const isActive = template.designStyle === ds.id;

                  return (
                    <button
                      key={ds.id}
                      type="button"
                      onClick={() => applyDesignSystem(ds.id as DesignStyleId)}
                      className={`p-2.5 rounded-md text-left flex items-center justify-between border transition-all ${
                        isActive
                          ? 'border-[var(--theme-border-glow)] bg-[var(--theme-glow)] text-white font-medium'
                          : 'border-neutral-800 bg-neutral-800/40 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-xs text-neutral-200">{ds.name}</div>
                        <div className="text-[10px] text-neutral-500 truncate max-w-[180px]">
                          {ds.description}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-white/20"
                          style={{ backgroundColor: ds.colors.bg }}
                        />
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-white/20"
                          style={{ backgroundColor: ds.colors.accent }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Section Overrides */}
            <div className="pt-4 border-t border-neutral-800 space-y-3">
              <span className="font-semibold text-neutral-300 block">Section Color Overrides</span>
              <div>
                <label className="block text-neutral-400 text-[11px] mb-1">Custom Background</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={styles?.customBg || '#0F0E0E'}
                    onChange={(e) => updateSectionStyles(selectedSection.id, { customBg: e.target.value })}
                    className="w-7 h-7 rounded border border-neutral-700 bg-transparent cursor-pointer"
                  />
                  <input
                    type="text"
                    value={styles?.customBg || ''}
                    onChange={(e) => updateSectionStyles(selectedSection.id, { customBg: e.target.value })}
                    placeholder="Hex code (e.g. #111827)"
                    className="flex-1 px-2.5 py-1 bg-neutral-800 border border-neutral-700 rounded text-neutral-100 font-mono text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 text-[11px] mb-1">Custom Accent Color</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={styles?.customAccentColor || '#6366F1'}
                    onChange={(e) => updateSectionStyles(selectedSection.id, { customAccentColor: e.target.value })}
                    className="w-7 h-7 rounded border border-neutral-700 bg-transparent cursor-pointer"
                  />
                  <input
                    type="text"
                    value={styles?.customAccentColor || ''}
                    onChange={(e) => updateSectionStyles(selectedSection.id, { customAccentColor: e.target.value })}
                    placeholder="Hex code (e.g. #06B6D4)"
                    className="flex-1 px-2.5 py-1 bg-neutral-800 border border-neutral-700 rounded text-neutral-100 font-mono text-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: LAYOUT & SPACING */}
        {activeTab === 'layout' && (
          <div className="space-y-4">
            <div>
              <label className="block text-neutral-400 font-medium mb-1.5">
                Vertical Section Spacing
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['compact', 'normal', 'spacious'] as const).map((pad) => (
                  <button
                    key={pad}
                    type="button"
                    onClick={() => updateSectionStyles(selectedSection.id, { paddingY: pad })}
                    className={`py-2 text-center rounded border capitalize transition-all ${
                      (styles?.paddingY || 'normal') === pad
                        ? 'border-[var(--theme-border-glow)] bg-[var(--theme-glow)] text-white font-medium'
                        : 'border-neutral-800 bg-neutral-800/40 text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    {pad}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-neutral-400 font-medium mb-1.5">
                Section Variant
              </label>
              <div className="p-3 bg-neutral-800/60 rounded border border-neutral-700 text-neutral-300 font-mono text-xs">
                {selectedSection.variant}
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
