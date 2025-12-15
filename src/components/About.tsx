import React from 'react';
import { useEffect } from 'react';
import { CheckCircle, Target, Users, Zap, Calendar, ArrowRight, Menu, X } from 'lucide-react';
import CalendarPopup from './CalendarPopup';
import Footer from './Footer';

interface AboutProps {
  onBack: () => void;
  onShowReferences?: () => void;
  onShowROICalculator?: () => void;
  onShowImpressum?: () => void;
  onShowDatenschutz?: () => void;
  onShowAGB?: () => void;
}

const About: React.FC<AboutProps> = ({ onBack, onShowReferences, onShowROICalculator, onShowImpressum, onShowDatenschutz, onShowAGB }) => {
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
                onClick={onShowReferences}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
              >
                Referenzen
              </button>
              <span className="text-blue-400 font-medium">
                Über uns
              </span>
              <button
                onClick={onShowROICalculator}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
              >
                ROI-Rechner
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
                  onClick={onShowReferences}
                  className="text-gray-300 hover:text-blue-400 transition-colors font-medium w-full text-left"
                >
                  Referenzen
                </button>
                <span className="text-blue-400 font-medium">
                  Über uns
                </span>
                <button
                  onClick={onShowROICalculator}
                  className="text-gray-300 hover:text-blue-400 transition-colors font-medium w-full text-left"
                >
                  ROI-Rechner
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
        {/* Company Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Logo */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-4 mb-8">
                <img 
                  src="/logo copy copy.png" 
                  alt="SSA Hit Logo" 
                  className="h-160 w-auto"
                />
              </div>
            </div>

            {/* Company Text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Über uns
              </h1>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Wir sind spezialisiert auf die professionelle Implementation und Integration von 
                  KI-Lösungen in bestehende Unternehmenssysteme. Unser Fokus liegt darauf, 
                  Voice AI und Chatbot-Technologien nahtlos in Ihre Geschäftsprozesse zu integrieren.
                </p>
                <p>
                  Mit jahrelanger Erfahrung in der Softwareentwicklung und KI-Integration 
                  helfen wir Unternehmen dabei, ihre Kundenbetreuung zu automatisieren und 
                  gleichzeitig die Qualität zu verbessern.
                </p>
                <p>
                  Unser Ansatz ist individuell und maßgeschneidert - jede Implementation wird 
                  speziell an Ihre Anforderungen und bestehenden Systeme angepasst.
                </p>
              </div>

              {/* Company Features */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-300 font-medium">Professionelle KI-Implementation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-300 font-medium">Nahtlose System-Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-300 font-medium">24/7 Support & Wartung</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-300 font-medium">Individuelle Anpassungen</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Section */}
        <div className="border-t border-slate-700 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Personal Text */}
            <div className="lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Geschäftsführung
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                Hallo, mein Name ist Sahit. Als Wirtschaftsinformatiker bringe ich fundiertes Wissen aus meinem Studium sowie praktische Erfahrung in der KI-Integration mit. Mein Fokus liegt darauf, komplexe Technologien für Unternehmen greifbar zu machen und diese effizient in bestehende Geschäftsprozesse einzubinden.
                </p>
                <p>
                  Bereits über 30 erfolgreiche Implementationen habe ich durchgeführt – von der Konzeption bis zur vollständigen Umsetzung. Dabei habe ich Unternehmen unterschiedlichster Größen und Branchen unterstützt, ihre Abläufe zu automatisieren und zu optimieren.
                </p>
                <p>
                  Mein Ziel ist es, dass Sie sich keine Gedanken über die Technik machen müssen - 
                  ich kümmere mich um die komplette Implementation und Konfiguration, damit Sie 
                  sich auf Ihr Kerngeschäft konzentrieren können.
                </p>
              </div>

              {/* Personal Stats */}
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">30+</div>
                  <div className="text-sm text-gray-400">
                    <span className="block sm:hidden">Erfolgreiche<br />Implementationen</span>
                    <span className="hidden sm:block">Erfolgreiche Implementationen</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    <span className="block sm:hidden text-2xl">Theorie &<br />Praxis</span>
                    <span className="hidden sm:block">Theorie & Praxis</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    <span className="block sm:hidden">Jahre<br />Erfahrung</span>
                    <span className="hidden sm:block">Jahre Erfahrung</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                  <div className="text-sm text-gray-400">
                    <span className="block sm:hidden">Kunden-<br />zufriedenheit</span>
                    <span className="hidden sm:block">Kundenzufriedenheit</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Image */}
            <div className="lg:order-2">
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <img 
                    src="/tempImageDCrzIa-removebg-preview.png" 
                    alt="Persönliches Foto" 
                    className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24 bg-gradient-to-br from-slate-800 to-blue-900 rounded-3xl p-12 border border-slate-700">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Unsere Werte
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4 mx-auto">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Präzision</h4>
              <p className="text-gray-300">
                Jede Installation wird sorgfältig geplant und präzise umgesetzt
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4 mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Effizienz</h4>
              <p className="text-gray-300">
                Schnelle Umsetzung ohne Kompromisse bei der Qualität
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl mb-4 mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Partnerschaft</h4>
              <p className="text-gray-300">
                Langfristige Betreuung und kontinuierliche Optimierung
              </p>
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

export default About;