
import React from "react";

type NavLinkProps = {
  label: string;
  href: string;
  className?: string;
  onClick?: () => void;
};

export const NavLink: React.FC<NavLinkProps> = ({ label, href, className = "", onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${className}`}
    >
      {label}
    </a>
  );
};
