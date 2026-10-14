import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTemplateStore } from '../store/templateStore';
import { EditorToolbar } from '../components/editor/EditorToolbar';
import { SectionNavigator } from '../components/editor/SectionNavigator';
import { InspectorPanel } from '../components/editor/InspectorPanel';
import { ExportModal } from '../components/editor/ExportModal';
import { ImportModal } from '../components/editor/ImportModal';
import { AddSectionModal } from '../components/editor/AddSectionModal';
import { TemplateRenderer } from '../engine/renderer/TemplateRenderer';
import { EyeOff } from 'lucide-react';

export const EditorPage: React.FC = () => {
  const { templateId } = useParams<{ templateId?: string }>();
  const {
    template,
    loadTemplate,
    selectedSectionId,
    selectSection,
    deviceMode,
    isFullscreenPreview,
    setIsFullscreenPreview,
  } = useTemplateStore();

  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isImportOpen, setIsImportOpen] = useState(false);
  const [isAddSectionOpen, setIsAddSectionOpen] = useState(false);

  useEffect(() => {
    if (templateId && template.id !== templateId && template.slug !== templateId) {
      loadTemplate(templateId);
    }
  }, [templateId]);

  // Keyboard shortcut listener for Undo/Redo & Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'z') {
        if (e.shiftKey) {
          useTemplateStore.getState().redo();
        } else {
          useTemplateStore.getState().undo();
        }
      } else if ((e.metaKey || e.ctrlKey) && e.key === 'y') {
        useTemplateStore.getState().redo();
      } else if (e.key === 'Escape') {
        setIsFullscreenPreview(false);
        setIsExportOpen(false);
        setIsImportOpen(false);
        setIsAddSectionOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col bg-neutral-950 text-neutral-100 overflow-hidden">
      {/* Top Navigation & Controls */}
      {!isFullscreenPreview && (
        <EditorToolbar
          onOpenExport={() => setIsExportOpen(true)}
          onOpenImport={() => setIsImportOpen(true)}
        />
      )}

      {/* Main Workspace */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Left Sidebar: Outline Tree */}
        {!isFullscreenPreview && (
          <SectionNavigator onOpenAddSection={() => setIsAddSectionOpen(true)} />
        )}

        {/* Center Canvas Area */}
        <main
          className="flex-1 bg-neutral-950 overflow-y-auto flex flex-col items-center p-0 md:p-6 transition-all"
          onClick={() => {
            // Click outside clears section selection
          }}
        >
          {/* Responsive Device Wrapper */}
          <div
            className={`w-full transition-all duration-300 relative shadow-2xl ${
              deviceMode === 'mobile'
                ? 'max-w-[375px] my-6 rounded-[36px] border-[8px] border-neutral-800 overflow-hidden ring-1 ring-neutral-700'
                : deviceMode === 'tablet'
                ? 'max-w-[768px] my-6 rounded-[24px] border-[8px] border-neutral-800 overflow-hidden ring-1 ring-neutral-700'
                : 'max-w-full'
            }`}
          >
            {/* Template Rendering Engine */}
            <TemplateRenderer
              template={template}
              selectedSectionId={selectedSectionId}
              onSelectSection={(id) => selectSection(id)}
              isEditor={!isFullscreenPreview}
            />
          </div>
        </main>

        {/* Right Sidebar: Context-sensitive Inspector */}
        {!isFullscreenPreview && <InspectorPanel />}
      </div>

      {/* Fullscreen Preview Exit Floating Pill */}
      {isFullscreenPreview && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            type="button"
            onClick={() => setIsFullscreenPreview(false)}
            className="flex items-center gap-2 px-4 py-2.5 bg-neutral-900/90 border border-neutral-700 text-white rounded-full shadow-2xl backdrop-blur-md hover:bg-neutral-800 transition-all text-xs font-semibold"
          >
            <EyeOff className="w-4 h-4 theme-text-accent" />
            <span>Exit Preview Mode (Esc)</span>
          </button>
        </div>
      )}

      {/* Modals */}
      <ExportModal isOpen={isExportOpen} onClose={() => setIsExportOpen(false)} />
      <ImportModal isOpen={isImportOpen} onClose={() => setIsImportOpen(false)} />
      <AddSectionModal
        isOpen={isAddSectionOpen}
        onClose={() => setIsAddSectionOpen(false)}
      />
    </div>
  );
};
