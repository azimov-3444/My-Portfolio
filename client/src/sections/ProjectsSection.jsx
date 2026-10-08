import React, { useState } from 'react';
import { Briefcase, Layers } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { useLanguage } from '../context/LanguageContext';

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('ALL');
  const { t } = useLanguage();

  const categories = [
    { key: 'ALL', label: t('projects.all') },
    { key: 'projects.commercial', label: t('projects.commercial') },
    { key: 'projects.education', label: t('projects.education') },
    { key: 'projects.creative', label: t('projects.creative') },
    { key: 'projects.showcase', label: t('projects.showcase') }
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'ALL') return true;
    return project.categoryKey === filter;
  });

  return (
    <section id="projects" className="py-24 relative">
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
            <p className="text-slate-300 text-sm max-w-2xl mt-2 font-sans leading-relaxed">
              {t('projects.subtitle')}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald ${
                  filter === cat.key
                    ? 'bg-brand-emerald text-dark-bg font-bold shadow-sm'
                    : 'bg-dark-card border border-dark-border text-slate-300 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Projects Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={project.featured}
              onOpenDetails={setSelectedProject}
            />
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
