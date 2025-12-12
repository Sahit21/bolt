import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import References from './components/References';
import ROICalculator from './components/ROICalculator';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import AGB from './components/AGB';
import CalendarPage from './components/CalendarPage';
import Hero from './components/Hero';
import AITypes from './components/AITypes';
import Features from './components/Features';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header
        onShowAbout={() => navigate('/uber-uns')}
        onShowReferences={() => navigate('/referenzen')}
        onShowROICalculator={() => navigate('/roi-rechner')}
      />
      <Hero />
      <AITypes />
      <Features />
      <CaseStudies />
      <Testimonials />
      <Services />
      <FAQ />
      <Footer
        onShowImpressum={() => navigate('/impressum')}
        onShowDatenschutz={() => navigate('/datenschutz')}
        onShowAGB={() => navigate('/agb')}
      />
    </div>
  );
}

function AboutPage() {
  const navigate = useNavigate();

  return (
    <About
      onBack={() => navigate('/')}
      onShowReferences={() => navigate('/referenzen')}
      onShowROICalculator={() => navigate('/roi-rechner')}
      onShowImpressum={() => navigate('/impressum')}
      onShowDatenschutz={() => navigate('/datenschutz')}
      onShowAGB={() => navigate('/agb')}
    />
  );
}

function ReferencesPage() {
  const navigate = useNavigate();

  return (
    <References
      onBack={() => navigate('/')}
      onShowAbout={() => navigate('/uber-uns')}
      onShowROICalculator={() => navigate('/roi-rechner')}
      onShowImpressum={() => navigate('/impressum')}
      onShowDatenschutz={() => navigate('/datenschutz')}
      onShowAGB={() => navigate('/agb')}
    />
  );
}

function ROICalculatorPage() {
  const navigate = useNavigate();

  return (
    <ROICalculator
      onBack={() => navigate('/')}
      onShowAbout={() => navigate('/uber-uns')}
      onShowReferences={() => navigate('/referenzen')}
      onShowImpressum={() => navigate('/impressum')}
      onShowDatenschutz={() => navigate('/datenschutz')}
      onShowAGB={() => navigate('/agb')}
    />
  );
}

function ImpressumPage() {
  const navigate = useNavigate();

  return (
    <Impressum
      onBack={() => navigate('/')}
      onShowDatenschutz={() => navigate('/datenschutz')}
      onShowAGB={() => navigate('/agb')}
    />
  );
}

function DatenschutzPage() {
  const navigate = useNavigate();

  return (
    <Datenschutz
      onBack={() => navigate('/')}
      onShowImpressum={() => navigate('/impressum')}
      onShowAGB={() => navigate('/agb')}
    />
  );
}

function CalendarPageRoute() {
  const navigate = useNavigate();

  return (
    <CalendarPage
      onBack={() => navigate('/')}
      onShowImpressum={() => navigate('/impressum')}
      onShowDatenschutz={() => navigate('/datenschutz')}
      onShowAGB={() => navigate('/agb')}
    />
  );
}

function AGBPage() {
  const navigate = useNavigate();

  return (
    <AGB
      onBack={() => navigate('/')}
      onShowImpressum={() => navigate('/impressum')}
      onShowDatenschutz={() => navigate('/datenschutz')}
    />
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/uber-uns" element={<AboutPage />} />
      <Route path="/referenzen" element={<ReferencesPage />} />
      <Route path="/roi-rechner" element={<ROICalculatorPage />} />
      <Route path="/impressum" element={<ImpressumPage />} />
      <Route path="/datenschutz" element={<DatenschutzPage />} />
      <Route path="/agb" element={<AGBPage />} />
      <Route path="/kalender" element={<CalendarPageRoute />} />
    </Routes>
  );
}

export default App;
