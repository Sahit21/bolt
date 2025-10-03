import React from 'react';
import { Mic, ArrowRight, Sparkles, Shield, Target, Star } from 'lucide-react';
import CalendarPopup from './CalendarPopup';
import InstallationPopup from './InstallationPopup';

const Hero = () => {
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);
  const [isInstallationOpen, setIsInstallationOpen] = React.useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/30 to-slate-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-slate-600/30 to-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-slate-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* AI Badge */}
        <div className="inline-flex items-center space-x-2 bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-full px-4 py-2 mb-8 shadow-lg">
          <Mic className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-semibold text-gray-300">KI-gestützte Lead-Automatisierung für jeden</span>
          <Sparkles className="w-4 h-4 text-blue-400" />
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-slate-300 bg-clip-text text-transparent">
            Implementieren Sie
          </span>
          <br />
          <span className="text-white">KI in Ihr Unternehmen</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
          <span className="font-semibold text-white">Voice AI und Chatbot-Implementation für Ihr Unternehmen</span>
          <br />
          <span className="italic">Professionelle Integration in Ihre bestehenden Systeme.</span>
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          Wir implementieren und konfigurieren Voice AI oder Chatbots nach Ihren Anforderungen.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <button 
            onClick={() => setIsCalendarOpen(true)}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-3"
          >
            <span>Termin vereinbaren</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => setIsInstallationOpen(true)}
            className="group bg-slate-800/80 backdrop-blur-sm text-gray-300 px-8 py-4 rounded-full font-semibold text-lg border border-slate-600 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-3"
          >
            <span>Implementation anfragen</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-24">
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl mb-4 mx-auto">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-300 font-medium">DSGVO-konform</div>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl mb-4 mx-auto">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">4,9/5</div>
            <div className="text-gray-300 font-medium">Kundenzufriedenheit</div>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-slate-400 to-slate-500 rounded-xl mb-4 mx-auto">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">0h</div>
            <div className="text-gray-300 font-medium">interner Aufwand</div>
          </div>
        </div>
      </div>
      </section>
      
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

export default Hero;