import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger and close icons

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Later replace with your real authentication state
  const isAuthenticated = false; 

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-teal-400">
          CryptoTrack
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-teal-300 transition">Home</Link>
          {isAuthenticated && (
            <Link to="/dashboard" className="hover:text-teal-300 transition">Dashboard</Link>
          )}
          <Link to="/login" className="hover:text-teal-300 transition">Login</Link>
          <Link to="/signup" className="hover:text-teal-300 transition">Signup</Link>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white px-6 py-4 space-y-4">
          <Link 
            to="/" 
            className="block hover:text-teal-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          {isAuthenticated && (
            <Link 
              to="/dashboard" 
              className="block hover:text-teal-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
          )}
          <Link 
            to="/login" 
            className="block hover:text-teal-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="block hover:text-teal-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
