import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function StickyContact() {
  const handleCall = () => {
    window.location.href = 'tel:+911234567890';
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi! I\'m interested in Kashmir tour packages.');
    window.open(`https://wa.me/911234567890?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t z-40 md:hidden">
      <div className="grid grid-cols-2 gap-1 p-2">
        <button
          onClick={handleCall}
          className="flex items-center justify-center gap-2 bg-primary-600 text-white py-3 rounded-lg"
        >
          <Phone className="h-5 w-5" />
          <span>Call Now</span>
        </button>
        <button
          onClick={handleWhatsApp}
          className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg"
        >
          <MessageCircle className="h-5 w-5" />
          <span>WhatsApp</span>
        </button>
      </div>
    </div>
  );
}