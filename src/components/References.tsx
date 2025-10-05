import React from 'react';
import { useEffect } from 'react';
import { Menu, X, Calendar, ArrowRight, Star, ExternalLink } from 'lucide-react';
import CalendarPopup from './CalendarPopup';
import Footer from './Footer';

interface ReferencesProps {
  onBack: () => void;
  onShowAbout?: () => void;
}

const References: React.FC<ReferencesProps> = ({ onBack, onShowAbout }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const trustpilotReviews = [
  
  ];

  const handleTrustpilotClick = () => {
    window.open('https://de.trustpilot.com/review/ssahit.de', '_blank');
  };

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
              <span className="text-blue-400 font-medium">
                Referenzen
              </span>
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
                <button
                  onClick={onBack}
                  className="text-gray-300 hover:text-blue-400 transition-colors font-medium w-full text-left"
                >
                  Services
                </button>
                <span className="text-blue-400 font-medium">
                  Referenzen
                </span>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Kundenbewertungen
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Echte Bewertungen von zufriedenen Kunden auf Trustpilot
          </p>
          
          {/* Trustpilot Header */}
          <div className="inline-flex items-center space-x-4 bg-slate-800 rounded-2xl p-6 border border-slate-700">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-green-500 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-white">4.9</span>
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">Hervorragend</div>
              <div className="text-gray-400 text-sm">Basierend auf Bewertungen</div>
            </div>
            <button
              onClick={handleTrustpilotClick}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-colors"
            >
              <span>Trustpilot</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trustpilotReviews.map((review, index) => (
            <div
              key={index}
              onClick={handleTrustpilotClick}
              className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-slate-600 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
            >
              {/* Rating */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-green-500 fill-current" />
                  ))}
                </div>
                <div className="text-gray-400 text-sm">{review.date}</div>
              </div>

              {/* Review Text */}
              <p className="text-gray-300 mb-6 leading-relaxed line-clamp-4">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white flex items-center space-x-2">
                    <span>{review.name}</span>
                    {review.verified && (
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                  <div className="text-sm text-gray-400">{review.role}</div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-slate-800 to-blue-900 rounded-3xl p-12 border border-slate-700">
          <h3 className="text-3xl font-bold text-white mb-4">
            Werden Sie unser nächster zufriedener Kunde
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Starten Sie noch heute mit Ihrer KI-Implementation und erleben Sie die gleichen Erfolge
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => setIsCalendarOpen(true)}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-3"
            >
              <span>Kostenlose Beratung</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={handleTrustpilotClick}
              className="group bg-slate-800 text-white px-8 py-4 rounded-full font-semibold text-lg border border-slate-600 hover:bg-slate-700 transition-all duration-300 flex items-center space-x-3"
            >
              <span>Alle Bewertungen ansehen</span>
              <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      <Footer 
        onShowImpressum={() => {}} 
        onShowDatenschutz={() => {}} 
      />
    </div>
    
    <CalendarPopup 
      isOpen={isCalendarOpen} 
      onClose={() => setIsCalendarOpen(false)} 
    />
    </>
  );
};

export default References;