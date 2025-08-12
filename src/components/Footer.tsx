import React from "react";
import LinkedIn from '../assets/icons/linkedin.svg';
import XIcon from '../assets/icons/x.svg';
import Mail from '../assets/icons/mail.svg';
import Phone from '../assets/icons/phone.svg';
import Location from '../assets/icons/location.svg';

const scrollToSection = () => {
  const section = document.getElementById("hero");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-300 px-6 sm:px-12 py-4 md:py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 md:gap-12">

        {/* Left Section */}
        <div className="md:w-1/3 min-w-[280px] flex flex-col">
          <div className="flex items-center mb-2">
            <img
              src="https://i.ibb.co/spKYGMxc/IMG-20250729-WA0049.jpg"
              alt="Harvest Nexus Logo"
              width={32}
              height={32}
              className="mr-2 rounded"
            />
            <h1 className="font-semibold text-gray-900 text-sm md:text-base tracking-tight">
              Harvest Nexus
            </h1>
          </div>
          <p className="text-gray-600 text-xs leading-relaxed max-w-md mb-4">
            Let's grow prosperity, together. Join 20,000+ farmers and buyers trading directly – fairer deals, fresher harvests, smarter agriculture.
          </p>
          <button
            onClick={scrollToSection}
            className="self-start bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full py-2 px-6 shadow-md transition duration-300 text-xs md:text-sm"
            aria-label="Get started button"
          >
            Get started →
          </button>
          <div className="flex space-x-5 mt-5 items-center">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Harvest Nexus LinkedIn"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <img src={LinkedIn} alt="LinkedIn icon" width={18} height={18} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Harvest Nexus X (Twitter)"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <img src={XIcon} alt="X icon" width={18} height={18} />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <nav className="md:w-1/4 min-w-[180px]">
          <h3 className="font-semibold text-gray-900 text-sm mb-4 tracking-wide">Navigation</h3>
          <ul className="space-y-2">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About Us" },
              { href: "#services", label: "Our Services" },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-gray-700 text-xs hover:text-green-600 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section */}
        <div className="md:w-1/3 min-w-[280px]">
          <h3 className="font-semibold text-gray-900 text-sm mb-4 tracking-wide">Contact</h3>

          <div className="flex items-start space-x-3 mb-3">
            <img src={Phone} alt="Phone icon" className="w-4 h-4 mt-1 flex-shrink-0" />
            <p className="text-gray-700 text-xs leading-relaxed">
              (+234) 80656457524, (+234) 9057304766
            </p>
          </div>

          <div className="flex items-start space-x-3 mb-3">
            <img src={Mail} alt="Mail icon" className="w-4 h-4 mt-1 flex-shrink-0" />
            <p className="text-gray-700 text-xs leading-relaxed">
              harvesthublimited@gmail.com
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <img src={Location} alt="Location icon" className="w-4 h-4 mt-1 flex-shrink-0" />
            <p className="text-gray-700 text-xs leading-relaxed max-w-md">
              First Registrars and Investors Services, 2, Abebe Village Road, Iganmu, Surulere, Lagos
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
