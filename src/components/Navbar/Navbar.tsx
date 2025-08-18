import React, { useState } from "react";
import { NavLink } from "./NavLink";

interface NavbarProps {
  onJoinClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => setIsMobileOpen(!isMobileOpen);
  const closeMenu = () => setIsMobileOpen(false);

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <img
              src="/images/logo.avif"
              alt="HarvestHub Logo"
              className="w-12 h-12 object-contain rounded-full"
            />
            <span className="text-xl font-bold">Harvest Nexus</span>
          </div>

          <div className="hidden lg:flex space-x-6">
            <NavLink className="text-gray-800 hover:text-green-400" href="#home" label="Home" />
            <NavLink className="text-gray-800 hover:text-green-400" href="#about" label="About" />
            <NavLink className="text-gray-800 hover:text-green-400" href="#services" label="Service" />
            <NavLink className="text-gray-800 hover:text-green-400" href="#contact" label="Contact Us" />
          </div>

          <div className="hidden md:hidden lg:flex items-center space-x-2">
            <div className="bg-green-400 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <span className="font-bold text-sm">+234-8065645754</span>
          </div>

          <button
            onClick={onJoinClick}
            className="hidden lg:inline-block bg-green-300 hover:bg-green-600 transition text-black px-4 py-2 rounded-full text-sm font-semibold"
          >
            Join Our Early Access
          </button>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileOpen && (
        <div className="lg:hidden px-4 pt-2 pb-2 bg-white shadow space-y-2">
          <NavLink
            href="#home"
            label="Home"
            onClick={closeMenu}
            className="block text-gray-800 font-semibold px-3 py-2 rounded hover:bg-green-100 hover:text-green-600 transition"
          />
          <NavLink
            href="#about"
            label="About"
            onClick={closeMenu}
            className="block text-gray-800 font-semibold px-3 py-2 rounded hover:bg-green-100 hover:text-green-600 transition"
          />
          <NavLink
            href="#service"
            label="Service"
            onClick={closeMenu}
            className="block text-gray-800 font-semibold px-3 py-2 rounded hover:bg-green-100 hover:text-green-600 transition"
          />
          <NavLink
            href="#contact"
            label="Contact Us"
            onClick={closeMenu}
            className="block text-gray-800 font-semibold px-3 py-2 rounded hover:bg-green-100 hover:text-green-600 transition"
          />

          <hr className="border-gray-200 my-1" />

          <div className="flex items-center space-x-3">
            <div className="bg-green-500 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <span className="font-bold text-sm">+234-8065645754</span>
          </div>

          <button
            onClick={onJoinClick}
            className="w-full mt-2 bg-green-400 hover:bg-green-600 transition text-black px-4 py-2 rounded-full text-sm font-semibold"
          >
            Join Our Early Access
          </button>
        </div>
      )}
    </nav>
  );
};
