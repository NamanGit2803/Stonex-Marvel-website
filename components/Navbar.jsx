import React, { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import Image from "next/image";
import { useRouter } from "next/router";

const navItems = [
  {
    name: "Indian Stonex", href: "",
    dropdown: [
      { name: "About Us", href: "/About", src: "https://i.pinimg.com/564x/68/5d/bf/685dbf4b95c6c81f0158ae13e0369881.jpg" },
      { name: "The Team", href: "/", src: 'https://image.made-in-china.com/2f0j00MZnkfCabkqcS/Marble-Stone-Entrnce-Design-Patterns-Modern-Medallion-Marble-Floor-Decor.jpg' },
      { name: "Artisans", href: "/", src: 'https://5.imimg.com/data5/SELLER/Default/2024/5/419339312/HK/SC/EV/50436332/whatsapp-image-2024-05-16-at-12-26-31-pm-1-500x500.jpeg' },
      { name: "Our Clients", href: "/OurClients", src: 'https://media.designcafe.com/wp-content/uploads/2021/04/09160149/marble-pooja-mandir-designs-for-home.jpg' },
    ],
  },
  {
    name: "Work Showcase", href: '',
    dropdown: [
      { name: "Corporate", href: "/projects/Corporate", src: "https://images.squarespace-cdn.com/content/v1/65d325ddd662de7fdcb2411f/bc03c460-5a81-44e1-9920-fc07e711d20a/download+%285%29.jpg" },
      { name: "Luxury Living", href: "/projects/Luxury-Living", src: "https://fabdiz.com/wp-content/uploads/2024/04/product-jpeg-1000x1000-1.webp" },
      { name: "Overseas", href: "/projects/Overseas", src: 'https://media.designcafe.com/wp-content/uploads/2022/11/24185017/living-room-marble-wall-design-for-partition.jpg' },
    ],
  },
  {
    name: "Stone Gallery", href: "",
    dropdown: [
      { name: " Community Temple", href: "/communal-temple-design", src: '/project1.jpg' },
      { name: "Sculptures", href: "/", src: '/murti1.jpg' },
      { name: "Custom Temple", href: "/premium-marble-temple-for-home", src: "/project6.jpg" },
      { name: "Spiritual Jain Creations", href: "/jain-temple", src: '/project3.jpg' },
      { name: "Interior Elegance", href: "/", src: '/home-decor.jpg' },
      { name: "Divine Corner", href: "/marble-pooja-room-designs", src: "/project4.jpg" },
    ],
  },
  { name: "Find Us", href: "/Location" },
  { name: "Raw Material", href: "" },
  { name: "Insights ", href: "/Blog" },
  { name: "Schedule a Visit", href: "/AppointmentPage" },
  { name: "What Clients Say", href: "/Testimonials" },
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
          <div className="hidden lg:flex flex-col items-center justify-center w-full">
            {/* Logo and Title - Centered in first row */}
            <Link
              href="/"
              className="flex items-center gap-3 focus:outline-none focus:ring-0 mb-4"
            >
              <div className="w-15 h-15">
                <img
                  src="/logo1.png"
                  alt="Logo"
                  className="w-15 h-15 object-contain drop-shadow-sm"
                />
              </div>

            </Link>

            {/* Navigation Links - Centered in second row */}
            <div className="flex items-center space-x-2 xl:space-x-4 2xl:space-x-6">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    href={item.href}
                    className={
                      !item.dropdown
                        ? cn(
                            "px-2 py-2 text-sm uppercase tracking-wide transition-colors duration-200 relative",
                            "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-theme after:transition-all after:duration-300",
                            hoveredItem === item.name
                              ? "after:w-full text-gray-900"
                              : "after:w-0 ",
                            "focus:outline-none focus:ring-0 focus:border-0"
                          )
                        : "px-2 py-2 uppercase text-sm  tracking-wide hover:text-gray-900 transition-colors duration-200 relative focus:outline-none focus:ring-0 focus:border-0"
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
                          <Link 
                            href={link.href} 
                            className="text-gray-800 hover:cursor-pointer hover:underline decoration-theme decoration-2 underline-offset-3 text-sm font-normal focus:outline-none focus:ring-0" 
                            key={link.name}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>

                      {/* right section  */}
                      <div className="col-span-10 grid grid-cols-6 gap-2 border-l items-center px-4 py-5">
                        {item.dropdown.map((link) => (
                          <Link 
                            href={link.href} 
                            key={link.name} 
                            className="flex flex-col items-center h-full focus:outline-none focus:ring-0"
                          >
                            <img className="w-full h-full rounded-sm" src={link.src} alt="img" />
                            <span className="text-sm font-medium text-gray-800 mt-2">{link.name}</span>
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
              className="p-2 rounded-lg hover:bg-slate-100 transition z-50 focus:outline-none focus:ring-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
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
              <Link href={'/'} className="flex items-center gap-2 focus:outline-none focus:ring-0">
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
              </Link>
            </div>

            {/* Contact Button - Right */}
            <button
              className="px-4 py-2 bg-theme text-white rounded-md text-sm font-medium focus:outline-none focus:ring-0 hover:bg-[#a07820] transition-colors"
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
                  className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-0 text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Logo and Title for Mobile Menu */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-600 via-slate-400 to-slate-600 rounded-lg flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-white drop-shadow-sm"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 3L2 9l10 12 10-12-10-6z" />
                  </svg>
                </div>
                <span className="font-semibold text-lg tracking-wide text-gray-900">House of Indian Stonex</span>
              </div>

              {/* Navigation Items */}
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-gray-800 focus:outline-none focus:ring-0 hover:bg-gray-50 rounded-lg"
                          onClick={() => toggleItemExpansion(item.name)}
                        >
                          <span>{item.name}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 transition-transform ${expandedItem === item.name ? 'rotate-180' : ''} text-gray-600`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {expandedItem === item.name && (
                          <div className="pl-4 mt-1 border-l border-gray-200">
                            {item.dropdown.map((link) => (
                              <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2.5 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-normal focus:outline-none focus:ring-0"
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
                        className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors focus:outline-none focus:ring-0"
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
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-600 focus:outline-none focus:ring-0"
              onClick={toggleContactForm}
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 352 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
              </svg>
            </button>

            <h2 className="text-xl font-bold mb-4 text-gray-900">Talk to Our Expert</h2>

            <form>
              {/* Full Name Field */}
              <div className="mb-4 relative">
                <div className="relative mt-6">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 peer text-gray-900 text-base focus:ring-0"
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
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 peer text-gray-900 text-base focus:ring-0"
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
                    <span className="px-3 py-2.5 bg-gray-100 border-r border-gray-300 text-gray-500 text-base">+91</span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone number"
                      className="w-full px-3 py-2.5 focus:outline-none text-gray-900 text-base focus:ring-0"
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
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 peer text-gray-900 text-base focus:ring-0"
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
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Tell us about yourself *</label>
                <div className="space-y-3">
                  <label className="flex items-start">
                    <input
                      type="radio"
                      name="userType"
                      value="homeowner"
                      className="mt-1 mr-3 focus:ring-0"
                    />
                    <span className="text-sm text-gray-700 leading-relaxed">I am a homeowner looking for a pooja unit or pooja room</span>
                  </label>
                  <label className="flex items-start">
                    <input
                      type="radio"
                      name="userType"
                      value="designer"
                      className="mt-1 mr-3 focus:ring-0"
                    />
                    <span className="text-sm text-gray-700 leading-relaxed">I am an interior designer/consultant seeking solutions for my client</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors font-medium focus:outline-none focus:ring-0 text-base"
              >
                Next
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;