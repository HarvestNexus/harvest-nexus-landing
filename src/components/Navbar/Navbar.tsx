// src/components/Navbar/Navbar.tsx
import React, { useState } from "react";
import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";

export const Navbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => setIsMobileOpen(!isMobileOpen);
  const closeMenu = () => setIsMobileOpen(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto  sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold ">HarvestHub</span>
          </div>

          {/* Desktop NavLinks */}
          <div className="hidden lg:flex space-x-8">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About" />
            <NavLink href="/services" label="Service" />
            <NavLink href="/contact" label="Blog" />
          </div>
         <div className="hidden md:hidden lg:inline-flex justify-between items-center space-x-2"> 
          <div className="border-round bg-green-500 rounded-full sm:p-2 md:p-2 ">
            <svg className="sm:h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffff" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

          </div> 
          <span className="font-bold ">+23481-21766402</span>
        </div>
        <button className="hidden lg:inline-block bg-primary rounded-full sm:p-2 md:p-2 text-white">Contact with Us</button>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {/* Hamburger Icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                   viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileOpen} onClose={closeMenu} />
    </nav>
  );
};
