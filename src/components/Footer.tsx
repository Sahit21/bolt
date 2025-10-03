import React from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import CalendarPopup from './CalendarPopup';
import InstallationPopup from './InstallationPopup';

interface FooterProps {
  onShowImpressum?: () => void;
  onShowDatenschutz?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onShowImpressum, onShowDatenschutz }) => {
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);
  const [isInstallationOpen, setIsInstallationOpen] = React.useState(false);

  return (
    <>
      <footer className="bg-slate-950 text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/Kein Hintergrund.png" 
                alt="SSA Hit Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Professionelle Implementation von KI-Lösungen, 
              die nahtlos in Ihre bestehenden Systeme integriert werden.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@ssahit.de</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+49 15788720205</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Deutschland</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Schnellzugriff</h3>
            <div className="space-y-4">
              <button 
                onClick={() => setIsCalendarOpen(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Termin vereinbaren</span>
              </button>
              <button 
                onClick={() => setIsInstallationOpen(true)}
                className="w-full bg-slate-800 text-white px-6 py-3 rounded-full font-semibold border border-slate-700 hover:bg-slate-700 transition-all duration-200"
              >
                Implementation anfragen
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 SSA Hit. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button 
                onClick={onShowDatenschutz}
                className="hover:text-white transition-colors"
              >
                Datenschutz
              </button>
              <button 
                onClick={onShowImpressum}
                className="hover:text-white transition-colors"
              >
                Impressum
              </button>
            </div>
          </div>
        </div>
      </div>
      </footer>
      
      <CalendarPopup 
        isOpen={isCalendarOpen} 
        onClose={() => setIsCalendarOpen(false)} 
      />
      <InstallationPopup 
        isOpen={isInstallationOpen} 
        onClose={() => setIsInstallationOpen(false)} 
      />
    </>
  );
};

export default Footer;