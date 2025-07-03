import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brown-50 via-cream to-accent-50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-brown-800 mb-6 animate-slide-up">
            About Cossa
          </h1>
          <p className="text-xl md:text-2xl text-brown-700 leading-relaxed animate-slide-up">
            Where tradition meets innovation in the art of custom embroidery
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-serif font-bold text-brown-800 mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-brown-700 leading-relaxed">
                <p>
                  Based in the charming town of Franklin, Tennessee, Cossa was born 
                  from a passion for creating beautiful, personalized embroidery that 
                  tells your unique story. We believe that every thread has the power 
                  to transform ordinary items into extraordinary keepsakes.
                </p>
                <p>
                  Our approach is simple: we listen to your vision, understand your 
                  needs, and craft custom embroidery that exceeds your expectations. 
                  Whether it's a corporate logo, wedding gift, or personal memento, 
                  we treat every project with the same dedication to quality and 
                  attention to detail.
                </p>
                <p>
                  What sets us apart is our commitment to custom, made-to-order work. 
                  We don't believe in one-size-fits-all solutions. Every piece is 
                  carefully designed and meticulously crafted to reflect your individual 
                  style and requirements, bringing passion to every stitch.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-brown-50 to-accent-50 rounded-3xl p-8 animate-scale-in border border-brown-100">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brown-700 rounded-full">
                    <MapPin className="h-6 w-6 text-cream" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brown-800 mb-2">
                      Franklin, Tennessee
                    </h3>
                    <p className="text-brown-600">
                      Proudly serving Middle Tennessee and beyond with exceptional 
                      custom embroidery services.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-plumeria-600 rounded-full">
                    <Clock className="h-6 w-6 text-cream" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brown-800 mb-2">
                      Made-to-Order
                    </h3>
                    <p className="text-brown-600">
                      Every piece is custom crafted specifically for you. No mass 
                      production, just personalized attention to detail.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent-600 rounded-full">
                    <Users className="h-6 w-6 text-cream" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brown-800 mb-2">
                      Personal Service
                    </h3>
                    <p className="text-brown-600">
                      We work closely with each client to ensure your vision becomes 
                      a beautiful reality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-800 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-brown-600 max-w-3xl mx-auto leading-relaxed">
              Since every project is custom, we don't have a fixed price sheet. 
              Instead, we work with you to understand your needs and provide 
              personalized pricing that reflects the scope and complexity of your vision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Corporate Logos & Branding',
              'Wedding & Event Embroidery',
              'Personal Monograms',
              'Team & Sports Apparel',
              'Memorial Pieces',
              'Custom Artwork Translation',
              'Promotional Items',
              'Gift Personalization',
              'Heirloom Restoration'
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-scale-in border border-brown-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-brown-800 mb-2">
                  {service}
                </h3>
                <p className="text-brown-600">
                  Custom designed and crafted to your specifications
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brown-700 to-brown-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-6">
            Let's Bring Your Vision to Life
          </h2>
          <p className="text-xl text-cream/90 mb-8 leading-relaxed">
            Browse our portfolio to see examples of our work, or contact us to 
            discuss your custom embroidery project and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/portfolio"
              className="bg-cream text-brown-700 px-8 py-4 rounded-full font-semibold hover:bg-brown-50 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>View Portfolio</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-cream text-cream px-8 py-4 rounded-full font-semibold hover:bg-cream hover:text-brown-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;