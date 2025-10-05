import React from 'react';
import { Star, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sabine Meier",
      role: "Geschäftsführerin",
      text: "Die Implementation der Voice AI war reibungslos. Unser Telefonsystem wurde perfekt integriert und die KI klingt wirklich natürlich. Unsere Kunden merken oft gar nicht, dass sie mit einer KI sprechen.",
      rating: 5
    },
    {
      name: "Markus Schuster",
      role: "IT-Leiter",
      text: "Der Chatbot wurde nahtlos in unsere Website integriert. Die individuelle Anpassung an unsere Geschäftsprozesse war beeindruckend. Alles funktioniert perfekt.",
      rating: 5
    },
    {
      name: "Thomas Keller",
      role: "Praxisinhaber",
      text: "Die Implementation war in wenigen Tagen abgeschlossen. Der Support ist hervorragend und die KI wurde perfekt auf unsere Praxis angepasst. Sehr professioneller Service.",
      rating: 5
    }
  ];

  const logos = [
    { name: "Green", color: "text-green-500" },
    { name: "Tech Co", color: "text-blue-500" },
    { name: "Innovate", color: "text-purple-500" },
    { name: "Green", color: "text-green-500" },
    { name: "Tech Co", color: "text-blue-500" },
    { name: "Innovate", color: "text-purple-500" }
  ];

  return (
    <section className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Erfolgreiche Implementationen
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors mb-6">
                Read more
              </button>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-300" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;