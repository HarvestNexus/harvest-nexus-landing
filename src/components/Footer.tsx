import React from "react";
import { useNavigate } from "react-router-dom";
import LinkedIn from '../assets/icons/linkedin.svg';
import XIcon from '../assets/icons/x.svg';
import Mail from '../assets/icons/mail.svg';
import Phone from '../assets/icons/phone.svg';
import Location from '../assets/icons/location.svg';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/Prompt');
  };

  return (
    <footer className="bg-white border-t border-gray-300 px-6 sm:px-12 md:px-16 pt-6 pb-2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-16">

        {/* Left Section */}
        <div className="md:w-1/3 min-w-[280px] flex flex-col">
          <div className="flex items-center mb-4">
            <img
              src="https://i.ibb.co/spKYGMxc/IMG-20250729-WA0049.jpg"
              alt="Harvest Nexus Logo"
              width={40}
              height={40}
              className="mr-3 rounded"
            />
            <h1 className="font-semibold text-black text-lg sm:text-xl md:text-2xl tracking-tight">
              Harvest Nexus
            </h1>
          </div>
          <p className="text-black text-sm sm:text-base leading-relaxed max-w-md mb-6">
            Let's grow prosperity, together. Join 20,000+ farmers and buyers trading directly – fairer deals, fresher harvests, smarter agriculture.
          </p>
          <button
            onClick={handleGetStartedClick}
            className="self-start bg-green-400 hover:bg-green-600 text-white font-semibold rounded-full py-2 px-6 shadow-md transition duration-300 text-xs sm:text-sm md:text-base"
            aria-label="Get started button"
          >
            Get started →
          </button>
          <div className="flex space-x-6 mt-7 items-center">
            <a
              href="https://www.linkedin.com/company/harvest-nexus/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Harvest Nexus LinkedIn"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <img src={LinkedIn} alt="LinkedIn icon" width={20} height={20} />
            </a>
            <a
              href="https://x.com/harvestnexus"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Harvest Nexus X (Twitter)"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <img src={XIcon} alt="X icon" width={20} height={20} />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <nav className="md:w-1/4 min-w-[180px]">
          <h3 className="font-semibold text-black text-lg sm:text-xl md:text-2xl mb-6 tracking-wide">
            Navigation
          </h3>
          <ul className="space-y-4">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About Us" },
              { href: "#services", label: "Our Services" },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-black text-base sm:text-lg md:text-lg hover:text-green-600 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section */}
        <div className="md:w-1/3 min-w-[280px]">
          <h3 className="font-semibold text-black text-lg sm:text-xl md:text-2xl mb-6 tracking-wide">
            Contact
          </h3>

          <div className="flex items-start space-x-4 mb-5">
            <img src={Phone} alt="Phone icon" className="w-5 h-5 mt-1 flex-shrink-0" />
            <p className="text-black text-sm sm:text-base leading-relaxed">
              (+234) 80656457524, (+234) 9057304766
            </p>
          </div>

          <div className="flex items-start space-x-4 mb-5">
            <img src={Mail} alt="Mail icon" className="w-5 h-5 mt-1 flex-shrink-0" />
            <p className="text-black text-sm sm:text-base leading-relaxed">
              harvesthublimited@gmail.com
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <img src={Location} alt="Location icon" className="w-5 h-5 mt-1 flex-shrink-0" />
            <p className="text-black text-sm sm:text-base leading-relaxed max-w-md">
              First Registrars and Investors Services, 2, Abebe Village Road, Iganmu, Surulere, Lagos
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
