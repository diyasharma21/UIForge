import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowRight } from 'lucide-react';
import { DESIGN_SYSTEMS } from '../data/designSystems';
import { HeroSection } from '../components/sections/HeroSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { PricingSection } from '../components/sections/PricingSection';
import { FaqSection } from '../components/sections/FaqSection';
import { CtaSection } from '../components/sections/CtaSection';
import { IndustrySection } from '../components/sections/IndustrySection';
import { SectionConfig } from '../types';

export const ComponentLibraryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<
    'hero' | 'services' | 'pricing' | 'industry' | 'faq' | 'cta'
  >('hero');

  const defaultDesign = DESIGN_SYSTEMS['luxury-editorial'];
  const techDesign = DESIGN_SYSTEMS['dark-cinematic'];

  // Sample hero section configs
  const sampleHeroes: SectionConfig[] = [
    {
      id: 'demo-hero-1',
      type: 'hero',
      variant: 'hero-editorial-luxury',
      visible: true,
      content: {
        badge: 'Editorial Serenity',
        title: 'Where Clinical Science Meets Restorative Art',
        subtitle: 'Bespoke diagnostic protocols crafted in an unhurried private consultation environment.',
        primaryButtonText: 'Reserve Consultation',
        secondaryButtonText: 'Explore Protocols',
        imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
        stats: [
          { id: '1', label: 'Clinical Experience', value: '18 Yrs' },
          { id: '2', label: 'Board Certification', value: '100% MD' },
        ],
      },
    },
    {
      id: 'demo-hero-2',
      type: 'hero',
      variant: 'hero-bento',
      visible: true,
      content: {
        badge: 'High Performance',
        title: 'High-Impact Bento Visual Composition',
        subtitle: 'Structured geometry combining bold typography and asymmetric imagery cards.',
        primaryButtonText: 'Get Started',
        secondaryButtonText: 'Documentation',
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80',
        stats: [
          { id: '1', label: 'Average Latency', value: '14.2ms' },
          { id: '2', label: 'Global Regions', value: '48 Edge' },
        ],
      },
    },
  ];

  return (
    <div className="w-full min-h-screen bg-neutral-950 text-neutral-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider theme-text-accent block mb-2">
            Reusable Architecture
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 font-heading">
            Universal Component Library
          </h1>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Every section below is an actual live-rendered component. These modular blocks can be swapped, customized, and exported seamlessly in any template.
          </p>
        </div>

        {/* Component Category Switcher */}
        <div className="flex border-b border-neutral-800 gap-2 overflow-x-auto pb-1 text-xs font-semibold">
          {[
            { id: 'hero', label: 'Hero Sections' },
            { id: 'services', label: 'Services & Cards' },
            { id: 'pricing', label: 'Pricing Tables' },
            { id: 'industry', label: 'Specialized Industry' },
            { id: 'faq', label: 'FAQ Accordions' },
            { id: 'cta', label: 'Call to Action' },
          ].map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveCategory(id as typeof activeCategory)}
              className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
                activeCategory === id
                  ? 'theme-tab-active font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Live Component Previews */}
        <div className="space-y-12">
          {activeCategory === 'hero' && (
            <div className="space-y-12">
              <div className="rounded-xl border border-neutral-800 overflow-hidden shadow-2xl">
                <div className="p-3 bg-neutral-900 border-b border-neutral-800 text-xs font-mono text-neutral-400 flex items-center justify-between">
                  <span>Variant: hero-editorial-luxury</span>
                  <Link to="/editor/dermatology-luxury-01" className="theme-text-accent hover:brightness-125">
                    Edit in Studio →
                  </Link>
                </div>
                <HeroSection section={sampleHeroes[0]} design={defaultDesign} />
              </div>

              <div className="rounded-xl border border-neutral-800 overflow-hidden shadow-2xl">
                <div className="p-3 bg-neutral-900 border-b border-neutral-800 text-xs font-mono text-neutral-400 flex items-center justify-between">
                  <span>Variant: hero-bento</span>
                  <Link to="/editor/software-hyperscale-01" className="theme-text-accent hover:brightness-125">
                    Edit in Studio →
                  </Link>
                </div>
                <HeroSection section={sampleHeroes[1]} design={techDesign} />
              </div>
            </div>
          )}

          {activeCategory === 'services' && (
            <div className="rounded-xl border border-neutral-800 overflow-hidden shadow-2xl">
              <div className="p-3 bg-neutral-900 border-b border-neutral-800 text-xs font-mono text-neutral-400">
                Variant: services-editorial-list
              </div>
              <ServicesSection
                section={{
                  id: 'demo-serv',
                  type: 'services',
                  variant: 'services-editorial-list',
                  visible: true,
                  content: {
                    badge: 'Treatments',
                    title: 'Precision Dermatology Protocols',
                    subtitle: 'Pharmaceutical-grade therapies supervised by board-certified physicians.',
                    items: [
                      {
                        id: 's1',
                        title: 'Cellular Laser Skin Resurfacing',
                        description: 'Dual wavelength fractional technology targeting sun damage and elastosis.',
                        price: 'From $850',
                      },
                      {
                        id: 's2',
                        title: 'Autologous PRP Mesotherapy',
                        description: 'Platelet concentration activating natural collagen synthesis.',
                        price: 'From $700',
                      },
                    ],
                  },
                }}
                design={defaultDesign}
              />
            </div>
          )}

          {activeCategory === 'pricing' && (
            <div className="rounded-xl border border-neutral-800 overflow-hidden shadow-2xl">
              <div className="p-3 bg-neutral-900 border-b border-neutral-800 text-xs font-mono text-neutral-400">
                Variant: pricing-cards-featured
              </div>
              <PricingSection
                section={{
                  id: 'demo-pr',
                  type: 'pricing',
                  variant: 'pricing-cards-featured',
                  visible: true,
                  content: {
                    badge: 'Membership',
                    title: 'Transparent Membership Tiers',
                    subtitle: 'Zero long-term contracts. Pause or cancel anytime.',
                    items: [
                      { id: '1', title: 'Open Gym', price: '$99 / mo', description: '24/7 biometric access and sauna.' },
                      { id: '2', title: 'Athletic Team', price: '$169 / mo', badge: 'Most Popular', description: 'Unlimited classes and coach assessments.' },
                      { id: '3', title: 'Black Label', price: '$299 / mo', description: 'Personal training and private recovery locker.' },
                    ],
                  },
                }}
                design={techDesign}
              />
            </div>
          )}

          {activeCategory === 'industry' && (
            <div className="rounded-xl border border-neutral-800 overflow-hidden shadow-2xl">
              <div className="p-3 bg-neutral-900 border-b border-neutral-800 text-xs font-mono text-neutral-400">
                Type: doctor-profile (Variant: doctor-grid)
              </div>
              <IndustrySection
                section={{
                  id: 'demo-doc',
                  type: 'doctor-profile',
                  variant: 'doctor-grid',
                  visible: true,
                  content: {
                    badge: 'Medical Faculty',
                    title: 'Leading Dermatological Surgeons',
                    subtitle: 'Our practitioners hold fellowship appointments at premier academic centers.',
                    items: [
                      {
                        id: 'd1',
                        title: 'Dr. Vivienne Moreau, MD, FAAD',
                        description: 'Specialized in Mohs micrographic surgery and laser photo-rejuvenation.',
                        meta: 'Harvard Medical School • 16 Yrs Exp',
                        imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
                      },
                      {
                        id: 'd2',
                        title: 'Dr. Julian Sterling, MD, PhD',
                        description: 'Expert in melasma therapies and biological dermal matrices.',
                        meta: 'Johns Hopkins Medicine • 14 Yrs Exp',
                        imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
                      },
                    ],
                  },
                }}
                design={defaultDesign}
              />
            </div>
          )}

          {activeCategory === 'faq' && (
            <div className="rounded-xl border border-neutral-800 overflow-hidden shadow-2xl">
              <div className="p-3 bg-neutral-900 border-b border-neutral-800 text-xs font-mono text-neutral-400">
                Variant: faq-two-column
              </div>
              <FaqSection
                section={{
                  id: 'demo-faq',
                  type: 'faq',
                  variant: 'faq-two-column',
                  visible: true,
                  content: {
                    badge: 'FAQ',
                    title: 'Frequently Answered Questions',
                    subtitle: 'Everything you need to know about our services.',
                    items: [
                      { id: '1', title: 'What is your cancellation policy?', description: 'We offer full cancellations with 24 hours prior notice.' },
                      { id: '2', title: 'Do you accept insurance?', description: 'We provide itemized superbills for out-of-network reimbursement.' },
                    ],
                  },
                }}
                design={defaultDesign}
              />
            </div>
          )}

          {activeCategory === 'cta' && (
            <div className="rounded-xl border border-neutral-800 overflow-hidden shadow-2xl">
              <div className="p-3 bg-neutral-900 border-b border-neutral-800 text-xs font-mono text-neutral-400">
                Variant: cta-banner-glow
              </div>
              <CtaSection
                section={{
                  id: 'demo-cta',
                  type: 'cta',
                  variant: 'cta-banner-glow',
                  visible: true,
                  content: {
                    badge: 'Instant Launch',
                    title: 'Launch Your Business Website Today',
                    subtitle: 'Experience zero-lock-in page building with 100% free downloads.',
                    primaryButtonText: 'Start Building Free',
                  },
                }}
                design={techDesign}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
