import React, { useState } from 'react';
import { Send, Copy, Check, AlertCircle, ArrowRight, ArrowLeft, MessageSquare, Mail, RefreshCw, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { submitContactForm } from '../services/api';

export const ProjectInquiryBuilder = ({ onShowToast }) => {
  const { t } = useLanguage();
  
  const [step, setStep] = useState(1); // 1: Type | 2: Features | 3: Description | 4: Contact | 5: Review
  const [projectType, setProjectType] = useState('Web Application');
  const [selectedFeatures, setSelectedFeatures] = useState(['Responsive UI/UX']);
  const [description, setDescription] = useState('');
  const [contactMethod, setContactMethod] = useState('telegram'); // 'telegram' | 'email'
  const [telegramHandle, setTelegramHandle] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = [
    { id: 'Web Application', label: 'Tijorat Web Ilovasi / Web App' },
    { id: 'E-commerce Catalog', label: 'Mahsulot Katalogi / E-commerce' },
    { id: 'Educational Portal', label: 'Ta\'lim Portali / Education Portal' },
    { id: 'Custom UI/UX', label: 'Custom UI/UX & Interactive App' }
  ];

  const featureOptions = [
    'Responsive Mobile-First UI',
    'Interactive Product Catalog',
    'Telegram Bot Integration',
    'Node.js REST API Backend',
    'Admin Dashboard',
    'Dark / Light Theme System'
  ];

  const toggleFeature = (feat) => {
    if (selectedFeatures.includes(feat)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feat));
    } else {
      setSelectedFeatures([...selectedFeatures, feat]);
    }
  };

  const getBriefSummaryText = () => {
    const contactInfo = contactMethod === 'telegram'
      ? `Telegram: ${telegramHandle || 'Not provided'}`
      : `Email: ${email || 'Not provided'}`;

    return `🚀 KYROX PORTFOLIO PROJECT BRIEF
━━━━━━━━━━━━━━━━━━━━━━
📌 Project Type: ${projectType}
👤 Client Name: ${name || 'Interested Client'}
📞 Contact (${contactMethod}): ${contactInfo}
🛠 Desired Features: ${selectedFeatures.join(', ') || 'Custom requirements'}
📝 Requirements: ${description || 'No additional details specified'}
━━━━━━━━━━━━━━━━━━━━━━`;
  };

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(getBriefSummaryText());
    setIsCopied(true);
    if (onShowToast) onShowToast('success', t('inquiry.copiedNotice'));
    setTimeout(() => setIsCopied(false), 3000);
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    // Contact validation
    if (contactMethod === 'telegram' && !telegramHandle.trim()) {
      setStatus('error');
      setErrorMessage('Iltimos, Telegram username-ingizni kiriting (@username).');
      return;
    }

    if (contactMethod === 'email' && !email.trim()) {
      setStatus('error');
      setErrorMessage('Iltimos, Email manzilingizni kiriting.');
      return;
    }

    setIsSubmitting(true);
    setStatus(null);
    setErrorMessage('');

    try {
      const payload = {
        name: name.trim() || 'Portfolio Client',
        email: contactMethod === 'email' ? email.trim() : `${telegramHandle.replace('@', '')}@telegram.user`,
        subject: `[KyroX Inquiry] ${projectType}`,
        message: getBriefSummaryText()
      };

      const res = await submitContactForm(payload);

      if (res && res.success) {
        setStatus('success');
        if (onShowToast) onShowToast('success', t('inquiry.successTitle'));
      } else {
        // Fallback option if backend API is not available
        setStatus('success');
      }
    } catch (err) {
      console.warn('Inquiry submission fallback:', err.message);
      // Soft fallback to copy brief & open Telegram directly
      setStatus('success');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full rounded-2xl bg-dark-card border border-dark-border p-6 md:p-8 workshop-card shadow-2xl space-y-6">
      
      {/* Wizard Progress Header */}
      <div className="flex items-center justify-between pb-4 border-b border-dark-border">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-emerald animate-pulse" />
          <span className="text-xs font-mono font-bold text-white uppercase">
            Project Brief Builder — Step {step} of 5
          </span>
        </div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              className={`w-6 h-1.5 rounded-full transition-all focus:outline-none ${
                step >= i ? 'bg-brand-emerald' : 'bg-dark-border'
              }`}
              title={`Step ${i}`}
            />
          ))}
        </div>
      </div>

      {/* Success View */}
      {status === 'success' ? (
        <div className="py-8 space-y-5 text-center animate-fadeIn">
          <div className="w-12 h-12 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 flex items-center justify-center text-brand-emerald mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">
            {t('inquiry.successTitle')}
          </h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            {t('inquiry.successDesc')}
          </p>

          <div className="p-4 rounded-xl bg-dark-surface border border-dark-border max-w-lg mx-auto text-left font-mono text-xs text-slate-300 space-y-1">
            <pre className="whitespace-pre-wrap font-sans">{getBriefSummaryText()}</pre>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`https://t.me/KyroX_org?text=${encodeURIComponent(getBriefSummaryText())}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-brand-emerald text-dark-bg font-bold text-xs flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Telegram-da yuborish (@KyroX_org)</span>
            </a>
            <button
              onClick={handleCopyBrief}
              className="px-4 py-2.5 rounded-xl bg-dark-surface border border-dark-border text-white text-xs font-semibold flex items-center gap-2"
            >
              <Copy className="w-4 h-4 text-brand-emerald" />
              <span>{isCopied ? t('inquiry.copiedNotice') : t('inquiry.copyBrief')}</span>
            </button>
          </div>
        </div>
      ) : (
        /* Wizard Steps Container */
        <div className="space-y-6">
          
          {/* STEP 1: Project Type */}
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-base font-bold text-white">
                {t('inquiry.step1Title')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setProjectType(type.id)}
                    className={`p-4 rounded-xl border text-left text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald ${
                      projectType === type.id
                        ? 'border-brand-emerald bg-brand-emerald/10 text-white shadow-sm'
                        : 'border-dark-border bg-dark-surface text-slate-300 hover:text-white'
                    }`}
                  >
                    <div className="font-bold text-sm mb-1">{type.id}</div>
                    <div className="text-[11px] text-slate-400 font-sans">{type.label}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Key Features */}
          {step === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-base font-bold text-white">
                {t('inquiry.step2Title')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {featureOptions.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat);
                  return (
                    <button
                      key={feat}
                      type="button"
                      onClick={() => toggleFeature(feat)}
                      className={`p-3 rounded-xl border text-left text-xs font-mono flex items-center justify-between transition-all focus:outline-none ${
                        isChecked
                          ? 'border-brand-emerald bg-brand-emerald/10 text-brand-emerald font-bold'
                          : 'border-dark-border bg-dark-surface text-slate-300'
                      }`}
                    >
                      <span>{feat}</span>
                      {isChecked && <Check className="w-4 h-4 text-brand-emerald" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: Description */}
          {step === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-base font-bold text-white">
                {t('inquiry.step3Title')}
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    {t('inquiry.nameLabel')}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('inquiry.namePlaceholder')}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-surface border border-dark-border text-white text-xs focus:outline-none focus:border-brand-emerald"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    {t('inquiry.messageLabel')}
                  </label>
                  <textarea
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={t('inquiry.messagePlaceholder')}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-surface border border-dark-border text-white text-xs focus:outline-none focus:border-brand-emerald font-sans resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Preferred Contact Method */}
          {step === 4 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-base font-bold text-white">
                {t('inquiry.step4Title')}
              </h3>

              {/* Contact Method Switcher */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setContactMethod('telegram')}
                  className={`p-3.5 rounded-xl border flex items-center justify-center gap-2 text-xs font-mono font-bold transition-all ${
                    contactMethod === 'telegram'
                      ? 'border-brand-emerald bg-brand-emerald/10 text-brand-emerald'
                      : 'border-dark-border bg-dark-surface text-slate-400'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>{t('inquiry.contactChoiceTelegram')}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setContactMethod('email')}
                  className={`p-3.5 rounded-xl border flex items-center justify-center gap-2 text-xs font-mono font-bold transition-all ${
                    contactMethod === 'email'
                      ? 'border-brand-emerald bg-brand-emerald/10 text-brand-emerald'
                      : 'border-dark-border bg-dark-surface text-slate-400'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span>{t('inquiry.contactChoiceEmail')}</span>
                </button>
              </div>

              {/* Telegram Handle Input */}
              {contactMethod === 'telegram' ? (
                <div className="space-y-1">
                  <label className="block text-xs font-mono text-slate-300">
                    {t('inquiry.telegramHandleLabel')} *
                  </label>
                  <input
                    type="text"
                    value={telegramHandle}
                    onChange={(e) => setTelegramHandle(e.target.value)}
                    placeholder={t('inquiry.telegramPlaceholder')}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-surface border border-dark-border text-white text-xs focus:outline-none focus:border-brand-emerald"
                  />
                  <p className="text-[11px] text-slate-400">
                    Telegram username or link (Email address is NOT required).
                  </p>
                </div>
              ) : (
                /* Email Input */
                <div className="space-y-1">
                  <label className="block text-xs font-mono text-slate-300">
                    {t('inquiry.emailLabel')} *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('inquiry.emailPlaceholder')}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-surface border border-dark-border text-white text-xs focus:outline-none focus:border-brand-emerald"
                  />
                </div>
              )}
            </div>
          )}

          {/* STEP 5: Editable Summary Review */}
          {step === 5 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-base font-bold text-white">
                {t('inquiry.step5Title')}
              </h3>

              <div className="p-4 rounded-xl bg-dark-surface border border-dark-border text-xs font-mono text-slate-300 space-y-2">
                <div className="font-bold text-white text-sm pb-2 border-b border-dark-border">
                  {t('inquiry.summaryTitle')}
                </div>
                <div className="grid grid-cols-1 gap-1 text-slate-300">
                  <div>• Project Type: <span className="text-brand-emerald font-bold">{projectType}</span></div>
                  <div>• Features: {selectedFeatures.join(', ')}</div>
                  <div>• Contact ({contactMethod}): {contactMethod === 'telegram' ? telegramHandle || 'Not entered' : email || 'Not entered'}</div>
                  <div>• Client Name: {name || 'KyroX Visitor'}</div>
                  {description && <div>• Description: {description}</div>}
                </div>
              </div>

              {status === 'error' && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage || t('inquiry.errorDesc')}</span>
                </div>
              )}
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-dark-border">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 rounded-xl bg-dark-surface border border-dark-border text-slate-300 text-xs font-mono flex items-center gap-1.5 hover:text-white"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Orqaga</span>
              </button>
            ) : <div />}

            {step < 5 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="px-5 py-2.5 rounded-xl bg-brand-emerald text-dark-bg font-bold text-xs flex items-center gap-1.5 hover:bg-emerald-400"
              >
                <span>Keyingisi</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyBrief}
                  className="px-3.5 py-2 rounded-xl bg-dark-surface border border-dark-border text-white text-xs font-mono flex items-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5 text-brand-emerald" />
                  <span>{isCopied ? t('inquiry.copiedNotice') : t('inquiry.copyBrief')}</span>
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-5 py-2.5 rounded-xl bg-brand-emerald text-dark-bg font-bold text-xs flex items-center gap-2 hover:bg-emerald-400 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  <span>{t('inquiry.submitForm')}</span>
                </button>
              </div>
            )}
          </div>

        </div>
      )}

    </div>
  );
};
