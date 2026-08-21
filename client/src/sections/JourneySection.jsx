import React from 'react';
import { Milestone } from 'lucide-react';
import { journeyMilestones } from '../data/journey';
import { useLanguage } from '../context/LanguageContext';

export const JourneySection = () => {
  const { t } = useLanguage();

  return (
    <section id="journey" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-card border border-dark-border text-xs font-mono text-brand-emerald mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>{t('journey.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('journey.title')}
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2 font-sans">
            {t('journey.subtitle')}
          </p>
        </div>

        {/* Timeline Roadmap */}
        <div className="relative border-l border-dark-border/80 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {journeyMilestones.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-dark-bg border-2 border-brand-emerald flex items-center justify-center group-hover:scale-125 transition-transform">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
              </div>

              {/* Milestone Card */}
              <div className="p-6 rounded-2xl bg-dark-card/70 border border-dark-border/80 hover:border-brand-emerald/40 transition-colors glass-card">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-brand-emerald px-2.5 py-0.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/20">
                    {item.year}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 font-sans leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-dark-surface border border-dark-border text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
