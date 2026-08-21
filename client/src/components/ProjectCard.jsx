import React from 'react';
import { ExternalLink, Github, Eye, Layers } from 'lucide-react';

export const ProjectCard = ({ project, onOpenDetails, featured = false }) => {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden glass-card glass-card-hover flex flex-col justify-between transition-all duration-300 ${
        featured ? 'lg:col-span-2 lg:grid lg:grid-cols-12 lg:gap-6 lg:items-center' : ''
      }`}
    >
      {/* Project Image Showcase */}
      <div
        className={`relative overflow-hidden ${
          featured ? 'lg:col-span-7 h-64 lg:h-full min-h-[280px]' : 'h-52'
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Category Overlay Tag */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-dark-bg/80 border border-dark-border/80 text-brand-emerald backdrop-blur-md">
            <Layers className="w-3 h-3" />
            {project.category}
          </span>
        </div>

        {/* Hover Quick Action Buttons */}
        <div className="absolute inset-0 z-20 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-dark-bg/60 backdrop-blur-sm p-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-brand-emerald text-dark-bg font-semibold text-xs flex items-center gap-1.5 hover:bg-emerald-400 transition-colors shadow-lg"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
          <button
            onClick={() => onOpenDetails(project)}
            className="px-4 py-2 rounded-lg bg-dark-card border border-dark-border text-white text-xs font-semibold flex items-center gap-1.5 hover:border-slate-400 transition-colors"
          >
            <Eye className="w-4 h-4" />
            <span>Details</span>
          </button>
        </div>
      </div>

      {/* Project Info Content */}
      <div
        className={`p-6 flex flex-col justify-between flex-grow ${
          featured ? 'lg:col-span-5' : ''
        }`}
      >
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-brand-emerald transition-colors mb-1.5">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-slate-400 mb-3">
            {project.subtitle}
          </p>
          <p className="text-sm text-slate-300 line-clamp-3 mb-4 leading-relaxed font-sans">
            {project.shortDescription || project.description}
          </p>

          {/* Tech Badges Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-dark-surface border border-dark-border text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-dark-surface text-slate-500">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-dark-border/60">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-emerald hover:underline"
          >
            <span>Visit Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-surface border border-dark-border text-slate-400 hover:text-white hover:border-slate-400 transition-colors"
                title="View Code on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={() => onOpenDetails(project)}
              className="text-xs font-mono text-slate-400 hover:text-white underline decoration-slate-600 underline-offset-4"
            >
              Case Study &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
