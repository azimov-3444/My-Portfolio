import React, { useState } from 'react';
import { ExternalLink, Smartphone, Monitor, ShoppingBag, Search, Filter, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const HeroProjectPreview = () => {
  const [activeTab, setActiveTab] = useState('catalog'); // 'catalog' | 'product' | 'mobile'
  const { t } = useLanguage();

  return (
    <div className="relative w-full rounded-2xl bg-dark-card border border-dark-border shadow-2xl overflow-hidden workshop-card">
      
      {/* Window Controls & View Tabs Header */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-dark-surface border-b border-dark-border gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="ml-2 font-mono text-[11px] text-slate-400 font-medium hidden sm:inline-block">
            999premiumtools.com
          </span>
        </div>

        {/* View Switcher Controls */}
        <div className="flex items-center gap-1 bg-dark-bg/60 p-1 rounded-lg border border-dark-border/80">
          <button
            onClick={() => setActiveTab('catalog')}
            className={`px-2.5 py-1 text-[11px] font-mono rounded-md flex items-center gap-1.5 transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-emerald ${
              activeTab === 'catalog'
                ? 'bg-brand-emerald text-dark-bg font-semibold shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3 h-3" />
            <span>{t('hero.catalogView')}</span>
          </button>

          <button
            onClick={() => setActiveTab('product')}
            className={`px-2.5 py-1 text-[11px] font-mono rounded-md flex items-center gap-1.5 transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-emerald ${
              activeTab === 'product'
                ? 'bg-brand-emerald text-dark-bg font-semibold shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShoppingBag className="w-3 h-3" />
            <span>{t('hero.productView')}</span>
          </button>

          <button
            onClick={() => setActiveTab('mobile')}
            className={`px-2.5 py-1 text-[11px] font-mono rounded-md flex items-center gap-1.5 transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-emerald ${
              activeTab === 'mobile'
                ? 'bg-brand-emerald text-dark-bg font-semibold shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3 h-3" />
            <span>{t('hero.mobileView')}</span>
          </button>
        </div>
      </div>

      {/* Interactive Interface Preview Viewport */}
      <div className="p-4 sm:p-5 bg-dark-surface/50 min-h-[310px] flex flex-col justify-between font-sans">
        
        {/* Tab 1: Catalog View */}
        {activeTab === 'catalog' && (
          <div className="space-y-3 animate-fadeIn">
            {/* Fake Search & Filter Bar */}
            <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-dark-card border border-dark-border text-xs text-slate-300">
              <div className="flex items-center gap-2 text-slate-400">
                <Search className="w-4 h-4 text-brand-emerald" />
                <span>{t('hero.searchPlaceholder')}</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-dark-surface border border-dark-border text-slate-400">
                <Filter className="w-3 h-3" />
                <span>{t('hero.filterAll')}</span>
              </div>
            </div>

            {/* Catalog Grid Sample */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-dark-card border border-dark-border space-y-2">
                <div className="h-20 rounded-lg bg-slate-800/60 flex items-center justify-center border border-dark-border text-slate-400 text-[10px] font-mono">
                  [999 Micro-Polisher Engine]
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white truncate">{t('hero.equipmentTitle1')}</div>
                  <div className="text-[10px] font-mono text-brand-emerald font-semibold">{t('hero.equipmentType1')}</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-dark-card border border-dark-border space-y-2">
                <div className="h-20 rounded-lg bg-slate-800/60 flex items-center justify-center border border-dark-border text-slate-400 text-[10px] font-mono">
                  [999 Precision Scale]
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white truncate">{t('hero.equipmentTitle2')}</div>
                  <div className="text-[10px] font-mono text-brand-emerald font-semibold">{t('hero.equipmentType2')}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Product Page View */}
        {activeTab === 'product' && (
          <div className="space-y-3 animate-fadeIn">
            <div className="p-4 rounded-xl bg-dark-card border border-dark-border space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/30">
                    {t('hero.specPageTag')}
                  </span>
                  <h4 className="text-sm font-bold text-white">{t('hero.specPageTitle')}</h4>
                </div>
                <span className="text-xs font-mono font-bold text-brand-emerald bg-dark-surface px-2.5 py-1 rounded border border-dark-border">
                  Commercial
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {t('hero.description')}
              </p>

              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1 text-slate-400 border-t border-dark-border/60">
                <div>• Speed: 35,000 RPM</div>
                <div>• Torque: Heavy-Duty</div>
                <div>• Voltage: 220V Dual</div>
                <div>• Status: Ready</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Mobile View */}
        {activeTab === 'mobile' && (
          <div className="space-y-3 animate-fadeIn flex justify-center">
            <div className="w-full max-w-[260px] p-3 rounded-2xl bg-dark-card border border-dark-border space-y-2.5 shadow-lg">
              <div className="flex items-center justify-between pb-2 border-b border-dark-border text-[10px] font-mono text-slate-400">
                <span>{t('hero.touchTitle')}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <div className="p-2 rounded-lg bg-dark-surface border border-dark-border text-[11px] font-semibold text-white">
                🔍 {t('hero.searchPlaceholder')}
              </div>
              <div className="p-2 rounded-lg bg-dark-surface/60 border border-dark-border/60 text-[10px] text-slate-300 space-y-1">
                <div className="font-bold text-brand-emerald">999 Precision Equipment</div>
                <div>{t('hero.touchSub')}</div>
              </div>
            </div>
          </div>
        )}

        {/* Viewport Footer Bar */}
        <div className="pt-3 border-t border-dark-border flex items-center justify-between font-mono text-[11px]">
          <div className="flex items-center gap-1.5 text-slate-400">
            <CheckCircle className="w-3.5 h-3.5 text-brand-emerald" />
            <span className="text-[10px]">{t('hero.realPreview')}</span>
          </div>

          <a
            href="https://999premiumtools.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-emerald hover:underline flex items-center gap-1 text-[11px] font-semibold"
          >
            <span>{t('hero.liveSite')}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
};
