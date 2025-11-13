import React, { useEffect } from 'react';
import { ArrowLeft, Calendar } from 'lucide-react';
import Footer from './Footer';

interface CalendarPageProps {
  onBack: () => void;
  onShowImpressum?: () => void;
  onShowDatenschutz?: () => void;
}

const CalendarPage: React.FC<CalendarPageProps> = ({ onBack, onShowImpressum, onShowDatenschutz }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-slate-900">
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <ArrowLeft className="w-6 h-6 text-gray-300" />
                <span className="text-gray-300 font-medium hidden sm:inline">Zurück</span>
              </button>

              <h1 className="text-xl font-bold text-white flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-blue-400" />
                <span>Termin vereinbaren</span>
              </h1>

              <div className="w-8" />
            </div>
          </div>
        </header>

        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 overflow-hidden">
              <iframe
                src="https://api.leadconnectorhq.com/widget/bookings/erstgespraech-neuge"
                className="w-full h-[700px] border-0 rounded-2xl"
                title="Termin vereinbaren"
              />
            </div>
          </div>
        </div>

        <Footer
          onShowImpressum={onShowImpressum}
          onShowDatenschutz={onShowDatenschutz}
        />
      </div>
    </>
  );
};

export default CalendarPage;
