import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TechBadge = ({ skill }) => {
  const { t } = useLanguage();

  return (
    <div className="p-4 rounded-xl bg-dark-card border border-dark-border workshop-card flex flex-col justify-between space-y-3">
      <div>
        <div className="flex items-center justify-between gap-2 mb-1">
          <h4 className="font-bold text-white text-sm">
            {skill.name}
          </h4>
          {skill.badge && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-surface border border-dark-border text-brand-emerald font-semibold">
              {skill.badge}
            </span>
          )}
        </div>

        <p className="text-xs text-slate-300 leading-relaxed font-sans">
          {skill.description}
        </p>
      </div>

      {/* Connected Project Evidence */}
      {skill.connectedProject && (
        <div className="pt-2 border-t border-dark-border/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5 truncate max-w-[200px]">
            <CheckCircle2 className="w-3 h-3 text-brand-emerald flex-shrink-0" />
            <span className="truncate">{skill.connectedProject}</span>
          </div>

          {skill.liveUrl && (
            <a
              href={skill.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-emerald hover:underline flex items-center gap-1 font-semibold flex-shrink-0"
            >
              <span>Evidence</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      )}
    </div>
  );
};
