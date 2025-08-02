import React from "react";
import { MdAgriculture, MdWarehouse } from "react-icons/md";
import { FaChartLine, FaTruckFast } from "react-icons/fa6";
import { FaCreditCard, FaCalendarAlt } from "react-icons/fa";
// import { FaTruckFast } from "react-icons/fa6";
// import CounterUpOnView from "./CounterUpOnView"

const features = [
  {
    title: "Direct Farm-to-Buyer Sales",
    icon: <MdAgriculture size={28} className="text-green-600" />,
    description:
      "Farmers sells produce directly to consumers, eliminating middlemen for better prices",
  },

  {
    title: "Real-Time Market Prices",
    icon: <FaChartLine size={28} className="text-green-600" />,
    description:
      "Live pricing data helps farmers and buyers negotiate fair deals",
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
    <div className="relative shadow-none md:shadow-none lg:shadow-2xl w-full h-full flex rounded-xl justify-center lg:justify-start">
      <div className="relative  w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden shadow-none md:shadow-none lg:shadow-md">
        <img 
          src="./images/farmer.jpg" 
          alt="Farmer"
          className="w-full h-full object-cover object-cover object-top"
        />
        <div className="absolute bottom-4 font-['Noto_Sans'] left-3 right-3 bg-white text-black font-semibold px-4 py-2 rounded-lg shadow-lg text-sm">
          Containing more than <span className="text-green-600 font-['Noto_Sans'] font-bold">2 decades</span> of farming experience
        </div>
      </div>
    </div>

    {/* Right - Content and Features */}
    <div className="space-y-8">
      <div>
        <h2 className="font-['Noto_Sans'] text-3xl md:text-4xl font-semibold text-black">
          Farmers Earn More. Buyers Get fresher. Everyone Wins
        </h2>
        <p className="mt-4 text-gray-600">
          {/*sub texts area*/}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col rounded-xl items-start gap-2 rounded-300 px-2 py-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-secondary">
            <div className="text-green-400">{feature.icon}</div>
            <h4 className="text-lg font-semibold text-gray-900 font-['Noto_Sans']">{feature.title}</h4>
            <p className="text-sm text-gray-600 font-['Noto_Sans']">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default FarmingInnovationSection;
