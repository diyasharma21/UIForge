import { create } from 'zustand';
import { TemplateConfig, SectionConfig, DeviceMode, DesignStyleId } from '../types';
import { ALL_TEMPLATES, getTemplateById } from '../data/templates';
import { validateTemplate } from '../engine/validation/templateSchema';

interface HistoryState {
  past: TemplateConfig[];
  future: TemplateConfig[];
}

interface TemplateStore {
  // State
  template: TemplateConfig;
  initialTemplate: TemplateConfig;
  selectedSectionId: string | null;
  deviceMode: DeviceMode;
  isFullscreenPreview: boolean;
  history: HistoryState;

  // Actions
  loadTemplate: (templateIdOrConfig: string | TemplateConfig) => void;
  selectSection: (sectionId: string | null) => void;
  setDeviceMode: (mode: DeviceMode) => void;
  setIsFullscreenPreview: (fullscreen: boolean) => void;

  // Section Editing
  updateSectionContent: (sectionId: string, partialContent: Partial<SectionConfig['content']>) => void;
  updateSectionStyles: (sectionId: string, partialStyles: Partial<NonNullable<SectionConfig['styles']>>) => void;
  setSectionVariant: (sectionId: string, variant: SectionConfig['variant']) => void;
  toggleSectionVisibility: (sectionId: string) => void;
  reorderSection: (sectionId: string, direction: 'up' | 'down') => void;
  duplicateSection: (sectionId: string) => void;
  removeSection: (sectionId: string) => void;
  addSection: (newSection: SectionConfig, atIndex?: number) => void;

  // Global Page Adjustments
  applyDesignSystem: (styleId: DesignStyleId) => void;
  updateTemplateMetadata: (meta: Partial<Pick<TemplateConfig, 'name' | 'description'>>) => void;
  resetSection: (sectionId: string) => void;
  resetPage: () => void;

  // History
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;

  // Import
  importTemplateConfig: (jsonString: string) => { success: boolean; error?: string };
}

const defaultInitialTemplate = ALL_TEMPLATES[0];

export const useTemplateStore = create<TemplateStore>((set, get) => ({
  template: JSON.parse(JSON.stringify(defaultInitialTemplate)),
  initialTemplate: JSON.parse(JSON.stringify(defaultInitialTemplate)),
  selectedSectionId: defaultInitialTemplate.sections[0]?.id || null,
  deviceMode: 'desktop',
  isFullscreenPreview: false,
  history: { past: [], future: [] },
  canUndo: false,
  canRedo: false,

  loadTemplate: (templateIdOrConfig) => {
    let target: TemplateConfig | undefined;
    if (typeof templateIdOrConfig === 'string') {
      target = getTemplateById(templateIdOrConfig);
    } else {
      target = templateIdOrConfig;
    }

    if (!target) target = ALL_TEMPLATES[0];

    const deepClone = JSON.parse(JSON.stringify(target));
    set({
      template: deepClone,
      initialTemplate: JSON.parse(JSON.stringify(target)),
      selectedSectionId: deepClone.sections[0]?.id || null,
      history: { past: [], future: [] },
      canUndo: false,
      canRedo: false,
    });
  },

  selectSection: (sectionId) => {
    set({ selectedSectionId: sectionId });
  },

  setDeviceMode: (mode) => {
    set({ deviceMode: mode });
  },

  setIsFullscreenPreview: (fullscreen) => {
    set({ isFullscreenPreview: fullscreen });
  },

  // Helper push history
  updateSectionContent: (sectionId, partialContent) => {
    const { template, history } = get();
    const updatedSections = template.sections.map((sec) => {
      if (sec.id === sectionId) {
        return {
          ...sec,
          content: { ...sec.content, ...partialContent },
        };
      }
      return sec;
    });

    const newTemplate = { ...template, sections: updatedSections };
    set({
      template: newTemplate,
      history: {
        past: [...history.past, JSON.parse(JSON.stringify(template))],
        future: [],
      },
      canUndo: true,
      canRedo: false,
    });
  },

  updateSectionStyles: (sectionId, partialStyles) => {
    const { template, history } = get();
    const updatedSections = template.sections.map((sec) => {
      if (sec.id === sectionId) {
        return {
          ...sec,
          styles: { ...sec.styles, ...partialStyles },
        };
      }
      return sec;
    });

    const newTemplate = { ...template, sections: updatedSections };
    set({
      template: newTemplate,
      history: {
        past: [...history.past, JSON.parse(JSON.stringify(template))],
        future: [],
      },
      canUndo: true,
      canRedo: false,
    });
  },

  setSectionVariant: (sectionId, variant) => {
    const { template, history } = get();
    const updatedSections = template.sections.map((sec) =>
      sec.id === sectionId ? { ...sec, variant } : sec
    );

    const newTemplate = { ...template, sections: updatedSections };
    set({
      template: newTemplate,
      history: {
        past: [...history.past, JSON.parse(JSON.stringify(template))],
        future: [],
      },
      canUndo: true,
      canRedo: false,
    });
  },

  toggleSectionVisibility: (sectionId) => {
    const { template, history } = get();
    const updatedSections = template.sections.map((sec) =>
      sec.id === sectionId ? { ...sec, visible: !sec.visible } : sec
    );

    const newTemplate = { ...template, sections: updatedSections };
    set({
      template: newTemplate,
      history: {
        past: [...history.past, JSON.parse(JSON.stringify(template))],
        future: [],
      },
      canUndo: true,
      canRedo: false,
    });
  },

  reorderSection: (sectionId, direction) => {
    const { template, history } = get();
    const sections = [...template.sections];
    const currentIndex = sections.findIndex((s) => s.id === sectionId);
    if (currentIndex === -1) return;

    const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    if (targetIndex < 0 || targetIndex >= sections.length) return;

    // Swap
    const temp = sections[currentIndex];
    sections[currentIndex] = sections[targetIndex];
    sections[targetIndex] = temp;

    const newTemplate = { ...template, sections };
    set({
      template: newTemplate,
      history: {
        past: [...history.past, JSON.parse(JSON.stringify(template))],
        future: [],
      },
      canUndo: true,
      canRedo: false,
    });
  },

  duplicateSection: (sectionId) => {
    const { template, history } = get();
    const index = template.sections.findIndex((s) => s.id === sectionId);
    if (index === -1) return;

    const original = template.sections[index];
    const duplicated: SectionConfig = {
      ...JSON.parse(JSON.stringify(original)),
      id: `${original.type}-${Date.now().toString(36)}`,
    };

    const newSections = [...template.sections];
    newSections.splice(index + 1, 0, duplicated);

    const newTemplate = { ...template, sections: newSections };
    set({
      template: newTemplate,
      selectedSectionId: duplicated.id,
      history: {
        past: [...history.past, JSON.parse(JSON.stringify(template))],
        future: [],
      },
      canUndo: true,
      canRedo: false,
    });
  },

  removeSection: (sectionId) => {
    const { template, history } = get();
    if (template.sections.length <= 1) return; // Prevent removing all sections

    const newSections = template.sections.filter((s) => s.id !== sectionId);
    const newTemplate = { ...template, sections: newSections };

    set({
      template: newTemplate,
      selectedSectionId: newSections[0]?.id || null,
      history: {
        past: [...history.past, JSON.parse(JSON.stringify(template))],
        future: [],
      },
      canUndo: true,
      canRedo: false,
    });
  },

  addSection: (newSection, atIndex) => {
    const { template, history } = get();
    const newSections = [...template.sections];

    if (typeof atIndex === 'number' && atIndex >= 0 && atIndex <= newSections.length) {
      newSections.splice(atIndex, 0, newSection);
    } else {
      newSections.push(newSection);
    }

    const newTemplate = { ...template, sections: newSections };
    set({
      template: newTemplate,
      selectedSectionId: newSection.id,
      history: {
        past: [...history.past, JSON.parse(JSON.stringify(template))],
        future: [],
      },
      canUndo: true,
      canRedo: false,
    });
  },

  applyDesignSystem: (styleId) => {
    const { template, history } = get();
    const newTemplate = { ...template, designStyle: styleId };
    set({
      template: newTemplate,
      history: {
        past: [...history.past, JSON.parse(JSON.stringify(template))],
        future: [],
      },
      canUndo: true,
      canRedo: false,
    });
  },

  updateTemplateMetadata: (meta) => {
    const { template, history } = get();
    const newTemplate = { ...template, ...meta };
    set({
      template: newTemplate,
      history: {
        past: [...history.past, JSON.parse(JSON.stringify(template))],
        future: [],
      },
      canUndo: true,
      canRedo: false,
    });
  },

  resetSection: (sectionId) => {
    const { initialTemplate, template, history } = get();
    const initialSec = initialTemplate.sections.find((s) => s.id === sectionId);
    if (!initialSec) return;

    const updatedSections = template.sections.map((s) =>
      s.id === sectionId ? JSON.parse(JSON.stringify(initialSec)) : s
    );

    set({
      template: { ...template, sections: updatedSections },
      history: {
        past: [...history.past, JSON.parse(JSON.stringify(template))],
        future: [],
      },
      canUndo: true,
      canRedo: false,
    });
  },

  resetPage: () => {
    const { initialTemplate, template, history } = get();
    set({
      template: JSON.parse(JSON.stringify(initialTemplate)),
      history: {
        past: [...history.past, JSON.parse(JSON.stringify(template))],
        future: [],
      },
      canUndo: true,
      canRedo: false,
    });
  },

  undo: () => {
    const { history, template } = get();
    if (history.past.length === 0) return;

    const previous = history.past[history.past.length - 1];
    const newPast = history.past.slice(0, history.past.length - 1);

    set({
      template: previous,
      history: {
        past: newPast,
        future: [JSON.parse(JSON.stringify(template)), ...history.future],
      },
      canUndo: newPast.length > 0,
      canRedo: true,
    });
  },

  redo: () => {
    const { history, template } = get();
    if (history.future.length === 0) return;

    const next = history.future[0];
    const newFuture = history.future.slice(1);

    set({
      template: next,
      history: {
        past: [...history.past, JSON.parse(JSON.stringify(template))],
        future: newFuture,
      },
      canUndo: true,
      canRedo: newFuture.length > 0,
    });
  },

  importTemplateConfig: (jsonString) => {
    try {
      const parsed = JSON.parse(jsonString);
      const validation = validateTemplate(parsed);
      if (!validation.success || !validation.data) {
        return {
          success: false,
          error: validation.error || 'Invalid template schema.',
        };
      }

      const validatedConfig = validation.data as TemplateConfig;
      set({
        template: validatedConfig,
        initialTemplate: JSON.parse(JSON.stringify(validatedConfig)),
        selectedSectionId: validatedConfig.sections[0]?.id || null,
        history: { past: [], future: [] },
        canUndo: false,
        canRedo: false,
      });

      return { success: true };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Malformed JSON file.';
      return { success: false, error: msg };
    }
  },
}));
