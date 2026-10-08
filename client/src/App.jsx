import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { FeaturedCaseStudy } from './components/FeaturedCaseStudy';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';
import { Toast } from './components/Toast';
import { useActiveSection } from './hooks/useActiveSection';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

export const AppContent = () => {
  const sectionIds = ['hero', 'projects', 'case-study', 'about', 'skills', 'inquiry'];
  const activeSection = useActiveSection(sectionIds, 150);

  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
  };

  return (
    <div className="min-h-screen bg-dark-bg text-slate-100 font-sans selection:bg-brand-emerald selection:text-dark-bg relative transition-colors duration-300">
      
      {/* 1. Compact Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Digital Workshop Section Flow */}
      <main>
        {/* 2. Hero with real project preview */}
        <HeroSection />

        {/* 3. Selected projects */}
        <ProjectsSection />

        {/* 4. Detailed featured case study with "How I built it" mode */}
        <FeaturedCaseStudy />

        {/* 5. Concise personal introduction & working process */}
        <AboutSection />

        {/* 6. Skills connected to actual project evidence */}
        <SkillsSection />

        {/* 7. Project inquiry builder & direct contact options */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* 8. Minimal Footer */}
      <Footer />

      {/* Toast Notification Container */}
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
