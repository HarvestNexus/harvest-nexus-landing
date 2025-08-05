import React from "react";

const Prompt: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white relative flex items-center justify-center overflow-hidden font-noto">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-green-600 z-0"></div>

      <div className="relative border-t-4 border-green-600 z-10 flex flex-col md:flex-row items-center justify-center p-10 md:p-24 bg-green-100 rounded-xl shadow-2xl max-w-7xl w-full mx-4 md:mx-auto">
        <div className="mb-8 md:mb-0 md:mr-14">
          <div className="w-72 h-90 rounded-2xl overflow-hidden flex items-center justify-center bg-white">
            <img
              src="/images/farmer.jpg"
              alt="Farmer with vegetables"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-snug">
            Subscribe to <br /> our newsletter
          </h2>
          <p className="text-gray-600 max-w-md text-lg">
            It is a long established fact that a reader will be distracted
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex items-center rounded-full bg-white shadow-md p-2 w-full md:w-[420px]"
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              required
              className="outline-none flex-1 px-4 py-2 text-gray-700 text-base"
            />
            <button
              type="submit"
              className="bg-green-400 p-3 rounded-full hover:bg-green-500"
            >
            <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5 text-white"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth="2"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M22 2L11 13"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M22 2L15 22L11 13L2 9L22 2Z"
  />
</svg>

            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
