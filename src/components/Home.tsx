import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Award } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <img src="/lone C.jpeg" alt="Custom" className="h-8 w-8 rounded-full object-cover" />,
      title: 'Custom Designs',
      description: 'Every piece is uniquely crafted to your specifications with passion and precision',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Attention to Detail',
      description: 'Meticulous craftsmanship in every stitch, bringing your vision to life',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Premium Quality',
      description: 'Using only the finest threads and materials for lasting beauty',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cream via-brown-50 to-accent-50 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brown-900/5 to-brown-800/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-slide-up">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img 
                  src="/Cossa Main_2.jpeg" 
                  alt="Cossa Custom Embroidery" 
                  className="h-32 w-auto object-contain animate-float shadow-2xl rounded-lg"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brown-800 mb-6">
              Cossa
              <span className="block text-2xl md:text-3xl text-plumeria-600 mt-2 font-normal italic">
                Passion To Live
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-brown-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Bringing your vision to life through the timeless art of embroidery. 
              Based in Franklin, Tennessee, we create beautiful, personalized pieces 
              that tell your story with passion and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/portfolio"
                className="bg-brown-700 text-cream px-8 py-4 rounded-full font-semibold hover:bg-brown-800 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
              >
                <span>View Our Work</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-brown-700 text-brown-700 px-8 py-4 rounded-full font-semibold hover:bg-brown-700 hover:text-cream transition-all duration-300 transform hover:scale-105"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Star className="h-16 w-16 text-plumeria-500 animate-float" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Star className="h-12 w-12 text-accent-500 animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brown-800 mb-4">
              Why Choose Cossa?
            </h2>
            <p className="text-xl text-brown-600 max-w-2xl mx-auto">
              We combine traditional craftsmanship with modern techniques to create 
              embroidery that exceeds expectations and captures your unique story.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-cream to-brown-50 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-scale-in border border-brown-100"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brown-700 text-cream rounded-full mb-6 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-brown-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-brown-600 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brown-700 to-brown-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-plumeria-900/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-6">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-xl text-cream/90 mb-8 leading-relaxed">
            Let's discuss your custom embroidery project. Every piece tells a story – 
            what's yours? From wedding keepsakes to corporate branding, we bring passion to every stitch.
          </p>
          <Link
            to="/contact"
            className="bg-cream text-brown-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-brown-50 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 shadow-lg"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;