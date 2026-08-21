import React, { useState } from 'react';
import { Send, Loader2, AlertCircle } from 'lucide-react';
import { submitContactForm } from '../services/api';
import { useLanguage } from '../context/LanguageContext';

export const ContactForm = ({ onShowToast }) => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    try {
      const res = await submitContactForm(formData);
      if (res.success) {
        if (onShowToast) {
          onShowToast('success', res.message || 'Message sent successfully!');
        }
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setErrorMsg(res.message || 'Failed to submit.');
        if (onShowToast) onShowToast('error', res.message);
      }
    } catch (err) {
      setErrorMsg('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errorMsg && (
        <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono text-slate-400 mb-1.5">
            {t('contact.nameReq')} <span className="text-brand-emerald">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-white text-sm focus:outline-none focus:border-brand-emerald transition-colors"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-400 mb-1.5">
            {t('contact.emailReq')} <span className="text-brand-emerald">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-white text-sm focus:outline-none focus:border-brand-emerald transition-colors"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono text-slate-400 mb-1.5">
          {t('contact.subject')}
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Project Inquiry / Job Opportunity"
          className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-white text-sm focus:outline-none focus:border-brand-emerald transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-slate-400 mb-1.5">
          {t('contact.messageReq')} <span className="text-brand-emerald">*</span>
        </label>
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          placeholder="Hello..."
          className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-white text-sm focus:outline-none focus:border-brand-emerald transition-colors resize-none"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 rounded-xl bg-brand-emerald text-dark-bg font-bold text-sm flex items-center justify-center gap-2 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-brand-emerald/20"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>{t('contact.sendingBtn')}</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>{t('contact.sendBtn')}</span>
          </>
        )}
      </button>
    </form>
  );
};
