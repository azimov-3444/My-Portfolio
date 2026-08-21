import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal, Sun, Moon, Globe } from 'lucide-react';
import { profileData } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { lang, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: t('nav.about'), href: '#about', id: 'about' },
    { name: t('nav.skills'), href: '#skills', id: 'skills' },
    { name: t('nav.projects'), href: '#projects', id: 'projects' },
    { name: t('nav.journey'), href: '#journey', id: 'journey' },
    { name: t('nav.contact'), href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-dark-bg/85 backdrop-blur-md border-b border-dark-border/60 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group font-mono text-lg font-bold text-white tracking-tight"
          >
            <div className="w-9 h-9 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-brand-emerald group-hover:border-brand-emerald/50 group-hover:shadow-glow-emerald transition-all">
              <Terminal className="w-5 h-5" />
            </div>
            <span className="group-hover:text-brand-emerald transition-colors">
              {profileData.name.replace('[YOUR NAME]', 'Dev.Portfolio')}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-dark-card/60 p-1.5 rounded-full border border-dark-border/80 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-emerald text-dark-bg font-semibold shadow-md shadow-brand-emerald/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-dark-surface/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Controls & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language Switcher Button (UZ / RU) */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-dark-card border border-dark-border text-slate-300 hover:text-white hover:border-brand-emerald/40 font-mono text-xs transition-colors"
              title="Tilni o'zgartirish / Сменить язык"
            >
              <Globe className="w-3.5 h-3.5 text-brand-emerald" />
              <span className="font-bold uppercase">{lang}</span>
            </button>

            {/* Light / Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-dark-card border border-dark-border text-slate-300 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
              title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-400" />
              )}
            </button>

            {/* Hire Me CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-dark-card border border-brand-emerald/30 text-brand-emerald hover:bg-brand-emerald hover:text-dark-bg hover:border-brand-emerald transition-all duration-200"
            >
              <span>{t('nav.hireMe')}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-dark-card border border-dark-border text-slate-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                className="px-4 py-3 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-dark-surface transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-dark-border/60 flex items-center justify-between gap-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-surface border border-dark-border text-slate-200 text-xs font-mono"
              >
                <Globe className="w-4 h-4 text-brand-emerald" />
                <span>Til: {lang.toUpperCase()}</span>
              </button>
              <a
                href="#contact"
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
