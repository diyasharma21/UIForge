import React from 'react';
import { X, Plus, Sparkles, Layout, DollarSign, HelpCircle, UserCheck } from 'lucide-react';
import { useTemplateStore } from '../../store/templateStore';
import { SectionConfig } from '../../types';

interface AddSectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SECTION_TEMPLATES: Array<{
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  config: Omit<SectionConfig, 'id'>;
}> = [
  {
    name: 'Editorial Services List',
    category: 'Services',
    icon: Layout,
    config: {
      type: 'services',
      variant: 'services-editorial-list',
      visible: true,
      content: {
        badge: 'Offerings',
        title: 'Specialized Treatments & Services',
        subtitle: 'Our practitioners utilize industry-leading techniques and methodologies.',
        items: [
          {
            id: 'item-1',
            title: 'Primary Consultation & Evaluation',
            description: 'Comprehensive 45-minute deep-dive diagnostic assessment with personalized roadmap.',
            price: '$250',
          },
          {
            id: 'item-2',
            title: 'Targeted Protocol Sprint',
            description: 'Focused intervention using specialized tools to address acute concerns.',
            price: '$450',
          },
        ],
      },
    },
  },
  {
    name: '3-Column Services Grid',
    category: 'Services',
    icon: Layout,
    config: {
      type: 'services',
      variant: 'services-grid',
      visible: true,
      content: {
        badge: 'Core Solutions',
        title: 'What We Deliver',
        subtitle: 'Tailored solutions designed for rapid execution and dependable results.',
        items: [
          {
            id: 's-1',
            title: 'Strategic Consultation',
            description: 'In-depth audit and architectural blueprinting for your objectives.',
          },
          {
            id: 's-2',
            title: 'Precision Implementation',
            description: 'Hands-on execution with rigorous quality control standards.',
          },
          {
            id: 's-3',
            title: 'Ongoing Optimization',
            description: 'Continuous monitoring, analytics, and performance iteration.',
          },
        ],
      },
    },
  },
  {
    name: 'Featured Pricing Tiers',
    category: 'Pricing',
    icon: DollarSign,
    config: {
      type: 'pricing',
      variant: 'pricing-cards-featured',
      visible: true,
      content: {
        badge: 'Investment',
        title: 'Clear, Transparent Plans',
        subtitle: 'Simple pricing with zero hidden fees.',
        items: [
          {
            id: 'pr-1',
            title: 'Standard Plan',
            price: '$120 / mo',
            description: 'Essential access with all core features included.',
          },
          {
            id: 'pr-2',
            title: 'Professional Plan',
            price: '$240 / mo',
            badge: 'Most Popular',
            description: 'Advanced capabilities, priority scheduling, and dedicated concierge.',
          },
          {
            id: 'pr-3',
            title: 'Enterprise Plan',
            price: 'Custom',
            description: 'Full custom integration and 24/7 dedicated account manager.',
          },
        ],
      },
    },
  },
  {
    name: 'Doctor & Specialist Grid',
    category: 'Healthcare & Team',
    icon: UserCheck,
    config: {
      type: 'doctor-profile',
      variant: 'doctor-grid',
      visible: true,
      content: {
        badge: 'Faculty',
        title: 'Meet Our Certified Practitioners',
        subtitle: 'Board-certified specialists with decades of clinical excellence.',
        items: [
          {
            id: 'doc-1',
            title: 'Dr. Sarah Mitchell, MD',
            description: 'Clinical Director specializing in advanced restorative procedures.',
            meta: 'Johns Hopkins Fellow • 15 Yrs Exp',
            imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
          },
          {
            id: 'doc-2',
            title: 'Dr. Marcus Vance, MD',
            description: 'Head of diagnostic imaging and preventive care protocols.',
            meta: 'Harvard Medical School • 12 Yrs Exp',
            imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
          },
        ],
      },
    },
  },
  {
    name: 'Direct Appointment Card',
    category: 'Booking',
    icon: Sparkles,
    config: {
      type: 'appointment-booking',
      variant: 'appointment-card-compact',
      visible: true,
      content: {
        badge: 'Fast Booking',
        title: 'Reserve Your Consultation',
        subtitle: 'Same-day and next-week appointments available. Walk-ins welcomed during morning clinic hours.',
        primaryButtonText: 'Confirm Online Booking',
        contactInfo: {
          phone: '(555) 890-2100',
          email: 'appointments@practice.com',
          address: '500 Grand Avenue, Suite 200',
        },
      },
    },
  },
  {
    name: 'FAQ Accordion',
    category: 'FAQ',
    icon: HelpCircle,
    config: {
      type: 'faq',
      variant: 'faq-two-column',
      visible: true,
      content: {
        badge: 'Help Center',
        title: 'Frequently Asked Questions',
        subtitle: 'Everything you need to know about our services, timing, and policies.',
        items: [
          {
            id: 'faq-1',
            title: 'How do I schedule an initial appointment?',
            description: 'You can reserve online in less than 2 minutes through our digital portal or contact our concierge directly.',
          },
          {
            id: 'faq-2',
            title: 'What should I prepare for my first visit?',
            description: 'Please bring your identification and any relevant prior medical or project documentation.',
          },
        ],
      },
    },
  },
  {
    name: 'Glowing Action Banner',
    category: 'CTA',
    icon: Sparkles,
    config: {
      type: 'cta',
      variant: 'cta-banner-glow',
      visible: true,
      content: {
        badge: 'Get Started',
        title: 'Ready to Transform Your Practice?',
        subtitle: 'Join over 1,400 satisfied clients who launched their modern website with UIForge.',
        primaryButtonText: 'Schedule Call Today',
        primaryButtonLink: '#',
      },
    },
  },
];

export const AddSectionModal: React.FC<AddSectionModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { addSection } = useTemplateStore();

  if (!isOpen) return null;

  const handleSelect = (tmpl: (typeof SECTION_TEMPLATES)[0]) => {
    const newSection: SectionConfig = {
      ...tmpl.config,
      id: `${tmpl.config.type}-${Date.now().toString(36)}`,
    };
    addSection(newSection);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-5 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Plus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-neutral-100">Add New Section</h3>
              <p className="text-xs text-neutral-400">Select a pre-configured component to insert into your template.</p>
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

        {/* List of sections to insert */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SECTION_TEMPLATES.map((item, idx) => {
            const Icon = item.icon;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelect(item)}
                className="p-4 rounded-xl text-left border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-800/60 hover:border-indigo-500/50 transition-all flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-neutral-800 text-neutral-400 group-hover:text-indigo-400 transition-colors">
                      {item.category}
                    </span>
                    <Icon className="w-4 h-4 text-neutral-500 group-hover:text-indigo-400 transition-colors" />
                  </div>
                  <h4 className="font-bold text-sm text-neutral-100 mb-1 group-hover:text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-neutral-500 line-clamp-2">
                    {item.config.content.subtitle || item.config.content.title}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-end text-xs font-semibold text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>+ Insert Section</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
