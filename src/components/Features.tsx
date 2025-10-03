import React from 'react';
import { Database, Calendar, RefreshCw, Users, CheckCircle, Cog, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Database,
      title: 'CRM-Anbindung',
      description: 'Nahtlose Integration in Ihr bestehendes CRM-System',
      details: [
        'Automatische Datenübertragung',
        'Kontakt-Synchronisation',
        'Lead-Tracking'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: RefreshCw,
      title: 'Nachfass-Prozesse',
      description: 'Automatisierte Follow-up Kommunikation',
      details: [
        'Intelligente Nachfass-Zyklen',
        'Personalisierte Nachrichten',
        'Multi-Kanal Kommunikation'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Calendar,
      title: 'Terminkalender',
      description: 'Automatische Terminbuchung und -verwaltung',
      details: [
        'Online-Terminbuchung',
        'Kalender-Integration',
        'Erinnerungen & Bestätigungen'
      ],
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Users,
      title: 'Qualifizierung',
      description: 'Intelligente Lead-Qualifizierung und -Bewertung',
      details: [
        'Automatische Bewertung',
        'Interesse-Kategorisierung',
        'Prioritäts-Einstufung'
      ],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Erweiterte KI-Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Zusätzliche Funktionen für eine vollständige Automatisierung Ihrer Geschäftsprozesse
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-slate-600 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 mb-6 text-lg">
                {feature.description}
              </p>
              
              <div className="space-y-3">
                {feature.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;