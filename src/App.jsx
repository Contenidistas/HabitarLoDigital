import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BottomNavMobile from './components/BottomNavMobile';
import InicioView from './components/InicioView';
import EstudiantesSection from './components/EstudiantesSection';
import FamiliasSection from './components/FamiliasSection';
import TeachersSection from './components/TeachersSection';
import PoiteKitSection from './components/PoiteKitSection';
import DgeipKitSection from './components/DgeipKitSection';
import UruguayNormativeSection from './components/UruguayNormativeSection';
import AcercaDeSection from './components/AcercaDeSection';
import VideoLibrarySection from './components/VideoLibrarySection';
import DocumentsLibrarySection from './components/DocumentsLibrarySection';
import WorkshopMode from './components/WorkshopMode';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [familiasInitialSub, setFamiliasInitialSub] = useState('bienestar');
  const [isWorkshopModeActive, setIsWorkshopModeActive] = useState(false);

  // Support #taller URL hash without any research routes or credentials
  useEffect(() => {
    const hash = window.location.hash || '';
    if (hash === '#taller') {
      setIsWorkshopModeActive(true);
    }
  }, []);

  // Keyboard shortcut for Workshop Presenter Mode: Ctrl + Shift + P or Alt + T
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && e.shiftKey && (e.key === 'P' || e.key === 'p')) ||
        (e.altKey && (e.key === 'T' || e.key === 't'))
      ) {
        e.preventDefault();
        setIsWorkshopModeActive((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Smooth scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  if (isWorkshopModeActive) {
    return (
      <WorkshopMode
        onExit={() => {
          setIsWorkshopModeActive(false);
          if (window.location.hash === '#taller') {
            window.history.pushState(null, '', window.location.pathname);
          }
        }}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Skip link for keyboard users (WCAG 2.2 AA) */}
      <a href="#contenido-principal" className="skip-link">
        Saltar al contenido principal
      </a>

      {/* Top sticky navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <main id="contenido-principal" className="flex-1 pb-20 xl:pb-0">
        <div key={activeTab} className="page-transition-enter">
          {activeTab === 'inicio' && (
            <InicioView
              onNavigateTab={(tab) => {
                setFamiliasInitialSub('bienestar');
                setActiveTab(tab);
              }}
              onOpenWorkshopMode={() => setIsWorkshopModeActive(true)}
              onOpenPrintableMaterials={() => {
                setFamiliasInitialSub('acuerdos');
                setActiveTab('familias');
              }}
            />
          )}

          {activeTab === 'estudiantes' && (
            <EstudiantesSection onNavigateTab={setActiveTab} />
          )}

          {activeTab === 'familias' && (
            <FamiliasSection
              initialSubmodule={familiasInitialSub}
              onNavigateTab={setActiveTab}
            />
          )}

          {activeTab === 'docentes' && (
            <TeachersSection
              onOpenWorkshopMode={() => setIsWorkshopModeActive(true)}
              onNavigateTab={setActiveTab}
            />
          )}

          {activeTab === 'poite' && (
            <PoiteKitSection
              onOpenWorkshopMode={() => setIsWorkshopModeActive(true)}
              onNavigateTab={setActiveTab}
            />
          )}

          {activeTab === 'dgeip' && (
            <DgeipKitSection onNavigateTab={setActiveTab} />
          )}

          {activeTab === 'fuentes' && (
            <UruguayNormativeSection onNavigateTab={setActiveTab} />
          )}

          {activeTab === 'acerca' && <AcercaDeSection />}

          {activeTab === 'videos' && <VideoLibrarySection />}

          {activeTab === 'documentos' && <DocumentsLibrarySection />}
        </div>
      </main>

      {/* Bottom Nav Bar on Mobile / Tablet Screens */}
      <BottomNavMobile activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Global Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenWorkshopMode={() => setIsWorkshopModeActive(true)}
      />
    </div>
  );
}
