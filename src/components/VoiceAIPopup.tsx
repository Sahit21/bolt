import React from 'react';
import { X, Mic, Play } from 'lucide-react';

interface VoiceAIPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const VoiceAIPopup: React.FC<VoiceAIPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl mx-4 bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-gray-300" />
        </button>
        
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mb-6 mx-auto">
              <Mic className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Voice AI Demo
            </h3>
            <p className="text-gray-300 text-lg">
              Testen Sie unsere Voice AI Technologie live
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 mb-6">
            <h4 className="text-white font-semibold mb-4">Was Sie testen können:</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Natürliche Sprachverarbeitung</li>
              <li>• Intelligente Gesprächsführung</li>
              <li>• Terminbuchung per Sprache</li>
              <li>• Mehrsprachige Unterstützung</li>
            </ul>
          </div>

          {/* Vapi Widget Integration */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 mx-auto">
              <Play className="w-5 h-5" />
              <span>Voice AI starten</span>
            </button>
            
            <p className="text-gray-400 text-sm mt-4">
              Klicken Sie auf "Voice AI starten" um die Demo zu beginnen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAIPopup;