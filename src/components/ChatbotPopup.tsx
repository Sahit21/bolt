import React, { useState } from 'react';
import { X, MessageSquare, Send, Bot, User } from 'lucide-react';

interface ChatbotPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

const ChatbotPopup: React.FC<ChatbotPopupProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hallo! Ich bin Ihr KI-Assistent. Wie kann ich Ihnen heute helfen?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('termin') || input.includes('appointment')) {
      return "Gerne helfe ich Ihnen bei der Terminbuchung! Welchen Service benötigen Sie und wann hätten Sie Zeit?";
    } else if (input.includes('preis') || input.includes('kosten')) {
      return "Die Kosten hängen von Ihren spezifischen Anforderungen ab. Gerne erstelle ich Ihnen ein individuelles Angebot. Soll ich einen Beratungstermin für Sie buchen?";
    } else if (input.includes('voice ai') || input.includes('sprach')) {
      return "Voice AI ist perfekt für die Automatisierung Ihrer Telefonkommunikation. Möchten Sie mehr über die Installation und Integration erfahren?";
    } else if (input.includes('chatbot') || input.includes('chat')) {
      return "Ein Chatbot kann Ihre Website-Besucher 24/7 betreuen. Welche Funktionen sind für Sie besonders wichtig?";
    } else {
      return "Das ist eine interessante Frage! Gerne bespreche ich das ausführlich mit Ihnen. Soll ich einen Termin für ein persönliches Gespräch vereinbaren?";
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl mx-4 bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700 h-[600px] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-gray-300" />
        </button>
        
        {/* Header */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Chatbot Demo
              </h3>
              <p className="text-gray-400 text-sm">
                Testen Sie unsere KI-Chat Technologie
              </p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${message.sender === 'user' ? 'bg-blue-600' : 'bg-purple-600'}`}>
                  {message.sender === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className={`rounded-2xl px-4 py-3 ${message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-gray-300'}`}>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-6 border-t border-slate-700">
          <div className="flex space-x-4">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Schreiben Sie Ihre Nachricht..."
              className="flex-1 bg-slate-800 text-white rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full hover:shadow-lg transition-all duration-200"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPopup;