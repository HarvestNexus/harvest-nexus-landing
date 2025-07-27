import React from "react";
import { MdAgriculture, MdEco, MdSupport, MdTrendingUp } from "react-icons/md";
import CounterUpOnView from "./CounterUpOnView"

const features = [
  {
    title: "Smart Farming",
    icon: <MdAgriculture size={28} className="text-green-600" />,
    description:
      "Ace your residency interviews with confidence. We prepare you for common questions and help you present your best self to program",
  },

  {
    title: "Sustainable Practices",
    icon: <MdEco size={28} className="text-green-600" />,
    description:
      "Ace your residency interviews with confidence. We prepare you for common questions and help you present your best self to program",
  },
  {
    title: "Expert Guidance",
    icon: <MdSupport size={28} className="text-green-600" />,
    description:
      "Ace your residency interviews with confidence. We prepare you for common questions and help you present your best self to program",
  },
   {
    title: "Smart Farming",
    icon: <MdAgriculture size={28} className="text-green-600" />,
    description:
      "Ace your residency interviews with confidence. We prepare you for common questions and help you present your best self to program",
  },
  {
    title: "Innovation & Growth",
    icon: <MdTrendingUp size={28} className="text-green-600" />,
    description:
      "Ace your residency interviews with confidence. We prepare you for common questions and help you present your best self to program",
  },
  {
    title: "Sustainable Practices",
    icon: <MdEco size={28} className="text-green-600" />,
    description:
      "Ace your residency interviews with confidence. We prepare you for common questions and help you present your best self to program",
  },
];

const FarmingInnovationSection: React.FC = () => {
  return (
    <>
    <section className="w-full bg-white py-6 px-4 md:px-12 justify-center ">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[30%_60%] min-h-[400px] gap-6   items-center">
        {/* Left Side - Image & Experience */}
        <div className="flex flex-col items-center lg:items-start">
          <div className=" relative w-full h-full  rounded-xl overflow-hidden">
            <div className="w-full h-full overflow-hidden">
               
             <img src="./images/farmer.jpg" className="w-full h-full object-contain" placeholder="Farmer" />
            </div>
            <div className="absolute bottom-4 left-4 bg-white text-black font-semibold px-4 py-2 rounded-lg shadow-lg text-center">
              Containing more than <span className="text-green-600 font-bold">2 decades</span> of farming experience
            </div>
          </div>
        </div>

        {/* Right Side - Text & Features */}
        <div className="space-y-8">
          <div>
            <h2 className="font-roboto text-4xl md:text-5xl  text-gray-900">
              Cultivating Innovation in Farming
            </h2>
            <p className="mt-4 text-gray-600 ">
              We are committed to empowering farmers with modern solutions, sustainable practices, and expert guidance.
              Our mission is to revolutionize agriculture by blending tradition with innovation, ensuring better yields
              and a greener future.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div>{feature.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{feature.description}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="w-full bg-white py-10 px-4 md:px-12 justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
  {/* Card 1 */}
  <div className="gap-3 relative bg-secondary p-8 rounded-xl shadow-md flex flex-col items-center text-center">
    <img
      src="/images/leaf.png"
      alt="Leaf"
      className="absolute top-0 left-0 w-20 h-20 -translate-x-1/4 -translate-y-1/4 rotate-[180deg]"
    />
    <CounterUpOnView
    target={20}
    suffix="+ years"
    className="text-3xl text-green-600 font-roboto tabular-nums"
  />
    <p className="text-sm text-gray-600 mt-1">Farming Exp</p>
  </div>

  {/* Card 2 */}
  <div className="gap-3 relative bg-secondary p-6 rounded-xl shadow-md flex flex-col items-center text-center">
    <img
      src="/images/leaf.png"
      alt="Leaf"
      className="absolute top-0 left-0 w-20 h-20 -translate-x-1/4 -translate-y-1/4 rotate-[180deg]"
    />
    <CounterUpOnView
    target={2}
    suffix="K Acres"
    className="text-3xl text-green-600 font-roboto tabular-nums z-20"
  />
    <p className="text-sm text-gray-600 mt-1">Crops Managed</p>
    
  </div>

  {/* Card 3 */}
  <div className="gap-3 relative bg-secondary p-6 rounded-xl shadow-md flex flex-col items-center text-center">
    <img
      src="/images/leaf.png"
      alt="Leaf"
      className="absolute top-0 left-0 w-20 h-20 -translate-x-1/4 -translate-y-1/4 rotate-[180deg]"
    />
    <CounterUpOnView
    target={75}
    suffix="% Reduced"
    className="text-3xl text-green-600 font-roboto tabular-nums z-20"
  /> 
    <p className="text-sm text-gray-600 mt-1">Of water usage</p>
  </div>

  {/* Card 4 */}
  <div className="gap-3 relative bg-secondary p-6 rounded-xl shadow-md flex flex-col items-center text-center">
    <img
      src="/images/leaf.png"
      alt="Leaf"
      className="absolute top-0 left-0 w-20 h-20 -translate-x-1/4 -translate-y-1/4 rotate-[180deg] z-10"
    />
    <CounterUpOnView
    target={95}
    suffix="% Client"
    className="text-3xl text-green-600 font-roboto tabular-nums z-20"
  />
    <p className="text-sm text-gray-600 mt-1">Satisfaction rate</p>
  </div>
</div>

    </section>
    </>
  );
};

export default FarmingInnovationSection;
