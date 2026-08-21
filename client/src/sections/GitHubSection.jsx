import React from 'react';
import { Github, GitBranch, ExternalLink, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';

export const GitHubSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-dark-surface/40 border-y border-dark-border/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-dark-card/90 border border-dark-border relative overflow-hidden glass-card">
          
          {/* Subtle Glow background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-emerald/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-surface border border-dark-border text-xs font-mono text-brand-emerald">
                <Github className="w-4 h-4" />
                <span>{t('github.badge')}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {t('github.title')}
              </h2>

              <p className="text-slate-300 text-sm font-sans leading-relaxed max-w-2xl">
                {t('github.desc')}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <GitBranch className="w-4 h-4 text-brand-emerald" />
                  <span>{t('github.workflows')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-cyan" />
                  <span>{t('github.cleanCode')}</span>
                </div>
              </div>
            </div>

            {/* Right Action Button */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-dark-surface border border-dark-border text-white font-semibold text-sm flex items-center gap-2 hover:border-brand-emerald hover:text-brand-emerald transition-all shadow-lg group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{t('github.visitProfile')}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
