import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, ArrowRight, Calendar, Menu, X, Users, Clock, DollarSign } from 'lucide-react';
import CalendarPopup from './CalendarPopup';
import Footer from './Footer';

interface ROICalculatorProps {
  onBack: () => void;
  onShowAbout?: () => void;
  onShowReferences?: () => void;
  onShowImpressum?: () => void;
  onShowDatenschutz?: () => void;
}

const ROICalculator: React.FC<ROICalculatorProps> = ({ onBack, onShowAbout, onShowReferences, onShowImpressum, onShowDatenschutz }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const [callsPerWeek, setCallsPerWeek] = useState(180);
  const [unansweredPercent, setUnansweredPercent] = useState(20);
  const [avgProcessingTime, setAvgProcessingTime] = useState(5);
  const [hourlyWage, setHourlyWage] = useState(26);

  const [results, setResults] = useState({
    monthlyTimeSaved: 0,
    monthlyPersonnelSavings: 0,
    monthlyMoreCalls: 0,
    yearlyTimeSaved: 0,
    yearlyPersonnelSavings: 0,
    yearlyMoreCalls: 0
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const automationRate = 0.8;
    const weeksPerMonth = 4.33;
    const monthsPerYear = 12;

    const totalCallsPerWeek = callsPerWeek;
    const answeredCallsPerWeek = totalCallsPerWeek * (1 - unansweredPercent / 100);

    const timeSavedPerWeekHours = (answeredCallsPerWeek * avgProcessingTime / 60) * automationRate;
    const monthlyTimeSaved = timeSavedPerWeekHours * weeksPerMonth;
    const yearlyTimeSaved = monthlyTimeSaved * monthsPerYear;

    const monthlyPersonnelSavings = monthlyTimeSaved * hourlyWage;
    const yearlyPersonnelSavings = yearlyTimeSaved * hourlyWage;

    const unansweredCallsPerWeek = totalCallsPerWeek * (unansweredPercent / 100);
    const monthlyMoreCalls = unansweredCallsPerWeek * weeksPerMonth;
    const yearlyMoreCalls = monthlyMoreCalls * monthsPerYear;

    setResults({
      monthlyTimeSaved: Math.round(monthlyTimeSaved),
      monthlyPersonnelSavings: Math.round(monthlyPersonnelSavings),
      monthlyMoreCalls: Math.round(monthlyMoreCalls),
      yearlyTimeSaved: Math.round(yearlyTimeSaved * 10) / 10,
      yearlyPersonnelSavings: Math.round(yearlyPersonnelSavings),
      yearlyMoreCalls: Math.round(yearlyMoreCalls)
    });
  }, [callsPerWeek, unansweredPercent, avgProcessingTime, hourlyWage]);

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
                <span className="text-blue-400 font-medium">
                  ROI-Rechner
                </span>
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
                className="md:hidden p-2 text-white"
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
                  <span className="text-blue-400 font-medium">
                    ROI-Rechner
                  </span>
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center space-x-3 mb-8">
                <Users className="w-6 h-6 text-blue-400" />
                <h2 className="text-xl font-semibold text-white">Ihre Eingaben</h2>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-3">
                    Anrufe pro Woche
                  </label>
                  <div className="flex items-baseline space-x-2 justify-end">
                    <input
                      type="number"
                      value={callsPerWeek}
                      onChange={(e) => setCallsPerWeek(Math.max(0, Number(e.target.value)))}
                      className="bg-slate-700/50 text-white text-right px-3 py-1 rounded-lg w-24 border border-slate-600 focus:border-blue-500 focus:outline-none"
                    />
                    <span className="text-gray-400 text-sm w-16">Anrufe</span>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-3">
                    % nicht beantwortete Anrufe innerhalb und außerhalb der Geschäftszeiten
                  </label>
                  <div className="flex items-baseline space-x-2 justify-end">
                    <input
                      type="number"
                      value={unansweredPercent}
                      onChange={(e) => setUnansweredPercent(Math.max(0, Math.min(100, Number(e.target.value))))}
                      className="bg-slate-700/50 text-white text-right px-3 py-1 rounded-lg w-24 border border-slate-600 focus:border-blue-500 focus:outline-none"
                    />
                    <span className="text-gray-400 text-sm w-16">%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-3">
                    Durchschnittliche Bearbeitungszeit
                  </label>
                  <div className="flex items-baseline space-x-2 justify-end">
                    <input
                      type="number"
                      value={avgProcessingTime}
                      onChange={(e) => setAvgProcessingTime(Math.max(0, Number(e.target.value)))}
                      className="bg-slate-700/50 text-white text-right px-3 py-1 rounded-lg w-24 border border-slate-600 focus:border-blue-500 focus:outline-none"
                    />
                    <span className="text-gray-400 text-sm w-16">Minuten</span>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-3">
                    Stundenlohn Mitarbeiter
                  </label>
                  <div className="flex items-baseline space-x-2 justify-end">
                    <span className="text-gray-400 text-sm">€</span>
                    <input
                      type="number"
                      value={hourlyWage}
                      onChange={(e) => setHourlyWage(Math.max(0, Number(e.target.value)))}
                      className="bg-slate-700/50 text-white text-right px-3 py-1 rounded-lg w-24 border border-slate-600 focus:border-blue-500 focus:outline-none"
                    />
                    <span className="text-gray-400 text-sm w-16">/Std</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-6">Monatliche Einsparungen</h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-400 text-sm mb-1">Zeitersparnis</div>
                      <div className="text-2xl font-bold text-white">{results.monthlyTimeSaved} Stunden</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-400 text-sm mb-1">Personalkostenersparnis</div>
                      <div className="text-2xl font-bold text-white">€{results.monthlyPersonnelSavings.toLocaleString()}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-400 text-sm mb-1">Mehr entgegengenommene Anrufe</div>
                      <div className="text-2xl font-bold text-white">{results.monthlyMoreCalls} Anrufe</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 border border-blue-500/50">
                <h3 className="text-lg font-semibold text-white mb-6">Jährliche Einsparungen</h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100 text-sm">Zeitersparnis</span>
                    <span className="text-xl font-bold text-white">{results.yearlyTimeSaved} Std</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-blue-100 text-sm">Personalkostenersparnis</span>
                    <span className="text-xl font-bold text-white">€ {results.yearlyPersonnelSavings.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-blue-100 text-sm">Mehr entgegengenommene Anrufe</span>
                    <span className="text-xl font-bold text-white">{results.yearlyMoreCalls} Anrufe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-6">Wie wird der ROI berechnet?</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-blue-400 font-medium mb-2">Zeitersparnis:</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Automatisierung von 80% der Anrufe spart wertvolle Arbeitszeit.
                </p>
              </div>

              <div>
                <h4 className="text-blue-400 font-medium mb-2">Personalkostenersparnis:</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Eingesparte Stunden × Stundenlohn = direkte Kostenreduktion.
                </p>
              </div>

              <div>
                <h4 className="text-blue-400 font-medium mb-2">Umsatzsteigerung:</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  24/7-Erreichbarkeit wandelt unbeantwortete Anrufe in Umsatz um.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-12 border border-slate-700 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Bereit, diese Vorteile zu realisieren?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Vereinbaren Sie jetzt ein kostenloses Beratungsgespräch und erfahren Sie, wie wir Ihre individuellen Anforderungen umsetzen können
            </p>
            <button
              onClick={() => setIsCalendarOpen(true)}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3"
            >
              <span>Kostenlose Beratung buchen</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <Footer
          onShowImpressum={onShowImpressum}
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

export default ROICalculator;
