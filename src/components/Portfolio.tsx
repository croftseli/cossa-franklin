import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Real portfolio items using the provided images with SEO-optimized filenames
  const portfolioItems = [
    {
      id: 1,
      title: 'Custom Name Embroidery - Adeline',
      category: 'Personal',
      image: '/custom-name-embroidery-adeline.webp',
      description: 'Beautiful custom name embroidery with decorative stitching and color gradients.',
      alt: 'Custom embroidered name Adeline on white fabric with pink and brown thread colors'
    },
    {
      id: 2,
      title: 'Anime Character Design',
      category: 'Custom Art',
      image: '/anime-character-embroidery-sweatshirt.webp',
      description: 'Detailed anime character embroidery on apparel with precise line work.',
      alt: 'Anime character embroidery design on white sweatshirt featuring detailed black line art'
    },
    {
      id: 3,
      title: 'Baby Onesie - Darling with Puppy',
      category: 'Baby Items',
      image: '/baby-onesie-darling-puppy-embroidery.webp',
      description: 'Adorable baby onesie featuring custom puppy design with name embroidery.',
      alt: 'White baby onesie with embroidered puppy design and Darling name in pink and brown thread'
    },
    {
      id: 4,
      title: 'Personalized Baby Bibs Set',
      category: 'Baby Items',
      image: '/personalized-baby-bibs-cora-embroidery.webp',
      description: 'Set of custom embroidered baby bibs with "Cora" name in different colors.',
      alt: 'Three baby bibs in mint green, pink, and yellow with Cora name embroidered in matching colors'
    },
    {
      id: 5,
      title: 'MAMA Sweatshirt with Bow',
      category: 'Apparel',
      image: '/mama-sweatshirt-bow-embroidery.webp',
      description: 'Stylish "MAMA" embroidery on gray sweatshirt with decorative pink bow accent.',
      alt: 'Gray sweatshirt with pink MAMA embroidery featuring decorative bow design underneath'
    },
    {
      id: 6,
      title: 'Patchwork Heart Hoodie',
      category: 'Apparel',
      image: '/patchwork-heart-hoodie-embroidery.webp',
      description: 'Creative patchwork heart design with mixed fabric patterns and colors.',
      alt: 'Gray hoodie with large patchwork heart embroidery in pink, purple, and patterned fabrics'
    },
    {
      id: 7,
      title: 'Good Night My Love Pillowcase',
      category: 'Home Decor',
      image: '/good-night-my-love-pillowcase-embroidery.webp',
      description: 'Romantic embroidered pillowcase with elegant script lettering.',
      alt: 'White pillowcase with Good Night My Love embroidered in red script lettering'
    },
    {
      id: 8,
      title: 'DARLIN Name Embroidery',
      category: 'Personal',
      image: '/darlin-name-embroidery-sweatshirt.webp',
      description: 'Bold letter embroidery with varied textures and colors for each letter.',
      alt: 'Gray sweatshirt with DARLIN embroidered in different colored and textured letters'
    },
    {
      id: 9,
      title: 'WORLD Baby Onesie',
      category: 'Baby Items',
      image: '/world-baby-onesie-embroidery.webp',
      description: 'Cute baby onesie with "WORLD" embroidery in earth-tone colors.',
      alt: 'White baby onesie with WORLD embroidered in green and brown letters'
    },
    {
      id: 10,
      title: 'Nathaniel Tractor Design (In Progress)',
      category: 'Custom Art',
      image: '/nathaniel-tractor-embroidery-in-progress.webp',
      description: 'Work-in-progress shot of custom tractor embroidery with name.',
      alt: 'Embroidery hoop showing green and yellow tractor design with Nathaniel name being stitched'
    },
  ];

  // Extract unique categories from portfolio items

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
      <section className="bg-gradient-to-br from-accent-50 via-cream to-brown-50 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-brown-800 mb-4 sm:mb-6 animate-slide-up">
            Our Portfolio
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-brown-700 leading-relaxed animate-slide-up px-4">
            A showcase of our custom embroidery work and artistic craftsmanship
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-8 sm:py-12 bg-white border-b border-brown-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${selectedCategory === category
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
      <section className="py-12 sm:py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
                aria-label={`View ${item.title} in detail`}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 border border-brown-100">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-xs sm:text-sm opacity-90">{item.description}</p>
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
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeLightbox}
              className="absolute -top-8 sm:-top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 p-2"
              aria-label="Close image viewer"
            >
              <X className="h-8 w-8" />
            </button>

            <div className="relative bg-white rounded-lg overflow-hidden">
              <img
                src={filteredItems[selectedImage].image}
                alt={filteredItems[selectedImage].alt}
                className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] object-contain"
              />
              <div className="p-4 sm:p-6">
                <h3 id="lightbox-title" className="text-xl sm:text-2xl font-serif font-bold text-brown-800 mb-2">
                  {filteredItems[selectedImage].title}
                </h3>
                <p className="text-sm sm:text-base text-brown-600 mb-3">
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
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full transition-all duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full transition-all duration-200"
              aria-label="Next image"
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