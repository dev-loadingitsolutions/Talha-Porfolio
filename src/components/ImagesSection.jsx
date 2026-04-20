import React from 'react';

const ImagesSection = () => {
  const images = [
    'https://framerusercontent.com/images/YFEug273GEkHZyNCjYQ7T98qhzQ.png',
    'https://framerusercontent.com/images/UnIJrd9Y024wX63FjpaYUSQaq8.png',
    'https://framerusercontent.com/images/YFEug273GEkHZyNCjYQ7T98qhzQ.png',
    'https://framerusercontent.com/images/UnIJrd9Y024wX63FjpaYUSQaq8.png',
    'https://framerusercontent.com/images/YFEug273GEkHZyNCjYQ7T98qhzQ.png',
    'https://framerusercontent.com/images/UnIJrd9Y024wX63FjpaYUSQaq8.png',
    'https://framerusercontent.com/images/YFEug273GEkHZyNCjYQ7T98qhzQ.png',
    'https://framerusercontent.com/images/UnIJrd9Y024wX63FjpaYUSQaq8.png',
  ];

  return (
    <section className="ImageMobile py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image}
                  alt={`Work sample ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-lg font-semibold mb-2">Project {index + 1}</h3>
                  <p className="text-sm opacity-90">View Details</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling indicator */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-gray-500">
            <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
            <div className="w-8 h-1 bg-orange-500 rounded-full"></div>
            <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
          </div>
          <p className="text-sm text-gray-400 mt-2">Scroll to see more work</p>
        </div>
      </div>
    </section>
  );
};

export default ImagesSection;