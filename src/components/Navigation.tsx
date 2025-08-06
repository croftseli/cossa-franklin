import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-cream/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-brown-200" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-4 group" aria-label="Cossa Custom Embroidery Home">
            <div className="relative">
              <img
                src="/cossa-simple-logo.webp"
                alt="Cossa Custom Embroidery Logo"
                className="h-10 sm:h-12 w-10 sm:w-12 object-contain rounded-full shadow-md group-hover:shadow-lg transition-all duration-300"
              />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-serif font-bold text-brown-800">Cossa</h1>
              <p className="text-xs text-brown-600 font-medium hidden sm:block">Custom Embroidery</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 lg:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm lg:text-base ${isActive(item.path)
                  ? 'text-brown-800 bg-brown-100 shadow-sm'
                  : 'text-brown-700 hover:text-brown-800 hover:bg-brown-50'
                  }`}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-brown-700 hover:text-brown-800 hover:bg-brown-50 transition-colors duration-300"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-cream border-t border-brown-200">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-lg font-medium transition-all duration-300 ${isActive(item.path)
                    ? 'text-brown-800 bg-brown-100'
                    : 'text-brown-700 hover:text-brown-800 hover:bg-brown-50'
                    }`}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;