// components/Hero.tsx

import { FaFacebookF } from 'react-icons/fa'

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen px-4 sm:px-8 py-12 bg-white flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-8 relative">
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-black">
            Innovating<br />Farming
          </h1>

          {/* Large Green Image */}
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="/images/lettuce.jpg"
              alt="Lettuce"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center lg:items-end justify-between h-full gap-8">
          {/* Portrait Image */}
          <div className="w-full lg:w-72 rounded-xl overflow-hidden shadow-md">
            <img
              src="/images/farmer.jpg"
              alt="Farmer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Scroll Button and Socials */}
          <div className="flex flex-col items-center gap-6 mt-10">
            <button className="w-10 h-10 bg-gray-100 rounded-full shadow hover:bg-gray-200 transition">
              <span className="block text-lg">↑</span>
            </button>

            <div className="rotate-90 text-gray-600 text-sm">Follow us on</div>

            <div className="flex flex-col gap-2">
              <a href="#" className="text-green-700 hover:text-green-800 transition">
                <FaFacebookF size={20} />
              </a>
              {/* Add more icons here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
