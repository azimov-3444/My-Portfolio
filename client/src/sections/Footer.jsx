import React from 'react';
import { Terminal, ArrowUp, Github, Send, Mail } from 'lucide-react';
import { profileData } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-surface/90 border-t border-dark-border py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-dark-border">
          
          {/* Left Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-brand-emerald">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold font-mono text-white">
                {profileData.brand} • {profileData.name}
              </div>
              <div className="text-xs text-slate-400 font-sans">
                {t('footer.desc')}
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-300">
            <a href="#hero" className="hover:text-brand-emerald transition-colors">Hero</a>
            <span>•</span>
            <a href="#projects" className="hover:text-brand-emerald transition-colors">{t('nav.projects')}</a>
            <span>•</span>
            <a href="#case-study" className="hover:text-brand-emerald transition-colors">{t('nav.caseStudy')}</a>
            <span>•</span>
            <a href="#about" className="hover:text-brand-emerald transition-colors">{t('nav.about')}</a>
            <span>•</span>
            <a href="#skills" className="hover:text-brand-emerald transition-colors">{t('nav.skills')}</a>
            <span>•</span>
            <a href="#inquiry" className="hover:text-brand-emerald transition-colors">{t('nav.contact')}</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-dark-card border border-dark-border text-slate-300 hover:text-white hover:border-brand-emerald/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4 text-brand-emerald" />
          </button>
        </div>

        {/* Bottom Rights */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} {profileData.name} ({profileData.brand}). {t('footer.rights')}
          </div>
          <div className="flex items-center gap-4">
            <a href={profileData.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href={profileData.socials.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Telegram
            </a>
            <a href={`mailto:${profileData.socials.email}`} className="hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
