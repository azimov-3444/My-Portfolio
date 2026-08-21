import React from 'react';
import { Code2, Server, Globe, Cpu, CheckCircle2 } from 'lucide-react';

export const TechBadge = ({ skill, highlight = false }) => {
  return (
    <div
      className={`group relative p-4 rounded-xl border transition-all duration-300 ${
        highlight
          ? 'bg-dark-card/90 border-dark-border hover:border-brand-emerald/40 hover:shadow-glow-emerald'
          : 'bg-dark-card/50 border-dark-border/60 hover:border-slate-600'
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center text-brand-emerald group-hover:bg-brand-emerald/10 transition-colors">
            <Code2 className="w-4 h-4" />
          </div>
          <h4 className="font-semibold text-white group-hover:text-brand-emerald transition-colors">
            {skill.name}
          </h4>
        </div>
        {skill.badge && (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-dark-surface border border-dark-border text-slate-400">
            {skill.badge}
          </span>
        )}
      </div>

      <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-2">
        {skill.description}
      </p>
    </div>
  );
};
