import React from 'react';
import {
  ChevronUp,
  ChevronDown,
  Eye,
  EyeOff,
  Copy,
  Trash2,
  Plus,
  Layers,
} from 'lucide-react';
import { useTemplateStore } from '../../store/templateStore';

interface SectionNavigatorProps {
  onOpenAddSection: () => void;
}

export const SectionNavigator: React.FC<SectionNavigatorProps> = ({
  onOpenAddSection,
}) => {
  const {
    template,
    selectedSectionId,
    selectSection,
    reorderSection,
    toggleSectionVisibility,
    duplicateSection,
    removeSection,
  } = useTemplateStore();

  return (
    <aside className="w-64 border-r border-neutral-800 bg-neutral-900/95 flex flex-col h-[calc(100vh-3.5rem)] select-none">
      {/* Header */}
      <div className="p-3.5 border-b border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-bold text-neutral-300 uppercase tracking-wider">
          <Layers className="w-4 h-4 text-indigo-400" />
          <span>Page Sections</span>
        </div>
        <span className="text-xs text-neutral-500 font-mono">
          {template.sections.length}
        </span>
      </div>

      {/* Sections List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {template.sections.map((sec, index) => {
          const isSelected = selectedSectionId === sec.id;
          const isFirst = index === 0;
          const isLast = index === template.sections.length - 1;

          return (
            <div
              key={sec.id}
              onClick={() => selectSection(sec.id)}
              className={`group flex items-center justify-between p-2 rounded-md text-xs transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-neutral-800 border-indigo-500/50 text-white shadow-xs'
                  : 'bg-neutral-900/50 border-transparent text-neutral-400 hover:bg-neutral-800/60 hover:text-neutral-200'
              }`}
            >
              <div className="flex items-center gap-2 truncate">
                <span className="font-mono text-[10px] text-neutral-500 w-4">
                  {index + 1}
                </span>
                <div className="truncate">
                  <div className="font-medium truncate capitalize text-neutral-200">
                    {sec.type.replace('-', ' ')}
                  </div>
                  <div className="text-[10px] text-neutral-500 truncate font-mono">
                    {sec.variant}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                {/* Reorder Up */}
                <button
                  type="button"
                  disabled={isFirst}
                  onClick={(e) => {
                    e.stopPropagation();
                    reorderSection(sec.id, 'up');
                  }}
                  className={`p-1 rounded hover:bg-neutral-700 text-neutral-400 hover:text-white ${
                    isFirst ? 'opacity-20 cursor-not-allowed' : ''
                  }`}
                  title="Move Up"
                >
                  <ChevronUp className="w-3 h-3" />
                </button>

                {/* Reorder Down */}
                <button
                  type="button"
                  disabled={isLast}
                  onClick={(e) => {
                    e.stopPropagation();
                    reorderSection(sec.id, 'down');
                  }}
                  className={`p-1 rounded hover:bg-neutral-700 text-neutral-400 hover:text-white ${
                    isLast ? 'opacity-20 cursor-not-allowed' : ''
                  }`}
                  title="Move Down"
                >
                  <ChevronDown className="w-3 h-3" />
                </button>

                {/* Visibility Toggle */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSectionVisibility(sec.id);
                  }}
                  className="p-1 rounded hover:bg-neutral-700 text-neutral-400 hover:text-white"
                  title={sec.visible ? 'Hide section' : 'Show section'}
                >
                  {sec.visible ? (
                    <Eye className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <EyeOff className="w-3 h-3 text-neutral-500" />
                  )}
                </button>

                {/* Duplicate */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    duplicateSection(sec.id);
                  }}
                  className="p-1 rounded hover:bg-neutral-700 text-neutral-400 hover:text-white"
                  title="Duplicate Section"
                >
                  <Copy className="w-3 h-3" />
                </button>

                {/* Delete */}
                <button
                  type="button"
                  disabled={template.sections.length <= 1}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (window.confirm('Delete this section?')) {
                      removeSection(sec.id);
                    }
                  }}
                  className={`p-1 rounded hover:bg-red-950/60 text-neutral-400 hover:text-red-400 ${
                    template.sections.length <= 1 ? 'opacity-20 cursor-not-allowed' : ''
                  }`}
                  title="Delete Section"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Section Button */}
      <div className="p-3 border-t border-neutral-800">
        <button
          type="button"
          onClick={onOpenAddSection}
          className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700/60 transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5 text-indigo-400" />
          <span>Add Section</span>
        </button>
      </div>
    </aside>
  );
};
