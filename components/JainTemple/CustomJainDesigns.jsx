import React from 'react';

const CustomJainDesigns = () => {
  const baseUrl = "https://www.tilakstonearts.com";
  
  const specializations = [
    {
      id: 1,
      title: "Astha Mangal and Swapan Designs",
      description: "Incorporate the essential symbols and dreams into your sacred space.",
      icon: `${baseUrl}/_next/static/media/icon-astha-mangal.svg` // Replace with actual path
    },
    {
      id: 2,
      title: "Sammed Shikhar Bhav Panels",
      description: "Celebrate the path to enlightenment with intricately designed panels.",
      icon: `${baseUrl}/_next/static/media/icon-sammed-shikhar.svg` // Replace with actual path
    },
    {
      id: 3,
      title: "Murti Placement",
      description: "Ensure the ideal placement of idols in accordance with Jain traditions for an auspicious setup.",
      icon: `${baseUrl}/_next/static/media/icon-murti-placement.svg` // Replace with actual path
    },
    {
      id: 4,
      title: "Detailed Carvings",
      description: "From traditional Jain carvings to modern interpretations, our artisans are experts in carving the age old traditional carvings for your dream temple.",
      icon: `${baseUrl}/_next/static/media/icon-carvings.svg` // Replace with actual path
    },
    {
      id: 5,
      title: "Storage",
      description: "We provide storage options for your dream temple.",
      icon: `${baseUrl}/_next/static/media/icon-storage.svg` // Replace with actual path
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-medium mb-4 text-2xl md:text-3xl text-gray-800">
          Custom Jain Temple Designs
        </h2>
        <p className="text-center mb-10 text-lg text-gray-600 max-w-4xl mx-auto">
          Whether you're envisioning a dedicated wall for your daily prayers, a special temple within your home, or an expansive pooja room, our expert designers are here to guide you.
        </p>
        
        {/* Desktop Grid (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {specializations.map((item) => (
            <div key={item.id} className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center h-full">
              <div 
                className="w-12 h-12 bg-contain bg-center bg-no-repeat mb-4"
                style={{ backgroundImage: `url(${item.icon})` }}
              ></div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        
        {/* Mobile Scrollable (shown on mobile) */}
        <div className="md:hidden overflow-x-auto whitespace-nowrap py-4 px-2">
          <div className="inline-flex space-x-4">
            {specializations.map((item) => (
              <div key={item.id} className="inline-flex flex-col items-center p-5 border border-gray-200 rounded-lg shadow-sm min-w-[260px] text-center">
                <div 
                  className="w-10 h-10 bg-contain bg-center bg-no-repeat mb-3"
                  style={{ backgroundImage: `url(${item.icon})` }}
                ></div>
                <h3 className="text-base font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomJainDesigns;