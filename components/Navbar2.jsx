import React, { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import Image from "next/image";
import { useRouter } from "next/router";

const navItems = [
  {
    name: "HOUSE OF TILAK", href: "",
    dropdown: [
      { name: "About Us", href: "/", src: "https://i.pinimg.com/564x/68/5d/bf/685dbf4b95c6c81f0158ae13e0369881.jpg" },
      { name: "Exprience Center", href: "/", src: "https://images.orientbell.com/media/catalog/product/s/u/super_gloss_blue_marble_stone_dk_1.jpg" },
      { name: "The Team", href: "/", src: 'https://image.made-in-china.com/2f0j00MZnkfCabkqcS/Marble-Stone-Entrnce-Design-Patterns-Modern-Medallion-Marble-Floor-Decor.jpg' },
      { name: "Artisans of Tilak", href: "/", src: 'https://5.imimg.com/data5/SELLER/Default/2024/5/419339312/HK/SC/EV/50436332/whatsapp-image-2024-05-16-at-12-26-31-pm-1-500x500.jpeg' },
      { name: "Collaborations", href: "/", src: 'https://www.nortonsculpture.com/data/watermark/20211008/615ffce5a9340.jpg' },
      { name: "Our Clients", href: "/", src: 'https://media.designcafe.com/wp-content/uploads/2021/04/09160149/marble-pooja-mandir-designs-for-home.jpg' },
    ],
  },
  {
    name: "PROJECTS", href: '',
    dropdown: [
      { name: "Communal", href: "/projects/communal", src: "https://images.squarespace-cdn.com/content/v1/65d325ddd662de7fdcb2411f/bc03c460-5a81-44e1-9920-fc07e711d20a/download+%285%29.jpg" },
      { name: "Residential", href: "/projects/residential", src: "https://fabdiz.com/wp-content/uploads/2024/04/product-jpeg-1000x1000-1.webp" },
      { name: "International", href: "/projects/international", src: 'https://media.designcafe.com/wp-content/uploads/2022/11/24185017/living-room-marble-wall-design-for-partition.jpg' },
    ],
  },
  {
    name: "OUR CREATION", href: "",
    dropdown: [
      { name: "Pooja Rooms", href: "/marble-pooja-room-designs", src: "https://bonito.in/wp-content/uploads/2021/11/1-01.jpg" },
      { name: "Dream Temples", href: "/premium-marble-temple-for-home", src: "https://5.imimg.com/data5/SELLER/Default/2024/9/448018779/ZB/HH/ZZ/26887741/marble-pooja-mandir.jpg" },
      { name: "Murti", href: "/", src: 'https://media.designcafe.com/wp-content/uploads/2022/11/24185017/living-room-marble-wall-design-for-partition.jpg' },
      { name: "Home Decor", href: "/", src: 'https://media.designcafe.com/wp-content/uploads/2022/11/24185017/living-room-marble-wall-design-for-partition.jpg' },
      { name: "Communal Temples", href: "/communal-temple-design", src: 'https://media.designcafe.com/wp-content/uploads/2022/11/24185017/living-room-marble-wall-design-for-partition.jpg' },
      { name: "Jain temples", href: "/jain-temple", src: 'https://media.designcafe.com/wp-content/uploads/2022/11/24185017/living-room-marble-wall-design-for-partition.jpg' },
    ],
  },
  { name: "SERVICES", href: "",
    dropdown: [
      { name: "TSA International", href: "/marble-home-temple-international", src: "https://bonito.in/wp-content/uploads/2021/11/1-01.jpg" },
      { name: "TSA Design Hub", href: "/home-temple-interior-designers", src: "https://bonito.in/wp-content/uploads/2021/11/1-01.jpg" },
    ]
   },
  { name: "HOW IT WORKS", href: "#projects" },
  { name: "LOCATION", href: "/Location" },
  { name: "BLOG", href: "/Blog" },
  { name: "BOOK APPOINTMENT", href: "/AppointmentPage" },
  { name: "TESTIMONIALS", href: "/Testimonials" },
];

const Navbar = () => {
  const router = useRouter()
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    setHoveredItem(null)
  }, [router.query])


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleItemExpansion = (itemName) => {
    if (expandedItem === itemName) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemName);
    }
  };

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <>
      <nav className="top-0 sticky w-full z-50 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* Logo and Title - Left */}
            <Link
              href="/"
              className="flex items-center gap-2 focus:outline-none focus:ring-0"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-slate-600 via-slate-400 to-slate-600 rounded-lg flex items-center justify-center shadow-lg">
                {/* Gem Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white drop-shadow-sm"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 3L2 9l10 12 10-12-10-6z" />
                </svg>
              </div>
              {/* <span className="font-semibold text-lg">House of Indian Stonex</span> */}
            </Link>


            {/* Navigation Links - Right */}
            <div className="flex items-center space-x-2 xl:space-x-4 2xl:space-x-6 focus:outline-none focus:ring-0">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative "
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                <Link
                  href={item.href}
                  className={
                    !item.dropdown
                      ? cn(
                          "px-1 font-medium tracking-wider py-2 text-xs xl:text-sm hover:text-gray-900 transition-colors duration-200 relative",
                          "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#d59352] after:transition-all after:duration-300",
                          hoveredItem === item.name
                            ? "after:w-full text-gray-900"
                            : "after:w-0",
                          "focus:outline-none focus:ring-0" // ✅ only once, applied here
                        )
                      : "px-1 font-medium tracking-wider py-2 text-xs xl:text-sm hover:text-gray-900 transition-colors duration-200 relative focus:outline-none focus:ring-0"
                  }
                >
                  {item.name}
                </Link>


                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div
                      className={cn(
                        "fixed top-full left-0 w-full bg-white shadow-lg border border-gray-200 py-1 z-50 transition-all duration-500 grid grid-cols-12 p-3",
                        hoveredItem === item.name
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2",
                      )}
                    >
                      {/* left section  */}
                      <div className="col-span-2 flex flex-col gap-3 ">
                        {item.dropdown.map((link) => (
                          <Link href={link.href} className="text-[#242424] hover:cursor-pointer hover:underline decoration-[#d59352] decoration-2 underline-offset-3" key={link.name}>{link.name}</Link>
                        ))}
                      </div>

                      {/* right section  */}
                      <div className="col-span-10 grid grid-cols-6 gap-2 border-l  items-center px-4 py-5">
                        {item.dropdown.map((link) => (
                          <Link href={link.href} key={link.name} className="flex flex-col items-center h-full">
                            <img className="w-full h-full rounded-sm" src={link.src} alt="img" />
                            <span>{link.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex items-center justify-between w-full relative">
            {/* Mobile Menu Button - Left */}
            <button
              className="p-2 rounded-lg hover:bg-slate-100 transition z-50 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Logo and Title - Center (absolute positioning to keep it centered) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
              <Link href={'/'} className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-600 via-slate-400 to-slate-600 rounded-lg flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white drop-shadow-sm"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 3L2 9l10 12 10-12-10-6z" />
                  </svg>
                </div>
                {/* <span className="font-semibold text-sm">House of Indian Stonex</span> */}
              </Link>
            </div>

            {/* Contact Button - Right */}
            <button
              className="px-3 py-1.5 bg-[#b88624] text-white rounded-md text-xs font-medium focus:outline-none"
              onClick={toggleContactForm}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Sidebar - Updated to fix visibility issues */}
          <div className={cn(
            "lg:hidden fixed top-0 left-0 h-screen w-full bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto",
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}>
            <div className="p-6 min-h-full">
              {/* Close Button */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 focus:outline-none"
                          onClick={() => toggleItemExpansion(item.name)}
                        >
                          <span>{item.name}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 transition-transform ${expandedItem === item.name ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {expandedItem === item.name && (
                          <div className="pl-4 mt-2 border-l border-gray-200">
                            {item.dropdown.map((link) => (
                              <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Form Modal - Updated to match hero section exactly */}
      {showContactForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            <button
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-600 focus:outline-none"
              onClick={toggleContactForm}
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 352 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
              </svg>
            </button>

            <h2 className="text-xl font-bold mb-2 text-gray-800">Talk to Our Expert</h2>

            <form>
              {/* Full Name Field */}
              <div className="mb-4 relative">
                <div className="relative mt-6">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 peer"
                    required
                  />
                  <label
                    htmlFor="fullName"
                    className="absolute left-3 top-2 text-gray-500 text-sm transition-all duration-200 pointer-events-none peer-focus:top-[-0.75rem] peer-focus:left-2 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1"
                  >
                    Full Name *
                  </label>
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-4 relative">
                <div className="relative mt-6">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 peer"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 top-2 text-gray-500 text-sm transition-all duration-200 pointer-events-none peer-focus:top-[-0.75rem] peer-focus:left-2 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1"
                  >
                    Email Address *
                  </label>
                </div>
              </div>

              {/* Phone Field */}
              <div className="mb-4 relative">
                <div className="relative mt-6">
                  <div className="flex items-center border border-gray-300 rounded-md peer-focus:border-blue-500 focus-within:border-blue-500">
                    <span className="px-3 py-2 bg-gray-100 border-r border-gray-300 text-gray-500">+91</span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone number"
                      className="w-full px-3 py-2 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* City Field */}
              <div className="mb-4 relative">
                <div className="relative mt-6">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 peer"
                    required
                  />
                  <label
                    htmlFor="city"
                    className="absolute left-3 top-2 text-gray-500 text-sm transition-all duration-200 pointer-events-none peer-focus:top-[-0.75rem] peer-focus:left-2 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:bg-white peer-focus:px-1"
                  >
                    City *
                  </label>
                </div>
              </div>

              {/* User Type Radio Buttons */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about yourself *</label>
                <div className="space-y-2">
                  <label className="flex items-start">
                    <input
                      type="radio"
                      name="userType"
                      value="homeowner"
                      className="mt-1 mr-2"
                    />
                    <span className="text-sm text-gray-600">I am a homeowner looking for a pooja unit or pooja room</span>
                  </label>
                  <label className="flex items-start">
                    <input
                      type="radio"
                      name="userType"
                      value="designer"
                      className="mt-1 mr-2"
                    />
                    <span className="text-sm text-gray-600">I am an interior designer/consultant seeking solutions for my client</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors font-medium focus:outline-none"
              >
                Next
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="icons">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+918058843190"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .160 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
          </svg>
        </a>

        {/* Scroll to Top Button - Only visible when scrolled */}
        {isScrolled && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        )}
      </div>

      <style jsx>{`
  .icons {
    animation: floaty 4s ease-in-out infinite;
    bottom: 2rem !important;
    cursor: pointer;
    right: 14px !important;
    position: fixed !important;
    z-index: 999 !important;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  @keyframes floaty {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  /* Form input floating labels */
  input:focus + label,
  input:not(:placeholder-shown) + label {
    top: -0.75rem !important;
    left: 0.5rem !important;
    font-size: 0.75rem !important;
    background: white;
    padding: 0 0.5rem;
    color: #3b82f6 !important;
  }

  /* Phone input focus state */
  .flex:focus-within {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  /* Input focus states */
  input:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`}</style>
    </>
  );
};

export default Navbar;