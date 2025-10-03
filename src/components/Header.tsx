import React, { useState } from 'react';
import { Menu, X, Calendar, ArrowRight } from 'lucide-react';
import CalendarPopup from './CalendarPopup';
import About from './About';

interface HeaderProps {
  onShowAbout?: () => void;
  onShowReferences?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShowAbout, onShowReferences }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/Kein Hintergrund.png" 
              alt="SSA Hit Logo" 
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
              Services
            </a>
            <button 
              onClick={onShowReferences}
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
            >
              Referenzen
            </button>
            <button 
              onClick={onShowAbout}
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
              <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
                Services
              </a>
             <button 
               onClick={onShowReferences}
               className="text-gray-300 hover:text-blue-400 transition-colors font-medium w-full text-left"
             >
                Referenzen
             </button>
              <button 
                onClick={onShowAbout}
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
      
      <CalendarPopup 
        isOpen={isCalendarOpen} 
        onClose={() => setIsCalendarOpen(false)} 
      />
    </>
  );
};

export default Header;