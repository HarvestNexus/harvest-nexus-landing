import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { FaXTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa6";

interface FormData {
  Name: string;
  email: string;
  phone: string;
  Address: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    Name: "",
    email: "",
    phone: "",
    Address: "",
    message: ""
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      // Fix: Send keys in lowercase to match backend expectations
      const payload = {
        name: formData.Name,
        email: formData.email,
        phone: formData.phone,
        address: formData.Address,
        message: formData.message,
      };

      const res = await fetch(
        "https://harvestnexus-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();
      setResponseMessage(data.message || "Message sent successfully!");

      if (res.ok) {
        setFormData({
          Name: "",
          email: "",
          phone: "",
          Address: "",
          message: "",
        });
      }
    } catch (error) {
      setResponseMessage("Failed to send message. Please try again later.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-12 flex flex-col items-center" id="contact">
      <h1 className="text-4xl font-semibold mb-8 text-center">Contact Us</h1>

      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl bg-gray-100 rounded-2xl shadow-md p-8">
        <div className="w-full lg:w-2/3">
          <h2 className="text-xl font-medium mb-6">Get in touch!</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="Name"
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={formData.Name}
              onChange={handleChange}
              required
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              name="Address"
              type="text"
              placeholder="Address"
              className="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={formData.Address}
              onChange={handleChange}
            />

            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              className="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-green-400 text-white rounded-full hover:bg-green-700 transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {responseMessage && (
              <p className="text-sm mt-2 text-gray-700">{responseMessage}</p>
            )}
          </form>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-1/3">
          <h2 className="text-2xl font-semibold text-black-700">Connect With Us</h2>
          <p className="text-gray-600 text-center lg:text-left">
            Reach out via social or send us a message.
          </p>

          <div className="flex flex-row flex-wrap justify-center lg:flex-col gap-4 text-lg text-black-700">
            <a
              href="https://twitter.com/harvestnexus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-400 transition"
            >
              <FaXTwitter className="text-xl" />
              <span className="hidden lg:inline">@harvestnexus</span>
            </a>

            <a
              href="https://www.linkedin.com/company/harvest-nexus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-400 transition"
            >
              <FaLinkedin className="text-xl" />
              <span className="hidden lg:inline">Harvest Nexus</span>
            </a>

            <a
              href="mailto:harvesthublimited@gmail.com"
              className="flex items-center gap-2 hover:text-green-400 transition"
            >
              <FaEnvelope className="text-xl" />
              <span className="hidden lg:inline">harvesthublimited@gmail.com</span>
            </a>

            <span className="text-lg italic font-medium hover:text-green-400">
              We respond within 24 hours
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
