import React, { useState } from 'react';
import { MapPin, Calendar, Users, ArrowRight, Clock, MessageCircle } from 'lucide-react';
import BookingForm from './BookingForm';
import ItineraryModal from './ItineraryModal';

// ... packages array remains the same ...

export default function Packages() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isItineraryOpen, setIsItineraryOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleBookNow = (pkg) => {
    setSelectedPackage(pkg);
    setIsBookingOpen(true);
  };

  const handleViewItinerary = (pkg) => {
    setSelectedPackage(pkg);
    setIsItineraryOpen(true);
  };

  const handleWhatsApp = (pkg) => {
    const message = encodeURIComponent(`Hi! I'm interested in the ${pkg.title} (${pkg.duration}) package.`);
    window.open(`https://wa.me/911234567890?text=${message}`, '_blank');
  };

  return (
    <section className="py-12 bg-gray-50" id="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Exclusive Kashmir Tour Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated packages for the perfect Kashmir experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="relative h-56">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="font-bold text-primary-600">{pkg.price}</span>
                  <span className="text-gray-600 text-sm">/person</span>
                </div>
                <button
                  onClick={() => handleWhatsApp(pkg)}
                  className="absolute top-4 left-4 flex items-center space-x-2 bg-green-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Inquiry</span>
                </button>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{pkg.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-2 text-primary-500" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-primary-500" />
                    <span>{pkg.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Users className="h-4 w-4 mr-2 text-primary-500" />
                    <span>{pkg.groupSize} people</span>
                  </div>
                </div>

                <div className="border-t pt-4 mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <button
                    onClick={() => handleViewItinerary(pkg)}
                    className="px-3 py-2 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors text-sm font-medium"
                  >
                    View Itinerary
                  </button>
                  <button
                    onClick={() => handleBookNow(pkg)}
                    className="px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        packageDetails={selectedPackage}
      />

      <ItineraryModal
        isOpen={isItineraryOpen}
        onClose={() => setIsItineraryOpen(false)}
        packageDetails={selectedPackage}
      />
    </section>
  );
}