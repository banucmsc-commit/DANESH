import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Capabilities', path: '/capabilities' },
  { name: 'Technology', path: '/technology' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkStyle = {
    color: '#0067C5',
    fontWeight: '600',
    borderBottom: '2px solid #FFC400'
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes menu-glow {
            0% { box-shadow: 0 0 0 0 rgba(255, 183, 143, 0.4); }
            50% { box-shadow: 0 0 0 4px rgba(255, 183, 143, 0); }
            100% { box-shadow: 0 0 0 0 rgba(255, 183, 143, 0); }
          }
          .menu-item-hover {
            position: relative;
            overflow: hidden;
          }
          .menu-item-hover::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 183, 143, 0.3), transparent);
            transition: left 0.5s;
          }
          .menu-item-hover:hover::before {
            left: 100%;
          }
          .menu-item-hover:hover {
            animation: menu-glow 1.5s infinite;
          }
        `
      }} />
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-brand-blue hover:scale-105 transition-transform duration-300">
          Danesh Industries
        </NavLink>
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="menu-item-hover text-brand-dark hover:text-white hover:bg-gradient-to-r hover:from-orange-300 hover:to-pink-300 hover:bg-opacity-90 hover:scale-110 hover:shadow-lg transition-all duration-500 pb-1 text-sm px-3 py-2 rounded-lg font-medium border border-transparent hover:border-orange-400"
              style={({ isActive }) => (isActive ? activeLinkStyle : {})}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-dark focus:outline-none hover:text-brand-blue transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="menu-item-hover text-brand-dark hover:text-white hover:bg-gradient-to-r hover:from-orange-300 hover:to-pink-300 hover:bg-opacity-90 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-500 hover:scale-105 hover:shadow-md border border-transparent hover:border-orange-400 w-full text-center"
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;