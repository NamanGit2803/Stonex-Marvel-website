import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      title: "Indian Projects",
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="mb-4">
            <span className="text-2xl md:text-3xl font-light">Why choose</span>{" "}
            <span className="text-4xl md:text-5xl font-extralight bg-gradient-to-r from-[#ff7e2e] via-[#ff9d5c] to-[#ffb380] bg-clip-text text-transparent">
              StoneX
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience quality craftsmanship, transparency, and unmatched expertise in every project.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="group relative bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image circle with gradient */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-yellow-100 to-yellow-300 flex items-center justify-center mb-5 overflow-hidden">
                <img
                  src={`${baseUrl}${reason.image}`}
                  alt={reason.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mt-2">{reason.title}</h4>
            </div>
          ))}
        </div>

        {/* Mobile Scrollable */}
        <div className="md:hidden mt-6 overflow-x-auto py-4 px-2">
          <div className="inline-flex space-x-5">
            {reasons.map((reason) => (
              <div
                key={reason.id}
                className="inline-flex flex-col items-center shadow-lg bg-white p-6 rounded-2xl min-w-[250px] min-h-[250px] justify-center text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-100 to-yellow-300 flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src={`${baseUrl}${reason.image}`}
                    alt={reason.title}
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                  />
                </div>
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
