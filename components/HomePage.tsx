import React from 'react';
import { Link } from 'react-router-dom';

const highlights = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: 'Precision Machining & Reverse Engineering',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Wide Range of Industrial Fittings & Flanges',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3" />
      </svg>
    ),
    title: 'Global Standard Compliance',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12h-5" />
      </svg>
    ),
    title: 'Timely Delivery & Proven Reliability',
  },
];


const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white py-20 md:py-32" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092921462-63f1c1ae3b09?q=80&w=2070&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Engineered for Excellence.</h1>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">Built for Performance.</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200">
            Manufacturing precision machined parts, socket weld fittings, flanges, valves, and assemblies — with global quality standards.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/products" className="bg-brand-blue hover:opacity-90 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              View Products
            </Link>
            <Link to="/contact" className="bg-brand-yellow hover:opacity-90 text-brand-dark font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-brand-dark mb-2">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;