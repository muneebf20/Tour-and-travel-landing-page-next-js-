import React, { useState } from 'react';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';
import BookingForm from './BookingForm';
import heroBg from '../assets/images/hero-bg.jpg';

export default function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl animate-fade-up">
          <div className="flex items-center gap-2 text-white/90 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="text-lg font-light tracking-wide">Kashmir, India</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-medium text-white mb-6 leading-tight text-shadow">
            Experience Paradise on Earth
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-light">
            Discover the enchanting beauty of Kashmir with our exclusive tour packages
            starting from ₹24,999 only
          </p>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-primary-300" />
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider">Duration</p>
                  <p className="text-white font-medium">4-7 Days</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary-300" />
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider">Destinations</p>
                  <p className="text-white font-medium">4+ Locations</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-primary-300" />
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider">Group Size</p>
                  <p className="text-white font-medium">2-8 People</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-8 py-4 bg-primary-600 text-white rounded-lg font-medium tracking-wide hover:bg-primary-700 transition-all flex items-center justify-center group"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 text-white rounded-lg font-medium tracking-wide backdrop-blur-sm hover:bg-white/20 transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg className="w-full h-24 text-earth-50" viewBox="0 0 1440 96" fill="currentColor">
          <path d="M0,96L1440,32L1440,96L0,96Z"></path>
        </svg>
      </div>

      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}