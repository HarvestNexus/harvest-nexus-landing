import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import './index.css';
import FarmingInnovationSection from "./components/FarmingInnovationSection";
import HeroSection from "./components/HeroSection";
import ContactForm from "./components/ContactForm";
const App: React.FC = () => {
  // sm:px-6 lg:px-8 => controls left/right padding
  return (
    <div className="min-h-screen border-4  border-green-600 sm:px-6 lg:px-8">
      <Navbar />
        <HeroSection />
        <FarmingInnovationSection />
          <ContactForm />
    </div>
  );
};

export default App;
