import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'general',
      message: '',
    });
    setIsSubmitting(false);
  };

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

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brown-800 mb-6 sm:mb-8">
                Get Your Quote
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brown-800 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="Your full name"
                      aria-describedby="name-error"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brown-800 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="your@email.com"
                      aria-describedby="email-error"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brown-800 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-brown-800 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="wedding">Wedding Embroidery</option>
                      <option value="corporate">Corporate/Business</option>
                      <option value="personal">Personal Items</option>
                      <option value="sports">Sports Team/Organization</option>
                      <option value="memorial">Memorial Piece</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brown-800 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                    placeholder="Please describe your embroidery project in detail. Include information about the items to be embroidered, design ideas, quantities, timeline, and any specific requirements."
                    aria-describedby="message-error"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brown-700 text-cream px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-brown-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base"
                  aria-describedby={isSubmitting ? "submitting-status" : undefined}
                >
                  {isSubmitting ? (
                    <span id="submitting-status">Sending...</span>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-scale-in mt-12 lg:mt-0">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brown-800 mb-6 sm:mb-8">
                Get in Touch
              </h2>
              
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
                  <div className="p-3 bg-plumeria-600 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-cream" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-brown-800 mb-2">Phone</h3>
                    <p className="text-sm sm:text-base text-brown-600">
                      <a href="tel:+1234567890" className="hover:text-brown-800 transition-colors duration-200">
                        (615) 555-COSSA<br />
                        (615) 555-2677
                      </a>
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
              <div className="mt-8 sm:mt-12 bg-gradient-to-br from-brown-50 to-accent-50 rounded-2xl p-6 sm:p-8 border border-brown-100">
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
      </section>
    </div>
  );
};

export default Contact;