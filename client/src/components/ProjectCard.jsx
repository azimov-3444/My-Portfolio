import React from 'react';
import { ExternalLink, Github, Layers, Eye, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ProjectCard = ({ project, onOpenDetails, featured = false }) => {
  const { t } = useLanguage();

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden workshop-card flex flex-col justify-between transition-all duration-300 ${
        featured ? 'lg:col-span-2 lg:grid lg:grid-cols-12 lg:gap-6 lg:items-center' : ''
      }`}
    >
      {/* Visual Interface Preview Banner */}
      <div
        className={`relative overflow-hidden bg-dark-surface border-b border-dark-border ${
          featured ? 'lg:col-span-6 h-60 lg:h-full min-h-[260px]' : 'h-52'
        }`}
      >
        {/* Fake UI Header Bar */}
        <div className="flex items-center justify-between px-3 py-2 bg-dark-card border-b border-dark-border text-[10px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2 h-2 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-1 text-[10px] truncate max-w-[180px]">{project.title}</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-brand-emerald/10 text-brand-emerald font-semibold">
            {project.categoryType || project.category}
          </span>
        </div>

        {/* Real UI Visual Representation Mockup */}
        <div className="p-4 h-full flex flex-col justify-between bg-dark-surface/80 font-sans">
          <div className="p-3.5 rounded-xl bg-dark-card border border-dark-border space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white truncate">{project.title}</span>
              <span className="text-[10px] font-mono text-brand-emerald font-semibold">Verified Work</span>
            </div>
            <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
              {project.shortDescription || project.description}
            </p>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-dark-border/60">
            <span>{project.technologies.slice(0, 3).join(' • ')}</span>
            <span className="text-brand-emerald font-semibold">Live Site Active</span>
          </div>
        </div>

        {/* Hover Quick Action Buttons */}
        <div className="absolute inset-0 z-20 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-250 bg-dark-bg/80 backdrop-blur-xs p-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-brand-emerald text-dark-bg font-bold text-xs flex items-center gap-1.5 hover:bg-emerald-400 transition-colors shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald"
          >
            <ExternalLink className="w-4 h-4" />
            <span>{t('projects.liveDemo')}</span>
          </a>
          <button
            onClick={() => onOpenDetails(project)}
            className="px-4 py-2.5 rounded-xl bg-dark-card border border-dark-border text-white text-xs font-semibold flex items-center gap-1.5 hover:border-slate-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald"
          >
            <Eye className="w-4 h-4" />
            <span>{t('projects.details')}</span>
          </button>
        </div>
      </div>

      {/* Project Content Info */}
      <div
        className={`p-6 flex flex-col justify-between flex-grow ${
          featured ? 'lg:col-span-6' : ''
        }`}
      >
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <h3 className="text-xl font-bold text-white group-hover:text-brand-emerald transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-xs font-mono text-slate-400 mb-3">
            {project.subtitle}
          </p>

          <p className="text-sm text-slate-300 line-clamp-3 mb-4 leading-relaxed font-sans">
            {project.fullDescription || project.shortDescription}
          </p>

          {/* Verified Contribution Box */}
          {project.verifiedContribution && (
            <div className="mb-4 p-2.5 rounded-lg bg-dark-surface border border-dark-border text-xs text-slate-300 flex items-start gap-2 font-sans">
              <CheckCircle2 className="w-4 h-4 text-brand-emerald flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-[10px] text-slate-400 block uppercase font-semibold">
                  {t('projects.verifiedContribution')}
                </span>
                <span>{project.verifiedContribution}</span>
              </div>
            </div>
          )}

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-dark-surface border border-dark-border text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Link Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-dark-border/80">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-emerald hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-emerald"
          >
            <span>{t('projects.liveDemo')}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 focus:outline-none"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
            <button
              onClick={() => onOpenDetails(project)}
              className="text-xs font-mono text-slate-300 hover:text-white underline decoration-slate-600 underline-offset-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-emerald"
            >
              {t('projects.details')} &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
