import { useState, useEffect, useRef } from 'react';

export default function ClientCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleItems, setVisibleItems] = useState(8); // Default for desktop
  const containerRef = useRef(null);
  
  // Client logos data
  const clients = [
    { id: 1, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737543172338.jpeg&w=256&q=75" },
    { id: 2, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737465806731.png&w=256&q=75" },
    { id: 3, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737527011809.png&w=256&q=75" },
    { id: 4, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737527091126.jpeg&w=256&q=75" },
    { id: 5, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737541725553.png&w=256&q=75" },
    { id: 6, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737541812847.png&w=256&q=75" },
    { id: 7, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737542442989.png&w=256&q=75" },
    { id: 8, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737542624255.jpeg&w=256&q=75" },
    { id: 9, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737542851797.png&w=256&q=75" },
    { id: 10, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737542902213.avif&w=256&q=75" },
    { id: 11, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737542951087.jpeg&w=256&q=75" },
    { id: 12, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737543029401.png&w=256&q=75" },
    { id: 13, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737543100607.jpeg&w=256&q=75" },
    { id: 14, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737543227034.png&w=256&q=75" },
    { id: 15, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737543316781.png&w=256&q=75" },
    { id: 16, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737543389187.jpeg&w=256&q=75" },
    { id: 17, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737543500982.webp&w=256&q=75" },
    { id: 18, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737543587843.jpeg&w=256&q=75" },
    { id: 19, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737543683852.webp&w=256&q=75" },
    { id: 20, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737543942545.jpeg&w=256&q=75" },
    { id: 21, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737544092406.png&w=256&q=75" },
    { id: 22, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737544186131.jpeg&w=256&q=75" },
    { id: 23, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737544343260.png&w=256&q=75" },
    { id: 24, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737544457962.jpeg&w=256&q=75" },
    { id: 25, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737544905974.png&w=256&q=75" },
    { id: 26, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737544992488.png&w=256&q=75" },
    { id: 27, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737545100478.png&w=256&q=75" },
    { id: 28, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737545222257.png&w=256&q=75" },
    { id: 29, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737545372053.png&w=256&q=75" },
    { id: 30, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737545544494.jpeg&w=256&q=75" },
    { id: 31, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737545708690.jpeg&w=256&q=75" },
    { id: 32, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1737559221377.png&w=256&q=75" },
    { id: 33, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1740832316111.jpeg&w=256&q=75" },
    { id: 34, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1748234550553.jpeg&w=256&q=75" },
    { id: 35, image: "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1748234854141.jpeg&w=256&q=75" }
  ];

  // Update visible items based on screen size
  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(8); // Desktop
      } else if (window.innerWidth >= 768) {
        setVisibleItems(6); // Tablet
      } else if (window.innerWidth >= 640) {
        setVisibleItems(4); // Small tablet
      } else {
        setVisibleItems(3); // Mobile
      }
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    
    return () => {
      window.removeEventListener('resize', updateVisibleItems);
    };
  }, []);

  // Duplicate the clients array to create seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        // When we reach the end of the original array, reset to 0
        if (prevIndex >= clients.length - 1) {
          // Wait for transition to complete before resetting
          setTimeout(() => {
            setCurrentIndex(0);
          }, 50);
          return 0;
        }
        return prevIndex + 1;
      });
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [clients.length, isPaused, visibleItems]);

  // Handle mouse events to pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="container-fluid mt-5 px-4 md:px-6 mx-auto">
      <div className="row">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            Our Clients
          </h2>
        </div>
        
        <div className="col-12 relative overflow-hidden">
          <div 
            className="flex"
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ 
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
              transition: 'transform 0.8s ease-in-out',
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div 
                key={`${client.id}-${index}`} 
                className="flex-shrink-0 px-2 md:px-4 flex items-center justify-center"
                style={{ width: `${100 / visibleItems}%` }}
              >
                <div className="w-full h-20 md:h-28  rounded-lg flex items-center justify-center p-2 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div 
                    className="w-full h-full bg-contain bg-no-repeat bg-center"
                    style={{ backgroundImage: `url(${client.image})` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for a smoother infinite effect */}
          <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
      
      {/* Mobile indicator */}
      <div className="flex justify-center mt-4 md:hidden">
        <div className="flex space-x-2">
          {Array.from({ length: Math.min(5, clients.length) }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentIndex % clients.length === index ? '' : ''
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}