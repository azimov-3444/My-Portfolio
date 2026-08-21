import React from 'react';
import { Mail, Send, Github, Linkedin, Clock } from 'lucide-react';
import { profileData } from '../data/profile';
import { ContactForm } from '../components/ContactForm';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection = ({ onShowToast }) => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-card border border-dark-border text-xs font-mono text-brand-emerald mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>{t('contact.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2 font-sans">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Social & Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-dark-card border border-dark-border space-y-6">
              <h3 className="text-lg font-bold text-white">{t('contact.channelsTitle')}</h3>
              
              <div className="space-y-4">
                
                {/* Email Link */}
                <a
                  href={`mailto:${profileData.socials.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-dark-surface border border-dark-border hover:border-brand-emerald/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-brand-emerald group-hover:bg-brand-emerald/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">{t('contact.emailLabel')}</div>
                    <div className="text-sm font-semibold text-white group-hover:text-brand-emerald transition-colors">
                      {profileData.socials.email}
                    </div>
                  </div>
                </a>

                {/* Telegram Link */}
                <a
                  href={profileData.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-dark-surface border border-dark-border hover:border-brand-emerald/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan/10">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">{t('contact.telegramLabel')}</div>
                    <div className="text-sm font-semibold text-white group-hover:text-brand-cyan transition-colors">
                      {profileData.socials.telegram}
                    </div>
                  </div>
                </a>

                {/* GitHub Link */}
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-dark-surface border border-dark-border hover:border-brand-emerald/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-slate-200 group-hover:bg-white/10">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">{t('contact.githubLabel')}</div>
                    <div className="text-sm font-semibold text-white group-hover:text-slate-200 transition-colors">
                      {profileData.socials.github}
                    </div>
                  </div>
                </a>

                {/* LinkedIn Link (Conditional) */}
                {profileData.socials.linkedin && (
                  <a
                    href={profileData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-dark-surface border border-dark-border hover:border-brand-emerald/40 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-blue-400 group-hover:bg-blue-400/10">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400">{t('contact.linkedinLabel')}</div>
                      <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {profileData.socials.linkedin}
                      </div>
                    </div>
                  </a>
                )}

              </div>
            </div>

            {/* Quick Availability Badge */}
            <div className="p-4 rounded-xl bg-dark-card/60 border border-dark-border/80 flex items-center gap-3 text-xs font-mono text-slate-300">
              <Clock className="w-4 h-4 text-brand-emerald flex-shrink-0" />
              <span>{t('contact.responseTime')}</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-dark-card border border-dark-border glass-card">
            <h3 className="text-xl font-bold text-white mb-2">{t('contact.formTitle')}</h3>
            <p className="text-xs font-sans text-slate-400 mb-6">
              {t('contact.formSub')}
            </p>

            <ContactForm onShowToast={onShowToast} />
          </div>

        </div>

      </div>
    </section>
  );
};
