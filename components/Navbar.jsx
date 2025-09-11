import React, { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import Image from "next/image";
import { useRouter } from "next/router";


const navItems = [
  {
    name: "House Of Talks", href: "/",
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
    name: "Projects", href: "#pooja-rooms",
    dropdown: [
      { name: "Communal", href: "/projects/communal", src: "https://images.squarespace-cdn.com/content/v1/65d325ddd662de7fdcb2411f/bc03c460-5a81-44e1-9920-fc07e711d20a/download+%285%29.jpg" },
      { name: "Residential", href: "/projects/residential", src: "https://fabdiz.com/wp-content/uploads/2024/04/product-jpeg-1000x1000-1.webp" },
      { name: "International", href: "/projects/international", src: 'https://media.designcafe.com/wp-content/uploads/2022/11/24185017/living-room-marble-wall-design-for-partition.jpg' },
    ],
  },
  {
    name: "Our Design", href: "#dream-temples",
    dropdown: [
      { name: "Pooja Rooms", href: "/", src: "https://bonito.in/wp-content/uploads/2021/11/1-01.jpg" },
      { name: "Dream Temples", href: "/", src: "https://5.imimg.com/data5/SELLER/Default/2024/9/448018779/ZB/HH/ZZ/26887741/marble-pooja-mandir.jpg" },
      { name: "Murti", href: "/", src: 'https://media.designcafe.com/wp-content/uploads/2022/11/24185017/living-room-marble-wall-design-for-partition.jpg' },
      { name: "Home Decor", href: "/", src: 'https://media.designcafe.com/wp-content/uploads/2022/11/24185017/living-room-marble-wall-design-for-partition.jpg' },
      { name: "Communal Temples", href: "/", src: 'https://media.designcafe.com/wp-content/uploads/2022/11/24185017/living-room-marble-wall-design-for-partition.jpg' },
      { name: "Jain temples", href: "/", src: 'https://media.designcafe.com/wp-content/uploads/2022/11/24185017/living-room-marble-wall-design-for-partition.jpg' },
    ],
  },
  { name: "Services", href: "#virtual-tour" },
  { name: "How It Works", href: "#projects" },
  { name: "Location", href: "#guides" },
  { name: "Blog", href: "#contact" },
  { name: "Testimonials", href: "#contact" },
];

const Navbar = () => {

  const router = useRouter()

  const [hoveredItem, setHoveredItem] = useState(null)

  useEffect(() => {
    setHoveredItem(null)
  }, [router.query])
  

  return (
    <nav className="top-0 sticky w-full z-50 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href={'/'} className="w-10 h-10 bg-gradient-to-br from-slate-600 via-slate-400 to-slate-600 rounded-lg flex items-center justify-center shadow-lg">
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
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  className={!item.dropdown ? cn(
                    "px-3 py-2 text-lg font-medium font-robo text-gray-700 hover:text-gray-900 transition-colors duration-200 relative",
                    "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-slate-600 after:transition-all after:duration-300",
                    hoveredItem === item.name ? "after:w-full text-gray-900" : "after:w-0",
                  ) : "px-3 py-2 text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 relative"}
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
                    <div className="col-span-2 flex flex-col gap-3 pt-2">
                      {item.dropdown.map((link) => (
                        <Link href={link.href} className="text-[#242424] hover:cursor-pointer hover:underline decoration-[#d59352] decoration-2 underline-offset-3" key={link.name}>{link.name}</Link>
                      ))}
                    </div>

                    {/* right section  */}
                    <div className="col-span-10 grid grid-cols-6 gap-2 border-l  items-center px-4 py-5">
                      {item.dropdown.map((link) => (
                        <div key={link.name} className="flex flex-col items-center h-full">
                          <img className="w-full h-full rounded-sm" src={link.src} alt="img" />
                          <span>{link.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>


        {/* Mobile Menu Icon */}
        <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition">
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
      </div>
    </nav>
  );
};

export default Navbar;
