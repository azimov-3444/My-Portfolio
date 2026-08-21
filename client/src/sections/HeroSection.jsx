import React from 'react';
import { ArrowRight, Send, Github } from 'lucide-react';
import { profileData } from '../data/profile';
import { VisualCodeCard } from '../components/VisualCodeCard';
import { useLanguage } from '../context/LanguageContext';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      
      {/* Glow Orbs Background Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand-emerald/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card border border-brand-emerald/30 text-xs font-mono text-brand-emerald backdrop-blur-md shadow-glow-emerald">
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
              <span>{t('hero.status')}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                {t('hero.greeting')}{' '}
                <span className="gradient-text-emerald">
                  {profileData.name.replace('[YOUR NAME]', 'Developer')}
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-300 font-sans">
                {t('hero.role')}
              </h2>
            </div>

            {/* Tagline / Pitch */}
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed font-sans">
              {t('hero.tagline')} {t('hero.bio')}
            </p>

            {/* Key Tech Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-mono text-slate-500 mr-2">{t('hero.coreTech')}</span>
              {['React', 'JavaScript', 'Node.js', 'Express', 'Tailwind'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-card border border-dark-border text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-brand-emerald text-dark-bg font-bold text-sm flex items-center gap-2 hover:bg-emerald-400 transition-all shadow-lg shadow-brand-emerald/20 hover:scale-[1.02]"
              >
                <span>{t('hero.viewWork')}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-dark-card border border-dark-border text-white font-semibold text-sm flex items-center gap-2 hover:border-slate-400 transition-all hover:bg-dark-surface"
              >
                <Send className="w-4 h-4 text-brand-emerald" />
                <span>{t('hero.contactMe')}</span>
              </a>
            </div>

            {/* Social Quick Links */}
            <div className="flex items-center gap-4 pt-4 text-slate-400 text-xs font-mono">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center gap-1 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>{t('hero.socialGithub')}</span>
              </a>
              <span>•</span>
              <a
                href={profileData.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>{t('hero.socialTelegram')}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Developer Terminal Graphic */}
          <div className="lg:col-span-5 relative">
            <VisualCodeCard />
          </div>

        </div>
      </div>
    </section>
  );
};
