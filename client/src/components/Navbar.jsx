import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sun, Moon, Globe, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { lang, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: t('nav.projects'), href: '#projects', id: 'projects' },
    { name: t('nav.caseStudy'), href: '#case-study', id: 'case-study' },
    { name: t('nav.about'), href: '#about', id: 'about' },
    { name: t('nav.skills'), href: '#skills', id: 'skills' },
    { name: t('nav.contact'), href: '#inquiry', id: 'inquiry' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-dark-bg/90 backdrop-blur-md border-b border-dark-border shadow-md'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group font-mono text-base font-bold text-white tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald rounded-lg"
          >
            <div className="w-8 h-8 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-brand-emerald group-hover:border-brand-emerald/50 transition-colors">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-white font-mono font-bold text-sm tracking-wide group-hover:text-brand-emerald transition-colors">
                {profileData.brand}
              </span>
              <span className="text-[10px] font-sans font-normal text-slate-400">
                {profileData.name}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-dark-card/80 p-1.5 rounded-full border border-dark-border backdrop-blur-sm"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald ${
                    isActive
                      ? 'bg-brand-emerald text-dark-bg font-semibold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-dark-surface'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Controls & Action */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language Switcher Button (UZ / RU / EN) */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-card border border-dark-border text-slate-300 hover:text-white hover:border-brand-emerald/40 font-mono text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald"
              title="Switch Language (UZ / RU / EN)"
              aria-label={`Current language ${lang.toUpperCase()}. Click to switch.`}
            >
              <Globe className="w-3.5 h-3.5 text-brand-emerald" />
              <span className="font-bold uppercase text-[11px] text-brand-emerald">{lang}</span>
            </button>

            {/* Light / Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-dark-card border border-dark-border text-slate-300 hover:text-amber-400 hover:border-amber-400/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-400" />
              )}
            </button>

            {/* Primary Action Button */}
            <a
              href="#inquiry"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-brand-emerald text-dark-bg hover:bg-emerald-400 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald"
            >
              <span>{t('nav.hireMe')}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-dark-card border border-dark-border text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-card/95 backdrop-blur-xl border-b border-dark-border px-4 pt-3 pb-6 mt-3 space-y-3 transition-all animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-dark-surface transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-dark-border/60 flex items-center justify-between gap-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-dark-surface border border-dark-border text-slate-200 text-xs font-mono"
              >
                <Globe className="w-4 h-4 text-brand-emerald" />
                <span>Language: {lang.toUpperCase()}</span>
              </button>
              <a
                href="#inquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-grow flex items-center justify-center gap-2 py-2.5 rounded-lg bg-brand-emerald text-dark-bg font-semibold text-xs"
              >
                <span>{t('nav.hireMe')}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
