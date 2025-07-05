import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder images from Pexels - using embroidery/textile related images
  const portfolioItems = [
    {
      id: 1,
      title: 'Custom Wedding Monogram',
      category: 'Wedding',
      image: 'https://images.pexels.com/photos/6069066/pexels-photo-6069066.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Elegant monogram design for wedding ceremony and reception decor.',
    },
    {
      id: 2,
      title: 'Corporate Logo Embroidery',
      category: 'Corporate',
      image: 'https://images.pexels.com/photos/7658355/pexels-photo-7658355.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional logo embroidery for company uniforms and promotional items.',
    },
    
    {
      id: 3,
      title: 'Floral Design Collection',
      category: 'Decorative',
      image: 'https://images.pexels.com/photos/6621183/pexels-photo-6621183.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Beautiful floral patterns for home decor and personal accessories.',
    },
    {
      id: 4,
      title: 'Memorial Tribute Piece',
      category: 'Memorial',
      image: 'https://images.pexels.com/photos/8111809/pexels-photo-8111809.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Heartfelt memorial embroidery honoring a loved one\'s memory.',
    },
    {
      id: 5,
      title: 'Personal Monogram Set',
      category: 'Personal',
      image: 'https://images.pexels.com/photos/6069439/pexels-photo-6069439.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Personalized monograms for towels, linens, and accessories.',
    },
    {
      id: 6,
      title: 'Vintage-Style Logo',
      category: 'Corporate',
      image: 'https://images.pexels.com/photos/7989737/pexels-photo-7989737.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Vintage-inspired logo design with traditional embroidery techniques.',
    },
    {
      id: 7,
      title: 'Holiday Decoration Set',
      category: 'Seasonal',
      image: 'https://images.pexels.com/photos/6069132/pexels-photo-6069132.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Festive holiday embroidery designs for seasonal decorations.',
    },
    {
      id: 8,
      title: 'Custom Pet Portrait',
      category: 'Personal',
      image: 'https://images.pexels.com/photos/7989628/pexels-photo-7989628.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Detailed pet portrait embroidery capturing beloved companions.',
    },
  ];

  const categories = ['All', ...Array.from(new Set(portfolioItems.map(item => item.category)))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = selectedImage;
    const maxIndex = filteredItems.length - 1;
    
    if (direction === 'prev') {
      setSelectedImage(currentIndex === 0 ? maxIndex : currentIndex - 1);
    } else {
      setSelectedImage(currentIndex === maxIndex ? 0 : currentIndex + 1);
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-50 via-cream to-brown-50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-brown-800 mb-6 animate-slide-up">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-brown-700 leading-relaxed animate-slide-up">
            A showcase of our custom embroidery work and artistic craftsmanship
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-12 bg-white border-b border-brown-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-brown-700 text-cream shadow-lg'
                    : 'bg-brown-100 text-brown-700 hover:bg-brown-200 hover:text-brown-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 border border-brown-100">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                      <div className="flex items-center mt-3">
                        <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="relative bg-white rounded-lg overflow-hidden">
              <img
                src={filteredItems[selectedImage].image}
                alt={filteredItems[selectedImage].title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-brown-800 mb-2">
                  {filteredItems[selectedImage].title}
                </h3>
                <p className="text-brown-600 mb-3">
                  {filteredItems[selectedImage].description}
                </p>
                <span className="inline-block bg-brown-100 text-brown-700 px-3 py-1 rounded-full text-sm font-medium">
                  {filteredItems[selectedImage].category}
                </span>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;