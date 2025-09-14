import React, { useState, useEffect } from 'react';

const ExpertiseSection = () => {
  const baseUrl = "https://www.tilakstonearts.com";
  
  const images = [
    { id: 1, src: "/_next/static/media/experise2.342bc3db.webp" },
    { id: 2, src: "/_next/static/media/experise3.798e9f2a.webp" },
    { id: 3, src: "/_next/static/media/experise5.837b2beb.webp" },
    { id: 4, src: "/_next/static/media/experise6.42770a95.webp" },
    { id: 5, src: "/_next/static/media/experise7.9021fb8a.webp" },
    { id: 6, src: "/_next/static/media/experise8.0df1129e.webp" },
    { id: 7, src: "/_next/static/media/experise9.e9c05c88.webp" },
    { id: 8, src: "/_next/static/media/experise10.d1364fcd.webp" },
    { id: 9, src: "/_next/static/media/experise11.ef143a15.webp" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Quote Section */}
        <div className="py-8 bg-[#f8f8f8] rounded-lg mb-12">
          <div className="text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto px-4">
              At Tilak Stone Arts, we recognize that a Jain pooja room is more than a part of your home—it's a sacred space where values and traditions are celebrated. Our designs are deeply rooted in the Jain philosophy of peace and enlightenment. Each project is approached with a reverence for the Jain way of life, ensuring that your pooja room is not only beautiful but also spiritually resonant.
            </p>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="pt-8">
          <h6 className="text-lg font-semibold text-gray-800 mb-8 text-center md:text-left">
            Expertise in Jain Traditions
          </h6>
          
          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-row gap-8">
            {/* Left Column - Auto-changing Image */}
            <div className="w-1/2">
              <div className="h-[500px] bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <div 
                  className="w-full h-full bg-cover bg-center transition-opacity duration-1000"
                  style={{ backgroundImage: `url(${baseUrl}${images[currentImageIndex].src})` }}
                ></div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="w-1/2">
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our artisans are well-versed in the rich iconography specific to Jainism. From the intricate carvings of the Tirthankaras to the symbolic representations of the Astha Mangal, we ensure that every element of your pooja room is authentic and appropriate. Our commitment extends to using materials and methods that align with Jain values, emphasizing non-violence and purity.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Big Image */}
            <div className="h-64 bg-gray-100 rounded-lg overflow-hidden shadow-md mb-4">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${baseUrl}${images[0].src})` }}
              ></div>
            </div>
            
            {/* Three Thumbnail Images */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {images.slice(1, 4).map((image) => (
                <div 
                  key={image.id}
                  className="h-24 bg-gray-100 rounded-md overflow-hidden shadow-sm"
                >
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${baseUrl}${image.src})` }}
                  ></div>
                </div>
              ))}
            </div>
            
            {/* Content Text */}
            <div>
              <p className="text-gray-700 leading-relaxed">
                Our artisans are well-versed in the rich iconography specific to Jainism. From the intricate carvings of the Tirthankaras to the symbolic representations of the Astha Mangal, we ensure that every element of your pooja room is authentic and appropriate. Our commitment extends to using materials and methods that align with Jain values, emphasizing non-violence and purity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;