import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Wall Cladding",
      image: "/_next/static/media/icon1.53e2c26d.png"
    },
    {
      id: 2,
      title: "Floor Inlay",
      image: "/_next/static/media/icon6.b8508dfc.png"
    },
    {
      id: 3,
      title: "Virtual Tour",
      image: "/_next/static/media/icon3.7b73a018.png"
    },
    {
      id: 4,
      title: "Custom Design",
      image: "/_next/static/media/icon2.70a949d6.png"
    },
    {
      id: 5,
      title: "3D visualisation",
      image: "/_next/static/media/icon4.c225f555.png"
    },
    {
      id: 6,
      title: "Project Tracking",
      image: "/_next/static/media/icon5.207ee35b.png"
    }
  ];

  const baseUrl = "https://www.tilakstonearts.com";

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="row mb-12">
          <div className="col-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">We offer Unparalleled Services</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Discover our premium range of services designed to transform your spaces with elegance and precision.
            </p>
          </div>
        </div>
        
        {/* Desktop Grid (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-72 justify-center border border-gray-100">
              <div 
                className="w-24 h-24 bg-contain bg-center bg-no-repeat mb-6"
                style={{ backgroundImage: `url(${baseUrl}${service.image})` }}
              ></div>
              <p className="text-xl font-semibold text-gray-800">{service.title}</p>
            </div>
          ))}
        </div>
        
        {/* Mobile Scrollable (shown on mobile) */}
        <div className="md:hidden mt-8 overflow-x-auto whitespace-nowrap py-4 px-2">
          <div className="inline-flex space-x-6">
            {services.map((service) => (
              <div key={service.id} className="inline-flex flex-col items-center p-6 rounded-xl shadow-lg min-w-[200px] h-64 justify-center border border-gray-100">
                <div 
                  className="w-20 h-20 bg-contain bg-center bg-no-repeat mb-5"
                  style={{ backgroundImage: `url(${baseUrl}${service.image})` }}
                ></div>
                <p className="text-lg font-semibold text-gray-800">{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;