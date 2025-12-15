import React from 'react';
import { useEffect } from 'react';
import { Menu, X, Calendar, ArrowRight } from 'lucide-react';
import CalendarPopup from './CalendarPopup';
import Footer from './Footer';

interface ImpressumProps {
  onBack: () => void;
  onShowDatenschutz?: () => void;
  onShowAGB?: () => void;
}

const Impressum: React.FC<ImpressumProps> = ({ onBack, onShowDatenschutz, onShowAGB }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className="min-h-screen bg-slate-900">
      {/* Header with navigation */}
      <header className="bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - clickable to go back */}
            <button onClick={onBack} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img 
                src="/Kein Hintergrund.png" 
                alt="SSA Hit Logo" 
                className="h-14 w-auto"
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={onBack}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={onBack}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
              >
                Referenzen
              </button>
              <button 
                onClick={onBack}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
              >
                Über uns
              </button>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => setIsCalendarOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Termin vereinbaren</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-700">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={onBack}
                  className="text-gray-300 hover:text-blue-400 transition-colors font-medium w-full text-left"
                >
                  Services
                </button>
                <button 
                  onClick={onBack}
                  className="text-gray-300 hover:text-blue-400 transition-colors font-medium w-full text-left"
                >
                  Referenzen
                </button>
                <button 
                  onClick={onBack}
                  className="text-gray-300 hover:text-blue-400 transition-colors font-medium w-full text-left"
                >
                  Über uns
                </button>
                <button 
                  onClick={() => setIsCalendarOpen(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold flex items-center justify-center space-x-2 w-full"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Termin vereinbaren</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Impressum
        </h1>
        
        <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700">
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-gray-300">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Angaben gemäß § 5 TMG</h2>
                <div className="space-y-2">
                  <p><p>Sahit Luma</p></p>
                  <p>Software Service Agentur Hit</p>
                  <p>Wasserkuppenstraße 42</p>
                  <p>36043, Fulda</p>
                  <p>Deutschland</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Kontakt</h2>
                <div className="space-y-2">
                  <p>Telefon: +49 157 88720205</p>
                  <p>E-Mail: info@ssahit.de</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Steuernummer</h2>
                <p>Steuernummer :</p>
                <p>[18 843 30091]</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Redaktionell verantwortlich</h2>
                <p>Sahit Luma</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">EU-Streitschlichtung</h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-400 hover:text-blue-300 ml-1 break-all">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Verbraucherstreitbeilegung
                  /Universalschlichtungsstelle</h2>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer
        onShowImpressum={() => {}}
        onShowDatenschutz={onShowDatenschutz}
        onShowAGB={onShowAGB}
      />
    </div>
    
    <CalendarPopup 
      isOpen={isCalendarOpen} 
      onClose={() => setIsCalendarOpen(false)} 
    />
    </>
  );
};

export default Impressum;