import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Award } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <img src="/cossa-simple-logo.webp" alt="Custom" className="h-8 w-8 rounded-full object-cover" />,
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
    <div className="animate-fade-in" itemScope itemType="https://schema.org/LocalBusiness">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cream via-brown-50 to-accent-50 pt-20 pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brown-900/5 to-brown-800/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" role="banner">
          <div className="text-center animate-slide-up">
            <div className="flex justify-center items-center mb-6 sm:mb-8">
              <div className="relative">
                <img
                  src="/cossa-main-logo.webp"
                  alt="Cossa Custom Embroidery Logo - Premium embroidery services in Franklin Tennessee"
                  className="h-28 sm:h-36 w-auto object-contain object-center animate-float shadow-2xl rounded-lg mx-auto"
                  itemProp="logo"
                />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-brown-800 mb-4 sm:mb-6" itemProp="name">
              <span itemProp="name">Cossa</span>
              <span className="block text-xl sm:text-2xl md:text-3xl text-plumeria-600 mt-2 font-normal italic">
                Passion To Live
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-brown-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4" itemProp="description">
              Bringing your vision to life through the timeless art of embroidery.
              Based in Franklin, Tennessee, we create beautiful, personalized pieces
              that tell your story with passion and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link
                to="/portfolio"
                className="w-full sm:w-auto bg-brown-700 text-cream px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-brown-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                aria-label="View our embroidery portfolio"
              >
                <span>View Our Work</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto border-2 border-brown-700 text-brown-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-brown-700 hover:text-cream transition-all duration-300 transform hover:scale-105 text-center"
                aria-label="Get a quote for custom embroidery"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none" aria-hidden="true">
          <Star className="h-16 w-16 text-plumeria-500 animate-float" />
        </div>
        <div className="absolute bottom-20 right-4 sm:right-10 opacity-20" aria-hidden="true">
          <Star className="h-12 w-12 text-accent-500 animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white" role="main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brown-800 mb-4">
              Why Choose Cossa?
            </h2>
            <p className="text-lg sm:text-xl text-brown-600 max-w-2xl mx-auto px-4">
              We combine traditional craftsmanship with modern techniques to create
              embroidery that exceeds expectations and captures your unique story.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-cream to-brown-50 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-scale-in border border-brown-100"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brown-700 text-cream rounded-full mb-6 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-brown-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-brown-600 text-base sm:text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-brown-700 to-brown-800 relative overflow-hidden" role="complementary">
        <div className="absolute inset-0 bg-gradient-to-r from-plumeria-900/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-cream mb-4 sm:mb-6">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-lg sm:text-xl text-cream/90 mb-6 sm:mb-8 leading-relaxed">
            Let's discuss your custom embroidery project. Every piece tells a story –
            what's yours? From wedding keepsakes to corporate branding, we bring passion to every stitch.
          </p>
          <Link
            to="/contact"
            className="bg-cream text-brown-700 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-brown-50 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 shadow-lg"
            aria-label="Start your custom embroidery project"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Hidden structured data */}
      <div style={{ display: 'none' }}>
        <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="addressLocality">Franklin</span>,
          <span itemProp="addressRegion">TN</span>
        </span>
        <span itemProp="telephone">(615) 555-2677</span>
        <span itemProp="email">info@cossaembroidery.com</span>
      </div>
    </div>
  );
};

export default Home;