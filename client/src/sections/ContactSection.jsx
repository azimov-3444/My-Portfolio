import React from 'react';
import { Mail, Send, Github, MessageSquare, Clock, Bot } from 'lucide-react';
import { profileData } from '../data/profile';
import { ProjectInquiryBuilder } from '../components/ProjectInquiryBuilder';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection = ({ onShowToast }) => {
  const { t } = useLanguage();

  return (
    <section id="inquiry" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-card border border-dark-border text-xs font-mono text-brand-emerald mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t('inquiry.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('inquiry.title')}
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl mt-2 font-sans leading-relaxed">
            {t('inquiry.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-dark-card border border-dark-border space-y-4 workshop-card">
              <h3 className="text-base font-bold text-white font-mono border-b border-dark-border pb-3">
                {t('contact.channelsTitle')}
              </h3>

              <div className="space-y-3">
                {/* Personal Telegram Direct Contact */}
                <a
                  href={profileData.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-dark-surface border border-dark-border hover:border-brand-emerald/50 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-brand-emerald group-hover:bg-brand-emerald group-hover:text-dark-bg transition-colors">
                    <Send className="w-4 h-4" />
                  </div>
                  <div className="text-left font-sans">
                    <span className="text-[11px] font-mono text-slate-400 block">
                      Telegram Shaxsiy Akkaunt
                    </span>
                    <span className="text-xs font-semibold text-white group-hover:text-brand-emerald transition-colors">
                      {profileData.socials.telegramUsername}
                    </span>
                  </div>
                </a>

                {/* Telegram Bot Assistant */}
                <a
                  href={profileData.socials.telegramBot}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-dark-surface border border-dark-border hover:border-indigo-400/50 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="text-left font-sans">
                    <span className="text-[11px] font-mono text-slate-400 block">
                      KyroX Telegram Bot Assistant
                    </span>
                    <span className="text-xs font-semibold text-white group-hover:text-indigo-400 transition-colors">
                      {profileData.socials.telegramBotUsername}
                    </span>
                  </div>
                </a>

                {/* Email Direct Contact */}
                <a
                  href={`mailto:${profileData.socials.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-dark-surface border border-dark-border hover:border-brand-emerald/50 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-brand-emerald group-hover:bg-brand-emerald group-hover:text-dark-bg transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-left font-sans">
                    <span className="text-[11px] font-mono text-slate-400 block">
                      {t('contact.emailLabel')}
                    </span>
                    <span className="text-xs font-semibold text-white group-hover:text-brand-emerald transition-colors truncate max-w-[210px] block">
                      {profileData.socials.email}
                    </span>
                  </div>
                </a>

                {/* GitHub Profile */}
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-dark-surface border border-dark-border hover:border-brand-emerald/50 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-brand-emerald group-hover:bg-brand-emerald group-hover:text-dark-bg transition-colors">
                    <Github className="w-4 h-4" />
                  </div>
                  <div className="text-left font-sans">
                    <span className="text-[11px] font-mono text-slate-400 block">
                      {t('contact.githubLabel')}
                    </span>
                    <span className="text-xs font-semibold text-white group-hover:text-brand-emerald transition-colors">
                      github.com/azimov-3444/
                    </span>
                  </div>
                </a>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400 border-t border-dark-border/60">
                <Clock className="w-3.5 h-3.5 text-brand-emerald" />
                <span>{t('contact.responseTime')}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Step-by-Step Project Inquiry Builder */}
          <div className="lg:col-span-7">
            <ProjectInquiryBuilder onShowToast={onShowToast} />
          </div>

        </div>

      </div>
    </section>
  );
};
