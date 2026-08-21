import React from 'react';
import { Cpu, Layout, Server, Wrench } from 'lucide-react';
import { skillsCategories } from '../data/skills';
import { TechBadge } from '../components/TechBadge';
import { useLanguage } from '../context/LanguageContext';

export const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 relative">
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
          <p className="text-slate-400 text-sm max-w-2xl mt-2 font-sans">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Skills Categories Stack */}
        <div className="space-y-12">
          {skillsCategories.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-dark-border/60">
                {category.title.includes('Frontend') ? (
                  <Layout className="w-5 h-5 text-brand-emerald" />
                ) : category.title.includes('Backend') ? (
                  <Server className="w-5 h-5 text-brand-cyan" />
                ) : (
                  <Wrench className="w-5 h-5 text-purple-400" />
                )}
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title.includes('Frontend') ? t('skills.frontendTitle') : category.title.includes('Backend') ? t('skills.backendTitle') : t('skills.toolsTitle')}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans">
                    {category.title.includes('Frontend') ? t('skills.frontendDesc') : category.title.includes('Backend') ? t('skills.backendDesc') : t('skills.toolsDesc')}
                  </p>
                </div>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <TechBadge key={sIdx} skill={skill} highlight={skill.highlight} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
