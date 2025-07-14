import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brown-900 text-cream" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="relative">
                <img
                  src="/cossa-simple-logo.webp"
                  alt="Cossa Custom Embroidery Logo"
                  className="h-10 sm:h-12 w-10 sm:w-12 object-contain rounded-full shadow-md"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold">Cossa</h3>
                <p className="text-xs sm:text-sm text-brown-300">Custom Embroidery</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-brown-200 leading-relaxed mb-4 sm:mb-6 max-w-md">
              Creating beautiful, personalized embroidery that tells your story.
              Based in Franklin, Tennessee, we serve clients throughout Middle Tennessee
              and beyond with exceptional custom embroidery services.
            </p>
            <div className="text-xs sm:text-sm text-brown-400">
              © 2024 Cossa Custom Embroidery. All rights reserved.
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 sm:mt-0">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Navigation</h4>
            <nav className="space-y-2 sm:space-y-3">
              <Link
                to="/"
                className="block text-sm sm:text-base text-brown-200 hover:text-cream transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-sm sm:text-base text-brown-200 hover:text-cream transition-colors duration-200"
              >
                About
              </Link>
              <Link
                to="/portfolio"
                className="block text-sm sm:text-base text-brown-200 hover:text-cream transition-colors duration-200"
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="block text-sm sm:text-base text-brown-200 hover:text-cream transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="mt-8 sm:mt-0">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-plumeria-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm sm:text-base text-brown-200">
                  Franklin, Tennessee<br />
                  Middle Tennessee
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-plumeria-400 flex-shrink-0" />
                <a
                  href="tel:+16155552677"
                  className="text-sm sm:text-base text-brown-200 hover:text-cream transition-colors duration-200"
                >
                  (615) 555-2677
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-plumeria-400 flex-shrink-0" />
                <a
                  href="mailto:info@cossaembroidery.com"
                  className="text-sm sm:text-base text-brown-200 hover:text-cream transition-colors duration-200"
                >
                  info@cossaembroidery.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-brown-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-brown-400 text-xs sm:text-sm">
            Made with passion in Franklin, Tennessee • Custom embroidery services for all occasions • Website by{' '}
            <a
              href="https://unitywall.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brown-200 hover:text-cream transition-colors duration-200"
            >
              UnityWall
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;