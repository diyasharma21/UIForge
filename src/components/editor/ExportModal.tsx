import React, { useState } from 'react';
import {
  X,
  Download,
  Copy,
  Check,
  FileCode,
  Archive,
  Layers,
  Sparkles,
} from 'lucide-react';
import { useTemplateStore } from '../../store/templateStore';
import {
  generateHtmlCss,
  generateReact,
  generateTailwind,
  generateJson,
  downloadZip,
  downloadSingleFile,
} from '../../engine/export';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const { template } = useTemplateStore();
  const [activeTab, setActiveTab] = useState<'zip' | 'html' | 'react' | 'tailwind' | 'json'>('zip');
  const [copied, setCopied] = useState(false);
  const [isZipping, setIsZipping] = useState(false);

  if (!isOpen) return null;

  const { html, css } = generateHtmlCss(template);
  const reactCode = generateReact(template);
  const tailwindCode = generateTailwind(template);
  const jsonCode = generateJson(template);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadZip = async () => {
    setIsZipping(true);
    try {
      await downloadZip(template);
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl theme-badge-pill flex items-center justify-center">
              <Download className="w-5 h-5 theme-text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-base text-neutral-100">Export Your Website</h3>
              <p className="text-xs text-neutral-400">Zero lock-in. 100% free production-ready code.</p>
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

        {/* Tab navigation */}
        <div className="flex border-b border-neutral-800 bg-neutral-950/40 px-4 text-xs">
          {[
            { id: 'zip', label: 'Complete ZIP Package', icon: Archive },
            { id: 'html', label: 'HTML + CSS', icon: FileCode },
            { id: 'react', label: 'React Component', icon: Layers },
            { id: 'tailwind', label: 'Tailwind CSS', icon: Sparkles },
            { id: 'json', label: 'JSON Config', icon: FileCode },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveTab(id as typeof activeTab)}
              className={`py-3 px-4 font-semibold border-b-2 flex items-center gap-2 transition-colors ${
                activeTab === id
                  ? 'border-[var(--theme-accent-light)] theme-text-accent'
                  : 'border-transparent text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 text-sm">
          {/* TAB: ZIP */}
          {activeTab === 'zip' && (
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-[var(--theme-border-glow)]">
                <h4 className="font-bold text-lg text-white mb-2 font-heading">
                  Download Ready-to-Deploy ZIP Bundle
                </h4>
                <p className="text-neutral-300 text-xs leading-relaxed mb-6 max-w-xl">
                  Contains standalone self-contained HTML/CSS, reusable React JSX files, Tailwind styles, the complete importable UIForge template config, and a setup README.
                </p>

                <button
                  type="button"
                  disabled={isZipping}
                  onClick={handleDownloadZip}
                  className="px-6 py-3 rounded-xl btn-theme-primary font-semibold flex items-center gap-2 shadow-lg transition-all disabled:opacity-50"
                >
                  <Archive className="w-4 h-4" />
                  <span>{isZipping ? 'Generating ZIP...' : `Download ${template.slug}.zip`}</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs text-neutral-400">
                <div className="p-4 rounded-lg bg-neutral-800/40 border border-neutral-800">
                  <div className="font-semibold text-neutral-200 mb-1">✓ No Backend Required</div>
                  <div>Runs instantly in any browser without complicated server setups.</div>
                </div>
                <div className="p-4 rounded-lg bg-neutral-800/40 border border-neutral-800">
                  <div className="font-semibold text-neutral-200 mb-1">✓ Re-Importable Anytime</div>
                  <div>Upload the included \`template-config.json\` back to UIForge to resume editing.</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: HTML */}
          {activeTab === 'html' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400">Self-contained HTML5 & Modern CSS:</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy(html)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied HTML' : 'Copy HTML'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => downloadSingleFile(html, 'index.html', 'text/html')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg btn-theme-primary text-xs font-semibold transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download index.html</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => downloadSingleFile(css, 'styles.css', 'text/css')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download styles.css</span>
                  </button>
                </div>
              </div>

              <pre className="p-4 bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-300 font-mono text-xs overflow-x-auto max-h-96">
                {html}
              </pre>
            </div>
          )}

          {/* TAB: REACT */}
          {activeTab === 'react' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400">React Component Code:</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy(reactCode)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy Code'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => downloadSingleFile(reactCode, 'App.jsx', 'text/javascript')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg btn-theme-primary text-xs font-semibold transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download App.jsx</span>
                  </button>
                </div>
              </div>

              <pre className="p-4 bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-300 font-mono text-xs overflow-x-auto max-h-96">
                {reactCode}
              </pre>
            </div>
          )}

          {/* TAB: TAILWIND */}
          {activeTab === 'tailwind' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400">Tailwind CSS Component:</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy(tailwindCode)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => downloadSingleFile(tailwindCode, 'TailwindPage.jsx', 'text/javascript')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg btn-theme-primary text-xs font-semibold transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download JSX</span>
                  </button>
                </div>
              </div>

              <pre className="p-4 bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-300 font-mono text-xs overflow-x-auto max-h-96">
                {tailwindCode}
              </pre>
            </div>
          )}

          {/* TAB: JSON */}
          {activeTab === 'json' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400">UIForge Template Configuration:</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy(jsonCode)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => downloadSingleFile(jsonCode, 'template-config.json', 'application/json')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg btn-theme-primary text-xs font-semibold transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download JSON</span>
                  </button>
                </div>
              </div>

              <pre className="p-4 bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-300 font-mono text-xs overflow-x-auto max-h-96">
                {jsonCode}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
