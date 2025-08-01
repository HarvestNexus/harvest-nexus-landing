import React from "react";
import { MdAgriculture, MdWarehouse } from "react-icons/md";
import { FaChartLine, FaTruckFast } from "react-icons/fa6";
import { FaCreditCard, FaCalendarAlt } from "react-icons/fa";
// import { FaTruckFast } from "react-icons/fa6";
import CounterUpOnView from "./CounterUpOnView"

const features = [
  {
    title: "Direct Farm-to-Buyer Sales",
    icon: <MdAgriculture size={28} className="text-green-600" />,
    description:
      "AFarmers sells produce directly to consumers, eliminating middlemen for better prices",
  },

  {
    title: "Real-Time Market Prices",
    icon: <FaChartLine size={28} className="text-green-600" />,
    description:
      "RLive pricing data helps farmers and buyers negotiate fair deals",
  },
  {
    title: "Secure Payments",
    icon: <FaCreditCard size={28} className="text-green-600" />,
    description:
      "Ecrow-based payments ensure safety for both parties",
  },
   {
    title: "Storage Provision",
    icon: <MdWarehouse size={28} className="text-green-600" />,
    description:
      "Affordable, climate-controlled storage to keep your produce fresh until sold",
  },
  {
    title: "Logistic Support",
    icon: <FaTruckFast size={28} className="text-green-600" />,
    description:
      "Integrated transport partners for  reliable delivery",
  },
  {
    title: "Subscription Plans (Optional)",
    icon: <FaCalendarAlt size={28} className="text-green-600" />,
    description:
      "Buyers can subscribe to regular harvest deliveries",
  },
];


const FarmingInnovationSection: React.FC = () => {
  return (
    <>
   <section className="w-full bg-white py-6 px-4 md:px-12">
  <div className="max-w-7xl mx-auto grid gap-10 items-center min-h-[400px] 
                  grid-cols-1 lg:grid-cols-[1fr_2fr]">
    
    {/* Left - Image with Experience Badge */}
    <div className="relative shadow-2xl w-full h-full flex rounded-xl justify-center lg:justify-start">
      <div className="relative  w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden shadow-md">
        <img 
          src="./images/farmer.jpg" 
          alt="Farmer"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-3 right-3 bg-white text-black font-semibold px-4 py-2 rounded-lg shadow-lg text-sm">
          Containing more than <span className="text-green-600 font-bold">2 decades</span> of farming experience
        </div>
      </div>
    </div>

    {/* Right - Content and Features */}
    <div className="space-y-8">
      <div>
        <h2 className="font-roboto text-3xl md:text-4xl text-gray-900">
          Farmers Earn More. Buyers Get fresher. Everyone Wins
        </h2>
        <p className="mt-4 text-gray-600">
          We are committed to empowering farmers with modern solutions, sustainable practices, and expert guidance.
          Our mission is to revolutionize agriculture by blending tradition with innovation, ensuring better yields
          and a greener future.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col rounded-xl items-start gap-2 rounded-300 px-2 py-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-secondary">
            <div>{feature.icon}</div>
            <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
            <p className="text-sm text-gray-600">{feature.description}</p>
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
      className="absolute  top-0 left-0 w-20 h-20 -translate-x-1/4 -translate-y-1/4 rotate-[180deg]"
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
