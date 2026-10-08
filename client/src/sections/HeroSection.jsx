import React from 'react';
import { ArrowRight, Send, Github, MessageSquare } from 'lucide-react';
import { profileData } from '../data/profile';
import { HeroProjectPreview } from '../components/HeroProjectPreview';
import { useLanguage } from '../context/LanguageContext';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background Accent Grids */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-emerald/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card border border-dark-border text-xs font-mono text-brand-emerald">
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
              <span>{t('hero.badge')}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                {profileData.brand} • {profileData.name}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                {t('hero.headline')}
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 font-sans">
                {t('hero.role')}
              </h2>
            </div>

            {/* Supporting Pitch */}
            <p className="text-slate-300 text-base leading-relaxed font-sans max-w-2xl">
              {t('hero.description')}
            </p>

            {/* Core Tech Pill Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-mono text-slate-400 mr-1 font-medium">Core Stack:</span>
              {['React', 'JavaScript (ES6+)', 'Node.js', 'Express', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-card border border-dark-border text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-brand-emerald text-dark-bg font-bold text-sm flex items-center gap-2 hover:bg-emerald-400 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald"
              >
                <span>{t('hero.primaryCta')}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#inquiry"
                className="px-6 py-3.5 rounded-xl bg-dark-card border border-dark-border text-white font-semibold text-sm flex items-center gap-2 hover:border-slate-400 transition-all hover:bg-dark-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald"
              >
                <MessageSquare className="w-4 h-4 text-brand-emerald" />
                <span>{t('hero.secondaryCta')}</span>
              </a>
            </div>

            {/* Direct Links */}
            <div className="flex items-center gap-4 pt-2 text-xs font-mono text-slate-400">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
              <span>•</span>
              <a
                href={profileData.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Send className="w-4 h-4 text-brand-emerald" />
                <span>Telegram (@totkogotiiskala)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Authentic Product Preview Component */}
          <div className="lg:col-span-5 relative">
            <HeroProjectPreview />
          </div>

        </div>
      </div>
    </section>
  );
};
