import React from 'react';
import { useEffect } from 'react';
import { Menu, X, Calendar, ArrowRight } from 'lucide-react';
import CalendarPopup from './CalendarPopup';
import Footer from './Footer';

interface AGBProps {
  onBack: () => void;
  onShowImpressum?: () => void;
  onShowDatenschutz?: () => void;
}

const AGB: React.FC<AGBProps> = ({ onBack, onShowImpressum, onShowDatenschutz }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className="min-h-screen bg-slate-900">
      <header className="bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button onClick={onBack} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img
                src="/Kein Hintergrund.png"
                alt="SSA Hit Logo"
                className="h-14 w-auto"
              />
            </button>

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

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

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
          Allgemeine Geschäftsbedingungen
        </h1>

        <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700">
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-gray-300">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Geltungsbereich</h2>
                <p>
                  [Hier können Sie Ihre eigenen AGBs einfügen]
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Vertragsschluss</h2>
                <p>
                  [Hier können Sie Ihre eigenen AGBs einfügen]
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Leistungsumfang</h2>
                <p>
                  [Hier können Sie Ihre eigenen AGBs einfügen]
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Preise und Zahlungsbedingungen</h2>
                <p>
                  [Hier können Sie Ihre eigenen AGBs einfügen]
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Lieferung und Leistungszeit</h2>
                <p>
                  [Hier können Sie Ihre eigenen AGBs einfügen]
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Gewährleistung und Haftung</h2>
                <p>
                  [Hier können Sie Ihre eigenen AGBs einfügen]
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Datenschutz</h2>
                <p>
                  [Hier können Sie Ihre eigenen AGBs einfügen]
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. Schlussbestimmungen</h2>
                <p>
                  [Hier können Sie Ihre eigenen AGBs einfügen]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer
        onShowImpressum={onShowImpressum}
        onShowDatenschutz={onShowDatenschutz}
      />
    </div>

    <CalendarPopup
      isOpen={isCalendarOpen}
      onClose={() => setIsCalendarOpen(false)}
    />
    </>
  );
};

export default AGB;
