import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      title: "Turnkey Projects",
      image: "/_next/static/media/image1.ec8ff613.webp"
    },
    {
      id: 2,
      title: "100+ Communal Temples Made",
      image: "/_next/static/media/image2.182cc047.webp"
    },
    {
      id: 3,
      title: "Site Supervision",
      image: "/_next/static/media/image3.0a69053b.webp"
    },
    {
      id: 4,
      title: "Transparency in Work",
      image: "/_next/static/media/image4.eb5f59d2.webp"
    }
  ];

  const baseUrl = "https://www.tilakstonearts.com";

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="text-center w-full mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why choose Us</h2>
          </div>
        </div>
        
        {/* Desktop Grid (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {reasons.map((reason) => (
            <div 
              key={reason.id} 
              className="shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] bg-white p-6 md:p-7 rounded-xl text-center transition-all duration-500 min-h-[250px] flex flex-col items-center justify-center hover:shadow-lg hover:-translate-y-1"
            >
              <div 
                className="w-20 h-20 bg-contain bg-center bg-no-repeat mb-5"
                style={{ backgroundImage: `url(${baseUrl}${reason.image})` }}
              ></div>
              <h4 className="text-xl font-semibold text-gray-800 mt-4">{reason.title}</h4>
            </div>
          ))}
        </div>
        
        {/* Mobile Scrollable (shown on mobile) */}
        <div className="md:hidden mt-6 overflow-x-auto whitespace-nowrap py-4 px-2">
          <div className="inline-flex space-x-5">
            {reasons.map((reason) => (
              <div 
                key={reason.id} 
                className="inline-flex flex-col items-center shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] bg-white p-6 rounded-xl min-w-[250px] min-h-[250px] justify-center text-center transition-all duration-300"
              >
                <div 
                  className="w-16 h-16 bg-contain bg-center bg-no-repeat mb-4"
                  style={{ backgroundImage: `url(${baseUrl}${reason.image})` }}
                ></div>
                <h4 className="text-lg font-semibold text-gray-800">{reason.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;