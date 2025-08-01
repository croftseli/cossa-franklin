import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brown-50 via-cream to-accent-50 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-brown-800 mb-4 sm:mb-6 animate-slide-up">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-brown-700 leading-relaxed animate-slide-up px-4">
            Ready to start your custom embroidery project? Let's discuss your vision
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl animate-scale-in mt-12 lg:mt-0">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brown-800 mb-6 sm:mb-8 text-center">
                Get in Touch
              </h2>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Contact Details */}
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-brown-700 rounded-full flex-shrink-0">
                      <MapPin className="h-6 w-6 text-cream" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-brown-800 mb-2">Location</h3>
                      <p className="text-sm sm:text-base text-brown-600">
                        Franklin, Tennessee<br />
                        Serving Middle Tennessee and beyond
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent-600 rounded-full flex-shrink-0">
                      <Mail className="h-6 w-6 text-cream" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-brown-800 mb-2">Email</h3>
                      <p className="text-sm sm:text-base text-brown-600">
                        <a href="mailto:info@cossaembroidery.com" className="hover:text-brown-800 transition-colors duration-200">
                          info@cossaembroidery.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-brown-800 rounded-full flex-shrink-0">
                      <Clock className="h-6 w-6 text-cream" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-brown-800 mb-2">Response Time</h3>
                      <p className="text-sm sm:text-base text-brown-600">
                        We typically respond to inquiries within 24 hours.<br />
                        Rush projects may be available upon request.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-8 md:mt-0 bg-gradient-to-br from-brown-50 to-accent-50 rounded-2xl p-6 sm:p-8 border border-brown-100">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-brown-800 mb-4">
                    What to Include in Your Inquiry
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-brown-600">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-brown-700 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Type of items to be embroidered</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-brown-700 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Design ideas or existing artwork</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-brown-700 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Quantity needed</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-brown-700 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Timeline for completion</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-brown-700 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Budget range (if applicable)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;