import React from 'react';

const AboutSection: React.FC = () => {
  const sectionClasses = "grid gap-8 md:grid-cols-2 items-center";

  return (
    <section className="px-6  mx-auto max-w-7xl space-y-20">
      {/* 🔗 Logo & Intro */}
      <header className="flex items-center gap-4 ">
        <img
          src="/images/logo.jpg"
          alt="Company Logo"
          className="w-12 h-12 rounded-full object-cover border-2 border-green-100"
          loading="lazy"
        />
        <h1 className="text-4xl font-bold text-black">Who We Are</h1>
      </header>

      {/* WHO WE ARE Header */}
{/* <header className="flex items-center gap-4 mb-[14px]">
  <img
    src="/images/logo.jpg"
    alt="Company Logo"
    className="w-12 h-12 rounded-full object-cover border-2 border-green-100"
    loading="lazy"
  />
  <h1 className="text-3xl font-bold text-gray-900
</header> */}

{/* Mission Section */}
<article className="grid gap-1 md:grid-cols-2 items-center">
  <div className="space-y-4">
    <h2 className="text-2xl font-extrabold text-green-700 tracking-tight">
      Our Mission
    </h2>
    <p className="text-gray-700 leading-relaxed font-bold " style={{fontWeight:600}}>
      To empower farmers by connecting them directly with buyers, providing access to reliable storage and logistics through a platform that ensures fair returns for every harvest.
    </p>
  </div>
  <figure className="h-50 md:h-50 w-full rounded-xl overflow-hidden shadow-lg">
    <img
      src="/images/farm-worker-happy-see-non-gmo-vegetable-plantation-crop-yields-organically-growing-fresh-healthy-way-without-using-herbicides-eco-friendly-bio-agricultural-greenhouse-farm.jpg"
      alt="Farmer working in field"
      className="w-full h-50 object-cover transition-transform duration-500 hover:scale-105"
      loading="lazy"
    />
  </figure>
</article>


      {/* 🛠️ What We Do Section */}
      <article className={sectionClasses}>
        <div className="grid grid-cols-2 gap-4">
          <figure className="rounded-xl overflow-hidden shadow-md h-48 md:h-64">
            <img
              src="/images/IMG-20250801-WA0006.jpg"
              alt="Agricultural activity"
              className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
              loading="lazy"
            />
          </figure>
          <figure className="rounded-xl overflow-hidden shadow-md h-20 md:h-40 -mt-4">
            <img
              src="/images/IMG-20250801-WA0009.jpg"
              alt="Farming tools"
              className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
              loading="lazy"
            />
          </figure>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold text-green-700">What We Do</h2>
          <p className="text-gray-700 leading-relaxed font-semibold">
             A team of young, talented individuals driven by integrity and passion,
              dedicated to transforming the agricultural industry through innovative
            solutions and best practices.
          </p>
        </div>
      </article>

      {/* 🌍 Vision Section */}
      <article className={sectionClasses}>
        <div className="space-y-1">
          <h2 className="text-2xl font-extrabold text-green-700">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To empower farmers and buyers alike by bridging the gap between agricultural producers
            and consumers,reducing losses, and fostering sustainable agriculture
            through seamless, tech-driven solutions.
          </p>
        </div>
        <figure className="h-50 md:h-50 w-full rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/IMG-20250801-WA0003.jpg"
            alt="Futuristic agricultural landscape"
            className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
            loading="lazy"
          />
        </figure>
      </article>
    </section>
  );
};

export default AboutSection;
