import React from 'react';
import { GraduationCap, Calendar, Database, RefreshCw, CheckCircle, Cog, Shield } from 'lucide-react';
import InstallationPopup from './InstallationPopup';

const Services = () => {
  const [isInstallationOpen, setIsInstallationOpen] = React.useState(false);

  const services = [
    {
      icon: GraduationCap,
      title: 'Voice AI Implementation',
      features: [
        'Telefonsystem-Integration',
        'Individuelle Sprachmodelle',
        'Mehrsprachige Konfiguration'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Calendar,
      title: 'Chatbot Implementation',
      features: [
        'Website-Integration',
        'Social Media Anbindung',
        'Individuelle Gesprächslogik'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'System-Integration',
      features: [
        'CRM-Anbindung',
        'API-Verbindungen',
        'Datenbank-Integration'
      ],
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: RefreshCw,
      title: 'Wartung & Support',
      features: [
        'Regelmäßige Updates',
        '24/7 technischer Support',
        'Performance-Optimierung'
      ],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Cog,
      title: 'Prozesslösungen',
      features: [
        'Workflow-Automatisierung',
        'Prozess-Optimierung',
        'Effizienzsteigerung'
      ],
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Garantie & Compliance',
      features: [
        'ROI-Garantie',
        'DSGVO-konform',
        'Datenschutz-Compliance'
      ],
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="block sm:hidden">Unsere Services</span>
            <span className="hidden sm:block">Unsere Implementationsservices</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professionelle Implementation und Integration in Ihre bestehenden Systeme.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-slate-600 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6">
                {service.title}
              </h3>
              
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center bg-gradient-to-br from-slate-800 to-blue-900 rounded-3xl p-12 border border-slate-700">
          <h3 className="text-3xl font-bold text-white mb-4">
            Maßgeschneiderte Implementation
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Jede Implementation wird individuell an Ihre Geschäftsanforderungen angepasst
          </p>
          
          <button 
            onClick={() => setIsInstallationOpen(true)}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 mx-auto"
          >
            <span>Implementation anfragen</span>
            <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
          </button>
        </div>
      </div>
      
      <InstallationPopup 
        isOpen={isInstallationOpen} 
        onClose={() => setIsInstallationOpen(false)} 
      />
    </section>
  );
};

export default Services;