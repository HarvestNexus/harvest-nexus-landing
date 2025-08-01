import React from 'react';

const missionStatements = [
  {
    title: 'Our Mission',
    description:
      'To empower farmers by connecting them directly with buyers, providing access to reliable storage and logistics through a platform that ensures fair returns for every harvest.',
  },
  {
    title: 'Our Vision',
    description:
      'We aim to reduce post-harvest losses and foster sustainable agriculture through seamless, tech-driven solutions that bridge the gap between producers and consumers.',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-white py-8 px-4 md:px-12 flex flex-col items-start">
{/* Header Row */}
      <div className="flex items-center gap-4 mb-2">
        <img
          src="/images/logo.jpg"
          alt="Harvest Nexus Logo"
          className="w-12 h-12 rounded-full object-cover border-2 border-green-100"
          loading="lazy"
        />
        <span className="text-xl font-semibold text-green-400">About Us</span>
      </div>
{/* Title */}
      <h1 className="text-4xl font-extrabold text-black mb-10 tracking-tight font-['Noto Sans']">
        Who We Are
      </h1>
      

      {/* 🌿 Mission & Vision Sections with Image Grid */}
      <div className="max-w-7xl w-full grid md:grid-cols-3 gap-6">
        {/* Mission Statement */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-3xl font-extrabold text-green-400 tracking-tight">
            {missionStatements[0].title}
          </h2>
          <p className="text-gray-700 leading-relaxed font-semibold">
            {missionStatements[0].description}
          </p>
        </div>

        {/* Image 1 */}
        <div className="md:row-span-2 rounded-xl overflow-hidden shadow-md">
          <img
            src="/images/farm-worker-happy-see-non-gmo-vegetable-plantation-crop-yields-organically-growing-fresh-healthy-way-without-using-herbicides-eco-friendly-bio-agricultural-greenhouse-farm.jpg"
            alt="Empowered farmer"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Image 2 */}
        <div className="md:row-span-2 rounded-xl overflow-hidden shadow-md">
          <img
            src="/images/IMG-20250801-WA0006.jpg"
            alt="Agricultural Activity"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Image 3 */}
        {/* Middle Image – horizontal layout */}
<div className="md:row-span-1 rounded-xl overflow-hidden shadow-md h-48">
  <img
    src="/images/IMG-20250801-WA0009.jpg"
    alt="Agricultural Activity"
    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
    loading="lazy"
  />
</div>


        {/* Vision Statement */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-3xl font-extrabold text-green-400 tracking-tight font-['Noto Sans']">
            {missionStatements[1].title}
          </h2>
          <p className="text-gray-700 leading-relaxed font-semibold">
            {missionStatements[1].description}
          </p>
        </div>
      </div>
      
      {/* What We Do Section
      <div className="mt-12 space-y-6 max-w-4xl">
        <h2 className="text-3xl font-extrabold text-green-700">What We Do</h2>
        <p className="text-gray-700 leading-relaxed font-semibold">
          We provide comprehensive solutions designed to help farmers maximize their yields, enhance efficiency, and adopt environmentally responsible practices. Our approach includes precision farming techniques, smart irrigation systems, soil health management, and access to cutting-edge agricultural equipment. We are committed to creating a future where farming is not just a livelihood but a thriving and sustainable profession that benefits both people and the planet.
        </p>
      </div> */}
    </section>
  );
};

export default AboutSection;
