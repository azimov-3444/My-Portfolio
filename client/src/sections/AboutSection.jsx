import React from 'react';
import { User, CheckCircle2, Cpu, Layout, Server, Rocket } from 'lucide-react';
import { profileData } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection = () => {
  const { t } = useLanguage();

  const processSteps = [
    {
      num: "01",
      icon: Layout,
      title: t('about.processSteps.0.title'),
      desc: t('about.processSteps.0.desc')
    },
    {
      num: "02",
      icon: Server,
      title: t('about.processSteps.1.title'),
      desc: t('about.processSteps.1.desc')
    },
    {
      num: "03",
      icon: Cpu,
      title: t('about.processSteps.2.title'),
      desc: t('about.processSteps.2.desc')
    },
    {
      num: "04",
      icon: Rocket,
      title: t('about.processSteps.3.title'),
      desc: t('about.processSteps.3.desc')
    }
  ];

  return (
    <section id="about" className="py-20 relative">
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
          <p className="text-slate-300 text-sm max-w-2xl mt-2 font-sans leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Personal Introduction */}
          <div className="lg:col-span-5 space-y-4 p-6 rounded-2xl bg-dark-card border border-dark-border workshop-card">
            <h3 className="text-lg font-bold text-white font-mono border-b border-dark-border pb-3">
              Humoyun Azimov (KyroX)
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed font-sans">
              {t('about.introParagraph1')}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed font-sans">
              {t('about.introParagraph2')}
            </p>

            <div className="pt-2 grid grid-cols-1 gap-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald flex-shrink-0" />
                <span>Component Modular Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald flex-shrink-0" />
                <span>RESTful API Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald flex-shrink-0" />
                <span>Mobile-First Responsive Layouts</span>
              </div>
            </div>
          </div>

          {/* Right Column: Working Process Steps */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs font-mono text-brand-emerald uppercase tracking-wider mb-2 font-bold">
              {t('about.processTitle')}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {processSteps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-dark-card border border-dark-border workshop-card space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-brand-emerald bg-brand-emerald/10 px-2.5 py-0.5 rounded border border-brand-emerald/20">
                        {step.num}
                      </span>
                      <IconComponent className="w-4 h-4 text-slate-400" />
                    </div>
                    <h4 className="text-base font-bold text-white">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
