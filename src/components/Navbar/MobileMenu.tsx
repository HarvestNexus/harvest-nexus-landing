// src/components/Navbar/MobileMenu.tsx
import React from "react";
import { NavLink } from "./NavLink";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenu: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50">
      <div className="absolute top-0 right-0 w-64 bg-white shadow-lg h-full p-6 space-y-4">
        <button onClick={onClose} className="text-gray-600 font-bold text-xl mb-4">&times;</button>
        <NavLink href="/" label="Home" onClick={onClose} />
        <NavLink href="/about" label="About" onClick={onClose} />
        <NavLink href="/services" label="Services" onClick={onClose} />
        <NavLink href="/contact" label="Contact" onClick={onClose} />
      </div>
    </div>
  );
};
