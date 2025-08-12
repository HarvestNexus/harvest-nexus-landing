import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import "./index.css";
import FarmingInnovationSection from "./components/FarmingInnovationSection";
import Footer from './components/Footer';
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ContactForm from "./components/ContactForm";
import Prompt from "./components/prompt";
import OurServices from "./components/OurServices";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/Prompt");
  };

  return (
    <>
      <Navbar onJoinClick={handleJoinClick} />
      <HeroSection />
      <FarmingInnovationSection />
      <AboutSection />
      <OurServices />
      <ContactForm />
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen border-b-8 border-l-8 border-r-8 border-green-400 sm:px-8 lg:px-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Prompt" element={<><Navbar onJoinClick={() => {}} /><Prompt /></>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
