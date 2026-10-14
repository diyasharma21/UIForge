import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Undo,
  Redo,
  Monitor,
  Tablet,
  Smartphone,
  Eye,
  Download,
  Upload,
  ArrowLeft,
  RotateCcw,
} from 'lucide-react';
import { useTemplateStore } from '../../store/templateStore';
import { DeviceMode } from '../../types';

interface EditorToolbarProps {
  onOpenExport: () => void;
  onOpenImport: () => void;
}

export const EditorToolbar: React.FC<EditorToolbarProps> = ({
  onOpenExport,
  onOpenImport,
}) => {
  const navigate = useNavigate();
  const {
    template,
    deviceMode,
    setDeviceMode,
    isFullscreenPreview,
    setIsFullscreenPreview,
    undo,
    redo,
    canUndo,
    canRedo,
    resetPage,
  } = useTemplateStore();

  return (
    <header className="h-14 border-b border-neutral-800 bg-neutral-900/90 backdrop-blur-md px-4 flex items-center justify-between z-30 select-none">
      {/* Left: Back & Template Title */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="p-1.5 rounded-md hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
          title="Back to Marketplace"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm text-neutral-100 truncate max-w-[200px] md:max-w-[320px]">
            {template.name}
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono uppercase px-2 py-0.5 rounded-full theme-badge-pill">
            {template.designStyle}
          </span>
        </div>
      </div>

      {/* Middle: Undo/Redo & Device Switcher */}
      <div className="flex items-center gap-1 sm:gap-2">
        <div className="flex items-center bg-neutral-800/80 rounded-md p-0.5 border border-neutral-700/60">
          <button
            type="button"
            onClick={undo}
            disabled={!canUndo}
            className={`p-1.5 rounded text-neutral-300 transition-colors ${
              canUndo ? 'hover:bg-neutral-700 hover:text-white' : 'opacity-30 cursor-not-allowed'
            }`}
            title="Undo (Ctrl+Z)"
          >
            <Undo className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={redo}
            disabled={!canRedo}
            className={`p-1.5 rounded text-neutral-300 transition-colors ${
              canRedo ? 'hover:bg-neutral-700 hover:text-white' : 'opacity-30 cursor-not-allowed'
            }`}
            title="Redo (Ctrl+Y)"
          >
            <Redo className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Device Switcher */}
        <div className="hidden md:flex items-center bg-neutral-800/80 rounded-md p-0.5 border border-neutral-700/60">
          {(
            [
              { mode: 'desktop', icon: Monitor, label: 'Desktop' },
              { mode: 'tablet', icon: Tablet, label: 'Tablet (768px)' },
              { mode: 'mobile', icon: Smartphone, label: 'Mobile (375px)' },
            ] as const
          ).map(({ mode, icon: Icon, label }) => (
            <button
              key={mode}
              type="button"
              onClick={() => setDeviceMode(mode as DeviceMode)}
              className={`p-1.5 rounded text-xs transition-colors flex items-center gap-1.5 ${
                deviceMode === mode
                  ? 'bg-neutral-700 text-white font-medium shadow-xs'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
              title={label}
            >
              <Icon className="w-3.5 h-3.5" />
            </button>
          ))}
        </div>

        {/* Reset page */}
        <button
          type="button"
          onClick={() => {
            if (window.confirm('Reset this template back to its default layout?')) {
              resetPage();
            }
          }}
          className="p-1.5 rounded hover:bg-neutral-800 text-neutral-400 hover:text-amber-400 transition-colors"
          title="Reset to default template layout"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Right: Preview, Import, Export */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setIsFullscreenPreview(!isFullscreenPreview)}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
            isFullscreenPreview
              ? 'theme-tab-active'
              : 'border-neutral-700 bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Preview</span>
        </button>

        <button
          type="button"
          onClick={onOpenImport}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border border-neutral-700 bg-neutral-800 text-neutral-300 hover:bg-neutral-700 transition-colors"
        >
          <Upload className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Import</span>
        </button>

        <button
          type="button"
          onClick={onOpenExport}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold btn-theme-primary shadow-sm transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Export</span>
        </button>
      </div>
    </header>
  );
};
