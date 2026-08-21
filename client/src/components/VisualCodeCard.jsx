import React, { useState } from 'react';
import { Terminal, Copy, Check, Play } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const VisualCodeCard = () => {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();

  const codeSnippet = `const developer = {
  name: "Senior Full-Stack Dev",
  coreSkills: ["React", "JavaScript", "Node.js", "Express"],
  focus: "Clean UI/UX & High-Performance Architecture",
  status: "Available for Hire & Projects",
  build: () => {
    return "Fast, responsive & scalable web solutions";
  }
};

console.log(developer.build());`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full rounded-2xl bg-dark-card border border-dark-border shadow-2xl overflow-hidden glass-card transition-all">
      
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-dark-surface border-b border-dark-border">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-brand-emerald" />
            developerProfile.js
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-brand-emerald transition-colors"
          title="Copy Code"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-brand-emerald" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      {/* Code Editor Body */}
      <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto bg-dark-surface/30">
        <pre className="text-slate-300">
          <code>
            <span className="text-purple-600 dark:text-purple-400 font-bold">const</span>{' '}
            <span className="text-amber-600 dark:text-amber-300 font-semibold">developer</span> = {'{\n'}
            {'  '}<span className="text-slate-500 dark:text-slate-400">name:</span> <span className="text-emerald-600 dark:text-emerald-400">"Frontend / Full-Stack Engineer"</span>,\n
            {'  '}<span className="text-slate-500 dark:text-slate-400">coreStack:</span> [<span className="text-emerald-600 dark:text-emerald-400">"React"</span>, <span className="text-emerald-600 dark:text-emerald-400">"JSX"</span>, <span className="text-emerald-600 dark:text-emerald-400">"Node.js"</span>, <span className="text-emerald-600 dark:text-emerald-400">"Express"</span>],\n
            {'  '}<span className="text-slate-500 dark:text-slate-400">architecture:</span> <span className="text-emerald-600 dark:text-emerald-400">"Modular & Scalable"</span>,\n
            {'  '}<span className="text-slate-500 dark:text-slate-400">status:</span> <span className="text-emerald-600 dark:text-emerald-400">"Open for Hire"</span>,\n
            {'  '}<span className="text-sky-600 dark:text-cyan-400">deliverResults</span>: () =&gt; {'{\n'}
            {'    '}<span className="text-purple-600 dark:text-purple-400 font-bold">return</span> <span className="text-emerald-600 dark:text-emerald-400">"Fast, intuitive & recruiter-grade applications"</span>;\n
            {'  '}\n
            {'}'};\n\n
            <span className="text-sky-600 dark:text-cyan-400">console</span>.<span className="text-blue-600 dark:text-blue-400">log</span>(developer.<span className="text-sky-600 dark:text-cyan-400">deliverResults</span>());
          </code>
        </pre>
      </div>

      {/* Terminal Output Footer */}
      <div className="px-5 py-3 bg-dark-surface/80 border-t border-dark-border flex items-center justify-between font-mono text-[11px]">
        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold">
          <Play className="w-3 h-3 fill-emerald-600 dark:fill-emerald-400" />
          <span>Output: "Fast, intuitive & recruiter-grade applications"</span>
        </div>
        <span className="text-slate-400 font-sans text-[10px]">Node v22.x</span>
      </div>
    </div>
  );
};
