import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { JourneySection } from './sections/JourneySection';
import { GitHubSection } from './sections/GitHubSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';
import { Toast } from './components/Toast';
import { useActiveSection } from './hooks/useActiveSection';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

export const AppContent = () => {
  const sectionIds = ['hero', 'about', 'skills', 'projects', 'journey', 'contact'];
  const activeSection = useActiveSection(sectionIds, 150);

  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
  };

  return (
    <div className="min-h-screen bg-dark-bg text-slate-100 font-sans selection:bg-brand-emerald selection:text-dark-bg relative transition-colors duration-300">
      
      {/* Top Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Layout Flow */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <GitHubSection />
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
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
