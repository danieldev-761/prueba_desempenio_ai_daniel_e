import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import VanguardAssistant from './components/VanguardAssistant';
import AdminPortal from './components/AdminPortal';

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    // Check URL hash or default to 'landing'
    const hash = window.location.hash.toLowerCase();
    if (hash === '#chat' || hash === '#assistant') return 'assistant';
    if (hash === '#admin') return 'admin';
    return 'landing';
  });

  // Sync view with hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#chat' || hash === '#assistant') {
        setCurrentView('assistant');
      } else if (hash === '#admin') {
        setCurrentView('admin');
      } else if (hash === '#landing' || hash === '' || hash === '#') {
        setCurrentView('landing');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view) => {
    setCurrentView(view);
    if (view === 'assistant') {
      window.location.hash = 'chat';
    } else if (view === 'admin') {
      window.location.hash = 'admin';
    } else {
      window.location.hash = 'landing';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070515] text-slate-100 font-sans selection:bg-brand-lime selection:text-brand-dark">
      {currentView === 'landing' && (
        <LandingPage
          onNavigateToChat={() => navigateTo('assistant')}
          onNavigateToAdmin={() => navigateTo('admin')}
        />
      )}

      {currentView === 'assistant' && (
        <VanguardAssistant
          onNavigateToLanding={() => navigateTo('landing')}
          onNavigateToAdmin={() => navigateTo('admin')}
        />
      )}

      {currentView === 'admin' && (
        <AdminPortal
          onNavigateToLanding={() => navigateTo('landing')}
          onNavigateToChat={() => navigateTo('assistant')}
        />
      )}
    </div>
  );
}
