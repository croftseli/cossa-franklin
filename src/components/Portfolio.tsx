import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Real portfolio items using the provided images with SEO-optimized filenames
  const portfolioItems = [
    {
      id: 1,
      title: 'Custom Name Embroidery - Adeline',
      category: 'Baby Bibs',
      image: '/custom-name-embroidery-adeline.webp',
      description: 'Beautiful custom name embroidery with decorative stitching and color gradients.',
      alt: 'Custom embroidered name Adeline on white fabric with pink and brown thread colors'
    },
    {
      id: 2,
      title: 'Baby Onesie - Darling with Puppy',
      category: 'Baby Bibs',
      image: '/baby-onesie-darling-puppy-embroidery.webp',
      description: 'Adorable baby onesie featuring custom puppy design with name embroidery.',
      alt: 'White baby onesie with embroidered puppy design and Darling name in pink and brown thread'
    },
    {
      id: 3,
      title: 'Personalized Baby Bibs Set',
      category: 'Baby Bibs',
      image: '/personalized-baby-bibs-cora-embroidery.webp',
      description: 'Set of custom embroidered baby bibs with "Cora" name in different colors.',
      alt: 'Three baby bibs in mint green, pink, and yellow with Cora name embroidered in matching colors'
    },
    {
      id: 4,
      title: 'WORLD Baby Onesie',
      category: 'Baby Bibs',
      image: '/world-baby-onesie-embroidery.webp',
      description: 'Cute baby onesie with "WORLD" embroidery in earth-tone colors.',
      alt: 'White baby onesie with WORLD embroidered in green and brown letters'
    },
    {
      id: 5,
      title: 'Nathaniel Tractor Design',
      category: 'Baby Bibs',
      image: '/nathaniel-tractor-embroidery-in-progress.webp',
      description: 'Custom tractor embroidery with name.',
      alt: 'Embroidery hoop showing green and yellow tractor design with Nathaniel name being stitched'
    },
    {
      id: 6,
      title: 'Adorable Baby Bib',
      category: 'Baby Bibs',
      image: '/adorable-baby-bib.jpg',
      description: 'Charming custom embroidered baby bib with delicate stitching and vibrant colors. Perfect for keeping little ones clean while looking absolutely adorable!',
      alt: 'Custom embroidered baby bib with colorful thread work and decorative design'
    },
    {
      id: 7,
      title: 'Beautiful Baby Bib Trio',
      category: 'Baby Bibs',
      image: '/beautiful-baby-bib-trio.jpg',
      description: 'Beautifully crafted baby bib featuring intricate embroidery work. Made with love and attention to detail for your precious little one!',
      alt: 'Premium baby bib with detailed embroidery work and quality craftsmanship'
    },
    {
      id: 8,
      title: 'Sweet Baby Bib Creation',
      category: 'Baby Bibs',
      image: '/baby-bib-sweet.jpg',
      description: 'Delightful baby bib showcasing our signature embroidery style. Soft, comfortable, and designed to make mealtime both practical and stylish!',
      alt: 'Sweet baby bib with signature embroidery design in soft colors'
    },
    {
      id: 9,
      title: 'Mateo, Custom Winnie the Pooh Bib',
      category: 'Baby Bibs',
      image: '/custom-embroidery-1.jpg',
      description: 'Beautiful, sweet little Bib for baby Mateo. Made to order with love.',
      alt: 'Custom embroidery design for baby items with colorful thread work'
    },
    {
      id: 10,
      title: 'Hunter Baby Blue Bib',
      category: 'Baby Bibs',
      image: '/custom-embroidery-2.jpg',
      description: 'A sweet little baby blue bib custom made with love for baby Hunter',
      alt: 'Adorable baby item with custom embroidery in bright colors'
    },
    {
      id: 11,
      title: 'Sweet Baby Embroidery Creation',
      category: 'Baby Bibs',
      image: '/custom-embroidery-3.jpg',
      description: 'Delightful baby embroidery showcasing our signature craftsmanship. Soft, comfortable, and designed to make every moment special!',
      alt: 'Sweet baby item with detailed embroidery work and quality stitching'
    },
    {
      id: 12,
      title: 'Rhylan with Winnie, Tigger, and Friends Bib',
      category: 'Baby Bibs',
      image: '/custom-embroidery-4.jpg',
      description: 'One of our cutest pieces, custom made for baby Rhylan',
      alt: 'Precious baby item featuring artistic embroidery design'
    },
    {
      id: 13,
      title: 'Little Bib for Baby Elowen',
      category: 'Baby Bibs',
      image: '/custom-embroidery-5.jpg',
      description: 'A sweet bib for a sweet girl, baby Elowen! Simple and cute.',
      alt: 'Sweet baby bib with simple and cute embroidery design for baby Elowen'
    },
  ];

  // Since we only have Baby Bibs now, we don't need filtering
  const filteredItems = portfolioItems;

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
      <section className="bg-gradient-to-br from-accent-50 via-cream to-brown-50 pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-6 sm:pb-8 md:pb-12 lg:pb-20">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-brown-800 mb-2 sm:mb-3 md:mb-4 lg:mb-6 animate-slide-up leading-tight">
            Portfolio Showcase
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-brown-700 leading-relaxed animate-slide-up px-1 sm:px-2 md:px-4 max-w-3xl mx-auto">
            Samples of our custom embroidery work and artistic craftsmanship!
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer animate-scale-in w-full max-w-sm mx-auto"
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
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform group-hover:scale-[1.02] border border-brown-100 h-full flex flex-col">
                  <div className="aspect-square overflow-hidden flex-shrink-0 relative">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-900/75 via-brown-900/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                    <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 lg:p-6 text-white">
                      <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-1 sm:mb-2 line-clamp-2">{item.title}</h3>
                      <p className="text-xs opacity-90 line-clamp-2 hidden sm:block">{item.description}</p>
                      <div className="flex items-center justify-end mt-1 sm:mt-2">
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 opacity-80" />
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
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-1 sm:p-2 md:p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          onClick={closeLightbox}
        >
          <div className="relative max-w-[95vw] sm:max-w-lg md:max-w-2xl lg:max-w-4xl max-h-[95vh] w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeLightbox}
              className="absolute -top-4 sm:-top-6 md:-top-8 lg:-top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 p-1 sm:p-2 z-10 bg-black/20 rounded-full"
              aria-label="Close image viewer"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
            </button>

            <div className="relative bg-white rounded-lg md:rounded-xl overflow-hidden shadow-2xl">
              <img
                src={filteredItems[selectedImage].image}
                alt={filteredItems[selectedImage].alt}
                className="w-full h-auto max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[70vh] object-contain bg-gray-50"
              />
              <div className="p-2 sm:p-3 md:p-4 lg:p-6">
                <h3 id="lightbox-title" className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-serif font-bold text-brown-800 mb-1 sm:mb-2">
                  {filteredItems[selectedImage].title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-brown-600 leading-relaxed">
                  {filteredItems[selectedImage].description}
                </p>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-1.5 sm:p-2 md:p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-1.5 sm:p-2 md:p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;