import React from 'react';
import { X } from 'lucide-react';

interface InstallationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstallationPopup: React.FC<InstallationPopupProps> = ({ isOpen, onClose }) => {
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
          src="https://api.leadconnectorhq.com/widget/form/uXCMjZuUPJH6bnlLCqVV"
          className="w-full h-[600px] border-0 rounded-2xl"
          id="popup-uXCMjZuUPJH6bnlLCqVV" 
          data-layout="{'id':'POPUP'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Jetzt Anfragen (Aktuell - ssahit.de)"
          data-height="873"
          data-layout-iframe-id="popup-uXCMjZuUPJH6bnlLCqVV"
          data-form-id="uXCMjZuUPJH6bnlLCqVV"
          title="Implementation anfragen"
        />
        <script src="https://link.msgsndr.com/js/form_embed.js"></script>
      </div>
    </div>
  );
};

export default InstallationPopup;