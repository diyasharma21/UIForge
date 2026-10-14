import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Edit3,
  Heart,
  Download,
  Eye,
  Layers,
  Sparkles,
  Share2,
} from 'lucide-react';
import { getTemplateById } from '../data/templates';
import { DESIGN_SYSTEMS } from '../data/designSystems';
import { TemplateRenderer } from '../engine/renderer/TemplateRenderer';
import { ExportModal } from '../components/editor/ExportModal';
import { useMarketplaceStore } from '../store/marketplaceStore';
import { DesignStyleId } from '../types';

export const TemplateDetailPage: React.FC = () => {
  const { templateId } = useParams<{ templateId: string }>();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useMarketplaceStore();
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const template = getTemplateById(templateId || '');

  if (!template) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-xl font-bold text-white mb-2">Template Not Found</h2>
        <p className="text-xs text-neutral-400 mb-6">
          The requested template does not exist or has been moved.
        </p>
        <Link
          to="/explore"
          className="px-4 py-2 rounded-xl btn-theme-primary text-xs font-semibold"
        >
          Back to Explore
        </Link>
      </div>
    );
  }

  const design = DESIGN_SYSTEMS[template.designStyle as DesignStyleId] || DESIGN_SYSTEMS['luxury-editorial'];
  const favorited = isFavorite(template.id);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="w-full min-h-screen bg-neutral-950 text-neutral-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Back Navigation Bar */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Marketplace</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleShare}
              className="p-2 rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white transition-colors text-xs flex items-center gap-1.5"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Link Copied' : 'Share'}</span>
            </button>

            <button
              type="button"
              onClick={() => toggleFavorite(template.id)}
              className={`p-2 rounded-lg border border-neutral-800 transition-colors flex items-center gap-1.5 text-xs ${
                favorited ? 'bg-rose-500/10 border-rose-500/30 text-rose-400' : 'bg-neutral-900 text-neutral-400 hover:text-white'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${favorited ? 'fill-current' : ''}`} />
              <span>{favorited ? 'Saved' : 'Save'}</span>
            </button>
          </div>
        </div>

        {/* Hero Metadata Card */}
        <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full theme-badge-pill">
                {template.industryId}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-neutral-800 text-neutral-300">
                {template.categoryId.replace('-', ' ')}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-neutral-800 text-neutral-400">
                {template.designStyle.replace('-', ' ')}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {template.name}
            </h1>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
              {template.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to={`/editor/${template.id}`}
                className="px-6 py-3 rounded-xl btn-theme-primary text-xs font-semibold flex items-center gap-2 shadow-lg transition-all shrink-0"
              >
                <Edit3 className="w-4 h-4" />
                <span>Customize in Visual Studio</span>
              </Link>

              <button
                type="button"
                onClick={() => setIsExportOpen(true)}
                className="px-5 py-3 rounded-xl border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Export Website Package</span>
              </button>
            </div>
          </div>

          {/* Quick Specs */}
          <div className="lg:col-span-4 p-5 rounded-xl border border-neutral-800 bg-neutral-950/60 space-y-3 text-xs">
            <h3 className="font-bold text-neutral-200 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 theme-text-accent" />
              Template Architecture
            </h3>
            <div className="flex justify-between py-1.5 border-b border-neutral-800 text-neutral-400">
              <span>Sections Included</span>
              <span className="font-mono font-semibold text-neutral-200">{template.sections.length}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-neutral-800 text-neutral-400">
              <span>Design System</span>
              <span className="font-semibold text-neutral-200">{design.name}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-neutral-800 text-neutral-400">
              <span>Typography</span>
              <span className="font-mono text-neutral-200">{design.typography.headingFont.split(',')[0]}</span>
            </div>
            <div className="flex justify-between py-1.5 text-neutral-400">
              <span>License</span>
              <span className="text-emerald-400 font-semibold">100% Free / MIT</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Page Preview Box */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 theme-text-accent" />
              <h2 className="font-bold text-sm text-neutral-200">
                Full Live Interactive Preview
              </h2>
            </div>
            <Link
              to={`/editor/${template.id}`}
              className="text-xs font-semibold theme-text-accent hover:brightness-125"
            >
              Open in Visual Editor →
            </Link>
          </div>

          <div className="rounded-2xl border border-neutral-800 overflow-hidden shadow-2xl">
            <TemplateRenderer template={template} isEditor={false} />
          </div>
        </div>
      </div>

      <ExportModal isOpen={isExportOpen} onClose={() => setIsExportOpen(false)} />
    </div>
  );
};
