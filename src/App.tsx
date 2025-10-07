import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import References from './components/References';
import ROICalculator from './components/ROICalculator';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import Hero from './components/Hero';
import AITypes from './components/AITypes';
import Features from './components/Features';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showReferences, setShowReferences] = useState(false);
  const [showROICalculator, setShowROICalculator] = useState(false);
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);

  if (showAbout) {
    return (
      <About
        onBack={() => setShowAbout(false)}
        onShowReferences={() => {
          setShowAbout(false);
          setShowReferences(true);
        }}
      />
    );
  }

  if (showReferences) {
    return (
      <References
        onBack={() => setShowReferences(false)}
        onShowAbout={() => {
          setShowReferences(false);
          setShowAbout(true);
        }}
      />
    );
  }

  if (showROICalculator) {
    return (
      <ROICalculator
        onBack={() => setShowROICalculator(false)}
        onShowAbout={() => {
          setShowROICalculator(false);
          setShowAbout(true);
        }}
        onShowReferences={() => {
          setShowROICalculator(false);
          setShowReferences(true);
        }}
      />
    );
  }

  if (showImpressum) {
    return <Impressum onBack={() => setShowImpressum(false)} />;
  }

  if (showDatenschutz) {
    return <Datenschutz onBack={() => setShowDatenschutz(false)} />;
  }

  return (
    <div className="min-h-screen">
      <Header
        onShowAbout={() => setShowAbout(true)}
        onShowReferences={() => setShowReferences(true)}
        onShowROICalculator={() => setShowROICalculator(true)}
      />
      <Hero />
      <AITypes />
      <Features />
      <CaseStudies />
      <Testimonials />
      <Services />
      <FAQ />
      <Footer
        onShowImpressum={() => setShowImpressum(true)}
        onShowDatenschutz={() => setShowDatenschutz(true)}
      />
    </div>
  );
}

export default App;