import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navbar = [
  { name: "House Of Talks", href: "/home" },
  { name: "Projects", href: "#pooja-rooms" },
  { name: "Our Design", href: "#dream-temples" },
  { name: "Services", href: "#virtual-tour" },
  { name: "How It Works", href: "#projects" },
  { name: "Location", href: "#guides" },
  { name: "Blog", href: "#contact" },
  { name: "Testimonials", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 sticky w-full z-50 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
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
        </div>

        {/* Navigation Links */}
        {/* <div className="hidden md:flex items-center space-x-8">
           
          {navbar.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground hover:text-slate-600 transition-all duration-300 font-medium relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-600 to-slate-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
         
        </div> */}

        <NavigationMenu orientation="horizontal">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>House Of Talks</NavigationMenuTrigger>
              <NavigationMenuContent
                className=" overflow-x-hidden"
              >
                <div className="w-[100vw]">
                    <div>About</div>
                    <div>about</div>
                    <div>about</div>
                    <div>about</div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
              <NavigationMenuContent
                align="start"
                className="max-w-screen overflow-x-hidden"
              ></NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Our Creation</NavigationMenuTrigger>
              <NavigationMenuContent
                align="start"
                className="max-w-screen overflow-x-hidden"
              ></NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Our Services</NavigationMenuTrigger>
              <NavigationMenuContent
                align="start"
                className="max-w-screen overflow-x-hidden"
              ></NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
               <Link
                href="#projects"
                className="text-foreground hover:text-slate-600 transition-all duration-300 font-medium relative px-2 py-1"
              >
                How It Works
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-slate-600 to-slate-400 transition-all duration-300 hover:w-full"></span>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
               <Link
                href="#projects"
                className="text-foreground hover:text-slate-600 transition-all duration-300 font-medium relative px-2 py-1"
              >
                Location
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-slate-600 to-slate-400 transition-all duration-300 hover:w-full"></span>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="#projects"
                className="text-foreground hover:text-slate-600 transition-all duration-300 font-medium relative px-2 py-1"
              >
                Projects
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-slate-600 to-slate-400 transition-all duration-300 hover:w-full"></span>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="#contact"
                className="text-foreground hover:text-slate-600 transition-all duration-300 font-medium relative px-2 py-1"
              >
                Testimonials
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-slate-600 to-slate-400 transition-all duration-300 hover:w-full"></span>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

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
