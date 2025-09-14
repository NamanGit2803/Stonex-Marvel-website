import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Planning",
      image: "/_next/static/media/icon1.53e2c26d.png"
    },
    {
      id: 2,
      title: "Detailed Drawings",
      image: "/_next/static/media/icon6.b8508dfc.png"
    },
    {
      id: 3,
      title: "On Site Supervision",
      image: "/_next/static/media/icon3.7b73a018.png"
    },
    {
      id: 4,
      title: "Site Management",
      image: "/_next/static/media/icon2.70a949d6.png"
    },
    {
      id: 5,
      title: "Project Tracking",
      image: "/_next/static/media/icon4.c225f555.png"
    },
    {
      id: 6,
      title: "Timely Completion",
      image: "/_next/static/media/icon5.207ee35b.png"
    }
  ];

  const baseUrl = "https://www.tilakstonearts.com";

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-12 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">We offer Unparalleled Services</h2>
          </div>
        </div>
        
        {/* Desktop Grid (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="p-7 border border-gray-300 rounded-xl transition-all duration-500 mb-8 bg-white text-center flex flex-col items-center justify-center h-72 hover:shadow-lg hover:-translate-y-1"
            >
              <div 
                className="w-20 h-20 bg-contain bg-center bg-no-repeat mb-6"
                style={{ backgroundImage: `url(${baseUrl}${service.image})` }}
              ></div>
              <h4 className="text-xl font-semibold text-gray-800 px-2">{service.title}</h4>
            </div>
          ))}
        </div>
        
        {/* Mobile Scrollable (shown on mobile) */}
        <div className="md:hidden overflow-x-auto whitespace-nowrap py-4 px-2">
          <div className="inline-flex space-x-6">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="inline-flex flex-col items-center justify-center p-6 border border-gray-300 rounded-xl bg-white text-center min-w-[220px] h-64"
              >
                <div 
                  className="w-16 h-16 bg-contain bg-center bg-no-repeat mb-5"
                  style={{ backgroundImage: `url(${baseUrl}${service.image})` }}
                ></div>
                <h4 className="text-lg font-semibold text-gray-800 px-2">{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;