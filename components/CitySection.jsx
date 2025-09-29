import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const CitySection = () => {
  const [showAll, setShowAll] = useState(false);
  
  const cities = [
    {
      name: "Delhi",
      image: "https://www.tilakstonearts.com/_next/static/media/Delhi.6befc27a.webp",
      link: "/locations/delhi"
    },
    {
      name: "Mumbai",
      image: "https://www.tilakstonearts.com/_next/static/media/Mumbai.44c8b88d.webp",
      link: "/locations/mumbai"
    },
    {
      name: "Ahmedabad",
      image: "https://www.tilakstonearts.com/_next/static/media/Ahmedabad.253d0900.webp",
      link: "/locations/ahmedabad"
    },
    {
      name: "Chennai",
      image: "https://www.tilakstonearts.com/_next/static/media/Chennai.e060dfe3.webp",
      link: "/locations/chennai"
    },
    {
      name: "Kolkata",
      image: "https://www.tilakstonearts.com/_next/static/media/kolkata.1befdfeb.webp",
      link: "/locations/kolkata"
    },
    {
      name: "Ranchi",
      image: "https://www.tilakstonearts.com/_next/static/media/Ranchi.84cc20ce.webp",
      link: "/locations/ranchi"
    },
    {
      name: "Indore",
      image: "https://www.tilakstonearts.com/_next/static/media/Indore.b11d262a.webp",
      link: "/locations/indore"
    },
    {
      name: "Gurgaon",
      image: "https://www.tilakstonearts.com/_next/static/media/Gurgaon.2d407329.webp",
      link: "/locations/gurgaon"
    },
    {
      name: "Pune",
      image: "https://www.tilakstonearts.com/_next/static/media/Pune.012a9161.webp",
      link: "/locations/pune"
    },
    {
      name: "Surat",
      image: "https://www.tilakstonearts.com/_next/static/media/Surat.953a51b7.webp",
      link: "/locations/surat"
    },
    {
      name: "Kota",
      image: "https://www.tilakstonearts.com/_next/static/media/Kota.cd493d54.webp",
      link: "/locations/kota"
    },
    {
      name: "Jaipur",
      image: "https://www.tilakstonearts.com/_next/static/media/Jaipur.240e1c2c.webp",
      link: "/locations/jaipur"
    },
     {
      name: "Hyderabad",
      image: "https://www.tilakstonearts.com/_next/static/media/Jaipur.240e1c2c.webp",
      link: "/locations/jaipur"
    },
     {
      name: "Bengaluru",
      image: "https://www.tilakstonearts.com/_next/static/media/Jaipur.240e1c2c.webp",
      link: "/locations/jaipur"
    },
    {
      name: "Raipur",
      image: "https://www.tilakstonearts.com/_next/static/media/Jaipur.240e1c2c.webp",
      link: "/locations/jaipur"
    },
    {
      name: "Vishakapatnam",
      image: "https://www.tilakstonearts.com/_next/static/media/Jaipur.240e1c2c.webp",
      link: "/locations/jaipur"
    },
    {
      name: "Jabalpur",
      image: "https://www.tilakstonearts.com/_next/static/media/Jaipur.240e1c2c.webp",
      link: "/locations/jaipur"
    },
    {
      name: "Bhopal",
      image: "https://www.tilakstonearts.com/_next/static/media/Jaipur.240e1c2c.webp",
      link: "/locations/jaipur"
    },
    {
      name: "Gurugram",
      image: "https://www.tilakstonearts.com/_next/static/media/Jaipur.240e1c2c.webp",
      link: "/locations/jaipur"
    },
    {
      name: "Surat",
      image: "https://www.tilakstonearts.com/_next/static/media/Jaipur.240e1c2c.webp",
      link: "/locations/jaipur"
    },
    {
      name: "Jodhpur",
      image: "https://www.tilakstonearts.com/_next/static/media/Jaipur.240e1c2c.webp",
      link: "/locations/jaipur"
    },
    {
      name: "Jaisalmer",
      image: "https://www.tilakstonearts.com/_next/static/media/Jaipur.240e1c2c.webp",
      link: "/locations/jaipur"
    },
    {
      name: "Udaipur",
      image: "https://www.tilakstonearts.com/_next/static/media/Jaipur.240e1c2c.webp",
      link: "/locations/jaipur"
    },
    {
      name: "Bikaner",
      image: "https://www.tilakstonearts.com/_next/static/media/Jaipur.240e1c2c.webp",
      link: "/locations/jaipur"
    },
    {
      name: "Punjab",
      image: "https://www.tilakstonearts.com/_next/static/media/Jaipur.240e1c2c.webp",
      link: "/locations/jaipur"
    },
  ];

  const displayedCities = showAll ? cities : cities.slice(0, 6);

  return (
    <div className="bg-[#fffbf0] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-12 mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800">
              Installing Dream Temple Across World
            </h2>
          </div>
          
          <div className="col-12">
            <div className="city-list">
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10">
                {displayedCities.map((city, index) => (
                  <li key={index} className="group flex flex-col items-center">
                    <a 
                      href={city.link} 
                      className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
                    >
                      <div 
                        className="w-[120px] h-[120px] border border-[#ae8d40] rounded-full relative cursor-pointer overflow-hidden bg-cover bg-center"
                        style={{ 
                          backgroundImage: `url(${city.image})`
                        }}
                      >
                        {/* Removed the dark overlay */}
                      </div>
                      <p className="text-center mt-5 font-medium text-gray-700 text-lg">
                        {city.name}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
              
              {cities.length > 6 && (
                <div className="text-center mt-12">
                  <button 
                    onClick={() => setShowAll(!showAll)}
                    className="inline-flex items-center text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium text-lg"
                  >
                    {showAll ? 'View Less' : 'View All'}
                    {showAll ? (
                      <FaChevronUp className="ml-3 transition-transform duration-300" />
                    ) : (
                      <FaChevronDown className="ml-3 transition-transform duration-300" />
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitySection;