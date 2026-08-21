import React from 'react';
import { User, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection = () => {
  const { t } = useLanguage();

  const paragraphs = t('about.paragraphs');
  const stats = t('about.stats');

  const competencies = [
    t('about.comp1'),
    t('about.comp2'),
    t('about.comp3'),
    t('about.comp4'),
    t('about.comp5'),
    t('about.comp6')
  ];

  return (
    <section id="about" className="py-20 bg-dark-surface/40 border-y border-dark-border/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-card border border-dark-border text-xs font-mono text-brand-emerald mb-3">
            <User className="w-3.5 h-3.5" />
            <span>{t('about.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('about.title')}
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            {Array.isArray(paragraphs) && paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300 text-base leading-relaxed font-sans">
                {paragraph}
              </p>
            ))}

            {/* Core Competencies Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {competencies.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-emerald flex-shrink-0" />
                  <span className="text-xs font-mono text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Stats / Highlights Box */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {Array.isArray(stats) && stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-dark-card border border-dark-border/80 flex flex-col justify-between hover:border-brand-emerald/40 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mb-2 gradient-text-emerald">
                  {stat.value}
                </div>
                <div className="text-xs font-sans text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
