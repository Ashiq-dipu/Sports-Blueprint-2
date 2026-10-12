import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AssessmentModal } from './components/AssessmentModal';
import { VideoModal } from './components/VideoModal';
import { LightboxModal } from './components/LightboxModal';
import { ConsultationModal } from './components/ConsultationModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ServicesPage } from './pages/ServicesPage';
import { AthletesPage } from './pages/AthletesPage';
import { CoachesPage } from './pages/CoachesPage';
import { TrainingPage } from './pages/TrainingPage';
import { ResultsPage } from './pages/ResultsPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { VideosPage } from './pages/VideosPage';
import { PhotosPage } from './pages/PhotosPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [activePage, setActivePage] = useState('home');
  const [preselectedProgram, setPreselectedProgram] = useState('');
  
  // Modals
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [lightboxPhoto, setLightboxPhoto] = useState(null);
  const [lightboxList, setLightboxList] = useState([]);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  
  // Toast notifications
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4000);
  };

  const handleProgramEnrollment = (programName) => {
    setPreselectedProgram(programName);
    setActivePage('registration');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLightbox = (photo, list) => {
    setLightboxPhoto(photo);
    setLightboxList(list);
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Toast Notice */}
      {toastMessage && (
        <div className="toast-notice">
          <span style={{ color: 'var(--accent-volt)', fontWeight: 800 }}>⚡</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Global Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        openAssessment={() => setIsAssessmentOpen(true)}
        openConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Dynamic Page Views (All 14 Modules Fully Built with Swift Transitions) */}
      <main key={activePage} className="page-transition-swift" style={{ flex: 1 }}>
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            onOpenVideo={(v) => setActiveVideo(v)}
            openAssessment={() => setIsAssessmentOpen(true)}
          />
        )}
        {activePage === 'about' && <AboutPage setActivePage={setActivePage} />}
        {activePage === 'programs' && (
          <ProgramsPage
            setActivePage={setActivePage}
            openAssessment={() => setIsAssessmentOpen(true)}
            onSelectProgramToRegister={handleProgramEnrollment}
          />
        )}
        {activePage === 'services' && (
          <ServicesPage
            setActivePage={setActivePage}
            openConsultation={() => setIsConsultationOpen(true)}
          />
        )}
        {activePage === 'athletes' && <AthletesPage setActivePage={setActivePage} />}
        {activePage === 'coaches' && (
          <CoachesPage
            setActivePage={setActivePage}
            openConsultation={() => setIsConsultationOpen(true)}
          />
        )}
        {activePage === 'training' && (
          <TrainingPage
            setActivePage={setActivePage}
            openConsultation={() => setIsConsultationOpen(true)}
          />
        )}
        {activePage === 'results' && <ResultsPage setActivePage={setActivePage} />}
        {activePage === 'testimonials' && (
          <TestimonialsPage
            setActivePage={setActivePage}
            onOpenVideo={(v) => setActiveVideo(v)}
          />
        )}
        {activePage === 'videos' && (
          <VideosPage
            onOpenVideo={(v) => setActiveVideo(v)}
            showToast={showToast}
          />
        )}
        {activePage === 'photos' && (
          <PhotosPage
            onOpenLightbox={handleOpenLightbox}
            showToast={showToast}
          />
        )}
        {activePage === 'resources' && (
          <ResourcesPage
            showToast={showToast}
            openAssessment={() => setIsAssessmentOpen(true)}
          />
        )}
        {activePage === 'registration' && (
          <RegistrationPage
            preselectedProgram={preselectedProgram}
            showToast={showToast}
          />
        )}
        {activePage === 'contact' && (
          <ContactPage
            openConsultation={() => setIsConsultationOpen(true)}
            showToast={showToast}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer setActivePage={setActivePage} showToast={showToast} />

      {/* Assessment Quiz Modal */}
      <AssessmentModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
        onSelectProgram={handleProgramEnrollment}
      />

      {/* Video Modal */}
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
        onEnroll={() => {
          setActiveVideo(null);
          setActivePage('registration');
        }}
      />

      {/* Lightbox Modal */}
      <LightboxModal
        photo={lightboxPhoto}
        photos={lightboxList}
        onClose={() => setLightboxPhoto(null)}
        onNavigate={(p) => setLightboxPhoto(p)}
      />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        showToast={showToast}
      />
    </div>
  );
}

export default App;
