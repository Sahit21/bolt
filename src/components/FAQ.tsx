import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Was kostet eine KI-Implementation?",
      answer: "Die Kosten variieren je nach Umfang der Implementation. Gerne erstellen wir Ihnen ein individuelles Angebot."
    },
    {
      question: "Wie lange dauert die Implementation?",
      answer: "Eine Standard-Implementation dauert 3-7 Werktage. Voice AI-Systeme sind meist in 3-5 Tagen einsatzbereit, während komplexere Chatbot-Integrationen mit CRM-Anbindung 5-7 Tage benötigen."
    },
    {
      question: "Welche Systeme können integriert werden?",
      answer: "Unsere KI-Lösungen integrieren sich nahtlos in bestehende Systeme: CRM-Systeme (Salesforce, HubSpot, Pipedrive), Telefonsysteme (VoIP, Festnetz), Website-Chat, WhatsApp Business, E-Mail-Marketing-Tools und Kalendersysteme. Die Integration erfolgt über sichere APIs."
    },
    {
      question: "Wie natürlich klingt die KI?",
      answer: "Unsere Voice AI nutzt modernste Sprachsynthese-Technologie und klingt sehr natürlich. Kunden merken oft nicht, dass sie mit einer KI sprechen. Die KI kann Emotionen erkennen, Pausen einhalten und sich an den Gesprächsstil anpassen. Hören Sie sich gerne unsere Demos an."
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-750 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;