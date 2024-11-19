import React, { useState } from 'react';
import { Menu, X, Mountain, MessageCircle, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi! I\'m interested in Kashmir tour packages.');
    window.open(`https://wa.me/911234567890?text=${message}`, '_blank');
  };

  return (
    <>
      <div className="bg-primary-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:+911234567890" className="flex items-center space-x-2 hover:text-white/90">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+91 123 456 7890</span>
            </a>
          </div>
          <button
            onClick={handleWhatsApp}
            className="flex items-center space-x-2 bg-green-600 px-4 py-1 rounded-full hover:bg-green-700 transition-colors text-sm"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Inquiry on WhatsApp</span>
          </button>
        </div>
      </div>
      
      <header className="sticky top-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Mountain className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-2xl font-display font-semibold text-gray-900">Kashmir Travels</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {['Home', 'Packages', 'About Us', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm uppercase tracking-wider font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {['Home', 'Packages', 'About Us', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}