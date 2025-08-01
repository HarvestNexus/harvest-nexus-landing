import { useEffect, useState, useRef } from "react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function HeroSection() {
  const images = ["/images/slide.jpg", "/images/slide2.jpg", "/images/slide3.jpg"];
  const constantText =
    "We bridge the gap between farmers and buyers making fresh produce more affordable and reducing post-harvest losses.";

  const [index, setIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement | null>(null);
  const fadeRef = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "Turning  Harvest Into Profits";

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
    if (fadeRef.current) {
      fadeRef.current.classList.add("-translate-x-full", "opacity-0");
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        fadeRef.current?.classList.remove("-translate-x-full");
        fadeRef.current?.classList.add("translate-x-0", "opacity-100");
      }, 400);
    }
  };

  const handlePrev = () => {
    if (fadeRef.current) {
      fadeRef.current.classList.add("translate-x-full", "opacity-0");
      setTimeout(() => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
        fadeRef.current?.classList.remove("translate-x-full");
        fadeRef.current?.classList.add("translate-x-0", "opacity-100");
      }, 400);
    }
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
    <section className="w-full min-h-screen font-['Noto_Sans'] bg-white text-black flex flex-col items-center justify-center px-4 sm:px-6 py-20 gap-20">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-[55%] flex items-center justify-center flex-col text-center md:text-left">
          <h1 className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[68px] font-semibold leading-snug tracking-tight text-black">
            {typewriterText}
          </h1>
          <p className="text-lg sm:text-xl mt-6 text-black font-medium max-w-2xl">
            {constantText}
          </p>
        </div>
        <div className="w-full md:w-[45%] flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="w-[90%] sm:w-[450px] md:w-[500px] lg:w-[600px] h-[250px] sm:h-[300px] md:h-[350px] rounded-xl overflow-hidden shadow-xl">
            <img
              src="/images/farmer2.jpg"
              alt="Farmer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div
        ref={slideRef}
        className={`relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-1000 ease-in-out ${
          animate ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="group relative rounded-xl overflow-hidden shadow-2xl w-full md:w-[100%] h-[350px] sm:h-[400px] md:h-[450px] transition-all duration-700">
          <div
            ref={fadeRef}
            className="absolute inset-0 w-full h-full transition-all duration-700 ease-in-out translate-x-0 opacity-100"
          >
            <img
              src={images[index]}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 z-10 transition duration-500" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-6">
          <div className="flex flex-row items-center justify-center gap-10 mt-6">
            <div className="flex flex-col items-center space-y-6">
              <button
                onClick={handlePrev}
                className="bg-gray-100 hover:bg-green-200 p-5 rounded-full transition duration-300 text-black shadow-md hover:scale-110"
              >
                ↑
              </button>
              <button
                onClick={handleNext}
                className="bg-gray-100 hover:bg-green-200 p-5 rounded-full transition duration-300 text-black shadow-md hover:scale-110"
              >
                ↓
              </button>
            </div>

            <div className="flex flex-col items-center ml-6">
              <div className="flex flex-col items-center font-bold text-sm leading-tight tracking-widest text-black">
                {"FOLLOW US ON".split("").map((char, idx) => (
                  <span key={idx}>{char}</span>
                ))}
              </div>
              <div className="flex flex-col items-center space-y-4 text-2xl text-black mt-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-600 transition-colors duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-600 transition-colors duration-300"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
