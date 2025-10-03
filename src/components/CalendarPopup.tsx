import React from 'react';
import { X } from 'lucide-react';

interface CalendarPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendarPopup: React.FC<CalendarPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-slate-600" />
        </button>
        
        <iframe
          src="https://api.leadconnectorhq.com/widget/bookings/erstgespraech-neuge"
          className="w-full h-[600px] border-0"
          title="Termin vereinbaren"
        />
      </div>
    </div>
  );
};

export default CalendarPopup;