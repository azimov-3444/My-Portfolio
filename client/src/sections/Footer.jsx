import React from 'react';
import { Terminal, ArrowUp } from 'lucide-react';
import { profileData } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-bg border-t border-dark-border/80 pt-12 pb-8 text-slate-400 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-dark-border/60">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 font-mono text-base font-bold text-white">
              <div className="w-7 h-7 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-brand-emerald">
                <Terminal className="w-4 h-4" />
              </div>
              <span>{profileData.name.replace('[YOUR NAME]', 'Developer Portfolio')}</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-2 font-mono">
            <div className="text-white font-semibold text-xs mb-3 uppercase tracking-wider">{t('footer.quickLinks')}</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#hero" className="hover:text-brand-emerald transition-colors">{t('nav.about')}</a>
              <a href="#about" className="hover:text-brand-emerald transition-colors">{t('nav.about')}</a>
              <a href="#skills" className="hover:text-brand-emerald transition-colors">{t('nav.skills')}</a>
              <a href="#projects" className="hover:text-brand-emerald transition-colors">{t('nav.projects')}</a>
              <a href="#journey" className="hover:text-brand-emerald transition-colors">{t('nav.journey')}</a>
              <a href="#contact" className="hover:text-brand-emerald transition-colors">{t('nav.contact')}</a>
            </div>
          </div>

          {/* Col 3: Back to Top */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-dark-card border border-dark-border text-slate-300 hover:text-brand-emerald hover:border-brand-emerald/40 transition-all flex items-center gap-2"
              title="Top"
            >
              <span className="font-mono text-xs">Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 font-mono text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} {profileData.name.replace('[YOUR NAME]', 'Developer Portfolio')}. {t('footer.rights')}
          </div>

          <div className="flex items-center gap-4">
            <a href={profileData.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <span>•</span>
            <a href={profileData.socials.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Telegram
            </a>
            {profileData.socials.linkedin && (
              <>
                <span>•</span>
                <a href={profileData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
