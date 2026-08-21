import React, { useState } from 'react';
import { Briefcase, Sparkles } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { useLanguage } from '../context/LanguageContext';

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('ALL');
  const { t } = useLanguage();

  const categories = ['ALL', 'Commercial Project', 'Education Platform', 'Creative Web App', 'Frontend Showcase'];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'ALL') return true;
    return project.category === filter;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-dark-surface/30 border-y border-dark-border/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-card border border-dark-border text-xs font-mono text-brand-emerald mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{t('projects.badge')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t('projects.title')}
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mt-2 font-sans">
              {t('projects.subtitle')}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  filter === cat
                    ? 'bg-brand-emerald text-dark-bg font-semibold shadow-md shadow-brand-emerald/20'
                    : 'bg-dark-card border border-dark-border text-slate-400 hover:text-white'
                }`}
              >
                {cat === 'ALL' ? t('projects.all') : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Showcase Section */}
        {featuredProjects.length > 0 && (
          <div className="mb-12 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-brand-emerald uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>{t('projects.featuredBadge')}</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  featured={true}
                  onOpenDetails={setSelectedProject}
                />
              ))}
            </div>
          </div>
        )}

        {/* Standard Grid Section */}
        {otherProjects.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-slate-400 uppercase tracking-wider">
              <span>{t('projects.allProjectsBadge')}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenDetails={setSelectedProject}
                />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Project Detail Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
