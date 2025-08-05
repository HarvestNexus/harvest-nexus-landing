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
    <section
      className="min-h-screen bg-white py-8 px-4 md:px-12 flex flex-col items-center justify-center space-y-8"
      style={{ fontFamily: "'Noto Sans', sans-serif" }}
    >
      <div className="w-full max-w-7xl flex flex-col items-start">
        {/* Header */}
        <div className="flex flex-col items-start gap-4 mb-2">
          <img
            src="/images/logo.jpg"
            alt="Harvest Nexus Logo"
            className="w-12 h-12 rounded-full object-cover border-2 border-green-100"
            loading="lazy"
          />
          <span className="text-xl font-semibold text-green-400">About Us</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-black mb-10 tracking-tight">
          Who We Are
        </h1>
      </div>

      {/* Mission & Vision Section with Image Grid */}
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
            src="/images/strawberry-260688_1280.jpg"
            alt="Agricultural Activity"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Image 3 */}
        <div className="md:row-span-1 rounded-xl overflow-hidden shadow-md h-48">
          <img
            src="/images/rice-field-5706429_1280.jpg"
            alt="Rice Field"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* What We Do Section */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-3xl font-extrabold text-green-400 tracking-tight">
            What We Do
          </h2>
          <p className="text-gray-700 leading-relaxed font-semibold">
            We help farmers boost productivity and sustainability through smart irrigation, precision farming, and access to modern tools. Our goal is to make agriculture more efficient, eco-friendly, and rewarding.
          </p>
        </div>
      </div>

      {/* Vision Statement with Horizontal Image */}
      <div className="mt-14 max-w-7xl w-full flex flex-col md:flex-row items-start gap-6">
        <div className="md:w-2/3 space-y-4">
          <h2 className="text-3xl font-extrabold text-green-400 tracking-tight">
            {missionStatements[1].title}
          </h2>
          <p className="text-gray-700 leading-relaxed font-semibold">
            {missionStatements[1].description}
          </p>
        </div>

        <div className="md:w-1/3 rounded-xl overflow-hidden shadow-md">
          <img
            src="/images/rice-7176354_1280.jpg"
            alt="Sustainable Farming Practices"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
