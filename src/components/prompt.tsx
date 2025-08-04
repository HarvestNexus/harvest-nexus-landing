import React from "react";

const Prompt: React.FC = () => {
  return (
    <div id="Prompt" className="flex flex-col md:flex-row items-center justify-center p-20 bg-green-100 rounded-xl shadow-lg max-w-6xl mx-auto mt-10">
     
      <div className="relative mb-6 md:mb-0 md:mr-10">
        <div className="w-60 h-60 rounded-full flex items-center justify-center overflow-hidden">
          <img
            src="/images/farmer.jpg" 
            alt="Farmer with vegetables"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

  
      <div className="text-center md:text-left space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
          Subscribe to <br /> our newsletter
        </h2>
        <p className="text-gray-600 max-w-md">
          It is a long established fact that a reader will be distracted
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Handle submission 
          }}
          className="flex items-center rounded-full bg-white shadow-md p-2 w-full md:w-96"
        >
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            className="outline-none flex-1 px-4 py-2 text-gray-700"
          />
          <button
            type="submit"
            className="bg-green-400 p-3 rounded-full hover:bg-green-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Prompt;
