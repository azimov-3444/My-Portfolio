import React from 'react';
import { Cpu, Layout, Server, Wrench } from 'lucide-react';
import { skillsCategories } from '../data/skills';
import { TechBadge } from '../components/TechBadge';
import { useLanguage } from '../context/LanguageContext';

export const SkillsSection = () => {
  const { t } = useLanguage();

  const getCategoryIcon = (index) => {
    if (index === 0) return Layout;
    if (index === 1) return Server;
    return Wrench;
  };

  return (
    <section id="skills" className="py-24 bg-dark-surface/40 border-y border-dark-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-card border border-dark-border text-xs font-mono text-brand-emerald mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t('skills.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('skills.title')}
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl mt-2 font-sans leading-relaxed">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="space-y-12">
          {skillsCategories.map((category, idx) => {
            const IconComp = getCategoryIcon(idx);
            return (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-dark-border">
                  <div className="w-7 h-7 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-brand-emerald">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-mono">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIdx) => (
                    <TechBadge key={skillIdx} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
