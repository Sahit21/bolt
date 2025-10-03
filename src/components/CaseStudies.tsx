import React, { useState } from 'react';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import CalendarPopup from './CalendarPopup';

const CaseStudies = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [currentCase, setCurrentCase] = useState(0);

  const caseStudies = [
    {
      company: "TechStart GmbH",
      industry: "Software-Entwicklung",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      challenge: "Überlastete Telefonzentrale und verpasste Kundenanfragen",
      solution: "Voice AI Implementation mit CRM-Integration",
      results: [
        { value: "95%", label: "weniger verpasste Anrufe" },
        { value: "60%", label: "Zeitersparnis im Support" },
        { value: "40%", label: "mehr qualifizierte Leads" }
      ],
      testimonial: "Die Voice AI hat unsere Kundenbetreuung revolutioniert. Wir verpassen keine Anfrage mehr."
    },
    {
      company: "MedPraxis Dr. Schmidt",
      industry: "Gesundheitswesen",
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600",
      challenge: "Terminbuchungen außerhalb der Sprechzeiten nicht möglich",
      solution: "Chatbot Implementation mit Terminkalender-Integration",
      results: [
        { value: "24/7", label: "Terminbuchung verfügbar" },
        { value: "80%", label: "weniger Telefonanrufe" },
        { value: "50%", label: "mehr Online-Termine" }
      ],
      testimonial: "Patienten können jetzt rund um die Uhr Termine buchen. Das entlastet unser Team enorm."
    },
    {
      company: "Hotel Bergblick",
      industry: "Hotellerie",
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600",
      challenge: "Buchungsanfragen außerhalb der Rezeptionszeiten gehen verloren",
      solution: "Voice AI + Chatbot mit automatischen Nachfass-Prozessen",
      results: [
        { value: "85%", label: "mehr Buchungsanfragen" },
        { value: "24/7", label: "Verfügbarkeit" },
        { value: "60%", label: "weniger verpasste Buchungen" }
      ],
      testimonial: "Gäste können jetzt rund um die Uhr buchen. Die KI beantwortet alle Fragen professionell."
    }
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentStudy = caseStudies[currentCase];

  return (
    <>
      <section id="case-studies" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Erfolgreiche KI-Implementationen
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Echte Ergebnisse von Unternehmen, die auf unsere KI-Lösungen vertrauen
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Case Study Image */}
            <div className="relative order-1 md:order-1">
              <img 
                src={currentStudy.image}
                alt={currentStudy.company}
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevCase}
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-slate-800/90 backdrop-blur-sm text-white p-2 md:p-3 rounded-full hover:bg-slate-700 transition-colors shadow-lg"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={nextCase}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-slate-800/90 backdrop-blur-sm text-white p-2 md:p-3 rounded-full hover:bg-slate-700 transition-colors shadow-lg"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Case Study Content */}
            <div className="bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-700 order-2 md:order-2">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {currentStudy.company}
                </h3>
                <p className="text-blue-400 text-base md:text-lg font-medium">
                  {currentStudy.industry}
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-3">Herausforderung</h4>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {currentStudy.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-3">Lösung</h4>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {currentStudy.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-4">Ergebnisse</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6">
                    {currentStudy.results.map((result, index) => (
                      <div key={index} className="bg-slate-700 p-3 md:p-4 rounded-xl text-center">
                        <div className="text-xl md:text-2xl font-bold text-blue-400 mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm text-gray-300">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-xl border border-blue-500/30">
                  <p className="text-gray-200 italic leading-relaxed text-sm md:text-base">
                    "{currentStudy.testimonial}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mb-12">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCase(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentCase ? 'bg-blue-500' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <button 
              onClick={() => setIsCalendarOpen(true)}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 mx-auto"
            >
              <span>Ihre Erfolgsgeschichte starten</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <CalendarPopup 
        isOpen={isCalendarOpen} 
        onClose={() => setIsCalendarOpen(false)} 
      />
    </>
  );
};

export default CaseStudies;