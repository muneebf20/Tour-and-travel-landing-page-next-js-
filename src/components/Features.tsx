import React from 'react';
import { Ship, Home, Mountain, Sun } from 'lucide-react';

const features = [
  {
    icon: Ship,
    title: 'Shikara Ride on Dal Lake',
    description: 'Experience the serenity of Dal Lake on traditional wooden boats'
  },
  {
    icon: Home,
    title: 'Luxury Houseboats',
    description: 'Stay in traditional Kashmiri houseboats with modern amenities'
  },
  {
    icon: Mountain,
    title: 'Mountain Adventures',
    description: 'Explore snow-capped peaks and scenic hiking trails'
  },
  {
    icon: Sun,
    title: 'Mughal Gardens',
    description: 'Visit historic gardens with stunning architecture and landscapes'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience Kashmir
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes Kashmir truly special
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}