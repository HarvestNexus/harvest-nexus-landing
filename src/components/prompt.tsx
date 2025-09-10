import React, { useState } from "react";
import { Link } from "react-router-dom";

const Prompt: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(
        "https://harvestnexus-backend.onrender.com/api/newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      let data;
      try {
        data = await res.json();
      } catch {
        data = await res.text();
      }

      if (!res.ok) {
        setMessageType("error");
        setMessage(typeof data === "string" ? data : data?.message || "Error");
        return;
      }

      setMessageType("success");
      setMessage(typeof data === "string" ? data : data?.message || "Success");
      setEmail("");
    } catch (err: any) {
      setMessageType("error");
      setMessage(err.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen w-full bg-white relative flex items-center justify-center overflow-hidden font-noto">
      {/* Home Button */}
     <div className="absolute top-4 left-4 md:top-6 md:left-10 lg:left-20 z-20">
  <Link
    to="/"
    className="flex items-center space-x-2 text-green-500 hover:text-green-600"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 md:h-7 md:w-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 9.75L12 4l9 5.75M4.5 10.5v8.25a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5V10.5"
      />
    </svg>
    <span className="hidden sm:inline text-sm md:text-base font-medium">Home</span>
  </Link>
</div>


      {/* Background */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-green-400 z-0"></div>

      {/* Card Section */}
      <div className="relative border-t-4 border-green-400 z-10 flex flex-col md:flex-row items-center justify-center p-10 md:p-24 bg-green-100 rounded-xl shadow-2xl max-w-7xl w-full mx-4 md:mx-auto">
        {/* Image Section */}
        <div className="mb-8 md:mb-0 md:mr-14">
          <div className="w-72 h-90 rounded-2xl overflow-hidden flex items-center justify-center bg-white">
            <img
              src="/images/PromptFarmer.avif"
              alt="Farmer with vegetables"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text + Form Section */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-snug">
            Join Our Early Access <br />
            <span className="text-green-400 text-lg">
              Shape the future of Farming!
            </span>
          </h2>
          <p className="text-gray-600 max-w-md text-sm">
            Be the first to experience Harvest Nexus, the revolutionary
            farm-to-buyer platform. Sign up now for exclusive early access,
            fresh foods, affordable pricing, and swift deliveries.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 w-full md:w-[420px]"
          >
            <div className="flex items-center rounded-full bg-white shadow-md p-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            </div>

            {message && (
              <p
                className={`text-sm ${
                  messageType === "success" ? "text-green-400" : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
