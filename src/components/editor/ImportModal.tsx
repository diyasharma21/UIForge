import React, { useState } from 'react';
import { X, Upload, AlertCircle, CheckCircle } from 'lucide-react';
import { useTemplateStore } from '../../store/templateStore';

interface ImportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ImportModal: React.FC<ImportModalProps> = ({ isOpen, onClose }) => {
  const { importTemplateConfig } = useTemplateStore();
  const [jsonText, setJsonText] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setJsonText(reader.result);
        setError(null);
      }
    };
    reader.readAsText(file);
  };

  const handleImport = () => {
    setError(null);
    if (!jsonText.trim()) {
      setError('Please provide a valid JSON template configuration.');
      return;
    }

    const res = importTemplateConfig(jsonText);
    if (res.success) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 800);
    } else {
      setError(res.error || 'Failed to parse template configuration.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl theme-badge-pill flex items-center justify-center">
              <Upload className="w-5 h-5 theme-text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-base text-neutral-100">Import Template</h3>
              <p className="text-xs text-neutral-400">Upload a UIForge JSON template file.</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4 text-xs">
          {error && (
            <div className="p-3 bg-red-950/40 border border-red-500/30 rounded-lg text-red-300 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold">Validation Error</strong>
                <span className="leading-relaxed">{error}</span>
              </div>
            </div>
          )}

          {success && (
            <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-lg text-emerald-300 flex items-center gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Template loaded successfully!</span>
            </div>
          )}

          <div>
            <label className="block text-neutral-300 font-medium mb-1.5">
              Upload .json file
            </label>
            <label className="flex items-center justify-center gap-2 p-4 border border-dashed border-neutral-700 hover:border-[var(--theme-border-glow)] rounded-lg cursor-pointer bg-neutral-800/40 hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200 transition-colors">
              <Upload className="w-4 h-4 theme-text-accent" />
              <span>Choose template-config.json file...</span>
              <input
                type="file"
                accept=".json,application/json"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          <div>
            <label className="block text-neutral-300 font-medium mb-1.5">
              Or paste JSON directly
            </label>
            <textarea
              rows={8}
              value={jsonText}
              onChange={(e) => {
                setJsonText(e.target.value);
                setError(null);
              }}
              placeholder='{ "id": "my-template", "sections": [ ... ] }'
              className="w-full p-3 bg-neutral-950 border border-neutral-800 rounded-lg font-mono text-neutral-300 text-xs focus:outline-hidden focus:border-[var(--theme-border-glow)] resize-none leading-relaxed"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-950/50 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleImport}
            className="px-5 py-2 text-xs font-semibold btn-theme-primary rounded-xl shadow-sm transition-all"
          >
            Load into Editor
          </button>
        </div>
      </div>
    </div>
  );
};
