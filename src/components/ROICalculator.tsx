import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, ArrowRight, Calendar, Menu, X } from 'lucide-react';
import CalendarPopup from './CalendarPopup';
import Footer from './Footer';

interface ROICalculatorProps {
  onBack: () => void;
  onShowAbout?: () => void;
  onShowReferences?: () => void;
}

const ROICalculator: React.FC<ROICalculatorProps> = ({ onBack, onShowAbout, onShowReferences }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const [employees, setEmployees] = useState(50);
  const [avgSalary, setAvgSalary] = useState(45000);
  const [customerCalls, setCustomerCalls] = useState(1000);
  const [avgCallDuration, setAvgCallDuration] = useState(8);
  const [monthlyCustomerSupport, setMonthlyCustomerSupport] = useState(5000);

  const [results, setResults] = useState({
    timeSaved: 0,
    costSavings: 0,
    roi: 0,
    paybackMonths: 0,
    yearlyBenefit: 0
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const avgHourlyRate = avgSalary / 12 / 160;
    const callTimeHours = (customerCalls * avgCallDuration) / 60;
    const automationRate = 0.7;
    const timeSavedHours = callTimeHours * automationRate;
    const monthlyCostSavings = (timeSavedHours * avgHourlyRate) + (monthlyCustomerSupport * 0.4);
    const implementationCost = 8000;
    const monthlyCost = 500;
    const netMonthlySavings = monthlyCostSavings - monthlyCost;
    const paybackMonths = implementationCost / netMonthlySavings;
    const yearlyBenefit = netMonthlySavings * 12;
    const roi = ((yearlyBenefit - implementationCost) / implementationCost) * 100;

    setResults({
      timeSaved: Math.round(timeSavedHours),
      costSavings: Math.round(monthlyCostSavings),
      roi: Math.round(roi),
      paybackMonths: Math.round(paybackMonths * 10) / 10,
      yearlyBenefit: Math.round(yearlyBenefit)
    });
  }, [employees, avgSalary, customerCalls, avgCallDuration, monthlyCustomerSupport]);

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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl mb-6">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ROI-Rechner
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Berechnen Sie den Return on Investment für Ihre KI-Implementation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6">Ihre Eingaben</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-3">
                    Anzahl Mitarbeiter: <span className="text-blue-400">{employees}</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>10</span>
                    <span>500</span>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-3">
                    Durchschnittliches Jahresgehalt: <span className="text-blue-400">€{avgSalary.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min="30000"
                    max="100000"
                    step="5000"
                    value={avgSalary}
                    onChange={(e) => setAvgSalary(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>€30.000</span>
                    <span>€100.000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-3">
                    Kundenanrufe pro Monat: <span className="text-blue-400">{customerCalls.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="100"
                    value={customerCalls}
                    onChange={(e) => setCustomerCalls(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>100</span>
                    <span>10.000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-3">
                    Durchschnittliche Anrufdauer: <span className="text-blue-400">{avgCallDuration} Min.</span>
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="30"
                    value={avgCallDuration}
                    onChange={(e) => setAvgCallDuration(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>2 Min.</span>
                    <span>30 Min.</span>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-3">
                    Monatliche Kosten Kundenservice: <span className="text-blue-400">€{monthlyCustomerSupport.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="1000"
                    value={monthlyCustomerSupport}
                    onChange={(e) => setMonthlyCustomerSupport(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>€1.000</span>
                    <span>€50.000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl p-8 border border-blue-700">
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">Ihre Ergebnisse</h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-slate-800/50 rounded-2xl p-6">
                    <div className="text-gray-300 text-sm mb-2">Monatlich gesparte Zeit</div>
                    <div className="text-4xl font-bold text-white">{results.timeSaved} Stunden</div>
                  </div>

                  <div className="bg-slate-800/50 rounded-2xl p-6">
                    <div className="text-gray-300 text-sm mb-2">Monatliche Kostenersparnis</div>
                    <div className="text-4xl font-bold text-green-400">€{results.costSavings.toLocaleString()}</div>
                  </div>

                  <div className="bg-slate-800/50 rounded-2xl p-6">
                    <div className="text-gray-300 text-sm mb-2">Jährlicher Nutzen</div>
                    <div className="text-4xl font-bold text-green-400">€{results.yearlyBenefit.toLocaleString()}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-2xl p-6">
                      <div className="text-gray-300 text-sm mb-2">ROI</div>
                      <div className="text-3xl font-bold text-blue-400">{results.roi}%</div>
                    </div>

                    <div className="bg-slate-800/50 rounded-2xl p-6">
                      <div className="text-gray-300 text-sm mb-2">Amortisation</div>
                      <div className="text-3xl font-bold text-purple-400">{results.paybackMonths} Monate</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Was bedeutet das?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <span>Ihre Investition amortisiert sich in etwa {results.paybackMonths} Monaten</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <span>Sie sparen monatlich ca. {results.timeSaved} Arbeitsstunden</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <span>Jährliche Kostenersparnis von über €{results.yearlyBenefit.toLocaleString()}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <span>ROI von {results.roi}% nach dem ersten Jahr</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-slate-800 to-blue-900 rounded-3xl p-12 border border-slate-700 text-center">
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

export default ROICalculator;
