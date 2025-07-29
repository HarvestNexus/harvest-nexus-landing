import { useEffect, useState, useRef } from "react";

export default function HeroSection() {
  const images = ["/images/slide.jpg", "/images/slide2.jpg", "/images/slide3.jpg"];
  const texts = [
    "FRESHLY GROWN CROPS FROM SUSTAINABLE FARMS",
    "EMPOWERING LOCAL FARMERS WITH DIGITAL TOOLS",
    "CONNECTING HARVESTS TO MARKETS EFFORTLESSLY",
  ];
  const [index, setIndex] = useState(0);
  const slideRef = useRef();
  const fadeRef = useRef();
  const [animate, setAnimate] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "TURNING HARVEST INTO PROFIT";

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  const handleNext = () => {
    fadeRef.current.classList.add("-translate-x-full", "opacity-0");
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
      fadeRef.current.classList.remove("-translate-x-full");
      fadeRef.current.classList.add("translate-x-0", "opacity-100");
    }, 400);
  };

  const handlePrev = () => {
    fadeRef.current.classList.add("translate-x-full", "opacity-0");
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
      fadeRef.current.classList.remove("translate-x-full");
      fadeRef.current.classList.add("translate-x-0", "opacity-100");
    }, 400);
  };

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setTypewriterText(fullText.substring(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(typingInterval);
      }
    }, 80);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-6 py-20 font-[Poppins] gap-20">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-[55%] flex items-center justify-center flex-col text-center md:text-left">
          <h1 className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[68px] font-semibold leading-snug text-green-700 tracking-tight">
            {typewriterText}
          </h1>
        </div>
        <div className="w-full md:w-[45%] flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="w-[90%] sm:w-[450px] md:w-[500px] lg:w-[600px] h-[250px] sm:h-[300px] md:h-[350px] rounded-xl overflow-hidden shadow-xl">
            <img
              src="/images/farmer.jpg"
              alt="Farmer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div
        ref={slideRef}
        className={`relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-1000 ease-in-out ${animate ? "opacity-100" : "opacity-0"}`}
      >
        <div className="relative rounded-xl overflow-hidden shadow-2xl w-full md:w-[90%] h-[350px] sm:h-[400px] md:h-[450px]">
          <div
            ref={fadeRef}
            className="absolute inset-0 w-full h-full transition-all duration-700 ease-in-out translate-x-0 opacity-100"
          >
            <img
              src={images[index]}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="absolute inset-0 flex items-center justify-center px-6 z-20">
              <div className="text-green-500 px-6 py-4 rounded-lg text-xl sm:text-3xl md:text-5xl font-bold text-center shadow-lg">
                {texts[index]}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <button
            onClick={handlePrev}
            className="bg-gray-100 hover:bg-green-200 p-5 rounded-full transition duration-300"
          >
            ↑
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-100 hover:bg-green-200 p-5 rounded-full transition duration-300"
          >
            ↓
          </button>
        </div>
      </div>
    </section>
  );
}
