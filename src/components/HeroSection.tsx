export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center px-6 py-20 font-[Poppins]">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Section */}
        <div className="w-full md:w-[55%] flex items-center justify-center flex-col text-center md:text-left">
          <h1 className="text-[28px] md:text-[48px] font-semibold leading-snug text-green-700 tracking-tight">
            Turning Harvest Into Profit
          </h1>
        </div>

        {/* Image Section (original size preserved) */}
        <div className="w-full md:w-[45%] flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="w-[6000px] h-[350px] sm:w-[1000px] sm:h-[350px] rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/farmer.jpg"
              alt="Farmer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
