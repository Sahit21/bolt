import React from 'react';
import { Mic, MessageSquare, CheckCircle, Play, Headphones, ShoppingCart, Calendar } from 'lucide-react';
import InstallationPopup from './InstallationPopup';

// Declare the vapi-widget custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vapi-widget': any;
    }
  }
}

const AITypes = () => {
  const [isInstallationOpen, setIsInstallationOpen] = React.useState(false);
  const [playingAudio, setPlayingAudio] = React.useState<HTMLAudioElement | null>(null);
  const [playingAgent, setPlayingAgent] = React.useState<string | null>(null);

  const handleAudioPlay = async (audioUrl: string, agentType: string) => {
    try {
      // Wenn bereits Audio spielt und es der gleiche Agent ist, stoppe es
      if (playingAudio && playingAgent === agentType) {
        playingAudio.pause();
        playingAudio.currentTime = 0;
        setPlayingAudio(null);
        setPlayingAgent(null);
        return;
      }

      // Stoppe vorheriges Audio falls vorhanden
      if (playingAudio) {
        playingAudio.pause();
        playingAudio.currentTime = 0;
      }

      // Spiele neues Audio
      const audio = new Audio(audioUrl);
      audio.volume = 0.8;
      audio.preload = 'auto';
      
      // Event Listener für Ende des Audios
      audio.addEventListener('ended', () => {
        setPlayingAudio(null);
        setPlayingAgent(null);
      });

      await audio.play();
      setPlayingAudio(audio);
      setPlayingAgent(agentType);
      console.log(`${agentType} Audio wird abgespielt`);
    } catch (error) {
      console.error('Audio konnte nicht abgespielt werden:', error);
      alert('Audio konnte nicht abgespielt werden. Bitte überprüfen Sie Ihre Browser-Einstellungen.');
      setPlayingAudio(null);
      setPlayingAgent(null);
    }
  };

  return (
    <>
    <section className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            KI-Agenten
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Spezialisierte KI-Agenten für verschiedene Geschäftsbereiche
          </p>
        </div>

        {/* AI Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* KI Support */}
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-700 hover:border-slate-600 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 mx-auto">
              <Mic className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
          KI-Support
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-medium">24/7 Kundenbetreuung</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-medium">Technische Problemlösung</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-medium">Ticket-Management</span>
              </div>
            </div>

            <button 
              onClick={() => handleAudioPlay('https://storage.vapi.ai/d507e30d-2dfe-4672-aee7-3cf5c23c7d56-1757624190200-b0443f27-dbb4-4feb-b57f-09a6adc89906-mono.wav', 'support')}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              {playingAgent === 'support' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white rounded-sm"></div>
                  <span>KI-Support stoppen</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" />
                  <span>KI-Support hören</span>
                </>
              )}
            </button>
          </div>

          {/* KI Sales */}
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-700 hover:border-slate-600 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 mx-auto">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              KI-Vertrieb
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-medium">Lead-Qualifizierung</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-medium">CRM-Pflege</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-medium">Angebote/Rechnungen erstellen</span>
              </div>
            </div>

            <button 
              onClick={() => handleAudioPlay('https://storage.vapi.ai/f03c5964-ce79-4fb7-89cd-bb464a420678-1757625294468-467dc44c-7dca-41fc-837d-e80c85d89c8c-mono.wav', 'sales')}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              {playingAgent === 'sales' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white rounded-sm"></div>
                  <span>KI-Vertrieb stoppen</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5" />
                  <span>KI-Vertrieb hören</span>
                </>
              )}
            </button>
          </div>

          {/* KI Terminsetter */}
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-700 hover:border-slate-600 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl mb-6 mx-auto">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              KI-Terminsetter
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-medium">Automatische Terminbuchung</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-medium">Kalender-Synchronisation</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-medium">Erinnerungen & Follow-ups</span>
              </div>
            </div>

            <button 
              onClick={() => handleAudioPlay('https://storage.vapi.ai/044ed358-cb8b-4f59-8bcd-89f69fc9016a-1757625924177-9e97b4f2-d454-48d8-84de-b6c3d130e657-mono.wav', 'terminsetter')}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              {playingAgent === 'terminsetter' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white rounded-sm"></div>
                  <span>KI-Terminsetter stoppen</span>
                </>
              ) : (
                <>
                  <Calendar className="w-5 h-5" />
                  <span>KI-Terminsetter hören</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Bottom Info Section */}
        <div className="text-center bg-gradient-to-br from-slate-800 to-blue-900 rounded-3xl p-12 border border-slate-700">
          <h3 className="text-3xl font-bold text-white mb-4">
            Individuelle KI-Agenten für Ihr Unternehmen
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Jeder KI-Agent wird speziell für Ihre Branche und Geschäftsprozesse implementiert und trainiert
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => setIsInstallationOpen(true)}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-3"
            >
              <Mic className="w-5 h-5" />
              <span>Voice AI anfragen</span>
            </button>
            <button 
              onClick={() => setIsInstallationOpen(true)}
              className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-3"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Chatbot anfragen</span>
            </button>
          </div>
        </div>
      </div>
    </section>
    
    <InstallationPopup 
      isOpen={isInstallationOpen} 
      onClose={() => setIsInstallationOpen(false)} 
    />
    </>
  );
};

export default AITypes;