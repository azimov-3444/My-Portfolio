import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ProjectModal = ({ project, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-dark-bg/85 backdrop-blur-md animate-fadeIn">
      {/* Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-dark-surface border border-dark-border rounded-2xl shadow-2xl z-10 flex flex-col">
        
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-5 bg-dark-surface/90 backdrop-blur-md border-b border-dark-border">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald">
              {project.category}
            </span>
            <h3 className="text-lg font-bold text-white truncate max-w-md">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-dark-card border border-dark-border text-slate-400 hover:text-white hover:border-slate-400 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Main Visual Banner */}
          <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-dark-border group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
              <span className="text-xs font-mono text-slate-300 bg-dark-bg/80 px-3 py-1 rounded-md border border-dark-border backdrop-blur-sm">
                {t('projects.role')} {project.role || 'Lead Frontend Developer'}
              </span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-brand-emerald text-dark-bg font-semibold text-xs flex items-center gap-1.5 hover:bg-emerald-400 transition-all shadow-lg"
              >
                <span>{t('projects.visitDemo')}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono text-brand-emerald uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              {t('projects.overview')}
            </h4>
            <p className="text-slate-200 text-base leading-relaxed font-sans">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Key Highlights */}
          {project.highlights && (
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
                {t('projects.highlights')}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-dark-card border border-dark-border/80 flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-emerald mt-2 flex-shrink-0" />
                    <span className="text-xs text-slate-300 font-sans leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Case Study Problem & Solution */}
          {project.caseStudy && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-dark-card/60 border border-dark-border">
                <h5 className="text-xs font-mono text-amber-400 mb-1.5 uppercase">{t('projects.challenge')}</h5>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {project.caseStudy.challenge}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-dark-card/60 border border-dark-border">
                <h5 className="text-xs font-mono text-brand-emerald mb-1.5 uppercase">{t('projects.solution')}</h5>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {project.caseStudy.solution}
                </p>
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              {t('projects.techUsed')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-dark-card border border-dark-border text-brand-emerald"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="p-5 bg-dark-surface border-t border-dark-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-brand-emerald text-dark-bg font-bold text-xs flex items-center gap-2 hover:bg-emerald-400 transition-colors shadow-lg"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{t('projects.visitDemo')}</span>
            </a>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-dark-card border border-dark-border text-white text-xs font-semibold flex items-center gap-2 hover:border-slate-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>{t('projects.sourceCode')}</span>
              </a>
            ) : (
              <span className="text-xs font-mono text-slate-500 bg-dark-card px-3 py-2 rounded-lg border border-dark-border/50">
                {t('projects.privateRepo')}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white"
          >
            {t('projects.close')}
          </button>
        </div>
      </div>
    </div>
  );
};
