import React, { useState } from 'react';
import { Layers, Sparkles, CheckCircle2, ExternalLink, HelpCircle, Eye, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FeaturedCaseStudy = () => {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState('explore'); // 'explore' | 'annotated'
  const [selectedAnnotation, setSelectedAnnotation] = useState(0);
  const [accordionOpen, setAccordionOpen] = useState(null);

  const annotations = [
    {
      id: "nav-search",
      num: "01",
      title: t('caseStudy.annotations.0.title'),
      description: t('caseStudy.annotations.0.description'),
      target: t('caseStudy.annotations.0.target'),
      tech: "React State & Client Filtering"
    },
    {
      id: "product-grid",
      num: "02",
      title: t('caseStudy.annotations.1.title'),
      description: t('caseStudy.annotations.1.description'),
      target: t('caseStudy.annotations.1.target'),
      tech: "CSS Grid & Image Lazy Loading"
    },
    {
      id: "mobile-ux",
      num: "03",
      title: t('caseStudy.annotations.2.title'),
      description: t('caseStudy.annotations.2.description'),
      target: t('caseStudy.annotations.2.target'),
      tech: "Mobile-First Touch Target > 44px"
    },
    {
      id: "modal-details",
      num: "04",
      title: t('caseStudy.annotations.3.title'),
      description: t('caseStudy.annotations.3.description'),
      target: t('caseStudy.annotations.3.target'),
      tech: "Modal Portal & Event Trapping"
    }
  ];

  const currentAnn = annotations[selectedAnnotation];

  return (
    <section id="case-study" className="py-20 bg-dark-surface/40 border-y border-dark-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-card border border-dark-border text-xs font-mono text-brand-emerald mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('caseStudy.sectionBadge')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {t('caseStudy.sectionTitle')}
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl mt-2 font-sans leading-relaxed">
            {t('caseStudy.sectionSubtitle')}
          </p>
        </div>

        {/* Interaction Mode Switcher Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-3 rounded-2xl bg-dark-card border border-dark-border mb-8">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('explore')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald ${
                viewMode === 'explore'
                  ? 'bg-brand-emerald text-dark-bg shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-dark-surface'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>{t('caseStudy.modeExplore')}</span>
            </button>

            <button
              onClick={() => setViewMode('annotated')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald ${
                viewMode === 'annotated'
                  ? 'bg-brand-emerald text-dark-bg shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-dark-surface'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>{t('caseStudy.modeAnnotated')}</span>
            </button>
          </div>

          <div className="text-xs font-mono text-slate-400 hidden md:block">
            {viewMode === 'explore' ? t('caseStudy.exploreDesc') : t('caseStudy.annotatedDesc')}
          </div>
        </div>

        {/* Case Study Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Visual Display (Left Column) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-2xl bg-dark-card border border-dark-border overflow-hidden p-4 sm:p-6 shadow-xl workshop-card">
              
              {/* Top Fake Browser Frame */}
              <div className="flex items-center justify-between pb-4 border-b border-dark-border text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-[11px]">999premiumtools.com</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-brand-emerald/10 text-brand-emerald text-[10px]">
                  {viewMode === 'explore' ? 'Live Interface' : 'Annotated Mode'}
                </span>
              </div>

              {/* Interface Content Container */}
              <div className="pt-4 space-y-4 relative">
                
                {/* 1. Header/Search Region */}
                <div
                  className={`p-3 rounded-xl border transition-all ${
                    viewMode === 'annotated' && selectedAnnotation === 0
                      ? 'border-brand-emerald bg-brand-emerald/10 shadow-md ring-2 ring-brand-emerald/50'
                      : 'border-dark-border bg-dark-surface/80'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="font-bold text-white">999 Premium Tools Catalog</span>
                    <span className="text-[10px] font-mono text-slate-400">🔍 Filter by Category</span>
                  </div>
                  {viewMode === 'annotated' && (
                    <button
                      onClick={() => setSelectedAnnotation(0)}
                      className="mt-2 inline-flex items-center gap-1 text-[11px] font-mono text-brand-emerald underline font-semibold focus:outline-none"
                    >
                      <span>[01] {annotations[0].title}</span>
                    </button>
                  )}
                </div>

                {/* 2. Product Grid Region */}
                <div
                  className={`p-4 rounded-xl border transition-all ${
                    viewMode === 'annotated' && selectedAnnotation === 1
                      ? 'border-brand-emerald bg-brand-emerald/10 shadow-md ring-2 ring-brand-emerald/50'
                      : 'border-dark-border bg-dark-surface/60'
                  }`}
                >
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-dark-card border border-dark-border space-y-1.5">
                      <div className="text-white font-bold text-xs">999 Precision Motor</div>
                      <div className="text-[11px] font-mono text-brand-emerald">$280.00 • In Stock</div>
                    </div>
                    <div className="p-3 rounded-lg bg-dark-card border border-dark-border space-y-1.5">
                      <div className="text-white font-bold text-xs">999 Digital Scale 0.001g</div>
                      <div className="text-[11px] font-mono text-brand-emerald">$145.00 • In Stock</div>
                    </div>
                  </div>
                  {viewMode === 'annotated' && (
                    <button
                      onClick={() => setSelectedAnnotation(1)}
                      className="mt-2 inline-flex items-center gap-1 text-[11px] font-mono text-brand-emerald underline font-semibold focus:outline-none"
                    >
                      <span>[02] {annotations[1].title}</span>
                    </button>
                  )}
                </div>

                {/* 3. Mobile Target / Specification Modal Region */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div
                    className={`p-3 rounded-xl border transition-all ${
                      viewMode === 'annotated' && selectedAnnotation === 2
                        ? 'border-brand-emerald bg-brand-emerald/10 shadow-md ring-2 ring-brand-emerald/50'
                        : 'border-dark-border bg-dark-surface/60'
                    }`}
                  >
                    <div className="text-xs font-bold text-white mb-1">📱 Mobile Touch Targets</div>
                    <div className="text-[11px] text-slate-300 font-mono">Touch targets &gt; 44px</div>
                    {viewMode === 'annotated' && (
                      <button
                        onClick={() => setSelectedAnnotation(2)}
                        className="mt-2 text-[11px] font-mono text-brand-emerald underline font-semibold block focus:outline-none"
                      >
                        [03] {annotations[2].title}
                      </button>
                    )}
                  </div>

                  <div
                    className={`p-3 rounded-xl border transition-all ${
                      viewMode === 'annotated' && selectedAnnotation === 3
                        ? 'border-brand-emerald bg-brand-emerald/10 shadow-md ring-2 ring-brand-emerald/50'
                        : 'border-dark-border bg-dark-surface/60'
                    }`}
                  >
                    <div className="text-xs font-bold text-white mb-1">🔍 Specification Modal UX</div>
                    <div className="text-[11px] text-slate-300 font-mono">Modal inspect without refresh</div>
                    {viewMode === 'annotated' && (
                      <button
                        onClick={() => setSelectedAnnotation(3)}
                        className="mt-2 text-[11px] font-mono text-brand-emerald underline font-semibold block focus:outline-none"
                      >
                        [04] {annotations[3].title}
                      </button>
                    )}
                  </div>
                </div>

              </div>

              {/* Bottom Footer Actions */}
              <div className="pt-4 mt-4 border-t border-dark-border flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">999 Premium Tools Production Platform</span>
                <a
                  href="https://999premiumtools.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-emerald hover:underline font-bold flex items-center gap-1"
                >
                  <span>Visit Production Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Details & Annotations Panel (Right Column) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Mode 1: Explore Context & Verified Specs */}
            {viewMode === 'explore' && (
              <div className="p-6 rounded-2xl bg-dark-card border border-dark-border space-y-6 workshop-card">
                <div>
                  <h3 className="text-xs font-mono text-brand-emerald uppercase tracking-wider mb-1">
                    {t('caseStudy.context')}
                  </h3>
                  <p className="text-slate-200 text-sm leading-relaxed font-sans">
                    {t('caseStudy.contextDesc')}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-dark-surface/80 border border-dark-border space-y-1">
                    <div className="text-xs font-mono text-amber-400 font-semibold uppercase">{t('caseStudy.problem')}</div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">{t('caseStudy.problemDesc')}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-dark-surface/80 border border-dark-border space-y-1">
                    <div className="text-xs font-mono text-brand-emerald font-semibold uppercase">{t('caseStudy.solution')}</div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">{t('caseStudy.solutionDesc')}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    {t('caseStudy.outcomesTitle')}
                  </h4>
                  <div className="space-y-2">
                    {t('caseStudy.outcomes').map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-brand-emerald flex-shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Mode 2: How I Built It Annotations Selection */}
            {viewMode === 'annotated' && (
              <div className="p-6 rounded-2xl bg-dark-card border border-dark-border space-y-5 workshop-card">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-mono text-brand-emerald font-bold uppercase tracking-wider">
                    How I Built It — Annotations
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    [{selectedAnnotation + 1} / {annotations.length}]
                  </span>
                </div>

                {/* Numbered Tab Controls */}
                <div className="flex items-center gap-2">
                  {annotations.map((ann, idx) => (
                    <button
                      key={ann.id}
                      onClick={() => setSelectedAnnotation(idx)}
                      className={`flex-1 py-2 rounded-xl text-xs font-mono font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald ${
                        selectedAnnotation === idx
                          ? 'bg-brand-emerald text-dark-bg shadow-sm'
                          : 'bg-dark-surface border border-dark-border text-slate-300 hover:text-white'
                      }`}
                    >
                      {ann.num}
                    </button>
                  ))}
                </div>

                {/* Active Annotation Details Box */}
                <div className="p-4 rounded-xl bg-dark-surface border border-dark-border space-y-3 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400 bg-dark-card px-2.5 py-0.5 rounded border border-dark-border">
                      {currentAnn.target}
                    </span>
                    <span className="text-[10px] font-mono text-brand-emerald font-bold">
                      {currentAnn.tech}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white">
                    {currentAnn.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {currentAnn.description}
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
